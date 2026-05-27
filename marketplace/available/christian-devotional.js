// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dPqQDYsbVt8dYX2WIiYXipEi3J0NSLETXS9GYh0QQ1kZ4aQ9iOgkRd1fmvp+lTjAs8S7QbJrRWsXV45LCZbGM6N5FOY20OMc8vEzsIrZaT9OIyCzGoW2ZK0mlN9pTfc9mYPbuqD337z5TL4jb1SHwPobzTP/QDUFlWTEJbeXBARbORFOHc0fdmpXPNzQYPX6VVhzSM9bbKrdly7AUEaeHpB+TM6T3mR1mMEaRQ+J7X/n4OP0VKl62DJ89kZGpDTYYy1KaCDiWW+3Tc/+jOu8elpwPk/eDvSvDrCwXQmmXQHsPCJWOJJMxbfPwwRpEFyRCdQQnJTdWTx+VqZn1B8TTU2O4Ez5T6ro5nDxC2KZ2ZNDY734P1UQzksMD2gamYfY9k33E/QXW2ByupxyGsZ17qvGd/zvAwmPYkj1L3A6ceGjxQ+3Tfkse01lFUKePNTnTQaBkwMpgo4mcksrPC6kaDQ9Hb1JZ5FiRmjSHABaM1yqrAcx5edpBZbaY0CIJEBuZmS6AW0IpA==';const _IH='e55e1821677a31f6629ef7825012d0211dd3e6063647c6a6dec5894055b85880';let _src;

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
