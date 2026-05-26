// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DfbL73mAqzuaG6cAsYrSANFGBVInKsixOg1bJJFKZqEcubWGasG/64n4SFPG3x9DsFNt0/v3rKnWofQYt2HU517nGzO7o6wF5fGweF4x3DATd3OKuWkUZgCTNfWNLtLBmFXtOnMYcnfmC86NrK0jviprqR881AB+e6hroq2hIZxmEh/mMNb0ZU5uD/h6ZsxaL8Ww96bhSFSs/Ovb3UxQreYlJHV0p300kMGC3DWN4MeDwNwKu1SZtAWGFHnKQeIFQqfToXAx1L+OJ2bJ6362zqEpc1UgTt588JclqIPSmpPl9hrM2mJAUsoCwb779INxy1tC4WF+wG0ImygMLlqjHFAlAKS309T9ojW9yV1RLkg80YGvhlp14u8JXte7NQEQiUD4ptODAVV/1gxSoCK9I5fcFhNM6eyScZ1Oej+K9tRHMOLp7vRpeIa8yfkPk/doCVptlvR4ReW7Tsn/9ghp//FjitbezXKDxyWmJYhAyBTWxRZ4XiWsvBSLnRkm6MoOGlJ8n2dG3gecHVMWus8PKLHN2Oxh/oTqL2bA1896qY9D8mOYA0RN6re3M53AalMPQxKRkawsf0Xqlyxkgw1xGHHj0hvkF1FPNnkzl6bPDkPkEbZ50GYgkEqPqTkXcyZYXbgiF+9gpPxyVlDcneS6KGUuDjVUqMWtj0SSn4EQaGir0+FWXeLVXkg8EgsEBoOnn5JibsIaJ/27LWEtL3Lxz+Hyswcvf0Rnwjs/M2CbvumZ17dlkZ+w3myiP3LFp/tol3ZLPuYaEcHh9VvM9NHPg9070SkLhHwmcNYxoxaBmX38vdskRqmhtJ9VxfDgDPxNdgNW4bCs2q45zvbqx5tRin9hoF4X3/vDI2r7NJLNV6yWr1j+b22KDaJAn/e7NizGfZ+a2MfEDT4Emx3kuRyGWpVFOLoY0fiwmYE1473aEt1+PiGHvPjsqT/Xq4w/MBqj2JdMq/aUFtNjlcNAHfe6qafOfKWv8iuX2UFSIHfawxCe+Ja9l0jSuy+Ajsq76Y1QZZJmmJVnCEtK6VIyGm0VVyeEjY1wm0SZlX/Taf/yaDEvkF563M1J4lHxC6l8xfIDlm7+k48ASNSlqMOkrnVuAt4SeZCrSRHMOz1o9hQU5niPiiiO1ZnX1MtD9El9N4NkLO8aikFIzjprYeYxtp6VgbVXnpzVBepJrGmILBA5k6tuxym5K2j24zylJPuJcIHrGIQCYnCHz+4=';const _IH='7ac4033a739dabbd6a67b85d053121049c20aa44eb6c810bac6c88eddd645e1c';let _src;

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
