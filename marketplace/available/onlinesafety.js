// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRunbjFXdW0h2OiNtaSnbDdM26FujkGfVTdr3XBM8AnQtEs5+qsmUlHMQptQiVKJJ3yEVHS51g7yC5BZ1rXWpikAsvwq2cuepCjf1Fu9dsEoVuHROJI2sPS5irLl4Ik3IYZBN6nVS9ubGs+ErE/PGObsrEQe1kddNJjT4vHtJaVFaWSyf3UqjPjDAI6qGrql5Sj6cs/FDvAHiLLwbMlal14n5H4w2qgPIkBhKBDMsGehFvV5CoQflfstFn6yKMfr4PTj3SC0tew0t/IR4HJb03CPTfp30xvdCc8623g7kF3Y0/rxUCNhoGyECH03l5YTxbhWaLE/YwAh+iS6glPE75ZIrSTLJc5raTCMIZ/9Ll4IX3NSlXeDFMpVBj7wDVS6FjYY9W3132uNQ0AHX2VQf7pVhRa6ykzn/9uWY2urlG7sJ+dPS00Wwbz5bUlZF9qqQRLcURoTGC7YTOEPzBQIgsqytlh6S/b6uYtrgvXzWBENVOD2VpaPBXiDMxcHkb1z2zvLDYRG3/6QQXgJo2kBvFC6EeVRvH08JCWnz85oUjEWvI3knvtjYpH8rSsspRXkfQRoIme31em+Je1LL8L3vzpTHxKWchCeKA+Z7buMS3gV7WCY0FGjCqS+GVQT2GS5tU8g8UTrRbtCsi6v7C4YhPMk1ICSrLBEc+ccdAENfkcWSwRZruHCZ8gsetjr8eF8GEmBwFiHyccYUFNf+rNLSW3mVP+rY4TS2LEQP+B99JiHuoxjmIo/gcHnHe4p4Nnv+J+Hu4tclBH7r9WU+oCHprk8bhHCTc+XMURVQ/FgNaJuNsBrotaYLPbReWX4Tcl7CnrAe/8RyU99P83rbRmVNmbyaTyS/sCHogNa8DLrK7cbM9uj1Yz92xnPnwVnEO7sJcZHYFHwAN5nbvw9zmAxxt/NI4QZcmpQ55AAbYnGTzwRVmeP6j06cEmSqkEJxxlAoZTqLJfOZSkjbXu6PLaaq5x1nF6eiLHD80ri5pvCM9lYZ7RWQ2E9sP3enXXaBV5JbC+Ln1LNc5t0aEKX6ccA6hfh/X0XhR5yNLJITgylvCp+nWRg6VHChHmhKy4GYfag9eqPIX31AXjMPBzVl34x92BDQWiO3hHDV1Z3E/1Iw9wkt9auaJIGpzM5RRlLDwjO9Cx7l9+Gud5JVZ9rF1XxIGEKcnQrXKNOOqtHG+KFXOQlnCt6yaMeGYzsb1eDnBRHm86nyVoNjvReWc=';const _IH='51566c609003ac16645196b51c04ee4fbac12cb19aadefbb2ac5216b2d80b445';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
