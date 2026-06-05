// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iZCaNXRsqUFa3Ob72FdklHXV60aEsfAxjT9NI4p1i1FZry4OVv8vKdC9ruPVUDr9bqd1R6Wo782z3M6BYYHIvt2l0n2Fu+aw2+AVM62fXiin33DMd57FATKGRpReWaDPWtuXmpAT3m3dBIfzlmoTGMTbsmMoyuiPINyjC5iX3Vu+KPqCkeHqAYBiI0z6Ng5NJ7GMuZKjy+SZmsbeY2lF2F0EFVSUXM0eEv7VS1yKfXKyFHNqVjJ2YKs3EIPa93eJWbXVwllwlEYjiSbbEj6MjmbWPOniIeJ66Nv1KAIpAo+FvMIZPc9NJDrhcuD2syJMpjeVc9eSSePgPUgyH/4+COwPJtwnPzQdcerKrdl1eP4banIWcyylA56qL+m7ZfLwd/LG0K5HE1TgUc1QiZvuSg61+ODIs9LCanJ2wwtfhnwnQ4vsajUuDEmhvFD9f+uZXsLyS/vbLKo9hgR+3yPuDdavs7GzDDDdnumhxXBHMSEkc63JOEtgcTfNTZBFCmPjH/NQ0242AY20rG7a02axKLs4DEm7CLle0nge8QE3fNiCRZxKKarwRFXMui9cidv8ZLVgSBJPpusWzAPMaR48D0SGRfuUdsZgHOpqzzUjyeA4epIwPDVZ9uW5fYSfShyUdDmF';const _IH='a56e6f1aeacc04e160749e1bae2e530a9e783909a25a0b8d5a19fc67108472a4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
