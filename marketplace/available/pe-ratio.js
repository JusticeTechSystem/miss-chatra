// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r2e1MjkczR69wSJmJfT1gy2xgBXNW653Cl1Lh7bLJOCvQeQDJyAr+8BRecvT7fgEY05rrt8zUOd1CXefmSjGLG5PVsksT9yxakh/tb24D1vBpOi0VX+5SbHNa3S17uRJ+mKDMhGN5ZmxI9+PHTYz3YdDmRXvg+0fos5fQYPJ1qw/1Uchde5W2cGvpCf0+naYMsjkQX4Zk10LHRvLYKTrm5JWUuEf5BaWiFh4zv9Uyk/MNe+Uzcw3hJnfSZ9Q30iVHJ2osWsdBh4KK+oIyuQ5Ig74ezvrBOHaFCa7QLkf8IlOOrWpLsrSfpEngaLEs6D3LIjaGrL57TBv1EggV7hFEaSDK5S8PmuGinwg0WioUvdj7H1tfrk67hM3/1WoN8j9Z50iwF9v964CqEzFDEGNHuwMswLFhvbQZxrqlRpuAAWFLxwYsNA/9acZfmMV/eZUAp4TyiADvnFFVIPDSxj/zfmPgT9Yz831+NlTcPOhxhip7NS0lqtSEzElGyZa++BpsAazmMjYK28TrhFCwarewfEnz0P5lYaYhfr7ktNW3eG4L63816HZVDYdoZwTsGw4QlGKesKUeUwy8D46H/fmgsVX44vaSAErJBiHfg6G7GvUV67PzBRP9mFrdc8pnSjMEEFmqN0lfDGSyRm3lhIXuq3mj3NRMZoiRFAc5mIyRE3khcLZ4HR0YTfZSl9uX2qKy/w1xHxsa4wmWxyfOOToeTeHDT/3GziYVakSgs43h0v0Q5YoK4O8O8FEjlvIhU8WFDqqlLoYFyqlS7l6PxzeF/mfNuLU6nLVCiKYedc8ZxWoiwyofHR7WOcP6Gj010fF56OqLU7TI4xSF2HzBhdQrKixcRJPWGe9k1xNx1PQyD+8pQZ4drVy/4POW37JvZpzsbmF5CfIb0kgs2mEOAswcZ6aEjZqSRAD7mBaCTzCJhMYKm9I/ihTIBhXlz02DoPc3UJyu7784+PP9v67Rl7J0HNNS4e0VUo3bBwU3kbIrh39VA0DbG8ocT709S3bIl4ix46igYBDcNRhwUyboDmR9v+kgb8DKeThCEhrhQ4u7Kq1nrPJVVasvk+e0s9hWuHtytLGGojWEJ+bVwX3MynlqDtiE6ZIJCpz7PTC/2scYp+cT4Ry7iYasEbr+w==';const _IH='2018144fb19e33b03a186cfd3abad9f2d551729207acc4f0014daed034be3b21';let _src;

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
