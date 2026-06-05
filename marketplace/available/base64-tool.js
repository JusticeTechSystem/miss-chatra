// @marketplace base64-tool v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "Base64Tool", category: "tools",
  desc: "Encode and decode Base64 strings",
  command: ["base64", "encode", "decode", "b64encode", "b64decode"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!args.length) return reply("🔐 *Base64 Tool*\n\n"+pfx+"encode Hello World\n"+pfx+"decode SGVsbG8gV29ybGQ=\n\nUseful for encoding data, images, and API payloads");
    const text=args.slice(command==="encode"||command==="b64encode"?0:0).join(" ");
    if(command==="encode"||command==="b64encode"){
      const encoded=Buffer.from(text).toString("base64");
      return reply("🔒 *Base64 Encoded*\n\nInput: "+text+"\n\nOutput:\n```"+encoded+"```");
    }
    if(command==="decode"||command==="b64decode"){
      try{
        const decoded=Buffer.from(text,"base64").toString("utf8");
        return reply("🔓 *Base64 Decoded*\n\nInput: "+text+"\n\nOutput:\n"+decoded);
      }catch{return reply("❌ Invalid Base64 string");}
    }
  }
};
