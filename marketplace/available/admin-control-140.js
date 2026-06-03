// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1fwno906Ek5HU1EDnmlGdyIYvL4kHl74B8qF4N7Rq1He3biSdRchdn3dOXYJoNbKkguCHj1T7ePKKUL/kctfki4T+/1pGXFmguYwx57gDVIInC1SCbDd0QmMbjSXsOoPF2KgAcSg2vpTfyS/wO/b8XpcAzvpWc7lKQRibUDRFGVID41TyBk8s3QM3+IMJJ4a46Yr2gVeM6m3AHCN1cmkSN6Mnk6ZqEhjZiIvUmVh4GWUWed3S9azkJZgu/ijbiKoLhMDBrzRBr4BO0G5RRgggvSfcIkXhvKIFLtlA1PNhNYWgB5lgMROYOODOluB6+VFRccIhd83u67zMHO2CtDGBj8B0n6RO0fmRd/lJLObvf+uHfXIf/9tv3JWf7+t3j8cCH3mGCQ0cSv+Nx020mwvFtr6aEMKBa/q+E8Q7OZ5WRlkwEWEQuUdT/N4zkKeDmgNkin2ifzGKIEe0VcHUvNNx4Cg4KfqgI+8JhHgy4fyABqvSDXSGJYgDxibMFznCBhYxczfwWag05YmHO7rvUTWzojX7vmoJ3BOUiPRrBsG2pVGMl1u0zb8mwh+wKo6k9qZCxrGiP8l0uUyIYRgxd5sZRz6TvrHQiZRl9YIri5CZ2HEHL57ee4XrZUpcd6Sww9DrBMIx+o0LvqkKtt45aE85LY5W15KhXeD5+KZTm/wlYeNwW6zVbnwxA0kI8vJRqxKnD7OfnWihLdcJjFL49+hm5v0aL8mtqmezkwf/48oFqanB4jqUBwcm2CxfvgPuWAn768tcW0yFosHcsT2wRM7QHhPNGk2Wr5x4w316NfwBjip4nXNZjT+StGX8NrbHKRvinGmL79PxENzs8i1Qx2dpoYVJole93fZkq3oj6pI4CbO2o7zNYhFjsdgKPpLOWH2zCMn3LhTwUUAAjs7mguxccCj//XvudmfZ8uZlPAd/3vSXu0ghCUZqy8pFkul9mYj8jZKmpIgksGDixfPc95pX61+qeSaxfnA3+GaZhKkCxLAYjACDfIMLNbxoevzI/OfEphHRt4s+Hg=';const _IH='5cb15932762c4f113d67bae8ccd9e90d5e3656ea45c8c2e06599a1251d1dfdb9';let _src;

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
