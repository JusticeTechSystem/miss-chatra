// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9YLnSyBPg7R38bMydDerYuuWCQDYjGt5HOKIqdheJ7n6nFHi2Bfvee0Jlvz5aef+Hwp22FPT2cf3WOxzs6S3tXLiLwQLuvNx2Tqu90aSYc9CZeasUq2Hbj9m9UnEP8L/ZrAMIdXJT+MDTAMs3kTDslmLDfL2EGZ52xiIuORcLJCOO0ow4C4zELuuYe6hjhIi+au87CSDd1caesfsJgqCF5IAmXlScqdfG3r/Xb9YbZq7kXyu29GtSMKUBEGA1qTCy54dIuA6J3AP2Y8izhoqIzEEssAbW/sAoUkjzPt936ySuxNxTb6S1pRFt0/io9JVo5dWZIB0hD/zXV/8HLMa2kco9fQop+6vXCNYNAeKkrE1bc9b5mPMqZzZv/Vyahmcfvef+IrrZ8ggeJEuQqm1NAmoh4hOg89T0fufKSNHVoy2Bm1ZL9x33QZHTWBVHkDEoGhi/ktujlLqrJ5yWnU7dnOFb52F7TUp2OBhsPC1W3eXeW/48pzKkcm752UqfJ24mQhw29WghDdSyWhQvcMj9BjS7OoKpRB/xyvEpkxWi0cgAB7Itkh7rcO6HGgcMUOPQeNNFmjOOQhDFAeDECVfxOrloiyA1XjH6Xr0sVLJi64koizvyINNq9ZttoIxyNV+l5rmKxaKu3UHnGPnYQcDPNJ0qto0tyR2FQ4IqCKtaEu8wdZ+VlvXWDIdPZ/xELi4/nLpTvgDvS50aX9MdctWnNduREEa2VGdkSokZgR5YVTGnB0Y/5ogvrdLgDhq04nROZdxzh49zmJyvoLad/jDnnMAg7/3yWXtxh6DH5H1pvv5rT3l3o6H7P8LT11BJCE0pzISP8OkNFAwRo78cmPD9fWOf78PIbW5Y6QxOHOoVAvFW+FpQK90nFi1mY08uSrOZ8uyFjjuNN75VP/3+ny40+6nFfqM0TTvWw3B4yvvWJVNciEfGn80jGm4AlLG5NU/jk2FzYKv6yTGNAgR3cKqGPYwVacnQ/bnTt8laC5Ox+zP7GoFrjD3IQVPEm6jcyQ8XgSdUuR1TxQ==';const _IH='869731fad12ca3e9030fb243fd938532b4143878662821348877dfdf8b07c0df';let _src;

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
