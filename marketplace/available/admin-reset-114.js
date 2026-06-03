// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='16YohWzNCBs9CameOZanDNWx1BXEIkey6d9p2JkWNurUdPa9leSj4xMc6bR3nJhsd6R+TSNZHw8TE1Avj3vsUtXw5H10IDwUPcRFcdCZzcJA9KZLWagI0DPw1VpemoH3boBoOMxJbl8h2DjVoKPjLoPjyATJV0wNt/kjh5eYvVRc87buz1nPoFzhFEUtJsRQnMXgee4T6ps+pae+pD+oyIy5tWAkVKcxeeMsv6pUhFu5u8ShiXihP+lUOfF6P5VxDmaByfBksUGdknO1o7DOPVRyj5HiyZMOKR26K97/8yMoFxvxjxDECd7o74/O3cl9u37rUdE6lj4kGQDA2hKoXzsB/6fnapZRHl7cd6A5cG8SVR2YSf3RZvTW/YVsf9mAa+lIQMkyFbu/s6HUxbHrop4r9ly7EyjX/oRar3kV3MvC8Rzg388jkcMj9+9b1YmuvELjKXGFmuRX3YRl7Nw3kOfuRJ8vlph9lRtKx/39Fh2Oe+qoFKMFovL/PrD41LzRPHW31ju/fIcl3LO4tiHyDY/o9DkmCdBum5lzFbJNrNRCcLljkpEYUcxUzeq7O+8b3StarI0zP0JcIh9TR6EyihFImyoZ9DF90TnVPGkMEfWlZ4gTNWvIp/f16oxfCwV4cSmlm751ko1OCMc5Qrp+aNPrYNntnAjbhaDUmX1dDeLyC7RE4ZJdQU1dknTE0Dg681jchv0sKRjbRqqSouq5yS7WzJDK6aMfQVM8m28sir5Izn92woOK0HX3O+fajxNrvjjr1SMe7TYYACpvDkRiDDvP+o5DQ2m+wGwUBtz1DM0omsLIuzoIdokmLc8n+QIRq4QRnB3nMm/m6dDFu9JHCi0lmCaoeYdzOLRIlvOLzLmaFT0Bq943epNyCjYucvPl/mlBSSuNROZoZFDwoqLkQ2ijxBa9DH5wMGu/uVOvRxudLygcpJA9MFq1KCmHnCG9jBwTd0yodkMI97bXGoeNUksNp4IpkfAoUmQUNwxzkaruh9nTByOeT4l8';const _IH='438390512463a9c97d27f4ae57f4b0b6502ce93d33dc557c402e1235df7543fa';let _src;

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
