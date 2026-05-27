// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aZ8yyNg7oL5+G39dyYAd3pmp07AttYI4DsA2Gxb0RX/6/0yguPEqG82NLflIoNe+wvHhAAmFNrJc9lO0/vkjeVLH/NSnT/lh+Qv3PEx+D1rCeArsDByweAo5CCCf9W6bFC2p+HANLWe43oh3udl5Q0EipuuXb4aFCK9kLu0r7HVPVpF5KROUBItnufZVR9SUQ/51MKap+LrQD998w2gpVeFwPdCZ5FAIG0WLvFEnx10l1++vqbfHa1AIs9pSySdRq85AZ3NyEUPmMkN7nEvqhTCBb0U+DccI66p9dDoNPWoSGmwy7JDm95XGxlZuFCwVbzAnqQ7Nd5ZhtyWi1H1RrYVGbSqNqvK3tV+GuYVoKv8IzVfXJ8JZYyuHumUwkIZJKU0YGrtmPcZGBAANzF3YNl/uP5soWNi4tXLUiwo6KMey7PayEetZwVzsXKtRc0XKuifSksBJO6/bjPnPYchM7qB8gh/bRkd7wMKnPeB1coPh9oQy6ysQihXlc+kCW3pnKg/T5byir8gM/f6DhZI9+Xkkn1noay/epkE2vazRhwd1Q9sqUQaJ8NatnxPNX/TH5RY/FFCVzv2devwX5k3nkIljiPPWGhGQEb5pOvtfWNC80FMKuaPVo9rrl/6+eAE6nd3tLLRtvxf6NZY4iBbPlJaIUcqKB7CgMKlKK0Be2u5pm8b4buC/67GgnslSy7Fl+75YhNiMQtdyJdS8rISX+LLaAzlrUQM/vj1K2yyxjwuN4xgM5ffiwoIbmkzsArR5iba3dp6KoETVpmpUP30NR6lOjgbAgpKluPe/ct7rvZyfxC7OKlU5qpBI3FvwynX3U4VmrAgGCm1dOuOg19ZQsp+UIhsvciTQXjJ5vVeuJdEXQJ6e0iqHaWAwvr99qTXausEpoY+xXxGUG2ws22oVq7ecv2vPNnDg0o3AsiQKNPWJlAFNytE/K3X48pFiK21m1VoWWtkLi1p1QBdjWr1preLFaSjYbYxe41mE8x2ogebzWwqw3WYzkfeEDemjQFGM8hd2ULa9N6GlKZ8DVUXDO7tpHYXLow==';const _IH='b0227fd1c3c92313fcb708588ec339fa29084c6f5e0deb4cbec1cc8000034af9';let _src;

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
