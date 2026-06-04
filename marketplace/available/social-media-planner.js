// @marketplace social-media-planner v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "SocialPlanner", category: "business", desc: "Plan social media content calendar",
  command: ["socialmedia","contentplan","postplanner","contentcal"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const IDEAS={monday:['Motivational Monday - share an inspiring quote','Behind the scenes of your business','Team introduction post'],tuesday:['Product/service spotlight','Customer testimonial','Tutorial or how-to post'],wednesday:['Mid-week check-in with followers','Industry tip or insight','Throwback to your journey'],thursday:['Throwback Thursday','Partner or collaboration post','Educational infographic content'],friday:['Friday fun or humor related to your industry','Weekend promo or offer','Reflection on the week'],saturday:['User-generated content repost','Weekend activity related to your brand','Engagement question'],sunday:['Inspiration for the week ahead','Preview of upcoming week','Community appreciation post']};
    const day=(args[0]||new Date().toLocaleDateString('en-US',{weekday:'long'})).toLowerCase();
    const ideas=IDEAS[day]||IDEAS.monday;
    return reply("Content Ideas for "+day.toUpperCase()+"\n\n"+ideas.map((x,i)=>(i+1)+". "+x).join("\n")+"\n\nTip: Post consistently at your audience's peak time.\n/contentplan <day> for ideas");
  }
};
