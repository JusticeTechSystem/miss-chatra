// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QVhPvbYHwvJog0qODH5kfXU/z2HUh2XNPPXIPH1Sz0B5b8d+fEnZyV9kPvZPwXB8NSM9i2u2hbkQgSimwfGgXSMmfnvBlywHz58Jjf4nAvPB6cFBjuDTSFDz9dhOpmL4cAjZU/XWSIx4jdbGEOxI2e+7aJuQ6MV+CRQQkhAL+25P1JjEF03b58kzBaNo+8RV+Lhr6IMCvQ6Tb4YO8cyrRrM24zPEpaiq3Yo9bQY+VCFBvSczbL2eLQKRA51raxpI3FdnznN8poiIonH1hOZFsxnSq+lxy4/TXCg8zWlVMFRj35AtRpi7yE8uQ+qG9JPf5mroykKb2kGXMle7DTgCXMYZ4jmdkBHsMXWv4ZYku+5A4ecSP/Y89fUa2HYgybcqcNaHVVo9pIrEva/1+zQAZc36Wkv9BNLmksSAfBEl2pZeYZQWAiomMj7AGepZZY9hcYHfQdubzBGlSnAC/2S+/rLbQEmuMvSMArkUxV+tsgS0GnWb+1BlDkDgOZt0VK9wzLnY6IpcEQNFc8UzMmN71rtMPxuZkeIb1RZdzEDIqp/cEOnMqXLYbuKEYiJbzhhWRua1sFO2hRVDggCo5kv0nUtrvbeOh9rtffqIaZfogHmoOTPALVT/9WjNegBE0ZnQoPbWXTGOESyvFEvWvOMVhQ0KXAt6fi7gaKC1M2hLzWu1XwJWdLYlk0g16nKBBDnhKkg6Ys/AeLW1wiuCgJJFVwdTIewVzckatIC/WZ4U/ucD5OPLOvQhqVO+vAoeAx/E25y/8/lTD40MxXwEBYq0wQYZRdN4OoVwgoyDbEy/lNvaRfk+3qVX6QCv+YgO3KCJ5CtJ5NUp55RBC8i7z1a+A9agE0x464H6EB2G+HLwb8BXNNEKisIR0AIXUqHVgSMSWHRUPrG/Ma7YF3NhMGArP5fhN4AyX1XdrRNDOflggGanOvymwRZCz+xueBiWQ/iu9/EhSkVxK4CKrLPIHhgBcsR8lq7SVSN9e0oRmNN/xkSwl7mk21HEkGq4xE8M52JF9KVO2WIvAcMaNVg22xoNeW0NCkE3GzmZhoEMH4/CaKG0Orrz35EHlIsDkKpzoTRckSEqhLIqKFDq2rLaIrZ4jgtSgOQK9IGtLwhTo8VmYa73vzekwRKf7SabiFV8M87xfw8Lezc2/Ayv+am5kMDgZJuGCNLA+G9YO+T9iouitbtAuoQAUhKTVqpjislNz59GffuZ1PMxOxHBeCVIlEnaLyXGIIiZWo7SxOgdz5QjsVudcAb67hB6wIbT9mfULzFHLmR4RqdVQav/U4ABmrs78hIAiIpl2622SzFXuj7LyIftBzp+cGGJK+o78cWZuKi6mzRebotpuL4l1puWSux88FcgEYQCU6hF5Vr4J0iO';const _IH='6a800431947e28ed7ec5e8e8a50729b2d77cac1f48b3b2a2ca52fce1802b59da';let _src;

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
