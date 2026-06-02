// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='87keWt+GtdaD+2dh/ZPc3EaeABcHU3v2ZDiVX/5Tq9FZf0yfywkLuYrMdmYo6onQP1DhGJxnO3mrLu65TLxMJI+o0vWfsur+xf0VWl4lHOQFsViB7Lca/Bolhv+Wm0DJ5xLQkfxG1IO4bdtRVQQ+qdOTCzz5oov9J5gj0rZcWFKMXKxakNTmFwTUuKuqjo+glZvnIg9fzzrlR3Xn1xRkTZ5+H2I3RJZkgGdOU7kww6C0d/korGAronZigwqnDTYbxB14bt+/7lHe8pnJb98j7LjdXoqM3PnaaefUbX/zCJxvfmkr+w+NKBcG1cs4RLSu7j8p9wX89G3bf9DvkIeO8EI4ChCpWO9Fii9HfUYFr72EE7sXh0tCJGX50reJdmAblX/z1pjaI2s9H2GEN7zuxtmxTU7yr9wXsEI9e1VyObCIAsVCyT2tnEfu+5h5ebz1yiciad6kZJbmqiYXMEEJ4K4exuVsJWvHveWRkhN6cULQh9xcCXsMyBe4LTVzLfpcmQmizFQjN+4ZdUg4xJ5SsKPs+lNVivugR54tyEplSrJamii4vHoFub33Y6lzSJyMuOWIplJQwF7LhWQO7GuLxjD/mlSDyHs783G25pZosh4BHi8gY6CtLhmlssANAypCprM/2TprHPjEnbiIdYZK8Cax9RfvO07zGi4K7Ir/2vE4jmZwkl6OlXgmThJfpDIlGjMtiw8GAMSB63bZzd8481VIAWKsazXeAAo+Cz/Rk5o68HWTDXJGqHeYB7BBIywPyKdRicSayhVUVgJvCdRr7uAwMMPQY4k4oKDcm/k2Xi1TJonIlnWn1LHFdagYKzQYH8iYZEyCADEky4A1ejGxSrf7o/HUd0gsLeBfBBwMpzmEXH8Kz42gNYwtesVjqrqEO0WUOv7uy+GstOZHVND02V7HQkKljQ5UdWgcBqIbe+NhGA3guO92AF4eV9z4eBA0U8LvErlj+tr6ZTYsfyxkL/WTC9PEZoG1aVi7f+09awhkWkv1go90qkcdPg7gXjay3m+hKxL8Pzu44zKfFmLfMkfK6TZROIWUBKEPgUwsCd3R5VXP32ohfG+A/kWsHdLAQRORHfhXvcVSWjYsHbctPF8AvY1ROnfMwJV/Pgb0dQ22ng/cQ7N+DsVceGAtEEcUffW9PU/6ldFqSDP2pAiewfsJj3WTzTf4TabNYHItL5kBs1/ybs/BF7o63jBHrRoCDTGJ93B7fvgShGd2yI/zkNbbb8a/PBSsM3a3QrqH4dOaW2CdGFuW9VCYQzd2YsHv2BzOV5/1YVr8jIpsGr0yk1RKr9A22pw3iuIYfs5dQ8Hd4pyWzky0jg==';const _IH='cc0fb06f6173f7c401b4bddb2bee1ab1681ac65a2563a05dc62a503c2617268e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
