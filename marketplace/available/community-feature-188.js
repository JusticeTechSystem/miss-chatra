// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uftPc9A80zM4oBTdLWt8ZJA9VcEI2go3f9Hd5lxpFMsABPh1kBHVJeU/j9cDhDrEIx3Cu0qF1B5H1Ci1McLZwEGGh2o3D4CQ4YN2M/y12N+3pZ4zzZFCnwGmGvT0yH11etPt/JVAjRE/7nn7vq0Fv9P52NjsKT7lki+7JLP1eHWvUi8oJoKwYbmzirYD+4HwmtsHOSGCJ+8f0BkOIq6NYdEWVtJo/+O6DFI2/wvOBtjH4bTZyRuJ7M+w5r8wbpLITioekKydkjvkT8SPDbW1Znh7cXq31NWYvuacmLniYeUS9jUfY+LgtOkfXi3LmRGdd5NiFJbQYIiFGetMn+kfrGeUkJvXzenWNz+Xs6ZZU2XPXDjAE1PxFI20Vd8+to3g1UOwuRApPv01o2pSV5mqtwBoOBTh29DZ8Tdkdw3LeWdT1pLsYwBnTHLS7DNd6f5AcmyNikoj3uBDvJJByvY2h36V+GJhhPSwGg9aui6dc6fh8S64FL/fQ486XR8NUbbAsAu2WgH9OrQOzKdZCHb9hvr/AnNGfRNACKzO5U+5PRG+tufUSwKBDjqUrsNYyyYzzaZPw48lD1h5ZqguN+day7K+Fp+1QjW06qEziLH0ovOxLm7GggsvWNhIJKElZJwF4VTcxaw97sQuWvHSKral1HCIzC4QQDW9FcUQ1cV59bDNW3VIIP51JDuDFY+JGrH0JyHUuMSOOESWsGnCMnq1KHnDh5T8g8HD16ALotg=';const _IH='50df3eea6902359f55affd63ef400010f738f628a54bca5fef6a1227e5799376';let _src;

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
