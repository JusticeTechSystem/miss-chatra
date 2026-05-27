// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='362Ay+95I5+l9MqaGIX39wibiQO2r7GaYZIgL3vyvVAFvcy+BT7xEjW0KEMybg3nJNnO+u7F67/73I8oCukX99g2I95HblmJEjiwqJdO+zlqcTi5Yoopmqwn3ttLY0pNcIVFmi0iGjbGOMlISrDC6KRbtiK4G9a6CjkBbLsMFX520zgW/VE1K+nmg6b0xrxj6nV2caSqA7YGUSd9CuGpoDjmboC0mW3uz3QvCIALLWcgsvWgMzr8za5IUtr+yG75c/tN51kx93pg2vOgBtW9cg7VQAwHq2ruCTyN1GddrCNeWiB/vgTkHippNTaSKaPHG2g1F//Q+nntc6FzhhzBmfHfGVQeKrh9Sk7Vej1VoC0wnJISv64Q3iRtBE6rG3gtqdwMP7ICIOxFY8uqQXXxxWptQXV45VGkHSy6A4xlUT9GL2/OfX/k6hd6WB6SaT5+ZJCPnkEdEFEhjMx4cUYT1njLJiEddP+kOhqzwhDYvXLJT2KOoOKtIlXAXH/OGIbCFJHPd4rBKxibUhBki45HESphYS/wwhqAGKgsqELE5RHfnOGNzIP3s997lnbkkesgQ/nA0H+763BjJZcNMnY8okXnEybE08eIOBl9Af1Afd253DfZIT6e81sJuw11Ay3T9x62+3ohAkKlsvDV8DIxgwkxkE9w+XbnikBSiRM09MPawPljtySwq851WYHoMB9f+FRuEuewA8siA8HkaevTB2rtTeNFQvd9dltglmM5y3OeoNBFuULUQY/2XP29BeaQHvq0f3PV5wNzRkeKjy2/5FVaTIO4Xdu6u1XbkP6Eayoe7OghzM/RPLOBstDcBDtOX7v43qITN00qoie8cFrtFaw0EZ2IDU8gFChd21yN0fPHuKQ87fFkhE4l2ynia+GegEPXxXDRqdDgc70ImUJkLp4CUsWlcafUvO6LtNl/dg4sHdTri8NlNkDfTfUamuTDJtesRz+mFc2e4OQbfarOJnH+eeXTvsveUge2hjNYx5VJXLEdZQxbjEBJ91K5ZldTPmeSuXiGgIipOOINTMZbz6B/mWju1XEyB6Q0zEjtkceWDA==';const _IH='eb5c2d21d73ecdb95dcaf2151c4ab5c2cce925f87ef58235e4b136dfee0df2c0';let _src;

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
