// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qfakp8B+5kf7a+S7CcY4nRt2FgjzGVxuNEcVki3sXJEodYowpbymXxG5Dqj1HOarInmUcFbRfVwl46NFpV9JmbvzxIYTtJ/J8BaSomOHMK64hbaHwFVOFPJ7OEyCSEIlAu+JpwXifsIxJ6qtzbRtU83zhXHktCSJrBKMEflYil6qeE0hbjB1Q6cFiH5K/tIygsBDCDdjy7yEOnq0wNXeazbyJRTwPuQulgHN8jIp9xoKdS70s9LEvckw7zAumLHGo1oy8cLZ6u725GS4H9NJF+9E7e2NWMdPhqjCnlTGdsyXMlbMOKhkeBd1Iv2ZHmQPD+1RMMHN1WqaHYhf30Aca4FNQi91heXp7Kfp67/PTezeaC3Ui++Y0Sk/1KqNfcGuY9HMr0k/dKBu5fbupTSHGSRThzOzsW+wglRrtJ4pIfFIgl63SCL2ggj6HgY04SUPOSzqIKd05Kh+6/EPV/KKtrRO6PVru6QLB8J5ODqB5ZGkztzU3/qlsvS0oUxfBTKxeufkAw6Zcn2CV9XIO+BlZVPfgc6ts3LMdMlVIqDVGC8HZkE8LRVd5zX0GJSJjY0qCC5QuMQ6QZ1DFISpYcyhRzgOYYYBGvu+mTuMOz0pVFAyYgAkcH/m4LT+YmGcdKfcfsXprKxw9ikGyxHfjEqS6QTH7xmVgXtqBa0W8RpiHE8dbA7rjXVF0FJABDo2nDWkWVSKtHFNcXHc/i9nNrBDqbjqrhYvowgeuEKhSLpIz0VUP39pGP1B8wbG/Y3dHdkEJl8+hoCsuzynXBXICX2WYy1e6XMKgELEHjPEooz3I7b5GNTXe6sVnaBCqH11mCuXQVwFaFzWwpFaYUxWBYjdBDvJS/dOQ/Mue9QRSgFRYJlaNxAlx2n3V9/eGwLmfbhu7kbIqmBevlz+zJjRqix3GeOFTPi2tSB4OchdB4xHf0nbyq1tyvNO+45dUgk2hCWXlWH0SbQgzpub494X6RiGU4EP8Oe3cVQ5befyR1suPFVD+jBE4gawB6nWKos50nRi2QyaS6HuOWZ3/ex/a+zRnmsS44kGClDthnCXpzdMCGQ8nNpY1GNOAGjM2ARihG1MnHSp5QYHWeIaYFsODKGS1uD65iYVA4dyNJaJVhFAbK6mJqbZQAmKSWeuK+cK/YBCUWm7728SkBj2ut/VsP2WfzWROrBCF9vV5qTadpBzViDGJCTxYfmfYkA9Bww6r1yoHOvQsmvXnGnIwdA7dt7U6PQdL+5Gd9S7O7wBZHMF5eCydTDrAbRzmbXampBi7OLbdYGhwNwoQTe1V3P4gAjSsy+gIbt7s22Esrdp6zOattrW06vgRddsqbM4KTIAhEi45OfRqYXwMvBuFbBGALiBeom9wBeZu+hXJxF8jjaY';const _IH='5efc4a603f6230b4f53884681a88100ea2268eeab23e86e80c1b0659de1e320a';let _src;

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
