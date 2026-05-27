// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9uzJ8+eKeOU1In8ZBV0h/q/7FE/k9B6H6g7JlgwRQHYY1QzGYQ2avYZRF/6ELKaR4C49jGjc3A3FlJyVv7XOCIU00ZMoQwclceYvd5O0Z2O3YbjK+dUcUSsK3bPMNqIWZCL6tcTnjcNtg+tX6Sdk+JmR3e1Xgr4+J+tTuUIBa7QuSuprgv1qmAt08Tz+3LHdnyYsn90SHXPvSHrSzDOcvaAE+RQSm17FPc3JpVM0jekDqsWaSFvBOPtlx4CZS5Qza63YoB6otGv9krgpnsEtn42AzhxvHGfauDZFvhpZib1vvHG7GdTXzhvFJBVxRq4o2KsUoEvUMre4q/sKOKxxMtBjbhmwZB3yc8ForV2quWA3a+sSVUA9dYe4eAUdoHsjtLKJa+3UKIfZxSsP6pgqJZRgGRuvydqJ0/f1+6WvaFTj1iCZXUemJ4g0zzKTDzJiTnTzVtCKwL9empE+woMBXO2i0Qm413M41qDKdXdEIcjtKI5JS4scaURCgGcI90T7es/EN1xHKOq/1bUhCqEjFf3TIV0BYvfPolRdtfrLzt96uvp/1xjPSRHxqanmnoOmGq6uprCLxwoIZjF9nx/Dhh+pmlCLhoQv7rhnQQbhmWkbc80RsvD5tyjI0gwQ4ZDh2B9wntsrc1zV9STfCxSPGbrk3G2lxrxqPMj6Gr+ZEBcz017NqOb0OmLyUEAUcrjfIi71XQOqjR4Y/zf9QEopEpgrNdHMLE4zZQ==';const _IH='5090958ae9af90463cb4179aba02098f73cd0b2b910962ca616d55c2a3d5bd43';let _src;

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
