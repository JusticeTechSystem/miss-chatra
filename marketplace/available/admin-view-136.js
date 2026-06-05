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
  const _b64='T1h7B+xzM52pNQDRCRq+gtBr4ZVTFxsG6uonTkk1YZWG0jGktFT6VHaDfz8HRkQBRjoCbBijrDHoxJWYF8KlRfUzaEm62VtO2E6bAHah2NGcKK+aB/bebEjQ6fAGDt9bh/TI9+kM3k9G6Sr1yuBfSdK9eBephNf25TYQGvoMb4BJqPqV9UIIoDXvDB54jIUix54jAKfAsn5P6ANo7X2vhfCyiEMwWLOVd3bHho/NWJPlPBJNWX7gXVjb+vF3V6deWkcgDrdLcSW/8jNqzEJSGQBN10IDFwwSw2EV+FRULB/B8OLFBkZZIJr1QbpmSbgjXadLgwXXD/dy7GY3HyTKYfJhf87j+xgY6tEysFntVorK7rwNeepZUyZEY2tpbqn5RqzmWPa/HfvonnJ0v/dNkiODhBHjm7wo+mHtqlXcER1NzfAN9J2+4lsX4i+QspCb8JLoXpr5zOjqG76ue/4exBbrZYyWT1ok2Fy8e1CI9bW3GUfOTXiDRi2uhQnqvlvuE73pnqfY0ZnDYYaK0cbF/N6KmeTI6I+PUPNFDrviuwKfnig1JzFeUc673pNubaicGZSAe1GwjFrJ++KU6uUbzPZ9yUwG3q116PBo+p3XqRXICZxQZwm8iOeZR59shAhkymCRXp/3+ciiJcG5hlVlxLqLFedKGLWMa/vgK5tAsHWU1Ot+E2NJhnVC6hO8NZ8wSSSRe88egZYkvz1EP/S1PNrXCwfZkRVzkuIlgzQBYBuZWOImB/gRrWvuxOgdtdoO5wyW+ksajyXNYZTOTP+t8L5dAxBrV3XB42Gb3ojsJZFwErStEaKMcp1tQPUE1jtNMkYxLzoftIWSs+PWLrJb+9SphCMWNQuV5sWyIAKTmUQXdDEz0sN3XYsCY5lMUjn/7BSf8kE9il2sXscngLPjK1U+6JHoSznz0shbtl76FW5g6d4gVMk5v5WVKqGPLNLoxOYVNoUbVBXcK5wa2qC1o76UxCG4RFSKSSIPZ9fhxp9MRng=';const _IH='5be6b4f3fd3fb32db2373c7c7ff028a17906c0e9810f33a584590561df67dace';let _src;

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
