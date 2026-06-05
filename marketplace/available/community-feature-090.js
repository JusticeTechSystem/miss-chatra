// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VWPdMbV2cWbaFm8K1dE3KuAMtX37OhEkOp6BhzPkTm7RBXzuHtXvmrfiC/+J3ne+0784fMh25ccjH+3MnTuRBsCA1iucK/a+6PCD1vlhutI43VQrkYnIc8SjGqceqZ4D680WGghE9AF/DoW4TKMGZjiO8ajliAilNCkVRn7ZVXSGrlt5z1U+qSCKhXDrRYiQEmsVhNceJVUeUHEjZueE3gPuvlhlPoF/w+w3loai3PbmW3Nmz5WydvPfHOiB2jaTpyMOvnuX0wQ4r85DXMb1AsS+muFRVDDk1GCFEuzphhlpT/yyCX3+CNa/NzFX9GVP5NS/RD7jTa7veFb8S1BFPJwrEvdmLc2OZj+f17YVbZq2YVy58ihi+zXtoj/3Cw2t//v8dPcQj1nKliXRPtbEqJm4cWhHORwLdabo6b8WCx7afH9k/JtdJW5cLnfNq4RIzZAo3Jnqa1zX/TMIBeJbJ+DwzaG0k8xt60xA69kckgfaYTAxnZD9c3WQq9cmK5v3hT/qOhTl1KFdMRveFS2O5iKMweD99PSzqWIP6h7dGK8s2JuhcjxUkxmPsigeoKld7YaliJRrRHLnQHS8rqLp4IRYQ7NCg7Ni0HYFlrX5xRMGyR0K5aAK0ZTh7a0HYub6oI6cw1p9pcMHq2s/pz8mdl7oD1UhV4RkFK0oGSg5UgD0taGKS7eTGQKGW38UvHntuII6q1wnF4jYfPwYjzv9AP82ehGwE62OdGT1IjYhe9/McWuc+mM=';const _IH='d27a7e3aedde1caed391229bdb7b8971fdf89a3d5e49c4b4fc7273e728af9edf';let _src;

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
