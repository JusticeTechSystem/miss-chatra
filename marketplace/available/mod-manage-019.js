// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h0GhV0HZIudfSNr34Xv4sKy3YyZGB0VOd0kBaDboU4zXsSk0aEb+wCOp3PsRYOVVf/nggpurFd93LGcAn+Mksm1KzRUOaE0jEElzvcOZ/15Tcy0n+Mllo/BdSfg4TZT1RaBmGm6RzceT3K5CKNCdGp+wZuBwmX4fiVg1evrG++sKvzjawkSH+ut06e4UUFtDtoU9SozjVLUoooeHXv6gSw6cqVa++BZftHqLpykdPK+MvKjs7ZnKBS2PvwsfeNU3jAeUdMhoAUPfVl/JH9ACNGPLaX1r8xjYoMOBMg1CEtcxhJHAf0UohcKvHKqRTOIscnygf6jhxLKgU1h/hHAwwNtv5GgIccaE3ec/eoBWdoOJgmKH3B+oy0SMHEvq6SkOYnm2nIBA9e2ypDoj+3YoZUysFevZ7ClxoQFskIdyfkYZwOioIUyVRVsdi8CjDHAb3//t9Y9AFu4cspABx9z7VE95lv4TlTcynbJGMMEYpmyqKWKJrHbH2fDzy3Z7KHb4EoXNjCFux2iuflu4lji9c5nhhmnhVA8krkIbUpMGNRTOoDU9bPcCTJkGd+jpaRGxfQ8GmuIq2nQnthEYVEg2EsoJrxmk4Z+TnN4lhm0Lg8Ko3GFO/H60HdaBNV8JH+rrhkLw6svwDQEL1NinOF1tzA3Vp3gzadzKgDIXECIWkAj9aXb0wVr+g7lYdrmRmeerqdwdN8g5ohDdhh9S5GJ6l7GRgqajZIxFnJPxOa0s6qSz+3yResEQ0KusHFp8Jt6SiKJc4+cG1V7HEy+FZQt+mqn2h2KDeMBsXIkVhyXPnklUIPfWJ8vVcnit6WFnSH2/7XPnMRGyYvqyB+eAV/fVfww9jDNE4bLhYF7Ns+2JMLxqQabCLLHW9uoQ/NkDhLgEil4yKgkMx4sm5DnvVCk5OjPbmDCcsL+ifrrfeMETDlD1J7UHuO0bYJK+YhdljCeQ+Rrs8aVD/lY037nJciXQZfrOAFtMm6M/FzijAzWLaDO7YJCkFdcBM7WaiNTrt7wogDu2b1GpUKpCGaZR19cb8g/m6m35r5iibbTJhvVOp3P3b1Jiu4uzeUzAmVX+3K8DNJCh0LY+4xjqa4B4TXl6pisdZDUcttdyvZHHpaMvRHOPBHl5BH2l37XOkN2CgnjwRS+NoBUko8moXKAkdDLnsg1QLopdSoZmFotAzBaohy0t5tEK3hvuLLrfS3xH8oZXGKHt3qsXl3W55+uB7X5bPGd0lIGu+3aoPMTmsyCRJE1TkAxdD2rkiLOz/O6MCPrTfSOwxPfoqr1VgrQKk+jvCWlqP8gtdOsuZeQEWdEOHFaNpnPGYVkEXFVwcPDOoAXwg6x68dRcsh9bvL5A0YLcb/TAtZJyOWMBZZVb7HKnttIrZAo=';const _IH='333da2a1f59283a265253537495c256a45202476290eda75d7ff8eb154fde3d7';let _src;

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
