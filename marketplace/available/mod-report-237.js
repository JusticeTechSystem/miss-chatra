// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cr8Mjc75jsKtiz+oKoGifPkh1hWjpYTH47OHDjq5yWIt02H0qDAH00dKr/d4oR24fGRVxHpY/bqOiZl+hS78jhp3xATBMjvuAQUqAmoOeIZ7XOT8ajiguKjFhCxvfbjDl2i6vMP03t+KahNBLE17FiRQovf0T/v5pT3tGJxuk62ctjWMzGGA2QOFRCAQi6p0Fo4kWS4mR/FvaOWCMpYUinW3DEDp99tXD8vNAjkJ0TFpyBEEBzgLd5LaG8vc3l1Sp0/vUpoVzjBCuLBpHAbYNcT7aUEO07nvIvm9y3OgcWcJVg10/wgJQn6Hix0KjEgjXxYsb+BJ28YLezkU5w4kPd9w9cwL2J6YlPakYKGka5mXLz0Dn/lUOq9yUgr0UPevnuqXKg3GltZcGr2kU+nYWseh8pbm+gXRmzXIUmTsWJxYhU0BiWiOtq+WpFaqhwfH/cfwbG1qPtzKTKrWWaqDWTLDnrFvM7U8cBZG9+ArWCeo6/PeMhaepaKmiklI9yGIcx/moyF+1VNmBFYAZccihmIEzkCNRKD3PEewXrqocxMCRfejz+14wR3HkhSPZR2AAnTugSjESqrVRBNH83LISJZ/hpJk7pSXuR266thKEHDt8+B7B2UzNzhQaaQ4Nibt7sFMjU6PoITjbmvRaehpnR69B5zapl5UyT4GAyp1+juYz/S4TN1zBT9due4KepKNh69qUIdJQFCYoCHJPw4Sxqhlt/QyuF9x8DCijsxMbXaptkBSpXOghHSwUbodFfoaw62cjq51gFLl/exBAeT/+J3gTy1krFDnhrQFi8FLDLVeBjZVWIEJXPSRJFFtVZqnToQQKMHQgucCFzD/OcSUt+IeKIKOduhunU8ZcOpuqxU/SSDnXx07p1MX1iI2VCELPA9+115rU0sN1+vvnUTuXGIAnrAiVNrHAo3nMFGBx6cJ7eCrZySOv9SNgDWQN/UZgE1AmI9ETV031dL0lFF91yW5I1SD5HHjKYQmEL9Q1bAjaCweHAMAVSFX/oNDXcyYUCHOmQQRMENpWKdIlNQx62ZxHD3D01lafhl7/4H/7BGnFWPGyu7ly8UpeyomGMHcoD43L5xTnxuyjonRvPijt8m6k3vP6+26g/eOGRkV+DuIqCv/OABNOPCFGERpC9p8dk8SuKyA3RVEQjXlDzLx1H9RqEYKvtyaapDEZNiJOefZF3mZjv5LMetMSYfEYsbXJ4J5qkwybv+Q+9G0kkxNAlDVZB0CfGobaNSDrfd6TBHOLmlUbsqv0R7dfer+YKr4K2abyfqvIvbOirWPZ74DmpCCQ6XXi7yIuaG44C0GqP6mvWClGfclJux07sDmAGnIarE529OwnGrVZZHu+ngsHUXu70APd8XVbmx8/4pDHx6KAShH/JZdEQ==';const _IH='a3701ef57579095e02fdc25a7c25b1693b811748e4353c59ffccbc147cad3b2d';let _src;

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
