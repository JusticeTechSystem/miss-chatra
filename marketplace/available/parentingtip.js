// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p9nUk/7/AMR6hyDWQdvHOyD/AecoOjBbARX0YbtggxgXWHPNdliUhh95z51I1S0LLQASnxfyhHm3RCoPvqemoZj+IdKRixGoIsOjaPviVkpFv2n0lH1CDpnbRaLdb8vqQ8SKARMggZlAR7oL5W+EUNujQpC1ouj4Y+VrM4V59jzNW5i79dxKtvqZbgXK1een+IkAHlO6dCAgdWbQW2WKujgcf8GsHBfcrQXJWBMdYaXUgh53V330QRbB3CrN0GMMZIQGtNUDO8WEKCkWz98/e8KEsRZ30wXMVCBbvNtf+5fsizqpMq+vTwg7EduLVL6S+aTxD8abCjgj1wvXu2VVwZyWcPzuHRyn98JJU+PPwednIeSTLsPx0vKAVNutM05Dh7n4Hh2p9gt7Fr5/IR0GKpePYct3fLNU+w53hSayp7Vui+1x8RYansTvMAb50y9+mPmJhBhXfhKGCD66v/u4/i47kcFzMJ645Z5y/qG/20Pg59zhdXy+I91CMP6wNOOZK00XoEpfjio0fN1E6ttfKYk7AFdDoi/DlY/kBx15EDZsx6nPXsixwne2fxloorN3C+irM4ZSD5+hfO8b4gc5qR/gk5p/2xR1/imyNngqRrjwDdb16eH/T7QXdCbcYG3eQ3mfca8nReQs6XCobDOVyXsOiW6NpkixcIxyH1Rboj7NnG2BSFANiF8d98kD8nmGFNmndtN8VG+JB+gksyxzRaWdhLsEtm/vY5sJ4JcXegDFKR4o8kgIhwghmD//1zZuTMmwJ5gln1Uc1XJDjN/z6WZb55XkZ6pCJld/qkwQH6NM9alDwyClHXfRBhefrtuX6utREZQ+Yw8VWzic8RVy52/uivMZP7V/cssn8wgiwuHSyBHChhwOlwJ/PMKWaoxHFiaWd1wKBT9PrLn4DWOtwuKohhCig69zId+4yocjW3T43ZEh9u5BJbFu16JWC3jU725/TYXmnY7yPnVYiQx9sVfHdYAAPBACDU/wkeb4hhM24hBFB86nv697VN9d38mQw3SJHWxSh4tZjZdZ3lBvDRi7qg/dore7/RGfT5RG3TBAQ9mLR/ZZxWD0uJPIrN5QfqhAkNluTRFjf/jffxUnCsa1mF27oMj369QSw7DSTIjZUCGmHDJYIVLoizumIUyvw77ZNzSpFvCb21YD1zlAjUbNLT0Psdeyx/YxsAcBqoZFmFlzoSHJbPyUakN9SZ6nV7UDKkmVvA==';const _IH='3b019bca5abd6ca3934a3f020bbb52996369a2e614dd98625e50a56cffa6dd82';let _src;

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
