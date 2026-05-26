// @marketplace nigerian-constitution v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_nigerian_constitution.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"NigerianConstitution",category:"nigerian",desc:"Key sections of the Nigerian Constitution",command:["constitution2","nigerialaw","constitutionref"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const SECTIONS={"1":"Nigeria is one indivisible and indissoluble sovereign state to be known by the name of the Federal Republic of Nigeria","14":"Nigeria is a State based on the principles of democracy and social justice","17":"The security and welfare of the people shall be the primary purpose of government","33":"Every person has a right to life, and no one shall be deprived intentionally of his life","35":"Every person shall be entitled to his personal liberty","42":"A citizen of Nigeria shall not be subjected to any disability or deprivation","43":"Every citizen of Nigeria shall have the right to acquire property"};const sec=args[0];if(sec&&SECTIONS[sec])return reply("Constitution Section "+sec+":\n\n"+SECTIONS[sec]);return reply("Key Nigerian Constitutional Sections\n\nS.1: Sovereignty\nS.14: Democracy\nS.17: Purpose of government\nS.33: Right to life\nS.35: Personal liberty\nS.42: Non-discrimination\nS.43: Property rights\n\n"+pfx+"constitution2 33 — for full text");
  }
};
