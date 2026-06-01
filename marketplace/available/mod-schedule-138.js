// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4UoNTbopsHlODqFoUdYijLcQypIIfT3GDGLzU7vBr0gIomM+AcFXSYJXlxSzooJeiKhU4qfeTb2pPDDr9SUFNCAq8S5goqfMwtQsa4ZVE3rP6FHAg/h6sgzAA1KiHbJYvYPF+J6TOQsnX2teaMPx1JULeKJVbMnlhwhKJRDJSdm52JssC0xVwUxz2CLCfomYymnrKoliP/DtHeWOEHjMYK465alEnbpiY3bbafBGBB71WFUS0K5jXq7KptgEO78d7VugOQSmQ5ncJU4azZRBQB71xe4PrxLECwwdBMV5r1nzOtgeJg/dH0eeIAtBw4wUoJvqpggaVvhN0N0KHeEInBe5BfRWCG8I0FNbzZbcVEpK0DC4vjFIqjR2Cf6AbNpJKSaUeG6fH29mWqtc+O/dLszq+f9sSnrOQtVe1aR2uyihUoOVkAtzFbEWpfVOSDdny5iIo31U0F4HgN5EjLjD2IObIIdRON0wMkIzBJ1wZuITjGimDqureM99GXu+euwcTSFASmzXIN3uFcHEhAzTVLrXWqFYqmXe/8xSkjcAGPTumPKJ2/WAH1lVTzvDFPkPSrzf+bW+If+7c/2A99gjwJCaY4Z7wPCDMh/K+v+phj96AtWVNN7yoSlIAa7cVGZeEcnbcCxspTpvexBdJTTB9w4ADSNL22jxR/ZdxaHJONlpV2IPq/hw95SIOobyGtr9SQ9KfegVimIWhkq6MWnxur23h5FtU02Q42bWGSOOSPjJoZLtdHs+gxhWop1uAWHooRA19OSInlnJxUIqijJiLk1MgT1Wn9FRlRvuR7LmzttA3ZlFyZnZuLExjYHQO8IdoqRJiQwTWWza2Lxtve1z21sTzmgomAkXD8e1NTzDfCExh31YR5fsVIW95kKkUNkCDK2m2nvWrMrbSNeSwk5uq4ga2uLFM6sn88qkhDwDBX+tVXQ+YKl4jFHO93qeCpOEEEJBlUrRGU894k7B+a1L/0aRx01GSnpfidc1/dZVklGGPyBhUhs0j97aH7U0idn9lzd8qeC4/jNqopYmP+woPMcZhlQTLawPyFrsYoKdirUgg+moBApCkcMkmQ85lsVFsZEmEF/3SnksHx3uv752GNgZVOv9qY0Uv5L3WbxvEKJu0LQ3hyheNSJkAo9Tdd8a51809OMDjM6enQID1rY52j7hx1Pc7AOf/6EP2EDHwtGkXJN01xa+fBXqhi+o3exTyXtJaIbGFLGhwg2zMf8KY6yNC1sKXLQwqmHgldTuLGKawTbXyUCv/KS2QSfEjVpP4NpQNhNs/K5IV5rs8yqs1KD14Rz1ikcS2rILhKhgS5IEO4tC4XFnUty1lI48f1j7L0SyKN2cK0F2+TCpCuO6tGR1MXHrQl1i2CLagIQfY2JACJIaBcXCPib6InpJ7tt1sH+ctCg7OgWB1ShDA==';const _IH='7125ab284cf859651009b3b657096ff86896decc95dced7258900d896badb42b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
