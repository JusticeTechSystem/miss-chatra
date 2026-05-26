// @marketplace music-battle v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_music_battle.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"MusicBattle",category:"entertainment",desc:"Music knowledge battle between members",
  command:["musicbattle","songbattle","beatsquiz"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const SONGS=[{q:"Finish the lyric: 'Jowo, jowo, jowo...'",a:"wizkid jowo"},{q:"Which Afrobeats artist has a song called 'Essence'?",a:"wizkid"},{q:"'Last Last' is a song by which artist?",a:"burna boy"},{q:"Davido has how many Grammys?",a:"0"},{q:"Which artist sang 'Sungba'?",a:"asake"},{q:"'Calm Down' is by which Nigerian artist?",a:"rema"},{q:"Tiwa Savage's first big hit was called?",a:"kele kele love"}];
    const G=global.__mb=global.__mb||{};const key=chat+'_mb';const q=SONGS[Math.floor(Math.random()*SONGS.length)];G[key]={answer:q.a.toLowerCase()};
    return reply("🎵 Music Battle!\n\n"+q.q+"\n\nFirst correct answer wins!\n30 seconds...");
  }
};
