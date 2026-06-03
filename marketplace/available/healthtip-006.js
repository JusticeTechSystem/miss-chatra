// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='knehK4CINqeHSi/xUEUW8Gzg7m2Kqf2Dvhn/9njWJAm/T4kUS8LMaXsOA3yyx0NvjeY8/eYqT6Lxyib0Iy53Tfa+Cs6u7Evan6DMuVtuasU+n97f9BJKOp3Bdtm7g28XiUaf4neOyFZ3TY2SnVg8xr4JPmQ24rKJW159VJ04msMNa/CjqWj13WU2bHXXMmK66IUFQLd7YbZPgTELi+S3WIEVkD2i/GflgdxBGbNQGLte5wYznfMZvig6cnZpEomIivxX68g0+KX+zBPhrLAJ/ITJafoInIIER3b6XrNgBHNyOkWizu/ki5/NOqATD5Hmj/1fQkRG8MKdASb0mWAyD5hB1BpUUgVAe1WDwYS0Ztqy+QYsUmip/hRgXLCbERlCaB5cG8nFnPM0k2PYCMaQIiQCFSgnWmXDLPQPuftK0HsDahQEnbQLj1Wg7B7B4Tx/jrR5tA2Y6MVAXRjW3gj3o76QqwrbKonXKoS1TcT2GvNDNnak13915uL3NPQb1rU2kuNbRXZz8gZn2dZuHJCzkg7vZrMW2zN1C2/znseRfW5/2z3SOuPO0+H7cL7QJHADahlSardqUCk9mGCfFAYcjaIvk3Go9fOobZZwCthH1kXsVIdh/ZLv4G2m3AMJDuxQ/gCiNpI55p8CjkVDIynZ7meYjusnofyeEiQQ1YCQJ6OjlblTjmHI8yG+tbqvyfugfyg/vIRYYYZ7d+U/iGAwDK9MFCrVcWe3qFkuupyDf6i9R50820J5g92wmu31m9E1ENQYlarf/ZQTlk4+BTXV5PrB8F0cIsb9Rg5fQ6TIWw9+P7ihYcwVtsDTF2uNAnc0mIQMG4fc8uhoxEdqROpn7JOi7NAFoMyyjUo3MaLVaKafCvBbZUy7SMMKuFCeiv2WWtWx0qdvCH4PpmShk86iEYCZQRG5J+NF7PltGnYM66iJR3PbOrRdFw==';const _IH='9017e299ba303d7c314839e7f748f3a6005d17627433f5a4cf90291620a5775c';let _src;

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
