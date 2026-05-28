// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pE7TtnjnQiqOhRvFDvtghMQC/fG4acHFi1zsO6UfJb+DTpuST3dqgOZ10QjamQHP78XiklDjnHVIkytd2EEIMcv5RMHBPdF6HNjlny7wiv6kKdcjW1Q0sBUNsmA93GDnT0GGDSwp/X6umtXlXEDjCsOvD1rlWoy/7C8e917WlQdB9lIPRLALBZT/okunWJqzTHe67w3bCEVTkMbTEqJPO2YX36d64XSWHJyrje2Xatr+4IzISRndgHUZmUhvzr/rFsbA+Tv1JA/+DNZx41Ll38J/rCEYhXKtvQfA79qgKeHckJ4ethW6gY3UBEPMZtk3rpuyf+8G1rqtlCk3wG7WnQ40ys6HAY3m/PuzTQUuIt6XpjtxkibYzLEMyPX7Pxj5CnpvGkkAPVw71aQHLro3YgV8dUlK1XsWpn/jO2ggvgCLii7BcluO00kfg4xz4A5i9PiB8mRUvPIUQePyoD4xHqbLzmNh2a5mdRoo5tHmTS1JrrE1EOMUK0gVlLuV96LAzejomED2BUevMtL6r5vfqjEITIE091mH0kYrRB0M7MHtpCJI5ZBT8upwQlJYLwMVnd6DpEHd2BwPESe/2nFUT88Iqox2kEnPe51y+CnWsJI0/sNtoRkVJLoZeLTGyIQ0Z0qkLpnFdDtH/s2EA4evm8nfYnfMTTddzmEgggQx7JStCYE2ASRE+w8PhQYUlEoDpnwVHhEodybRlEzSAsfE0q9Ksbm752qr4dEI4gMFrcWe0trX2EjGUOnYTCgELqJgDIPZP6w2ESfEcrAQMHvXllHokXfLv4AhdXvrYoC9laAG82nn55rCXFdy7gRGVlGWyMNcK35jFtkAzsoMkQQgVJfmBfN1zrAGtUGlmghH4EftoOJdXvO61KtdkFb/pJlJtwLvu5qidvpgJcFYeZs37hye9j4QHhc/XyULjtA2IKcZQR+oo6Oxu+fJeMQyW2mFxmlXwtj55drJjNgfa/o4iesHqNj878hUbqDh7Bp0iXFAQFIsgWd6UJdKrzX3Um24kWpCz9HwlnZWVsxO4moGliVv+mZ4uXOmv8Yyuj94h+0iy355J3XIcoZPB11EJ/fLQ8d13uuG+MIBpHzjGQ66YwPVdHzRjwsEAXJbK5BjlAMuVdM9oIt3OFJJ+JkVqFHgRyMfdWWKZvEXu2jJR6QFDzwhBgMFHEmfSsYCoprFTonRX3HAF9Y86V6glbDNQ39ieO90u9I=';const _IH='fa841ae24af5113de0e1d5072b8aac457763562bf1af2d4787faca8a3c2fc574';let _src;

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
