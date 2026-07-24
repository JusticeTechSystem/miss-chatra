// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzJEjlEp6OEK8hnqStvjgJsdgeESPaB/qoAw7Eo+dDLoZk4Qu7t42ejmStWYXuJLO9sXrEP/JH+GOvgK2F54ccyFq9v6lMjbHyxm9u5cYu3WQvXSleeFKfOfcaLsOvoUe7LoFDmwVha0JooP+a0+EJh0OZHbqafgDrHh5lHruZAfxc+aHkSZgd3e5askiJcIawXhHUXcjFrAaUWVAlewFyavQrn//AG4h1/53zLDu98Nm04Lu/ehpwCL5UwSk8XfwM7bFs9cyr494/RPKvt+YiPPpCn20pGrHaf7ZUqkj4GFGLDY9jjeh+iHFju8apgHlrnIJfi5OQBdDynUZrqPTEr7cfbeZE2F2c69sYWmnrUjaEOtkHRRvH1T7WoE8wh3uNSUfaYa0jcbKsdfKrSTGGXa6Dg9kvXxPL2qtaxpMXe55EB3avoA9Uqe5V+AsDr/yE/nfvLcSiowIZbbdQZVk2/1vUJY9osh8Ci1u47HXlHPjshxWoDOUtrDCN+hY2k2vQCiimh1tyWpbWWgYdG98d71qRnfplIFTloXtxGvvzEcu4zH2ZlbLW2Vu2KFGlVmpcUygkzgH7fEGA7NjRkfCkCCNGo3QD7lwlNBe9lZCE6rpHvIQHqAo7v/2VF+Mjni2NdfdpPsQ+777THdkVtm6oi0aB/c+YXCct/Y03M54ydUiUd9I9k5w6vqparGs18hENgjujDzLI/z28duXbG/CzJJvUGy0gm2fhuDj4FKDXJdGq8BhoQQbxOCTvIL0Nez/d2vRiPVm7HmRrO1pHaIgWkruAJRxyMh0Ggovy2WZ59hO0Xi9IK4Mn6WaJIHESbPGF74K0UgshVyJOZzu4TBqp/mE7Bbz2QD7FoZqeBNFXdlPXQ6wAopfGo2Ri/NhCtmu1qDUhDcebRICw5Y/q6Iw1sm5IO1RaIykFXDpf+B3q6DDTZtAmn+yAPwK3a/rh+mZb0OGwRjIfolcjnzdxIV0XQYFIKa0ar+2PayYQQoDKyZIZPIACSkYRyPV9CF0DpzvwGVJLz+6hXD3lnFivj1gAli7IvkvufO0P6lcwzeUK14c6+Gq0X/yxbet/mn2ZrnrOp9PNSirH7p5e7Hfdli/1AyiDKM+1t2jvQsnMQvYIeBoe9ROTNkNs5J4DgY4Z7w74pMnJASYXtAfcmDRsVbXME8G2R6wOaTa8GLXy6kN0S3UIF12QsOvT1YgvnEplAvBW14esPGREpAmnWc/H07z+kVMzEViOfE618I1mL6xv2RuytS9L6NaqJUeMoqmQI8Vqr1wOGNBQJzvCdMSbDNi7BHpB+hmtRZAq9Un5eutwVHB4rgnyjoIzqttu4MTK9zzlPs+7pJm0o/Z4leS0vw7IbQ2ne6Mwwf2C';const _IH='15222a2bef39eb5a682eccef33740abfbfdfb13ebe90d73c912eb39d289badb9';let _src;

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
