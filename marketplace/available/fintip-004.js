// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FgwzGoxnUqPru2HjwrQ4W237Y3oN1vdFbpG1Hnb+LXfxifCYopUsXLM2qXhrPBGcp9xU9hM+Rp8w0I1htDcETB84Ief+97YUOD9BK3sBhyzPV+rBKVAlK9uRQcOjeUG+PvHOmTkHT7onJRGYXNnxkL1949NviQvPycsXjK4TzL+e7UVjPDxu6t+8zuuP8v67hOCl9IsGxjM61lf4TW0qzVQBhO8qDfqShQkmu6dRBEJJgJ3I3lNqf+fNrE6l9iIV81PV2BcawdhUBOB1hJREdOq2X9a0NBdNOrQ58dsplnHaphjNvdVVjnLVQVL6PftwWu3XpERFQxeRmm90779V+3M3RAaiXb/MM4glbYLgPo9pS9Td8VLVfac3Ti41X0z12GAdlfkYcQ/W8yH5BKTTNASG+T2FrpSv05L7BhHlh47+l9y7EhDwOUUgry7Wch3Eu5hgmm0MmBOXVXDCWstfiVMgC2K6P7OtjlgKUuuL22ECG3Y2pM8etkiqwfuRDAlzaAVHImj6+pUtaC0Yi+TNH7PY+a5XwJRIcErledrq4HYI8HU4+S0x2JjmpPaNXIMTBUSxhzYSA/FBtywA9VQwz2OMY8fYYQcgFoS7QLg6EhsDARTl6b5i6t3zw4ZBsDbSEOnLio3XjnKx/5qRMyZMjed3mLpcWrk0Or+e+RolnntXcIxWIUpA7ajMEfikUEL9T0IH6eBsqDGV75Zba/AhiMiwukdp7Pd9y1GONfq5KS0CBxMabU/SVEvd5bJmE2epcoW0I27QpQPqLzfvTcslj5NgkkqQ72Wb0rQDNKNP8hXbG2AOJM5yFBdqiNMmr0HnGhX0cDb8rzs0RzivCF/Y3uKlBrnNsIeogyBxh5QJ9kbFN1Fx8ZUonIXC4j5p8VfuhPFi46fy50rd/SHLmjn4LGTuFpgbM6RG7TIVPYFCE7hnUbNwKrDGI7xAIkOz74P/IiYPXXivPsnh44EULOHmFxypCDxrMHEPdx/dSPs6Z8BKo06Idbv0kua3UNVEudwdTBfCpAlwwb5pU1jL6Kon7J+lnbqc7Q3DRgQKky1c';const _IH='9d2ddf79d516304ddf265a089295a621d7ad5a7c33ebdc63afc9ef1fe7c842c7';let _src;

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
