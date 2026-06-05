// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FqWDLT65oekpazo3YbX/xuZAhpVUDmwdRnkNxbQ5EK/WrkG15axss/ZekSG/hmyCHvQxg6fKzYvcmRH97yl0B6cVKA1MWTMdenU9hUqjynX9z2rvCwwiziK1+ADbN3HHbcenlfj23t7luMQoiGlndC1v94yDqW144vD61au0F3dRyRvKRTIaP+Y8WSnRnh/b+Rkh4vemA2KudVqsPMOUuq4eGaCsbqOJ9Pe4dp8Rm2n0//z9SuU9SLgkiwPq09qJaNoK5vipgt5w5iBJT1XjRNSfvz9hQ/kMtZFDUwAxzUWNcmOcD8w50VFXrxSAbkYzP55r2/r33EaUl+kAHZiamsyfhwe7FMD9SGziftu3MVfHb1ZtjAahfrYDCLPOCj2SagNqMfe98elTMmKfxGbq1Ueibk84Sr5q4g6OW3eIYhMcyfo118Sgh7M9L360PMeDbmDCGAelcHFFZWWZTlxxrVXXNX2y5bxvVgsJG3QUMLBj3h+bJ0SRsJjEgsqQF9FhCUDvptmcazJVvr/4AyR8sO6tAXxZGxy/9lpnjwuzvjQRhA5zYaXPBQaAOqxq0jO43ZDvxw/5eLmZzXythCci5JweuOAn5QjyWv+2aIXGUpWl35S364fWb/W+fkydKEN+a4Yompd9XtEEjUaCGLom7HmyXGmyBrIzaEY4sZQ/eAhWs+9ke5QE+La4Y3HLvfG0MIJf9ok8B7GYjmAL7I3VbITAlzBdk2seoUVqKRqEQw==';const _IH='9ac2f99723abd035147927c99515b401522b524f43437f005fd32effd255b184';let _src;

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
