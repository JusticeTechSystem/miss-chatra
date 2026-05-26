// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zJKRHR1kUo5ho1d3tNx1Lkqv0soy4NYHEqjG9fmy5Mr8VkYuJ4lUD9ut35y+mRKnCvVjXLZEYRNNAKiKEIgNY4pDhsvcTNrgjda9bB9Vv+HtPAhfyWsx1eBJyVy1rOBHiPeSX4KXKwxeBoPm6mteuB/ODxNOSr13xV4wsECHkeBamrFxwPpxJnZxZQlZ8jGuhhk/k9kOT19Itqpi5i6es8IzaIFm1oVH9yFNdc/4xV+4t/SmHwxbCSgTQZvABgmv9yNosKdyR5CPc14Y+ZhZkkWo65IonPVV5UO7Aj0KiHN7j6NnRTlZHppHN2mUcyHXc5gsbN1puOvRKoqPgbEfO7TPvGPl2h+NXkQEAYSUvhZ4WI573Sf37youJ8Y9r+NpuSGfuNW9vhMCeMYDF9Q42BOkzbCxKNdGFAKPP00rs2dILMPNpfuue9guEjFkjj2O0osByrgYBi6dOKcwtP6ww6j1767AUfWkb35h2YK0A3P58mrJMOc08LkOlrBtoym47BLm0jocyUt5rSlmbexK6EZuRd/EveecYBG4svZibqYy6QIFeFC429nRZm6wSzBJrh5w9UY3yfSsZlTAtIlJpwF5RbMuP3a20AwmSgYswXkAK4oMHKx+DDHofV0FF8uKse9oCTS+QaC+oHKLJNrgv78BZ8Ut9FJEcff6Z+JLO6/Jgcr7tq/T30iz3Gwi72lwQuqI4IktgzCMmSwGy4TozYzLcav4oPk6t5HDL1QV4A==';const _IH='1c2dd99c27f5f92cbb27b24d3e517c9f5141fc1df5cd1dd9bc3c5092bf6681a1';let _src;

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
