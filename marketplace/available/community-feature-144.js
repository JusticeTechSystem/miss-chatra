// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='prRVvAM1t3Bb9EKnM6TtWAHd4lFjwWUBVkaFRgHg7YgV27vpAdw2LR28vP42WcNTIL+31QDnXS4hoUqYJRftrRIetx5PObQyUTs2zc+P7D14bdCQWDyY0YgXIzZIvGMJD/1Mz+CPlQa1zkoiPsvPd7EluE3+37nNEG/OOV097rs1gAUA2hvYWnVW5VrB6KHeoKshl32ZSuSZJTheLJ1Z3vEgUlRv8X+yhQ3orUFY+7kGdzhNpq4J7+SfwxUCcxAQcLXQwalPU7c/7j+5stOVxZQyWze6iTxoYNpjTMOFiJVC+e2HJre/ZZRlx7xVoG94T+nTob7HXTgh75UfWsWnmYXBpz3hnk2ub/3nh8NTGF4yXFj1TQbosNhVI9wX/YMRSB/K9Zjt8sCDRoIWe2IkbmPqTUHYzKIuC3fvl9mZbycJHjnC+DtSMsFKUwYOPiSo+FcQPEjFuReHLIjwxrtdJrm7BkS3GK1DVzfem1/w5kk83ZwFewV/7dsVN/kYdPHK3C6TNNzXRtoI8mxYkTxF7AHXgxBn2JgO3DE2EfALs6VgpK26hFdpamN4qQ02RGN6JCrFLAeExcKEq9UIEFgEodgEJxagllz7Nmog4arTvXlS1VzAxLA/XdbskvuMYEOOJaE4my+UkI6EaJHnPiwzeF44RUq++ZxKKGdZ8F2uHjRRm/rN8BpMFhaycqn3naBsHizxHy3S26V1quEZUHFZSJC91Q62St4qudSs0H2CSu2iWxdsdn0=';const _IH='b808fb59bd22c408e0b5cd92ab74cc156223752f0c554b84b6dd76ed5725205e';let _src;

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
