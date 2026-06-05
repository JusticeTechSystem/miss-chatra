// @marketplace customer-feedback v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CustomerFeedback", category: "business", desc: "Collect and manage customer feedback",
  command: ["feedback2","customerfeedback","collectfeedback","getfeedback"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require('fs'),path=require('path');
    const DB=path.join(__dirname,'../../..','database','feedback2.json');
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={feedback:[]};
    if(command==='collectfeedback'&&args.length){
      const rating=parseInt(args[0]);const comment=args.slice(1).join(' ');
      if(isNaN(rating)||rating<1||rating>5) return reply("Usage: "+pfx+"collectfeedback <1-5> <comment>\nExample: "+pfx+"collectfeedback 5 Excellent service!");
      all[chatId].feedback.push({rating,comment,name:m?.pushName||'Customer',date:new Date().toLocaleDateString()});save(all);
      const stars='★'.repeat(rating)+'☆'.repeat(5-rating);
      return reply("Feedback received! "+stars+"\nThank you, "+( m?.pushName||'Customer')+"!");
    }
    const fb=all[chatId].feedback;
    if(!fb.length) return reply("No feedback yet.\n"+pfx+"collectfeedback 5 Great service!");
    const avg=(fb.reduce((s,x)=>s+x.rating,0)/fb.length).toFixed(1);
    return reply("Customer Feedback Summary\n\nTotal: "+fb.length+"\nAvg Rating: "+avg+"/5\n\nRecent:\n"+fb.slice(-3).map(f=>'★'.repeat(f.rating)+' '+f.comment+' ('+f.name+')').join("\n"));
  }
};
