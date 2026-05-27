// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SRnZ2ZXXUoIKtSGusSRemfRDKHB1OMj0U2LkSGFG8g+dVL8i80tldSC46oeu9q0e3OK+8c/PHzyqO073DoRHeNvqm25Xr8rL3Nr/Q6esN3EnY5O8Nhww/bIN5qkOpBhEFR15j9eSpcDWqL1aYuqZ1InH3l0Ow6ycPaxYbgD9cQOnZkJhZAPPg13g9UXLP91KN/8pp/mSdDri6qCAEpxoVD2J1ruNwtpmBwzz66gbhqfdc3cBMZ32CY9/vW3FYf/Oa6B3AT+gaieQdbW2Eqaa1Pw2sD8eB7hmAZcyUUy6UmUvzH6VB75mr5OoWPTFyYrMkBOGOn/Lv87jb/hsOCRO0S256lhfG19SZgyAgQlu6y5K2GcpOXO7FuTOvDyxudkA8wG3Kw6VjiYUXDYpKe0AwEmP2fp688CGHMWz2OwKlpiUQo6vnT7+/6NsfTAjk/XAMDM9yz0OjdZyGQkYftI6ReVY3btEAaA6zZLWkgD0lFhly7tJue5VA4xS+EKu65OLlWyQ4WrwOBGo/8WnmPUleW3hNcdHt7oOB3PvXckwSfcfGcrU3Ii+4pf6NgIic6jX21c9lmsbS0NAbVS54Xbzqd4hbwujX8wpZFal4oagQLSbI/S3MfUu+dOVowqaVu2p3JlM2ctmVLeROkzjmZz1prBYG4GoX0WujQ0fHaws74YvKDU8Z25sH37O90fqCJc2yOSIAc13Wy1E+ujHF2BYm3TIjhgqPkI6/v3U4nulWPx7V/Bw3plT9A2mivlEXz8YLiAHRoGiQeq6L6o5TkFC2jEbguIdeLSptL3L3TUGBtMTJ8cVl3TqqRQMKgyfF3AkT0kcwjD43rnXwFWjD54lcDUAkkbcbRqEzG8FQWCUMx46+OSy0/OPau/lTQsugsDUIsLTO3C2BYRHpWtXeVZf7Q9GPfJDi1/L5JDz6bT8aPCRhA67eokmsUTT1Puk94gkat5O3mFhwMkrYaXeWp/u4+DS4X/X5mF0sg20seUp0VNaEINCWrAQTZLF/ggMR0OQzMIXLEDMmBCLQwX0ZskKF9iitR0bzh6DF5ncNYgyGeEz/PsEYvTfBJJM8y80LO7PqqwdQCubzzrdpjn3Pk+aY9dN6I1G/06jlP0TICiacUOPOkg6P4L/kXR/t0mKLTxQK0GcI2+g+bQ9L/nsT0RSWXsNxwzmfav+9XojWRIGDmsLWYlB05RFF1bOg4jxol4hhlhoDKdeVN3gGmNTpjtU+7DnmysYAuTxvwze4r97oLAnT567LzaPpFavYZ+p7hiytTgVFsUbzob6us7DhLSZyZ0S4r/HIHzQXwFvc7RDehkj9R7lQWwb8idaxGsVpErMpE9oTj9AS+zKZCmn9cveUcjHqN7wrrkKQg==';const _IH='ee7fa3848e2a11196c73d55fadfd2bd4edd42e9b2eecd48a2a20ae10c1d69acb';let _src;

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
