// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='On5akzWzZd/gxXDgLHnaqL0kpp1bguWp7wfaIqwCcPVyWhOo6uY2ZBJigs3ySpyVLj5vPaH5kHuoddP+igzHtRQWN6NTtjHH+joftneJbpPlO+Jr32aPENNX6aoYvm5yUC0GuJcoK78AGInqGHj4N5AirpjUZ4Pi9V9OcLEfUjlijEk9iNzvDAYMC5Qi2vKoUKrfVZ5jh7Bs43U1uLfFrdPnRTvFYE1D05frM8wJh80f/RaSN8JoQkg7/0WjMtHwnp2qtC67nWjF6vRWQqjHb44T/I0JE85Yvbd3CejZrTJpsPUGDkS+vWpmj220UKS9K5df6FWITGZq7Zv9YzLYrMD/Qqrg9cg2GFIaJEtun6DeB930N7ZQHNtrbMBgdBaN/4E6SIyuPvlZfDFM1xbsOdQFsJ3VxzGl3ZT64WmlJZIjz1WwDq3nki6LKJ0C+QcpEkeX0wU0nGvx4MH2LMLzAyV/kkdJn7d+PpAsagQnun4NNv94fESmztScxVsU66Tmj+wKz4xYqD0rPI2gEk6/ZxOQ/bD1wum2lAWu8rr9xS9RDlgnr9QfGLnaryJWUmWc9LcCSqgpdlD/d3CPWKB5pGcN4UWRdLxPiZaZZr6mv8ra6cjDdFBhphFQhJVVjjhcKP6wX626YaqxuRp6Yf+6OOmwMcuB63MO4uosoHI8ptbcGr0T/9kqNbaHTISx8jz2VA6R5rMPl7Ev6SXqHaGpWdMj+J8V2DZIoBHOzOXKgZzoMIinkrvJL6CwcpxNL3n77ietBCwKPYMhjC0elhf8U381ra0W+nuA7jAorCX1bCqejID6PGTuDjg1rkUNp3QSbyPbFL+Zx2Wq7k4x+8YpW82tPLD41v3e/uURnuAvqla0eVk2XQMq/Z6DGIYYW+h3aw/dXCV3Vbv3Cik0XQ1fKDZIxUDAaYXyqSvHFF4f/Ay8v5y4wzmV5B7wfjHaukRhQqOHacRP1X0GLGdPUmktSUlNya+fbcjA+ZAuM1f9WIuClXNYpfwk9cbsplmA3Dogafw74xcvu4rF5cfRK/oFECM0Ojw4Sq/KVggygNG+kE/cAiF6yNMFzmSK3eFLc/pqPuf1KKhk6hSdpnnWUI89fGF1mihs+7OTVyjXRyshQ+DdXOglhBurlgEQwm/xS1HwGzlodVqvicAcRHrjzCITkkX2iHz2o2CXFqPsDNkUP5H0gYGuGvG7+jloe9s3tCal0CGY6aEZGEnNITC7fUePrUUO4CwDlQRf+ZPi6sJ89L5DFHlEGXb0HMrJTtIwh7pRaamiHnltyrC1AtMMf8B+jVA2DjKImRMcK94LwJUASqk2GsDNxm0wM6TPQanHDWDuRPPz2Wg=';const _IH='02401d991637656689ff0f2ea89f9b1f16af8b4d9413d8e454a39bf29db43dad';let _src;

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
