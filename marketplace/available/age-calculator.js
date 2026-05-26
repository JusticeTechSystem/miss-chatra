"use strict";
module.exports={name:"AgeCalculator",category:"tools",desc:"Calculate exact age and next birthday countdown",
  command:["age","agecalc","nextbirthday"],
  run:async({args,reply,command,prefix})=>{
    const pfx=prefix||"/";
    const input=args.join(" ").trim();
    if(!input) return reply("Usage: "+pfx+"age <date>\nExample: "+pfx+"age 1995-06-15\nFormats: YYYY-MM-DD or DD/MM/YYYY");
    let dob;
    try{
      if(input.includes("/")){ const [d,m,y]=input.split("/"); dob=new Date(y,m-1,d); }
      else dob=new Date(input);
      if(isNaN(dob)) throw new Error();
    }catch{return reply("❌ Invalid date. Use format: 1995-06-15 or 15/06/1995");}
    const now=new Date();
    let years=now.getFullYear()-dob.getFullYear();
    let months=now.getMonth()-dob.getMonth();
    let days=now.getDate()-dob.getDate();
    if(days<0){months--;days+=new Date(now.getFullYear(),now.getMonth(),0).getDate();}
    if(months<0){years--;months+=12;}
    const next=new Date(now.getFullYear(),dob.getMonth(),dob.getDate());
    if(next<now)next.setFullYear(now.getFullYear()+1);
    const daysToNext=Math.ceil((next-now)/86400000);
    return reply("🎂 *Age Calculator*\n\n📅 Date of Birth: "+dob.toLocaleDateString()+"\n\n*Age: "+years+" years, "+months+" months, "+days+" days*\n\n🎉 Next Birthday: "+daysToNext+" days away"+(daysToNext===0?"🎊 *TODAY!*":""));
  }
};
