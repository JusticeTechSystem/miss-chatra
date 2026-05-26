"use strict";
const JOKES=[["Why don't scientists trust atoms?","Because they make up everything!"],["What do you call a fish without eyes?","A fsh!"],["Why did the scarecrow win an award?","Because he was outstanding in his field!"],["What do you call cheese that isn't yours?","Nacho cheese!"],["Why can't you give Elsa a balloon?","Because she'll let it go!"],["What do you call a sleeping dinosaur?","A dino-snore!"],["Why did the bicycle fall over?","Because it was two-tired!"],["What do you call a fake noodle?","An impasta!"],["Why did the coffee file a police report?","It got mugged!"],["What do you call a bear with no teeth?","A gummy bear!"],["I told my wife she was drawing her eyebrows too high.","She looked surprised!"],["Why don't eggs tell jokes?","They'd crack each other up!"],["What do you call a pig that does karate?","A pork chop!"],["Why did the math book look so sad?","Because it had too many problems!"],["What do you call a lazy kangaroo?","A pouch potato!"]];
module.exports={name:"DailyJokes",category:"entertainment",desc:"Daily jokes and humor — brightens any group",
  command:["joke","jokes","funnyquote"],
  run:async({reply})=>{
    const[q,a]=JOKES[Math.floor(Math.random()*JOKES.length)];
    return reply("😄 *Joke of the Moment*\n\n"+q+"\n\n_"+a+"_ 😂");
  }
};
