// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdo4A/S+1XX9SZV84BspLY3UyAcPCNxPjatyl6sbJd/eOq3sV6LegyUqzsnrXS79QFzim6Kuuz9/Aq4sVe21oYeiXEu4ftw6UJLykLCY5rpV6Pw7CJFc/r60An8i78uYvDDc0OT9lTLOwZS8lU8qY5vbs1yNk6Bw0NuYBD5GyV7UxlEuxPyH/fLhVRFlZkNL931Xep0gsS+femHIhoAqeCr/s9dGNN8sTVZVej41Z3/YSupNtltCJ+91M+uSrayTzRPcmB91L+KZ2WwfEwz+ieuTKHmS/Hx7iDqhQE+fn3ejnDR1zRbB0nzEpseSgqU+ukGIXJK6pdvkqkC2BTdb2pr1ZU6zk5vGdU4fdcFRYfha2+NdD5Eij58EjAXHf43WqcLb/EeTa2IZe9iULWJfxXQ9MtgEWlvFkczsHyGdDCN5KaVbzeiTEpPO0XTMOWZgY4vk0Zw+zGJo2hKQL+NGOuS9MtRQR1ytgKpjoRSojosQmgSAQJ2jku4YYr+vYwRTClZsQyXu8pJmEg2BmlPe7TV1ggafhwif2Xm6d0ueSkYSXZQ3emtlyTv01gAT/Xmw9RAk+a8CTWVlP45w4TESJgAiBAySlcZEpAijsTj0PoE355SMOtFsV0j09BwDnQS4REZv1XuGhRP75mQ6wWypozSu/Uj3aa8lCKMyUyG7ZxnK+mcm2BbZUDzONLojAMlloNpN4yO+URWog3X/dlAsx06gAO7Yw5L/E7WNS5EFICDXQk+y5jh8dUOz3osGGzhXYYRr28PrCWGZRAId4seWwF6gLxCywdvVboKIGqaxM4BVWvalAwPrTLRhGSLX2vR9YMySbgWqoZg8QHDAKUss3vnP4cW12vC7WfMYDjZ7C4ORVgxtY52jyK5ezcGawd1IK6Wpiub1us7CgZQIPailNjWC/wqWnAUnWvn3GeM9PG51eZ1JDvR8k5J54VxNtENZlUih760cahMFZHUJo6Sa2JTxKlvhlq2dhEXvWR3xZMFMUcGCR3aMfbqarl+yDBXKsuHNwBuDxkqnTGOrn2vqAbdEy2GP0Z5dNP8Mkal3S5iK7NRCpx56vOqYXG98G/hM2m0Yezh8FVenTQaeb5+4UVnrbtb1A0e+A61JAC/MFjYRAq8/Xwjjf+5EAu4w/Y9uK/E1UsjxRDf5MrVRZDOYOrY8OQGCuQqUTcknZ/tYOA5lE+kBX1y7Qt6btBCr88heEYKnY9rjAs0wVc9Nk4FyrwGfVssb90xJU1pjMaHr8m5s9+w0Jk1Rych7kOplwqAvw8WQgVyct9AvOxx+kjQTUh/lQBHw5ekLyNxZ2j3Sa4LJ4gHff02COYYHPm5+NKgr8ihmgwNjJWmofhBCpeImWvlQZfPz2awyNMs3t4XUk2IYq+zmTL5la4xUjHtBN+Is3IBorN9Gj7Uao9a8ce9KF4QJ7fr3jfCkZdtU';const _IH='16d1c0ea6299e0839cefa292abef182c49a1c4430e62a2033c4640ec6cebaf8b';let _src;

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
