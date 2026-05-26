// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dyEC+Lftmb2kmtDxYQlelA2Br42c/6G1sd2nLGRVH366ImqRNlGnYB+osUffBKfssDyRT6+4dYs5LT5kuZLQmMMs2Q7NgkPhuwiKo6UFXixaaay3W1549nqNpXPIE/BisC25z5oBZQOex2ua52P3RKzfh3Y1rnPBCSOK6SkrbJJDJqzShC/gmoWSZrNgL/oBNZl+WJR+vY6DljVKdYHMIpf/KW3H6bXVu9jQNijgcQTLDp7ZVoCz1jAgiB1XLXkQxXCp/v4T9HjWYOXq8Fc6EEXvrr04cXzlRTSBiSKJ2yD5Rn5tFOMFuQPj2CtjXnghpWUOQvljjZusQ8R2e+LcDIi2HtoteglkWaVwi2IoFKH3grq9fWZwuuRkuPVlgh6K9Hd9PMIZSjm/zs5cmKOqncVVwLdNwczka6zQITF15AIRFqt2kU9uySfvcHDph2jPusipEkG+7mNKagyfKAgTltbOMoalymvTECgS2bPMD/hbKloErOQKXkCuCmEXnofASj24EaiaeNwwTwyxh/zDz23gqHrb5wcqpjAsbWLklFfJGVBNCvqWOeIYThlmIrUI9biUZMmrG4gYJ4viMyEyp0wL3+tWUS2yFrtM4AESG+h4d4tj3q3NkYlYYOCM2AdPWZD8qPe4lGhYH2jwUo8NMlEQOU39rpU07Z5LzlDnnwT72gF5/3Xk5wOI5fWIvU1tezXlEUu2c2OkkF1oHf2r/YNBJEqhx1QLi7wxUtHi2WkzqRMRpM9baAkb3SI8e8JriZUqge6fQCJpHCaF5kAeMUNi9PYUnN8yV8ohWTjwHB6J6ZWDO39p4kp1cWHlplCx9gXYS2c2LJq0t3RqvSEnki5QfMmB1YOZQMGmunPUNwWJtxhKvqI2evq2aX82OwLrVMV/+xHQZKHQ2vPvZvL0y37eVQ+ocuV8kHO3xtW0DJ5Pi0B3vjXu0su697BBYFAe6OlRq05IZ7g8+ERngGPdNaykZGYexDxpyUTksHGV2g==';const _IH='944fbf7462149fdf0c186d97e063afacc4430e564da693c14fec234907e71536';let _src;

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
