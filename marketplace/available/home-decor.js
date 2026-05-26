// @marketplace home-decor v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "HomeDecorIdeas", category: "lifestyle", desc: "Home decoration ideas on a budget",
  command: ["homedecor","decorideas","interiorideas","homedecorate"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const IDEAS={living:['Add throw pillows in bold colors to update your sofa','Hang mirrors to make the room look larger','Group 3 plants of different heights for a natural look','Use string lights for ambient lighting','Frame your favorite quotes as wall art'],bedroom:['Layer your bedding with different textures','Use blackout curtains for better sleep','Add a rug under your bed for warmth','Create a reading nook with a comfy chair','Use under-bed storage boxes to reduce clutter'],kitchen:['Paint one wall a bold accent color','Add open shelving to display dishes','Use matching containers for dry goods','Hang a chalkboard for a menu or notes','Fresh herbs on windowsill - functional and decorative']};
    const room=(args[0]||'living').toLowerCase();
    const ideas=IDEAS[room]||IDEAS.living;
    return reply("Home Decor Ideas ("+room+")\n\n"+ideas.map((x,i)=>(i+1)+". "+x).join("\n")+"\n\nRooms: living, bedroom, kitchen\nMost of these cost under N5,000!");
  }
};
