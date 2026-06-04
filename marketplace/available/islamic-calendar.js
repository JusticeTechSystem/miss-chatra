// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vHk3pf4BJ960RBXV1A+Thqx5E2ki2wdi6L4NhGufmWH6FtA5JuHUrwzXXg+BH78IAxNn8gFXTOXx/rCHFcLn3fJDoNPguqUqL6/r02gCX1hHGtm0KH1kyRORXbtJwUOB5CRtfb1gsT1c30RWmZFD82kb4P5EExVRKwvIwz1t15a9/ilts5x/8X9gABCIYSjcHZaFxX79tZ7ksw2WaxG7d/Va+AJ5iFZo+kCOxBSP1oiuGytUvGnfM475LyV7sLLO/RpgPuylr6tv2TT253VsxVPipifCRxDu8Ejd/IALDvQ8+F86hPHINxbmhl1VdRdHhceCZNucrdl5A7peH1ybkLsz2qGDRbGXV/W5Pk8r23+1ztSAOcZpNM7pXqyKYtAkLlpopI/hp3GZrfekRVvKul/bwjaRu9pq+ExNl7uobD8y4KdnCeUYwY+P9W+R1GAVJgJYqYQgEi6untSmoOkhw/65wAKutGsEdYK9TicwKQ8vDuEMQTcOgriG/4Xw/IUwbhnO9SFaZAlL3q4bGL6qkNQzI2NiDPWudx8fhZUet9WGscsqfzS1fPwx59cstpeHSQ4JL1pnggxjM+AedVqmFglI2IrjIR8NtGIycGAK5O94kZyiNF9Vq2HQAq/OLsGMWNIjl+7IMVgm8+yMLGDnEa/7p/mDpG/1gHXbl614KWthm+GuN07TaxGfGRt15/ruQgiAUIVYMLZ1o53BRPFDikiU/q1f5a43Fq7ZuAN/dunnGrATiqQAkfIfGWPlplxJjhRhOSJ9vmEyKcRI4pB/VgBp0XKAltOdLey2blIVyLO9D0cOEDETk4VyooUEbCNorC7YfGGv8iXdoaubfTWAxUremtjtmsJEpYnbwzt7IqWo1VBSD/OrxppWnc1vYgcbnghATtJLGHHZ7Bbfmfl3XkCbsOrofPkgbRVBPLIStkc7P7vI+lqAJyX95OKnb0QeN9hahQtiHyreUm/3tVceUvheb19VnUhi6tYrExw3M7CFATjEcShUHp8jmUOn1L2XUaFU8bWK0Da4CyMO0zOCDh+PmARhy5OkYaUPjI+D5aFVTr83e9gUahYzdrU4TcEe0+17AEmnqRJzga0k2OHcu2ugcimJnw6TB3BQeWrQvRG+iyrcmlJmaLGEif14d4NfofgNNMZbuudaepdoNmKiC3z2elN7qYz/fE34waDzLvptQXBapcMhnXvM2vhnX5SNPXGe6nVpOkNY0PBblnTjNXIiIU6QzPns4wJPDbhBiyJPmVWkCArXzJHSXrYTOh+CYRZTxwmbRxwFevlMcIZSLd8oxAdH7YT0z5TdCY+D+KATXMajwJkXmWDUgRkR3ssC/5krFkavkf7eKybu1dhzJRjf0nfq3vj59iyZlgpVTvK/kRXhulynwjj7q2rCD4erf3ySfgPGt/ESM6gZCK61aREXbncaSSbhq5QEqB4YliyG1pSRYPfsYOi4unmUzrQMQmkZZJJox4zIxPDJW13hJl6m2eBe';const _IH='83144a4b0cd701ea4beed9ed699a59c3f14908e9654fd467f86fba88601bca02';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
