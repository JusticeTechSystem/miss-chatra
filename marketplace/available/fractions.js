// @marketplace fractions v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FractionCalc", category: "education", desc: "Add, subtract, multiply and divide fractions",
  command: ["fraction","fractions","fracmath"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const gcd=(a,b)=>b===0?a:gcd(b,a%b);
    if(!args[0]) return reply("Usage: "+pfx+"fraction 1/2 + 1/3\nOperations: + - * /");
    const input=args.join(' ');
    const match=input.match(/(\d+)\/( \d+)\s*([+\-*/])\s*(\d+)\/(\d+)/);
    if(!match) return reply("Format: "+pfx+"fraction 1/2 + 1/3");
    const[,n1,d1,op,n2,d2]=match.map((v,i)=>i>0?parseInt(v):v);
    let rn,rd;
    if(op==='+'){rn=n1*d2+n2*d1;rd=d1*d2;}
    else if(op==='-'){rn=n1*d2-n2*d1;rd=d1*d2;}
    else if(op==='*'){rn=n1*n2;rd=d1*d2;}
    else{rn=n1*d2;rd=d1*n2;}
    const g=gcd(Math.abs(rn),Math.abs(rd));
    return reply(n1+"/"+d1+" "+op+" "+n2+"/"+d2+" = "+(rn/g)+"/"+(rd/g));
  }
};
