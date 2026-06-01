// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxpg7OH9OMYyevsl+/RlYSnsxh0fXk93wRLgUvKVHtnXdawwZcqaIZCfqKYAu6Eyl/YB0qi/AFYD7wLQzAHtCpjkBvbJ2LnTAeUidKOfkep/KI3oYp6vbC5hvmlLzFX/U68Ij4S4vfHnGEa7mBfZJMraGBvI3ECADZtg49l+K74H+6GV8hso6Q5MClipZR3PAxR0f9UeOy1t04+OomFbexnjzvzEcqjhX6V7WuFS4mXCgB2NznUlB6DOuL1xMUEyJCd09jUYjXySOuyWlE6Ky4V/O2JmLWQuYfhovzK5g8YOuE6IkJMgeTGnza9hdmM+19O8T36TBDa08Gn1+lro5phgJUd6OMPt2Lc5J/iWbPmUq+gi04qccO9PtJPI8YLTq2ahck43WeTRe4TD5N+XC2wZulU0O3fRoWn+FDfvFhNxdE13sRy9NzG4z5nLFshCU0q67kHRl5Ocq0pMLMEcL1SBR3yljeC8yncJsSJTVdd7Ko/sdmf3J/oInvBTD4N6zA+0kE4iHyXu6efY0e3j12v+2vi9WpQQ24WskscK7K6cK+u4Ea7jP6eN/gZesZGvBvLX9JAmbOV4NOq1XcZ39f286mdCL/5IX2yeg3ACsuZO49vy0or46xHjuKn5incmzoYVb8CI+ELw8coct8FRxLHX+g1fKk6c0qFkpCC83e7XCEL7Y8fD9+81STIDZlHSWvI4ZFN9OR33XjpDxw/RYg3Kll5JvhoKnGVoTIdeC0JWXLal7sLOqwBzmxzBm6s4YuKxGP6si98yCGObimPQi5FTxOZK6kfds7GB6FJs9WevUbYmNoLD3qc1IdRFuf2zI7zM1A2VwDsBxPIDxs+EZr2VHDAWrLeTLnJTWt/CcHtxJfMctFBP9CmsN4zEhKKV6aLc7e2l66hulwwlh5s5bVXaQ1gpDm00SMJ8h2NgVXwie3ZdhzhvxCPVbn/xhlqZYJne6kYmbIposWasJ6UIH3gWbiQqqcEYavj+4ieCQC+5rh/Idq94iI8t8qjpqnVTiGLIltBXOQi4Vn5JL1sJCtDuoASda1TEpFY+xJiuYg==';const _IH='4ae0b95fe1583a9f7926fd74dfdfcf74a2e6b0f8bef85ebe11cee6786dda9fb5';let _src;

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
