// @marketplace reading-list v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ReadingList", category: "productivity", desc: "Track books to read and reading progress",
  command: ["readinglist","readbooks","booklist","toread"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','reading.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[userId])all[userId]=[];
    if(command==='toread'&&args.length){
      const title=args.join(' ');
      all[userId].push({title,status:'to-read',added:new Date().toLocaleDateString()});save(all);
      return reply("Added to reading list: "+title);
    }
    if(command==='readbooks'&&args.length){
      const title=args.join(' ');
      const book=all[userId].find(b=>b.title.toLowerCase().includes(title.toLowerCase()));
      if(book){book.status='completed';book.finished=new Date().toLocaleDateString();save(all);return reply("Marked as read: "+book.title+"\nCompleted: "+book.finished);}
      return reply("Book not found in your list.");
    }
    if(!all[userId].length) return reply("No books in list.\n"+pfx+"toread Atomic Habits\n"+pfx+"toread Rich Dad Poor Dad");
    const toRead=all[userId].filter(b=>b.status==='to-read');
    const done=all[userId].filter(b=>b.status==='completed');
    return reply("Reading List\n\nTo Read ("+toRead.length+"):\n"+toRead.slice(0,5).map((b,i)=>(i+1)+". "+b.title).join("\n")+"\n\nCompleted ("+done.length+"):\n"+done.slice(-3).map(b=>"+ "+b.title).join("\n"));
  }
};
