// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6lvh5n0GjihfnMs6h6Znsu04u5SYlQyMXMaRblW7hNgJeT/W+qUaDlFqzY1pT3vD6BdYEIYE8GPpTKpzwPPhcCNiHwFqkyABLOvcBd01IznuMTc7kkvpwIk2s2iuAJmpfqOXksD+QC1pzBYm9AmXnGl3qnISsq2m1UT8BVMJYWedCh5T3CXo/p1j56ga97jBIBoRq2TTuUpuI+61J5Cj540lGKV0c0qusEiCbK3movOuSUAlFRoPEnv/GPUEcMnXd4c60qVQ6to8tLHh1Ts+RolC6x4J/3j9UN6kaqbf6CX0LzYGk4bDSqLykfpLPXnAVcrFoosjT3jyCWlzqsSlspZSSTib6rcrZudmh4qtcpVfan1NfjEgeOhaO2wST3rHNkgJhAiOl9grbGvMustpx8Aq3DqLwX4BFtP2eGiS0J1rRJo4+fAquGLCM32XRLlgowdO4KyYs2Gf4qPUuJtdtkDx8hQFEQrES2wOVrEzb41eysuZdGeCYRt5hqQxR/YwF1JNhpAYWmUWyNkfIPO8AkiBA63elJhTcom7BJFJIca8vEUqeaHLzy0+paCK3ekgVSsLPn4UG0/KmBQF5sllf9jmmJzEz3IS+yYALX3VgAslePF0SSC+CfKv5hNeOVfH5b+F7urz7DDb69krJedjjUhUn9SGqsNcw3C7dco0ilN8RRb100yPtgp6SFujQuYzQCaIul9hMcldLQZrWYg15Roh6Rt9CKi';const _IH='e905eec6393968ece2139127cb4880c0a2a2544d3edb29b86ec80bd1d46e11c3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
