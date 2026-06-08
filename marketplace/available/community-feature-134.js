// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B0fPlOnTFk8c9UrEohDmgULM/ksgk95L66Rl0J3u0JEX6sbb6YTBmnoNlrM50UXlTbJCYj2cctHSHap8aaCQPiPTfc4FR6JvcfFdLUP7LMfKdHZXn31asNmKPpp72LVEWQgQ6UlXGbRzmaGkYBo195zTjoW4aF5tJeJKUERjj+02DoRk8WXbTeUXEqhQZkCgbrk0+TWz/l0fkmnJa1KYBmWLfexgkYFDJdeXHMtrZA9WMjwecc6r34U3yb4QjlY4aF/09RbYx1GNw6+FBHZbMxeK7VRet+159iOLUeFzb2f8lOdLv8uqZpGJmcRV1UOiS+tyRIpj8Ih2XQKOQv4DGz/yWw7HWFo+DW/3cYl6OQNSQFJvfmR+a94fNqVHSvHv5ptpO2q9+tstwAUDLflNoNZ6CEaJs9BNB4HYyqwGgq25leCSQxaH4szufSlsizn2k04lafqeJ5JEfJfFSbsel1mtdSLeItbp23RWqquW1UAOtdlsaB5h2hNbpexewtFR48xWcNC2ruUwjPrWpNFCgwZwlOGLr8z4Uw5+uMV0P1g4hHcvhmoqXK3BcRPqMhQFuZjnHZctzbN30iRrdSOWlh7bXBSp9A+cR8/Ubz2KoyKEYf3DQQnRcxU6HcZLXAd1w7NA61rTuf9Ggd46LVbq6Q1iaM5fBt2Dhfd0Ufzo/mbd5OhfRJsu1kroNkzYXRJctXICnk+XmDujYivmZXs8Tum++VWeTqdt8BLiHGaZPUPMr/71CSk=';const _IH='3d8aae428eae5e7abd7c26b97972070fec59169631dc380e5ca07f04280b3a4c';let _src;

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
