// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ht7ZjEep6lP6nAZPxmn/8i9JdwwQuk8dWkPUk9Gcuq8vOsO27T+8Qh7RWdaIcZIl4Q4t147WIJhwej2KXjZGQsys7JltJVY+wJRyqjfB49LvR4hRMOIKGlwD6stp1/zIftHW2gnIdeZZQYkHAnOlm3UtjRj2XM+PCifLFJs3kgG6IRNFV3/iVN9JGUalSTys6oSkGRUVt09oVYQw3VPNVCsNu4l6NrghR0+33qrLhHUpJq3kMQlcb3cCDgt8RxHxcSvLP8tLbe8mbhLbwgxttTHrFEc2jMt0+0dl8RVnHihchrUPJeKDWWGeHeDuF6GU+pBhLOwXfJGs9JDy1kkzIAwwjptlD+2EHUo0OAkb72I+pNJgSRsaL9CaoVRTsHowf0G8X2E+KwWi2/sZVSsDx9JBjaj0TU8ydn/WXtRIbhVwCbwUVlORWDqeK4f53GwjnopPoUnd4F+C3CqemZMwTXOFrZFUL6/j9+chCHLeFIzmbvRdl9DBoeAXjIRboq0Kv1eD433uKaZqv+4D25KSmAwtar08qHC4O94Ku/DRlUTjodJpAwYkVthRaj+ZLrQw2nGYnUXLoHx1c0oq24hKVX2/MABOcetQf9XqCNgKSLwPplFoBl/UeR/u6Hn42nbtQMmhpQJv+WykNdX9nweYjHYLeHUvjmL2H3aSVd/aKSVtbNq2LsJCh/uURIJnh/F/B39nQZq3mc6RfX6wTCASr4blMTOedkTEsqkq42A+6NJUeCvm+hwREZFpTc9CJ54Ghn8WMpV1FsP7oZdFWrBHxU4txWt3jVYWwWD/YuWVBsgJrfl74aYQ8Bc9sMG8b4HN3Xh+iK85G+I8Nt79sYCAUfdkct7eOsOSD0NQ7GMu2Iu6MQdNazxrHlSFu6RNxGi+09jKafc4ZVT9ATCW7uez8IHIi3oj3/ly6ID4NmF9bA5fur+A5tKh/VNnC2QPSH1WlO5yUltOAxA39M/a0RRKJIJSP/OHgGOCNTK9BHMuPNjH8QFmqzJhRnRG7FY2MUGuFZrArMVSWwLF85MpdPukfkZCVHDRRY09NRXJK/rTMEUK6vMr90vy95VhF0Q51Daa4AprA0XUwPtM8P3qS2H5H5xwCRfv/Np2d3Roi9hiB3UoUkmA7MSqhpS8OwRzLgcQKQ7EOLWCrLgCnRd2MLvNgPJSOc6Faw2at0VIQkV/+uQaydYPTAMH05mJ/ViwLleVK3pd8ePE';const _IH='f7320a02a48dbd391608284fff8e9e09784e08af10485ec05e54c75bdc38140a';let _src;

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
