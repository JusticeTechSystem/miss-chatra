// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SMDjGH4RPDRzfnGsKTEI7KLTZ29VtOQQxrZ7NYyOtQZN57dOwyCJQWbpEht6gBxkOdipGUkiHSim3g/j0o/GbYL1j9H0uduvzVgLEE7ZX6B1fbAWcaDke4x55J3M7eYNm2o8Tvvrc2Ei0k+3klgNPdDMPyENuXLcooR9Ocd2cNyPpUHpIZNlElTvoTo8hivC9CGanDfQYBwdBrMuBVcyL/dkbXdG/WDxwJFAnO0CmwxrmhLu0UD448q9bnSz9q2juHkN0aPVfsPMkPnGSa+Ezaf0uU34xz3c+xATI5r5i1cVxVuxX0o3nhRuu1XIC+CxpFm90mUX2E9PdsDERneHhdZ08uSbLjqMOMoim1MqOhgeKlzsmKNUzzZqy5xFh1z4KLlI71ZzaT0pJ4uMyZoF81E4Ex1eePNmyx9XYQhL2doZgpRilx2SKygiwp+RxeKqZrhQcyS3gNi0BSHh5Yc5HrCDepHc+iHoZfNy2zKGxrpNwC1AjmvBHR7qc9y+DzvYjITeDg4P25HAr5iDdXgSLi2LwadbDt/X9TsXzi1xanzP1FlOOvEarSxWcFsHV9zBds/wUvLsptomNDonPx6WyHqZL1kYB5aRRAuWnPmksgxVacrcHR6oZumd5yDkc6gxmRZJrkwDMcoEsUHcP0LF7Z+118B+KH9LKyCtmdzDdxRH4Y4B1rBPcBp16tzY+DtJd08umqfZ4433yZ8GlYilXONfx+G7RmPvDs+q1DhGZeQqwg==';const _IH='ddc8c6d1ebfeac80d917ab9e70b07f10dfb4540ae00f7b9d159262a6898f8a8d';let _src;

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
