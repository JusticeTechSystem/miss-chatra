// @marketplace hash-generator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "HashGenerator", category: "tools",
  desc: "Generate MD5, SHA256 and other hashes",
  command: ["hash", "md5", "sha256", "checksum", "hashtext"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!args.length) return reply("🔐 *Hash Generator*\n\n"+pfx+"sha256 Hello World\n"+pfx+"md5 mypassword\n"+pfx+"hash Hello World\n\nUseful for checksums and verifying data integrity");
    const text=args.join(" ");
    const crypto=require("crypto");
    if(command==="md5") return reply("🔐 *MD5 Hash*\n\nInput: "+text+"\n\nMD5: "+crypto.createHash("md5").update(text).digest("hex")+"\n\n⚠️ MD5 is not secure for passwords. Use SHA256 instead.");
    if(command==="sha256"||command==="hash"||command==="hashtext"){
      const sha256=crypto.createHash("sha256").update(text).digest("hex");
      const sha1=crypto.createHash("sha1").update(text).digest("hex");
      return reply("🔐 *Hash Values*\n\n📝 Input: "+text+"\n\nSHA256:\n"+sha256+"\n\nSHA1:\n"+sha1);
    }
  }
};
