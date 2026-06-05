// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CE+szMBvgvFrKcorGyE6L/wqn613+L/IK6j1oY+QsEe89uM3DilmOfEs78ckBCuWGMXUF7whU3lgPYENJRItlJAmIlq5PODg847r7tzREhSLxZuPoIiHaPaMf1EYYjw1MWScSqXkgAtp1zyN1i9mag6/1ie0kXwSLeKsKEDL/wB5MH11LOVk+ZsrvxdciuHtg21SRCvaTpIjGL8luymQ+XoOW+h9MOIEKtIQbrNJ376p+o9/DzczT65RXKhL4QqfPd8Sp1xJtWIWcyuodx4b84jZOTU9GJJY0HYYKwq4X42CrcB/+jYru5dmCfsoFkroy7cDCdAx/IVpd/TmvK3CtVTpemPrdbHNi4q6aSlQvshMRfcE8+JxCCbkVyi3rWmzWTQafytkHiDIV3/S3TG3/imAMgQBJbTtFtEsCrvFQGnWxa0VkmPSMEF/2QIYgnEUY3dkLqspYE70qIdeiRP9uJEqdOYDjwubGuINrJqOqf0prY/9k7JppjhthduK+K5BsRWYFz+rjPeohQHUcLNiRhyUSpjwmorcoEwzCiozGdlwH3obemm8hf1fAoCOne3Z2A15tmcnly/Lz7rrMLotFDQsOWvKkGTC2eFPzdw8WR0rP1gF4mldtfVrgvSbVanVJIAulJoRdRF95PNTPWYdtL8D/E58jiWOqpe254Jn5SLsuCVaUrqOFeiJaIjEMdecTNJIZCmxPDboq3u/tjnPa51sjh0wv8NUXCIOThBi59q1dCGhFChhEdOZWwOCfQr8qk4CLdEUE6E+riJ8k5oEkT5ttZvjVD7mLiQ5X5ZnQnwDdpNLcD2zFITcqjG+ZCp6rJ7wAgWwWz5nqQZrMt8LSO95QnvnppLbC8MxhUeDeBiRssoWtudsd9svsatabMo1g/L8k89PruFy2QhkuFuLspZgCBH2y3P6PquC/HQU73a5DS3yCCyaMw5LkQVsq8AdIpDtMVMjinllHpYBbAK4PpQIyo4aoL71KLSmvK+euyLBMOKJwbZFA9J2zRQfD+Ic8kt4TL3q79iuYDQvqoKLWkUDZ8gOeYehQz1U6m7NQ6dsv4aQiq2+/2XsZc7bozhp2MpvMOoa+i8QlMynZQNif+3Q5b1tejMPiJvVk7kg+EWJmWxoMwkqEpn3jyijK/lyrDvEK93NGn0HbkomgO5z94bA3ene91VzULqODrZTe0pCQC8AxLNajHu2lVeQVovN1lbooU9gMOtMrHtPeuKXr6CJxzq6m/3eYHQ1RNKW1sLlq1V2/Gjcr0pD4tZEtzZoueq/i3bUmI6GKw8vt//eOiBvA4OQJC1gAwTtGvmaFHTc2WNZ2FVJ9l5OS4vbEnH+iytb9VaQ8vlfgiKwupjCksikkSyUrsImFUGWdBSr4gmy4K1dQOBykTepWUgzxaGSgJ8=';const _IH='ef667724d8bc83f917e146f84318bbd1614955b5693302a128eae3c02c576bce';let _src;

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
