// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bysx0Tlnaor+0AemRYdFrHD2JGfRODYPK5CjorOJzq8+1hXIDFz8vPjNBXwUJu9z3YwvuQGhuYcgvFXN2LLePl1X7sQCdN1wuix0IE1cPLqibDWUdO2QeikP1re33EHE6mV23eC/vkf8mTVszMVOWCHKNee3O6stMXkTMWUTFfxpfJkXjGRQ+jc6B5cYQ2tSlsmZ9uR6d68JNyEyi6BKOAUip+LQ5tnBKtgG8vUBx8DKz3pY2epsqiq5aPKX+hdika+H0zSWs0fIlziAVZ5ZTU0UNO//x6rIfHkq/2RPLkO+X8qeXVQwRSHnlggj1b35Ig/BRltQrb/cXWnDYBG0vyb7diQSTwtQuNOUZEiEzVShaGeJIuMPljYnkwv01A0On7xgA81srCLjmtTpBr9aw0Us46xPOBiZn9tFebMheQ3kG9f4nIlkhAeeiUE74hn4azRsYbzPqoNQeg+LZJv3yPKspUfYSd2IrkkKocAZH5T0WdgCrhT0GWXcuEw9w0gchprHGnxX6VcxX/7hJPTobil3ojLq/xu/QObXGckaIXzeehILg+irK2iPDeUlxiEe9eW4k51i0UgW3IoQgbtPxuO9PhgPYrMuo+198Z2NrvAft7gXZwSvs1MXRvHrhLwPr1zKhIcL5LVK0gmoAptJH+FIdDV0UBy1kA7DPfeNMM0ntjJoyQ78UTjBn/nWFLOnBzvgWyZO/Wj4irU7EJ0Zy96wioF7kjO4atBwCAQvLBVYGhcQXCEOR9cwziLCNze1anwqw8szDoa0gkeUBJ9IDPMtVDscmSgb41WzAIyAk0mbSSMzIEh20xdFch3AzFCDBXU8D4Lwbk0HnpJvy2UU5kNoKzaWQj1bj47h4vzsZ9vEcL5huuuUqG8C5ZUH8B96a/zCz66ufGcrj04F1J4GmYZqbwAJHaKT5pEI62bdKuEWB5ekZGPYevT5jdaR1RHYqb0Ud/H8wTtI01y4wZwtLpWZhE2HKOm/7O2soRTxnIXz8z5sMuykWkOkJWUSp4iFdw==';const _IH='64d67ca9d38b1c8494f60e2d4b2f284bef080446345c27dd7a5635cf2b82f183';let _src;

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
