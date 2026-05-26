// @marketplace sunday-school v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_sunday_school.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"SundaySchool",category:"spiritual",desc:"Sunday school lessons and activities",command:["sundayschool","kidschurch","sundaylesson"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const LESSONS=[{title:"The Good Samaritan",ref:"Luke 10:25-37",lesson:"Treat everyone with kindness, even strangers",activity:"Draw someone helping a person in need"},{title:"David and Goliath",ref:"1 Samuel 17",lesson:"Faith and courage can overcome any obstacle",activity:"Write about a time you faced something scary and overcame it"},{title:"The Prodigal Son",ref:"Luke 15:11-32",lesson:"God always welcomes us back no matter what we have done",activity:"Write a short letter from the prodigal son to his father"}];const l=LESSONS[new Date().getDay()%LESSONS.length];return reply("Sunday School Lesson\n\n📖 *"+l.title+"* ("+l.ref+")\n\n💡 Today's lesson:\n"+l.lesson+"\n\n✏️ Activity:\n"+l.activity+"\n\nGod bless all the children! ✝️");
  }
};
