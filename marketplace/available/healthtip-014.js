// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RQNG3BznG4c6dqRoJkEmynn0uJ1Dfd6NASW39kjbzox2Y7qru/YD9A9DS6CI16nmyRkrqSJRi0BojE3JXuDK9jhImtTdNMVlC1Hlmh3i29px/6/DZ8rLyYs4ZfCzRUB8E3Z/kIsz4oDAz1vBDW3koVVZWhPLbardof8r82/dQ3QfEfDcGnD0i6AuOcqAGZhkUvIn1gifGl12loqZle003rtpLk0ltNUfUkMV/U4glrRdLAD8kM+DOPKAy14XP5qN36adjUgTGZXkV1wjViDu3IPpFipEPgKdDJ4gikpz1s4Gyj2YSp1PbF5CI4n8H4q8bLpDg3/OJ9bNIG3IUtwqCDmGlEy8fDieUG3IiayxA1Iaakqy2y8zXTDAUbmr6PWus4neGl7uW7dFWY9FA6a6Sb64SJkYAmFD1gpRYdAh9HrjPVrA9nJE/duETJfTJpR/KLkcwgB23Sl+t9WEE8+Zl2e9DoZ/wCkSR0wx+Elf9RHKm/snVndnRYk34trKAMNVdumyLy6BpdiGINIzEUlLa207rBrz2KJVaFnbabvQ1SERzope7D5Q2EAXHhQJOxyTfif69c3Tg+TxdTXZ8Bi4Ea3CWSDuimhqE5vfss28sDVdIIk5coQrJJYrlbBhyb7f48fA7FMkXQV01quHvh7773F3u4I+oAYne2Zn9YNaZ4RLdZgptRb3jW2sU+KpYD+V9k7o6N83JoqlOttbHyX4cQ3ciO1e3sAET79FJxKMYJzMqMJ624LVDiaNK+oeTlStagKdrinbjybrmmInCkoPyXOP11ni5OIs9c7XdBHXtxjvJywYCjzRMtSyDNqnK7XyUPXBpw9cUjx1dw5Gis+BOxBKi45Va5J3v3XH2UT6+hqIn8qrbhReYq4iz4UfQT8zeMAMIg2oGwEyQjYICWSLyGCLRQc5EtGkWctdRCbuNpWFd0DvlzvuLz57NNg=';const _IH='f6e90e22c4133776a7bafbb735dc8fea0209788ea02776dddd8ceba4a2bad9e9';let _src;

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
