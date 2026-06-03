// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='16+0XS7dcWms7gqRT2NnYk6nCEZivH3OMxqnF0CLKUsgmXRkkeSbwwCE8PxXXB1n6Fv32uSQt2OhdnGbJJLMZaSdR698rknMKIYYInJ1zIKHLaB3wssEs0OKabMxpg0t6OSrdrNQpIZG5NvnVgLXV1dozJb+cmwJn8Kpsl4FlndJwFtxaQcpzp0s2Yb8cFCc9pateqqJ8HIOZSc9Zny1t8UCwsSl4zv4TzrH5M2UCpTAtBujMgaNKN6Rci5qs7wLN1RvAEcx797qFqwSqSBIdlA8OhM6oDZ/GPJMiPDydIy3+i4nWRNF5rdS4N1DAz2V+zq6A+f8/9zLqM3XHKd6BZVFp4pQDRfg0V/EMK/IHj7q6UnlWvHD5TdXQ/O7S0YW0/JgepNugHUYnm/eHvaBlDp2XWj7GtAvg5xeLPqVTNIzkWWy1vkhvsorlerWmU0olkTdcvWg9AiAGuXYh5WifuQi97fNqT87TmZQU73CdUh8u4Vc3S93qN1Ff2KLAyUfJ9j0MsSqPmjHBKQr3mg/4hzD6TqEZT3kxa0Nlp6gTqOmBXWCSWxuImFScLqiQH6Y3lOlHPB5HQX3dA4j/T9STPYED8q7HNY1vknuBNtax6mwkXNr';const _IH='40ac33c8e75e731460c30ce0d16cd6616b7eaa0950d6a12fd41382c9b2430814';let _src;

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
