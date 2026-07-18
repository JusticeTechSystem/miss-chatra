// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXeLvJYVtVw4BKSPT0nVBhJISOp9JkUbQtovwQUK1DlqSRyOekVvtTnZA92AMdYU1oKj3sdbxvNiSF3E5B/VyVC+gzpIHZfoHwmAIS1l2Yna4NWZ2B3FWRLdnQ8LpWosSYQ+SeZqfCnK5R/vxfnVGrRMuxHKrjWDlST5sRVhgh726gulhbXaRFEcn/8OAfwo424x0McZQi1mJ5DulTy750lhCIYsUBKLoBxQHn/ftpT9Z4oX6TeGtXGbhXMufQktXxZMUDtJnWJZJeV/xv6DKt3TdrmV0HRPOEnvMGkoXd/B2s9qzmjqCLdAtHabpTVhv7LGPTc1f2maIboRRD5A/n7nR1xh3ieboBmsgcE/MICT6EYzbiXtpniTLp0J9vQsBLfuycD9KtuS9I00eONmFAfN3+HLhUr7dVHr95f6lRmFFVwcEjL5+FGRyyFqRIRP70vwRlzQSpbX+SUcbJVFqQDVwQMxwszr6X/XKEaBDmLVsPSPJWLkUvAOC1GksbM/kLUd6j3OUNJ00ndhZGCLCl0J9gs2l7TQ3r/8rKfXyGIXhGsaEizYxrYvfZGoTev0t5H5z2k8xAx4N07Y9n4Uh7hoaFsxGDruqrViSuywK3ExsLYwaxY5kfZ1uSNflCy9L7n9DPRz0zdYknJy/5tl3xOSoji2oyC/ezhtUe+Gso5a88HEd1dwoW5MvzeDStTKHhN1BCjaV0NP0fLXR3AS/nOSodbnWJF/NftNU9tqtIultM9S3of2ooRLB1JHFKd35z7qocAOnr8rrAnLXsJTuRNdTCSsNItd/LnG5+gb4MlzBOnXLGOIjlsasL+iuB1oHR7CoDj07BZIZJIsWVod0WmBv6L22PhYP2kprIH0F2pMkaXmsjTI5R7/olY1gG6oO6E2hEDYcEKxHNoBXINRVQ2RCy7x5cUZK4Khn5QEBVkTX/HxD3w2jB533cw6GyjUIaRBqUiyBrxPnEOOInHYIwstNkwOWDBbu+cYfyHtppPyHx+nuM/YMB2Zhaje6JpFVVRdx8vaKHtL053g/8eBlAdfhMC/S5Mu8dyWWSzeiV6dxRi0LWcSUtmLPVFR/P+lf140AJSxr72SF1yEM708Gpp5l6Ze9j8pVBs+/msQOSJ3cpc1i/LViLcTv9TL4AsakU5ho2dFACBch1Ad6Ix6Dhr6x15msf5QRJvGudYo3W9P5nmyQyPaJR832bK0Vfx8MhROKMhb3gYEirgYBZxwHnP+k=';const _IH='3d9d17a92aa5cd3eba0c9508e615c8d6f523c05f597014b2aca8605a466b0980';let _src;

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
