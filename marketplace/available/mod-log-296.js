// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='krEhKfaaQDSeDcvobGECsb8Gfu7ZkYvb0FjRYtw1iTS6a2gi4GSirxb28oAfdMWVQzI6c9xl+8+TLRHVTwkJfKL1598TPkQ1gtT/10qIEioiPbTCuhY1zcXQCxkJOuL9+z1BraIPAQXDmCeQKX+N0EjY/WHPhJ6/XjckE26NzS+MZi7yE5HCc0PFT3oRGUkl8mn/7AFSTlXbXw0QVUOsrD7Jy8tX3HIO1qcDIJvhagkxQkURO4q8VR+QmCJJ0hTiSkqG4uQzLqN7NP9U+2FxoFczHD5BH3IdPzeJjdb/d4LuAkgygyyzpHGOjZ+SczHEM3+GxzNKG5C+w7C2drnyqcAUbd4P8fTi3djIRB0PbLXWBFe/l80Xhvsl9YK1sCPt1c7hcPihpJaF0uY4ijU3rCAP4jNqjdluWUPKMRUEf8fWS401tbmo9uDwQ3Lgc2piOJiS6l3BQG5eUGjtdlkTfbZtQO7GEKraS03v7FI0du2pinOJ1DstevrQe6LQqEnmB/Uj2n1xE/Xsw7XCNnIwSYgkz/mJlwUBQpk1hanC+mzm2ywOrWrGzx1fORipbjoJBvWUuTYDKnTOWf7P0xe7S1ze/SdAUloDlKNjbGSHCW9GlluUjKHFucLnSoNoxNI5DCBWZeT04+Wcr/XjaqqtO5lpjb5PpbSH1xB8UZ4K6f+fOWnsvsiEYvlX/sQIR8QdO5ahXoAIWEyPB9eFT2RG8Negu0rQmR1Ftsfc6MpoTRX6nLLByY/6IeEDmQ17zDwwXkMY/v8ziLoyUDUwht3IAD8ZBws1SHLBJ2vqzLyPMMkFc+fTdTsnNU2PmFrGVK7ml891GXRnofkf6RlRY1p/GIPGgI8EYLxPr3RdxVdlAJNm27e5YLoQ5sqxttfOPd+TLVRv2X1zadedlz9VOEFMpxCixfZjT46eObQXyYw7hxKhuImClIYygJkEx5Br3oheTiAI8fW3hoNy4+GBguJmlrUCSZqRMx+OFEIx55MqJVbXbA5Gvbi1zyeFf2yZF5ZV5oi4QXDWbQvmkVAe/tGIfiCYMbh2LrXL3qxHWYjWRNQ0a+tknfAFFpLebqJqZ5TKYGWB/gR26V3JVf3xehpZgBV/wklH6bvfU+0827MHhT9TMcJ47vDmwsp41Vr0b4KTd1zxl5oyDI5OpyLLTCXzhTCF+XDMpv6PKrPCMhaIqli9MyeDyL00nO9BP/v+cngF7eYKqYcm30XAB8NnYHC364amTBhPebNTwrdYu4wRpwEqWvgopMvyyL9WbM0+60f3NjifGE0DTKgyAz6OLpx0jXUAUi+ATx3e4N7dOM/KFd2mTKk0Me5wmcYu3ZSqYfpYskERezEO+wOE+Q==';const _IH='cafa0af0a22a5057136286ebe8bec20994de620053dda4a954b4d4c06a2d1e6a';let _src;

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
