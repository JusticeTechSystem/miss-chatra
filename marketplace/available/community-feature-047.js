// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pZ1pqaVaU1s7WTwrDNWqQgsqkz0OHWZmMvljiD+6wPq+YDGAAMLnunPhWJddglAGFrHIaYM4o+xIbmPV5Lavrg6pwaftvaPH5pP/bwG4jU4vU3IpqNneH89alfv+PcOGGsSEwqGlAuQNe9TD0s+/bITGCbwmT89Kq76O8RkMiSMcJn7Q0beZnX3U6kqpQ04/Don6y9Qzwum29osogi5nkFT6dGdEElGa+NGv/Imntv2Mwh9dQVomeDLybu9teiOG7POXuSWTZtsOc23qtc/hvmXPSQ/z/aOwXmV1WRQDVZK8QGv0S2yJhWciBwiorUuhjUhwycnvgXDpXtWsiFKrIu69fLeY1cF2s9SataRVTOwe1PvYjjgxkapSUReO2V/+NLOY6YYXZXLod/L7STeNGAZSk7zt8GvafyoHw954VfZJSG3X0n9mkTfUlK+haUPyUErU7JOa2hg8Dy/MIvSeav4fVHve8xsj29W/hX95IChgmh/jB6VzxyX3+lAtTHROpo4I5Eo8JCcBsgMeT7DN1C7mCqodi2bpVT2a/RCs6TecxDLkOq8ankfJQGCxwAyUPOLYd1MeRrHOSWLlsWtlFa42ZvjPDQQ4hSoKH/yYMOYarzSVtwn2/UwAw/vN/f9Jrgdc4HQfemrDnwMne4rcciEjvyeqxQlOjToFrk06Iop3BJyS01cZgAXg+fyjabPyui+31vnEnloappZhtrhxo71YY5QF6hFgS8mEjw51Cw==';const _IH='273274a7e9819e9f4725406b841220dbc46c4564c07ea2c624b964ddca67f4d8';let _src;

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
