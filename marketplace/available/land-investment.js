// @marketplace land-investment v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_land_investment.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"LandInvestment",category:"finance",desc:"Calculate land investment returns",
  command:["landinvest","landreturn","propertyinvest"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const cost=parseFloat(args[0]),sellprice=parseFloat(args[1]),years=parseFloat(args[2])||3;
    if([cost,sellprice].some(isNaN))return reply("Usage: "+pfx+"landinvest <buy price> <expected sell> [years]\nExample: "+pfx+"landinvest 5000000 12000000 3");
    const profit=sellprice-cost;const total_roi=((profit/cost)*100).toFixed(1);
    const annual_roi=(total_roi/years).toFixed(1);
    return reply("Land Investment Analysis\n\nPurchase: N"+cost.toLocaleString()+"\nExpected Sale: N"+sellprice.toLocaleString()+"\nHolding period: "+years+" years\n\nProfit: N"+profit.toLocaleString()+"\nTotal ROI: "+total_roi+"%\nAnnual ROI: "+annual_roi+"%\n\n"+(annual_roi>15?"Strong investment! Above average returns.":annual_roi>8?"Decent. Consider inflation factor.":"Below bank rates — reconsider."));
  }
};
