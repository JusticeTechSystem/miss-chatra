// @marketplace igbo-proverb-daily v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_igbo_proverb_daily.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"IgboProverbDaily",category:"nigerian",desc:"Daily Igbo proverbs with meanings",command:["igboproverb","igboowe","igbowise"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const P=[["Onye wetara oji wetara ndu","He who brings kola brings life"],["Egbe bere, ugo bere","Let the kite perch, let the eagle perch (live and let live)"],["Onye aghana nwanne ya","Never abandon your kinsman"],["Ihe onye metara ya emetara onwe ya","What goes around comes around"],["Oji onye di mma o geri nke ya","A good kolanut gives of itself"]];const[prov,meaning]=P[Math.floor(Math.random()*P.length)];return reply("Igbo Proverb\n\n\""+prov+"\"\n\nMeaning: "+meaning);
  }
};
