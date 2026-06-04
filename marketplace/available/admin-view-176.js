// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c3WASl3dInBt2t/bLSBN6M492z7zAVYsF/vaiJ7s8S+D9XXSq7IsIjKCRRR0U4fZhLnf+cdq4+qtb55PI80jWsSSiISgr1zNPDglBvslhaT++VXsCusZS/lZcSk3juxrfR/6ze7TGgIkGxDg1GgZ1XssmpZLbsV13VZVcfUbJpega9cTEUL1zIZfOC24R7uqt4orPpj6LDtwNaEpD9yhl+Mlmb9233fu4AxDWoP8h37ZVXNM9LRKmCDlFeOpYwGVF8b5aZIh20KZmP9nBauCfRZOkiknPrEWfF//+vSdvzgpACvNhPuySocd6oYEQsudYgQXc3y9i1ELvbydUh+FmPpyQ32LXLICyHug2/P1JBhRGlQyMEiVeosJYJVdfEbwWSs0qg2Q9VJXLWZtUnYptZMLpprljQIGxBlElQ7AOukgkiL/ZMMewDKP5o87FAZs6iIx/53aHBD8+X5Tve+PwPjjJZ200LQ+EATulHxVl4lN7/kRJjPPW4jbOnvRYk7lUvqSvCcTRLmvKfFYcjKTjhMIinWUiKH2B9RmNy/q9ibSjK5iRQfWEoUipfY2aU0baxPFAQ51uWipEsA1FIFzr2Vm+QfZtJalYMIlx3UEWtlumcw2mbmQb8DGpOdSsPpGrTRojkpz98NPWldimT9bU0j4FE3dUvxoN0Fbcy/eSHlhB5R7zUXBtWqI3VM0hLKiszkePpJsxY019rpn7bf958SFnVJoRqrRPuC4LPGj3gTt9UaQWIb3Bv34nqkiRvxA+zAYbleIGn4m9C8Lvk8yG8Lqn1tN0RiySIEXVcqCnqMUuqJeyW3SZ2PYPymkAdUv1Z8pxqW0Ow/JIK2gJJHsDYTRj4dEm9JCq81vsKDTLR6KLryZf8V/Y2LjXArP5qJkrq9wHq+zWycQgF0EB/jdNcQBE7vUbt7vHIbNjwAA0A1qxQGQkynPyJ5npQ7hGl3/B0dTdKGfSSa+H/Ag63wgYZAYdAhu+431btrIM+VG2g4M1qg=';const _IH='5f7a2e6c261a7caaf0e808556df995045214f7264c63a71ab1038fa0205d4abf';let _src;

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
