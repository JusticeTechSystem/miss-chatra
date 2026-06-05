// @marketplace receipt-generator v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_receipt_generator.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"ReceiptGenerator",category:"business",desc:"Generate simple payment receipts",
  command:["receipt2","makereceipt","printreceipt"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const amount=parseFloat(args[0]);const customer=args[1]||'Customer';const item=args.slice(2).join(' ')||'Payment';
    if(isNaN(amount))return reply("Usage: "+pfx+"receipt2 <amount> <customer> <description>\nExample: "+pfx+"receipt2 50000 'Mrs Ada' 'Monthly rent'");
    const receiptNum='RCT-'+Date.now().toString(36).toUpperCase().slice(-6);
    return reply(["════════════════════","    RECEIPT","════════════════════","No: "+receiptNum,"Date: "+new Date().toLocaleDateString(),"","Customer: "+customer,"Description: "+item,"","Amount: N"+amount.toLocaleString(),"────────────────────","PAID: N"+amount.toLocaleString(),"════════════════════","   Thank you!","════════════════════"].join("\n"));
  }
};
