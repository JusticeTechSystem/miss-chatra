// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A9CBfC5YlxkIeDvve5RvJbT6N+2lqtQ7coWwPK0/cvqRpQ9rM6oX0abPXj2lUIUCHttk9mfcm9ax17yBZ8iXbn9Nh812tJzhwaih0l7iLJnL0b7AEGD5Tauu1G+adIOLfN0PZra9i8m3mAwA2TEq6PywhJ0E4bHNU7q+aYupYcau4nek4oKtCdBFwFMMbyBTWxzYLzVMcY64+JdhOlS9cZqvA8eXGJNMjTxXV4HS/1qDGjMtI8y1HobqWPliFAaYT6KP/aZqZKTKAkiM2iplqPH+dJaHhKSQaGD+rSbKmUs5N/VXJb39zr0iyS+NQxnE2VJZLuFd0r1g+ZOAlCjCz5uSE8mnVJINNGtbADKsOPO3qtiz5q/HTDd/beYH8KEdqa+beLnOhS4uPgPO8gVoyISLg2tQRfpJPsjGTz5FgLVQHkA1k/yX05DA1iLa6fmJWbZGMo1JkrOAku5eCa2SyjxQyGhxkA7Fm2QC6+Hgebe05/FiZJBoB7vtWZTACeShHYvzZPUgf7uCknAQQQ+h1wR8qVdDoCLyAQ/PWO0VZba3c1BAWmmdyYeHZnu5Or1Ym+KoO2SM79mPEcptPoOBs2ipGx/P5hf4SldrRt3vhZ7qeOhlfHjkbdvNitIUmFqICaEry/4JtxCSXBo0zgINzyRTtd+Ed/s1+an/0wL9WlWinUBzCROTyp2UqwSnot5+zdTT+CtSYAnL4zoE7mUmLv19JUxrtqBIFDXIa/qBuKNu5Tzez1xfTnP/uke39UleQCEnohzd3wzrT1PpnH9QkzHvsLSkfLKsSqgqcHSO2B+nGBXn5ErIMECKarqmgTkbSdf2wVBKxur6pvjGiIrENZmnmB91fpewFC3Xj1zWgFYiAZvIdp5gXSzzU9HQVosVPQnQduaN8xYizo1kT8WUjDiJPftcEbNVy10XXg2oFSoENwP+eCp7nqUMbE1mMICQMcIwQHYfo0HWbrEEpmNeLSaFsYtBLvqjW4wFSm/sZ6V4zVpAZX4GixQiNMOEXBsd6V0SbvGdN1g4HnVA4ANkFYFGaw/roXQCrvXUcQcdS3YeagAUIwYk8WbgvGPpyehrJbCWmL+ojDu15tQgYXMq42nU23ENq0lMEi09lK7wJMAK3VAKU1w+kYf2QuraP3tzs4y3SFJl1Qh3qItlxtgcuOhZg3OQvUDMiPL+APo95poFhiddbi4CY3UMLIwgp2kCGGJ3pLZApRXfo/kwdqBAeDAFr99oFmnszQq0b1gb+EY9+0Q/FWZSUeLhkhYFupN7AjmzK87mAFKTSXv6HPFbIBj2NtzzyBcewK4ZFrK1qmPUunUWGp+HgLDnB6biYZ4831CiKMw2P60mT/DPA2PyAczODIZsdm6y5g==';const _IH='13e19e7058853a7794d2f65a4e763beb53f2d51e695437a152db41fcf189eda6';let _src;

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
