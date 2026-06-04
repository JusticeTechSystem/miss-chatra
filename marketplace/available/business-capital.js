// @marketplace business-capital v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_p=require("path");
const _DB=_p.join(__dirname,"../../..","database","mp_business_capital.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={name:"BusinessCapital",category:"finance",desc:"Calculate capital needed to start a business",command:["businesscapital","startcapital","capitalneed"],
  run:async({args,command,chatId:chat,userId:uid,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/";
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const ESTIMATES={pos:{capital:"N150,000-300,000",monthly:"N80,000-200,000",roi:"2-6 months"},foodstuff:{capital:"N200,000-500,000",monthly:"N100,000-400,000",roi:"1-2 months"},mini_importation:{capital:"N100,000-500,000",monthly:"N200,000-1,000,000",roi:"1-3 months"},tailoring:{capital:"N100,000-300,000",monthly:"N80,000-300,000",roi:"3-6 months"},transport:{capital:"N500,000-2,000,000",monthly:"N150,000-500,000",roi:"12-24 months"},salon:{capital:"N200,000-800,000",monthly:"N100,000-500,000",roi:"3-9 months"}};const biz=(args[0]||'').toLowerCase();const info=ESTIMATES[biz];if(!info)return reply("Business options: "+Object.keys(ESTIMATES).join(', ')+"\n"+pfx+"businesscapital pos");return reply("Capital Guide: "+biz.toUpperCase()+"\n\n💰 Startup Capital: "+info.capital+"\n💵 Monthly Potential: "+info.monthly+"\n📅 ROI Timeline: "+info.roi);
  }
};
