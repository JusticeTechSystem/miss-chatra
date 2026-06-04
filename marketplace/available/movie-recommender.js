// @marketplace movie-recommender v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "MovieRecommender", category: "entertainment",
  desc: "Get movie recommendations by genre",
  command: ["movie", "movierecommend", "watchlist", "filmrec"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const MOVIES={action:["John Wick","Mad Max Fury Road","Mission Impossible","The Dark Knight","Avengers Endgame","Top Gun Maverick","Fast and Furious","Black Panther","The Equalizer","Extraction"],comedy:["The Grand Budapest Hotel","Superbad","Game Night","Knives Out","The Nice Guys","Bridesmaids","About Time","What We Do in the Shadows","Spider-Man Into the Spider-Verse","The Death of Stalin"],drama:["The Shawshank Redemption","Schindler\'s List","Forrest Gump","The Godfather","A Beautiful Mind","Good Will Hunting","12 Years a Slave","Parasite","Moonlight","Marriage Story"],horror:["Get Out","A Quiet Place","Hereditary","The Conjuring","IT","Bird Box","Us","Midsommar","The Witch","Doctor Sleep"],romance:["The Notebook","Crazy Rich Asians","La La Land","About Time","Pride and Prejudice","Before Sunrise","When Harry Met Sally","Eternal Sunshine","Atonement","Letters to Juliet"],thriller:["Gone Girl","The Silence of the Lambs","Inception","Se7en","Parasite","Prisoners","Gone Baby Gone","Zodiac","The Girl with the Dragon Tattoo","Shutter Island"],scifi:["Interstellar","Arrival","Ex Machina","The Martian","Blade Runner 2049","Her","Annihilation","Gravity","Moon","Ad Astra"],nigerian:["King of Boys","Living in Bondage Remake","The Wedding Party","Citation","Mimi","Rattlesnake","A Tribe Called Judah","Blood Sisters","Anikulapo","Brotherhood"]};
    const genre=(args[0]||"").toLowerCase();
    if(!genre||!MOVIES[genre]) return reply("🎬 *Movie Recommender*\n\nGenres: "+Object.keys(MOVIES).join(", ")+"\n\n"+pfx+"movie action\n"+pfx+"movie nigerian\n"+pfx+"movie thriller");
    const list=MOVIES[genre];
    const picks=list.sort(()=>Math.random()-0.5).slice(0,5);
    return reply("🎬 *"+genre.toUpperCase()+" Movies*\n\n"+picks.map((m,i)=>(i+1)+". *"+m+"*").join("\n")+"\n\n_"+pfx+"movie <genre> for more recommendations_");
  }
};
