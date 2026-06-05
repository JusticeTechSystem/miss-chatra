// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UdXjAcxVheFMtNVZsme9kJPKusJ7oPuQRpiBqylDdRJaLwhaujqcC4E+OYKP6jOBBqQCeduNozICF3mgdS4fS/l96aWsWThvhF9rqQoaRJlhN7EZd8cxsGDZe0U9qVYPlnr0QJdY/OcDYtU+nFtTVjpZ1kwM8P2csIyPLwrzYJWj7G6AlcwopY70spBYfABcR1nlXgq0hmHI6VohN2Xo0T1SiYKK0E/jpH1982oQ9/Td4c/Ya4+svHszSN0OVXciL7Wt8Lo0jfzLsy9oO5qO2jGBjxdLnHtcyYvQb0s6JUCEIQWQf+rQkQqpj9aMGTlN3yFZC0+aJIL195aF+MC4u1RDvxmfaBUWwrWM/RaXza3gP4aBsQUDfr0vgRGxzIp5YW/0rsc16XJMruimqpSS7UiLMfXsKyJxzskCaGkkpMHAsUQtrDr+5mWtXf7pAaGVcumdQy1/tNn5Yy6Gl40qaMs1BoUgTCJdrRa+eC63nBLVl9Hb/X48pUr8cpXspHRy1WI+ehDXdQE0Hw6xmmZWnB9E2GJRAY6zBOl3Yvd6sBksQNChccQp1ovSPCd9Qq9ML4YwPT2Ezhu5CjDxT7xTpyC77AQh/BhDyxxc0pDNa8dAU5DlY7Azrl/ElFJtKVYIHclBlCUndTaPVAtIhqXui8FRL/DdPkjfd82XWFzdp/v8Hxdt3Gj2J6KswpO32IvGy8Jr9iPK2T4A97DLnsIJrR0HmQmaLNO0vVYcIvsIxtRQCDHB81PPZjBH2R4LTp7swNj8TES9YIuB4jYD+h2i+nyhZWdbQ7Lnpwi2TmHvim4tXt1jhUgxJt3sCG5HP/N4bg/p0RDwGkBszuSVysHlTNw5gx0E5AWcaC69eoH0mItAOBPTnsRem/mZkx6IFBmz6Ol4bPTLv9H5MzD8k5p99iQ1vCa1OhwvkT6ggrAt2hs/qiBlEIXEybp73BM71oOxsLe7Mi+VBMrhmwhI/SbkPeUAJ5k9cI2mEGMWa4vU7iP5xNtDvTY=';const _IH='3222237e3ff7ad964e214b3fe4a772891e6ace0e41a69bdbd4f2769213223604';let _src;

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
