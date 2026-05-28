// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCyCZEFcVRrmoqrfUlZ7lYRqCz9FqttiX2GYWE+t9k9HLxNlp28yNfW5afanrHm3LbEyEV5Sb3G8qhNcj1i8sVZr9jdHWc24oh5Cj9sJbzHOsmM7JywolJdw1KNuTQxbzmm91NmjIIl2bXUruwpeQ5tppqpXobLNAX6vEBXUlUqausSMkTKifeNcd33hZhm2DjvERO8X1q2dxJsOzKmbP0lYkwDst/XZw5F6FCHzCzY/c3cBaE+sBDJN5u7miQXn1JSpyflRT7XKm9cfBMvhFFKtsuv2iBU2eSmM6rfTAXStYkrsW3OS9eylg3KhDK0HZiKxEnR6erE637wy5N10PA7PTXGvc7zZb4HaVTcnKmcdh7VnAyH47pAOXIphH8HI5SNgUdRFQRwThAVTEjH/pfAfFgQHTggEk3RHAKL5SgvFoRrFjYsxvlq1BHLRqFdT2BvjTI/Dm0wbEZxkyqeP91V9ZSXhkOn9IDbuSt6ghpT9vWtvS5AXW9SK8B0advN/ibNjJKw4XBuSm8TWTseMq1zT6n25/6o8NfPZs2Kg1r8uFdC3pvWew1lJlxXeWCGTmWyZ1vYlO7tVFnSHTWWLVdnqgc/8xU2JOB2nT8BHhzGIJhu4mwnyZXyI3SLHcp3vwHCl0s4MOSvKH2v+2PTLM266JD/wXZTsmUuZw5tos/Y4VldUfNpZT7PQkpZIyqyurXtsdGIeMVZZS4OzkwcSYzEY8NOXPqSOqbe6FJY2bAr4XyH+fydTO6Jg9XqiscpFYljl6NS+UyO9ZboCGopcHzd4/XhcA8+tCPIPpuLPKht7OVNojoJLRGt0rz9rPcBbbYvCLbOEwnBqw8MRNauFVaiGMqkK5QHRpc+3++Sjwc8pkniQ2WDoCg6yxgrXuTAYrlCfpGDgSi7Wp/xVkzA6L3PacbmnngdvIfJR60DikjF7vX6zASun0ljI+WxY8IvC+NCcbWBFLSzmpKBpvmkauR3QIVkFh7tQmbj/HLDJJsLvOOcM0N3Rapg5qg3I8KoJiqdOj/zMC4m3SqdO7e8/WCdCpnBb9/HgaNkV02Z2adwceV0bqcVl8PMZR/vBPTwqBrloR9lKKxvDCmVP1Sn3xURhLzbLEoDriJ5YBw7r485mPLnTWvvxbh5dBYb2HA+sIJWRR1OdO00fGfM6dwRK3zX1NVixhHiYyaGiCgYkrPBAvHEv2PUhNYukYxpKQYqd0Lx4vC8Whoi1yT+QnEeUJhLtS75TB0yo2jBgoV/SMLoyKgFpK+wiXQtWG924m9CyO02y3rIeg7Ln8uSQkn1hpvNnpgll7dPML/axKFVBYxQ7FRUgvB5JlIDDyeu6v59eCO2ktyXT2t10+uvA/0YeYDR1mZ6PVVoqswlzXpn00PhOioJBdFACUw==';const _IH='83aea297db1e0b195cafca4185ccf4ae004cd7534a50d06b447a0d26c521aae6';let _src;

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
