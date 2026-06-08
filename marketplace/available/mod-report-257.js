// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YW8U8klyr2PdZa7VDbnKpfCXVTck+NOCZfPN729LdBQsrxeQUjVGv0P8Xq1xYbhp3QdJABVDr79KHjhIPOVqJ5BY8W27He3WFoNhbBgOpWIC390cDK66SzOcVRxUMbrJlrZL8mnBjz0MBc0qIUo3VPbG+eZnZNlQS6oQyuoASPYk/v4DuIRhJVb0KMIHMZTlIrPXBnKxYkSm3LSJkLSRN7dlz4VSlwCrAp8xMIVdxiaG8oQLb23R2GhqFKr7olaE/g6o1CCaTwvqp6Eok83n8LlElPg3QyQ7NViLkkiOVDAq7xdk43fHn38Fg3AfohS9KEMIKu8Fvf8cbwoPP2e20aNN7IsFf2xe+v990ctrcxLaJUtdZOen8YVsKQSniDf+W6s8e9Inre/j/3r8pPFynF52Vm/jFiokXrFqmGk7lPO9B+sLbSnRV95oJo6FVDbZrUa+aJsytfpVnE6bzd4T1+SaRstaQ7LqLlEmCvoRUDs7PDgseLdYkiiAHZuQlrro9j3VrTU3SRRt52tKMHMJS2RTFegjda4bftIdbKl0OHUv0vLNn24EvKyDYnx7qZkn/e/6Y5SGtFk/HrhS6tU4echi3059cHPh/m7lQWJUUxLV5I/v0gFBlo6DvyLPeJ06HMKuf+IVEN7ThjgHP2mtGRdvTlon0xRHrzSex0MV4Fvr4OQmupsdXMDc/a1nl+3HhZgM2cNq0C6xAfYujPs079tCjJ+t3tI1IJS2C2dZuq4xUWxUK9QbJg35T2K3tF3GrWym16Y9S27d0sPBu92LM6BLPdpWbyoUl3b5tynzUFwx6AZAUQIWhPra6dD5p2p69RF/ix0/VeAAiEqpc0P4AZjH6fUjyQucmfKcTYk3WFgskV7bAJdNBlw6ZFbgZuOPdHVbmW26+/M2CTJR4VryqVjdro4n31MyX7NeropI5KPXveU5uH4I/JHlYuLaOPYRHBzMQ8gDLDIX7rN5pw1WB/WlKfnMvISvfG8oL6oFBshQe8SaCwWs6BW1VKlAppNaIbovSQpx9SXGQLdCEOGWEc7D88hCVEYO7tP3ZZjLhvdMwm9gfHpCoiumXEZIA/lHjd7X6JcOl+mjCUBa+p0hOvUseCyXERMUU9shGOATU1srq3JHeShedr97FQjYeTx2zr1+o/LcV6w+aSQ/v7XGu8Qn1Epv+oGWCfxOp4qUiYv9TDIdmreEYNqyVxwuHPSBNLbEXqQeAC4M/10+X49q3OsrNIOirlx6w5LiXET7rz31YiMDPVZH1bmvLOY2eW1sVxjGnZ6BaPuYbNMVmL5YtJ6N86Ft42Dz2Und5kgR8JcD+hv+nfApehbSaNRh1kd2hOkQqVustyZQVgFxUWUs99NI5U41iha1R6COYVy3sg/OZpqPg76cOA==';const _IH='cccc92c0826ce7c3d652bb516b2c72018b29444e4468e58b192b0daa67eb3ffe';let _src;

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
