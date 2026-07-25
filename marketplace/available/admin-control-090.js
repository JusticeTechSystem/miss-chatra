// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSCVWnT6G9LMJA9pY5nqRiGZK8HxdAUHapnevfjK+ohrmY7gaxyc1FDA+7oiESkuSfKFqs3TYdalQMdfBk2a1EO/cEj0m1YUcPNGpKFWffFeuTBMPWNIDOrBf4AjbsWoXLkfA2IKVJWk/8NL5IFYMOl7Q+OmlnWxk1Cwz7na0IELUgUsThGo7/U0NljShvFXXlxnOo01OVVQxaD11ogztWWQ0ZdpXvLwmL+vosL7rgznstuWQ7jaXalBBV8Led6/4fqefNzlafi5VfvK+dw7CX2q/JqgSrbLWjBa0QB4eREScZ80/ydvfzsR+jrafG5ajuonqT5NdjGNkpPc8E+xcx/FzNfls8Ln58llj/R6VHdo/aspmLrwHa4nApfV4WcL6dZ6ii3MAgAtV0ExnYrVu1EmbYa9QAhmWzRoAYgvVsyjBsmcSLxX6Oyz7BuZiTgt5R/CL6tmi0EpyM5VwWTxPNGbt9Oxkv1KRkZB7DS9GBpk15D5EzQCVH2VpsVcQY7Y3zcIuhj8hd5jZBXM9dI0iNpIl9SIDe8Ztczsvjsiao8M8wvm+6i+h/XjL6bbEVAnMqn9vHQ1vg8CoQL0+nAp9IXbQiCv8mVrO+FAo89j6OtXBbp7VIp0ECmai98d/qi5//FUNdQd0qC3Srn1HOSWyGxO5j5ESqAW9FWiLrQLEbvlN9phf4+BK9q/0shIcRreVT0RYtFH8/f18szKGgpQLnlDrZFSeI1+f/5qdqYEN4QjOOcjWIh+D+FMmLaqy2G+DA7UkYAO0goWQBOu3IONTIiaj0Jh0TJvpEFSl3zqOTtS5ibSOAfyB0yEOqQleUs7fK7t5xYM0c/HEr7HKECHjmpVyX2wTNxYwvqirs/e5VFeMhaJosD+sJTlfv685w48HcxxbgqALj0Qx/PgY62GxX0L2gAWotE1i9O1E26uOwqggbCGJ8GeogkHWJCq8Djf6Tu4PFvaNbh8aCyzTV99u8kf1UakSynao2FL6dJUhHWnIwBOYW4y8X6fWx+Gf7NhBeWH/X';const _IH='597a6162605e2ac5450425a13066ba81bd1d7bd396fac5e4f3a59921ce888c79';let _src;

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
