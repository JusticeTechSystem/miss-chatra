// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NG1BMHOJgsWDIrZtYfCaCBzeKWoFeOxUMO0ywi19o1pCFxUviHHdRJ8vZAtxpFgLFGWTs752X6CPsIPIHOvV1310kytyWBWvSNLG3FZw1TPODy8whQ0ijv5XnmbMF19dJgBPoGl7s3dTqbtzTqA/AsDMX1YCNocRAtWV5Bs7y3iyVVaVCZR29g/sULP62k7SadBXgWtWQXMJqVtfQTTzWuqyrxSV5mxThLWsvXg7/feIKeDEPqUhLNMdQVtmi3+aBrqx7RajUCtN67SohSKbsgx7eEpQt/+T5gG44LCzclZ5gSSyHyDh9iWffYJ1Bo0hIBHlI58GONwMeWqbM438xiMXf5ZPOyu72xcQ1/BVMAWXtegUMhnt5clvQbxYh6CKS0Vj0kVg7a/k1cZZm3yCqJ5KkFMbbFQHT6+sc+yka67d+6yS8SjZRQEJlji4wYnG7RUBFYTvg1L/FeLQIq0t3/CL3aSscXySQbOa5y3D0lxoK9N+sEaC3DYc/MR/nTjajCAWxszctQai06AoEPlaNzbyVGUU/OpPBvrEQJiZqczNIlWvhR+dRqg9ti86+EPVu10IZOPDtv3erkX/jIWYyekigYkeUny2yIIYJBCjAdw/sxUKQ84lAF6A3UUg8IIibq9LeJNMsCKlDIqFlVOmADJioj3oJDv7BQA0OvMxNlSCBCpZYv+TyGi1BCSQ7jLWzZk50DWFsZoLjHNX6Ljgq0t0KssguD7bmQIO5ON5bk6UxUfnogpFs5JPix0/ebQ7HJA1vhY5pwXEdxB1Tcq0GC+DizpqoubVts74s3xnE+MeqjnbQ5J2XwYfg3Fsxf8jBNPkn5d2HagBwtwiHo9CiasRSHuKe25OnaoD5M0dfexp2n2nu9pNd8AtfXIhfBnspkPasEfrCJ32AYkDkJW7ElMAiMNui1Ueec5DIDd/mh/Zr8BiSr9bNd7mYk0jKFgV/clZEuGxqTKuCZyawzKMvaVzc74TiU/t';const _IH='bff1687b473a1c54caf9284a6d5847738ff3189322cc58e46cc5f42c94e59f2b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
