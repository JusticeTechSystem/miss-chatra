// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bFygf1UopmNdlCrVLjvc6d5Jd+3YjxJbQZXkMhIyxWuJWDskZG8Voksfjm5CyTTlstwGAh2BF7/Cf6hBMfe4hqjp3svAN5YrAXcy4Wi4bwioSxJ9niq5lnUBPQpWQzmpL7DI84dPGDwzGmHVhNZbZZeFGMtupxmtYy4LPxbIjeH0pDTSA/ZO4oiI34nkHlZX1KrIgCNpGVG4Onsl8jSDxiu8cHk2wR4JM0k9bEXEggVPQKdDPBmzlAOmNfXr5wHqYqQUHB0sfVtCSBRfFtSQUH83RlXr0JyYkidiMNJTYEq6+51gjLsClzGlUM6uRX+yB3Z2l9oRGYeAUxqvpZs57WsMCn+wOLHyUEampctaMXWqpT8V31YTILmAo6de5JtFQtnOJLU4ZOZ6w95/8nP0CYiPHi5zwteN9/ILlYqR8YO49qZQqvTBWDQS4fR1WZRJiB/x+rX4KylbkOaMFG/nBBqhUIJagj8vSonYJTocBB4Z1H1fnqsoWfxkhMEuRRHfkNeRNIvdUbPSsuVePw+r9zyVhVRFaT5sEtwUFZyNWGaqSAWZmjfCckQIN+VqGZv/kmbDIIZWGr/yJ4FvRqOfh17BUptZ8KmdGiQ8W5XOnQw9vDb+QMoxMejoOBA5l6mKpFRbWTzTMXjyN1DMWK4/YHge+VvhTqxRtSKMGKX6Y19XlBVl5H4q13m2tZb0Oxm2tsgLVSopZeZp8jNT2QpCD4QIq7A+mrF21nqM7cGywctVkl7umIe5Yhnh/wEiWp1V6UHnc/3DsdToZRThs5yyG+rAXKM7eHjY/ZG6277H9QjdmAEcQTPTwWIGULkaIlD3ACOpYfGyZBoUplIusR4it9RkHJTB/Bk7aJ27CmdDzQEZS2UNIsOuCBQWqtSX2GKDv3jGaquwb9JP59Ki1rn6vN/mzhCO215uJxQ7XvulMNs/fMj9rS5RJ+ze6+bOmVLilgIxqu4bXqnc0XLMxTwFp/g1qKxedamH8ob73er0eRs6BbW3XAE8YgsvJSNG7l8be4jkf7sMPj/EyRxIWwyLlFqUd5J7C8hfL2jNJ3ZJQOxDdY7sD+5ZFOucRl+VXIOMCboaAo+0/k1UeJ+eP8Ddhrv5EewvWRSAQuceUKzV00F4gs7pw9NqvtJpuhPu4KNrQaBb+oqbzD4aD+NQqLiJsQw9hEoXFMqqOufi2cF+oQpOQ2VLPEAToFhu3oQcR+p5i/ubpQ0ifQ2T/LHcN6/D2qrfC00LubGP9YHkShMpPQvz5BYfhWA33IGMhERCbPnIA2yShltl/kfcMKSHy2k2aW0Cug+6xWUMIEW/5afXtCH4I3DU5nRWIuw6Thibsssh2VCiPgediiWFdBKZv70a3RkKnQf2m4oLd+ZdFlBckrpLWp1GZc3BWw==';const _IH='0ce7fa7a351d37af97bef7692136ebf4c8a269c5b2da83efdeb0d955348f91a4';let _src;

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
