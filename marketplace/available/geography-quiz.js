// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4sO7CT2mVZ2odOM0T8+l2je8GWj9d2+MY/R+tF+lwTHlInYRC2bdpD/kqw0jaA26IglvlCZDm9BonJvlc93GiU8kgCxpxDV5FuP57kZstDUtv6XSVxjnSWCl3M1Psx43XsT+eCrVs4Htgc4ZAKmXUeaQI3QF/CvVPxGVymfVZVctJEmGt2uf6do8BFZdBttf2qObbtPDd14jnqH9MvGqDxAcF0nEx29hfq+PI6ME+UL9Nu2+8kHOUDQJfOnv4dR8e1+78Eer1g8Lj9bav4FiLjyBjyMeL/A/WrX5tx+ObnK0wkUOiyCvL29LOB3gAzu43C1Jn4v87IsGQ/Hw29/vfEiIkGTgantGj5oLtGwzw6CDaSlMlfGiHrksdJ/zoo8Gi377VsmUnPehCHttAORtNsQoy5E7CdxiPMHkJBetesusV3sNgyT0KyFqi0SL27MRudaLDk34N/IUOjg32FTcVptwWbPWOIrONA0j2Cw+qnqcLDLvGQYpFwRwFFRzweLBr5g/A5zr6VVHg400LuJ7kpwKYUzJpN+Gt+h1dHrr+ZSj8Rlb2s+SNuXUd9eNx1zI//+diP/h0kfHv7AfYGHhZJtcDge9xWKMwqwwUL1CbW0nvKqTYw6whH5ua8425UyH2nG1ooXkTAC+sdcXSjZYFm8LPK3sXDI+qHu3RpvZoE7wy8YxseP8OyK9za1VFDHERIshPYLmfmixwH9ImXEcX8LCfCetOqR159Ox2zWx50etuJ8WoEUXY8r+al59aGyKqUlSZTNtrY7Y90zQAmgN1MzACDryNn2WZfX54u04LgFoLOnSvVpuKxTAcwp8PIrhwuUWHqK3Xk5rtA8MCtkPm3+BVfFgpX9ntyEj6B5wP09fL+Om2tenobTC8Wajg0byZ58zENC1/L6ENc9TkQZhGrKnRESeSaS3+hYAApkVBpNRpbS6/gIEmtuZPnLfjODRwEH/09NWSYfs/HYIy4OFYpQvZt5JxqCNwT5WNLvi9s/fAcAs1knV+s8cpGFrCKlWadpxkMTRhzwXfZUeLiwJ1V4zoOxlfpKiBpMEf244uHBgYdbY0RBVnklHu1ff+VYybco/oqI5Ig/wArDRubAKHB4Ipe2i+gSenx7fZylpr3TrTAuIBMAZ6IO5mG1qRKOTMUposPzURNHwG6YUVRjyc7G5EOKpsSZtCsSk7zBUPeqJT4Jcde6FdkG5r+PtbbqUw4WCGjJOHNw1Of3Up+x/dyMmyssadSGUB9HA05W5uZCWGur07VbKMlQu/CNK/p62Or9fbX1Bz5ZgwHm3kJHMZ1qnZf8L9pdBPgItT+nX6DmypO3rKgEZAeyMIJ2JcB+dCBPME7/uFDOXuCHKVBnABk5UH1sOy0lCOn3A50fVXxfE2x/UBt05GWQlC7hDPzWNnIBZGUcTlgHxMetnmWiHkyM10ZPMdRGEKwHhfw5iTPvglp3ULBA3lS+wLTRcXW78X0W0i6+0A68+QFOkZht/jgOCU53ru+OSkk7KpTKMiCNATYWNxpntnjL2OiPAma6OoI+BFOXkX5TDnqwrCmyRFj1OvrPQHJmIOeC9zL1wTgDAJNor93r5CJ5Hs3bpu0Hgaxd4ijO';const _IH='792a1cd3d7a461b99d9f767c54bd4b49c885b0a0b11f20c7bb7ea754b671f925';let _src;

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
