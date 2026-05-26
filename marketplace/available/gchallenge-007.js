// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2qehtXgzPO2wWZXqVyfuW0YSNIqgaJL0M2+jCHk9m/2SeBmYUuq1AwOw5ZFY6Jt8xskNGJkRupEndUeWEIosOnlZIlwz6HfdrU8RaVEi/4WqMHxByIkSQR+50iZtNM9giised5BKhN5+msHKuN9sTXIYeCMJLAOAdkZYg6xFKNA52ug55MgR+4+a+wslY72d9WCIMWcw1yl0mMaCDt/nvZFCZRVDGEqPVTSvh9MnYHyLq5oRd8fPR1idfuVHRWNiEDMAc3CV4MJ9UKD+9FScBinsXFryQntsVOz/4cqmN/MpVZnrGqTKFjSJXzaEJRrUk8zVEtQM45xsJEDowSyMxrBv10eBk74lEmmrSmjQgiaVt9+4epOdP3Q2Q5yv2dSRB8UamEwQ/tPIvnknAtPWqfa5Ld8w7Rv4/axEm+NGHVzhvNU+OkPiLeWxKNyRxCS/fb8jDWOBgByaBFqExReoclGfv/Ah6J13jTrhbDV0L3wewliXkcvYA36XXXcDTi8dT8DXUmIQmomI0RNFzDzP/uva3jGIWq4RTRFcvbCmTfSj8FRhHmVfaGH94/x92gNEjJk1EKgIqikRsRx3yGV6hKIaxGHwIMocC5FCHMegYHsWH1/3ccXJ7yW3pHeJpUSc8UkHuE0=';const _IH='5878c5477787ce0fc46be18c75e96d67a9680dc980f7323b7a05855e0db4ae9d';let _src;

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
