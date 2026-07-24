// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1k2Cak7Jf3P5gQuLp+LknFHeZRmDEHBlXbHPlbkopDP0idmABTQ/35Q4AQVJ/UyQfu0YWqtoQWNfT86NAnCVhIOaF2Ifeggwn+WNI8tIgmgIpCKEVpZ0x4DPuao1F3Jfwz0VCH4z4aYJ9pflmF0xfA6ZkrwInIMDpyKUZG2RCJYX5VtfZLJLXAQHoyA5z4z1rwYp5BeQz9Mt8QCYDZsyUb1IulzWwaiuVgWkEzC20TCgfh7nnVHtWYvw1Nt7+KLrj7H6yBHJ98E8Hpn8RMozPTaqSAMSyrQc1SzhOc8qQfOzmPYtOcW2XNab4wTd08EAOON/GHCjXkd+wT40zQ4I3/zLKFa6bX99APDabIqlb1BvXwz6p9dWmyfJTM8qk+5XkgaUvENBNws8ydWjHxoqVGTzcqy0RZ00Wy+mDzLa7+khciHBsPEhzcuJQa2y3FM4CUyaNuP+ewaU3QFBy0VxnCecB89LHZ9eRvj6iCTk+dOTDftN1MPOdQGzWR2kZi8uZ0u2D2ZGapjd+KNBvoJZZaHScbECdbOYoAw30hFVRgFpuh9pi5L9QH2T6hkwe0CGZ1Kgy9Sot+EJewSu+YH6JIfBzyRSCwQP4gatPfY0Hdd63Y3viHKiZlaRrXdHhPzkcq/NoWJfOL9Fwak6f28l63joNXl9g8Ld3UP16FTlKL2v82f3287z2fozhWC/hsxhLXxZAOL/apQ6Jz7iRfGNBvONa1Xl9hmBXfp63etp50ZL7+VtGn/00UpIJ0JnIcQGgAZeC9t6u9C6x5AAmaS1DrYUAIJZGgzycCKZe++rBdASMO3grHDghanz2sA5BBvD19PYFroLUk0XczLxhYAfilJco9S7gNY85AHWG4B7R9zm0GEJVaiZMM2tf0IT995pVXSmjqIG8A5QYF2ZlDRu8ibEqmKkdom9wS1dGs24xUTtf+uLZmHZkyAHrJ0fuoi+u3C0DFplh4FOkbiYHvnVwdEPqkbWN3M2KnjnOoJ844dywyHFylu4u8Y/aKNc5LUwSfWZJr+Ht5pDkY67L5xjlcVultGFJD6kFYQund1XpTrBZ8j/Nz3tk+MexKpt7aMHip61qrARTASAfO+iQ5dRz1pSEEyJ0mVHWFQ+ZmhhK+7oxK81+DzhSqmpdHvmNFeNCtTB9IGxCbdPtz3ATSHnu3AuyFWMbEnjLTgRgVjftp4j1FpPnhew1fz3rRn2SxBKilAB0K1SP7ps=';const _IH='85f141839c4dda3588f52222b554ab1d7b778424d573a7b8ec8820d27730b8d1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
