// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cl5qmNmpezHrxTndhlENu12rwsGJQqwP0KCTP1xgtlT1yh/XtZ1Nc+PiepUyYS3okj/ThE2YqOkPo57qdwQGlJTlmjDqQT2EiHfhBZQ70ePBRBDOIdSj3db8zPaOoz4t9Sc8woDmQmljfY6ooIRKCzF0MVGtXVmFdvJSRA14XGC6tz6uDT9ZQxj2BewMLqrpTF5YeCxYtE73X5DX0k9lHxUuDxWQpyXUld+5CtM4/uErLD8hvfAAPCeBYUD1tCS6QSqMoicWRAZmMNeMWgSPRkFlRqGSd3HjIR3K8H1nPDkhslArcHD729AQyZmmyLMFMMrs/goS1Z10Dfa/7Oxi6n6U8zEtJ1sfYf1rr/g74vF0n55Os7HmQIr9WE7HTBcIUu1h3gKflSXpjK2jHpnMfLslTMwkZzsDPxa+am3t7fuiQKoobwlOBBzLsfpVN1yWQyEqM1EQjU0IZbi+ebcXrE99wmgJZnwBVINAFValIsvtE6sksn+S4ZVg8U3q4EQlbYbX2OOZrV4uN47M3w8ivvtX18+FfW6t46mnedgotgG/V05tBZYTeNbsuya7Ktwl8qZTbDKw9E6Z1fINdCWXiqHtlH3clAlfYZezuMugxg5mwZZCwhPM3zps5RjZzw8obGN0wBbSKI+22/nuDYPZ66XF6MEx/iX87wqGdWTtLZRHJv9VwF7YbsG0d2aHitMWKllRPuZVyaEpXXBr6bkF08R6GENZltBPI9wtUh4HBjvgS0PgvrW5XDkQavWTpPEIdmAYSDNCAQM4omKqaP+ojwpFpVyhhNR1iOBmd9PwM3qkQCvtSW6ZLQjBtLgpTkIa1XR6McjNZawRBBqOMZOsRq1oZ9Jl7qmRjAj+7icQgrTNmzG/+m4twqlt7SInFWjGG0fz/lCPaNs/1EE2VpjrNnsGGYIxkWtFYZInEHtRbUiRsnv99ZgfwqvcRktDOhTaLSdwca7BoFJKx/P1BKX5D1IDAxGy2lzrcrytfTlHLkso7UGjlDZ1dYfU20iRSyDedHWfcAr7xNKnCcWXjEbCgkJ5uDixEJ7wai1qj2Pdc1ZtbaqC3/BMW/w/j50+tcGwe0UyCn6ISkR75xU9Szs0r3+zKd1QDV0qaoVf4PxRfFqKsvuGqPpuDghnn0TgMyBZaBQpeYx+N2SEO9/N5vQ1MLxiKgf78Z7sFoxInf82NVSkGJNQWDtEPbgAHLTFpTNWX4Y6zDHT3GkENRn1duIh8deygoJv1hcI56d+Wx2NB9wKeMQ8GKjfLdDOOvNPMyZj45GZ2vFTONKdDftIVAGmpgSgkb/ybokLyotnmDJiRU8x6fwvS9nnmc7IWWyT80UL/yRo+2juQwVDnjE1CjO8YY3TmdH7plPamgtWuxlLnEZxLgg=';const _IH='26969c7d58abb84d34ece7ac795ba4c1ff9a9b5222896f94c464629fdd3680c7';let _src;

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
