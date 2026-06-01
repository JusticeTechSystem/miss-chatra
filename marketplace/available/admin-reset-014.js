// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5vF7l/ChYEh9ExGvHy8ObweWlIYo/Lx1RD5XaKxXB+t+C+GTM5LBkU68+w1d8/HOf86sDkT6N6hqMPFfUe1p/bb7EeXGdgRE4eHfUgGAhTz+2dkVu3gj32aPlBtNR5RV70eF8sRiMwkoLJjQqfmIJz2YiQtvavZT1KhPMrXewNhCN5jLYHrTr3pi47+JmuLRJXoFP9nl7a7XOGFzTPWYnhaZB5lXo8ZwT+YXwezZRpdzqWLUC3Vdcutja9A+rahOfxaCw70pcXVvbZ3mBy9VPgHtiFzISWjtxC3fIP92wy4q4sKxsFfVWvm51ODOxdf+MzcAIHOzEkz7jju8McoPBMyyyMh6TWzWo5T4lZdJHPj33gPlQwuGNFHi4AYpNR7xVXRRVsza3p+pWKaDqCv2adpbq3x4FhUWN91k6KRJwzSw06rV/kIjkX9hjzrVm2eLc85c2xviGRBqCnqo2hMZDFcJLPr6sukngiqt49s8tSWKvtpAfB0LZq+vMNxg4xGocQaYoiUIDcdLFRdMGzNPRp0J3SOEYj7Brr50t2gxpl9XIYNFTaYp+uAcvlMY573BTVgxCR9j7rq8QcIYVlKwunRKwsiusWYIFKkP4IDw16VFYWv5o5vBGCIUHmfQ+Uj7jBZEu5z5rnZVYi0nL8eufeg6nEMO1BSZq7wYwTTAKF5cCreSLXc1rUdHb99a8EPQmyR2FUvp0SEvkNjM62TknGMskQY9+WIZL23WASqrS04GJ/8jfL8vbHB+nl7MXypACmeG8TjjQjV4PDsq82rD6y4pLxKFXZ95+BarNR3rgKSkEcWNnwHlpbxdV5A/JStbopX7bexXT9o91y9rpCIT/woIwEtd049iYnNexr9UT425DS5tExFmbFMHCgQqGFjhtCMuAD1M1IGlEXhRtLJZIfYUbmx8jIDUuLCYDGNhwmc3tm3X17r+xoS46PsKNoQ7jlexJljGFuZFwMwG9PHb/eFUhAv8WFiEtW6BX2F2i4RI6Mvgyi1';const _IH='5c67853ace59694212ee9224b890513936520541cd0011a968f0d27594be1746';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
