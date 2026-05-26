// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cwN1wHVWLv6QWOQsJLHmGwNv71xrA85UDKZlx0CLw3iaNFlVfM3svTsdygV2zs+Ci59jMC+KqPt/UWg3aIrLrxwJNaL8R5uSbTTscLOQWErfm6PDBBl2WNokGhbxEtn1+Cq7SNFc1Usd4/MKRXWXKTSgo/HX9Xu9YDqB9Pt2o4DKIQ1hpWFU5e0wYSvJmKjjvFMEbtOfwYFj74T0oNBGUGMTh84UdBTBCqsOLAjutYX2T/5302f7pYJKwPpm6ii12qFNivEcqDOivnu7EUJ6ArkofvTmZW8Upqd+VIKPGN62j7gmZ8MX5nAcDR7aBfz8Liti3CfiQY/EB8Vvy4nM/Vk8qpv+PPLUa+QW8QcwFdMoPEi0HCy6hkuzFQQxATxS0g6I2YZ69+0ep+Ab1UsuyEGRyUnMO6bcbwZIFaK/2EUZXkvWYqor027SMn/t4Z8X9zkxzbAJKT1j2MJKOG1w8IFxmCJbo6fLVTJFzbJBXv/BtWlmJkrZSzNCAIa/TyCfWmpf11MxVCKY5s2o9zpwrv0IBunVUV8Na08I/Z0r76ZCofQ642uKa8YqZb8j+cYSZ+Q5zZ1j5JI3gtZJfDkZFlM7U67LTO/hmtsv0TgiJPDxNuvBoxac+i0TwYLux0QPaS9XGXZDpHAqHKLX1J2D4Q+RjjIaIeHXo7jEuMsioAC7bf3PMMYh2VQUIzGy1I/6my5Sk6yNEv3szmTQj3RnyT2oFUNlV7gaJQJdXtlP0JMHLLblHBWOKZ0ESJBiY/NuN0leN5JKtFuShpLr+JsM0gn8LZDeMG97yKFfZ9MXy5FRhy/9QGjROHiD6yDHXAeAVp1XrmXC6+Au4EhBSPp8eLIwIAnUb8tkcuSSzCvpRcJAdQ3id68uKz+0SeCHlfQSmUxL52DJIWHFkK+dPdsjNQql92tLXj3tP5CkUhswuZFCoxAy33SoaWgCSjAQeLdZ7pbbHnXEcdEe8NEH8e0uAO7/tmH0IaMPQBiEh7QMoo8bO1xlb6jxZ0AcYGzdKGhwReqvhgOGiVE1J19pbe0V0W+/Yi3i+blzB2YbFa1Ng/FTRVU0IsQQCOybD17I74yz50Womwu4bRf2z+74OQNnJt60g25crj6rx0FXPrCdrGgstSfpQIEQ5WWbZI7H0tjVJOL+ZdPuzzVlacCyMN7UNFIUz8xNSEckEMv9+eHdjjsu8qbh/rANyhbV6FYuj9QrcEkFh+Ax9v/SNGxXAekgkdzZvuVqpgzh2mJkvHQpt4W3JGh8oQ4ClMI5dzw/g7wl48M+rQX8OUubhd8H+eLVqBVUUNtyAm6XZiS3C44juBnEj/XZ/q8ihHekfMqrLRnd7MRuWU52q6yVc0F566QRsADQQY+8rxEVZWBytN+cXfVajTLup/uq3s2doQxi';const _IH='0f09952457c5d2628e0a7bfb366b377c43c70867b20eba4f32ca737aa383b4dc';let _src;

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
