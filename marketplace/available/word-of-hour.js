// @marketplace word-of-hour v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_word_of_hour.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"WordOfHour",category:"tools",desc:"New word every hour to build vocabulary",command:["wordhourlr","hourlvocab","newword"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const WORDS=[{w:"Ephemeral",d:"Lasting very short time"},{w:"Ubiquitous",d:"Present everywhere"},{w:"Perspicacious",d:"Having keen insight"},{w:"Mellifluous",d:"Sweet and musical sounding"},{w:"Obfuscate",d:"To make unclear or confusing"},{w:"Sycophant",d:"A person who flatters to gain favor"},{w:"Truncate",d:"To shorten by cutting"},{w:"Verbose",d:"Using more words than needed"},{w:"Zeal",d:"Great energy or enthusiasm"},{w:"Amicable",d:"Friendly and peaceable"}];const hour=new Date().getHours();const w=WORDS[hour%WORDS.length];return reply("📚 Word of the Hour!\n\n*"+w.w+"*\n"+w.d+"\n\nUse it in a sentence today!");
  }
};
