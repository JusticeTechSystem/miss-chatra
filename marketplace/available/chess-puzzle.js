// @marketplace chess-puzzle v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "ChessPuzzle", category: "games",
  desc: "Daily chess puzzles and tactics",
  command: ["chess", "chesspuzzle", "chessquiz", "tacticspuzzle"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    const PUZZLES=[{fen:"White to move and win in 2",solution:"Rxh7+ Kxh7 Qh5#",theme:"Back rank mate",difficulty:"Easy"},{fen:"Black to move and win material",solution:"Nd4 winning the queen",theme:"Fork",difficulty:"Easy"},{fen:"White to move — find the winning tactic",solution:"Bxh7+ Kxh7 Ng5+ Kg8 Qh5 threatening Qxf7#",theme:"Greek Gift Sacrifice",difficulty:"Hard"},{fen:"Find the forced checkmate",solution:"Qg7+ Rxg7 Rxg7+ Kh8 Rg8#",theme:"Smothered mate",difficulty:"Medium"},{fen:"White is down material — find perpetual check",solution:"Qh6+ Kg8 Qg5+ Kh8 Qh6+",theme:"Perpetual check",difficulty:"Medium"}];
    const p=PUZZLES[Math.floor(Math.random()*PUZZLES.length)];
    return reply("♟️ *Chess Puzzle*\n\n📋 Position: "+p.fen+"\n🎯 Theme: "+p.theme+"\n⚡ Difficulty: "+p.difficulty+"\n\n_Reply /chesspuzzle reveal to see solution_\n\nThink carefully before revealing!");
  }
};
