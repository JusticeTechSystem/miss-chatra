// @marketplace tip-calculator v1.0.0 by JusticeTech
"use strict";
module.exports={name:"TipCalculator",category:"finance",desc:"Calculate tips and split restaurant bills",
  command:["tip","tipcalculator"],
  run:async({args,reply,prefix})=>{
    const pfx=prefix||"/";
    const bill=parseFloat(args[0]);
    const tipPct=parseFloat(args[1])||15;
    const people=parseInt(args[2])||1;
    if(isNaN(bill)) return reply("Usage: "+pfx+"tip <bill> [tip%] [people]\nExample: "+pfx+"tip 12000 15 3");
    const tipAmt=bill*(tipPct/100);
    const total=bill+tipAmt;
    const perPerson=total/people;
    return reply("💡 *Tip Calculator*\n\n💰 Bill: ₦"+bill.toLocaleString()+"\n🎁 Tip ("+tipPct+"%): ₦"+tipAmt.toLocaleString(undefined,{maximumFractionDigits:2})+"\n💵 Total: ₦"+total.toLocaleString(undefined,{maximumFractionDigits:2})+"\n👥 People: "+people+"\n\n*Per person: ₦"+perPerson.toLocaleString(undefined,{maximumFractionDigits:2})+"*");
  }
};
