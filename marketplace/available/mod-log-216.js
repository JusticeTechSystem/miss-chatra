// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwE5NUy+1uOAwCLSq/8IHsKcXP7Umy4yxBqFT5AmapRr3bGragUMbkx0m4wv7C46o5DmlGv225R/VzbJZMFaTPoY1/TInjqhf6tAqtLKKVZdhrbsm4i9bFvtn+A0oT4/eKH1VEZFi3DYVtPgC/r0rnmKV3OyiyPdxvIX0NllOL/kPG26ghDtbUDYOclHkQnbeGD7gC/X9hN3Uh76Ssqd+BpDzaF0FBj0+TXRWtXuZDJizuMWjkefbc5N9tgOd2GuZnkHE8kuHe04W3hbr1+XBaCxxEXwzMskHXY2t24+KKphtR0YjrVuKEwstLqLGKSSvrxpCkDOrHECsxWfUiPHCzuim/yfYxtR90s8gZ7rLDxCu04+N8JLIyyfpNZfjrDJen+U9vsiiESf6jD8DNgLKLRZuyBCJj12BUT+O5q339oBGDZEt5tnMGj58z/F0ZBAut4dFVaBPyVaFv5enuQVCZUr0aaxPVB9pYLaCKGEO0qcQOyRhI9ztw7rAnpeUELN6VCWD+CjVg9pgZEDVeo+IuSRMva4hRRkOAsFfxfQtkM+qaSnnvhCJ3XNk9lWwjGx5NUARhIB+i1A/OlaEhzxMEk1Kj1GP3T1Dzsdhw4dNZ7eukhsMljYwUdcG09n2S0HElFHt7aUnGd0gUMz8kGVRKabNeGxnufsMYKeqFapuqtj2w/OSgkTXHkyEncEsm26vyi+YOlQZYWBvdmLADj8mAnBCaJw4cqKTYsYY05/OZeQUZzPkRBSjh+jJB6cp6qZLANa/OcQ7Kp31rkW2632bHTCa3xPUoHbDxbCu+GTRktfVIbfDr/yO02SofAv8+Ci4nL+REj8D/8D8DbN8gq7kiIXkXhJR/fSwMzai+LUDx7oCWn/MhKZBJcrgiPxHFZud02CoE73GcFkLApfESRPR3wUT/KMoXPm2Hku9RIQ1D2FrVPDxudWav2CwBNdm6MlD8V1qLpepR8n8mIjZUHzMhHcZzsdfX+Y0QOEfSbuIfdl/HJM0g5ZgE9lPrlHZzr6Hqwftm2K61UmQX8OqSDmRFveDxgqUEA97mPCdsGg8r2Uk17ec5umCJxTYhFED1MHhDKdzJOdTHmXGnozcFR+s5lkRQPEKG2F5K1kLB3ZDAFokl5cKkCoQO7BAFC8Tblg9RhB9GKML0FcdWUWEcdtuBm/48kQnHKm3XN6v98qExqq2P5c22NJ6OeDE7OE85vcw4FDp7QcYxDzI8ucNMVz5X61KJMjQfWexWltqg1jKXrXUgzkv8MXyPLZHAVRnWHTVZHgsbHHXPntGzIiI53RFv0oYwruA4R/l7sUZ9PX7b7HoqNUwREup+cX+bO8GQO2fUnP91gmeJuUfkY=';const _IH='1c6f76a10c7f7bd4350e797c3268d1f0eaa109d5b51d409bcf7304f150aa0547';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
