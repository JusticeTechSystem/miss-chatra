// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2HhWG7pZ3ApvryeoFyulGoEnmlW4OBXT0gsqnIWpI41lwSWz3AK9dXxEKmtGpfhwslzgcxLr9//GqTA+sf/fQRo++4T3F0XCr4bcwtdt49iv5hRVlOjUjssNcmENwlJuNDvQ4b7AiscPAs4Aapsc1riqDxiMRK58KOD1x/PgvJHODFKL2T6g7Y/u9Pgie1yRs9akY/AvYdcXb5gbfM+q+KghFdJ3sp1dDcePfNKHoMjV0wgPXobFHlJ6lAoGrVvEHwcijcTxxjeF03KGhtMcJMobydx/bFlj6uRV8FUq8e3enX/XTAJBAnpoRu1/ONbevnufhcM5RF/GG76dCy0KsgibMl4/9gnv6uiPDwoCAW8lK9YEVeM/uiPGqy7AA2qMsZnbNfm6iIgLCGj3EOTiuLghuANYGvgVrzddPkWnOd6QurdKzefLE8jcNNeR26sLiSZZWuYfvxbFjp1WdQdaX4ZCjQVP0t5a1yglOBLxMYDcUDUO1uB5gYhtejIuE9Q9EbDgWDZs5eYC2fpVdmpuL4GIEcDtieosxJ/d63L0FuCWM4PdLnn+gwqlCuCUR7qQZPjC/HhMEYp+/v8azNCk3EWMjV/SyoSGpsoHr5IfeDvcJaxxd0OGMfgUMzucYWxdCuIM0wkgPPmGpe67fHjRPh079dFtYwveciPpH238nJiB0DNmitwX2mRXXcFn6Y8OaHxWsa0Boqloi0gWZLCR+HQ1niKa8AalwhHrZMFk1qnE3nj+AJpY0GzxDXt9WdscXSAv3c1W3POzEOtGhFDEbRmJ7wC5DsF3U4OAsj0njYfouxkgJc2ATFObrW2ljLv4VyJUMid5rs7gT0Dl+eP8JU6cnX9/PSlHQ57Xb3iTLb8YafU5symEnIH4zrCBySDyzzdeh4tiCvIlPUn4MECRIZXRoetwHZfCNLNDcFvZJiBpF3QVc2+eeBxBLfYbbcmXVmCVgZlybR8kx8cahQsAn2YJUNs+3knOkgdfCoC5DYhmsriPUaI=';const _IH='0e5ee777980bbc15985259666baebb957a8ed28dee929f92d05845b7d141367b';let _src;

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
