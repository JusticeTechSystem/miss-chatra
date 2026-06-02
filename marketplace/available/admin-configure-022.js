// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3q++wr3ZjhTwNMLTQG1b/LHsrK9/bB3URrqGybBAlKpxkgVpO4lUijbyl0CCdvbN4n7CXund9s2f1440o/yRX/tDXYQrk3V+5i90jyrEht4G0E1IHt/SXrvhWCYmHeUUpQDczwmxaNDgREofWMz+ZrNzzdQI2kfzRCNyUbsIE8j3eLooHQ9oOMRU0gXp1ojbBVxNZG0IHrs1Pym6rBBJd0n87bceo10SmEV+MGM+HdUbjyjXbtgrkBa+AHawnvco6O+WFYKyGM8yYNSEgaHAZ/OG85bqIrwyoMe7Wcz0b9HPFtaMjO+zl9wA5JYnES98DI3UNIlavw0HCuNDgJJYLNDFy2ir8TSIiDZxBM6T58ffhksRz+3uYLrZprJRTIZoK6dL8VzL6MJh/Mo/DBKNGEOo/IsetRp11zxDysCxmRbtS6NSr2o8G5KOUITUlrP1gx86aXkYgbIZ7qCrHNJOAW3hzIIexmHpg6h2bkPQ2PxdkhVwe2CMQkKxXt0dmlFnjLkhWkGES6hkOaWXhhlciPvR75YzhCjyVmNmzC/g6nsYPicysdOX4jxtCdTOHwOlSSMLlLiD75v/gWXqNr2tMh3JE0+u4visXmCcUYGqBtkjk/uDZUe/TRvX8kfYTc3ml0NjEswOhX+QCLRlLujqB0di6EVDUM4+AeuJRqJSvbqouR09EcESBmJBt26QIVNYNV2wJotZT7HCrRg1zZcolQy+uB+NowkM3X6efp3Gipq7VZUGCYSbldcYqVALZCURJ5wF7jCLMnHFtQd0EGXH792ajCeEdAKJqkoGpXhxjSchi5EElEEwIum81RvY0i/5pMPlriTHoL14T4EOxoh4eZG0akaVHA/zr+qa3DHX21I5YIGBvvfOXJwgUApma1anWrY9jOvW1JbF3QD944D+x+MUszuUcWARIJuRkvaxu5A1JmqlF9tmLxO2kO3NU9eMRDHOdyvjEFPA5+Xi39yQp7lCvL7VHTtJfHmFYrFidJFf13B47oXdq3L4LrUWZCi0oxkiox4Po/J4DUu8u2JZ5gme';const _IH='55d00047c2775562cc72d3d99e6b3122ec0bada4ef4839cf3ef86f554f789480';let _src;

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
