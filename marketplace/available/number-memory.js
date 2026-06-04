// @marketplace number-memory v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "NumberMemory", category: "games", desc: "Test your number memory",
  command: ["numbermemory","memorizethis","memorytest"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const G=global.__nm=global.__nm||{};const key=chatId+'_nm_'+userId;
    if(!G[key]){
      const len=parseInt(args[0])||7;
      const num=Array.from({length:len},()=>Math.floor(Math.random()*10)).join('');
      G[key]={num,shown:Date.now()};
      setTimeout(()=>{if(G[key]&&G[key].num===num){G[key].hide=true;}},5000);
      return reply("Number Memory Test!\n\nMemorize this number (5 seconds):\n\n"+num+"\n\nWait for it to disappear then type it!");
    }
    const answer=args.join('');
    const{num}=G[key];delete G[key];
    return reply(answer===num?"Perfect memory! You got it right!\nNumber: "+num:"Wrong! The number was:\n"+num+"\nYou typed: "+answer+"\n\nTry again with "+pfx+"numbermemory");
  }
};
