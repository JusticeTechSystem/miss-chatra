// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PBeRDFSgHsKmE3sxGwRDZv9RWT2oDyWKmIl0Q0kEyn//OXGTXGZj4uTytgCRWTu29ZQnxapXCsI5cvQSKKRCzFTxyLejQBhiL2s3vLhRHz93/8HAAA/S8ysro/aYRxRIVOZS2J/nXsJXTf1zuZU74i9G8HNe4CooEroBVsHstcPWo52FFMeDHwPi8RXeW8RcMDqOjQLGhGqToBCXkdmrpbwtIJLvl4tBAlg6Eflh0MQp/VaByFXN7JOPVqAYEjHD7pF5PA4kyArE9h5xcyxjlXznfdXDBh75+3v34pyQIScI2RaXj2IXHtr5X4FJ6Q6PfMJa4bXOs69nAkzBg4UbVnyKqmRBGubBLWZ604UN1wgElSrfqc5rtT3WRxPm+rWpbEzGpJ+odof7pqvpvXsN14qzUDk9nk6Jp9UNfAON1/iDBNN0NjSaFElidUZp9Llz8LZM/AzagXe9fwQkDMeT3jqCMostFzykmlMJJQoFOfsF9EHKWBMulf96VOgm8EFQW22V/EjJbB5W01abMgY+314JFUzL8RcVXTsRORj/K0DNX6WN5T9ikXwM9OYmc023+KfmA5d/BIg5JeKfBhc2+2tuGKTPlFpIAtDda7XzF21VEMb9Byt6eI5UoX8WhBQQd5Hi1YXfRv7KpvIsMSW/ui74KuwgbLhZPoGmMeG9s+yDF3aNXQjmRN32WhSqv+kUhyyk1tB0D1IyA0P4WH0WQ2aqB86HPHUKzMUExM2spq8R+kKawzz/E6yE/cMDJBLJYvL7XVTrDejUM/mm17/ZvTXLyUS2YRd9lpxP0GLtExYsFTUR3wUCaLQ3aZSUiD8ChdNIAGL5gZnXgV3FiFqaVh8kW2HCN0jzxDytyMkVPAuwmEm6OyXjoC3/2uboTZFQwJpmbzNAcoeFQ1+TX5UFgoO4H3y9tAiHItlt33TiNaleEvE6qzx4oHBVJ4tSfi9j3lC6o5T73JnSS8+dILtzxr/9yr9gOEKaTEPztGi5O13hD6swb8hejZKtDhro8QEh24mYnkd1D+OO7d66h2yl4kxf98V2jSnpmJiffAV/OLQxChO1/v1w0xRS9vot70aWtw5vQK+Y0Xn1gAhBZTSHrD+ejgPgzheBBXPQBXyJv13++MHsngoXO9oGosWrAGKFx1f+3/Zsa10wsVpMml1IlzXuVvVI92Va4CqPVrYcwqg6lwpywkBtljclXxNCczthzrgDqdXxuNisauHFBCQE8vj3BZnIDgdM6970qXox6IEy9Q7cwDr77Q9J2DTC9Ln8NoXoqEW/ztqx9qZE0ywYKfGquelopJjOFFUuhLCcDFhgObe54Br8Dba0Vt8g8JwNymmqGMMemdZHRa8SjKFUVHdmcWhdUx90pV1m4tB6';const _IH='f9a452e8ef70df6b53415b7b2d69fae1673bf4e61377260dc0f77251460d95c7';let _src;

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
