// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='erUaZBCqAys97G9s09mXoGlfE3GgLUFrtoMe/xUyBraeyHnDCZbcj0YvC3f+rdPPMgveIC/k8+ske/RI22agc+Nb9g7BmTmuXCO812Joe80zsv61Ic61Ol/oxpMuJXc2maZZPH0buOCILZNrNL9FiXnC0DSTEDr1aHpMdw5mpG/Q2SrwlDyl4ckhKR21OWIVX9198mMi3afYkd7GJdDq7zwEFnWHs4gyJYU/ADa0C4HfKxL9MKWf95kOElKUzGQYP0W7EUHKLaTr9CPLo4XrLgX6XHx7gbjbmNoZvRSHDT/a/lMIX1uT0dcAXrK0MagzbRKqcx0k57evUFy6wEZMgjulvf9GrDzUaPBXJ4KZ9TLP0zCygVMSa/8OZl0tCIntsWS+5TSGKZsW391ZYIHRCahbjjlGA2n/+Pm+AzuKdn04LOmc9+oDloGFNgcStGY7klXBkGX59HAesI649YHeJBSqvaBqvV+59DfpMjWQpdfcyAErNb4CSxZD33d584H4+3Wh0JjQOp9PIGK/VWri/sOreWgi4RZMjM07U9VZXnrpudVF76Z6M+6t4qJqAIeJiGNH16G0f5qp6XaxKpYHOvpGQChBGY4t4ZhfAtBYDUPlX1yr5aC3F+hj3oP2zL+MreAn3aXp6+e+aVE6m3/E6kNUmoF3Mp7nMLalGJ0tr69MmWXvIGaPGXccylq4RroTojqPai6hUcwpOq0MsNkjZdCqT7kVaPiwE8tkfmgid3pXCUj0tqzTZnRSU9CkYvewmM87czuwp/GXLgLBZxOUWh1blJgJ9WZh5+kAf363fAt23FPawqBt+oV3T0xlcQi7Xrw+y2xMnzJeXGmTKajNwoGZ4eq66gf7CkSehlCReoclaB+0OXIAt6tbtN7L232P7OAaPSf2rBBHLVwX0qDByi+EXskwqqWCjXHTQz9F3IipmYV4QjXsi/6r4qHjyuTut6UKjAzj74+zragmM4YIU68Xgoff8ROYw9NLeL0NfP7xc3+tBjYpOI+wX3mlkDwJXpzvzJzCcfyAx0XttVB8in+geTrYCa0e062W2uT9Wul/qTxQkECvCJ82XmxEa/c9GoRc/P2TnTZ9VUH+5D7Y7NkynkqqEBEuI7gjEzUwWX0x2nFqfEFDKr2FhnuNZgKtfqhcSTFLJL2AGGwB4Gw5htZUxwPcxMjrVzC5gNZrL0XL1yuLJF8acZAdIVvgkwM9qDo1eD2GaF1z8xu2E3oJ+h0txIXH9gUOePSNX6mfJnqWGdPhEZMFZIiVcSVyv2nH2ufXhNekm4ZgBllw2TqqXFkx03P5lAKcAwTtHwrwl1wP9jSBicxmdEYbrGUjHhpx1rNYsHMCGfiugg+hBE41Q+Xe2fsworkn9djiHpL8';const _IH='331c03133dee4c72d36fcc55fa92fdf58f9493c7f9452c4fd40aca506d893ff7';let _src;

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
