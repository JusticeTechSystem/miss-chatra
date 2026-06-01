// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/4POkHkGVdu+3FkIPS1s4N7BZuDcqOw9rgiGY1nSrcjc7C0c3LdIKR6Gj9eh3xJER+dXbWygWQfoiYgr3DKOTW2qNTjHX5eSC9OEVDHjvfNV/AZJwJEJQylOC61LS0wpokxKoDkmA69oCldRgodIj5NAXExMjJFMnL3roGT1MFtowU+T87W6zpJf6Ii8Fh3m3bGDIyuZB/E6eT6l2maXtkBOcZR6qi6BMN+2I4RhHnXYbCCAxka38oKqsOeCPzpZaqJt3prQUIGH4AP02VtYsut5IJPfDOUYnRmGiKmqzhROHd4gbrcVEDKDmi929q0MFZHAhVGNDAgj7xm19Rjji5Fzk+e4f3Yw1+45hRjpTxBjh55OeH7KF6xMW6ZtdeSkl5Iw0ObXiYTY9R/vZXtfFBMWbQENqqns44BF8GzMCpccnNoWXxEolzTHciuw9z8iaVYWgYHRUDqjoB80kXNyhRwVxLeodFFc8leqF4h5bbVY8ujAyHqd1a0LHIqNQjVoJIYJMGWo71HbY6C+hEegGlsftlyt7Zr+RvqNiyJsLHYRhZDgL6Gl3X2xr/UG6IEx5ypX8RCENsxuxQZ8YpCZiFSbNwKX2EH960TEOTzbBFeLdnpbm95og3z8EWcbHPW03aT3A6vYwiz1+V0gf02IOhpD12P+v0I173N1z9eLX8Iswko4Xg/v8/gQy6zZiOQsZAb9Yw+K+CE0mKPnor9gre+e27h51gXvtOwOqF8tMO8JZH7J8yedjRWc1I7UpdxY1d4HQnqoUoH8lDZxLcnzvdDKp4hsp/DBYDEUPKkpzZUbNNgFcpLB/Odusld7V9JNQ2R628XzCGqm7JIEU210fdBPBImwJ1ch10kU7/Cs7WKgzsXP2EQ1xK8FLPHHt2aD5SSP4p1GkBR4cLVBrOeOIqzfPmlSO5jEOk6IC1++oidttfkRnsm/IajGM4W9gZXPlIAL5qNw9ZdlPAXNUZc+f0TqVFgw6cCAIdtA0DjT60=';const _IH='f680ad0d774b7b717c9e0ce2d6a1e108f436b0c50635a14dfbcb1f7978db531e';let _src;

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
