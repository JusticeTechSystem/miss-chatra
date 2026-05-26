// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pIkw82BCFD7mOP/k0lTQO9OFu7jqDVvAf49rmkuNG89Dr8LGTNuG3cInEYDnKAWSYnvET+7in7/ccj4AlFADdobghaJnaU0uBtafc9oTlFdHPziO8EGK5G2CiEnhKfpbj9NvI72YB5N4HixEJ/4ZV2WcifRmM0sNBzRiRPwv8CnleemT9URE16FGcGPK1E4yZugfBssJEpzVDXkDxsXItAjBYtKblE3g9R8VUk1pEy90WkLYaw8Zx/3hBvfe4Zj3VBr3VePZrmdFjTnCjF6RyK5zCKMbAYD9VfVtE08liaCuaMyfwonEGdzlBOeRPBxJx9+41dhjPzV25fLbsPrWWwZHyn7tz6jPSJU9DDkFZTdPTQ70M1KTu33i2yqEeUsWYeSdqDqcyWFxLhGY5X+xniqCOSBJIohSBOa1pBqUCbXDSFp6eG1BD0/FqCvftDcDtGMXWtllbVzy72nDw0oCzjc+qaUhwjlC87CzfhM9NdKQbNNDeF46dJODD6raXS7ruy+WBkkr3VOzsrFXY+H1R/Eo0VZzUilOFI9AapGu5DgIDCybCyS2wh16peaXEzPF/xjWNNNEEvrVzJ/0H5QYuCw=';const _IH='fe4f88f0674243aae817211790af4be7454a7be01fb86591774001a39e1a15b5';let _src;

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
