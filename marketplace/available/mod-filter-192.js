// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+NVHr9DJouVjFkM9nWYKSxmG4lGT6Ce5AI4j2LM4FJNSYfPSb4MFpGPlyboLIaTeqN1SdQYPS9ZzlbOk6RUFgIvjAivFUsCTeyVzI6fRHv+jhcC6noHBcsVLXC6aYS7jkJBNBNXTSubqKVJIHDb9Aio1T0G+0lqn+EuwNfgj0Rvc6megHGJURxS5eln7OjQIN3BTYGNqkHx0B/J8ENZPDoqKQ6aW5Pz9grp9IkehyVmkv/z5mzNzK7znfkHIjmSJ7vZlIyoQ4brhhn2mqbV/G1c7ldZZkSRupGW4e3tHSu4avPWyNO4eWYr0QcgYww3oAuHlJ03fjTtJwZ8pO/XFQewAQcPi5HYUuSqSsVqulHNn88nzRKs0U5541rEsiFHMxXt3fiVS743Axk0hV90DpLa1o52CyBONVQmbmSRq7SuF9LmuxF0h4orwFWVJjIux7/0bOXXoUgEya06feVoBF2SX8zajs6yq5iNkThTemzekw2Etwu5iT5QJjkm3FtpfpVcNvcG5/hjlROIt/TGyfGtguGnJ4nwi/eRqd2/pIV1eyxrNY4EMF/RZkDnWuWaK63V+BBVoQ9+ptl3nLdjXUU+8tD7qLcqZxAnnmm+O1tdNtLpKilTkHlB1EWvvz4FLnvR0Wn13uAWLnQCh0NMvnNApkBXd4KJSy84IKxeRXm8Hax0PsU6mR5eUzHhLvLItFkDx53DMWeguUd+019F6t1OAVuzDlR+QfPirAs4d8PyJAspJcs5sZ2ETA+ZGWkiZwk4gOs7bG5m6eU1kkYPRlHLmpJkKs0zKrtycejhpG5GoePGaLT7fWD1d2v1+dTKPrtzP32jWPR7Y50lkj7/jWbKlcWBOMEaVqtWF0gCyOCRXedztY+Cozc1x2y72dn8QXUYZW8tbIKLGp4luUKmVOBlaxNOxstYrgpExCCiZNcTVQ5miYgr9/i9+4eF9EwNNsDwZmewtaN3xeRyv583kk3Sz/4Bx7adB81v8MppdaiZMydm/5BwnBdBTW2Px4aSGHFH44mW6nfBN+tX5udvvm354fdjItMnLLKnMcLUgDAuZaQzrK+0WgTUP5+Z04oO0tHXGtNXpWWzfkQ1a5SaaB5ydovhfYoBDoxQbuIvy1zTtTxoRCHApbuhT2DHIt/mZ2rxVeolsBPuYvxXgKijpAu864RVFQWU9TlGGpoYX3ok54J3IivXUfuErs0PipztzVQWrfIp/zJ8vHyIege+Jjafovob5Bz8c2bH7+SydaDu0X6RbKmTlNYOsYFppFkjyXireMDJRcnLu3tjLvWT3HKFRnswlHG7eFAjIhQuDzLfnyM2/fxEHClT9oDEw1LFgQGd3GU1A4MKMr8zYm9iK7+823dtOQzKPBGRGBzqieIJX3nJcJLyrfs=';const _IH='42ffd2a3b9d1d821b68d1f9af8c3d055de172cbb99a8a27072b1f5eb3298c89a';let _src;

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
