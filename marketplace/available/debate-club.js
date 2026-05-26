// @marketplace debate-club v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_debate_club.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"DebateClub",category:"education",desc:"Structured debate club with scores",
  command:["debateclub","scoredebate","classdebate"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    if(!canUse)return reply("Admin only.");
    if(args[0]==='start'){const topic=args.slice(1).join(' ');gs.debate={topic,teams:{for:[],against:[]},scores:{},active:true};save(gs);return reply("Debate started!\n\nTopic: "+topic+"\n\nJoin: /debateclub for OR /debateclub against");}
    if(args[0]==='for'||args[0]==='against'){if(!gs.debate?.active)return reply("No active debate.");gs.debate.teams[args[0]].push(norm(uid));save(gs);return reply("Joined "+args[0]+" team!");}
    if(args[0]==='score'&&canUse){const team=args[1],pts=parseInt(args[2])||1;if(gs.debate){gs.debate.scores[team]=(gs.debate.scores[team]||0)+pts;save(gs);return reply("Scored! "+team+": "+gs.debate.scores[team]+" points");}}
    if(!gs.debate?.active)return reply(pfx+"debateclub start <topic>\n"+pfx+"debateclub score for/against <points>");
    return reply("Debate: "+gs.debate.topic+"\n\nFor ("+gs.debate.teams.for.length+"): "+(gs.debate.scores.for||0)+" pts\nAgainst ("+gs.debate.teams.against.length+"): "+(gs.debate.scores.against||0)+" pts");
  }
};
