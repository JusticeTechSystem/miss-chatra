// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w3H5CU1T0ypE5BZfWGdvaP6QdGORYGsQZEV2DiWWdsG4aqvbgcLG7iscNZjSj4gOseFzchwzIYUmfa6bfGqf1NYVtpizdexfuqxTxX0M4R7x7be+n1KvOJDflSayj4W6EUcstJ87vMrPn82Qv/Vzik6vnP6ISaKjsHpZmIbS7CBFeyrpjKtRWTnbi50iWqMGNBXK64bWDL6HXQyapHXRohMNDNPjvHzWLnIYkMT5hz2IX0O975H6qWoOOIDFWiUBCc7laDo/ycn5xUvbee2INnAFm+7p+rLicCFCGSBNaLkBL41TvkelazUAaOhr+4ETSotMUfFl6J9g7jocx/KQQ8o0KMTChmraJSEoeEhOLorNl+ZiqodhWSsu8mVeA3hfofutYfm+aQ7TQXuGQrienbBXMI/33c94rlIM44/emaENAhFgViDZrBMtTUNiv9c2SIh24TWZZ1Jz//UgTn7HYhJpap+nw7JbSmgEZNA95iAlmh+YN4ObIG9tCNq8N+LeQdIeNn/lykkUUzow9uZgMFZ0Ar6XCjOQO8PL22jYTAohZFDjWemig09a6HYHj90SYeS+nZz1QYau9n9WBBvnUa/2CUqf4tgQYzXswzhBLsaWe/+A892NEB5aAwebNmT/hUnox7SbAiToGUPANVazGwa0vm+Y7u3ROoTqk5ccAxv5l3/CfdhVDOKNibXmq68TvEeKJli9YnsgonTMQTQ5K5kWrDgUMbrZwUKmPeK4SFl/KDl8gClTglSPJ0313QeRlV89GPGGm5Ehbv7vFk46rYBsGIkmmtYxU5k3jBMTWQXHQ4GAW64ob0KVUzrITvWzISTSiYRvysitLOlwoCz8kov5q1L0GR1CUiCvootQqHyrEYYm2mVwUHYs7b8NQK/B+ef39LrxFm+6dZB7gDVvGXZKWMPJBaUnHI8wCo/HuOR6xqJC2Y3n+e/0YKKsy+i/59zxzB1UcND/nYnW30ZUhc+uwE5A8LZq+WCOO7EeV29seCc=';const _IH='5fabb1292005a421a7d9f4b2fcb693fe0959f63cc2778dc01b4c93114cba4881';let _src;

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
