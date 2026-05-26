// @marketplace color-converter v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ColorConverter", category: "tools",
  desc: "Convert between color formats (hex, rgb, hsl)",
  command: ["color", "hex2rgb", "rgb2hex", "colorconvert", "hsl"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    if(!args.length) return reply("🎨 *Color Converter*\n\n"+pfx+"color #FF5733 — hex to RGB\n"+pfx+"hex2rgb FF5733\n"+pfx+"rgb2hex 255 87 51");
    if(command==="hex2rgb"||args[0].startsWith("#")){
      const hex=args[0].replace("#","");
      if(!/^[0-9a-fA-F]{6}$/.test(hex)) return reply("Invalid hex color. Example: "+pfx+"hex2rgb FF5733");
      const r=parseInt(hex.slice(0,2),16),g=parseInt(hex.slice(2,4),16),b=parseInt(hex.slice(4,6),16);
      const h=parseInt(hex,16);
      return reply("🎨 *Color: #"+hex.toUpperCase()+"*\n\nRGB: rgb("+r+", "+g+", "+b+")\nHSL: Approx hsl("+(Math.round(Math.atan2(Math.sqrt(3)*(g-b),2*r-g-b)*180/Math.PI+360)%360)+", 100%, 50%)\n\nDecimal: "+h);
    }
    if(command==="rgb2hex"||args.length>=3){
      const r=parseInt(args[0]),g=parseInt(args[1]),b=parseInt(args[2]);
      if([r,g,b].some(isNaN)) return reply("Usage: "+pfx+"rgb2hex 255 87 51");
      const hex=((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1).toUpperCase();
      return reply("🎨 *RGB("+r+", "+g+", "+b+")*\n\nHex: #"+hex+"\n\n_Use in CSS: color: #"+hex+"_");
    }
  }
};
