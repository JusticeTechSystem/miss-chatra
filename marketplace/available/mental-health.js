// @marketplace mental-health v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MentalHealthSupport", category: "health",
  desc: "Mental health tips and crisis support",
  command: ["mentalhealth", "anxiety", "depression", "stress", "selfcare"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const TIPS={anxiety:["Breathe: 4 counts in, 4 hold, 4 out. Repeat 5 times","Name 5 things you can see, 4 you can touch, 3 you can hear","Your anxiety is lying to you — thoughts are not facts","Go for a 10 minute walk. Movement reduces cortisol","Cold water on your wrists can reduce panic","Talk to someone — anxiety grows in silence","Journaling: write what worries you, then write the realistic outcome"],stress:["Write down everything stressing you — then identify what you can control","One task at a time — multitasking increases cortisol by 40%","30 minutes of exercise reduces stress hormones for hours","Sleep is non-negotiable — protect it","Say no more. Boundaries reduce chronic stress","Take regular breaks — the human brain can focus for ~90 minutes max","Talk to someone you trust"],depression:["Depression is an illness, not a weakness","Tell someone how you\'re feeling — isolation makes it worse","Try to maintain a routine even when it\'s hard","Small wins count — showering, eating, going outside","Sunlight for 15 minutes daily improves mood","Avoid alcohol — it\'s a depressant","Professional help works — therapy + medication when needed"],crisis:["In a mental health crisis, call Nigeria Suicide Prevention: 0800-500-1000","You are not alone. People survive this.","Go to your nearest hospital A&E if you feel unsafe","Tell someone near you what\'s happening","Remove yourself from immediate danger first","The pain is real but it is temporary"]};
    const topic=(args[0]||"stress").toLowerCase();
    const tips=TIPS[topic]||TIPS.stress;
    return reply("💚 *Mental Health: "+topic.toUpperCase()+"*\n\n"+(topic==="crisis"?"🆘 EMERGENCY RESOURCES:\n":"💡 *Tips:*\n")+tips.map((t,i)=>(i+1)+". "+t).join("\n")+"\n\n_Topics: anxiety, stress, depression, crisis_\n_"+pfx+"mentalhealth crisis for emergency support_");
  }
};
