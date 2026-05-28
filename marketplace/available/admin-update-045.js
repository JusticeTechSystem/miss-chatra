// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pNH2rJvU22afj3SF9EV/Y7SYYrXUDhBGuAvBNr6mqlPSnBpYRN0GwoD/vlsYED+tlpUJcr5ZoVNp5f0iz5yWJgT2dqvnQ9DRSVjVT3YV0cIlSpFWADcAN4Qs6GxYM930Jxa9juJ3iwJCTModyY0XOPKlwBvlVyV727NvcEki5VxsznfRrYtSvlLaph9sj1ud5KS+r08E7alVOrREJuszdfhmEs/AxksYpXxgvfFuv+bLMwVSGcJ4CvIAznia9hb24+ntR/yfivi8AJkfs3W+BLL8cYNlH8P+D2JAdd88Rjbja+BBKJuZ2Yoqern9PM0myX7WHUKCQKdRvbv6llaGkTnkZ1W31pQDq6fcp5K6+Up/ctdXYsQpJH18JRK9x5t2ffLqmqpyQJk5ky/fVcB/ZvKkBbd0CO6wiFLaGec6UPJUZ84d+v3NC+y9wJmDQfvK+3ASlc0h+dGrXHV53EjzinFsILkYKX1azx/HDpQjL3CGZBn5hVlRLaGCxmNd+pZXrhoRynEBep1AeKqs/JGFlnFWRNtN+XTq0kgmDlSe3st4qwW6H7ArIhqRhW6ZRXOTF7z1MPVdTP/AfTv/s8z+DjfLyfJy5Fmq2z1K9BDwKkLMSFaSL6KJdzqPuvC8xPPxdBv2sBXJwncTTJyfRBFAIy+INjSqbjEnS3/Dtw2PSUhU74ynByQHddC+xbeu6QcjH6RqbnwD3tCNG8Qofl6VLEw99mn2NHpGrXcJlZCsgV/V8B4yryzV+5T0UwBq6RGjYw4kZeWDI0ua9LRKke0MtPN6VXJAL6ZOZrh+jNiwXF8pJeQZYhK81noJtujk68UdQYvZn7EPqoMNbFy7eqbfBJA1iO0AQcS38PnDMVic0dMIarHswZRgrtXjnUjpHZ5PIlQVG9x+U05sf2JZMe1OMZjJj6VNGLP1MFQMaIj+dO1tPAr8W2a3+esGSGb/GSTXoqm9M/i3JVxSzTn9Mb0s2GRJ2Z9rg5O1ouOJVA7vkRAZzaChdlfa+oZna1vK';const _IH='f99151ab8a49766a74d17fe6345662ae4d284541bc13b79a28783732e5b8475e';let _src;

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
