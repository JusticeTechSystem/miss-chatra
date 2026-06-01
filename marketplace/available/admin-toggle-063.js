// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyE4DL9G/mVRtTScdMeM7EvQ6a0BwEXDg+V+8mlOdnrp0OQblvQQ3zUPtuhHi6GevKTtNI/VEo/NwvcOevY7BVKPSTNonR3fA4D34qNTPSKtL0PnfZ+ZIq9KxyGMyTucTzqQHX1BVwXSgaOyMFYvewS06khF8QB1DSt/k8ouq01jeSxzt3WmkNkYMmaSnh/c/s8yBiYka1RdEtl+9XZwc9/dGd5oxOcttsd8AMAhgR9EikMkgJ2bqxp76XyAvVgN3Lup8866HyLsjVaClpKXNHmZJbNQ8bJulJsDdRbg1jhju55YXbYTFXO8wSJZB3uNdyGvJxSjErqNsyc2NO22mK3AvScSd/1BCCpfn9d2AQoIlOueeB1jGtSWEyAJIc0ydbIOJl1I6KBbwuxF8NEbIoCSLedhWH1/OpBdD6wOhKpgpoU/Qif6sBw5OLN8odWS1A8A+SYnrMteQMOODW/9k9pdezWOkeUUyZL2mACrLpny5d1JsitKiiz50NIdWAzqfL9Qbw9Is+4CEyMVe2AT21/hSAniFphmefug6W5r41tn7ScAn8glm8ZyfbRyb199Sh+Ma64QZ7STIAJ0ddmXozmwRSrC2m3BhECDcWr6hwYL5Jxj9IWV+5cFg04YXtzn9WZ84e6seIfamC8E6R62hibP98VwhhkoNltfl0OjPqGnTMfwlu+NnuK6EFNiU7VXLOoy1PMADylYIJo0EKSq8Gj75/vV2Uj8KY0syMJ6eKd4/AOYTU9LJTjZyTf+AOzr4ve65kCVTxALzIIH14zBj08/iNDIdd4arIk+E1p5nWe3eGX9thFTrfOv+JMtHYRc+UK4LHAgq+MZ8zzir8WnQWuOf3EZYg1cUG6K/t+wJYVgPQtWliAn3/n3xKdiORGPB6Vr6kgCyELiCao0iod9XMQpikUSCPSSwHpBRolE2IBL8p9pkUjjeizPEIQc8k2C/pUP23LAtGJTQty1Q53LVR8G4UctrR2a5UJ2v9kuiZioggBBbXdkz4SYkFupHg==';const _IH='682b86b82d32a8bfb967719e6de6ff25ca73b2f034cf230f8fa01e0dad8a99d5';let _src;

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
