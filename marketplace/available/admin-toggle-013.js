// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W06oC583AQ/4OAv+mRp6SKVGHJs/3wkNyihrsJ1AquUauhEmclQDkQxQPAbbqXXp1T0u7k/iw4K+ge4/++EleeF9hAL+gi579NbrE2yh/e0MkdRF91q2HXF6dSWfR/jGhWFEGAIamHHJPwAOcp4BcWnGZLSh/rTxgpH8PjvH+0zWcznsrbxFcMiYFNM7foqO+9wns3Hq6cCcSu9bgDwTr7Mox0nvffIRnF+3TTovSv3znPrkDJiCWY5yFyezuLZ6pe9Et6YknEqCR/YK4YAPXLdR2PLDBpGKJ8zDL0T7g1s6E9oDqGeVRp1EulcAMz1sAmzSpLSMGpLwk338c6XKZEqOt3lrwRTE1rr9gkRtujpoxs2pU7QpzIdSCo4Evc8zfvNR0rUwhsA9rL34qJf5iOw68dIDs/JUexZCENv3evTrYyV/cU8UUOlAwe6XO1rz/Htonv4K7cRxqoSnDTvouOEsbDI9cas5p9LpYxgSIz/jl0XJj6Mf5g15osXoreU/Emvqp5m0M2FwEvKcmvwsuBpWwBj4+u4SSnWZxdKZoxTADy98ouK4uxHPs88tVvWSTnhNTdEToiORBl2JoSu+Uh30Mw44+uSQ9qTIyLxlVK3w5Z2qphK1myodkiHwMi7009QmqnKzMZwhsGilYO/OsjWM60r5QujIVRuJrSWzVoD9UmrUBckO43C3kVEZ191B3CJuEKbFxsh9BC8IsSLwEYPzOs1zRndhzcezsgjpwk5K2b2fFuks3hCYQACpk/YzB93ejM4IqtJGDDi3OCkH8qhM2PjUkL5BBqwmRWNfFFpzTyuQk7s8ic8yXjp4R3OzzeLhR+VE8pSiJn/ek5KJfU76BFxojbCCajJScQ6FXt+8dwAvtbultydO64MsQer4a01OJmdMsm3XsulsrOlCDmZhSkNxb/nICd1JAKDyLTWcY90b+ep+A/WkTowwNpOn7QP8fYSrs+T6MQf4TCHia2eG2s8xgT09uFM1xcN9GV1D3uuUJm60KRRlbuzZ';const _IH='3dd34ede12ae7cb3cdcbf05244c4123ce151bd556207f368e00bf3fc6991cde1';let _src;

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
