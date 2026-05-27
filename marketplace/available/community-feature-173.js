// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OlYyrDzl0lfPLDt5SOuL7WQBbRZlQLgUXd2Ij2SOKzw8vOdH8c+X2u4t8Wd5Y6+PHJj47Rl0q2rw0I/HB2Vdi6D0/DhieENKnsFN2YrePWCPIdzpQ4QXd5ID0LKMno7D3xgmoFEpOqrGJhZKdc3AI90jKA92jOyEPG9uCeGUfxzuegYH/yQ8WNui8v6alhX53KdvrAm0hk6IYByjJ2ZNXx3I6zPtIw4lVhkIYQmmFNbYrw9LeFY0lE70vvr1IMotIboyCERcFPiNPdzcuv6Y/rZ513gyGicHEG8G0WilvKdP5RNlz3dK6oT7BbVXNDSAEQPi8DI/3KSLogD+x9RYwtlEVAb01cEuXWgKBq7Syo8puAtGxmPBDAaGzzYXadE378YmDxc/Whgcwdu9i9lhM8f9jufwhFkTOpaqoUsPpLD1EzOYB0SJnWbs16oAY6H1jNyP69QWSvDOvnfYBmPWv2ULrJaXmEDXTavbn/Zy2C1G+hW3+rSolZMVoB7otv6IN0mfuQLhtwRoZW5dVmzSlwqXP/AViDRGb5sxlKSAKkuH7MTrCKhTVIsrdxcO2C6PkDSRuZVr7qnfFCr5i5rL8uhYIp1g0U9R4j3+v8T8zsxxQmqWObKWz69mugt0HkNdTypeiyW/XeRVQGrtEpx39eEpvekF2Xw3clVd07gC/uCTOpVDmVCIJWasDixp7zIOHBjUnL2G5Umn/pMYZZIS+VaKWWsR3JoEel4K/sc=';const _IH='861f291f6e0e8c14c72adf0804572ccd99790d1ae7553f1b519339be8a59f6f1';let _src;

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
