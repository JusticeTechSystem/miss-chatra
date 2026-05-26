"use strict";
module.exports={name:"PasswordGenerator",category:"tools",desc:"Generate strong random passwords",
  command:["password","genpass","strongpass"],
  run:async({args,reply,prefix})=>{
    const pfx=prefix||"/";
    const len=parseInt(args[0])||16;
    const type=(args[1]||"mixed").toLowerCase();
    if(len<4||len>100) return reply("Password length must be 4-100 characters.");
    const sets={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",nums:"0123456789",symbols:"!@#$%^&*()-_=+[]{}|;:,.<>?"};
    let chars="";
    if(type==="simple"||type==="letters")chars=sets.lower+sets.upper;
    else if(type==="numbers")chars=sets.nums;
    else if(type==="pin")chars=sets.nums;
    else chars=sets.lower+sets.upper+sets.nums+sets.symbols;
    let pass="";
    for(let i=0;i<len;i++)pass+=chars[Math.floor(Math.random()*chars.length)];
    const strength=len>=12&&/[A-Z]/.test(pass)&&/[0-9]/.test(pass)&&/[^A-Za-z0-9]/.test(pass)?"🟢 Strong":len>=8?"🟡 Medium":"🔴 Weak";
    return reply("🔐 *Generated Password*\n\n```"+pass+"```\n\n💪 Strength: "+strength+"\n📏 Length: "+len+" characters\n\n⚠️ _Copy and save this password safely!_\n\n_"+pfx+"password 20 — generate 20-char password_\n_Types: mixed, simple, numbers, pin_");
  }
};
