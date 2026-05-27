// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Rwxxk+4X0njEmkCZm+cDu05lmF9Y9h6cV3aX26RZP3nhRmj1R+p+smK4RA4yB/uRuk/iDSudd1IsDiAI18bo7ycS7UU30bi5Fjj61+lnFMAZAjodX4fK2TcClif/7xZ7pzJvFOOAvG1RqRBBs5I5RuQSSi14HbPcb8mowZUUewrEA2KyTcqER33gEPJhbQNUv2KHllCmDcDQthCXjizZk+P1Yw/FOf2obLDN8pmyXcr71S1ZWXF38Im3w05A6tGq74BL+Lahydt59Pk/ZCRjcFi1oxMBClsye9rR82vK9xnPwIJRGy3Eqht+kZK0BwQYyOUhyMM89fZzAkHafC65LpFdcLfodlkIP7giKHN9iUcSs+n6866ulchN3vEyepzuppnZupGypYHqHvCKLI9MV0vhjp5iUr6UXLiRCC6uzUGbYnypjtw2Jj2at3w1a5iAlMleofpd6UYUVXwTZJkFgLSGXyNZwHpUgA9/53C2v9PYPjCnq4K3ZHc2K1vF2LKCHnXj3CddLpFJ8zp4zQThVpBuntktoy4S/fXtg94QBtMzmJGr9D6KdROjD+y1rhrBwCu0XXY7N/AQwbhHvhd996eyi7U67NdscPlbqeQje6IV2c2z4nILP5RRwQ3E7HCTH3sZiYIP2Q2l2AQBcTel7PzlD3mvd7W2Iz52IAMbV/h8IhU45w8TgD8SnCTD2/+Xxgt1FJg+QEfNSMYnxIoGqzbqhiREuKL/zThHiAfldW4fpd0rE4Ff/78a7ZF1lHaw3kujh3IEsA5w/KUrJ9GOmSj+RI/HD6TJVPSwyU+VH5oTzlsO+knN66V1n/3G2EnYv94c0L7QaerLhrNYAMLc0im0hO/7YsTkye8olKAxm9vEFpFBWAsFuKsbLncsUSI7syOY6tZkdgpBkCVE6njFkDge6/PJbNdGiUCWpQND+jZdCQT1FXRD3rMfHGGckxbPuDfNX/o8PzhmbikTjAnLjofPhLrTgyaOTZC8S/+ft99e9npzil4BJYn6VpUd+/1QTuf2w==';const _IH='5c7af987d7cbdb6f9d124cd704ac3235dc2a164a4d092d7c299447528e02c1f1';let _src;

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
