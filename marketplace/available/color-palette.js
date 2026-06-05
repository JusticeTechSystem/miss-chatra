// @marketplace color-palette v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ColorPalette", category: "tools", desc: "Generate color palettes for design",
  command: ["colorpalette","generatecolors","designcolors"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PALETTES={professional:['#2C3E50 (Deep Navy)','#3498DB (Bright Blue)','#ECF0F1 (Light Gray)','#FFFFFF (White)','#2ECC71 (Green Accent)'],warm:['#E74C3C (Red)','#E67E22 (Orange)','#F1C40F (Yellow)','#F39C12 (Amber)','#D35400 (Dark Orange)'],cool:['#3498DB (Blue)','#9B59B6 (Purple)','#1ABC9C (Teal)','#2ECC71 (Green)','#27AE60 (Dark Green)'],nigerian:['#008751 (Nigerian Green)','#FFFFFF (White)','#F5A623 (Gold)','#7B2D8B (Royal Purple)','#C0392B (Deep Red)']};
    const theme=(args[0]||'professional').toLowerCase();
    const palette=PALETTES[theme]||PALETTES.professional;
    return reply("Color Palette ("+theme+")\n\n"+palette.map((c,i)=>(i+1)+". "+c).join("\n")+"\n\nThemes: professional, warm, cool, nigerian\nCopy hex codes to use in your designs!");
  }
};
