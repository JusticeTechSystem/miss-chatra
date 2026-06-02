// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QYwW5ccjCfA8HVthC1/A5/hwowOnYeWgKWYCbZWj0/kr18GSAIzq36aaO/uscUeXeo1C3XNsd0gznxt5Z9L+UTQKBLZaoWUngXXV+jak6wmBwgragq/CMjohnAoKup21sJ7yncHIDfj42UQUiMDttuiCR/iPvY8JjK7KC+KNpojouxRTLIs4aEPTJVBhZqFlxTy6qL9zmv0NMePJ5bt5jeulu8ezWsiNM2iB9q9BozBzslkSeXeErcWh41NJm0DrIshVEPoEafgXZZrXQBNLvOM48GCi6tLsmr4vTbxXfd+nuXW9ol8Qm+LpqCj86jtemSlJzHkXZuQ5J1i5fVUQdPpZlvxAohP4YiRO/H/BsEBojju2pWqEWymG6UizAkg9+JB5mnkUjL4br9ssnBuZPs8dkhUSCIAPo46Tqh53zKf9CgEaPIZWMXlw/0g2/3BlRskz5aztV/S8Tv+d7RUReAElQqpFzClOyW7t4AoQq2B9eh5eN5T0cjmX+vb6R6y8rUMvdsXPT/D1bmdOzYszeyBSpu1n9IChn9DCJ+qukaINY3Mc6o5xbnhInHyRYxgNXb6Av3iyTECWqO5phQtqRRkK49iCEg/ef8YtC9VlJcXqc2QhDrNuVvDDRQ4e5MQDeSbWUxF8P9aMhcmO8yiw5/aqSXRshDWy8UMyPHfutsmd8xcWDVydBc24Z01bvfjCM1twqkIEaqYYxthB4Ef/OHaLp278wNK7vgX7M4P6xe1WwJdJ3RKemK93wP5mMWP+x+cXp0DsUnNzRU4OWgvPYZ8f5XUhXChJ6AvmB/7MS4MI5yZqVawr94ugmZO31BFGXRr17wpirD8gngDUvHAWLJyZ3BG7iSYXo7eA7jVx5bxceBLWPfsKy9wjvukykg5oddJNXXddAYkDK7Q6JavBFxTfqoDrqoVEt0W8Z4aLil8RPAS8FEiX+G2Ou5ix6rQf4ur0DUCN3aCaou83Q5wCcdBf8Dzcbsec5FIq';const _IH='b612133c716f713a7ebface93b5270c4eec6148713de1a57a1e0a05f77451f8c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
