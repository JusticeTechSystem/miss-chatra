// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f/OiYjf8DlIm3GXIQ6xhG1rP8eNTP5ga0AsGjG/RXSZ/heRfYRSNyHGFxQ4urubRQyfYCA6rRn/NbuUFfV55aiUQKqHVGVszAm3GoGMNevMtuU8IkGe8/L+WaIFgdjSczoU+uqjmXUx38uZplbm1gbt2DT0/uRlEJ2tpAw0eIS3cwQQQhNaPWwMK2vRD6sFsKfij+J0pk2gUxg12dgNbNNpTgyVKgJkRiOgie4ad4bEqdfXYEt4fbT62OyEen1juuiZD+4GrcNjm+FGEkTMcB6HTIwB90A2meen+COahmurIggunDzk5AS+aTgppReA8xaeGApintElhfUL+WRDFq/k8rlzdHkPt+hYf0W2SlrQAY7CbJuV7P9konAIz6HpWV7uUYFYCQbB+SBrhurQb0JyB/APtG9jdkvz4nvJxgH98Gh7b+/klD+IkodPkI2cBibexpWslRHdTGdejhqy4L23Hmc91mO3UWy3MRVFTNzY7iOrzkfMz3RyM9Y8D5z8hNSAD4b52g3M3lKxSV9TVVLb6LtIcj4Cz2SQG/rRuzBBaDPCubVALtxdNgVQKnQ1OXckTVcaUOqc67IZQVV3H3SjS06wD42zHb6qCcv9gngvaKedY0jpSmP5KgB+WVh0Dl5Q380+zkLhTUAmIh2tpevkZLr+8ZgcsZcGySm3kTjp5LE/LGQ2jikRQKkUUZFyntdy4/87tMNl1vaBN/yI8YDbZrOS8HRWEE85xyACoOn0xKZnkcKq8EBQIn0Kdp3NKKuC2eqIEnhBa4fK7YSG5xM2wmsl0DcM2/6Nmp4EhghhNnbThrIQf5Xt0Q8wwVRipKd8Fxwy45JtBxeT2tpPaiDgYfygDKlAQHlzlhsQf3YsjC1psDzRZ+FiteguNf5ZSCUddElo+CJmgK/ZVugs1HrishHsng+h3TGGdO7JAUpaXigJj2/n3YE5NEYJhpUX0eqpikJpRLGvF2LToRKA0ThIW2zccGLIvWHZJBRD/VbQSri6azcjhS5PdcQcmqXrTSwuDrL/DjLxd1V0Xwacu4MHXwbBC0yh27qaJqvJHuy4rnPsX0gP6NTVyaJ8SFqGEbvyn934iefSSbIQeMLx235tsv6dzrIuK3/tsNUY3HwilhWCftUuBvNycQZBif9hnC62dg3Axr50m/sTTbPdDHFt6fWOTjQDCKgPN6mG2InkP0/IAWhIPSBkLmlBGMuk=';const _IH='6fd54e461b8dfc7c33f870217ddbb37356641a75d88374b71e07e188d93ab239';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
