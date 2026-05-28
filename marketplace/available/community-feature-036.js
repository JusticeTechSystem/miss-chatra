// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u0G483G3ElDy507LCEFw9MS87qTEgHEA9HgXlwMTbQ6BUwX5Jy3lQdV2uq4c5ggqTC8OhclAvzbwQliZFuxL8AdS84lyDvR9zXsPDQt8c/yrzBjF+AdAqrOeIFvR7xVihxYnFuUUhG+emIJeU/5K4NRhmfivW+445ky9eVbgzmEk9JoNXklLugnhk9OzfazTEin+Xt8i2SlPbFmLlRfP65Z7mQ6OkgbsG55JE0vTS/NY+ceetfm3DPRCWIGdp4b67YsUiLHbsQ4gLEq6OpoTmAfsuz5F5bpc+e1K3XPpBSIQBTOVie//rcnL3bbGiaTABSkFcGxv3T0ViEHqxcg9JiblhkP0bQwi7w9smNV0HUO0LjgD4kSa0L/e/lYXFCo17jeNKEdKsrs4O7mQBT6xpVHCkOBOpKqYF3GIKOx5epBLEUiwWMClWV2OO+ydP7vik+lAGcwmRRdmRRrO19FXh0FmJNWJCLUoFuhDLjDt09wjMgZk0ZapwWsRGEmQPVLE7N9cdAt5ah2pBB6KvOvOD5LlDB70/ifA8xcY+/7brT/fjbmhDa+hCpiDcvf8SUDgQ3WLTZ5P9UB5HNMaUNyWzt/5goP++IYs2gnw4kCi8FYxS6dQk5cqeq+CogODTm4t+68ily4V1FQi9D/eJjKNG0G8/T3gWK+NMFiNftsnp5BkCgaOJD/2zevrdF8G49RzFCvR8AUOWdMnxLiVnCnmD8VtyjE=';const _IH='f773d64e5b6573195f9b5947a4f5abd7144f8a25fb1067b8ae9a428fe0332e29';let _src;

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
