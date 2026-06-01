// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQytJQHqZ3WULtpsDjsFXdPnOuNn6MTV+AOJzfiXeYfXvIHiXHI4nJ1cTpWdjfFgUAajy6tz9DjhVj0SNxToo0oOaAqT2mGKVtCYkGW7NqLHvS3vAoqChFYZOIs+W9RL1rn/A7Cg1z+aMcBRIm8HDgdJB9db8xZ0Z2TZ46xDkQQfs3JWQnwr6q3WdliIUH+o3XgozmRhdOEBStCSv/p9ABV1B2xgTpSeJi6deozEPrNwkxB4mj0vcM++QJMFFzlrpbzMaUKZers2Uh0+fXfZsC11dFRo+fSjXz7nV4CdW57ng9tZTyxxyZP+xyzWsCg4i3TXjy5mrwlANku7R3oEMephkVhdzr3Yy5MLWHa62wP/KL8Hy0PrYYo6v3SBTP4DvLw4cjlXaXa/JasDodhYZKxwLJqwOFwSSR/g4MoWvKl3r+93Mnqgb3iHszWkgemhphGqwlFJmReR4xkkwhov43z8HrCMH3KZQuJ7+Ok/SWQ7wWiU/KRqWXm037tGFXSyNO1eW1zmVxERNxEfEXm8uT2PYl8LaC3gDMzCwJB3dkOfDkd8782ou/6L+3ZaUZr8FGoTkDPm2pwuFmCDaPq22/O9RpyTA5iPT3H0rnyJLBT8ETVBUi+V/AoiCWKhOyxt/ZIq1gV5qb6Tw08uIVeNLmfHDLKCfgx6ghzHusB4WL+VCElnXn1YcKOQ5kIPywJ5RVlyo9MhOTtEP6P0VO2xxg80kJef/ka1LTwFGJ5IQairqMro4YfKWyp/HMRGXPUIruzONbYURK6+2oyikaDzqHa73FPcNxhA9YJK7DxsiXe1EcY/EtV9x9TYsCoorRPZalnHsE9tdfBaWHitH6m8zSYJKXSAA/yVfSGXiC2Fh37CmgehtGiMXLMRAWiQssNKndQ1hBo2fVFD+kg49xtSPS174zoxj0Fw5swCHU/uhK+J3XZp7eoLN+fisLRT5VDuA+IFoCjlvhXdHf9YM6qBLRlN3X/o9XntG+zudFix8M+HRfNj1NWDru60zXLcC6A3LkleocGGFkt+gahkZQWl67P5KrkvNArmV7aVuzpPQrVi4V0ttAMk89vUc8vuswnmYJNQPbqejP78g7/4KSzCdWObjYQ1BZ1LRmPGgrvZC1xzwR2QStJ4oX5abkrPWu4izhUPW9SuvPXeXybhNsFBXLpJ6t/5RzUz/YlkVyqVvn60WvuCL7UFInT9gt/Ajs11HjAKMR60R+h7c6wNGiWYf15Xge16L2AyQo1mr7JMnceN6fGJyP7VeP0xluyGGwPuJ5zvUA7aPdHSxzf4j5+3Do9AlHb15q/KJvbHXvVtvCn7JxCPjZ8bFzbWwAZD95R4EK97a+9oMTKa4bi9HUCc++pL8i8hhPj/t7Sw=';const _IH='a61d497ddf8b8e429fb82a2ccfe1f9087e71be258683c7263e0f632f4ec6027c';let _src;

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
