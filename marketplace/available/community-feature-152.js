// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zpC9hqrcLYyexzC7Dgj0rDnn+KTFDR4I+IJIG5Zu0HiJdf6lTdxfIja5R/Sw4zXkNYTInHGEfxn52/DIPPI76mF00+nLr9I00j4jANQR0mu2fgBnb6bhWuuVjWrENMHUPbkx6sxvKCOeqRiCIih5PL85SPwEclYf0VJUjM4FaGlCw6q6epoanMe/oUV94fs89Fv/vds7bNvBX/eTHzAWiJMbMNd8E4vCUBf8llsmWUeD3qENNo+odQcvQjooL8Ly8xuGQmrzObEsF+D2VicGwgu709z4UWTI+n/Njw8DFPFbtyDNSiy7OYII3JucIf9TCpF22Ygpc+RUpCVfDyMJ7yT1j0qMemIGvgj16QNxk+pECcdqMTfLAxYB+TbvfgrMh8TNDMossVXSgnopqwg/49tGHV8vIkMzQiIgAvtYSH1u5sfC1/hruKjjClcBAXnZbWdbnufmndbQNVqUHg88/kVhsEgwViTGeCnCr65T56ZgjoVuAIg1/ETr+WquBa3fyGD8WM8AQhQD5iWJUDkSqAhE+/6cN2nbtKzwKSSr2ROM6LqxZHtU+qR//POvH1enhHVnp1iTRChgJrk1U1jLRe30Yss+/ZsSanQ0DAlPrDoZ1SFHoJ1Gjgx3kMuI/80Po1Qql7JA1wAEKYyZSz6dMTMdp0IbMaBkdOep8pflYDSlMkcS45moecyU/q+QdV3VZ+C6hbgNox3asYCMwBhuhSyyERsyeVfy/FfDvin1qxiS9Dw=';const _IH='40ae6bf953b2e99c7f37da12c0420573a4847f2e663825008d4d9a9df08d0a5b';let _src;

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
