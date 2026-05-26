// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RNOgZalLLejYRpk8HdloZknYAxL9BEY0VnEsW0W4uU8IxYt0K/lUuQEQ+26spNkvyjXLiCO/sWoYGP3VAI+Vjvs9lYJqB1apobjwf1jV04Sxo2xygPfoVJ2kTYQ1x15N9XGqT5P/V8Kxi+6DmGVMzFqERLyWO+ZPZPIR4xXXWYxpR7VdKsMmdYghLPxQuyv6GK6LrOX0j7XGDJCkeCbl8i7p5T64IXzyA1YUJTYWY7LsQj4YAh84TVppJZ+05pw/UQbVaLhHHnh8vfA2J5X1EZpyhkt8YUgvUaYLwWuD+BtbodK5mJ8ZoZkBh9NsvRsb3Su07957gVhTa7ZZIx9gcbZKXwW+ZKMArLrsXFyaBywWmt6PUZfuXL0UVJ4QGdFOd0jg42L1oVaRIxqCBNjgr1MA78gxhYaLEyiq08xexF0YDK3iOFaGRPxXXMETga3a7dJ9fggo8eCp4//NQpxwhjoSl8WtMJU2fGNJVM+OMMfONB8qxImXDjc0FhaokNvc5Tw3yj+VHR2Xda+72jJg3Z56HJE7QPzCoXss0CSoWGzKCJoz8SUbdWN/LZpLkEqUjPrOmnD9LYStlJd2GpjTjwKHwDO3L/HWmkzwynaBsm+J5kwQ07KSjUDdQcr5O6vVq1aZBQ1vJdT8ukWtKYSADVIScGvoSUXnriYWD+xDFxA6hFRRxUF6hZGfNx/NOd23S3EeU4+VMQhegciiRfQLUYVPXH8G+hSDGWV3qqblM0aZl7dmLIPaQmCewO/SXTjBMZi97auU1FpoeKJhaquUp8/6LJih/mjz6A5CtM6oENKlNTTCB6NYNrQH+ph8rGB2pGSRwT8vOKjB9jP0fG8ysxupULxlWZWBsJRDG0CUltDYQA6OtqltTHaRPQU8VhVo4YuuS63l0O5wkSLa+mmJRebJsi19Cnfkrz5+/rZXhn9S5KdxfeH4KiIPvadVrbcJHQinoxZfLLM0ym4KeKQkqRwpx7hrnRUKUNpr76VhG5dOMpxarimPdZVQnIRVJaeK1DNn/JWgHTWvpX4d0PPHUKL7hNmjNRTUZz45XxDltcRtGOtGy63RljJy+BxIOiHIXTertcrJubNyoCbImcq/cONmb2xAr2Mp/EhJeA08dYZrYXlxOLo+/S+NHIbD8YlkenRxrTbthClp5LZqFpb1NAZb1chsjVkTz0InfXktXMDwR9z9unDLcclaDxMRQ6OyHzVap+kfY1bMWn5ohrs5cT+L6Zt3AW+Xx2HX51gnckegXALP+HhbEAk64w9Gc/klhBCPFPsCI66J18d/YR6IsxXEvjxHpyLGIILBMGDybnJR9JA=';const _IH='8dbaf7890b6893ca949e31694e10d897a4d33e933db9e6845b745c989936e464';let _src;

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
