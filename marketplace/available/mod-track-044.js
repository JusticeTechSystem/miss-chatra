// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SqY1bOLc93HudxdYXK5CDNBtGAmyXpTguBtWW18OTIzrE68tc4ILMl8gjzoIef7rgXzoGX/1ISoWuDylJiFGV7DwLIwmUo1vDT8Ib1gyWiFguGL+hMJi9NRyQ45SuKUvo5k1nG3CwPenL+htB6g1DCQp8pu3b+4mzStBqewznwieD7rAqn3jB5Hwqu1m9x9PrA5ZUXZVUosVoxqTCT9Gj/oC+Raw3h9Jxs7hn+2IhQlX1LtTh8BiHOxsBLBIGa6KxMwSWoBzbqUEV8jjV+FfFG/eODSZpbtRHrplXPOts+Q3ubCKLMm8L3g9TPdiF/sdqyZYv7zymFPvsUUPRGr/pD2ElNocTNQj6ZyBE5dPy5fLjp3T2xwX2WvgD4OpTDS9viVvatiqnld/V6oJi0Tk64GewSrV/+Elz7WufBSdtZchb6Z3qhcx/fJmCyRf6ajPA2ak/6EwiC7XNc/PCoQJhof4exvYiCJP+PRsKw25vkPh4WKvGD2zPrEJsrYlit9cR/fBXidyX2oe6wpS4jtbmnqlUP7mOPOJycENVmCaJR8D8PEBDDJN8l3X2W9T/M7iXyNsC9V1vEx3RrblfViGpFvHGTijriALViEr6snMGXpITz6JcXMCNkXMKkPB2A1pX1sSAazJo2dUx9kI4KnzmNdUhDRlrZnKP8sw+ucRVtQROYXIu7HyaYjbnqa274/RbdW3NK6l37Nx3cn277gB85WN1fhTyFGna1uKWZ6+Rl389NgU9XzEsG8w/R5cA+I95ASzI06mCM4qABwjNy3IN8Qivhiap4GR4YpJPNhiBXFOyT/Skm1YEKpezazfebM+Ef3Ryduwp7uapbgo/+mkbuTwTvBKO7OTsP6ORidqwRNk+HiwpPFCTthPuWKsrfBmPfnydywRbTcXUCpALAS2DmEjpbvrvtpIttqeXJt9PGt5bUa20zV8L/r0heCIsCEBRYCTo3pPfH+emX33HUbIH2+Wnv8tId8ShEBb5YM+qUxHEt9IOa1/vLiPNbCY6YN/JGgNWJfxEn01xKuZm8TzuPziFnCAt6cotmYYlQnia79UCrymQ2PwKr7esDVRZVxiy4ZcXntk0HFX0I4lZ0sHz4C1ywI9TG/YsxxQ+0YCoBLglq5vQY9Z3TG0UVokDO8BU3uD5sGXTEdL/KYV27hFzqRSVv3g7WZAZP1zt/Gx8unDy2EM6EYqqd2Sk3sXFSrbUZWVA60oEIIYbZpyDb+kdUd/dzwC04m5HAi+1g/bF0SjBrNIJvi2C82PWUUd5tGgywyllqIKox79b8Ic1TxL3khzFypKOi3FK89weV3TpKbnfg84uVzexOow08lY/pcu5TKIBPYR/JMZqT7Hin4KyPQK3o8nnpYClw==';const _IH='9d00be013f91df2fd4f59d6b03169cae3b0c4b58b378d130f23cb547840becc6';let _src;

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
