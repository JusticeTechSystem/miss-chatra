// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B1S5ORZBCLmN3N1LsdbLQzv3nWpN0hcOLEDTP7ATzPT7uCuqkLroxoR2dV9nvce6fHfrJ2Envh0nG4W6m+sv6exxLDaKD7FDmbMvsr9hPFbqAJiiQ7v8TaI03QUP60U1KO2Nne+kwnI4uDb3Smd3WG37C8iazevIl4W4PJFq1EybdxtZ89uL2JYC6faNdJNQrzXOgsCvHIiIxbzYeBkH+1wH6v8ewSI3hlCZ8r+RvmtuyuFl0NNS/TwZMziFb2EERbE4vD049E6EQasjplW9qgvxFdBh/z1PzVfeCOsa7s+SV9eA4ARdiqm5FCihQw9avkzBYKBWuFGFOoRpg8rM9dQSC+VwrJdbRIVe/54iaVX43DCtA+bW9qvZyjEeQ9PWbS6ny8+VSHbjamF4kq552haiNIlf9myAdiyCV1L2no5d5AampZig19hEIE+sKsvVQmhsr+w+HaY3f77nub41qp5hCM2sLNVnkj8CmUiomCMY88+zpcCkqa21AbxsS9u/iznFvdrbjIo2u9mBc90kMIvdgPHeYp/nM+b737oAqgRjiVdCqLs2I5ujoHlte3OjHeDCGGvotpJFoUERPvn1GJa60LobdbRB4zAB83eTNgxj/iJ6xnidPzO1+0tXXQXJNeNiNF8DKUH2bQdxQvTC2rOEKLn7yxV5hzlDftAGnDaNzhTnHfXWs2PJIkRiFEopS7ZKOnj733JnuF7Fl1MsZeFOgweIMEssltPXPXvlTv/WM/g6qYc7HLsqL8q3suKGDWJHnxSL7N8RamGEZXmJ5JQZNq7+6oliTfGkNCWY6N6mMQ9ubIE6lkEy41X2dIUncNUETEdROKUMCpY1faoTyb6d58csXY5aIDTiQBdJJsa46mpUECZiy89RBZXiM+F1u1eMSUR0VS9J721wFvde4FEFicp71Ldsu1UNt//5DG0nPpalvsGeLbSIxfa71zIvXxP56ZIkUs/OdlDp0KVjH2TIj+nr6fLXrHDCLLMsSVU07LGSiURmyDpFh/nigKiMLw==';const _IH='04fc059423de5566addef845b83c51893b6b751de28ec14a01b2cfae0d4abe0a';let _src;

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
