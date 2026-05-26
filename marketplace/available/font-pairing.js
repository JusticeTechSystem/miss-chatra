// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9hSHj4jIk6+2rNU0gj9NFQr4hdkxp8XuYX2AC6mQCRqy3yG196sXIK4wJtMPNK8pd92ZVZyXJArMspzxuExLqqsAT44JVzrvrDyzsEOD5TbzDbsxM8aox94B7AZx18hmYqZn3jqb9u7KZyeXM4jA27FqJFI2E3T+yECCLjps/8VLUxIH037o1dAoPrCkxedr69WT4bllN24ZgffjH7evpo4qFFWcVcUBQMSrpwwoshtei11fFCFnSosb31/G4+sRQKcUdcL1mpeE/z115hxnDpsq+6yncq2SlXEhCHllLQshTZaTHfonyAqYfBtwHSoCIKlWZaPf6dEhav5bm86lYb3GUS7AznxvlnYitX08oqVzUKhUNp1nlv7Xkwb82p5bmQa/dIViIfWegnblqjlCkQB7mm4R+1H+fNwoVeSn56sF+3MyJKadv1L2ONUF+K06KUVeaN8sQszUNucukD/r/EuTT+LjoEQdxHu/+7OfEzw5yz0PK0YAJRHDTBVy2QxQJMcTk+VoeD7JU5q6WZRc2vMZxfGF2H/ukpr0SrFTt3MmsDIbPwPRmdcdYnAeFbo203e2vxs43wbGo5zmvZtIG9JfI67LNTw1RFP0uc+o3hWhPtks0dGTw6IKJn2pVcbqUB3J3LiUQemXS87OEQZI3k+UmZStFbkWKU4MW5AHN1Zada7vnsd4GoAhZJn8Icd6gI7Hx1ogQhd/gOIOWL8/XwRjforBMBEYVBMnlpW+eUPp439IHGzGIBMP7I5AbKr931woalIC3QGzdb85ehpkR2oTlbp1ZrksmiD6zGeyEoXKE+Nn153js2HqtHiGlXzmdrpvruMkym4t5XGZ7ejdd2i/gl8YJOM4sDufi7Y5Wgp26HbDslceX0yX42dwzPQkUP7M9z2lER3qwH83QMmYrER5AeCvDkq6XTLJgE1kBJGQ4GM6wbIePJsmmbttniebmray83XbZo2wx4CKzDcasmJyjVrA776mpfnzdZ51B3Erdgw8xXJDbLF4cjkDIr77sDcObFRFprSJDfWfavMyIPGlby2loy69umSUrmvLqdAvWGy1KXIp8S3W+xjTEwLT/oig1b9rh/CAnc/oDjQzlpukPSe8LYr9dCQbaPfk+BsOKEA9enn2vBMPUmOD1gZhEyzWzNnEkMxqYjcayNQCsihFAZw+aXvXLFoabnS9mG/apyQz0UDozTfRjk5q7GaKVt/J+SG44RVdJxVrJyf8NRHv2klYikC5f2S7GnuRHFjyLJDcC5t73Yed3PLFtfPGWJwKKOOmT6Dtjk7+5akbSwxtReAmbPv0qOmh1PWLagf1+KQXdHPhVNRoDD1u08DuWzS9FVSvKIQ3GGUEOFM76TieZ8IVMTIcOJP68xUa2qe0a5DZy9vTuTxNwgdQghDNy0CbzrRQXgioJ03hjO+ypgID5t47UVGGY8Xp4fXtmfaJVZK8hj16Ptlu/PT1oWVf4ya3gVsAYTUt7q6hT8Dvu+msTQpi6kgTlx/TOB2UsBOp3ds81kHEln5tFX+xYMLzSeCxl1TacOqVv0hN';const _IH='2ce8f7c37bcb4bfbc9ac3639adc44c9216194da5333392672f336512cc978860';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
