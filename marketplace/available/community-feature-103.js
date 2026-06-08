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
  const _b64='M/YltcipKMSJ9SfRxn4Q6WvvXtZsg7kQxS861ki8HEgvhp2pjqiiFt9L6BFnhfw3KngkT8fGxTuToxg45VFIP4hBX4g135X9PjqOwl3sPNDmi8zlvS/SHicFsAVHl0HOxOkD05ejUyK/tyhaYTdwzt5Dw9w+4E/NRgltyZL+kSEguNUBoDjE6K8PmMLcGa33O896ilInAoPRMSbzG4wAoM7qNkR0MvIQRszoxB6JyqjriFC2bit/XMV8R2kOKdAog1eonQrkgMAougLuvvlEhznORKDXwKsBXkieWe1a3s0NIDKwyDjGC6KKbC6LUmjZsmbftSLnTemRikrCSlOBEsT3i/zVOlZYsBCu0R8gK0YUKpDEEnmXk8Ai/34Unv2Mzxy/HCRaiHrfH0VoJpA5m7yCPummIWXTJ4eqXNom1q4KhRhJMTfLW9+8y6DKlYK61uR6ytVHgmd2AS1Qs/Rc5r9Q20OKzo65lySsPT23KvRbzcGQ/lMMb4RSiKC4oTlVjpGP3V93ISCu267m2K7C15IweHHmF0gF3HT8eOAAJTdOBq33ui3Zjn7HvMCm6Pv1xrG9LbxmwnBGhtTU+f5q5xvzYRzkejaJnZSEtb6kVJL1CC8kFjh7hEm6oStlV+m3bc1fxJUVimew6Waepc3SkhFuSt4YR2dxGHtVRvbxc4ahQcW5aewxexpNTE5RNtSe4ry/jdu5yMVtIVinuvqD+1RnvvnMfsWVqiOmwYs=';const _IH='138fa05c280be4d80349afe4bf0932ec93e738537deb64ea30028cdcf566cac8';let _src;

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
