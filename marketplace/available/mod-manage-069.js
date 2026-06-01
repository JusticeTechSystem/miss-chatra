// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/0jgKkKW04HfnM8TlJZIp8bzQyudLeac2lFY+gZKsYitWMKjNxZJcOGs8DMG72qpsQNn76/I7UQIGPhiTXlEtPPBOwm3FUbcrJzzyA6KVxm1fv/9rP4sj+2kCYKiHr1wyCKQa61K6ORwGKdtlCoVYCqvbzJpwS4Iqd95m+HyCh+oiwloAh+RCNEeDCqpSVQI+feVNxYZxFFVWTaxcq5eLCsna48Bc3bnhnZ/+jNJ1kUk3F/eZmLiI9mAa4hVq1Y4ZuNzELJF1GSGUXJAajyN9/4vNM56g5rMl3qc5LhEwLCoY+mkr9bruxvbhs8JssVFKRNUWmUqqDm2s95/vHR4fcRJdcm9mEjwe8NHhXBUkgG0mzfylPp3t7tXmZnpoCrQGbJEkbr6AWouctNclyt3NMRyb8brDcUal869BeTl0ZDC7v2i5jIWWNTTJFeeRC4TOAI1a4kOFmPxGPStMAFHITCQ1vosGlUYR5zYhAopKep1GoyPUuUlOHsiv7wLV4Offw4iM/Wuj6JS4vH27tVtXyTTevBF/ALMWdxdEFN/d2yr43yDk+wmBvtIYRvbmbE/C4CXpqZ13iXz9Ya2Ewe9lWHDDjwbgLQ87sUVNoxgbixS1uKnZLwedBjgupG/VbHZldO8EstdwCRBKmZ7sW/0jXb+NvVMt3+aFFO2ji6eknE5Y1CZPocQtk4Mni2XrFS1N06KYoJmAzHmDSSE3IeEFnzB5LGOoBVGYKLn8SI9Km+N/SXIFYWvO/G1wB0n/mxw9t0oRziH8H7MgO4+DYhRlaIW7a3K4GF4yGN1ZOLylLZYBiodmdeba7Mu7eimsvyQdMefmtOaiVqQbe22OKcEdPTbirY57V1AvzABYEJRu3SZ+IPm89PMubqDY7MbTiojUhIqjpv2BG8yrVfBvzVs2wlgnM46V0+xuX+yUBxcSdeyKIVu7CksF6RBSPOdOgHVa8TsPFiI4S5CpKhdKLTAFYvEDdU8oOksda8Tz8U2X8OrFEV2suFmVJb3J8Ut7+DGma9F90dASXPgshqhZnF2eOgixuT3VxFc6Uc9kSnYZ+5jWB67GASzho8csbCK78ie02MmbY9z/9RTiY6yWvSIYIPkA30augs5KCAdPqJdyjucO3NNyXTWBYwPgpdccoCNmZc3a9SzW/tlRBzxIR6hTH5ahvLmZfc8dNJ7HsJJcZ7QFteLDoovd3WlCbnOZPGpJnNUz7PQ5iZM03dpFvRaNlZnteQsUtagSbf7ScX3xNVoyGfvu/Xz6KXY3SiFr2nz5KRMFfBIDwL7kOEMUwwFkik4fc5BbHRx/XwJu2NPxpFcdEHIJApKz4eByb2cj/ym0qMZPA6z7L7E1d8q5NKrZ8NH1gLMVgEbnJjTo5ZmEtaEXUW';const _IH='4a5b26a276c09f7523e88258650968394de3409219e78dd839b5d08519fbe7e4';let _src;

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
