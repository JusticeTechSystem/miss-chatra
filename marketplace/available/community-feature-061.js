// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiFsjOLUmBlYURUrU5w1fkQpGLHf+dcgYRbDx3+x0SRiYuRqGydzTGrHsDfDoV2IvmRJobJqX0Ye6jujmvFrbYoAsA6LYAO7cLdNkD/o85daYBM+0oLYw2J28OolhhkAZHRQ1hdVILF5tDULEga+kEiDaMIlpxoxp4yHLBZI1Qrkt1rVi89AuPndiXRllBMtlYP65UbbmmvPn5xuqb3L558jqZj4NRDpDIBVMLOp9nnqrX3AIBJ5TUaGmNlZdUrVK9G9FocYj/7xPJNBFU0rFD7Ceec6GQ+aEjWlDuW9zFdGY4Azs3bnQYfW2sZBrMV/ZbAyPUspdK0v1Q+R9eXycdUf9qNqm5Dty1nJ/AkLCx+4+R4ynz12dK1omgTUK1Q+uo3DZJI6pUMMeyaGVLWcgdvV3j2Pde3Daodorr5arvMgQds+ypaVDORUFokxiSyMQn43gUaD0DV3wXisz/nuPERlzGl5CO29Heuk8lQG1h4pfhpvjqlIDvRwomvRWQcZrSti7ZKxDovRzYlPi1p7BB/hfOkq7XNcoLkvQ2CZyKC1498Z0E4CqIF2k/IUvtDu9oPHVohFxWzI+jg9jLtxv9TbWSuFpz7cekKUWX+V6OhIyPkqQDdbTOLdwzd1HY2XCSlyeC+pzKxmiRXDwfc4g6XDrcEUMZj/x4jAP5hhHRYAQl2YDQ4dZwlx+b2AF0LGkGHJV9G8BX/lBx6N97Yps+QSSPEQ==';const _IH='e7f6a33ec9cf290bdeeb04a7478d68fe16a47da75b1d6c1344c1c21069fdcfda';let _src;

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
