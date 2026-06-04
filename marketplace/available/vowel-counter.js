// @marketplace vowel-counter v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_vowel_counter.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"VowelCounter",category:"tools",desc:"Count vowels, consonants in text",command:["vowelcount","lettercount","letteranalyze"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const text=args.join(' ');if(!text)return reply("Usage: "+pfx+"vowelcount <text>\nExample: "+pfx+"vowelcount Hello World");const vowels=(text.match(/[aeiouAEIOU]/g)||[]).length;const consonants=(text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)||[]).length;const letters=vowels+consonants;const words=text.trim().split(/s+/).length;return reply("Letter Analysis\n\nText: "+text+"\n\nLetters: "+letters+"\nVowels: "+vowels+" ("+(letters>0?(vowels/letters*100).toFixed(0):0)+"%)\nConsonants: "+consonants+"\nWords: "+words);
  }
};
