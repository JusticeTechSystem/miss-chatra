// @marketplace school-fees-planner v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_school_fees_planner.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"SchoolFees",category:"finance",desc:"Plan and save for school fees",
  command:["schoolfees","educationfund","feesplanner"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const annual=parseFloat(args[0]),years=parseFloat(args[1])||3;
    if(isNaN(annual))return reply("Usage: "+pfx+"schoolfees <annual amount> [years]\nExample: "+pfx+"schoolfees 500000 4");
    const total=annual*years;const monthly=total/( years*12);
    return reply("School Fees Planner\n\nAnnual Fees: N"+annual.toLocaleString()+"\nYears: "+years+"\nTotal: N"+total.toLocaleString()+"\n\nSave monthly: N"+monthly.toLocaleString(undefined,{maximumFractionDigits:0})+"\nSave weekly: N"+(monthly/4).toLocaleString(undefined,{maximumFractionDigits:0})+"\n\nTip: Put in a high-yield savings or fixed deposit");
  }
};
