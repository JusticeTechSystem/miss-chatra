// @marketplace birthday-tracker v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "BirthdayTracker", category: "lifestyle",
  desc: "Never forget a birthday again",
  command: ["birthday", "addbirthday", "upcomingbirthdays", "birthdays", "mybirthday"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","birthdays.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]=[];
    if(command==="addbirthday"){
      const name=args.slice(0,-1).join(" "),date=args[args.length-1];
      if(!name||!/^\d{2}-\d{2}$|^\d{4}-\d{2}-\d{2}$/.test(date)) return reply("Usage: "+pfx+"addbirthday <n> DD-MM\nExample: "+pfx+"addbirthday Justice 15-08\nExample: "+pfx+"addbirthday Mary 1995-03-22");
      all[chatId].push({name,date,addedBy:m?.pushName||"Member"});save(all);
      return reply("🎂 Birthday added: *"+name+"* — "+date+"\n\n_Type /upcomingbirthdays to see who\'s next_");
    }
    if(command==="upcomingbirthdays"||command==="birthdays"){
      if(!all[chatId].length) return reply("No birthdays added.\n"+pfx+"addbirthday Justice 15-08");
      const now=new Date();
      const withDays=all[chatId].map(b=>{
        const parts=b.date.includes("-")?b.date.split("-"):b.date.split("/");
        const month=parseInt(parts[parts.length-2])-1,day=parseInt(parts[parts.length-1]);
        let next=new Date(now.getFullYear(),month,day);
        if(next<now)next.setFullYear(now.getFullYear()+1);
        return{...b,daysAway:Math.ceil((next-now)/86400000),nextDate:next};
      }).sort((a,b)=>a.daysAway-b.daysAway);
      const lines=["🎂 *Upcoming Birthdays*\n"];
      withDays.slice(0,10).forEach(b=>{
        const emoji=b.daysAway===0?"🎉🎉":b.daysAway<=7?"🎂":b.daysAway<=30?"📅":"";
        lines.push(emoji+" *"+b.name+"* — "+b.daysAway+" days away ("+b.date+")");
      });
      return reply(lines.join("\n"));
    }
    if(command==="mybirthday"){
      const month=new Date().getMonth()+1;const day=new Date().getDate();
      const todayBirthdays=all[chatId].filter(b=>{
        const parts=b.date.split("-");const m=parseInt(parts[parts.length-2]),d=parseInt(parts[parts.length-1]);
        return m===month&&d===day;
      });
      if(todayBirthdays.length) return reply("🎉 *Today\'s Birthdays!*\n\n"+todayBirthdays.map(b=>"🎂 Happy Birthday *"+b.name+"*! 🎊").join("\n"));
      return reply("No birthdays today.\n"+pfx+"upcomingbirthdays — see upcoming");
    }
  }
};
