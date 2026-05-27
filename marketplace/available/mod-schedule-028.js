// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fu7yN1tAy3SxooBLyf9p99+DAZcRlkIUS65il/9YVOBhRZSJE0tWNxV1mjaHv+Bfsx2xbAkvX74XQC1uORDeoSZa4OZJQ5zPkBY5y/zO9g41F+kCiOfwm6QVxIinW4dAO7zniD+RHDZQbZDlpJFDW3u67WiLTwvYJ6aLqaXYRRVMFdOpkBYbm3k3A/+5TaHL3za1xW7IXE9yxuV9dUoXPZ9e6ylfra1SPzlch6yhPSTiHX9Vi6wo5a4X2vAJYzEhjibaMUOhL6PTAbHTTlfLs08QXXCPSY88vJZZ7c91MyGiJ0YeupuO+IA/6U9g/+ZKDtvgMoEzKWYawesOo6lmNUKRtOKt4WQVHrRicBoU9YWOwAKfTInYnj1JFf2RLzILe/qETaZONudn5/ctJiuAiP1jhbk4g/8u7Ha0Md9QQDGebZ9hXq5UoiAHUMWqKe2sI7L3F+/vsG+Of6g/NRD3fYfGm69AksehqcW9jfyAtB2cMVkX7b3KSjA3Hxa2Xt4Sw8F6GvrTaDCgDUaN+yuAGGzjVimpqwrG63SQXzS+gzqJhQfjNhfZc/OzCA0hPj9LSvaiPgczuaApwxtaoPQ8Xtmahk4nKaCK7+o4ULveAdTjwA6nuGoc2QdUfc0Rx0JR+D5MSjAQQtnpsSZAaemqHkrdzxQnKek2BOaP0Nb0OIR/LLyLWkS4ayWpu6MDRE9vy26B9+DGaeG1Fe+2uCsHVcGMa4D+CdCHfrouosF/MSI7Goj9NuZlGvT8/5NMgMlJ0eTruWFQMLMsc8DyldwRtBATQ4gVe0AryRA41/ze7wx+USAiuyjEa6EzPZhhasZ1hb+IPWfNRGT40lBbU0rxcVsraWhYt1pQOzk+UyALMLZ1lkAVbnFMLgcRZ1vggYj3btSw7hLP8QyWmzsaOQpZb7KDidqbs7MThHoErLmyfJ0qMHRfb5ROESPDmX8R4p/Ee6PUw3It5LZLiWaWvMe4gZPCZ9wvyPUpZIuvENTSKEm3MZbUK2MC5NPKr/Ve9U8CVXL23EhFiAZ8Ua11GBYRW4OJM7BYKPjdA6+/icORqS+ckFflE5hpCx146b1QXOQ0P/aXc34mymibDzU3tPXb6nGJi7kyjyGH2aGznpPvzWw5R68MCU8BljjFDwtDKKHSfSYDIEEyA4arw+5oNtGIHQPzZsmq6finq+867j4mZIMaPQ49wAnfpCRIweagokXcF6iDigze22PpxkqHkDGWm0di9nzIGUzb50PIKxcXT61LrZzcSJ94Stz69alNv8334GBbMJXbvF7P54pDrkMYMOyKTYkDkNDJ7OiU18u0b2ggR3Ub+n4hlNUu+bz4XpZrjvrctrZD3vT8hhxs0YiWUKeC1/UWkg9QM54TQkUV4slyOVuVhnC45m8DdNp7zCy6Ri9M4HVGfA==';const _IH='c3d53d84e0a6628bd41514592de9087ad948f38eca06ebe39997825e1ae53f05';let _src;

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
