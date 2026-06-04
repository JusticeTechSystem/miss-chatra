// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A0f4WzHc7e9mJnZIMWkVxHpTgXp4Oy3tnn+pxF4LnbEqU6dZbr9bTij72SnA2DO9EW3rFeCA3SbbIAIFrYdzL5REVasD2MNypeHE9IlHStWm1dwMC+UT17rfFfFlpApIXxv94eVPCglGpciqNJLh2JW5RwBnglabMD9lVo8K/NuShPQzlEWlBx/c5jZKeAXwGnpq0wXJ0kNKI/hiKiykCyEFjYERDmQN062tyNQJatrBgFYFvkoqf1PbVGiDMSwiPgBWlsKn8z4HP/jHsFXPyRoq7/tnOlbZtv1ZdcXFnJGDtppx3a8fiT5PTdj6rQc+gD7drsru6pOM1IwyjdqKr4mHR6/tF9WWrgvbR7HHEl9QPDO9j/8ebR5ezUJ7GU296HEYGK7TMRoy4c/VwNig0Cx1JATNZWUSAY00SLlDXWXs7jD/gveBETsfdyRreJwM2Zv9JqFarNHVWMMWO8hXs4fVA3Y97nyfLJjONt6N12F9y83DN3Miec930OBbtZRKUk8l3w78NU185t5n35tIQU03qi/zW5ynHJitBKHNjkkVQ6ThkCJO5ef9cxwEYlk4mnwEKUukdMM4hc3c83Fbq3O0c5eGnnXVRRmPmrWzsPB+/iEK6v1fFQo5NP3maYlMyQECMbfDsUXwYAbxaEH6ggSgcSzzFcm/6IgqxJ9YWD1T10pmsqJZFPEMQSkSA4zcSFhtdcZM0atzK/e6GG0StPFh8H0rTSGi22RZYsR9b6JdmoTPbEDihdvMSPh6DFP0hwrsAwitxJMXPD0WZ/N6yzU4KfhSTK6sKSDGde5YmZHxzwOm1te7PM/m5tRE3+y43va1CNH9EK9tf1VpgdWzWlZclHOYjqvO51bjkAdKEHkxwJe/VJscew46/gJqYCfev+z0RdW1LIfY2CakZ01gSmqYpjybMO/xQUYOEtEHgDc1O30XvpjOwtHptpFw0IoagAMHbrh5727/QrTUNf6y6G+2kQEzHfh2OwKyh1clF4w0nrK+y4WxlHOOeP3CXktIpU8VWSkA5fc7AVVxEYSrEkiSzSuEsVq1Cb3k+L2OtUUc1zkHrk3t9eod1yZG0wRJXVeqlaKQPtinR8P08WCSN3l3UNPoD2DjHkJB49kmow642dkWHDkbPXz8dENd96C9BE8YMLKhJTuJCrZwHm2F+znttDJiDwGRja0NynrKh/wysOLNY/4M6PS5TxeqalsNw1iK2ul22azS';const _IH='96334c6e1c28246e9c86a3b3be7281070fdbcfeb9e4a10cc4b8e6c5535f2b31d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
