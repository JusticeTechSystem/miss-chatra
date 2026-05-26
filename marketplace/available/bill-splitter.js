// @marketplace bill-splitter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name:"BillSplitter", category:"finance", desc:"Split bills equally or by percentage among group members",
  command:["split","splitbill","billsplit"],
  run: async({args,command,reply,prefix,sock,chatId,m})=>{
    const pfx=prefix||"/";
    if(args.length<2) return reply("Usage: "+pfx+"split <total amount> <number of people> [tip%]\nExample: "+pfx+"split 15000 4\nExample: "+pfx+"split 15000 4 10");
    const total=parseFloat(args[0]);
    const people=parseInt(args[1]);
    const tip=parseFloat(args[2])||0;
    if(isNaN(total)||isNaN(people)||people<1) return reply("❌ Invalid. Example: "+pfx+"split 15000 4");
    const tipAmount=total*(tip/100);
    const grandTotal=total+tipAmount;
    const perPerson=grandTotal/people;
    return reply([
      "🧾 *Bill Splitter*","",
      "💰 Bill Total: ₦"+total.toLocaleString(),
      tip>0?"🎁 Tip ("+tip+"%): ₦"+tipAmount.toLocaleString():"",
      tip>0?"💵 Grand Total: ₦"+grandTotal.toLocaleString():"",
      "👥 Split among: "+people+" people","",
      "💳 *Each person pays: ₦"+perPerson.toLocaleString(undefined,{maximumFractionDigits:2})+"*",
    ].filter(Boolean).join("\n"));
  }
};
