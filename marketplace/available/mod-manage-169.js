// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6KebttfZ+sHwcgHi+3nghsNixQIGfOuxo6tifRo8NGnyVnAWBo4766hpu7BbJMnINKg7XoszwJAjhn9CsFBGKz69enVm7ojfer5DA9Jt5K1bHJEf0oBL4Xbw0OQQwP8+rVVfrstrlGi5R8+lQUUCM6klayrbTDhN5zyvCah6VcSVLlN8a7EVO4ZZFOquUDIDoKAbAopcXe46tE3b5d1av7I5GRk2msNYenYX7pkzd1gKtHwTBDbNlQao79fzZJJGZ9N+26+oc5d6WXmVwgnT0j4MSOWcwJMGnIsB8fsuy133zsKNy2HRoEKgC6SxwrVOGjfraR7I8qm486vC2jCiMbFDQb+IRiCBQCSyy9lQxtDsHWWnbIxityoCMXleATQHjVNbhPBe4Suprhab7kHUSk8bcwh13pb97VRfEVJGxlwrdQjLQIZ1U+CB1GblRAWTu91SEWSfi538Ps6xtI/mao7uV16/IwyA//g5up5Di63u8Vn42hDTLKpkQHCYEOeSrt3JVCeAa7zRREmW5+BwOTqtGseguqlGQGe9hkZgjcFK8LY8h6kT4u2HRc8gXGBaVZT/28rCBg4dZ7AOFSFLf5657nykpxZWe4QwrLW+GLiMIPA06Dp5HbvCTXDzCFDvDaDuM5EJ/E5hMrwR7A5VDPmpWu0bVTHnfMiq4W0dDQJiQkryXLHYkUKl7zzp4slJm19lz3qDZp51o5nerEULNSCRvQtkfmQiuoL+ZmTE/BD6Am9gZG3fxFYQHaShyGFDA8kYN6zB41QRU3NlUVeGjdV7Rnd9ZUnu+pACnhJ2kZ3abNR3abp12YheokKrV8WNJ+i0dQS49qzPxGSaHGRSlkbEkBBcIO7r28fV9s9icLlL4LmIgDMJ9jPgsXWCDWjnmbcq/C6Tcq3EDMgtRMqisgDSniG098tIKpr+uyB6fbQ1EKxoU3DxVh5V+CoZhZ+Qetq+QEe3eck8GbtieU/w/pHOCylvk/A0YRSDkX2JWfri9KFwYtcSRXMP8eehH2X0nR+xn5u0l82MX0s+NgAU/syZYigIWortcx/guAkC0vtlso4Rvem3KAN7rwbrWmMrYzdfPRFa9DOJZRlRgKKXXG1d34u8LFxMw39OprglwesYhWwxLwJPGk84LU1dAeZ8gBGW5Uqf12a748wGqqtQRfIU3naAgvj1pXq0NluD6oA/9NlXssMF0xlQ4JlvRktb0CsktkRp0tUd6qCJLwvnhAxVSNwJbTWlZNu6LGQbp7fP4sA4eCaYCiM4x/xVM2pqbrybH04vqL0u7lvEf9umg0qgPKCLo2xSYT8TdtaMM9UrIVb+sO2cL+VQ8DCnV12TRStxYlUGsqEJVyU27PiWeJxBEkQuKb6fcA9vhGDPnXRpfWCS4Rx9Tg=';const _IH='b3a0eb50760f1c66493f1ac717c263c11e558e65edf23b61e9eca40c9d2703a8';let _src;

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
