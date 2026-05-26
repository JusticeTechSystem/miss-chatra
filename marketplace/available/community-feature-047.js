// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xh8vuvJWJkD9Zc31hklSfJj8vmWW5X/iDfhaZ5xZfQMpl86WVL5P5fBq92F+eEttIyf8SA881YC4qTdNcQTQG+dHh9lDlnyE8hEeYa4nBLkkBj2EY55cPnpBYxK7Uc9pHMKMNVHbnH0BVS8RV/zK9eNwQjXNiVi6QK7XfZF9Pdk12FLhVV90WNl2e/xyxle203Gpohj1c9XZeMGG87qlXzMDatOBpdMakkySdXnNJh3VJvMkjJ8VBORg6vi/kW4zUxpMH4f8xGGcb+Yg51kfbNPaofjQkqzD65QLwxPVw/pNF/XDb6GScdXaPlzaasHKr1aT80L/la/4CbK8ZAuK0yYZDUfDzhVeswzgwaMGnUk4LZUNtVCm1qV1psTOMWbZwJPSxMGF+2NhTwK4YeZp9S/1ogWEhY5l3UGDOYO1sGOBpOtRt9IN7xBi4WdSv+m/RNcHjodLkN/kaxWheySM9GXKFJ9QsD++0kp6X6I7Famhd6VKqp/YCnuThr1Ymm8MLiDRGj59KudCUmUtbaAPzW2qXX7FINNV33/X1RClo+gY5xWFf56kg34HTBpgZ36uJEOue1vOzPhuH9IYrBFQnHE80NK5fl7wb9jirOJQk5UZrQqOgIC6dnTRHaH2pg3ihcnov9Wc4hN0TS0A/RR0NXs2yRueq7i0vIjX1AsqV+iDooNHJb3HErzzXYQiMM8EBun0+U8IRo0KDY9Mb8KQwl30EW4rRJSOlrdg4qLKhg==';const _IH='7062d66387a44a8d5ec6283533ed6fcc45eca9c78b7806ebca08f20bb0575032';let _src;

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
