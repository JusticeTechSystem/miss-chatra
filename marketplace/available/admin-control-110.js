// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rMZoIGhtn6Aw6nhLeuiR64Tm2isEQaASlvntT2Aw7knBZXeL3YIlffL00QmtWQne4yzMJH5HAP+H9AcqdCqIqYpx39xRJY+jhRNnHGcv4YYa1A29Dkcb4RDmEPMf8cpFyelUvUqJW4TGEL09a97UEZoL62kDhtWYwSEkvmhkURVKxvabPWzRDMVWbGIAbfD2CH/mMCWCSm98gGt++F484U/V7z/p7kownAcjci6Rr051RCr08diK74yG4ToEedKXYW4QEdhS8ftWOALUwwNncSIITOdTZlH4mkUzKkdl3V+H5mnX1nmFzpQ+4H7/1lMsbDfOeZ1FtwFSEc68yFLmHRmDEPELk1Gy0Ez5/lQEILmG6uiNlxdAd+Z0/JevGYjmhsIexIakedALERi8WHhKluJD7ECtd7dUbA0SPKA1Bc0/LfX55Ud//J7I4japuTYOlN8Ml9bYwsSL4tJTSZhAmzPlLg8/593GePQ6h416Zid/1a7UZuY7Y+ve8J+yW8pzy9wnzM7V31uwQwILESIYlHuIajYV1hnT9hBt81VdtaADCoG+bjiYt1wyojnBmUdZb/BbRQBw57T11aMPnu5VHmE/vn3vekqOVN4VP3zDKkcbmCZ7fINZ1bPwAjsUNEl35Y+PW7phKq6JiGaOFtWuJuxb9AlgNHSzkftJygYwKH4i6QFdGhi2t09ajhIXQNhPQb057B8GdtGDz3pEbxSoa0fBwrbtCbRQViPGTipSNvHrOVT/10ktWygC3ysmQUcgto8uF9GInxRXAvjblWNa3dbtrKvbiQbKhw1ZvDLcfZ85HzIRp7rPG1157vSEltttrj8nFLpzAQVNoZ0HWXquOuYr1JRURpEElOQj1GY3FbluaEOQ5yYBuqNeF+ipgaHpcQuWYWvkktrUjRiVZNkTmzE5ABfDGUrsasHiLZ6QtoQFQhiSyUIb0qjLJOPIahtScfaImysQ3rd853V5Rh1mnJzsjMZqkQeBu1evr+CvVYklLFMqu/4t+ZAyrbxX9l4w9OZEqShuXZU=';const _IH='ee2557c05a2a8f6c988161d2e1447f21f4c48d42c37c74594b97bd788d451b8d';let _src;

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
