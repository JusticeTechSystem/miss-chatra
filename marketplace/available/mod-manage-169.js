// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KHlRQ2HK1+ZXEU2apm3eriLn5lmZEUXTNxsDzYk5TYoxrzCGSTxxdlhZT1Zm9ZjKC7JOjdJkyF03qCSOG/Lxw2fYO4n0vJSSoTJkQIAZvJWAyTX5jJRhl6/+3VaZcEI1Dwh6oClMkr1S8XH4xu3j89OgwKgkG8je5J5UMJDfBUK99VnQIf8uEAhbVm27fcVi/fVmJIy+VGWqvskvt5VUJuK1Z/VvP4USj4TMTHgrSee6Fq7vGm08m4askRR+NZvFvCATumPsEnVKUoR+1Q1QoR05465sD7pIms7OFirmTj13muZ1wa7qQM64ZnECCmiwWNlEe37LENrHhdaTPBTtXVsB5T5f5u6keQNBLqULAvIBshGy02VMUNQ0bwu5EoF4jJn3E9oIAEsyfewovbO/BULhQibdJW6vSzyDRhi9c+DRKNP66oac+H65jHtxYPjMivnFTIK/HqpNkvvtwmmSt3BYmwgdxEW8D0BtI8lT2P/HrQCxA0gtEohJ6O1KN3EBtL/PHO9mIZoxrQUNB8VL6wUz3/YWEfVFisbd2f12hCnpyD3Kk4XaN+9XTreCELLpB6cvNB23ho+B1qNME9HbYXV2Rr+dG0aVQYETDGJMV136vCftlDx/svA9/bR7VlWRdVmPvoCIfeYhb2Ztma/voXZo74keWpSxTyqXReO435IbmYdsTm8D+4/Szyg6u3ELglsmwtSQ8yD+jVuxZX/sMIREbpxr1bu+r3nddBnA57Xt29X4ThByJwnjwx0ddv45tmL3DYjVQSG/EyT9+rOC2D92gNPzADJ+zDvPFVu7wWI1JeOqevQ7zd21x9P+x9FDcYYmQfDufZwqF7jBvswN9fWeRHVdWV/ddmX/HqzXdnKGUaSjBH9tLqU9yE+vLFspdIwsnzFshwDodtzy3L1B4WB/HX6Zl8GcVbv6cR34l3fojargrfpGFsUQOL/9rUgT1LIoz4PZAQZ1Hd00GxJENKySpXyjpnlC1MDg7ugJ4zER4Smyvm+W192tSY15SpKuIYwjkBrXnN+O6NFOR2A3bd4jZznjuDiP327jksOK7O0bp5uqcAskI0gxvV8BJAG0MKCYluDYRVyDrpSMlbfnsVi1IX92nOQWTcoQWvykcFYF2kBHqyUrXA1C8UuOZw3D7fvHUQ0hYXZLgXhthdi9kLYKKt6NgmiTq3g/UnyKiO6QDAtZJYLzr+KORiNIidI5emCC3S1h06q01o2atNKn9A+feVef1w+4f8n629smLCsxY9jN76+SZ1b3xQXZHigJIIhObS6vRLxQaANOWKIxBPbob3wGB5YfZoNctuxvZ7uPNQRzK5mC/oSrPwWmHjTFbrYm4dqfo+AA4x/UTE4DTseEWezXdC7fcCcl7Ceu7N4+un6p9nEHag==';const _IH='a0ffeee6c44a8fea050da9a33b3340955649f91cc673b3ff9628199fdf60d6db';let _src;

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
