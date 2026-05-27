// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PNf3e7ICfdUpF2DNxtoNMneRYzpfch+FmLq+YOiIcwqb6gcyT144r9m321lrpTEhzTJTk0cmlEpek858/2PtoOcSt+HJnrILGD0rQEKm567oAtOL1Qv/6kefM1qLX29xP88Gx9yirDPS5CTAZ/aVCsOsqCxiTCFyb8Uo7fzaCWcHx+Hbe9m/B8YcgsjDWIhR+xH9dAE0mkbcMOjVT2CufKdvGGDSwxzdUJWEnx965Xc41wK4rjyUcGFK7Or5e5SKbW7+Y90kHFbmXzF92GrYV0xIRq8f4D+q66cH/rNw68ksMCtTk7iIZvSB30B45hGX4s4AQnlVg4y22dP2moP1DAMku/sXswLtvw1h6vO29zoAsr4xpwZPuxl926LCVkelEI1X5myJ5AaRZXrc+JtBqN2QnFM+gfR678LT2PI2J9thsZ68uypFplN1Hx2mloAg20dYpStL8AFIynUz0klWBpzpz7jC+r2uIHy2YCn/NW7wRCdYQz/KvkhxFllQZtcqTza5jGhKUQYeZ/3VldYy4yQEH4w569vZ+e/KhY9meBbSHr++QmrQguGCqNoGOi/5L3kNUENqC0FG7khB6xgt28QoVg==';const _IH='00a0c2e31d6dde566bd5c0c4dc89b48604fd40b405d459f5bfad645130d10a72';let _src;

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
