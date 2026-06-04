// @marketplace math-tutor v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MathTutor", category: "education",
  desc: "Step-by-step math problem solver",
  command: ["mathsolve", "solve", "calculate2", "mathhelp"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!args.length) return reply("📐 *Math Tutor*\n\nSolve expressions:\n"+pfx+"solve 15% of 50000\n"+pfx+"solve 2^10\n"+pfx+"solve sqrt 144\n"+pfx+"solve area circle 7");
    const expr=args.join(" ").toLowerCase();
    if(expr.includes("% of")){
      const[pctStr,,total]=expr.split(" ");
      const pct=parseFloat(pctStr),tot=parseFloat(total);
      return reply("📊 "+pct+"% of "+tot+" = *"+(tot*pct/100).toLocaleString(undefined,{maximumFractionDigits:2})+"*");
    }
    if(expr.startsWith("sqrt")){
      const n=parseFloat(args[1]);
      return reply("√"+n+" = *"+Math.sqrt(n).toFixed(4)+"*");
    }
    if(expr.includes("^")){
      const[base,exp]=expr.split("^").map(Number);
      return reply(base+"^"+exp+" = *"+Math.pow(base,exp).toLocaleString()+"*");
    }
    if(expr.includes("area circle")){
      const r=parseFloat(args[args.length-1]);
      return reply("Circle area (r="+r+") = *"+(Math.PI*r*r).toFixed(4)+"*");
    }
    if(expr.includes("area square")){
      const s=parseFloat(args[args.length-1]);
      return reply("Square area (s="+s+") = *"+(s*s)+"*");
    }
    try{
      const result=eval(expr.replace(/[^0-9+\-*\/\.\(\) ]/g,""));
      return reply("🧮 "+expr+" = *"+result+"*");
    }catch{return reply("❌ Could not solve: "+expr+"\nTry: "+pfx+"solve 2+2 or "+pfx+"solve 15% of 50000");}
  }
};
