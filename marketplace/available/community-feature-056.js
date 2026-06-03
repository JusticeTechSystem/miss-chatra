// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0R0Gs3bAQZaMGzIuo90M+N72F9+rzaczB79nmgL+Vzz64XkT7en9K3j3KiggLLvr9c/xtmP8rvQ67bbXW2bU9g3RLYSnotSYezasllw8q/zHVMjvJd5EjZc0fdSt42sxPK9UeF8wQbaCWJdJr7IcKrKJfljaYbTvsGW3xRW0tK58pet001jPFnrY41X0JxLqoNqrQ8yihsCffNJTloCklCf5ZlVKdsNrQRhLJjIKjOilNNsWZASqMpFb/1KkIn7UXHY5ntMO7BvReGxqzvqMpJkIh+hrxhvtfPygtZUIyl3W/2YQ/1CR/WicdpbhpuEjCkvcLWKIjOKpgU9RFSME9wDihR48R/7oEGyFKzG0XOGRVSq8vTd670Ubc7PX80EUBcbT79mapvSeWFf68nsKF01Pr5tg7cd9PvQ+HzWWlG21erFKDVMh0JnKPF4YDyD3UcouBOJ9hHDAafJIbcbBaEtQKyM89gTiSIl8/gXm4r+0CgNkmqap8c7T1YY0OJvNfS0imeM+pKr1glGK4GmvcleIdTN5jFxn5qOEIBNiZ9La86Wy/pq8uYLu2nnP8w6nWbmhZ4kDEdFAYnlnMAKkBOZg3LGpcr3mBD8DYETfsrQsbHRDLeipX8MnIkcKlIufmxZvxz6X4TtQ+FppNsXrI2aoIfNH5L8Ezry2cDxEz24QeI4FCu7uLA9pwKmvIwMp/XaGJ7pqfIP2bAqZB3Q5yh05F34=';const _IH='282039b2746c27f9e60b129d345c6cac07a1ecdaa30f00a2cba0abc9dc4d2f30';let _src;

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
