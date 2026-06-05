// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SFuQE0A71ESkojd4KcKsUz0yf/CrkIF50u0A9beXihqzWbIJ9WHWS42omRZpzr6mAODzGhR96QmDPWpRhiEwDllLHS28R2Hnyw2oqVfKbFLODCplKlWfUpzYOZjBT0l1juZbgxF4U51W+JAcNLqNNoiQnDxy92qKy3vU4XBvUyAe8p8Lpcxu0YRe3hmQmeDysLEzqEh3NVDt7XvLPoJjaV8qVHc8EQyMxrHX3a2iibR0vb60XvJaW9oEcj/q0vYzSDosjkfDC7YrI+Clq1LkWt6zTYnagae0e0SC+IhE6/O3qANeyGy9+QOgsMvVQgWJk+xUi9zDJi4tRA4ObbKrsZ7VqY4BAvI/M9ceFWQ2iyl9zh/76N3fdECsi5k4yvuG6pw6CkznW5urLLp+k6xxIN2xzwmbBDcVGJH4klDYbYKkTLAFyAKTFbatqef+gVxcKrpSCYY9GMTY+vxtK69HjyX7jRymLbd+8YtrWLnKkvnxgIxEbPWo245GQlTBqH6Oj9/UUCLBZGJU5bK7A188dQKr44hNgEVK9BBzBUDDxCC/b+iK++js1hfw6PYBoacioDr8qDC1S3mSYGRJxj/1aKc/I7W8DWt34+P8cSzArB0jIJvaBeYaOW9cyAI9xVWI5aTVCryUB4N3GNXGIgKy6l4lVeL4YXuUfFHgMfD2ZSYKcptWKPVFW1PGPstGHocnmt+CCHFKL4N4t3t1P37ZxyJTOEhMKQyZA8sE6rw=';const _IH='9251fba35018885294fa363fd429e289070bb49258283cf79324a2dfc8097137';let _src;

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
