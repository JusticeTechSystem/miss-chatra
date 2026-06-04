// @marketplace joke-generator v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "JokeGenerator", category: "entertainment",
  desc: "Generate jokes by category",
  command: ["jokes", "telljoke", "darkjoke", "daddjoke"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const JOKES={general:["Why don\'t scientists trust atoms? Because they make up everything!","I told my doctor I broke my arm in two places. He told me to stop going to those places.","What do you call a sleeping dinosaur? A dino-snore!","Why did the bicycle fall over? It was two-tired!","I\'m reading a book about anti-gravity. It\'s impossible to put down."],dad:["Why do fathers take an extra pair of socks to golf? In case they get a hole in one!","What\'s a vampire\'s favorite fruit? A blood orange!","Why can\'t you hear a pterodactyl go to the bathroom? Because the P is silent!","I only know 25 letters of the alphabet. I don\'t know y.","Did you hear about the mathematician who\'s afraid of negative numbers? He\'ll stop at nothing to avoid them!"],naija:["Nigerian dad: I have 5 children but I only like 4 of them. Kids: Dad which one don\'t you like? Dad: The one waking up at 2am asking who likes them.","Why do Nigerian parents not believe in complimenting their children? They say if you praise a child too much they\'ll carry last in class!","Nigerian mum: I need you to go to the market. You: I\'m sick. Nigerian mum: What kind of sickness is that? Go and die there if you want.","Teacher: Use \'beautiful\' in a sentence. Naija Student: My mother told my father get out and he said beautiful.","In Nigeria 5 minutes can mean anything from 5 minutes to 5 hours. Plan accordingly."]};
    const cat=(args[0]||"general").toLowerCase();
    const list=JOKES[cat]||JOKES.general;
    return reply("😂 *"+cat.toUpperCase()+" Joke*\n\n"+list[Math.floor(Math.random()*list.length)]+"\n\n_/jokes general|dad|naija_");
  }
};
