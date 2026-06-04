// @marketplace generator-cost v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_generator_cost.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"GeneratorCost",category:"finance",desc:"Calculate monthly generator running cost",
  command:["gencost","generatorcost","lightcost"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const hrs=parseFloat(args[0])||6,litres=parseFloat(args[1])||2,days=parseFloat(args[2])||20,pricePerLitre=parseFloat(args[3])||1100;
    const dailyCost=litres*hrs*pricePerLitre/hrs*hrs;
    const monthlyCost=dailyCost*days;
    const oilService=5000;const maintenance=3000;const total=monthlyCost+oilService+maintenance;
    return reply("Generator Cost Calculator\n\nHours/day: "+hrs+"\nLitres/hour: "+litres+"\nDays/month: "+days+"\nPetrol: N"+pricePerLitre+"/litre\n\nFuel cost: N"+monthlyCost.toLocaleString()+"\nOil change: N"+oilService.toLocaleString()+"\nMaintenance: N"+maintenance.toLocaleString()+"\n\nMonthly Total: N"+total.toLocaleString()+"\n\n💡 Equivalent solar system pays off in ~18 months");
  }
};
