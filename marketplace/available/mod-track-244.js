// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TCAyot0Oyzys4dxYSO9v9kI94IiFwnuPQRqjAlzx10OVov28VXCa4iybCKTa9zo+y1EbSrbR5A5FmtBEltbj+oSiAe2BZBMmMqdoH9tUhU4bUmS3nxXYMFTqI4hHEYfCt6KppqLPn+kA82W7BKwG+UPxHbYz7NBD+JuxfUZFZeMsCnoVkbDM1htcUIwYsDXwtUyZt4TiN1QkhG465Gqaj0FGYp665Rc5bZhk89keREkmkoU9Bn1abaz4TJ/HgJRCLyzEamEoy8yZ7Lg0f8LFM/r8eGwoB5tPzU+RF7tIl3kNzgsC5E8rrzLScZhuLCh5CPZocrY1Ix5yoCpN1+ITKqc+1e1vk4nGOeydbbqkiesY8T67cWndAXoh/X+KOrUM3VqY11KJBrnQZFs2qq4w5KixOsIY/3hrx+ja5DOXhSXoBPI4U3nux2ZX4X1MQdHA43NkUK8MXRX22+IDUWbds+hsaZFZERwos8yBqWenKsxajBKdV1tA3rDR1s9VMzkweZ50Y7O30JAouMnIKleRpXFETVDPzHXmBEzuzUGChIZUQFoJiCXVyS5tP9Hvd4Oji3cBjYC7Jy0hg2tzNOGrKhTtNlSCvEhvQxrFsoSVlZtBGsKuLpG7PGbuTEH5AUGIRIgx9e7R5Z+XtCK2VzZ17JySGoX2Y8O8Rplt+e29ra3Re8hcDEHppFPc3eVs6k+txW397TVMZBzXdCOblVIeiiY1r9ajp8GJucoMw/O4nZ+2+Gor10sUBWK74Av61mfhClVIbKlvDKgcTc6d2NXxjC2U2h09TbFhrHNmgsQ0nOwYqv+m7OT2fb1M1CA0u0D36tYbmWKYfRb9i1E4Zp3+Ewij/2K+EKKlrhZ390HIH6n4vJQ+tZ+ZiuyaYBG8oIM97np//UMBR6iqaeVi3PG4BQGb3I/Ae+5BF/uvEacaDtPa8m1x5lpl9utQoPqTWkesgUxoe/xDAKay4msuNyTdLDi0yIa+BMdMK6Fha36wgKGbcZTnIfwYrGaMqycjV3GDqPjp4ma8SjVfOXINgtAjU1Wxivnlz8FeTulsgRmsRFPTh5wD7rpH/HIcoazoBHNtpLx3uO/nMLru7U2mFIBeYc0tQREOrxUsN9lfkGNqW6tbJJD5ewiToEPPDZrxn2sufN/aEzwK2QiS9qvpccvjdzs97go8GKVlMKKw53rszAmeNHSKZBZCIXoBRU05w6wBtcMi4mSwhMAPaHBB3lZ6UXgAzpsKmmff5oolfXcVg5UI7vReY4dWlXdCjwzGxuqtKiU0Mx01ntKv76QI/a6UvpwZ2/baGOtNz3dvaKPeYOxjvICXfip66IqTNd/LTuPHPwqD8S3XqvindX89BLHGFbpRGSeyA1G3HBwDNgA6';const _IH='c0326b4c27d53b922abf6b01aa87fbb550841082890ca8877b506e7d3b0c7028';let _src;

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
