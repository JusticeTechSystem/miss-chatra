// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7iSfXQYCRAXE3mFMw6Jvr92/8uQhyvzPKUVQQQCLtxV96AIXAdfthCNRMRBx9TzkVERl42W5906oIsj4qYAz8wsll2yFLU0rlQ9e3oWWcxocAugO3UvMA4Dy8x1AH2Lh/cZRLvPDJTCDNBSmgPeKZKMbSnHKt8TdmRvNKqcsyTta5OTTCuShYGAG6ihgDpkxzd9LRqnxt+pqduPqUczJ8JIhLXay8QOSzN2rhjlbQrt7odVW/FtBHQpFsSJUrNExUCOaefB+Th7Dqi+kdJtBljX5y6RKA3nnWd7lIjBcV8rGRPYqTrkvRYwugmEjNCHSboOTcBvYwMSn3s/K/DP3Lx46LOQyleIPCqnD1rcb1a26kPXLtiHeb6GEnJ2OJEI1f0yvdYbzQ4I4OswbyaRpznqzI5cxp9Pre7GIqb+8RlotJniH+hHhbijrfjNXQhI1e0Fk/3nJxZZUgAa1ZEliRdON8xncfesrn+RKpVvFhNjd7yG1fH1cfj1GfrBrlCIiA+G4g54kRAU77PXoquCnBmNxC2YC90c++t8LhefAn6dbmf3ig+aTdC//uSNZoq8AaiitqQAXMY9ELxKaBOv0fUvs6BEWRm4zTdR2L6sDGX8jxinGLA08hQ1pXtnxEyjj6jW1MEi/atyWZ+vtciA2xLR4Z5oqH+7kRJmN9d+42Qm5JZMrWVzoz9vdm8BUU1Av4a3vQXDOMS06+TNvmjftNfDlQYIVrB82vAnGgLc79w==';const _IH='9b3636df7746c6381862a9a6ba58d296e6da727bcfd58fde553c9fb27fdfb8f3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
