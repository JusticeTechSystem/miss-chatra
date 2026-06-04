// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7jr/TH48aUyHrvlrX444uvcjikK6onYgURMyGMPsuD5okmq9lb5kUNL7jLOc4pOu5AuD+0IjrMfktl6ta5tJM8H5boeeWeyfHL7SGGjW7O7bRMOqla8YIyQGBykXnpmF0p3nMBXcSoUYHADfEWWon//A9fAqcyGBhilYHawRxe3qPqLSOb0QHPUWWtAoHy0oLejwPl9qzH/u+SKCfdzlm4Lf7SMw6ZXfO9mMXbtYpadYrXXwzRU7VFnEE99ncznhvlivL/Fm/fijAwgO+6ROQ4DKWMNhyQVUAP2kapPz94TahMe6Lh3PvTn0BXiTAxBawDa5zXvBU2etaqwFbkkwueeMXrr4lTHqgrJbIXWgb5wn3GF1m2UNXDlBfOjhRwXQtnB+7rASINn/zpxnO9NN3MfY2lMdTEjQ70PkGm1Tp3VoMuRmSHN/h8gIn8ZTkwgL72JBLYVNfpFX12EMaci2VbMotxN2jy4rKGEwzbTU7BuYojnPpK3BoA3UPslIA27VxHQxWsnDkyh/UZTxQ3PjJZ/jaQ8IeGPq4JGiXLxxBln1vLu9oy9Bhf1Mbjxh/tgfvY9swU8p3+Xs7+6k0O6GtOLg4g+DXl3Z1cfqAmwFk498Q6jOFiSc+JCxtMFeaMBpdp0oOUVl978ISWZLUCkBAlyM78U4JW/2z7HkyQlafkvAF0V8c3DP+Q2P/nTp/H6R1dhenDiYZICsvmWizP1+LRw/yf0nLuQdHwQHEcDdGpTxz99IrER9lnOAATwn62DfCVzQCFOkMohAJHgLXyQWT6i24POmT4DbyiA5UT1y0CAi0wfEQtWrZC0wj5gF+MXAnKLrj1ouD1fyI2n2hC/jBJgQVmxXWUSp56y8u9/Oref+gm/RnX6x9au8CvDRvURnkfwboZ2H3khZbub4/an5uHkAzXC6yAhgWbzSpMktr9nCNYWRYTLRmprrMTtfQOQDcECXZhGfMcl0gi+YE7SV0pB+FDmzLBeAE+VoHD8yqg==';const _IH='412f7c53e876172d82f1610abd70e7afd6bc3df3da05ff7b32cac2c2c69b88e5';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
