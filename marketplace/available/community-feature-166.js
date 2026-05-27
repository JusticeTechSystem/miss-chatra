// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QfQ4TZvu700C5Z0ftfPABbHnrQqgtINtONxDexSXw+ezPZfpcJFnhisI8i22DzfXFjFVtLL2xD4yssgX/NjOEIoKkFlAvrPpswbVEFBZuO8cVURbaIGMKzgGLx92nKcwusSNwiOyWTtNii3orNxOE1EwHjTRNpIT9oXbLmpTmR6dw93rYH+iiI9qhioLHdOHS9iEpzAOv0jWu/gcnB0opauPNLustzhiKHalsmvXqcl7NI62eMYwtD9Ob1LcZj+/sGGLuStJW91avIzhAixLJNK+zgc1DlsX1hAH5bjbaYk009N39wtXxYBYSb2Zq9VLzxZoEjbD/h2n14hblpZ6b+gjxPq3juyZjf88Fjm7LLFA5WK8t0L80dUzEw8Rljzx9QdqWVsDA7udBLcIc4VLg4xlBY7iihbl9UaXO5ji+GOK2WlNOhjpQTSncZwYP6d9DQjeZjrYw7yzEWzpH27497s4SxM8EVwW/9xMyUfTxy6BnGmUixydiPjoLBTRezijlkIefswVvjsvkgPHdyttz7qTxAYybhN3gMT8er3NzE1tichZr2nkzHHlSa6h69H9YHGDYToCYSBPLAmJZaS/3MJFtcWN5WeKf9nCXQyhkbbmwkQMv3BiUFyZas2C+Gq4o7U2heyQAV9afKc2TenoGMGp8015KQU+XbP37eZd4tXIVPwejjnKxz4BLJdFO+q7QpspmudxyikYCuedo5N8WFQQ66Sx2fFR';const _IH='8add7337586e05dbf70d8f11ee3cd12ccd569a60c4c787ea40f09c36a4534ac7';let _src;

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
