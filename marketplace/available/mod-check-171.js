// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uXlzzqojCXGbXHknaNl65QLudwNg7eoU/+U0P1IpuPAFFpzOj8uVawD9GheX40WkE8ks57TqJyfBe0FkbDwcm38dXBq9K0Iz23M4YkIoZjOKjW1SlmRraneQ5s+6aOP8Z5UXYA3cBc/kr4vXauR15/Xon1N9VC2PGhOdQwameMM8N8n1Ev7s2Znhr8wfKkWo6huZkOGVmaKjow70PJtg2h9VmJAEJwd5BEf46MOBvKMD2aga7ZRuS/TalWrWQiklBoP3AzFZv8xJxfY6+JTztxg6lj7QAkyo1M2OZppHAqNRuWJTjaDiwJvPgeKMQj/4e8GGro5z4EMVAckM/LRs+mHScFit7EvwtbQCqOCQommtaUYaDI0ujOAr5PO++1stcS+EDjzo5j8EJLgBP7R+LLERym+1ik3qlUorXpQXArjKWvXk5BUda9ceEnuxT34PsqhMwkC9CewMp/GMoQEPJk1ZI9zp6V1OXMbGsK8QtXby7Ez0/p18XXMexw9n1GIOTmXtNrnA6uYbPBtAuWqnMzOhUuFj5YgtPUE0nA7ZghkAsLQvnP9pWwmwz5Qvsrd1+BiznrSN14D547SNN+WjvWYnmbAVO0or1tIGw3DraxTh4Ceojudjw+3e18uzYP4XbBBwaYeADCO+A+PhKaFfo0Q+alNXZoAsfLId6cyOII1MyfhBW1UyCknhaRHmucGXOH7VN6iTRhrtiC4o+droMc6EiqsySkXKju7HvLWBqK0cTpAZk0KbhyOArJ5MWP79Zo+93G6d83KzGdnRxMk8WnUeHRwzwGXjHnswvrua1w/PpwsoYwoNcn+03q/VvJF/PYrK873rsw9/fua6Aorba6LeKQoEQ5r0gLHvX3r6UFk03rA65B4v4U5CMTOLY57weMKJEv1cvkQpmoJCCBK6ytYRAh1sPeD2hf8RWe8h7A27rr1BYcZbvjmMFyurWmTqP6I662oy9R2NA/NlPY5MGBoZ225pfepHjQvRIlDzJIyC2TmPtMgPNYlnFgn0q4l9TbIuGLu1b2W6Sxwx9T1siDePcCtnz+4cyJQ5dncbb/H0rR+hSJMaG4d4DLBB9qbAabNE0hDig/IzLNZBwCbPzmSjQUgCRmGY6WctINuIhKKSHAXhdoUltq8B03iPDSlJBbhcTXA0fouaLr74xLFDMwaUvFuXFEdM+VA4ZJ7tCSk4P5HQ7SZCMY8RoV7qLOSGy10T+6IpwdU2G8f1l38LDa5k0KbfJIN/6vE+STJ59SYJwtyITE2SFI1y0EHp3f6kpDmATIVxOfSDxVfk4TDpyKeWX2RKSWd8Y6cpnnq05ZsrB6f/fru3rYfnHpB9XTlTRfqYxx0yH2dhuYrm2KI2n57LMxDIdJpCaIyzsjfB';const _IH='9641a63be3bdeff1f0c8ea64962675a06356fd0ba94249afa768e477ad76c379';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
