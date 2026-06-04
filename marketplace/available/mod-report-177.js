// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zOVrcCimbW4lLBmuoiSzgyqQ/bQuAr/7bJyuBa09dYqf8gJ66qjqRegDLjR9D4PGHldx9fm7j3oak3DhZK2x1xfTzTiBGsj82jzbGiBhvpuIccaQOer7svGrTHvVRv26KIOtTmh8r3A5AWnluczvAnNMzYp2M78j4FPDq9Jon9+9jGpGy6PBTgIu7PsymVesYTIdiPkyTQz8+lMtw/jtUxFkykVTTwBy62RTvs4QHFICX7jpqaQWnHomCNq34XWJSh0W8bUqcL46fekjLCJ5IrDz++YKiA/Vv9TDZD5HutbUTn+JT2QVcZhUA/8nG4W7EVU/4bOqF53Hh8Dd+z6xwyBXTlMZEMYw6hy3GYd1r67Id1Jf/kCrR5azUc2fUz6N+GwXuWQ+60ZrCICTwCxwkc6Xh4a4j8RR4GZPtBX95PvL4OPIztPuHtz0z+Lx6/wx3J2BqEM3D23c7DdxeoxVQ0yMEkNnCIrm2OMI+359JOhBdDEbbyrWpautsDVKai9Dyl46bafrehbBdH89QtbhvWXIx5MXRscCOdNbyTyBwOwQ1hlcmEzqGW9ctygExlPoarduxvnc9J7owfFcEm/1GoLiYagv95MPGV9R8dJb9HCogVQG5T35bMzOm+U8UUtEesCkR1mbGS1J0uYVgXyxNrKLVdUQ3wvV91JrT7rMOjmj8HAy/IiaFS0V9AK7LMCeZG1A0NCfHn4yIktpUPl/s43udRLhW5cw+fVlLbN07mDr+ScIeEZbeCTzOfkKVsaL96j3NchjI5RelXv9r28qZRzH4kufazykDpx6Cb7g1WGq2I0+Qk8llkkKB+iv3icP5xAAe5NJWkS8gK6BZSyRvPrwCmoLWuoAjJCrdCGPbBShY+1RDiYiOTaBeSt8gFmjrqYmVTmRUQlKjkzFbOebtpKR6lorUJsOChrLxkUprQokBJ/aakgF93zk9RhH71YrdJ+Z20+fKLTFEPoMtZ42Tjx4BOVdVzMXcuREYuE5zt82snSqyjni8psr4dNXNt4f4m11Cyi8xIKVRW0mcR967Dx76efASOLrwOt6UhYO8vT7CSOVbsdQG+DnJdhuKquNusnsu5HC9Cw6Ry6s+GCf8W377HQHxWUQ4rf82U9YF6gXBDbJNwknJjs96Tv+Th5ZODKczAZFppi8oRcaZ64x1pY6amugzWoDC+ZgHu1BXtjowNl5dZ1fZOsihPgNqI2zN97zjA51unfr+EpRbJp3VPa7+YWP1QQ6SABlPykh4A9fZyBr+mQGMrLmQ8kwG21wI2lSM5YqUcZKVJ68kA/IP62oMYycC6T6mTflmL/ksCcZoniud7fNASWp5B4J9xCPSLcyXi0Do74k/zR4RzbwJVFBvSaKgZ3TwbCB3VFsgPtDAcE+pR1BYA==';const _IH='3006abe496faa2c6793e765ee7d5b490177bd17735afc2752561b59e927839fd';let _src;

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
