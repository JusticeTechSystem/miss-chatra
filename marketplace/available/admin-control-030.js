// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0GFdC1+81pOvSYetezl/5bjgYTQxsikfSQQ9tMXysfiLpdxBGbXYoLZajLmDUDpHTX0mbfitpkonwP3Td9dK0hNLE/IS6j2HMlFvIywn/9k1zT/znJMaBIMqtiKn0Ve/M+EzHwLwZJZs4zdmDY6wcMxCKle1wTPAKgMKvYd6ma4/1f1U3b33mPnicfPIiU9PVexbu3DLoynCZLzUgrllYDbCtgK6ZIa8I++z4z04OGrzkdbLSjf1WeK4s8Id6JdPy0ohiL675yd5ad2ZhpwJmldTcTgOW4A6azC1iSg2OVs2T3XVBJtOxVyrl6Xl+VRWuxL3gScBF5DdN4crM1/Zyw8pPuPy5zj2lkEiTFOYuKMPBE5exdxC4O70AWK/UgbKjBzTybOmGbYEQItFqjm2kYqcbHXkGqFnL3EK8uzbzO7ChLYcoLmcfzyanlmmS5D1u6A9TxFgKRU9I5M70WiZ5vnJUzD+5BGHW7IJZ0tzkd7Gf0YwO27r7D0+dI4/wbzl+HSOaY1YCfJV6brTTwgoqkZAVPz4a4GvT7+vpXdQkr+YqmTP3crZA6uBe01skulHpoB+z62N3MX7SrmGEfBLSuMVuCN8F+t5EiC8Z6arsFdvgxuTbLjikm+pdSxpsi7XofDRCdavAIgFC6kwlcuWOEGbLRdY84VJn9L0WDWId5oAny9CcslYOQ3vM/K7IHuyDIcACpHol5GDKC+ptCb5LjZnljfr1msbbyHpJlnIWKv9l2kOMwWaE45iyAqWiwujvLIZmrnddHD5dBAqW1DNKPSta96QLLo1KkOuO6boPPZBGlCki2HQuq4SQd9NOlx7Sqb37mOlEbsRhvRql0UUujyYGkq/TyBmKf/zQ7r/MNy0NpDRUVfDifIUKG54v5CfLIh6q4Q1cIYtBAOTQqIaX3R0eYsjQu+UlBNS7cI4zYLcE+EMAJZSh6DlWTSe2Ha3t3EvdvZV3HOed/AY+bFeHnfqeYqFwmIer1NfvorK3m4kzEo+HXf3ja7xH/ZtdOICaILkwg==';const _IH='d35d4aca3be00dd53c5cae6899e4854ddc3aa6995c5650348092eeb292e56739';let _src;

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
