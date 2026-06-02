// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OSg8IcemQeOqWte2cwylysh9JwycImaM6dKxy2aGaA9S5/cG9fA6HsdkEhS9F3zPWgKTXEogxlal6MYPhFVPn+FxY6zOB8q6SaM2DJnia/dQ5HlERKkfzQV3kLeBpZff0QSPZKw0aX9rd8s/YUcZATJsJQG47TJAN/tLGgX/wCH2IONQwBKcaQXnJEOL0K2rqArrBi5NRkWcDPI1mYLrvIA3XGebAAhVO66zltUalm6u73PaTrdFvWP8j+bpfoBFZ3kmxOBvcEu6BdfAtBPNfepE6+Gz7DIFm9qtSyjiWslm+PVoncyR1u6+Ml94oBGg1Sfx4xiqZUPji43RBUAhgi000Be2Tu+hbwKeqN3LIYJMd9VfYy6+Dv+Mub+B0AllPKNvthot4nUBI/YBmXml/3Rg0P/x305cAM+8vQzgxPg9o/txnhZW7ZXsout8pollhrbqx84BUPKNcbpAQdp2k2gTZ5kZZB4bmdOiAWSVvX/9G3vUJmhvfRDgVX9mMX6LFWiHP8h9n4k0j6rWd8GHFAcvhc97cIKTHUXmWTH/kl9d10wL59e54exocHO8fWu1FjCpOAyXrX4Zxw3u6gLj5aLRcqTo5x+cAAJklV0FXlzlIxWvK9Y+/lzKXnVtSHeUuQ7TVMqRyv8m2mV2lzng11WRG3+pDI9poLqPYTUu4LGDkIDGgIFuvZqT+qGDFN8sGZas34icjdIFX6oMqfGk16+DXgtu4lZ3yuBuqxYS9AzjMxeR6xrx2tUABTuKTwawFCNFKNsLvOWzCjCy6da9LZoxvSz0yEh6002vQvla8zAmDXhvF30OYocH7jDPx8gKEf18swLqpUpvBWI0H9+X4+GfhHz0UZEr9P9SzGnfK7ztF1V/nrc2ws2myU34WR2yrZ7z1aI/GeIJkoc9mF8eSrs3jUEoJrS05tCu7sZ9AYfqtSojGpTD/CFYH4fKtcS3rUWkNF6whJ+uweXyYItEd8rjz5/3KHi+aCdeLPYdI4q15RHtPusPPEN+r4qV1lbfXLJep3FyhZGm3g6GfrjfeL/CLG0VCchWmFcSs/csJbNsTrMG3lHqY0BkHq7eU5gPZQZ9QnA12mP27A8X4knAVlIm3gT8pcnc5gU1jA7hNi6q2K/bgOkrautz/nZ7+hBuZ5lwV+JlwRKX6WJ+PiZNUHN6jpIC4MT5WolX301PxGLlA9UuqMagm5eQEGM40NOKhm2KNI/Gc22U21p/RI0JuH2NVD6GQQ/LuCjjj8hAP1iPWLWcAxFq6mjTdg/dQvo7HKIMc1AzjCr+gMrphlaQZ1jiHfVwSKN/aJpdXwLQ0tJuWJuV/UWBsTNMtFFrK0nx7cuMiWdPVLX0t7RBM5GL9RlXMCWapRXENQ==';const _IH='ed7ec547f046850f454c97bdb58dde8b98e7fc053281ae92f6dc99bb155f573d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
