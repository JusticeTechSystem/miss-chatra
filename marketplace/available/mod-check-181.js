// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c7QPgLUhaPFHohsJYcwfy8rIs840EWmqAq+CKfLD3s/dUE3DImS+ytlJH9sf7ELncDtWkkabBzOz+zZB/zWP1ySjNh9czdfd9DTkunZiJnLBM1rrbJJ3sNS/crBXxsxVJtQXxGoiVBcozS+JBlnQ/53Htt6iAe0qRl0LGq9ZEILtiEOaFBWY8dxeUtTaMnn7yqeNzeeH/5AGK0Jg2SIOpzSeU8qDckjBBWVOMB1T9YPG9ZNWHo7vE5sMYNmMmTMyZ8tRDmaeFlo3/aNslQ0WrAE+fY0RrtXDuOVZPjZcdGToQESW+LN0skt9NoXFU2ZYcMbk97HyHjYkcBuWm866nTNFMXZSAFKdt5CUwihONge9JF5BsKdjIvB3WLJCib9HW0TfBIPbJ4QRaXGeNvFcbCX+bmaDLj4Wq4iD54OLGr4+GQyC2sqqdziiv+AMc5W7xqr+ppLT2QpgVHOL2Yxvv7hqcKtSdH5hHxGriBXUfW3BbmwVjardfL6sG14EtOBFSDSTjt3e+PB7sI8zZT1+ztyh4zh7xKK7VqPkkERgTk8SGEgMkDvdcAlvfZDHtt5XRGwavx99ugkz182d++W4w3Djym0W8oT1t+zEUj8MnxbKu2BxSNJiTNfQBDE2YIXeatoffrlAjZf1YtG4kQeVcEPE+oHNYAr7WbiMOF7Xy4BMRi5EbnhGDQmaj/60HBnxo11Mjp5TMf/np8DYm81kSoQdmRBd02KpzC3s7soQvWVkImhU7wmywQvZRdar+xRmDjORNG42zzfiOtIBM8BN6otCyEhndon5DcCcBI/Tx86aZd25QfoFEstWG7+5faQxYextqapSt6byB8l1e9Jw3alDNFTPuUAuGTt+OOIXcoAFJH5SBjfoGJZR0rvitkoYLij92XXjhH+/zW6CuLWYH5bueYS5qnz+KMmgW1zSwKt3HHevibAaEfm6dodQM5ZFJqoKQonvC+khe62sF5TYXcZlBxgctvtHsOw9c3b5QcacHWjEvuF7T/fS0VBfTycJHIJr4zvAqMXao6yjV2Qv6BYQuWUpZ/vVw3wijSfz98e6kLTt9GnqtpFkpv9ZYU5wp00KFGCgyTB9a4GfJMj8r57COtSPfFSp7TM3XK4VHp01olrTWDG0PwSSk0iOpIIOCyjuq+mewGLyqYeS78toxQDW/ZppBZNG2b6odU/KpVrqMpC0+TMCsNo0Ypalzpg5W6/MaXAKm7riKtiGiACNonD+4IwUh5MESf3ge+tnTT1Hzvn8QvkZjvHPts2THNKdt5xYu/v2bWr759dc0Ovk/RSYIep+WwcdIVs8afcFX0B7wzPVx4amUWQadJu237iD7ufC1isyvRI7yolCTsZeanxxVLKXIgR0dTAgP0He';const _IH='cdf25c6f01f0bbb1e538000d9ed2636d044717e3adae692cebd2607388b4afda';let _src;

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
