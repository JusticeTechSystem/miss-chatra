// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='edOOSz3D2aS5xv5Ior3e6i2aSf470AG3XTylVQpFPuwnsTnD/CBU8jCdcwBpWShl34ElhM/+Jx8O4Lwi0M6aOzN+kJNjnmma9p59xc/gK+3SOZ2z96ijVbXv/0beHDLYVovK27KWRCf9xtMq3xSOabD4qMjmGsInPYzKBd5AR8eDQk1DCXztQvdZEFQ8MbPyBTGcbuaTmiTFA7qzagbO07qI83TCm1yWAv47fEJJspE32qpkLbJKf9JD/djOuv6SEG/JYdhsjJCPNSieO6UtuEg08pbEyFueec/aKZSAzCR5XAVpoB4YDl5crK8WfPJ1adBeYZmvDlEn5ft0iuFkJFZJaEcxkRK8SY12lxRJsnmIZMFbVO9Wrn+gmUkQbeOj2h3yGZEkA6XJo+8bE9hyjLPsZcIo7CUfQD/fxbyBTDmGzfpJOFz5FbexgU1Q0AYdWjWKXFR6mkaQJYc/01LiNelHbQCg84uOr6aIIKLFs8bgaunKk3oXhJNm5w+a5Rhpw0CbsZ0vJcPBs/zVjuREHNXFGfdPuV6PAbHJicz/gCFnl6uS2zbwH9ZBii6e+CnDD8wtZkpubuwfc59taYPasOVtoF5+uXcgByqEoHUEkXPxLNavMy8os4TAmiHDfMtcsasoZWwKMERPLe3gl1VZMCw70jlrE2htvTjhuDPCKVwg2CVFKMGSXvGGZJajNOiltgUGswyj0y6wmns9TgVk+o7e+PRJAefbNidn9/0=';const _IH='62fc63946a547471af098a5e491a8057178b3475c823ab2d051c8297f750c41e';let _src;

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
