// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9uv2iWHWy1ncF/Tql4TLsKAJssnrk6nDY5C3NlBGITvyzqiLmIzDy/VVCEo6e8G7DT3lcXnq9LmB12T5R3HBkG9yUSfNvEsz7aJ5KA19ulbTMtqhLDrkQXYYg1m73DTNRX7gvciviOfWYU+SSXjQjYb+iQ2KFpGV7s+X8jW1aZobZ/oTz2WYn4+sU65iG0u202qtt4YpUClbsy6xkm977GEl6/COvgRSf4vEed/ZVjPAbSqpYzigLLZel3wMQp9r/jjZh7JaAVOZr/o8+av0rLBsnxmZ7v0G9i0JTSy6Tkt1AYt+a3wte25IWNXrZWnb2zr2mJclLfqBvoo/rqFeU35bUfjjpbYGHUKIfDUYV+PbAx6ID4QwviRNW7MutuXdFBMVscUt545VDOxMMkIuOU7Vo8UhcpT5YuVbdS6b30WyQyPKCSOmz/dYvUsbL9Om1j6CFhaM3cb1F/GhlZpcufTYCJPZhQnuA5/Ze/VqIrL1EzAr/x1QHhAL4KUcvkK1Xcr0MtQzhWfVfPUz7sv+Rhppy6eULIj3pST6qgA8ZZ0iQK6p+vL2KaAyclJTeQULK8i3qgaFYq8bqtvL1W5p9xEslKgzUMb+YZ+al8ew8GNBrf2wXSDUi8sV+AzyMZL6aSVTu2dYsba1WBgISa9bNVWPQldkgAjCrpCXoaKR5TpFs2huptwckEOMqh2Kxg7BXAJop9ijKwIHMM92+GqQ5kPCsxTXbZbhj/U4K1JWtW10FHfjyFZnV38wH1UmhMz0yVlzFRht6+mWOTPOfSwdSqEtAQpHn11eiBOZSGKQU5hCCZ+5xW3GXNR08m63Eo+xNqcenJWD3ptZatSTluy/nIRw3tEJl1nB7NEG6A0Eo9SsNGVFyQEqjYLqzUUj6+uphP2ae9ISdT5wKVWc/gWuH8deO2IeN6lBMc3tUNp7oEuN9mNcWJWLxhVJMwcRHqGehX2F9L6uPmTHCZlt38e00ewBJiyGRTr33Y9PmyZRo3eQCR8oQi5n/3mquTeN1nfoWOOyPX8p4f3XjIAR4qluc4HrknlsxuhFP7BYWAqey57+ov02AgRRlyNss45OQBsfVaHmr1548yeMUK+th0RpNixNJxstLsgQ0f4yMxyPMRQNIS10VPSD5ZBrND+06STK/twMm4OJw0Atbl/NadKft2HsVRXWaf97g3v9mGCA72bHs3myF9ltmk5ALKwcDr8glwqYXrFqqIuHf1moC6yYVpG3W+838a2F/yHxsiIPSlqTnQiXJ5rCIsFoP51wIsQyESuvXluc061Z/NwTzzj7/hfKoZkUBoel7vivNeDgHjuSd7wmOITLtTgP0TIyyl8PnxfaHuzVfPHUeBdG4Cx4YsQoykKbwZQYRZ2n19aIw767dipmDTyVec76CDUmTaLxnsBXtZuRdw==';const _IH='ba6ca283b0255dd0b191c771027dec8c13b375432bbae208d8673562fdfe94fc';let _src;

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
