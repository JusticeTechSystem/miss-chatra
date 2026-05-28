// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3AcLRe6n2Y6csC6O/6QVoS9Ybh9K2Yt0brFbJcUkJjG37ezyl3bAHUcbDhR7gyqngO0Ykm8FT+FHprHxArvuiaMPBOMqMThhTfnO4X8spkT9zHZnObfm1Gcwk1GBiq0j9GSIsedzCBjSMyXWGAi4xQ7mWQQcZBUlq88hGXwpdZBvy+/hDqX1c076cL8TflaK+Dbm17SoGR8wtFsy434/ENjOuwZjXIbT46tol98b9vfenLkTc2z2ZtQSBK4V/ySwfHm2gripVJDNLdt4uhTttb7mlA8Tvl6wKLOgENNgG3RjRu4C2oXcYPMdRMospI3rSGxJvAVHXk2lMWSejL6PMifXZi23/p8vDjA//AhJ09ZYeubVQnuFk3TZXzq732Dr69x18N0SxJMGX21giSKFh3QiH/Y16bNXkG0Eijep4ykKA433ZeuqBWxlGBimOmvNseIR3z1+nRTZ34C+Ing/ANYiCBR4neYOE0eVe5FdE8arhIGSQ0HsoSNBUz81J78xzXzzclRt0amn2gujRhNMDmihAfWQwrUeoeFuLBWQX58idYYuHZHOke/8MQ/1AhjnB+ogAX8yOVYk17Yw1ey6RyFkAZo+lYIvYZiEqOz4qtCquBOqzXaxT8HaPa1X7/X3TO0p3KZM8F/y++aMRsIXqGAtaObgbFN6OmwR53urYR8Yoxo7wTDBP1HICNoqBPY8bVJOSuCcHxkVImI2G5WZdJm1WdC9Nfj6wIkI3pvpmzOk7S+8dXy+qD5GXJvauDgCIgcMCAiCx6AWPr7u99n2bs44Lwn8FedOBekbDb6zdKODcB/xRgmXRjjrR/EgtIzBe8USLxx+1gfTSqsihnVKH/hIO7YHedwcfbJhHwGe6G2sQo442zBi/tLNFseMuIglHjj0GmMRmJP/wjDphzopXV3W2Pu3PbPteZAi9cWewRgINDpbfS74dYSQFoYuAhp7rkJ0RZlz/0uasL1+VXq++pSzOy1c0RjlVP4V3K8fR4R8/R6OjEOVcYMyshjqnPQX+/jir0m48cgKmu91c1+uR+8xAJH5GdURGTnX/RLlAwMDlaLBs/VY52UmTa36hBVnW1KDUPiFozmxcnp7xFbuA7Kh5JrHCnVUbBTNhlEfqj00SmEu1wjTHo3mFM5SGwKn8kO0g8NVUOPm1W2KWLP8WB775q+iy02L33n6WrgiGMEEgqsqD7AwUqzmIafYoLkCMyzojoYt2uf3TUgu0l3uUY+SGVjcUMEzO2Rf9R1K6+IO+UCKqv4udDju/UUD8M79fA0dGo+b1j2hvYH6s35lTmt4sY9rWIF2NCTN33fhtpQgLq95Im2CQ/m79tfEFq8pGrWmL3rV0Celi8m8FfqGVd7OcF9REDeyBg==';const _IH='2ee84e1abfaaebb7378f28ef289774d4ac5f60e05b0d3dbbeb83a988b4665d01';let _src;

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
