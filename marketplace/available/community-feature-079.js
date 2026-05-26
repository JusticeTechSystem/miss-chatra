// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B8Kj7m7PFWQk82Hd2jYEzPiI7yXSxX3Spys6iife/sGWbiQRn4ZtntW3fXd9EAkJX5rDW2GSUA4bDoUAUuWqCQ8QkWgRPfzcaeaBOPkR/gXSvxJgbYyjUAS1j0yl9HYjVQnqXErsqd3tWYsuo8zjSQFsi402c5N2eN43Mc03XbGGmX8rFWlgGglcFafNaXteAj883WDKIgb4G8wVkhnTILSWhrxvuc2Ci1JKj/IAGj5Ibu4/lyZHnhXbiyW/92koD2vW1g+crSwadue4HjTy36ME80OThyi87xTknU9Ha7rW54LH+z9qtxWUiQsp3qKvgXhOsleDqja7KmVvzgmR3jJ0pqnfE4icNS79wEdEIWBVChwAF8EuMuS0GqASLe3pEF9FVu9NP+XdbdSBTYg75Lb9WTzwNUKYyoTZTk1a/LN9k+0veaijKSCQCyTE7c6kKO9mizwS/2I3MlRTdJyB9KMvO6Zge12ArdCj+UzXHmYUTYoMoVtonnJ2leIIWT8LmEyNIQ5OruUHNFsU3qXRyVl76h2ia/ECLrHo3ObnwmjWuiC+hkNamEG+qkgcLF+aJ93a1m0l/sUFVnb+7nSnv7YUsIAftIuonxTcNFi1eu3nNxJmpWw0kHl0iqkeVVA1LpoBrB5AU3lyCgbAqV8R2OGf/mEDUTKmcvwXGDFjpEz5h+FkMrWenWHs2qJSrAf5v1TS35WcNLiAL0Jn47TGi0nwIrz5fwKck+VP2J1S55ocGQ==';const _IH='8dab0cbe45a72c3d5dfe60266e031db12229ad8a13e879618bf3587eef9879b9';let _src;

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
