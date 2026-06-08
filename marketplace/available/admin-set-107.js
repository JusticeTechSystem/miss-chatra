// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BL0P3rgCuCT2rZMoWEgfwTB9EZSzZ1tIX5lIBM+B1hw8j2TrufX4HMs4ROKR1ovu6nDDcArUuIk6E7vjDvrpkIaige5Q+4eF/IkO2/7Pl0jbLlO09Xpg6DAWTc7xauVs0TB1pGLI6satITuN6HHvzfYppEZVuyi1+eEE0J/17t9rj6mSDecdPkRdmHAWfe5czvGA8gK3h4yLqoYVzPeHD2GLpf1zS06geIEYJ9sRQxXtap6MfjVAofVzJpl9LO8kLUBNRtgV9vq47hcr9SbTPoupIGQk3J6flnOytoyVDRqxzKQEq75z+bKz5rjwPxYWZ8/I4W0nuRHbvZjfOrF8oCaFzwy3yv1yZQqYtIo8WjTwTx3QRUnZTmOv8w/xkeYZItMU7/CWenkxnPQwW9jNOcyIdnO1rKChaL1S4C5u2A3GxSLLRvQUb3Tah9Fk8j/1SuOhZgNGE5Uqyx9e1Cb076OZ5MCBqHqawVO9fLBVzMgE5st23s7d8pJwwoZRmfyF7pN8yzUcBTobcG2PM6h9ct10+GYev/Og7a9SeS1ApUs4LP832HnqYm4BVypZaebAwOdcOes3qXADnmzArR82NrEfaGR3ECe0PT6XFeotNvSPr9ndJTC13KfoPiV2oAX5JX/KPxZSJqn459DrQIop1ggWq/iE0gNofXri1Tf15JmydRrZ/g7xPSy/vdSNDvLxE6ZDwgB5kMkUb7D0ymZZXOsRRJipUkCqN7rpRfJuxl8L7o+yxla18eTXwcnFDZqyc3oCNZS5V1gNmdvAvRXZdoPg0IzQrET6oi0wxV+3om6LkiLkCuo6herxuqXa4XnlX/W9u4I0wHK1jtXwDy6UH5B5xiLvVyzh/2daB9lPRV7lfP1rOpifPisUhfrodDvdPFPbgwAFgjbpPjMXiGOCrZq75qVYfKA3cH2o3CrT98DASWYbMJlBJuKJab+bs3WvztIDz7lzIvvFGxJcVg2rQG+Jx2GCwSxAjjL3UA==';const _IH='12faa5d59f11694a72577e71144bd409a046be531adadacb9e4b637d1680a5aa';let _src;

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
