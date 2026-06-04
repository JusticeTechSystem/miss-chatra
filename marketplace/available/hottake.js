// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cBHJ+MtjEiEhzeuYtsgYGq3uvcgH1g3NdcbpF/hxOIZuc85grs7FP5F7/T6qLOj+ifdfby1DbB29R5nsh3RNRI2s8ctMvSd7INlOSFLqsRLnzhk/4yZsZ0336yi68oiF9vkNNLoc1yspTqqEacF7vy9SVsh6jhRKNhHQSkq3K6Z6b+HulAXLzIH7IVdIswNxERFQKOYnL9Nq1NH+v4GedWcDVFBMRyKJdwJ0Xz4IoRFDSCo2LnkFT9VztPct4Uu7JfRfxL7d/36ZNhQXVzEq56ejMGt/6rVXO0ndxL7z1cchDxy37PBJtEYJ0zx0uPLBa5KYTDcV30IWxv7/RaIZYI5WxXSxe1UnNCb6SxN+3pvlYB8djrYNpAFiRNVuPerfcuUNs/3IUz7qBisGimEMkrcc5O2GA9YvMTQbLf6YCnOMWap25EIFFp/KBcElG7D2IfvVV2ygFM8nPlrlCgbfapYUJpFrW93axVJFl0R9xgxX/sXL8PQPXIY/aMH/kV2nFKFH23YxxdkoV0h/tgVvz6a5eS2mpPy0gMR/qQg2c0qlXcQ/UM6h5JsCqC/8ylxfGEiokMAGfndbWPDF7KVZBZ+dM4HuSLAmVd/GRxBh7wPaWHdbxkapBHagcLLxO2Cb1C4u6b4uwLwPCQWb+sapSBe2OQCQ38/cKIHSnNy1P0LFmzPRpb9V7ZhQQRlQ8JshRtV6VdHQOlUoGUwIYgAtkSVCJ7xS9vfF6D34qv2nje4PoDl1Fqit3IxvCg4oItK+03Lb75RwMRj29XAD8VtToNhhEMnfjzK+5rt/uo1ZYyOh7UzwZrGUZdiDGcyta+I95YsS8oSviTzwl6ndjgGlwMON0ojl3EK0lfxIYd7vKfyqFXJB60WNneNotITyNDZbkJd7sv7Q2P72didh4G/nX3ltnS+8DNwDx+fBHT/RQf4jZ5WI04vn9UbYIG1r5mtBeH5shJoZoy3c1vNFt1EnjM892tSUMyauaUOd9lXBFhPLgwlesO9quql7gghxlp44KFv+pXkHXN1fKnGPQUBhADlF4F5nVUni18F3SuLsrV0a7uND6wi2wC7gcEnvXq3vKL4Z/hq65nVE1i6Jp7ymuHVIzbLVUT+vUseWr6fjxtFlCdiuZXKUeP6a9D0jRMBRJeXiBJvwRjeSn46VU7xYn6eDfvmJ84oAuH5LuLojw/25YJAVRDyGVGPQbwYz7OtQO5w=';const _IH='9e6e9b816ed7ab8af4e8472e494ee8b89baf56c312ccbbae43f60c037865ed1d';let _src;

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
