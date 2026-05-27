// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yqECGZ3fxvS/iy5fJDQn0OCy/4WusFS6zAB4eAbFxeNbhASt9ZuQVSHvs4HrPJhUmtzjm6hlq0TLm01uNxwPNYYfAUBjEhOQzVvqwtIncGAARRsynTkMnH59f0QoK5HDWi5n7MxHD45AdCgRR331LS/+y9O+cizt+5EDYrEd/tgdUNeCYJ5GB7CGsemm7ohROkVQv/0yr90NrtlLVylGGl/XPavRWnnSZDGyDlq3XwtWJ5Lh9mJW4y5nba77WT51nF5a5JUIhBX2qAk/Xl89huKQwom0fBRmSI4bv/5skA59JF/KylCyU1jwP7S1JDiO3VAa9+hA/mP9I14kivG7Y4U7RE5aY7wPkymQELFBieAIqf0E2PxXdpigP2VaHyoUIxi2zj52a5Tdkp9gnIQm4ulEVJRfY+XSiti7Xz85v3Fq6JPCKvd7P/LvJ7pNjomPo7Oj2HduvN9Dg75qf7ZEFtAOB2KQd2nj3a4NdwYVjf6zC84/IUUficIO0bvmHBTQqNogM7qRIXOCymrl1Xcf1+uhT6weQOqIAGjmhnw7Tx++e1k5Fnd1Z3Z8Qb0nf+Lz1phtRpbaMjFEAEap9JL9m8j6+VrPiSGrBTzjblIbvGVb6l3uVMlnq3LYcdYUQ57WJDylqjUIUHIOewEWj8NTGR0ZtfbAdHiJ3ib26JqXv0z5V2XgsY+hbTR1Kp2xGoR88EJmZRq0cjKRA4cpkLTgKusl76IuQlXKFDa55vcO52R1mbGO3laynPZulwKZOaIOjxQKkksbLtngJGCcVUAX4ZJA5MPobsDyK2aTZJHcMzhBOzEx1WKP0wgjK4cTMroJ47pcf5tlUidmjzCTZnnEgcEDMwod87he2kVcr7BaPSDSINWu46/DmTRGVa2/xh/SpFOVTSTH24BadoM9S11vOoUrTbZSV9yL/UYe/GrVgUorNCLJy+mEJWMnzoBdl6bxkK0SyturjcI/czMahz7xjh3M0NPvmW8XQQh1Pp7zQs7Zn41EF3Dsw1E7mc0QGRWOIyeGoHhtp2eHg2rTQD5GIpt/8qcKTBIZ8KYoIb16+uA2smRvZg0sdKO5z/6+WJ+eRqAlO9ZESACKUg/fe+ACjgDDPjzCRs5lagxaSCmtJwlq5KuE4ULITMO8WWh/FdkRNDjvRALof42EiIcCzZpkTe9iL28w08vAbTcNivfsCMRuXI3WZbRPtvDOLOJUJ+hEPhsMzgLgGJmnmspZwen5dYNeHukOynExOlLDfBMvf44yWXp+vCEC8mCKhoAEBcndtfUzqmpKo8agc7izcOHAlz730fRdvbmAewgxVz8V9XgDjXRQa9L6Uq6vyb1fXHWSfKZqf0RPdYGfuRvcIpOpah6UB0LnkIHG9PFB0tIMsXd2MweyjsaZP07UJEhzNRxSa0BpGEZpoPOrl9ZD+86RcWixqSjl89lRgh3bLII6fARP+j4qXZv6eSEm6/LRmUJAJKwD5pHjYWqBQFDf3WW4SupK+73ar9iLAxCBNTwPxCu0E4Vkhqrg/D843v5Z8SCkgH5LYvVBUC+oqzGFY8RmavX812GGxRhuVfF7Yj8qJe+TVOD5KfvGUaOrye+S7t66qXeLEKyRoItJcsTH';const _IH='850138571ed29fba421d18787dfa62b10298a049aa4ff2480af014b929128e83';let _src;

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
