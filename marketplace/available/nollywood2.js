// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcNEfU8+XYhryzQfIB6Dd1tvbW0wSK7swAaVJMcQNuyCfA+ix6VU+N6TG4mRePBIuctXG9GusxcxHeXGIP2Ll8rwLPf7sdImgHrwgA6RwtvcQ1cJYuJqL2XgBpdxDYosexo0VSYuxy2xsMG/9VtDtq1REJYN5xp/Y147lZR47gryFoFeIC5T5PEEmHkNCAsG0GoTelb3RfbsVCIjJjnPNGAVIhu9BO+F/33zHhaAki0S7R9CB275lstLoFIGVLfPux8UN5JoiQ/ZrP+8hzNerd/ysjsxtZC6TuOL4dNXVGtmgsW24MaKT2lKI/wzEDlG6z/PEuDpsXgehRzqj0UulHMRKxijyacY8UxLspZjp03iYgFKgxLlqwzBM+CEhmCTzLWzbKspuYDHbny3L4ff5XY1KgZ7eYso6hTnc1p33VaRtShP4W1JsqQefaejTW/YWZxCQhHiXmzRece4Je980tNYTrGQcnP1slSdRqa3UiW6VdHZpdUAtT3kohkDShgwf/F8lJCcDKebCueDcgo2fDm8h5UCEArPPWEfFt3hi15pNnpzdFr29tU26UZAMsGe/MeaQ3zq3aweVrBCNx7orsr6PfOqDeKrhy5JkgNv/AQ7eZY/C852Bsm90m+tp0fQiPZxt0h440DdDH8e2eQ62y3zlpOonCz7d34+c4/X8ewjJW9GCbc0KFqCIazEsz/45etz4F/z9Og+G5yX9bRgk1YRXCeqOwDV8kGLVI4xQhHdB2nR6ZdtaIQwcqmOQpTZObT14tc1sF9cRy3WWjRWUFZbTubXebCsrhb9IPgzBN9d/bWX4vfuPjE4ZgmqnW1sNj/P3UyayAQWOFbdgsojN/nyh05Xx8puiuUKwUfiSyio9m75ZRDZjPO2+8BKbl78uqtMlXiZ+5CzoUi0tVkZV7wQXG/znm96gaWPhrCqIkwIhCxZuSsTKbFWyOWa3uW2fNLKL2WhNB2SEUrF3E93tUT/CLlRb1LUfLTv8/Ccucy2tWE4zGV+wR3Ppza7B9BuZ5wcqrWJhMqmQR6ScAr2E8ePaGmmlXK8eI6r/7mxyx/l0VTmpMkIhrqZKtWV1/2p4Tsww5+Rhkja6BVjzD20CO477MaUlpgbjvL4uLOuEZ8J2a/pXoW22eYsMXCiee7EFfldCh1c5DhgjX5Uc2JVI1WWidWwV4QndLkbQK3jMecIQVDfpELa3d8GzMKUTAPgD5PWD1QPhL4WaTkWJCEA==';const _IH='eb423aee7072b8c63767c0352133fd4c572dcad4765e58318be8a700ee4989a5';let _src;

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
