// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxcoV/F29zFqAW/11ox3xU799pOO84zjpNeCd0Fji2oApr5XiraLAnP9W+uEXxK3XpB4JO+ibfSvwxn3/B7qmCuIUvMzsVV+FIxPi/M8MRo6h6Woc+RRvDt0nIOAM90tEnenUL38DSTtddRUVkUDcbr1GnkWrGBo/MaoIoFwSS4FOmCSjjeFuAy+PPhwQd+5A7ekFQKxRIxg7s/flelt/3UQ7Z+ily/p0/J7E3OInaZe7QnQFs8Xa4QxsqsGhDFvD8SJY3f2MYFN83THK1euhpVC6oLsgMH4KgMbhiw7Vji0kXsM6ouKhLu0/Jw7j3oar4herCT+g1qCr/hWsWBaOAkUoRHtMySe5XOcys96Cnbb9Ifi2haRbJu9kpGmBXybxgWcgDPEIsBK/P0fvrpHqH/2fTGQPlt5RtNeSD7NMCrTzG5MwkOKA2aGmg3SwcJ+1VmIjlDiVyaurtjLGITHH80SyLne6Pz02IazIZOihOG/cANdZNWcXn3HFsFJFfFvjan8W46JtJF3iRghdPKxXts5Olxv0X2Z+RbUapYn9ra7Q7OO3ZP5S+N9d15RNO1mLDokTiOlA+saKGocD3GuFDKi3x1OJ4lpZLckjCbz4V12W8UfZGo7d0yhlQoPAH9dop4UiyolHdhIYUHhnJqD3PtfjyKYkI9RgEVdIONB/9NspzP+BtdS/+mZboGVgYwHMfKmRJNWeFEdsRXVA+khZ7nS4eHCb3zxEe9AF6g3tOs4RDf5/baxkT7tHofR4wusf+Xz/8FJSwYNwM+qicFzopqz8BOYm3q+pxrdtg64wekERPmYM6pUbWSslCh10Je3wz7eXxxomIEJLmRdx1WAtL6IYa8IM7JHzWuiUF8uY52mHkcTtShT7HKfuYe2BycM1PYcUGAZS6br1qTQVmfEhTz0c3BUm/t+FjjZPf4oHjJLshe3i/f/esHEJ1M8MeDga5PCirC5Ojt2fB/dgYXbVbcmC+Gtv5QaYvKeUrHrZP/gAbx2kqKdRjOU9vNeHg6qU7zgWKwegHNaba6dT0Mql4/vWBbkv1nJeqjflDQTNIkce5kjflZySYEglRkQCJ7oJdc5i/8jrNrIfcS+zEUSa0CLjXwQj/adlDtA4InshXfkD+ZEa8ZSC/2gs5bZrhf7HntmdmiOYieoy63wrFFak2uLQWYk10+pR3bDf9d+ogIDTPiY7J4bAxygFtKbxd0vZkf+P3tqWk6Nivw+gPzP88yi4vMQsNVBOCAw1bFFKDkJxO4DMnFVv94vLrF9SbroKURj5evuM4YmY95vXdhATeDTLpBdfCN52kHRyQmrzsbxF89mWjCp3kJdqTOQw32ni11BqKDcaE1nFY8IucZaFW0M/uzL1qHjDcWA4fQg3YVv7q7YJUFnlLQNGEbo0Q==';const _IH='b93b0082dc43277bfca48c9149497c903d4e4835ceff53e4317a6c077f7cedae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
