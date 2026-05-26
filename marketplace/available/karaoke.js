// @marketplace karaoke v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_karaoke.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"Karaoke",category:"entertainment",desc:"Karaoke prompt with song suggestions",
  command:["karaoke","singalong","karaoketime"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const SONGS=["Essence — Wizkid feat. Tems","Calm Down — Rema","Last Last — Burna Boy","Love Nwantiti — CKay","Sungba — Asake","Doja — Asake","Finesse — Pheelz","Overloading — Omah Lay","La La — Tiwa Savage","Kill Dem — Burna Boy","Ojuelegba — Wizkid","Skelewu — Davido","Fall — Davido feat. Rae Sremmurd","Joro — Wizkid"];
    const s=SONGS[Math.floor(Math.random()*SONGS.length)];
    return reply("🎤 Karaoke Time!\n\nSong: *"+s+"*\n\nSend a voice note of yourself singing this song!\n\nPoints for creativity and energy! 🎵\n\n/karaoke for another song");
  }
};
