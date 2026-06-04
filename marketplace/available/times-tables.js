// @marketplace times-tables v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TimesTables", category: "education", desc: "Practice multiplication tables",
  command: ["timestable","multiplication","multiplyby"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const n=parseInt(args[0])||Math.floor(Math.random()*12)+1;
    const lines=["Multiplication Table: "+n+"\n"];
    for(let i=1;i<=12;i++) lines.push(n+" x "+i+" = "+(n*i));
    return reply(lines.join("\n"));
  }
};
