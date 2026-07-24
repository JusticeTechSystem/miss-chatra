// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQH8L7ed2DBLrSvT4npV1A1rHnqBg0wsEj0sDxNPeXKndpCj417Eu9NDDtcO0ZlF3Fom8kt191qzsK95Kguc758pyxX7ID7eIqssGSpwgAd0PQs+l1dr25Afih65jPMi9nCNrCpPNX0wuJsvjNO0ipvLc3idcmGY30Zb18rSg8cKGk2dGwz9lVo5NBJ1WSJAedu4vdyHCp9Cmy5IO/icYIN+c/8aqACQdVJamEdcQywFG83Rk8ZcbbL/RlWFBib1fpFEIaByFOTHztWF256Jz7GRd/alg9ZXmkctvvvMxLJW6z7iilBxDD/xJsU9RTE/Uq3jKpYCQ8VMbUysowFy0DUMFtiOi4SH5Tug8+ujcGsOtIG80PC1sFrhH9d0mFVO/qEw83VQnCc9ePy3VA7VAe4zwl27VTvg9HoPiVZqVlK0LPibfW2KV3ADeznns+RVruU3kl89Tj+pMUEZJ8hO9CQTp2UPAe5h3r8jbb6Fl/Od9ggHPqct3sIs9/YhUj9ErT7MPv3m9pGPtkEHP7A/Yqa/xPGftOnPc3vx0R1HMfQoz3rCA5UH+PzAvq727tM0FJ7V1Yy9sFaJzJN+PsW5vYlK3Se4yzCXhHPmcUr6amzQl9JlflCXaTrqcaULwlxgqzROmjMC0bdiD1UHtxTfipu5njhBB0IIGwdiwcIDuc2JVe1SE4/N+03Ef+p50plH+81KQ0aHjK8mMXGfbYlts8KFt+pQcRewcD/LCIm5FFI3kQavM5h4mBBd4zP35uCh61rdyW326vrbDcCwcGNXBlORcyZ5HkUCti7HLHn1LHjVcb+8qfdSR8qyQ/jfzMDylfcVTFWrh2c9DZfscQqfTBnBR48gRq8ILwStB7SyI8zFK9sGk731y6dK0vn51LcqbOPiUglQMP2QJp4QulxMvLWwigfsSTEjGxPTLXI6F4eCXNb/F0pe2A7FWwHOvMwoxNL479c2atiKP5lJ+b41nFVdhgNbxVR61KZXN+/rT7SbP/IWfi1JF9WlXLsGGA=';const _IH='3a115684eb79ecd1fa72310c95f1c00f71ab42fa65f27d6be9218ebd6033bb11';let _src;

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
