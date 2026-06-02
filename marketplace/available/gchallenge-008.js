// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HlbbMkjgfs0EzHYhxBX29abwIYxaQ75JSmn3QU3dxYUiVoTBfYUoj5NU9y8kuFQLMFvktZr8ZoMOMhF3L2BYaz38DuhrAdJ2i+K4BbEBjJ6gd1M9ZVCBLi6KQA8VzaREUWNdr5B5gCEjtqIUpTj/5OQHmgxSeGW6JdjDjsewO9sbyG1pfOS7i2YSy1Qa3Uconk7VkSctETQI177IOY9t3V33tvg9vBp3NVkGeOnr9Oot6aU69TfWJTbmFZtPFo6A+0v0+u07yaNEf0xfmTz0UHxiq6i4+C3D2YwlsbMvXVfSBWmdxCQ9lRuuHjAwI8mCvF1noKAdjm+Fov+ycRgghFb1zIM/QJVnL+JVPjoR3JZLmiuAZFQ2wmEhhZe3d6UrmcTbFJurUXXHda3sd4wkl61l3rDOT+G0P10FqYdy+pAgcPWMCU6c8A9YiAGwPvptO/IfaDT1jgLDsB5xLn68K6zWRaKWXkn7Ycgyc0G8dmQrb/N0LkV5oK9JV1Q+3OWS/zHqrujIm0lFavE72g4cTqe3c6aPUbmcfnj8C6LmMzAWsG6nepWaRo2Mgn10FDd3e7VcfwthWa7iUyBp5ajrwkKIbgaT3rPtf+YNMfW1UICUxlUTB+SeQyieZsr1ldIvzCRILE6333p9UFufdPWU';const _IH='a223ad3601a813da515b25bf8a677033f258a8a7824a0e60605cb9d44d731d5c';let _src;

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
