// @marketplace file-size-converter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "FileSizeConverter", category: "tools",
  desc: "Convert between file size units",
  command: ["filesize", "bytes", "megabytes", "kilobytes", "gbconvert"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const size=parseFloat(args[0]);const from=(args[1]||"MB").toUpperCase();const to=(args[2]||"all").toUpperCase();
    if(isNaN(size)) return reply("Usage: "+pfx+"filesize <size> <from_unit> [to_unit]\nExample: "+pfx+"filesize 1024 MB GB\nUnits: B, KB, MB, GB, TB");
    const toBytes={B:1,KB:1024,MB:1048576,GB:1073741824,TB:1099511627776};
    const bytes=size*(toBytes[from]||1048576);
    if(to==="ALL"){
      const lines=["📁 *File Size Conversion*\n","Input: "+size+" "+from+"\n"];
      Object.entries(toBytes).forEach(([unit,factor])=>{
        const val=(bytes/factor);
        lines.push("  "+unit+": "+(val>=1000?val.toLocaleString(undefined,{maximumFractionDigits:2}):val.toFixed(val<1?6:2)));
      });
      return reply(lines.join("\n"));
    }
    const result=bytes/(toBytes[to]||1);
    return reply("📁 "+size+" "+from+" = *"+result.toLocaleString(undefined,{maximumFractionDigits:6})+" "+to+"*");
  }
};
