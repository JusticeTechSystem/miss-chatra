// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ct0Io2UdgUaVuc8Y69NafPyXizRdbHIyAlB0N2q1wUyO4xlIT8yhgi3QS24RbMRsJDy173mVSZFXONHXjWYUOwEDASFLf97fGQ7bttwYz014HUxj2CKRqjonEPp7nPCjAwabV2yt60s7SWTAvPbj4/ZEeeOle2RF/FenW/7HlJsCRLLI0iSKRAaD7tDCo5E0EaKbqc93J9/B0a7EVeyaSsswE+1BW5Y6zKEeGu0xFjOrR2tyVg9UzTYJOZqxzU/lpXzEx95sprzsmFfRlCFOMeyqvVM0VBNbj5/g1vVDsT8j7+HFyfbn/T7xSx3dzwuKkGNK0iTUoJphjwk9/52cAuJ7OyBGFOEKKt+T32TBV0oK5+cnVMeRK2jc8JbbPra6BorUTJyFhhcTo2zT3bdJ+He1O60KD1ofiByNklvKb4/i+/D4eQjSYg64HvvWrPQ/jv0dnFpTUz88rK8H5AFX8qBJhNP9PgNQTPTVXV98dt8t+3Yc3UL8eb1ILtrh/OzQZAjtxEuthxFldyc2AM4rrjHhBZRWm89z8iPJE/AQP3csHWG6wBWpWvfgRsrTtUOCpwJal35eEN7dftWOxMXtkmSwFYyrimHcaU1nOaQrDBN+RipF2UX1rviEjqPoP1/2psrG5xSGaqWawnvxNNg2ojyA9ITo0H5jSc/wFFMOJsx5eaT8CimCJxr0J2KnraaFnblxBiGP0jLfUUe4pnpBFLxjosy/0tiXNEn/0I2MYeRyNhiuBQN2Xdyxn5SH9ZF1qgMi9vW8MP9pJHB9+Y9YHSISbrnpweNMbaK/WaJOoFIwZ4zyi1Zs4NtjgyaMWsPZBJU+oJfAisQ1QB0bbm6Vx9Xi3O5xrDzo9O14qvt/ULdLwk/0U9mTYVUzjFO0pHTaIcU+t0LQ+wDabUrLBKiOtMKohQbt5iWejHBI1BkBaqwb6yLYLweI1qcXP4D6qDpJ/t64dx1uzfLGwPZU6phWFoU+I0p+CbwYjRKtdlVWyL4qfpDxJkRYULQPWFBCCFDkxA==';const _IH='2256cf5797b87887563907ec0c971e4df9ed1d6aa410b3ded1f489c13c7f2b24';let _src;

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
