// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ji9pr/n7Hy9N7FQ5fSXudMhpBnuRaQY1oicDxCnTI4BcqGE9hY/sJsF40BE+Ry5Pz5ms51vPPEo/sBz7iyOITxYZ7lVWlRcel9ES02WC/QHxqjgKPQXWNee4H0u+VpvZ4T+Vy91KQ4UMJwaCjygkSz3UjndghBuxjU/uAWl2ndPD8PeCduD/+nVoOyk9rRKrQBX+Tmn/G0cLo1tZt41mWYbxDddaLsPubPFrGcofYkbPwYf7RMIQ+76hLVrULseBYbil3lB8baZR0lZ89huWhe7mV+bR4AsRQlO8BsCwv+5lYkMzw7C1doECaFLNFQDabKDN+gHsOt/ust1UTOiuPGpH4c+GHkOud4t9vKq/+NfhdnpVlO3kH5ilQCIAIEYEyXK+IiHhtmAoNHogwmA5qZlW5XBESuZWCz8HpqcBQ4MObHQc1tyF/0tA4E9m0E5FHnWKrS3lNEnMTvDBe2C+D2RcF62MLIIXwxkzIoZ9si5NUKOycsTKYQkphQ+BZ0Dw/KOKFZIEEHDaHqmYNHMDNN4wUbrKlhEwP5ZhQ86w8J6Ad7EkblGIVQpvlqfpppS3RiOOjCiHu1z+OmehqiUsIPOSdx/yrE9PlJOzzd4bTy38cFz2gOstNdoJYt0nYXqyc1vpQn0POQtRZuDqdhifJo0grJJXhpPkCJc2Dzjw5ptXb+TehJs0qcM1GlTcQofUAoCz4Syytg09xsw=';const _IH='4b2d2c77b34c1464c8f390158fdf26cc0909109e9e26e0f807fe230baac69cfc';let _src;

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
