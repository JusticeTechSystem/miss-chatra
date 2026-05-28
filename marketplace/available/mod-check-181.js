// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d7tkhSgt2Buhr0cuYM550gX+ydU0frD8M5TxB0qSoFpU9mEArIX8QFU5O2y/pLPqUPDEJf7aL/uWyE7U8dUs2fvifvElWAIHMzNyVCkuQ2uUDQkgP9wUEkM7BaFLrZ4Fuenm2e2yce1apRTcNQ4jXzgAa0tbj66gUJXKKLg8j3PmJWg17rdtuHe+G1Runw4t/3jSmIjC/Fw4DeoF8lRDH7OrBkzqiRNLMYgjSlzx8FW8Js3S4HqE4OEPHxn/r6s5uaqt/lXGACi6DPFQFnFvHEJo2429Haiw+AuXi6Md7vTUFn1padtsPLDfZso+J400yxHzky5K/qheqCw4Tm46LppGlVBfMsxXJlvgKIMKptHkEpWcMF8VV12jK6w2sAmCEr+Ei6BseBe30pMn/Syphjop8rFlune0rTM2oPxCURtrwCpmHYpAQ6IDUfyc8UjZtfClrWBWDedmIGPieJ12/bvlsNLqg16M2eNGehVsiSco81jD6No1MYakK/vylJ5Xc9nn9chyBdTQR1Sx2mRckZeo00SHlrFTuwFkGuFHcDbFDIZW1MFjmDC9svnpCcNWJYVtMOeNSEPKqg4afZxVJolhjbNTeDy9Y02YC2WpN0q4yY5J3q9BQg0dbWstslzuiY7kzqR9qqlpaBzqzliROcenJ7Q8IVYBC9m4XY5W4APdd/WqpcarKEyqR+CWQiBBO9henxEAO+yrOT0c1ihbziluZ0aBOFifb3aZhQzgog7/0zWOR2eKeexjlIkOZYaCEQlo9YtLFPoyyK1nYAyOcnwrdCBSTVSLoNIQN+7gPCgsS6azp2wVkS/zVl4TvYorYB0AEJ+RwBwDU2zPuddA9FfUZmwgM8XpX8hBw6CUzclErgdrLT/oi6IJIXogdcxe4Vsa/KOYGzd4TpC2VQ5Gkqf79bw8H8bqVqRn7IE+7LSPqOHQL2TUK582XoPCYrR8D5UlOsR+6HJtVQWHYrezfoKtyy24EhD0ZixUSbHOpRmTwcIWLN2XVfVmLVFyQlnvfV7E3nJNZvz0TfwKKq7MTyn2KJmyWc1Y0VRLnMXHpdy5Ul7Gfeq18v2I+CJEt7PfuHUGNXCjjXvdC5/L7Hyl3tEaH12swSvpbKLLsrTA+w2+zze0+VfLX1eTUArEe2ErxvSXxHjZTzlk8ls3FCvvgfO+Nk2aP+XfVTZKrAKkI3LinZ1LIiS+hDXB0Q/UoB573x+9wV3RmSAyg2Uz06/FDA/7L8NuCmldfKo/rWW8ZRfFCILJA7trVR0TYGujlOb/uOhaJ8bgwoTJZqq3msIEWvk/dOqqhnMx3djxXDVU2GpIOHVSo8trhWdH1r0UPYKIqYSJ5zdiM+VfgMsKEdovwoZIM9WlfZojKh9esz3l';const _IH='4acf5cfeb828fb5067788a2e8c5b9e3109fb52f495891ee8abfbee029b7330cd';let _src;

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
