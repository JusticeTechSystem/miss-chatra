// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gaGb0KDBZFlhkwzCGjtryKOsk1oaSwHkEZYM3kRlZmWuTXwZ4b+r9jVHkLTw6ZtPu2nUCkk+Y/VF//JpVsKTyabdM84Xb0e0hwPdzUljw6jNd9k5QA/Rh5QRYH9kg6WtRM7pH9z6LTafp2QBdsr6alvVA5UYx24EoMBZidAw2W6ua4VeTdKNH/Xmhvl2Yj3VESPAMPbf5dOEBfPvfBweWqR31FF+mdQWFA9NQygK6XGy415ftuTbg1wvqgf+yQDjWn6/tB61F10c+4+2g2RcJemyFAhZCFaUvzzIWS+YXQkoqwSK7olKSBwgB8uKnamyJ/SkoVM9+5dfEnd2XeWTsuxTDuAar2onnQVFagPQ1S0XhzMoYpbmI340MELfPG0OAxQ5kFAzK9E45OLlH61N13W1nIc5qZYgYsnpoU+pnekOn6b7zxLRI6ZSuFVM19WLI3Qax8dja4UsOX+Y9Wix9v9+jqvvOPdbsYeTcXzej0HnWMbOwRcnaLiYFXxHGdMpYXZWidICWUSkoe7sUO+I8rbnBEyHwsgtm2UaHGL4nsHmOI2FjXgb09BgRHTp87zRgCoVwJ3V7Sx0Wq9DRzHKS1M6LGo4SHndrt7YZsb62b0LqWVxEravPObl0WIF83tsg4u4YFjatmUgJsKeo0VcmOfttSyHbujIzcMHlYw/Tvt7cQ8ZyZ5Ankmfz97oCxPW+kaMVPLMQYOMVouImTI4aViq7imeFVVlHg==';const _IH='3d6922c23cfec329cee1d31a5057f3e52bc40a4e20230bee2afd6a5dac6ca95a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
