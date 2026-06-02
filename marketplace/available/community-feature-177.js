// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tQiRdlS74c/6jOYEKDOAOpTr1vO3JC7LJaZRhQajdkMGlQio1o2TtfD2dGhdZPWs3J2Fqsmp3HPeyTtmSFy2yYSm3+ZFp+lmtSZyhv3ego5VhjuF+/eKQTG2rf8G+Si8KdMuoGjOcH/XwbMb7D6Z5e+VHJc6hAkFvlH6m98huJiaolqgG/67lOJuW1HjbW1caxeCTMl4O53+XG75fduNTUfyoVubI9d0qboLYfabAh9bMFEe/dw3jCE3Bl6pl3BQaeNx/vytziHqnTaR3ecqEz4EkJlUbwW6VtITicgcoCX5CO+s7HDxHlTaDLxjJ+eSYcuc9ZT8TDHYrAJOX7n/Tj21XNkqM2RjwHlwTzhmtjxSEaOuvgOAl+CVZWukdTH4ZicFuKlwWFceFtuDVLoUt6DB0u2GXnpTm4KLR51MPp/EhqkzaYgVePyrlYVvjjdu7RE/eh7emcVHActSAdFzKeZAQuE9AEUW0PwMFca8VMBXdgin9Fq1HYsXvp3dBGPXxLAS+ywClbIETDycKTTiCvOOgF9GX8P2M4xwczXblsPATauYtKulUTE9sEk90Nmo0eboGc2+3nFaxPHNaGMPCtgMb1GRXcAHcoVyoLkWaUUoJmPJ8lXHtJLMHf6/sga9529wiISaJ/uky68V/TyZ72ite4oCW6zUxSh4oXA1aT0WofpGZ1axx1OA+oEKz3er3hTDBXTfihPwzxBpQKDBp+M228u7a9Y79J6zIyPfd0LMCyA=';const _IH='85c15765da6f941e5bfbd4fbccb084250f5882eba2e7e6930cf7c385977da359';let _src;

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
