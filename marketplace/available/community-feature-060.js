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
  const _b64='jgF/lVZbQPx/Oak/XukLTZyOKL8CERP6tPoEh0Vq7QA95TY0TqhYH8COGwGfozoKn1eiQkgsuThuKltfZNCZhJTh2yXLFj1TBUeVM1k3L+8sDIfd8s3yoz53hnzS1lAhXGzUwm1QyNJpbgQaDmo/BuMyhJE+njcdtT9TOV13zrOHSa0mZsA63jYI/z0t6EAMehhpUFA7h/Qbf6CIImoTVbojEEfmVtYDqL6IVXEqAcw5s9eK49tJwAeMAo+h8Nzxu2qnmJLSGnwo0rsW6UoDpkl1Tk0yjAk1nFbadr8wGf+OMoaivuX1gsBZjcV00lwud/RwaurdwnFti3xiH/XTQY1S5eTqQVfhfBlBePbCABE0KYrTBfPovNnGmhu7P5LUJk0fna0UCcPzSngNVe6cU1cxCwsbzPw+0txpiPou09gddUcWJv/7SQeRZbLn3dY5IwSqDSYFnpujd3isdGdG7+095EFLoHHZEKd7TIG1c8jkRbES3ubXbakHoTH/4vTmAk8hvUY6syuV6AibDhDRBmwWUwm3nyVJWlMWHNXb89n23WkwCIxJLa/EIjvVQEHUPUjVYNFfs4ce8em6hRH/9+5NQ9rN7wCN/85xaGDrCMPTbIwMKlxUE35nolAZjDNct1FOtwXQkxJc5SHTJpDW3SBmSeCTYw2hNsFCTcCGgsnMAS3h4A6XGuQKu1siNFsyolHgkvC86JXd8qChHPpJenO0reWqyNzXM//ZQlBV2HESvBxp9aQ=';const _IH='a102a0b026fb9450cc3395a7436460c9ee914c24719dbfda74341f2ff1a32614';let _src;

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
