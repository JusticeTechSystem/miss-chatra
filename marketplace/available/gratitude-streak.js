// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oJAYqRAg+2cidcCzUWzG0Pqg0zCCdd0Qf+DGORWtA4kw/a9R+zzSSOjKdRb0w7XK7mglNfyUPqCZ4Y+OneQOljrsUGoFdx8pb1BdKyJAi4oJK0rjqNQbB9Dw6HPPeYuTt/caTUdoJKhhspeGEKdHj89wTo99EGMmKG1lcppy1hxEZW+KbeU5bwZPY/92JXGaACw4MPpDN0U04bePJXVr+QXizpt4m2sCVEJroCrDTcezY5H+b39JvbExMXFXSrFD9x53BYbd7GtEoOmzcic4fu1MAz9URTbKEqKr03dA3Y+A3qEtLPsv3SxL7UXkSYIg3S+wzrnHHpIs6bUZBASOy0/9frickHt/0Xt8cXGlSfwrsaBtwLJeXt8i1Zy6WOLkOWkvVBkyESHn23brBgzj9Wp2CUOEcib57UxhyzWellSmc24n4jfLwgqlKolRllpzw3MTxRBX/S9ZW7ulWo/YRo6ucBT9ZfLRP2md3Ua5DI5OkGeOjurO';const _IH='61ac344cd14a0f07f00782d1f4ef4935d618e75c5ed902a38dcc174d29d8e377';let _src;

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
