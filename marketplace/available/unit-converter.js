"use strict";
module.exports={name:"UnitConverter",category:"tools",desc:"Convert between units — length, weight, temperature, volume",
  command:["convert2","unitconvert","kgtolbs","kmtomiles","ctof","ftoc"],
  run:async({args,command,reply,prefix})=>{
    const pfx=prefix||"/";
    const val=parseFloat(args[0]);
    if(command==="kgtolbs"||command==="convert2"&&args[1]==="lbs") return isNaN(val)?reply("Usage: "+pfx+"kgtolbs <kg>"):reply("⚖️ "+val+"kg = *"+(val*2.20462).toFixed(2)+" lbs*");
    if(command==="kmtomiles") return isNaN(val)?reply("Usage: "+pfx+"kmtomiles <km>"):reply("📏 "+val+"km = *"+(val*0.621371).toFixed(2)+" miles*");
    if(command==="ctof") return isNaN(val)?reply("Usage: "+pfx+"ctof <celsius>"):reply("🌡️ "+val+"°C = *"+(val*9/5+32).toFixed(1)+"°F*");
    if(command==="ftoc") return isNaN(val)?reply("Usage: "+pfx+"ftoc <fahrenheit>"):reply("🌡️ "+val+"°F = *"+((val-32)*5/9).toFixed(1)+"°C*");
    return reply("🔄 *Unit Converter*\n\n"+pfx+"kgtolbs <kg>\n"+pfx+"kmtomiles <km>\n"+pfx+"ctof <celsius>\n"+pfx+"ftoc <fahrenheit>");
  }
};
