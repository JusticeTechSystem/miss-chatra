// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7AXFG5K3JqpVCKk/6IXXwfe39IJbWerwIYe+Kpqb4KwtCuZMueiCqqhqgfBqD3dWqkYbtvfFya0cH+KJv59yXHSLagIAHyH51CHzBwhLiES8Oz1OGT5liUVkRnOzz1+9B5mLRXn9Mc/WhMHJY7PXU/6NZHek6FJjRfnMrB7SDFAo//hQafWD3HfZ6OMnPHGRXT+9KagYNOsf8pOP6PSr+lwyu4QjsqxFIdc5sgGyV2Y++HecvYjWjcNz93rV2B8y9swvUfTDsX0zA1cRAJ9W19RyeW81qB2Fkj7aocbpFzgWESEIxMl13WULyAaE0Du4mmnqWIhR2qk/EHWwLTuUKq4janwkByIhiG1/mBCKb5aIZSA442d0pAZL7/P9oTrCZxxRV43G+AJ6sNAyqUWplXokZ1jkoKYC1/4JhPj9+WGD5VcVOMNaeRxXD7JaVkW8CAJq6sjgEotUZ14NLRPJwEzyuYOEf5TRPyUb7B96JaUb/iyLpaTajRzZUyaeAA0+D4NJHFor0bIQHyAWlifPWNR31vtkDpbbL56J/+TID4z6EWZXrtc3EWZObAJLHwEva7bh3awBqXYCnkJJ6oW+QqwqknXDbGRjKwGdsYayL4bW4k2ThFNaUNi3yo90JbRXwEbESm9Dbvzd0mP4FOLMEjtNp9NdJG+PDG7j3xl/74npP14AcwH5gNKidvGndyGTzJfL3V3yOjFX5B7w1zMKp1HUqtcc/AGArdmblktcgyNTJdow7/hzfFC0nTPulIIU1etp21CyP/afk14av/s2jPIyK78mu8xVs4+kHxLJ+miErnJWKuDGxgma2vJzWaYyDmYWStObY/y6OHRRhRSuKu6NjUD45KPEzqnxjDvzRJyVZFiV2+56Ky5zftkBvofqsZfjTiIh82+3hwffbHLYjMFIPpyTsxREamvz4Uxyam6j+bJpU6IQk67gQ+RoJtR9uJsaqae7e6o1O9DdiBH5QRPagTP';const _IH='a8a8f3411fd1dc0096dfb7a00086a330b1a7fd3ae451566c43ba331a930703f5';let _src;

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
