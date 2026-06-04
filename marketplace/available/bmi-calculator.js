"use strict";
module.exports={name:"BMICalculator",category:"health",desc:"Calculate BMI and get health recommendations",
  command:["bmi","bmicalculator"],
  run:async({args,reply,prefix})=>{
    const pfx=prefix||"/";
    const weight=parseFloat(args[0]),height=parseFloat(args[1]);
    if(isNaN(weight)||isNaN(height)) return reply("Usage: "+pfx+"bmi <weight kg> <height cm>\nExample: "+pfx+"bmi 70 175");
    const heightM=height/100,bmi=weight/(heightM*heightM);
    let cat,advice;
    if(bmi<18.5){cat="Underweight 🟡";advice="Consider eating more nutritious foods.";}
    else if(bmi<25){cat="Normal weight ✅";advice="Great! Maintain your healthy lifestyle.";}
    else if(bmi<30){cat="Overweight 🟠";advice="Consider more physical activity and balanced diet.";}
    else{cat="Obese 🔴";advice="Please consult a healthcare professional.";}
    return reply("⚖️ *BMI Calculator*\n\n💪 Weight: "+weight+"kg\n📏 Height: "+height+"cm\n\n*BMI: "+bmi.toFixed(1)+"*\n📊 Category: "+cat+"\n\n💡 "+advice);
  }
};
