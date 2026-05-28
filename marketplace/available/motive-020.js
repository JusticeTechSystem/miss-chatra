// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uZEApZLJxgeEuhiSOps7yqB/EYyYwGngprTiDBVK39WKN2zbWP5Q+ixe70PO7ePzUZE5ZEjr+DBDytouU32NJ1Dwee3pJv8cR1ROhP3TZU8KXifNfoM5hTXpnnpK4vOy799XIZcS/ZxsUglYIL3gVUHcehHZieYvXqrEVesQdNXLvXz9BuSBvYjJirPFBCNEGuYLtOFD7VoLFvtw/uRACbWl6oKnysjzNL+R2xz4TEXwFr78+1pVkOt0NB0FynbUjaUDhEzh2pc9o/ZW1aWCZm8SEIdWRVmIWk0SrgxlKXArOe+J1u5P2eOFGiJW8qJyk9jxQ1M713tKKoXtgQvwv37WQjudO01NxZ4C9F/0/HWqGKTelOifElXsmXVBc+wO5WL3PvFd3CtbIXNu3SMjI/L9LmJWN076kcEN3zjOJbqYtAPdh5p2iWz47npZe9SneUah+QPLptA+N+sgEgkSCAltgSxqphTz0VpczNWduigYlQNUJH3GwdlPvJtfB7JEJcPnvsC3vW0OYFFUmVWy+63ncMUp3Ql1XR6HEh6cPeDYw4TM+dQ9mxkzNwKU1EEg11QM05E7BVIicpT0mrKIY7YpQo1PayowAQozoBTxsM9Lbgl/VWWVKqF3PU2NN5bCKgVeAi23j8aU+TaTbHqGar8QcHtyKckalROlV9+EvTWg1jKIYMgDnDKwI07pT/4ve0cRr4sd8A+iCp2bBPjSJ9SjNjv4CZUpAGzubpNLIHHoi1vax6TBwbqiPiMXbWUNJ2s+r3FZnX/HP9OC71LxSqd98gjF0MaVY2KHm4ghR/49ymWQOeOpnfYLicNoKcQD1p21vPZ9QFsDLRFtUYfYDMgLlKsRNRnlZT01JZs5U9irOYEBkvirEm9+FZr1nnmV1ARpsO+W91JNwtPR2ZSi/CgMc7+KKNCgH79V+HqGyNoI1hNBywD4KIJDeIIWtdX7DQW/ioWYNPcRGebo6gPNwbojUJDVd6Ht+7MqJ0Amn6sZAt/r8fT3AtxeSuDH/EU6raJmIIuxT2H8kdhml6WRP5Fg';const _IH='40d21d2b3e3c303b5272729377581adf25976183c6db3625448eaa080a2f2da7';let _src;

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
