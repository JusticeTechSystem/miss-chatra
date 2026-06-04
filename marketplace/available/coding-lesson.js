// @marketplace coding-lesson v1.0.0 by JusticeTech
"use strict";
const _fs=require("fs"),_path=require("path");
const _DB=_path.join(__dirname,"../../..","database","mp_coding_lesson.json");
const _ld=()=>{try{return JSON.parse(_fs.readFileSync(_DB,"utf8"));}catch{return {};}};
const _sv=d=>{try{_fs.writeFileSync(_DB,JSON.stringify(d,null,2));}catch{}};
module.exports={
  name:"CodingLesson",category:"education",desc:"Basic coding lessons in JavaScript",
  command:["codelesson","learncode","jstutorial"],
  run:async({args,command,chatId,userId,reply,prefix,sock,m,isAdmin,isOwner,isDev,mentionedJid,quotedMsg})=>{
    const pfx=prefix||"/",chat=chatId,uid=userId;
    const canUse=isAdmin||isOwner||isDev;
    const norm=j=>(j||"").split("@")[0].split(":")[0].replace(/\D/g,"");
    const gs=_ld()[chat]||{};
    const save=d=>{const a=_ld();a[chat]=d;_sv(a);};
    const LESSONS={variables:["Variables store data in your program","In JavaScript: let name = 'Justice';","const pi = 3.14; // cannot be changed","var is old style — avoid it","Examples:\nlet age = 25;\nlet isStudent = true;\nlet score = 0.0;"],functions:["Functions are reusable blocks of code","function greet(name) {\n  return 'Hello, ' + name + '!';\n}","Call it: greet('Justice') → 'Hello, Justice!'","Arrow functions: const add = (a,b) => a+b;"],arrays:["Arrays store multiple values","let fruits = ['mango','banana','guava'];","Access: fruits[0] → 'mango'","Length: fruits.length → 3","Add: fruits.push('orange');","Remove last: fruits.pop();"],loops:["Loops repeat code","for(let i=0; i<5; i++){\n  console.log(i);\n}","While loop: while(count > 0) {...}","forEach: fruits.forEach(f => console.log(f));"]};
    const topic=(args[0]||'variables').toLowerCase();const lesson=LESSONS[topic];
    if(!lesson)return reply("Topics: "+Object.keys(LESSONS).join(", ")+"\n"+pfx+"codelesson variables");
    return reply("JavaScript Lesson: "+topic.toUpperCase()+"\n\n"+lesson.join("\n"));
  }
};
