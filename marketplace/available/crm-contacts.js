// @marketplace crm-contacts v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CRMContacts", category: "business",
  desc: "Simple CRM for managing contacts and leads",
  command: ["crm", "addlead", "leads", "leadnotes", "pipelinestatus"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const fs=require("fs"),path=require("path");
    const DB=path.join(__dirname,"../../..","database","crm.json");
    const load=()=>{try{return JSON.parse(fs.readFileSync(DB,"utf8"));}catch{return {};}};
    const save=d=>{try{fs.writeFileSync(DB,JSON.stringify(d,null,2));}catch{}};
    const all=load();if(!all[chatId])all[chatId]={contacts:{},counter:0};
    const d=all[chatId];
    if(command==="addlead"){
      const[name,...rest]=args;const phone=rest[0]||"";const note=rest.slice(1).join(" ")||"";
      if(!name) return reply("Usage: "+pfx+"addlead <n> <phone> [note]\nExample: "+pfx+"addlead \"John Smith\" 08012345678 Interested in premium package");
      d.counter=(d.counter||0)+1;
      const id="L-"+String(d.counter).padStart(4,"0");
      d.contacts[id]={id,name,phone,note,status:"new",addedAt:new Date().toLocaleDateString(),notes:[],addedBy:m?.pushName||"Admin"};
      save(all);
      return reply("✅ *Lead Added: "+id+"*\n\n👤 "+name+"\n📱 "+phone+(note?"\n📝 "+note:"")+"\n🔄 Status: New\n\nUpdate: "+pfx+"pipelinestatus "+id+" contacted");
    }
    if(command==="pipelinestatus"){
      const[id,status,...noteArr]=args;
      const contact=d.contacts[id?.toUpperCase()];
      if(!contact) return reply("Lead not found: "+id+"\n"+pfx+"leads to see all leads");
      const STATUSES=["new","contacted","qualified","proposal","negotiation","closed-won","closed-lost"];
      if(!STATUSES.includes(status)) return reply("Status must be: "+STATUSES.join(", "));
      contact.status=status;
      if(noteArr.length) contact.notes.push({text:noteArr.join(" "),date:new Date().toLocaleDateString()});
      save(all);
      return reply("✅ *"+contact.name+"* status → *"+status+"*");
    }
    if(command==="leads"){
      const contacts=Object.values(d.contacts);
      if(!contacts.length) return reply("No leads.\n"+pfx+"addlead \"John Smith\" 08012345678");
      const ICONS={new:"🆕",contacted:"📞",qualified:"✅",proposal:"📄",negotiation:"🤝","closed-won":"🏆","closed-lost":"❌"};
      const lines=["📊 *CRM Pipeline*\n"];
      contacts.slice(-10).forEach(c=>lines.push((ICONS[c.status]||"⚪")+" *"+c.name+"* ("+c.id+") — "+c.status));
      lines.push("\nTotal: "+contacts.length+" contacts");
      return reply(lines.join("\n"));
    }
    if(command==="leadnotes"){
      const id=(args[0]||"").toUpperCase();
      const contact=d.contacts[id];
      if(!contact) return reply("Lead not found: "+id);
      const lines=["📝 *Notes: "+contact.name+"*\n"];
      if(!contact.notes.length) return reply("No notes for "+contact.name+"\n\nAdd: "+pfx+"pipelinestatus "+id+" contacted <your note>");
      contact.notes.forEach((n,i)=>lines.push((i+1)+". "+n.text+" — "+n.date));
      return reply(lines.join("\n"));
    }
  }
};
