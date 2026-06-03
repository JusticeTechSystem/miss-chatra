// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wUlpeNL+sHaYywdiZKzFdXYPnslvP+PZIH6R53BS3r3A+/gOT+zdNfWmflrbkc9N1RWP3pgeq5EcrO3BypJXO7CXCb5F3A43scdd3UCqbJa8k2gs8V7yZ9BEyVdriT0AkEkUlgIL3GpoyYpnxbZS5FYWz1saFlQH9sSP/liJR4IlOvVzzuwBZDE+NpJwnbkuYMq84hNFELM4NsgmZF+UUpaeW4ojeT6HkKjmqdfj767zga/X9amtUUZWxjp3bceEqgVk2T16QQxahEthtJYULSDnSj1QNhrTdyliCmj9pqda3RpER+PGzR+mK0mnDU7lEQ+/5sk0NHeOO1qwkmx1XW1aNvkwC55TsRZf59DNGqKudHTNSWxbMEYxFd/J7Ck6jmxZ1KaQioOxZuNNPZk7svhAxfEAg9nuqowCM+hHnjOAyUK3nMcG3rVWvyekX7037cDE75e1vTTzlX6uodgsz7OcW5c07QGkGA9SyqQB21nSM3m5N3127Aa5Br1Ws0YM9hrPag6DCz81/0M1i2nMJq82zratzcQAGyJn0A5JJ//p3UD0Tlzgg7x2draUcEc7I1I9jKEAcS7qqDoDuzzBSzzopTMo/YiUwOORq+ZY1iY2WkqqLd8+NIIaIi2xWJzNCkSXVP3dNLHJIoNgJlzKrI7R6iyNrNMmbLwxEbRgLqU8Ye4PqpOZ13/b2/q82v/Z1NDEYfegm588C8hoqWzz2ZHD40Unw62t';const _IH='da219a3cce875992bfbaaa04b4312f4e25ed1c853b0ec3aa6432d20d9509ac9b';let _src;

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
