// @marketplace dice-simulator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DiceSimulator", category: "tools",
  desc: "Advanced dice roller for tabletop games",
  command: ["dice2", "rolldice", "d20", "d6", "dnd", "tabletop"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!args.length) return reply("🎲 *Dice Simulator*\n\n"+pfx+"d6 — Roll 1d6\n"+pfx+"d20 — Roll 1d20\n"+pfx+"rolldice 2d6 — Roll 2 six-sided dice\n"+pfx+"rolldice 3d8+5 — Roll 3d8 and add 5\n"+pfx+"dnd — Roll all D&D stats");
    if(command==="dnd"){
      const rollStat=()=>{
        const rolls=[1,2,3,4].map(()=>Math.floor(Math.random()*6)+1);
        rolls.sort((a,b)=>a-b);
        return rolls.slice(1).reduce((s,n)=>s+n,0);
      };
      const stats={STR:rollStat(),DEX:rollStat(),CON:rollStat(),INT:rollStat(),WIS:rollStat(),CHA:rollStat()};
      const lines=["🎲 *D&D Character Stats*\n"];
      Object.entries(stats).forEach(([s,v])=>{
        const mod=Math.floor((v-10)/2);
        lines.push("  "+s+": *"+v+"* ("+(mod>=0?"+":"")+mod+")");
      });
      const total=Object.values(stats).reduce((s,n)=>s+n,0);
      lines.push("\n⚡ Total: "+total+" | "+pfx+"dnd to reroll");
      return reply(lines.join("\n"));
    }
    const notation=args[0]||"1d6";
    const match=notation.match(/(\d+)?d(\d+)([+-]\d+)?/i);
    if(!match) return reply("Format: NdN or NdN+bonus\nExamples: 2d6, 1d20, 3d8+5");
    const num=parseInt(match[1])||1;const sides=parseInt(match[2]);const bonus=parseInt(match[3])||0;
    if(num>20||sides>1000) return reply("Max 20 dice, max d1000");
    const rolls=[];
    for(let i=0;i<num;i++) rolls.push(Math.floor(Math.random()*sides)+1);
    const total=rolls.reduce((s,n)=>s+n,0)+bonus;
    return reply("🎲 *"+notation.toUpperCase()+"*\n\nRolls: "+rolls.join(", ")+(bonus!==0?" + "+bonus:"")+("\n*Total: "+total+"*")+(rolls.length>1?"\nAverage: "+(total/num).toFixed(1):""));
  }
};
