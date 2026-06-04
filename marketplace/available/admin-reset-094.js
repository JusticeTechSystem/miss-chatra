// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DT9clg8GyqqLL+ofrA/qGGeNc9MrS740Q7fWiDoukx3HkuFFKZmSkE3SK3feyI/ffq9lZr1oDZHlPI7t9RKdW0f7p0wHGSy18KJvAsbFNAGFFwMtHtsHRTV9NlZbwz0R9NM6Ui4xA9yHmk1S5KNRmabNQ+Zw2V/w2ne+rtnBcjPpUDt6FT+QHjbd/pW8WlpLCVkhT8IZtgTQaEPOWIoBPNpaj/bblfVcetw4o8xhJIwxhHBQ+o/ERa396lquvCwESAuSc8ZPhno+Fbd3uvkHCw2Gd8bDmN4wMKu9FwQP5I1rBT9t/Y/Fkywg5R7/oA3eq+wTMs6HtPCrUBNjDGQTeQcMfLrIXx/mI2phAuOfaXN+WQdnWUkPG4fcNflPyeIdwvI10cryzBbu/aX1df9qUHWQPAP11ZaYDIA2tWWSt3hJOfN3XqErLek87hnMfXRGofQ7Hsc2JazmzhK5M798qxlgorHlrjx9wZKhOc/5BqGElHMATgj9R3C33V3Ehoxf67UY6EN/XrzIyFOCFC+WLdgRaR+015cu923fpGnRB/kqV35rpO1MNMelJpavS2DVgVcfXsg0hkshU4rSjkG9Y32DFUXWBeGK/LAmT81EWSnCRCvb3o422GUp2IT4zXsgseCg3+fnj+zjckAPjYOtUgl6hxdot8c6cdmgaAikff3kkgBwJvHMUw4u39ULodxtWcxAFFssgtuMiKIYHwZGNFduXIVgwqEdhc+5hGlBsyRxihGmIpcQ7raHuHB64ryM90omk21t6l6qGcSsIET4cIIpIAI3q5B2S7B+AQwQ9q4kXBRNSUsdwNGtZIXqdpQYWBBooSX25Onmthko93aPQLY8oyecVQGzdwacYGNXXEX1PoCocAybbdTsW77ccYx8Q5Tc2UgxAR2fnjnpZ1l2KPqvxm4xIk+M4QTY6+YM7rzFvgMDMaE7HTU9/SxqJUF2RPn4QqTPaXLcEXp6cbe3tXXBukRNu+w3sCYRFB7Yuu/Co0w74hI=';const _IH='854cadd36ad09ffedd93f0cb9cea5cdd5029d5d48979399a0941cd887dd0c00c';let _src;

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
