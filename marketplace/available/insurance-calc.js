// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i7FT1ph0gCYx4Knvi4nViRsn1ko6ETzWb74O4mHwkevCXGV7j1+5qT28LcxYTFS5Dy8m9WKgYlh9I7OZgUEVYj3HpVE+Kyk8Wz/oxvd1HsldVmfv/hePeNeTuKE56wMxCrz18pMGSS4iSaT6lK4RvuEwCZB0NVCn8uwrxxQFX8sCaHtwqF/Zx3u/ZSfIkBPxE3UZ8pIcfKS/fGrgJ7TGPFeMk7vWOmcQQBUjpVpVSPvTIo177UrV/1pkVzk0Qr0WsXffuZuSjKFpqKpB6k5CEsEG6PVpXqkoW0SD6vLXUi8Ua0jxzMS12/dECTz89JoVYBs9M6KQtqQhVJvMwvhh6QwXMd37l8t3VZk1hkaBZ2jLepDw3B7M0d3VE0xxWCb6q5sDDbZSpzeFrH6+dTQpY3ATtK3Bk6VfjsOYWcHVoiteAvjRxQ7jEztzmG24xvK8Fqp33F4e2pUTUkNF0iPrN20S3GVJeFugURfuIZIfL3dnyh13BG5EtRSzranYjDzXStTCYAj12iLtwGe0fGkukG6rBPcjXEtJqx51nVSZ10r5f+4sRBvOlwQTeDdWUCCHb1wJU10VZNgjrnI1V/unGgpqOwYZ32ri0oLSoY6xmrl4JbYsAM32mID7RLBa3HOQPmAJmvWa1d0o4Hz3vhw16b/YuIY4xpEJmjRjNbqaw6j65x33hbhw3C9gVonaPhFgVd5oOAD7zejqeuhDvEEVvqY3pYW5BbGBaW8F5jTlXtwKfEqvVATfl2YcbxRc8EEfMl2wjP5FuBqCYpN4OESi8Q03B6kSu6CxvTLERkvqjNHWyHf2EZoiV4bvNC72F8t042rSPa0pRJGasF3pUXuKnBM8+baiJ2agMJFkr0U3UaPQgyXqPU9XMi5Dp/SccpDXl0jwdY56c525gwZZsh6yHIh9f+R+IKHXnxmRGELDaBmCsw4cvCqRZRjPM024G7QZdaUOf7hnmuF4W9/LTHc4P0hGNliGV8x0F2KaV9TQfj+7DrfYdU9Bx+loiphocKHOhPJdJmDBMzvPdykfT9OurS4GZCfMhkwt+LI2wsFElfYTBMmSVIgopzEoyJJi1v+ncPsxrMDPvPCY2yH6cA1JEJSyGRpJGYoWUCJ8422wYHADupQcCWKRhzOMZLkuX85cP1+OV5l4OBLEDA+I3cQKlAF5N9qEu4BXoT56hwl1ei0fvMJoqWiFHgNyeFGg3Dt5FfOjZa+rpCTwMPTSggULOgKOx2OfZ9VzIavdP/UEbgCGiV/ZbrP4kvm1hSSv8ZaFDqIBPLFr0KKvTbK5gvC7Q71NQc/qev34XsEZimuBcLIaQ6rTQPTbiypvDRqwpy0ON5+jxGGEZLpZ7mjH426XPeB4UvLSAVD11V6uB/bxbroWaWwOzyQTCY+l68Gf5m4L1inJfQshvzn9wcasOx2zApeWfjSmKnGMDmt5a4gjt1dUL14/kDpJ4w==';const _IH='c9466c9cd47addbe51126a3ee49433ac8bdee5143c776ddac5f614cb4b2ea36b';let _src;

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
