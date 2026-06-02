// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ib5IVM3d2GRBPkf6Zs9rniRCg20JHiUgqrt4Jif4TWROu/PsmLMLnOL6SkCrHDkyrJEyAj/YnyLgsZV6J+8bhYqABgSo71jH2Bv3HDLD7TsPfQDhvh1NnUQ7pCNzzl1h1pN2sI4a1ehLaxfCnmr+ubfllmCnZlpoYfR1q6LSnPJQXHk+ho6YRtZ15l72s/ak6jb0yKPGbPsmNJOCxI053hUHKNLtk08hVP3Z/HTaZt07kHol85aV8af43YaCngX0AIgC/QKT0FErpOb1KN0L5dCp+rUTf1ga6LH+XzYHUYmlKQ1QUSRL/qdZ8boSLFwY7bxdkasPX4Pbe6D9PKTYFXaqmtOctbhV/e+GEi7NYcrmmEGtx7QQfQ3A8b8a/N+RInj4LPjhobKmGA/IwjRhdsxJ/2w1JxQvBDLwg+TkEnc57Q/FmketWR/o4qbIkRfFSkTOOAgxe7YoUJxiVxXCrozOkm6QeeDNmRYpev9ShhogPedyWtOlHB2rt7XHCcnOma09zmL28A3+pXRQu66aHRnopvXsD8rvD8Nmpc5O94bDu/+YpOn3wg5u7fyN3EY6UMTi3srL+vxWK1QLyaCcLhof9XDhrzaJ7gSsbEydKc/BIxO6bllcDLKEzVw+7Db5aOFncjkkiD8JPBju6QOgu3McVMRci8f9UtDnvSK+JOnS6ygA8JGuoBsDMwDas2n3p8S1Dh3yBgBI5d5Kn0S1U7hFnGY=';const _IH='037d1364592bf3f206042cc7c9a6c53d7bf5ceb1a159b9326b737f024dd0a5f8';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
