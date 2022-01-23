const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  processTime,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
api = "https://myselfff.herokuapp.com/docs";
const { color, bgcolor } = require("./X2/color");
const {
  wait,
  simih,
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./X2/functions");
const { fetchJson, fetchText } = require("./X2/fetcher");
const fs = require("fs");
const fetch = require("node-fetch");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const moment = require("moment-timezone");
const setting = JSON.parse(fs.readFileSync("./X1/settings.json"));
prefix = setting.prefix;
nama = setting.nama;
prosess = setting.prosess;
donasi = setting.donasi;
dana = setting.dana;
gopay = setting.gopay;
pulsa = setting.pulsa;
namabot = setting.namabot;
oownerNumber = setting.oownerNumber;
tz = `❏`;
blocked = [];
let antilink = JSON.parse(fs.readFileSync("./X2/antilink.json"));
let antivirtex = JSON.parse(fs.readFileSync("./X2/antivirtex.json"));
conmenu = fs.readFileSync("./X2/rimurubotz.jpeg");
xrandom = fs.readFileSync("./X2/xrandom.webp");
zrandom = fs.readFileSync("./X2/zrandom.webp");
audio1 = fs.readFileSync("./X3/nayla1.m4a");
audio2 = fs.readFileSync("./X3/nayla2.m4a");
audio3 = fs.readFileSync("./X3/nayla3.m4a");
audio4 = fs.readFileSync("./X3/nayla4.m4a");
audio5 = fs.readFileSync("./X3/nayla5.m4a");
audio6 = fs.readFileSync("./X3/nayla6.m4a");
audio7 = fs.readFileSync("./X3/nayla7.m4a");
audio8 = fs.readFileSync("./X3/nayla8.m4a");
audio9 = fs.readFileSync("./X3/nayla9.m4a");
audio10 = fs.readFileSync("./X3/nayla10.m4a");
audio11 = fs.readFileSync("./X3/nayla11.m4a");
audio12 = fs.readFileSync("./X3/nayla12.m4a");
audio13 = fs.readFileSync("./X3/nayla13.m4a");
audio14 = fs.readFileSync("./X3/nayla14.m4a");
audio15 = fs.readFileSync("./X3/nayla15.m4a");
audio16 = fs.readFileSync("./X3/nayla16.m4a");
audio17 = fs.readFileSync("./X3/nayla17.m4a");
audio18 = fs.readFileSync("./X3/nayla18.m4a");
audio19 = fs.readFileSync("./X3/nayla19.m4a");
audio20 = fs.readFileSync("./X3/nayla20.m4a");
function kyun(seconds) {
  function pad(s) {
    return (s < 10 ? "0" : "") + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor((seconds % (60 * 60)) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}
async function starts() {
  const nayla = new WAConnection();
  require("./app")(nayla);
  await nayla.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync(
    "./simi.json",
    JSON.stringify(nayla.base64EncodedAuthInfo(), null, "\t")
  );
  nayla.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
  nayla.on("group-participants-update", async (anu) => {
    function getJeneng(jid) {
      let v =
        jid === nayla.user.jid
          ? nayla.user
          : nayla.contacts[jid] || { notify: jid.replace(/@.+/, "") };
      let PhoneNumber = jid.split("@")[0];
      return v.notify || "+" + PhoneNumber;
    }
    const memJid = anu.participants[0];
    const pushnem = getJeneng(memJid);
    try {
      const mdata = await nayla.groupMetadata(anu.jid);
      const iniGc = anu.jid.endsWith("@g.us");
      const jumlahMem = iniGc ? mdata.participants : "";
      if (anu.action == "add") {
        let nnnyz2 = fs.readFileSync(`X2/welcome.jpeg`);
        const nnnyz3 = await nayla.prepareMessage(
          mdata.id,
          nnnyz2,
          MessageType.location,
          { thumbnail: nnnyz2 }
        );
        let nnnyz4 = nnnyz3.message["ephemeralMessage"]
          ? nnnyz3.message.ephemeralMessage
          : nnnyz3;
        const nnnyz5 = [
          { buttonId: "id1", buttonText: { displayText: "WELCOME" }, type: 1 },
        ];
        const nnnyz6 = {
          contentText: `[ *SELAMAT DATANG* ]\n${tz} *NAME* : @${
            memJid.split("@")[0]
          }\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${
            jumlahMem.length
          }`,
          footerText: `© botz by ${nama} || 2022`,
          buttons: nnnyz5,
          headerType: 6,
          locationMessage: nnnyz4.message.locationMessage,
        };
        nayla.sendMessage(mdata.id, nnnyz6, MessageType.buttonsMessage, {
          caption: "whatsapp",
          contextInfo: {
            text: "BOTZ16",
            forwardingScore: 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            mentionedJid: [memJid],
          },
          sendEphemeral: true,
        });
      }
      if (anu.action == "remove") {
        let nnnyz2 = fs.readFileSync(`X2/out.jpeg`);
        const nnnyz3 = await nayla.prepareMessage(
          mdata.id,
          nnnyz2,
          MessageType.location,
          { thumbnail: nnnyz2 }
        );
        let nnnyz4 = nnnyz3.message["ephemeralMessage"]
          ? nnnyz3.message.ephemeralMessage
          : nnnyz3;
        const nnnyz5 = [
          { buttonId: "id1", buttonText: { displayText: "BYEEEE" }, type: 1 },
        ];
        const nnnyz6 = {
          contentText: `[ *SELAMAT TINGGAL* ]\n${tz} *NAME* : @${
            memJid.split("@")[0]
          }\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${
            jumlahMem.length
          }`,
          footerText: `© botz by ${nama} || 2022`,
          buttons: nnnyz5,
          headerType: 6,
          locationMessage: nnnyz4.message.locationMessage,
        };
        nayla.sendMessage(mdata.id, nnnyz6, MessageType.buttonsMessage, {
          caption: "whatsapp",
          contextInfo: {
            text: "BOTZ16",
            forwardingScore: 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            mentionedJid: [memJid],
          },
          sendEphemeral: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  });
  nayla.on("chat-update", async (nay) => {
    try {
      if (!nay.hasNewMessage) return;
      nay = nay.messages.all()[0];
      if (!nay.message) return;
      if (nay.key && nay.key.remoteJid == "status@broadcast") return;
      //	if (nay.key.fromMe) return
      global.prefix;
      global.blocked;
      runtime = process.uptime();
      const content = JSON.stringify(nay.message);
      const from = nay.key.remoteJid;
      nayla.chatRead(from);
      const type = Object.keys(nay.message)[0];
      const {
        text,
        extendedText,
        contact,
        location,
        liveLocation,
        image,
        video,
        sticker,
        document,
        audio,
        product,
      } = MessageType;
      const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
      body =
        type === "conversation" && nay.message.conversation.startsWith(prefix)
          ? nay.message.conversation
          : type == "imageMessage" &&
            nay.message.imageMessage.caption.startsWith(prefix)
          ? nay.message.imageMessage.caption
          : type == "videoMessage" &&
            nay.message.videoMessage.caption.startsWith(prefix)
          ? nay.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            nay.message.extendedTextMessage.text.startsWith(prefix)
          ? nay.message.extendedTextMessage.text
          : "";
      budy =
        type === "conversation"
          ? nay.message.conversation
          : type === "extendedTextMessage"
          ? nay.message.extendedTextMessage.text
          : "";
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
      const args = body.trim().split(/ +/).slice(1);
      var pes =
        type === "conversation" && nay.message.conversation
          ? nay.message.conversation
          : type == "imageMessage" && nay.message.imageMessage.caption
          ? nay.message.imageMessage.caption
          : type == "videoMessage" && nay.message.videoMessage.caption
          ? nay.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            nay.message.extendedTextMessage.text
          ? nay.message.extendedTextMessage.text
          : "";
      const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase();
      const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase();
      const isCmd = body.startsWith(prefix);
      const nayNumber = nayla.user.jid;
      const ownerNumber = [`${oownerNumber}@s.whatsapp.net`];
      const isGroup = from.endsWith("@g.us");
      const sender = isGroup ? nay.participant : nay.key.remoteJid;
      const groupMetadata = isGroup ? await nayla.groupMetadata(from) : "";
      const groupName = isGroup ? groupMetadata.subject : "";
      const groupId = isGroup ? groupMetadata.jid : "";
      const groupMembers = isGroup ? groupMetadata.participants : "";
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
      const isnayGroupAdmins = groupAdmins.includes(nayNumber) || false;
      const groupDesc = isGroup ? groupMetadata.desc : "";
      const isGroupAdmins = groupAdmins.includes(sender) || false;
      const isOwner = ownerNumber.includes(sender);
      const isBotGroupAdmins = groupAdmins.includes(nayNumber) || false;
      emote = [
        "😁",
        "😆",
        "😉",
        "😋",
        "😎",
        "😍",
        "😘",
        "🥴",
        "🤩",
        "🤪",
        "🤫",
        "😗",
        "😚",
        "☺",
        "🙂",
        "🤗",
        "🤥",
        "🤔",
        "😐",
        "😣",
        "😮",
        "😝",
        "🙃",
        "😲",
        "😤",
        "☹️",
        "😦",
        "😬",
        "😳",
        "😡",
      ];
      const emoji = emote[Math.floor(Math.random() * emote.length)];
      codename =
        nayla.contacts[sender] != undefined
          ? nayla.contacts[sender].vname || nayla.contacts[sender].notify
          : undefined;
      buttonsR =
        type === "buttonsResponseMessage"
          ? nay.message.buttonsResponseMessage.selectedDisplayText
          : "" || "";
      nay1 = {
        key: {
          fromMe: false,
          participant: `0@s.whatsapp.net`,
          ...(from ? { remoteJid: "status@broadcast" } : {}),
        },
        message: {
          extendedTextMessage: {
            text: `${nama} TELAH TERVERIFIKASI\nRUNTIME : ${kyun(
              runtime
            )} [ EMOTE : ${emoji} ]`,
            contextInfo: { participant: `0@s.whatsapp.net` },
          },
        },
      };
      nayz1 = {
        key: {
          fromMe: false,
          participant: `0@s.whatsapp.net`,
          ...(from ? { remoteJid: "status@broadcast" } : {}),
        },
        message: {
          extendedTextMessage: {
            text: `${tz} FITUR : *${command}* [ EMOTE : ${emoji} ]`,
            contextInfo: { participant: `0@s.whatsapp.net` },
          },
        },
      };
      const isUrl = (url) => {
        return url.match(
          new RegExp(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
            "gi"
          )
        );
      };
      const reply = (teks) => {
        nayla.sendMessage(from, teks, text, { quoted: nay1 });
      };
      const Reply = (teks) => {
        nayla.sendMessage(from, teks, text, { quoted: nayz1 });
      };
      const random = (teks) => {
        nayla.sendMessage(
          from,
          `[ *SILAHKAN MASUKAN TEXT* ]\n${tz} *CONTOH* : ${
            prefix + command
          } ${teks}`,
          text,
          { quoted: nay1 }
        );
      };
      const sendMess = (hehe, teks) => {
        nayla.sendMessage(hehe, teks, text, { quoted: nay1 });
      };
      const sendAudio = (teks) => {
        nayla.sendMessage(from, teks, audio, {
          mimetype: "audio/mp4",
          thumbnail: Buffer.alloc(0),
          quoted: nay1,
        });
      };
      const sendVn = (teks) => {
        nayla.sendMessage(from, teks, audio, {
          mimetype: "audio/mp4",
          ptt: true,
          quoted: nay1,
        });
      };
      const sendImage = (teks, teks1) => {
        nayla.sendMessage(from, teks, image, {
          caption: teks1,
          quoted: nay1,
          thumbnail: Buffer.alloc(0),
        });
      };
      const sendVideo = (teks, teks1) => {
        nayla.sendMessage(from, teks, video, {
          caption: teks1,
          thumbnail: Buffer.alloc(0),
          quoted: nay1,
        });
      };
      const sendStick = (teks) => {
        nayla.sendMessage(from, teks, sticker, { quoted: nay1 });
      };
      const timers = (teks) => {
        setTimeout(() => {
          reply("[❗] 20 DETIK LAGI");
        }, 10000);
        setTimeout(() => {
          reply("[❗] 10 DETIK LAGI");
        }, 20000);
        setTimeout(() => {
          reply("[❗] WAKTU HABIS" + `\n${tz} *JAWABAN* : ${teks}`);
        }, 30000);
      };
      const mentions = (teks, memberr, id) => {
        id == null || id == undefined || id == false
          ? nayla.sendMessage(from, teks.trim(), extendedText, {
              contextInfo: { mentionedJid: memberr },
            })
          : nayla.sendMessage(from, teks.trim(), extendedText, {
              quoted: nay1,
              contextInfo: { mentionedJid: memberr },
            });
      };
      colors = ["red", "white", "black", "blue", "yellow", "green"];
      const isMedia = type === "imageMessage" || type === "videoMessage";
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      aq = args.join(" ");
      MessReply = {
        textpro: `[ *SILAHKAN MASUKAN TEXT* ]\n${tz} *CONTOH* : ${
          prefix + command
        } HALO`,
      };
      angka = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const randomnay1 = angka[Math.floor(Math.random() * angka.length)];
      const randomnay2 = angka[Math.floor(Math.random() * angka.length)];
      const mentionByTag =
        type == "extendedTextMessage" &&
        nay.message.extendedTextMessage.contextInfo != null
          ? nay.message.extendedTextMessage.contextInfo.mentionedJid
          : [];
      const mentionByReply =
        type == "extendedTextMessage" &&
        nay.message.extendedTextMessage.contextInfo != null
          ? nay.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      const mention =
        typeof mentionByTag == "string" ? [mentionByTag] : mentionByTag;
      mention != undefined ? mention.push(mentionByReply) : [];
      const isAntiLink = isGroup ? antilink.includes(from) : false;
      const isAntiVirtex = isGroup ? antivirtex.includes(from) : false;
      const mentionUser = mention != undefined ? mention.filter((n) => n) : [];
      // REPLY ONLY
      only = {
        botadmin: "MAAF FITUR INI HANYA BISA DIGUNAKAN JIKA BOT MENJADI ADMIN",
        group: "MAAF FITUR INI HANYA BISA DIGUNAKAN DI GROUP",
        admin: "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GROUP",
        owner: "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER BOT",
        member: "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH MEMBER GROUP",
        pribadi: "MAAF FITUR INI HANYA BISA DIGUNAKAN DIPESAN PRIBADI",
        nsfw:
          "MODE NSFW DI NONAKTIF DI GRUB INI, CARA MENGAKTIFKAN? SURUH/PERINTAH ADMIN UNTUK MENGGUNAKAN COMMAND" +
          `${prefix}nsfw`,
      };
      codename =
        nayla.contacts[sender] != undefined
          ? nayla.contacts[sender].vname || nayla.contacts[sender].notify
          : undefined;
      if (!isGroup && isCmd)
        console.log(
          "\x1b[1;31m=\x1b[1;37m>",
          "[\x1b[1;32m=>\x1b[1;37m]",
          color(`[ ${namabot} ]`, "yellow"),
          color("NAMA", "red"),
          color(codename, "yellow"),
          color("SEDANG", "white"),
          color("MENGGUNAKAN", "yellow"),
          color("FITUR", "red"),
          color("=>", "yellow"),
          color(command),
          "DI :",
          color("PESAN PRIBADI", "yellow")
        );
      if (isCmd && isGroup)
        console.log(
          "\x1b[1;31m=\x1b[1;37m>",
          "[\x1b[1;32m=>\x1b[1;37m]",
          color(`[ ${namabot} ]`, "yellow"),
          color("NAMA", "red"),
          color(codename, "yellow"),
          color("SEDANG", "white"),
          color("MENGGUNAKAN", "yellow"),
          color("FITUR", "red"),
          color("=>", "yellow"),
          color(command),
          "DI :",
          color(groupName, "yellow")
        );
      // BUTTON
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        `FN:${nama}\n` +
        "ORG:Owner;\n" +
        `TEL;type=CELL;type=VOICE;waid=${oownerNumber}:+${oownerNumber}\n` +
        "END:VCARD";
      if (buttonsR === "PENDAPAT") {
        const A1 = [
          { buttonId: "id1", buttonText: { displayText: `IYAA` }, type: 1 },
          { buttonId: "id2", buttonText: { displayText: `TIDAK` }, type: 1 },
        ];
        const B1 = {
          contentText: "APAKAH ANDA MENYUKAI BOT INI?",
          footerText: `Berikan pendapat anda...`,
          buttons: A1,
          headerType: 1,
        };
        nayla.sendMessage(from, B1, MessageType.buttonsMessage, {
          quoted: nay1,
        });
      }
      if (buttonsR === "TIDAK") {
        reply("TERIMAKASIH TELAH MEMBERIKAN PENDAPAT ANDA TENTANG BOT INI");
        nayla.sendMessage(
          `${oownerNumber}@s.whatsapp.net`,
          `[ *NEW MESSAGE* ]\n${tz} *NAME* : ${codename}\n${tz} *TIME* : ${time}\n${tz} *PENDAPAT* : TIDAK MENYUKAI BOT INI`,
          text,
          { quoted: nay1 }
        );
      }
      if (buttonsR === "IYAA") {
        reply("TERIMAKASIH TELAH MEMBERIKAN PENDAPAT ANDA TENTANG BOT INI");
        nayla.sendMessage(
          `${oownerNumber}@s.whatsapp.net`,
          `[ *NEW MESSAGE* ]\n${tz} *NAME* : ${codename}\n${tz} *TIME* : ${time}\n${tz} *PENDAPAT* : SANGAT MENYUKAI BOT INI`,
          text,
          { quoted: nay1 }
        );
      }
      if (buttonsR === "DONASI") {
        dnasi = `${donasi}\n${tz} *PULSA* : ${pulsa}\n${tz} *GOPAY* : ${gopay}\n${tz} *DANA* : ${dana}`;
        reply(dnasi);
      }
      if (buttonsR === "OWNERBOT") {
        nayla.sendMessage(
          from,
          { displayname: "Jeff", vcard: vcard },
          MessageType.contact,
          { quoted: nay1 }
        );
        reply("TUH NUMBER OWNERKU");
      }
      const txt = nay.message.conversation;
      switch (command) {
        // GROUPMENU
        case "antivirtext":
        case "antivirtex":
          if (!isGroup) return reply(mess.only.group);
          if (!isGroupAdmins) return reply(mess.only.admin);
          if (!isBotGroupAdmins) return reply(mess.only.Badmin);
          if (args.length < 1)
            return reply(
              `𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`
            );
          if (args[0] === "on") {
            if (isAntiVirtex)
              return reply("𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚");
            antivirtex.push(from);
            fs.writeFileSync(
              "./X2/antivirtex.json",
              JSON.stringify(antivirtex)
            );
            reply(`𝐒𝐮𝐤𝐬𝐞𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`);
          } else if (args[0] === "off") {
            if (!isAntiVirtex)
              return reply("𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐡𝐚");
            antivirtex.splice(from, 1);
            fs.writeFileSync(
              "./X2/antivirtex.json",
              JSON.stringify(antivirtex)
            );
            reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`);
          } else {
            reply(
              `𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`
            );
          }
          break;
        case "antilink":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          if (args.length < 1)
            return reply(
              `𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`
            );
          if (args[0] === "on") {
            if (isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`);
            antilink.push(from);
            fs.writeFileSync("./X2/antilink.json", JSON.stringify(antilink));
            reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`);
          } else if (args[0] === "off") {
            if (!isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐨𝐟𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`);
            antilink.splice(from, 1);
            fs.writeFileSync("./X2/antilink.json", JSON.stringify(antilink));
            reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`);
          } else {
            reply(
              `𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}antilink off`
            );
          }
          break;
        case "kick":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          if (!isGroup) {
            if (
              nay.message.extendedTextMessage === undefined ||
              nay.message.extendedTextMessage === null
            )
              return;
            mentioned =
              nay.message.extendedTextMessage.contextInfo.mentionedJid;
            mentions(mentioned, true);
            nayla.groupRemove(from, mentioned);
          } else {
            await nayla.groupRemove(from, mentionUser);
            reply(`SUCCESS`);
          }
          break;
        case "linkprev":
          fetch(`${args[0]}`)
            .then((res) => res.text())
            .then((bu) => {
              reply(bu);
            });
          break;
        case "add":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          if (args.length < 1) return reply("NOMER NYA MANA");
          if (args[0].startsWith("08")) return reply("GUNAKAN KODE NEGARA!");
          try {
            num = `${args[0].replace(/ /g, "")}@s.whatsapp.net`;
            nayla.groupAdd(from, [num]);
          } catch (e) {
            console.log("Error :", e);
            reply("GAGAL MENAMBAHKAN TARGET, MUNGKIN KARENA DI PRIVATE");
          }
          break;
        case "listonline":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from;
          let online = [
            ...Object.keys(nayla.chats.get(ido).presences),
            nayla.user.jid,
          ];
          nayla.sendMessage(
            from,
            "LIST ONLINE:\n" +
              online.map((v) => "- @" + v.replace(/@.+/, "")).join`\n`,
            text,
            { quoted: nay1, contextInfo: { mentionedJid: online } }
          );
          break;
        case "group":
        case "grub":
        case "grup":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          if (args[0] === "buka") {
            reply(`*BERHASIL MEMBUKA GROUP*`);
            nayla.groupSettingChange(
              from,
              GroupSettingChange.messageSend,
              false
            );
          } else if (args[0] === "tutup") {
            reply(`*BERHASIL MENUTUP GROUP*`);
            nayla.groupSettingChange(
              from,
              GroupSettingChange.messageSend,
              true
            );
          }
          break;
        case "setname":
          if (args.length < 1) return random("MYGRUB");
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          nayla.groupUpdateSubject(from, `${body.slice(9)}`);
          nayla.sendMessage(from, "SUCCES, GANTI NAMA GRUP", text, {
            quoted: nay1,
          });
          break;
        case "setdesc":
          if (args.length < 1) return random(`SELAMAT DATANG`);
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          nayla.groupUpdateDescription(from, `${body.slice(9)}`);
          nayla.sendMessage(from, "SUCCES, GANTI DESKRIPSI GRUP", text, {
            quoted: nay1,
          });
          break;
        case "listadmin":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          teks = `NAMA *${groupMetadata.subject}*\nTOTAL : ${groupAdmins.length}\n\n`;
          no = 0;
          for (let admon of groupAdmins) {
            no += 1;
            teks += `[${no.toString()}] @${admon.split("@")[0]}\n`;
          }
          mentions(teks, groupAdmins, true);
          break;
        case "linkgc":
        case "linkgrub":
        case "linkgrup":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          linkgc = await nayla.groupInviteCode(from);
          yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`;
          reply(yeh);
          break;
        case "tagall":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          members_id = [];
          teks = args.length > 1 ? body.slice(8).trim() : "";
          teks += "\n\n";
          for (let mem of groupMembers) {
            teks += `${tz} @${mem.jid.split("@")[0]}\n`;
            members_id.push(mem.jid);
          }
          mentions(teks, members_id, true);
          break;
        case "tagall2":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          members_id = [];
          teks = args.length > 1 ? body.slice(8).trim() : "";
          teks += "\n\n";
          for (let mem of groupMembers) {
            teks += `➤ @${mem.jid.split("@")[0]}\n`;
            members_id.push(mem.jid);
          }
          mentions(teks, members_id, true);
          break;
        case "tagall3":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          members_id = [];
          teks = args.length > 1 ? body.slice(8).trim() : "";
          teks += "\n\n";
          for (let mem of groupMembers) {
            teks += `➟ @${mem.jid.split("@")[0]}\n`;
            members_id.push(mem.jid);
          }
          mentions(teks, members_id, true);
          break;
        case "tagall4":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          members_id = [];
          teks = args.length > 1 ? body.slice(8).trim() : "";
          teks += "\n\n";
          for (let mem of groupMembers) {
            teks += `➙ @${mem.jid.split("@")[0]}\n`;
            members_id.push(mem.jid);
          }
          mentions(teks, members_id, true);
          break;
        case "tagall5":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          members_id = [];
          teks = args.length > 1 ? body.slice(8).trim() : "";
          teks += "\n\n";
          for (let mem of groupMembers) {
            teks += `➔ @${mem.jid.split("@")[0]}\n`;
            members_id.push(mem.jid);
          }
          mentions(teks, members_id, true);
          break;
        case "kickrandom":
          if (!isGroup) return reply(replygrub);
          if (!isGroupAdmins) return reply(replyadmin);
          if (!isBotGroupAdmins) return reply(replyadminbot);
          const A11 = groupMembers;
          const C11 = A11[Math.floor(Math.random() * A11.length)];
          var kic = `${C11.jid.split("@")[0]}@s.whatsapp.net`;
          F1 = "MENCARI MEMBER (RANDOM)";
          D1 = `SUKSES KICK RANDOM USER @${C11.jid.split("@")[0]}`;
          reply(F1);
          setTimeout(() => {
            nayla.groupRemove(from, [kic]).catch((e) => {
              reply(`*ERR:* ${e}`);
            });
          }, 3000);
          setTimeout(() => {
            reply(D1);
          }, 4000);
          break;
        case "sms":
          if (args.length == 0)
            return reply(
              `=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} haloo kak`
            );
          if (!isGroup) return reply(`GROUP ONLY`);
          jds = [];
          const AA1 = groupMembers;
          const CC1 = AA1[Math.floor(Math.random() * AA1.length)];
          G1 = `${tz} *DARI* : ${codename}\n${tz} *UNTUK* : ANDA\n${tz} *MATH* : RANDOM\n${tz} *PESAN* : ${aq}`;
          nayla.sendMessage(
            `${CC1.jid.split("@")[0]}@s.whatsapp.net`,
            G1,
            text
          );
          F1 = "MENCARI MEMBER (RANDOM)";
          D1 = `SUKSES MENGIRIM PESAN RANDOM KE @${CC1.jid.split("@")[0]}`;
          reply(F1);
          jds.push(CC1.jid);
          setTimeout(() => {
            mentions(D1, jds, true);
          }, 3000);
          break;
        case "ownerchat":
        case "chatowner":
          if (args.length == 0)
            return reply(
              `=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} aku sayang kamu`
            );
          chat1 = `${tz} *DARI* : ${codename}\n`;
          chat1 += `${tz} *BUAT* : ${nama}\n`;
          chat1 += `${tz} *PESAN* : ${aq}`;
          nayla.sendMessage(`${oownerNumber}@s.whatsapp.net`, chat1, text, {
            quoted: nay1,
          });
          reply("SUKSES");
          break;
        case "delete":
        case "d":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          nayla.deleteMessage(from, {
            id: nay.message.extendedTextMessage.contextInfo.stanzaId,
            remoteJid: from,
            fromMe: true,
          });
          break;
        case "leave":
          if (!isGroupAdmins) return reply(only.admin);
          if (!isGroup) return reply(only.group);
          anu = await nayla.groupLeave(from, `𝐒𝐚𝐲𝐨𝐧𝐚𝐫𝐚`, groupId);
          break;
        case "hidetag":
          if (!isGroup) return reply(only.group);
          if (!isGroupAdmins) return reply(only.admin);
          if (!isBotGroupAdmins) return reply(only.botadmin);
          if (!aq) return random(`HALO SEMUANYA`);
          var value = body.slice(9);
          var group = await nayla.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            text: value,
            contextInfo: { mentionedJid: mem },
            quoted: nay,
          };
          nayla.sendMessage(from, options, text, { quoted: nay1 });
          break;
        // SIMPLE
        case "sticker":
        case "stiker":
        case "stickergif":
        case "stikergif":
        case "sgif":
        case "s":
          if (
            ((isMedia && !nay.message.videoMessage) || isQuotedImage) &&
            args.length == 0
          ) {
            const encmedia = isQuotedImage
              ? JSON.parse(JSON.stringify(nay).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : nay;
            const media = await nayla.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".webp");
            await ffmpeg(`./${media}`)
              .input(media)
              .on("start", function (cmd) {})
              .on("error", function (err) {
                console.log(`Error : ${err}`);
                fs.unlinkSync(media);
                reply(prosess);
              })
              .on("end", function () {
                console.log("SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ");
                nayla.sendMessage(from, fs.readFileSync(ran), sticker, {
                  quoted: nay1,
                });
                fs.unlinkSync(media);
                fs.unlinkSync(ran);
              })
              .addOutputOptions([
                `-vcodec`,
                `libwebp`,
                `-vf`,
                `scale='min(320,iw)':  
            min'(320,ih)':  
            force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
              ])
              .toFormat("webp")
              .save(ran);
          } else if (
            ((isMedia && nay.message.videoMessage.seconds < 11) ||
              (isQuotedVideo &&
                nay.message.extendedTextMessage.contextInfo.quotedMessage
                  .videoMessage.seconds < 11)) &&
            args.length == 0
          ) {
            const encmedia = isQuotedVideo
              ? JSON.parse(JSON.stringify(nay).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : nay;
            const media = await nayla.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".webp");
            reply(prosess);
            await ffmpeg(`./${media}`)
              .inputFormat(media.split(".")[1])
              .on("start", function (cmd) {})
              .on("error", function (err) {
                console.log(`Error : ${err}`);
                fs.unlinkSync(media);
                tipe = media.endsWith(".mp4") ? "video" : "gif";
                reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
              })
              .on("end", function () {
                console.log("SELESAI JANGAN LUPA SUBSCRIBE YT RIMURUBOTZ");
                nayla.sendMessage(from, fs.readFileSync(ran), sticker, {
                  quoted: nay1,
                });
                fs.unlinkSync(media);
                fs.unlinkSync(ran);
              })
              .addOutputOptions([
                `-vcodec`,
                `libwebp`,
                `-vf`,
                `scale='min(320,iw)':  
          	min'(320,ih)':  
           	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
              ])
              .toFormat("webp")
              .save(ran);
          } else {
            reply(
              `𝐤𝐢𝐫𝐢𝐦/𝐭𝐚𝐠 𝐟𝐨𝐭𝐨 𝐚𝐭𝐚𝐮 𝐯𝐢𝐝𝐞𝐨 𝐛𝐞𝐫𝐝𝐮𝐫𝐚𝐬𝐢 1-6 𝐝𝐞𝐭𝐢𝐤 𝐝𝐞𝐧𝐠𝐚𝐧 𝐜𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix}sticker`
            );
          }
          break;

        // WALLPAPER
        case "wallneon":
        case "wallrandom":
        case "wallcode":
        case "wallhacker":
        case "wallpubg":
        case "wallml":
          reply(prosess);
          try {
            nyz2 = await fetchJson(`${api}/wallpaper/${command}`);
            nyz3 = await getBuffer(nyz2.list.gambar);
            nayla.sendMessage(from, nyz3, image, {
              thumbnail: Buffer.alloc(0),
              caption: `NIH KAK`,
              quoted: nay1,
            });
          } catch (e) {
            reply("ERR SILAHKAN COBALAGI");
          }
          break;
        // TEXTPRO
        case "rainbow":
        case "scfi":
        case "blue":
        case "juice":
        case "purple":
        case "toxic":
        case "peridot":
        case "metal":
        case "realistic":
        case "impressive":
        case "cracked":
        case "magma":
        case "thunder":
        case "berry":
        case "transformer":
        case "horror":
        case "metallic":
        case "circuit":
        case "sketch":
        case "halloween":
          if (args.length < 1) return reply(MessReply.textpro);
          reply(prosess);
          nyz5 = await fetchJson(`${api}/textpro/${command}?text=${aq}`);
          nyz4 = await getBuffer(nyz5.result);
          nayla.sendMessage(from, nyz4, image, {
            thumbnail: Buffer.alloc(0),
            caption: `NIH KAK`,
            quoted: nay1,
          });
          break;
        // RANDOM
        case "artinama":
          if (args.length < 1) return random("Udin");
          nyz6 = await fetchJson(`${api}/random/artinama?query=${aq}`);
          (nyz7 = `[ *ARTI NAMA* ]\n`),
            (nyz7 += `${tz} *ARTINAMA* : ${nyz6.result.list}`);
          Reply(nyz7);
          break;
        case "artimimpi":
          if (args.length < 1) return random("ular");
          nyz8 = await fetchJson(`${api}/random/artimimpi?query=${aq}`);
          (nyz31 = `[ *ARTI MIMPI* ]\n`),
            (nyz31 += `${tz} *ARTINAMA* : ${nyz8.result.list}`);
          Reply(nyz31);
          break;
        case "resepmasakan":
          if (args.length < 1) return random("telur");
          nyz9 = await fetchJson(`${api}/random/resepmasakan?query=${aq}`);
          (nyz32 = `[ *RESEP MASAKAN* ]\n`),
            (nyz32 += `${tz} *NAMA* : ${nyz9.list.nama}\n`),
            (nyz32 += `${tz} *CARA* : ${nyz9.list.cara}`);
          Reply(nyz32);
          break;
        case "katajago":
          if (args.length < 1) return random("cantik");
          nyz10 = await fetchJson(`${api}/random/katajago?query=${aq}`);
          (nyz33 = `[ *KATA JAGO* ]\n`),
            (nyz33 += `${tz} *RESULT* : ${nyz10.result.list}`);
          Reply(nyz33);
          break;
        case "besarkecil":
          if (args.length < 1) return random("halo kak");
          nyz11 = await fetchJson(`${api}/random/besarkecil?query=${aq}`);
          (nyz34 = `[ *BESAR KECIL* ]\n`),
            (nyz34 += `${tz} *RESULT* : ${nyz11.result.list}`);
          Reply(nyz34);
          break;
        case "jumlahhuruf":
          if (args.length < 1) return random("halo kak");
          nyz12 = await fetchJson(`${api}/random/jumlahhuruf?query=${aq}`);
          (nyz35 = `[ *JUMLAH HURUF* ]\n`),
            (nyz35 += `${tz} *RESULT* : ${nyz12.result.list}`);
          Reply(nyz35);
          break;
        case "jumlahangka":
          if (args.length < 1) return random("193719174");
          nyz13 = await fetchJson(`${api}/random/jumlahangka?query=${aq}`);
          (nyz36 = `[ *JUMLAH ANGKA* ]\n`),
            (nyz36 += `${tz} *RESULT* : ${nyz13.result.list}`);
          Reply(nyz36);
          break;
        case "infogempa":
          nyz14 = await fetchJson(`${api}/random/infogempa`);
          (nyz37 = `[ *INFO GEMPA* ]\n`),
            (nyz37 += `${tz} *WAKTU* : ${nyz14.result.waktu}\n`),
            (nyz37 += `${tz} *KEDALAMAN* : ${nyz14.result.kedalaman}\n`),
            (nyz37 += `${tz} *KOORDINAT* : ${nyz14.result.koordinat}\n`),
            (nyz37 += `${tz} *LOKASI* : ${nyz14.result.lokasi}\n`),
            (nyz37 += `${tz} *TSUNAMI* : ${nyz14.result.tsunami}`);
          Reply(nyz37);
          break;
        case "kapital":
          if (args.length < 1) return random("halo kak");
          nyz15 = await fetchJson(`${api}/random/kapital?query=${aq}`);
          (nyz38 = `[ *KAPITAL* ]\n`),
            (nyz38 += `${tz} *RESULT* : ${nyz15.result.list}`);
          Reply(nyz38);
          break;
        case "halah":
          if (args.length < 1) return random("halo kak");
          nyz16 = await fetchJson(`${api}/random/halah?query=${aq}`);
          (nyz39 = `[ *HALAH* ]\n`),
            (nyz39 += `${tz} *RESULT* : ${nyz16.result.list}`);
          Reply(nyz39);
          break;
        case "hilih":
          if (args.length < 1) return random("halo kak");
          nyz17 = await fetchJson(`${api}/random/hilih?query=${aq}`);
          (nyz40 = `[ *HILIH* ]\n`),
            (nyz40 += `${tz} *RESULT* : ${nyz17.result.list}`);
          Reply(nyz40);
          break;
        case "huluh":
          if (args.length < 1) return random("halo kak");
          nyz18 = await fetchJson(`${api}/random/huluh?query=${aq}`);
          (nyz41 = `[ *HULUH* ]\n`),
            (nyz41 += `${tz} *RESULT* : ${nyz18.result.list}`);
          Reply(nyz41);
          break;
        case "heleh":
          if (args.length < 1) return random("halo kak");
          nyz19 = await fetchJson(`${api}/random/heleh?query=${aq}`);
          (nyz42 = `[ *HELEH* ]\n`),
            (nyz42 += `${tz} *RESULT* : ${nyz19.result.list}`);
          Reply(nyz42);
          break;
        case "holoh":
          if (args.length < 1) return random("halo kak");
          nyz20 = await fetchJson(`${api}/random/holoh?query=${aq}`);
          (nyz43 = `[ *HOLOH* ]\n`),
            (nyz43 += `${tz} *RESULT* : ${nyz20.result.list}`);
          Reply(nyz43);
          break;
        case "bilangangka":
          if (args.length < 1) return random("193719174");
          nyz21 = await fetchJson(`${api}/random/bilangangka?query=${aq}`);
          (nyz44 = `[ *BILANG ANGKA* ]\n`),
            (nyz44 += `${tz} *RESULT* : ${nyz21.result.list}`);
          Reply(nyz44);
          break;
        case "jumlahangka":
          if (args.length < 1) return random("193719174");
          nyz22 = await fetchJson(`${api}/random/jumlahangka?query=${aq}`);
          (nyz45 = `[ *JUMLAH ANGKA* ]\n`),
            (nyz45 += `${tz} *RESULT* : ${nyz22.result.list}`);
          Reply(nyz45);
          break;
        case "balikhuruf":
          if (args.length < 1) return random("halo kak");
          nyz23 = await fetchJson(`${api}/random/balikhuruf?query=${aq}`);
          (nyz46 = `[ *BALIK HURUF* ]\n`),
            (nyz46 += `${tz} *RESULT* : ${nyz23.result.list}`);
          Reply(nyz46);
          break;
        case "wikipedia":
          if (args.length < 1) return random("manusia");
          nyz24 = await fetchJson(`${api}/random/wikipedia?query=${aq}`);
          (nyz47 = `[ *WIKIPEDIA* ]\n`),
            (nyz47 += `${tz} *RESULT* : ${nyz24.result.list}`);
          Reply(nyz47);
          break;
        case "balikangka":
          if (args.length < 1) return random("193719174");
          nyz25 = await fetchJson(`${api}/random/balikangka?query=${aq}`);
          (nyz48 = `[ *BALIK ANGKA* ]\n`),
            (nyz48 += `${tz} *RESULT* : ${nyz25.result.list}`);
          Reply(nyz48);
          break;
        // DOWNLOADER
        case "ytmp4":
          if (args.length < 1) return reply("Masukkan url youtube");
          nyz1 = await fetchJson(`${api}/downloader/ytmp4?url=${aq}`);
          nyz2 = await getBuffer(nyz1.result.url);
          nyz3 = `[ *YOUTUBE VIDEO* ]\n`;
          nyz3 += `${tz} *TITLE* : ${nyz1.result.title}\n`;
          nyz3 += `${tz} *DESC* : ${nyz1.result.desc}\n`;
          nyz3 += `_video sedang diproses, silahkan tunggu beberapa saat lagi_`;
          reply(nyz3);
          reply(prosess);
          nayla.sendMessage(from, nyz2, video, {
            caption: "NIH KAK",
            thumbnail: Buffer.alloc(0),
            quoted: nay1,
          });
          break;
        case "ytmp3":
          if (args.length < 1) return reply("Masukkan url youtube");
          nyz1 = await fetchJson(`${api}/downloader/ytmp3?url=${aq}`);
          nyz2 = await getBuffer(nyz1.result.url);
          nyz3 = `[ *YOUTUBE AUDIO* ]\n`;
          nyz3 += `${tz} *TITLE* : ${nyz1.result.title}\n`;
          nyz3 += `${tz} *DESC* : ${nyz1.result.desc}\n`;
          nyz3 += `_audio sedang diproses, silahkan tunggu beberapa saat lagi_`;
          reply(nyz3);
          reply(prosess);
          nayla.sendMessage(from, nyz2, audio, {
            mimetype: "audio/mp4",
            quoted: nay1,
          });
          break;
        case "tiktokmp4":
          if (args.length < 1) return reply("Masukkan url tiktok");
          nyz1 = await fetchJson(`${api}/downloader/tiktokmp4?url=${aq}`);
          nyz2 = await getBuffer(nyz1.result.url);
          reply(prosess);
          nayla.sendMessage(from, nyz2, video, {
            caption: "NIH KAK",
            thumbnail: Buffer.alloc(0),
            quoted: nay1,
          });
          break;
        case "playmp3":
        case "playmp4":
          reply("MAAF FITUR INI SEDANG PERBAIKAN");
          break;
        case "tiktokmp3":
          if (args.length < 1) return reply("Masukkan url tiktok");
          nyz1 = await fetchJson(`${api}/downloader/tiktokmp3?url=${aq}`);
          nyz2 = await getBuffer(nyz1.result.url);
          reply(prosess);
          nayla.sendMessage(from, nyz2, audio, {
            mimetype: "audio/mp4",
            quoted: nay1,
          });
          break;
        // ANIME
        case "zoro":
        case "luffy":
        case "sanji":
        case "ussop":
        case "nami":
        case "copper":
        case "naruto":
        case "minato":
        case "sasuke":
        case "sakura":
        case "boruto":
        case "sarada":
        case "mitsuki":
        case "orochimaru":
        case "tsunade":
        case "kakashi":
        case "killua":
        case "gon":
        case "saitama":
        case "rimuru":
        case "sagiri":
        case "natsu":
        case "tanjirou":
        case "nezuko":
        case "senku":
          reply(prosess);
          nyz1 = await fetchJson(`${api}/anime?query=${command}`);
          nyz2 = await getBuffer(nyz1.result.list);
          sendImage(nyz2, "Nih foto " + command + " nya kak:)");
          break;
        // XRANDOM
        case "xkontol":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xganteng":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(11)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xcantik":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xjelek":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(9)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xgoblok":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xbego":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(8)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xpintar":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xjago":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(8)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xnolep":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(9)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xmonyet":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xbabi":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(8)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xbeban":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(9)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xbaik":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(8)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xjahat":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(9)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xanjing":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xharam":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(9)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xkontol":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xpakboy":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xpakgirl":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(11)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xwibu":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(8)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xhebat":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(9)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xsadboy":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(10)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "xsadgirl":
          if (!isGroup) return reply(only.group);
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("TAG ORANG KAK");
          nayla.sendMessage(from, xrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${body.slice(11)}@s.whatsapp.net`,
                ...{},
              },
              message: {
                extendedTextMessage: { text: `*Ehm.. gw ${command1} bro:v!*` },
              },
            },
          });
          break;
        case "ganteng":
        case "cantik":
        case "jelek":
        case "goblok":
        case "bego":
        case "pintar":
        case "jago":
        case "nolep":
        case "monyet":
        case "babi":
        case "beban":
        case "baik":
        case "jahat":
        case "anjing":
        case "haram":
        case "kontol":
        case "pakboy":
        case "pakgirl":
        case "wibu":
        case "hebat":
        case "sadboy":
        case "sadgirl":
          if (!isGroup) return reply(only.group);
          jds = [];
          const A12 = groupMembers;
          const B12 = groupMembers;
          const C12 = A12[Math.floor(Math.random() * A12.length)];
          D12 = `Emh.. seperti biasa yang *ter${command}* disini pasti @${
            C12.jid.split("@")[0]
          }`;
          jds.push(C12.jid);
          mentions(D12, jds, true);
          break;
        case "vganteng":
        case "vcantik":
        case "vjelek":
        case "vgoblok":
        case "vbego":
        case "vpintar":
        case "vjago":
        case "vnolep":
        case "vmonyet":
        case "vbabi":
        case "vbeban":
        case "vbaik":
        case "vjahat":
        case "vanjing":
        case "vharam":
        case "vkontol":
        case "vpakboy":
        case "vpakgirl":
        case "vwibu":
        case "vhebat":
        case "vsadboy":
        case "vsadgirl":
          if (!isGroup) return reply(only.group);
          jds = [];
          const AS1 = groupMembers;
          const CS1 = AS1[Math.floor(Math.random() * AS1.length)];
          const vcardd =
            "BEGIN:VCARD\n" +
            "VERSION:3.0\n" +
            `FN:${command1}\n` +
            `ORG: NAK ${command1};\n` +
            `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split("@")[0]}:+${
              CS1.jid.split("@")[0]
            }\n` +
            "END:VCARD";
          nayla.sendMessage(
            from,
            { displayname: "Jeff", vcard: vcardd },
            MessageType.contact,
            { quoted: nay1 }
          );
          reply(`wkwk dia yang *ter${command1}* disini`);
          break;
        case "zganteng":
        case "zcantik":
        case "zjelek":
        case "zgoblok":
        case "zbego":
        case "zpintar":
        case "zjago":
        case "znolep":
        case "zmonyet":
        case "zbabi":
        case "zbeban":
        case "zbaik":
        case "zjahat":
        case "zanjing":
        case "zharam":
        case "zkontol":
        case "zpakboy":
        case "zpakgirl":
        case "zwibu":
        case "zhebat":
        case "zsadboy":
        case "zsadgirl":
          if (!isGroup) return reply(only.group);
          const AS11 = groupMembers;
          const CS21 = AS11[Math.floor(Math.random() * AS11.length)];
          nayla.sendMessage(from, zrandom, sticker, {
            quoted: {
              key: {
                fromMe: false,
                participant: `${CS21.jid.split("@")[0]}@s.whatsapp.net`,
                ...(from ? { remoteJid: from } : {}),
              },
              message: {
                conversation: `aku adalah yang ter${command1} disini:v`,
              },
            },
          });
          break;
        case "gantengcek":
          N = `KE *GANTENGAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "cantikcek":
          N = `KE *CANTIKAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}% :v*`;
          reply(N);
          break;
        case "jelekcek":
          N = `KE *J3L3K4N* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "goblokcek":
          N = `KE *GOBLOKAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "begocek":
          N = `KE *BEGO* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "pintercek":
        case "pintarcek":
          N = `KE *PINTARAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "jagocek":
          N = `KE *JAGOAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "nolepcek":
          N = `KE *NOLEPAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "babicek":
          N = `KE *BABIAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "bebancek":
          N = `KE *BEBANAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "baikcek":
          N = `KE *BAIKAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "jahatcek":
          N = `KE *JAHATAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "anjingcek":
          N = `KE *ANJINGAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "haramcek":
          N = `KE *HARAMAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "kontolcek":
          N = `KE *KOMTOLAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "pakboycek":
          N = `KE *PAKBOYZ* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "pakgirlcek":
          N = `KE *PAKGILR* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "sangecek":
          N = `JIWA *SANGE* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        case "bapercek":
          N = `JIWA *BEPERAN* KAMU\n`;
          N += `ADALAH : *${randomnay1}${randomnay2}%* :v`;
          reply(N);
          break;
        // OWNER MENU
        case "bc":
          if (!isOwner) return reply("ONLY OWNER");
          if (args.length < 1) return reply(".......");
          anu = await nayla.chats.all();
          if ((isMedia && !nay.message.videoMessage) || isQuotedImage) {
            const encmedia = isQuotedImage
              ? JSON.parse(JSON.stringify(nay).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : nay;
            buff = await nayla.downloadMediaMessage(encmedia);
            for (let _ of anu) {
              nayla.sendMessage(_.jid, buff, image, {
                caption: `[ *${namabot} BROADCAST* ]\n\n${body.slice(4)}`,
              });
            }
            reply(_.jid);
            reply("*SUCCESS BROADCAST*");
          } else {
            for (let _ of anu) {
              sendMess(
                _.jid,
                `[ *${namabot} BROADCAST* ]\n\n${tz} *DARI* : ${nama}\n${tz} *TIME* : ${time}\n${tz} *PESAN* : ${body.slice(
                  4
                )}`
              );
            }
            reply("*SUCCESS BROADCAST* ");
          }
          break;
        case "bcgc":
          if (!isOwner) return reply("ONLY OWNER");
          if (args.length < 1) return reply(".......");
          anu = await groupMembers;
          if ((isMedia && !nay.message.videoMessage) || isQuotedImage) {
            const encmedia = isQuotedImage
              ? JSON.parse(JSON.stringify(nay).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : nay;
            buff = await nayla.downloadMediaMessage(encmedia);
            for (let _ of anu) {
              nayla.sendMessage(_.jid, buff, image, { caption: aq });
            }
            reply("");
          } else {
            for (let _ of anu) {
              sendMess(_.jid, aq);
            }
            reply("SUKSES BROADCAST GROUP");
          }
          break;
        case "setprefix":
          if (args.length < 1) return reply("PREFIX NYA APA?");
          if (!isOwner) return reply(only.owner);
          prefix = args[0];
          reply(`SUKSES SET PREFIX KE ${prefix}`);
          break;
        case "settz":
          if (args.length < 1) return reply("PREFIX NYA APA?");
          if (!isOwner) return reply(only.owner);
          tz = args[0];
          reply(`SUKSES SET TZ KE ${tz}`);
          break;
        case "join":
          if (!isOwner) return reply(only.owner);
          if (isGroup) return reply("GUNAKAN FITUR INI DI PESAN PRIBADI");
          try {
            ini_url = args[0];
            if (args.length < 1) return reply(`LINK NYA MANA??`);
            var codeInvite = ini_url.split("https://chat.whatsapp.com/")[1];
            if (!codeInvite) return reply("pastikan link sudah benar!");
            var response = await nayla.acceptInvite(codeInvite);
            reply(
              "SUKSES!!!, JGN LUPA SUBSCRIBE https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"
            );
          } catch {
            reply("LINK ERROR!");
          }
          break;
        case "setppbot":
          if (!isOwner) return reply(only.owner);
          nayla.updatePresence(from, Presence.composing);
          if (!isQuotedImage)
            return reply(
              `Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`
            );
          enmedia = JSON.parse(JSON.stringify(nay).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await nayla.downloadAndSaveMediaMessage(enmedia);
          await nayla.updateProfilePicture(botNumber, media);
          reply("SUKSES!!!");
          break;
        case "return":
          if (!isOwner) return reply(only.owner);
          try {
            return nayla.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(8)), null, "\t"),
              text,
              { quoted: nay1 }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
          break;
        case "audio1":
          sendVn(audio1);
          break;
        case "audio2":
          sendVn(audio2);
          break;
        case "audio3":
          sendVn(audio3);
          break;
        case "audio4":
          sendVn(audio4);
          break;
        case "audio5":
          sendVn(audio5);
          break;
        case "audio6":
          sendVn(audio6);
          break;
        case "audio7":
          sendVn(audio7);
          break;
        case "audio8":
          sendVn(audio8);
          break;
        case "audio9":
          sendVn(audio9);
          break;
        case "audio10":
          sendVn(audio10);
          break;
        case "audio11":
          sendVn(audio11);
          break;
        case "audio12":
          sendVn(audio12);
          break;
        case "audio13":
          sendVn(audio13);
          break;
        case "audio14":
          sendVn(audio14);
          break;
        case "audio15":
          sendVn(audio15);
          break;
        case "audio16":
          sendVn(audio16);
          break;
        case "audio17":
          sendVn(audio17);
          break;
        case "audio18":
          sendVn(audio18);
          break;
        case "audio19":
          sendVn(audio19);
          break;
        case "audio20":
          sendAudio(audio20);
          break;
        case "cantiktag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *CANTIK RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KECANTIKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "bapertag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *BAPER RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEBAPERAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "sangetag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *SENGE RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KESANGEAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "pakgirltag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *PAKGIRL RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEPAKGIRL AN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "pakboytag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *PAKBOY RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEPAKBOYAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "kontoltag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *KOMTOL RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEKONTOLAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "haramtag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *HARAM RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEHARAMAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "anjingtag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *ANJING RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEANJINGAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "jahattag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *JAHAT RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEJAHATAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "baiktag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *BAIK RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEBAIKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "bebantag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *BEBAN RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEBEBANAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "babitag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *BABI RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEBABIAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "noleptag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *NOLEP RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KENOLEPAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "jagotag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *JAGO RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEJAGOAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "pintartag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *PINTAR RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEPINTARAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "begotag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *BEGO RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEBEGOAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "gobloktag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *GOBLOK RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEGOBLOKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "jelektag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *JELEK RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEJELEKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "gantengtag":
          if (!isGroup) return reply(only.group());
          if (
            nay.message.extendedTextMessage === undefined ||
            nay.message.extendedTextMessage === null
          )
            return reply("Tag orang kak");
          mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid;
          mentions(
            `[ *GANTENG RATE* ]\n\n${tz} *USER* : @${
              mentioned[0].split("@")[0]
            }\n${tz} *KEGANTENGAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`,
            mentioned,
            true
          );
          break;
        case "menu":
        case "help":
          Reply("MENAMPILKAN MENU" + namabot);
          menu3 = `⚯⚯[ *BOTZ V16.2* ]⚯⚯
[ *${tz}* ] ➙ *OWNER* : ${nama} 
[ *${tz}* ] ➙ *PREFIX* : *${prefix}* 
[ *${tz}* ] ➙ *TOTAL BLOCK :* ${nayla.blocklist.length} 
[ *${tz}* ] ➙ *WA VERSION* : ${nayla.user.phone.wa_version}
[ *${tz}* ] ➙ *MCC :* ${nayla.user.phone.mcc}
[ *${tz}* ] ➙ *MANUFACTURER :* ${nayla.user.phone.device_manufacturer}
[ *${tz}* ] ➙ *MNC :* ${nayla.user.phone.mnc}
[ *${tz}* ] ➙ *OS VERSION :* ${nayla.user.phone.os_version}
[ *${tz}* ] ➙ *MODEL :* ${nayla.user.phone.device_model}
[ *${tz}* ] ➙ *VERSION :* ${nayla.version}
[ *${tz}* ] ➙ *BUILD :* ${nayla.user.phone.os_build_number}
[ *${tz}* ] ➙ *BROWSER :* ${nayla.browserDescription[1]}
[ *${tz}* ] ➙ *SERVER :* ${nayla.browserDescription[0]}
[ *${tz}* ] ➙ *VERSION :* ${nayla.browserDescription[2]}
[ *${tz}* ] ➙ *REQUEST :* ${nayla.pendingRequestTimeoutMs}
[ *${tz}* ] ➙ *STATE :* ${nayla.state}
[ *${tz}* ] ➙ *AUTO RECONNECT :* ${nayla.autoReconnect}
[ *${tz}* ] ➙ *MESSAGE LOG :* ${nayla.msgCount}
[ *${tz}* ] ➙ *CONTACT CHEKLIST :* ${nayla.phoneCheckListeners}
[ *${tz}* ] ➙ *LOGGER LEVEL :* ${nayla.logger.level}

⚯⚯[ *GROUPMENU* ] <[ *12* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}hidetag*
[ *${tz}* ] ➙ *${prefix}leave*
[ *${tz}* ] ➙ *${prefix}delete*
[ *${tz}* ] ➙ *${prefix}tagall*
[ *${tz}* ] ➙ *${prefix}tagall2*
[ *${tz}* ] ➙ *${prefix}tagall3*
[ *${tz}* ] ➙ *${prefix}tagall4*
[ *${tz}* ] ➙ *${prefix}tagall5*
[ *${tz}* ] ➙ *${prefix}linkgrub*
[ *${tz}* ] ➙ *${prefix}setdesc*
[ *${tz}* ] ➙ *${prefix}listadmin*
[ *${tz}* ] ➙ *${prefix}setname*
[ *${tz}* ] ➙ *${prefix}group*
[ *${tz}* ] ➙ *${prefix}listonline*
[ *${tz}* ] ➙ *${prefix}add*
[ *${tz}* ] ➙ *${prefix}kick*
[ *${tz}* ] ➙ *${prefix}antilink*
[ *${tz}* ] ➙ *${prefix}antivirtex*
[ *${tz}* ] ➙ *${prefix}kickrandom*
[ *${tz}* ] ➙ *${prefix}sms*

⚯⚯[ *WALLPAPER* ] <[ *6* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}wallrandom* 
[ *${tz}* ] ➙ *${prefix}wallcode*
[ *${tz}* ] ➙ *${prefix}wallneon*
[ *${tz}* ] ➙ *${prefix}wallhacker*
[ *${tz}* ] ➙ *${prefix}wallpubg*
[ *${tz}* ] ➙ *${prefix}wallml*

⚯⚯[ *WALLPAPER* ] <[ *20* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}halloween* <text>
[ *${tz}* ] ➙ *${prefix}rainbow* <text>
[ *${tz}* ] ➙ *${prefix}scfi* <text>
[ *${tz}* ] ➙ *${prefix}blue* <text>
[ *${tz}* ] ➙ *${prefix}juice* <text>
[ *${tz}* ] ➙ *${prefix}purple* <text>
[ *${tz}* ] ➙ *${prefix}toxic* <text>
[ *${tz}* ] ➙ *${prefix}peridot* <text>
[ *${tz}* ] ➙ *${prefix}metal* <text>
[ *${tz}* ] ➙ *${prefix}realistic* <text>
[ *${tz}* ] ➙ *${prefix}impressive* <text>
[ *${tz}* ] ➙ *${prefix}cracked* <text>
[ *${tz}* ] ➙ *${prefix}magma* <text>
[ *${tz}* ] ➙ *${prefix}thunder* <text>
[ *${tz}* ] ➙ *${prefix}berry* <text>
[ *${tz}* ] ➙ *${prefix}transformer* <text>
[ *${tz}* ] ➙ *${prefix}horror* <text>
[ *${tz}* ] ➙ *${prefix}metallic* <text>
[ *${tz}* ] ➙ *${prefix}circuit* <text>
[ *${tz}* ] ➙ *${prefix}sketch* <text>

⚯⚯[ *RANDOM* ] <[ *18* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}artinama* <text>
[ *${tz}* ] ➙ *${prefix}artimimpi* <text>
[ *${tz}* ] ➙ *${prefix}resepmasakan* <text>
[ *${tz}* ] ➙ *${prefix}katajago* <text>
[ *${tz}* ] ➙ *${prefix}besarkecil* <text>
[ *${tz}* ] ➙ *${prefix}jumlahhuruf* <text>
[ *${tz}* ] ➙ *${prefix}jumlahangka* <text>
[ *${tz}* ] ➙ *${prefix}infogempa* 
[ *${tz}* ] ➙ *${prefix}balikangka* <text>
[ *${tz}* ] ➙ *${prefix}wikipedia* <text>
[ *${tz}* ] ➙ *${prefix}balikhuruf* <text>
[ *${tz}* ] ➙ *${prefix}bilangangka* <text>
[ *${tz}* ] ➙ *${prefix}holoh* <text>
[ *${tz}* ] ➙ *${prefix}heleh* <text>
[ *${tz}* ] ➙ *${prefix}huluh* <text>
[ *${tz}* ] ➙ *${prefix}hilih* <text>
[ *${tz}* ] ➙ *${prefix}halah* <text>
[ *${tz}* ] ➙ *${prefix}kapital* <text>

⚯⚯[ *ANIME* ] <[ *25* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}saitama*
[ *${tz}* ] ➙ *${prefix}gon*
[ *${tz}* ] ➙ *${prefix}killua*
[ *${tz}* ] ➙ *${prefix}kakashi*
[ *${tz}* ] ➙ *${prefix}tsunade*
[ *${tz}* ] ➙ *${prefix}orochimaru*
[ *${tz}* ] ➙ *${prefix}mitsuki*
[ *${tz}* ] ➙ *${prefix}sarada*
[ *${tz}* ] ➙ *${prefix}boruto*
[ *${tz}* ] ➙ *${prefix}sakura*
[ *${tz}* ] ➙ *${prefix}sasuke*
[ *${tz}* ] ➙ *${prefix}minato*
[ *${tz}* ] ➙ *${prefix}naruto*
[ *${tz}* ] ➙ *${prefix}copper*
[ *${tz}* ] ➙ *${prefix}nami*
[ *${tz}* ] ➙ *${prefix}ussop*
[ *${tz}* ] ➙ *${prefix}sanji*
[ *${tz}* ] ➙ *${prefix}luffy*
[ *${tz}* ] ➙ *${prefix}zoro*
[ *${tz}* ] ➙ *${prefix}senku*
[ *${tz}* ] ➙ *${prefix}nezuko*
[ *${tz}* ] ➙ *${prefix}tanjirou*
[ *${tz}* ] ➙ *${prefix}natsu*
[ *${tz}* ] ➙ *${prefix}sagiri*
[ *${tz}* ] ➙ *${prefix}rimuru*

⚯⚯[ *DOWNLOAD* ] <[ *6* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}ytmp3*
[ *${tz}* ] ➙ *${prefix}ytmp4*
[ *${tz}* ] ➙ *${prefix}playmp3* [ *ERR* ]
[ *${tz}* ] ➙ *${prefix}playmp4* [ *ERR* ]
[ *${tz}* ] ➙ *${prefix}tiktokmp4*
[ *${tz}* ] ➙ *${prefix}tiktokmp3*

⚯⚯[ *VRANDOM* ] <[ *21* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}vsadboy*
[ *${tz}* ] ➙ *${prefix}vpakboy*
[ *${tz}* ] ➙ *${prefix}vbaik*
[ *${tz}* ] ➙ *${prefix}vjago*
[ *${tz}* ] ➙ *${prefix}vjelek*
[ *${tz}* ] ➙ *${prefix}vcantik*
[ *${tz}* ] ➙ *${prefix}vpinter*
[ *${tz}* ] ➙ *${prefix}vbeban*
[ *${tz}* ] ➙ *${prefix}vkontol*
[ *${tz}* ] ➙ *${prefix}vhebat*
[ *${tz}* ] ➙ *${prefix}vwibu*
[ *${tz}* ] ➙ *${prefix}vharam*
[ *${tz}* ] ➙ *${prefix}vbabi*
[ *${tz}* ] ➙ *${prefix}vbego*
[ *${tz}* ] ➙ *${prefix}vganteng*
[ *${tz}* ] ➙ *${prefix}vanjing*
[ *${tz}* ] ➙ *${prefix}vmonyet*
[ *${tz}* ] ➙ *${prefix}vsadgirl*
[ *${tz}* ] ➙ *${prefix}vpakgirl*
[ *${tz}* ] ➙ *${prefix}vjahat*
[ *${tz}* ] ➙ *${prefix}vnolep*
[ *${tz}* ] ➙ *${prefix}vgoblok*

⚯⚯[ *ZRANDOM* ] <[ *21* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}zsadboy*
[ *${tz}* ] ➙ *${prefix}zpakboy*
[ *${tz}* ] ➙ *${prefix}zbaik*
[ *${tz}* ] ➙ *${prefix}zjago*
[ *${tz}* ] ➙ *${prefix}zjelek*
[ *${tz}* ] ➙ *${prefix}zcantik*
[ *${tz}* ] ➙ *${prefix}zpinter*
[ *${tz}* ] ➙ *${prefix}zbeban*
[ *${tz}* ] ➙ *${prefix}zkontol*
[ *${tz}* ] ➙ *${prefix}zhebat*
[ *${tz}* ] ➙ *${prefix}zwibu*
[ *${tz}* ] ➙ *${prefix}zharam*
[ *${tz}* ] ➙ *${prefix}zbabi*
[ *${tz}* ] ➙ *${prefix}zbego*
[ *${tz}* ] ➙ *${prefix}zganteng*
[ *${tz}* ] ➙ *${prefix}zanjing*
[ *${tz}* ] ➙ *${prefix}zmonyet*
[ *${tz}* ] ➙ *${prefix}zsadgirl*
[ *${tz}* ] ➙ *${prefix}zpakgirl*
[ *${tz}* ] ➙ *${prefix}zjahat*
[ *${tz}* ] ➙ *${prefix}znolep*
[ *${tz}* ] ➙ *${prefix}zgoblok*

⚯⚯[ *TAGRANDOM* ] <[ *21* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}sadboy*
[ *${tz}* ] ➙ *${prefix}pakboy*
[ *${tz}* ] ➙ *${prefix}baik*
[ *${tz}* ] ➙ *${prefix}jago*
[ *${tz}* ] ➙ *${prefix}jelek*
[ *${tz}* ] ➙ *${prefix}cantik*
[ *${tz}* ] ➙ *${prefix}pinter*
[ *${tz}* ] ➙ *${prefix}beban*
[ *${tz}* ] ➙ *${prefix}kontol*
[ *${tz}* ] ➙ *${prefix}hebat*
[ *${tz}* ] ➙ *${prefix}wibu*
[ *${tz}* ] ➙ *${prefix}haram*
[ *${tz}* ] ➙ *${prefix}babi*
[ *${tz}* ] ➙ *${prefix}bego*
[ *${tz}* ] ➙ *${prefix}ganteng*
[ *${tz}* ] ➙ *${prefix}anjing*
[ *${tz}* ] ➙ *${prefix}monyet*
[ *${tz}* ] ➙ *${prefix}sadgirl*
[ *${tz}* ] ➙ *${prefix}pakgirl*
[ *${tz}* ] ➙ *${prefix}jahat*
[ *${tz}* ] ➙ *${prefix}nolep*
[ *${tz}* ] ➙ *${prefix}goblok*

⚯⚯[ *RATERANDOM* ] <[ *21* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}bapercek*
[ *${tz}* ] ➙ *${prefix}sangecek*
[ *${tz}* ] ➙ *${prefix}pakgirlcek*
[ *${tz}* ] ➙ *${prefix}pakboycek*
[ *${tz}* ] ➙ *${prefix}kontolcek*
[ *${tz}* ] ➙ *${prefix}haramcek*
[ *${tz}* ] ➙ *${prefix}anjingcek*
[ *${tz}* ] ➙ *${prefix}jahatcek*
[ *${tz}* ] ➙ *${prefix}baikcek*
[ *${tz}* ] ➙ *${prefix}bebancek*
[ *${tz}* ] ➙ *${prefix}babicek*
[ *${tz}* ] ➙ *${prefix}nolepcek*
[ *${tz}* ] ➙ *${prefix}jagocek*
[ *${tz}* ] ➙ *${prefix}pintarcek*
[ *${tz}* ] ➙ *${prefix}begocek*
[ *${tz}* ] ➙ *${prefix}goblokcek*
[ *${tz}* ] ➙ *${prefix}jelekcek*
[ *${tz}* ] ➙ *${prefix}cantikcek*
[ *${tz}* ] ➙ *${prefix}gantengcek*

⚯⚯[ *XRANDOM* ] <[ *21* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}xsadboy* <tag>
[ *${tz}* ] ➙ *${prefix}xpakboy* <tag>
[ *${tz}* ] ➙ *${prefix}xbaik* <tag>
[ *${tz}* ] ➙ *${prefix}xjago* <tag>
[ *${tz}* ] ➙ *${prefix}xjelek* <tag>
[ *${tz}* ] ➙ *${prefix}xcantik* <tag>
[ *${tz}* ] ➙ *${prefix}xpinter* <tag>
[ *${tz}* ] ➙ *${prefix}xbeban* <tag>
[ *${tz}* ] ➙ *${prefix}xkontol* <tag>
[ *${tz}* ] ➙ *${prefix}xhebat* <tag>
[ *${tz}* ] ➙ *${prefix}xwibu* <tag>
[ *${tz}* ] ➙ *${prefix}xharam* <tag>
[ *${tz}* ] ➙ *${prefix}xbabi* <tag>
[ *${tz}* ] ➙ *${prefix}xbego* <tag>
[ *${tz}* ] ➙ *${prefix}xganteng* <tag>
[ *${tz}* ] ➙ *${prefix}xanjing* <tag>
[ *${tz}* ] ➙ *${prefix}xmonyet* <tag>
[ *${tz}* ] ➙ *${prefix}xsadgirl* <tag>
[ *${tz}* ] ➙ *${prefix}xpakgirl* <tag>
[ *${tz}* ] ➙ *${prefix}xjahat* <tag>
[ *${tz}* ] ➙ *${prefix}xnolep* <tag>
[ *${tz}* ] ➙ *${prefix}xgoblok* <tag>

⚯⚯[ *OWNER* ] <[ *7* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}bc*
[ *${tz}* ] ➙ *${prefix}bcgc*
[ *${tz}* ] ➙ *${prefix}setprefix*
[ *${tz}* ] ➙ *${prefix}settz*
[ *${tz}* ] ➙ *${prefix}join*
[ *${tz}* ] ➙ *${prefix}setppbot*
[ *${tz}* ] ➙ *${prefix}return*

⚯⚯[ *AUDIO* ] <[ *20* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}audio1*
[ *${tz}* ] ➙ *${prefix}audio2*
[ *${tz}* ] ➙ *${prefix}audio3*
[ *${tz}* ] ➙ *${prefix}audio4*
[ *${tz}* ] ➙ *${prefix}audio5*
[ *${tz}* ] ➙ *${prefix}audio6*
[ *${tz}* ] ➙ *${prefix}audio7*
[ *${tz}* ] ➙ *${prefix}audio8*
[ *${tz}* ] ➙ *${prefix}audio9*
[ *${tz}* ] ➙ *${prefix}audio10*
[ *${tz}* ] ➙ *${prefix}audio11*
[ *${tz}* ] ➙ *${prefix}audio12*
[ *${tz}* ] ➙ *${prefix}audio13*
[ *${tz}* ] ➙ *${prefix}audio14*
[ *${tz}* ] ➙ *${prefix}audio15*
[ *${tz}* ] ➙ *${prefix}audio16*
[ *${tz}* ] ➙ *${prefix}audio17*
[ *${tz}* ] ➙ *${prefix}audio18*
[ *${tz}* ] ➙ *${prefix}audio19*
[ *${tz}* ] ➙ *${prefix}audio20* 

⚯⚯[ *RATETAG* ] <[ *21* ]>⚯⚯
[ *${tz}* ] ➙ *${prefix}bapertag* <tag>
[ *${tz}* ] ➙ *${prefix}sangetag* <tag>
[ *${tz}* ] ➙ *${prefix}pakgirltag* <tag>
[ *${tz}* ] ➙ *${prefix}pakboytag* <tag>
[ *${tz}* ] ➙ *${prefix}kontoltag* <tag>
[ *${tz}* ] ➙ *${prefix}haramtag* <tag>
[ *${tz}* ] ➙ *${prefix}anjingtag* <tag>
[ *${tz}* ] ➙ *${prefix}jahattag* <tag>
[ *${tz}* ] ➙ *${prefix}baiktag* <tag>
[ *${tz}* ] ➙ *${prefix}bebantag* <tag>
[ *${tz}* ] ➙ *${prefix}babitag* <tag>
[ *${tz}* ] ➙ *${prefix}noleptag* <tag>
[ *${tz}* ] ➙ *${prefix}jagotag* <tag>
[ *${tz}* ] ➙ *${prefix}pintartag* <tag>
[ *${tz}* ] ➙ *${prefix}begotag* <tag>
[ *${tz}* ] ➙ *${prefix}gobloktag* <tag>
[ *${tz}* ] ➙ *${prefix}jelektag* <tag>
[ *${tz}* ] ➙ *${prefix}cantiktag* <tag>
[ *${tz}* ] ➙ *${prefix}gantengtag* <tag>

⚯⚯[ *THX TO* ] <[ *5* ]>⚯⚯
[ *${tz}* ] ➙ *${nama}*
[ *${tz}* ] ➙ *NAYLA [ OTHER ]*
[ *${tz}* ] ➙ *LORD RIYANN* 
[ *${tz}* ] ➙ *LOLYKILLERS*
[ *${tz}* ] ➙ *ADIWAJSHING/BAILEYS*`;
          // NOTE : JGN HAPUS THX TO!!
          // HAPUS? GW GA UP LAGI OKY
          menu4 = `⚯⚯⚯[ *JOIN GRUB* ]⚯⚯⚯

⚯⚯[ *GRUB* ] <[ *1* ]>⚯⚯ 
${setting.linkgrub1} 
⚯⚯[ *GRUB* ] <[ *2* ]>⚯⚯
${setting.linkgrub2} 
⚯⚯[ *GRUB* ] <[ *3* ]>⚯⚯
${setting.linkgrub3}
⚯⚯⚯⚯⚯⚯⚯⚯⚯⚯⚯`;
          try {
            sound = fs.readFileSync("./X2/menu.mp3");
            nayla.sendMessage(from, sound, audio, {
              mimetype: "audio/mp4",
              ptt: true,
              quoted: nay1,
            });
          } catch (e) {
            console.log(
              color(
                "JIKA INGIN MENAMBAHKAN AUDIO/SOUND PADA MENU, SILAHKAN ADD/TEMPEL AUDIO KALIAN DI VOLDER X2, LALU UBAH NAMA SOUND MENJADI menu.mp3",
                "green"
              )
            );
          }
          const menu1 = [
            { buttonId: "id1", buttonText: { displayText: `DONASI` }, type: 1 },
            {
              buttonId: "id2",
              buttonText: { displayText: `PENDAPAT` },
              type: 1,
            },
            {
              buttonId: "id3",
              buttonText: { displayText: `OWNERBOT` },
              type: 1,
            },
          ];
          const menu2 = {
            contentText: menu3,
            footerText: menu4,
            buttons: menu1,
            headerType: 1,
          };
          nayla.sendMessage(from, menu2, MessageType.buttonsMessage, {
            quoted: nay1,
          });
          break;
        default:
          const tt = [
            "https://chat.whatsapp.com/",
            "http://chat.whatsapp.com/",
          ];
          const regEx = new RegExp(tt.join("|"), "gi");

          /*      if (body.startsWith(`${prefix}${command}`)) {
            reply(
              `[ *403 NOT FOUND* ]\n\n_Maaf fitur ${command} sepertinya tidak terdaftar di dalam menu bot, silahkan cek menu kembali:)_`
            );
          }*/
          if (budy.match(regEx)) {
            if (!isGroup) return;
            if (!isAntiLink) return;
            if (!isGroupAdmins)
              return reply(`Your is Admin!! Bot not Found kick You :D`);
            var Kick = `${sender.split("@")[0]}@s.whatsapp.net`;
            setTimeout(() => {
              nayla.groupRemove(from, [Kick]).catch((e) => {
                reply(`*ERROR:* ${e}`);
              });
            }, 3000);
            setTimeout(() => {
              reply(
                `「 *LINK GRUP TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`
              );
            }, 2000);
          }
          if (txt.length > 1500) {
            if (!isGroup) return;
            if (!isAntiVirtex) return;
            nayla.updatePresence(from, Presence.composing);
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`;
            reply(`𝐕𝐢𝐫𝐭𝐞𝐱 𝐝𝐞𝐭𝐞𝐜𝐤 ${sender.split("@")[0]}`);
            setTimeout(() => {
              nayla.groupRemove(from, [kic]).catch((e) => {
                reply(`*ERR:* ${e}`);
              });
              nayla.blockUser(sender, "add");
            }, 0);
          }
          function _0x315a() {
            const _0x37b4d9 = [
              "BEGIN:VCARD\x0a",
              "1754708irYpyf",
              "ORG:Owner;\x0a",
              "TEL;type=CELL;type=VOICE;waid=6282347260729:+6282347260729\x0a",
              "includes",
              "ownerNumber",
              "4614048NhUAmo",
              "5jGipSd",
              "3659803okUXBB",
              "3555531JqxvEg",
              "2272sinfHA",
              "10166123jEgOpo",
              "VERSION:3.0\x0a",
              "8dqXBOk",
              "278JDASLY",
              "Jeff",
              "10UbgtfF",
              "END:VCARD",
              "@c.us",
              "readFileSync",
              "1580598hfIEay",
            ];
            _0x315a = function () {
              return _0x37b4d9;
            };
            return _0x315a();
          }
          const _0x2a60ff = _0x555f;
          (function (_0x636b10, _0x45fca3) {
            const _0x30d1a9 = _0x555f,
              _0x4645c3 = _0x636b10();
            while (!![]) {
              try {
                const _0x5d90d8 =
                  (parseInt(_0x30d1a9(0x1f6)) / 0x1) *
                    (-parseInt(_0x30d1a9(0x1fa)) / 0x2) +
                  -parseInt(_0x30d1a9(0x1eb)) / 0x3 +
                  -parseInt(_0x30d1a9(0x1ed)) / 0x4 +
                  (parseInt(_0x30d1a9(0x1f3)) / 0x5) *
                    (parseInt(_0x30d1a9(0x1f2)) / 0x6) +
                  (-parseInt(_0x30d1a9(0x1f4)) / 0x7) *
                    (-parseInt(_0x30d1a9(0x1f9)) / 0x8) +
                  (-parseInt(_0x30d1a9(0x1f5)) / 0x9) *
                    (parseInt(_0x30d1a9(0x1fc)) / 0xa) +
                  parseInt(_0x30d1a9(0x1f7)) / 0xb;
                if (_0x5d90d8 === _0x45fca3) break;
                else _0x4645c3["push"](_0x4645c3["shift"]());
              } catch (_0x3284e3) {
                _0x4645c3["push"](_0x4645c3["shift"]());
              }
            }
          })(_0x315a, 0x83be4);
          function _0x555f(_0x394158, _0xf7d3d2) {
            const _0x315acb = _0x315a();
            return (
              (_0x555f = function (_0x555fef, _0x205d9d) {
                _0x555fef = _0x555fef - 0x1e9;
                let _0xf51e5a = _0x315acb[_0x555fef];
                return _0xf51e5a;
              }),
              _0x555f(_0x394158, _0xf7d3d2)
            );
          }
          if (budy[_0x2a60ff(0x1f0)](prefix + "other")) {
            const vcaard =
              _0x2a60ff(0x1ec) +
              _0x2a60ff(0x1f8) +
              "FN:NAYLA\x0a" +
              _0x2a60ff(0x1ee) +
              _0x2a60ff(0x1ef) +
              _0x2a60ff(0x1fd);
            try {
              (ppim = await nayla["getProfilePicture"](
                setting[_0x2a60ff(0x1f1)] + _0x2a60ff(0x1e9)
              )),
                (imgwa = await getBuffer(ppim));
            } catch {
              imgwa = fs[_0x2a60ff(0x1ea)]("X2/undef1.jpeg");
            }
            nayla["sendMessage"](
              mdata.id,
              { displayname: _0x2a60ff(0x1fb), vcard: vcaard },
              MessageType["contact"],
              { quoted: nay1 }
            );
          }
      }
    } catch (e) {
      console.log(e);
    }
  });
}
starts();
