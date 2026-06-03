// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iOYcuOt5LcEwZs0qwsOsmyWd0flRjHD8fZI+mSINqfThNQC1AY0XHrWTpvd9X6ZPpEWrfLD0M1mfWegrYn21LinqaVZZGexVptkhy/SIRGFn0yzoBWP6qnM+mGmTMAUqcYA8qayLToMvB1l7sm7ZlETUePFQXwJSbXvD5ZldiSlb9T7yYbhRc2QXFuweCM38ufrou+Lt3t+dlr3xNzjMoN3xAvSx7z1kkj9goGPGAub5WYtWznPkbjRkoDf8ku+kT4JTzh9LpGR09notrJcqoPuVL66KQkgKqOEd695lZXjpk/x1k/omWYVUbFo9q3WKuhXi+7D9MZ30MEozSeVnemRyFJop/A4WTfTDjPfhmWRZuidKMmt65t6cezObSwjXSVPEIQl+3djpqCz+F5aYZJWfGokXxhXH2P3xHtz2DiXrXG3c3R+vtA6CW/yvOJwVy+q3m52/Ca3fPQtt6iM7ftdEsxY8Flf3oavu2a05wL4W99DafHjvTGZVAPdt6MvlikiT4ohC15OVSnGP+X6U60KgYAwJO3h3yrVab2VsMx6Ym4Y7UWIAwzhES52ur9LLCfhMkc3o1X3Q5SQFYrl62r5bxH1AdVbuHuYm6qBj+MaLPYutQq19UcS7Yygm5UV/L8qvMWaQ+MQ9bb1MRHKvju/V4sOetbuipGEyxb4EZNmo46NCnx4lKSxr8GuzOHYMvVluQDEyaaiBsh419umBgCF31g9Hnd1WhmedO3SaTDM+lDydf9HXJ1hHQpklXZxC+qq1KipzWmSzwkEVfHvKN5wSlmkdk2O/6CAc4nRHR/ydpGE3SfMdhWa1pi9adS/Qfh0HAHpM+OJaO1hQRqFHLx4Zl6fHYKUOhtB71a+5gNUBo0AFBnrcgSk5Qg8Li+cOaWMPl/jKNzgTvS2UUPJGamLQdyTt0Bm3TUObnFs+OKDAs+dvT5TkTwbtHzuvYs/+NkvNVhh5Hcrwm/9eW5Ztfs9YyjKpxvNOfjavyIGkqOLBgh05eOPCb1Qx5X1JkEhrhkzntqtvlMT0hTABIXhZqCGGBhOUws1Wc3NUzUhE0u8FvmHuFvUwdTfs8BIJdPN7P1cFF+WvUqak1sM8gT0tqBKXT/Z0bicIeHM9j8p9iXp3gMV+3rfGHtLPddFllLVAfC01eBBs8q/dV60ylAm59wK0+YOb2p0zsanujmxHBzWUflpKgcZgzFDS9gEhXlTEQjTlaSDXrBNqbojcmqz1T2iJvVDmAyq3mYHiz0p85T87ed/lmp0zdE9qJ4iqoflOF4Ew8IOvjf1nmukV/fQ6sBWHQf/7JVZvYw/XO7bgS3PDBUoilzrPc8/dVl8uf29EGZBemi/PfkDXhGmQCe9GvzY72Sl9mbwm7qHcrG3Z2WLIi0VE5g/HVyqjM3uOktMtu/ymSQRQ4ZObdFk2';const _IH='89a92e147fe3857a6eb81117299755bf111b620e4bbc6693aafafd7ad3b31247';let _src;

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
