const express = require("express");
const fs = require("fs");
const qrcode = require("qrcode");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 5000;
module.exports = (client) => {
  try {
    let lastqr = false;
    client.version = [2, 2143, 3];
    client.logger.level = "warn";

    client.on("qr", (qr) => {
      qrcode.toDataURL(qr, function (err, url) {
        lastqr = url;
        io.emit("qr", lastqr);
      });
    });
    fs.existsSync("./simi.json") && client.loadAuthInfo("./simi.json");

    client.on("open", () => {
      io.emit("con", { jid: client.user.jid });
      lastqr = false;
    });
    client.on("close", () => io.emit("close", "IDLE"));
    io.on("connection", () => io.emit("config", global.configs));
    io.on("connection", (socket) =>
      lastqr
        ? io.emit("qr", lastqr)
        : io.emit("con", { jid: client.user ? client.user.jid : false })
    );
    app.use(express.static("public"));
    server.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  } catch {}
};
