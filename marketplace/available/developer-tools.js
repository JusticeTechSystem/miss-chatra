// @marketplace developer-tools v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "DevTools", category: "tools", desc: "Quick development reference",
  command: ["devref","coderef","quickref","devtools"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const refs={git:['git init - initialize repo','git add . - stage all changes','git commit -m "msg" - commit','git push origin main - push','git pull - get latest','git status - check status','git log - view history','git branch - list branches'],npm:['npm init - new project','npm install - install deps','npm run dev - start dev','npm run build - build','npm test - run tests','npm publish - publish package'],linux:['ls - list files','cd - change directory','mkdir - make directory','rm -rf - remove force','grep - search text','chmod - change permissions','sudo - admin commands','ps aux - list processes']};
    const topic=(args[0]||'git').toLowerCase();
    const cmds2=refs[topic]||refs.git;
    return reply("Quick Reference: "+topic.toUpperCase()+"\n\n"+cmds2.map((c,i)=>(i+1)+". "+c).join("\n")+"\n\nTopics: git, npm, linux");
  }
};
