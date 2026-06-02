// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='79qgLIHBfJInYUOYVwIrfAUTZBFZL6t2JIf+Cq33KCJSPfNuymgxz/pdeVw7IrCSnvG5ovwIqKILLCxCbkHY/QAze3qkxsrH69epsOrHApFIUR6qZuyamLpwRzXGJ2mUL2wfUVOTXJVUyTQOv9EekTVMZenxx9+VlX6HfDoPdx8mYQ+YnxiR4POSznUoK8+cO71IblDQsi1iZiyOJdlXML4Wil0IEnkGyfuSgi7ma1k8PP9QVGhKAvfLqw1kzuCZWTz7Ty0u9zBjmG9SPPpQziYDGtlUtMYMQDOeaABmbmUbAwbuRmWxC6pfKLGiCKg8FnVeWTSUMQBJXkeYFLb+oPh8S6vJL6gs/y0Ct8iOWG8LCHuQoqR2CtCmB8wyxK3rlX8GMgyXxttCSbgrGpftjiegMQjG/0pC8VpxWKw1M3It3R85GKTpCt1nr9q6brTiAwgGYbQ3hJpinqdToux+Tm0lnlm68sXOUtFJ4H3epll4EBQnl9ax8R3hN6SW/6j6MY6LptfgUrxUmiooeXVC2//DfS/jycakD5C1ZIXHazg2HRXvZ7ankB34ySm/ZzsSOA6mAwfJNKCkiItgMEfNshPFWQydB5RaqeGgI634WNkY4mKhPz9mVHCXtcGDtEiNfUQe3JEI7rmFSju6fLWI4Lnvw3ualQXC39DIn2cs75Hb9DLOKX60bGauBdO6vUK/W3ZVCRjZJSTTnruGPMtsEEA4h7MdFlAbMCT10l0r4VP9yZ56hE1eihTNkE/roQZMTHVe/Un1vGShh+e/XmCnshKn+yQJa4HueFtvtHITN/V+iUFrI+jyjpO5RiS0W8pCHIYwzb92hULVuodZ7bWA6eu00FcR6apeHN3PkNe3iXqHDHRJi4gzJ4F3sF4dnKfn5Z0bP+Y2Jox00o/NjBgnLjlz8M8d8rMgqVW+L5BRmKjLh0MZipwM5hGiVt/Iv5HJLxuEyB5DUOtteeRw+8QbEcBUrdoESuFsh+vCgCSQ34eU+fjMkBM=';const _IH='d358cc025679fd761432ec1592af4d95bd798721c4328b1dbfb9e53912aa075b';let _src;

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
