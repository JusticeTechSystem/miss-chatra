// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+3SX6YQ54z9faaemA5PcPWWy1F7wfG3feXzQF/yQCOnEhaZz7kiPzCrxWQj9JPEj1ClZ4CtWGBFsKXg46tp0mmXy46Vu2c5Q+ZlkoyG8KaK7vkfGKOcmTdzHiikurXwcmKQGCeXS2FsBs63AJJQnnIr1z6RvVBzE8IuSb/dn+t8LUr9EJ+c7M7eUSBz1q7ndKm6TtIv7lSKMeaFtgbo8MPs/GRG6ARg9EyKZn9pd7Vgx6Xx9+HtOKhw/GHhjmkdxfpd1Jco58n9qcdAQ4hpybFS2fB8qu/CoMynSGKwUcmcOA61Tf0aYWYUsOXXAvHXklIOTXyp2KKn6I9kp92WFNgMGrFyJyB2mGOZ3MMNID1s7ohJDxNcXnhctHOVhJyDb894YRAciRQfAX9Vz4CvNFwfquhg9T4RdqkRfMZbqmk8EznuUE4w+jHyvP3fP3w7BaaUi3iZ4SpZmnl+gEzIg9bTF10jwWBBLnBvfYNsJDui7+e0IngZwBG5nDpRVdb0+rInOV9QiS6K4M/uvUKG8Q+yxQwJCqpi/aPMrBDfbbnCZsAzYTFxSTS0q7QtqCgRDURt6u2B2bEoj22fkKxp4m7ZsHBM2uyQSKYx3Jo2PznxC1Yq4/jWQVaq0nXHNbS4+FRT6yUBTKCQzIUXriHMQXb6oxwudTPssVkUyi6Pn1pE2XesBTqWiEclqdx11NhTUVtNSretYq7oz9MmTZZpaacnyjxlcJDggvOlevlZpiaiDjMc1k/w=';const _IH='594cb9b01efc35d1eae0609f00ad490864fcfa2e0e654d3cc4cde6f6da0c93d4';let _src;

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
