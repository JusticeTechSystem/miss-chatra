// @marketplace word-association v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_word_association.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"WordAssociation",category:"games",desc:"Word association chain game",
  command:["wordassoc","wordchain2","associategame"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const G=global.__wa=global.__wa||{};const key=chat+'_wa';
    if(args[0]==='start'){G[key]={chain:[],last:args.slice(1).join(' ')||'Nigeria',active:true};return reply("Word Association Game!\n\nStart word: *"+(G[key].last)+"*\n\nNext person: say a word ASSOCIATED with it!\nNo repeats allowed.");}
    if(G[key]?.active){const word=args.join(' ').toLowerCase();if(G[key].chain.includes(word))return reply("❌ Already used: "+word);G[key].chain.push(word);G[key].last=word;save(G[key]);return reply("✅ *"+word+"*\n\nChain: "+G[key].chain.length+" words\nPrev: "+G[key].chain[G[key].chain.length-2]||"Start"+"\n\nNext word associated with: *"+word+"*");}
    return reply(pfx+"wordchain2 start <first word>\nExample: "+pfx+"wordchain2 start Nigeria");
  }
};
