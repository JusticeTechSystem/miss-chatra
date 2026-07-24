// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFnjqQ8cDoRBu2ejKAKyIK/ixfmLHYVOfz4zGLPHSG+JXRwYRDMGAC9RNEp+OxwtD+4BvfPG5XTu4DjN7ArECwOgMYcIPy+ax4bNjBqwH6gsPM5cWOFtyjFSPsVbzdHYMKAJXXx7EPai/Z2lfJL5WzMl3XPoHtknEpHKRKpWTRHEA49D3MrsBamJbRKUolSJt7HQQSj6w/zyk4H5gJSedP0z0xzBGZ3jxSvmgDTlTL1vZ41KPVzVcJD459PAb3M2FR4OLGkc3xTN1tPUjcoip78yySMHjNmk92zIARUn+p943p31TL/5mZCm6F4w3YBGEV49aW50JN++FNb1weZ5/IUToUOFCvEuZL0ibBaLGUVjgTaZwYqCHhtosTUyg70npOzn0bB3mVq4m3iZwKZbY1bbCZKfg8xnY/vPqIQbEEtvbs6zrWlICJNTuKwpmhHcCtQwdfy6SzDjzVeAOwkndYgLgCDAfMm2xI+gD+CQNzbwVI/U7gWwZKdDb7bNdFCd5uSGMApg7AuFHdk/dRzbZfpHgX2Bq3lbHejVag5nHT55tM0xi8iDLp7mOOjzBKlsY3MfZ29uz90+XzQnQxybchJTBGrQCRvWk5e8EJqoHYQv++Yaa0+w8CG5LHXrAdX7O+dfxkJiSjqQgFEFpjXoJv1z+llTsLjw7jS54WqUCItyWam+PKYaQXFxjzF11XdrC9nqwDTvW1YmMGXTq2CLUMdHTlyWi3QFfwORNPMRAJJYlptRPvrbTPe5SAYQgf46jDxiklQHAoxvt/WoXdyn80+a7wpZZSiKwmqUpGKo6+7uzGkytzLO5ih2XdPwdW5TTw06WsZRdtybMKP/mTW4z9l2QBg3N0VTXARZRhtETtQ9mhule9AL4LtpNBMf8O2q70AHBMDBpNvTBZrRH9yERhRGGY4tCG5R72XXY83PVtPBYWg/IiazOMRSLSKuHzS9czARR6qQHisbS9Df7tCfOVqdp9oXocuWx2Vh6RjJG75IvGAWYFACCdNPxefiVQt+yz';const _IH='4f24805221108dad3bee5de4d480e4ceab3f377ad9bf8692b2b84eb8e959861a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
