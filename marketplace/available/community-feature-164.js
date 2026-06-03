// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a+e+Hu3LPk0BrG0Vz7+zeb1wC74tFYtPvsck/ZBbhTQmGxrCUZykHrOlCwwGkk34Yiy68mVUSUrEbfsp2ZF5BuP6k/GCyfn+HWVOAkXOhGUDcGWu+Ps7SPOBs2cv605rdqBLK0HKehRIrotJCNZQ2ofRFZQmQG/fk1Xt2Xhu1RKQd9TtyKoR27p+PL6+V7/f8xXaA9EAnPtYMctJtx+e/Iv0iu/uJtFPltB229Hihm9ebe3ma5aa3yg32wnUVyQ+Z1o5qEAiz2NfEvxh6w8PXAI9Ztp0hzbVpIiOwcwA5DcWfJj09aAcVOvbgXH00B3Qi2FAELi4ZrMvSTMj/GeDLBRsJ56DcOrUBDfa0unGlmCh4hsXoXuvJwtUtcmVuQohsZkTSALzCbPXM1dqxg7lnVoZn9s5oY/ocBLNMqa+DVPfnO3QgvAz+3kB4xM/4COfBFHllEzzs+fwHynBpK7FabLLGDUGXechn9Zi4BVwRiMxwnP6FsPKZFcG4Sex+zWLHkd2ljurLS/1cCZ0tay3dboVU92j7bosTTaygRm6ln6Oqxlcb9qp5F7fT4y0jacOU1ZHFckwA9moMVbXU3KAbSnrjOgOEExYpcqXQe0u1viXVCIlGpPScLN9A6vrh+k1GcIFNAB9ogOBgAwRX61owcXX949eVLuTJsHdcD3C79Sw296nTZ9xZB1CALf4nVNzduEBGiVlkJRbg4JUCGsUXbq0Vy/wmFr9O5H5DHrXTt4VxC33fGE=';const _IH='d0b9c4d81a7a65aed740b2c5972b3c68dd2d4848a71931d7a41ee886b86bc5bc';let _src;

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
