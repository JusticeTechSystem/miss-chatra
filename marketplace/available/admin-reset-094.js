// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TT0Sg/AeiToygHzERBYzj0IMRxubiK2FUGFQXtIfmumYRIhOAFce6W3fq0Ej176BwwChIUGCXo11yFE0g+lS0HSUHW5Ol/pQhCqCb+tDVUgnbHPuqkz/yWul38BwZI8UaiJQKoOBg+sjSMOErozP83P8wpmA/MnC6fw0IqLKvV+aYbLfh27ifzRAGvxKt5mt5gIPUhTTzo6OhaVvfWeenBGIn/eYnaOx7ZjUkVdtAafTMgf8iV+/mBlE06hSLJUNMruOQkskNkwebpSrMTwIocF0XpuVnvi/ziwtp2ctzSEpDZrEFD9XXxGrFdLQ5jzNCYe2KDcxKm1EpJWbi6KGBw3iCMwKmuipI7r+v3TfOnog5NnW9eGP2795+8g75DTi8CNpzULToLNTENkVta28DzcPx3WAo9bOVU0E0Ivgq+P5d3dslZsBqE3oqi+Ees40SPyZ3Om8QSj74N24tDXLEfY9acFRckhmZ1YZXQIx/Fd9FSR4S7qDRBoTDQ9QhzMf12umc2b2ieRPBJKoZcQX3aGTV2sNm+qwak/ixFxL+qKnii3Sd2oS8Xpxn/LBFDaZW4+bE6r99Ccln62RIwkR231nWiLKvjBnypIYRHd3JaFdB7q7DVQArRrbf6l+l+vLFNIBuUUIQbWhyjYkxCT6/RK6ErZbrzaEuozpsYtVBYoG+z7nxeirwoIjt0J0P5vMH+LqJBMlKrBRaEBhj8fAS2ESTug9ZwpENyD6RI2iwHAz4E/gEtKuSIYJCDLh8E2fSnThpV10pPekl9yQW0k7QJ72vqVWUd2wyTyr5ql21xL+u8e+l+pmp7sPHf7uncA+MfK4iAYeffjnaz9790UetloIW/fXZ4jowEvTHQD2HGRY68Dy6ZC2FU9Cwrjrfn/j4kFrScJmJqyl09sVgtdcgqO2MjisR8VHMALAjWdR2x9GPJ1bQ/BM0hojC4W/e5ZOSNre/ZSiHJTKUEvq3pu7RJ2wTKSRdGoHUhFpMuBdgCuLHNwoJwQ=';const _IH='3f198417a2432ff0af5531e2e58e5b66a83c7a041eaa3d337c52daca1a086c16';let _src;

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
