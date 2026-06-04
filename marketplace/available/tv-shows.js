// @marketplace tv-shows v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "TVShows", category: "entertainment",
  desc: "TV show recommendations by category",
  command: ["tvshow", "series", "seriesrec", "showrec"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const SHOWS={drama:["Breaking Bad","The Wire","Succession","Ozark","The Crown","Fleabag","The Americans","Better Call Saul","Miniseries","House of Cards"],comedy:["The Office","Schitt\'s Creek","Brooklyn Nine-Nine","Ted Lasso","What We Do in the Shadows","Abbott Elementary","The Good Place","Parks and Recreation","Arrested Development","Silicon Valley"],thriller:["Mindhunter","The Boys","Yellowjackets","Squid Game","Money Heist","Dark","Orphan Black","Mr Robot","Black Mirror","Westworld"],reality:["Survivor","The Amazing Race","MasterChef","The Great British Bake Off","Ru Paul\'s Drag Race","Top Chef","The Circle","Alone","Nailed It","The Traitors"],nigerian:["Tinsel","Jenifa\'s Diary","MTV Shuga","Super Story","My Flatmates","Halita","Taste of Love","Jemeji","Papa Ajasco","Village Headmaster"],kdrama:["Crash Landing on You","Goblin","Itaewon Class","My Love from the Star","Kingdom","Vincenzo","Reply 1988","Signal","Flower of Evil","Mr Sunshine"],anime:["Attack on Titan","Demon Slayer","One Piece","Naruto","Fullmetal Alchemist Brotherhood","Death Note","Jujutsu Kaisen","Spy x Family","Hunter x Hunter","My Hero Academia"]};
    const cat=(args[0]||"").toLowerCase();
    if(!cat||!SHOWS[cat]) return reply("📺 *TV Shows*\n\nCategories: "+Object.keys(SHOWS).join(", ")+"\n\n"+pfx+"tvshow drama\n"+pfx+"tvshow kdrama\n"+pfx+"tvshow nigerian");
    const picks=SHOWS[cat].sort(()=>Math.random()-0.5).slice(0,5);
    return reply("📺 *"+cat.toUpperCase()+" Shows*\n\n"+picks.map((s,i)=>(i+1)+". *"+s+"*").join("\n")+"\n\n_/tvshow <category> for more_");
  }
};
