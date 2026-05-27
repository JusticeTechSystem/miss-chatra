// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7fSqFoU4YnkMkwS9TkvsryMoWPjY47AmRGoJXlDsvnoFJ3h1KnP9U4DNOOAvUr37SIgmrPQgTFSrvgQgjNTcC5ZrD5YxzA7tS4ywdVRWgK5AJLtL5V1XZDewt4PhqyH6Gy5aGrarkPQ7UCta6ND2+CjA8rMCpRr7/Q81lvExR4jORDDOq8kJlZLQ33Eqy6l/aEdteShZYjMEaEW+6OvZYwc63VKeAT93X2qcPKUNd+DEo8Rrq5u7w2qVpAFAjLixqZS4QXc8gzBoydSbjqISIj3nr32FxAyDLcTW0jTBzh2KDHjdsdkXrJ4tvj5vvFrDQECO14RZo5nJ5PCccdLAGDWvZNDjor145fZc0BLZZ5GwQVndmIs7odyOfZMfQ4yPe5HDiuRUNLv2APoJ8sDYbda9/ZfsEa7x6znzOmJUQWhFtsgCufJWyk6vnxYgeASYNjYB3Edxupd1cvheA3cEj4K6WgCwTsdaB1DaXNHPimejcnEm8Gelu4z0F15xtyWCcZTUlbkKpyZDr8lmh1EGlFYv5o2JmdxtWJnez2q5lrcapKffQDhsWg1HY7QPEGjbTfhp8ANizRNhqO2ZEaRbu/vSm4TsEHM+yFkCS8es+1qospRdctiD/ZghyA0uOtXDXeheqp6L1nOoK/seBkHUXMnYr//hSO2SWjpuVaORbE6kl8HDEF5ivtpudlVlpMKrSDgKqNiyvxJB2QpYEpWysb0Si+rzAmYZxXysh8M3n8w1VBp9WziPdZcObke8hUIrwc0lnCN+lBdLgHFXe5t4Q4h7f3PVNBETJxS37JoamKHxo5r/Fyr9dJF2ToiiL902DjCZDf6VC06tSWbv9OeMGCYYNIVg/AP9JkgFVEcXygl7t3Nla+duwkg4Xp1V4tBTEh32Leu45GA4zCgZZVYfpkdzqfZOEHUOkl3hbRRI3Wh2bF9xCTXDexJkDIJv/K9Yr5RwXvfHnPYayXJJlD3O0jK2uA+231HmN+4gI2zsF4EV31v5IW3/5j7XbyXGxdkOlVpPU5+S6p8cWKBQFfEZy1BfxkJV/c9rT1Jc6d647X2OCAdx2/WJ3Vq+YHDGyCViyr2LTcbCxzx+/pBUNlkWsn3JlFN0tzGKL6xJhuUKFUSkjz+3Ehv/vAN+96eNVXA6QQm3EPofFbbONYin38kKCR+YEM5Vz0+agA62ynxhqOMGuiDK8ks4WZ8aR935cUn1Q2Mn1xet';const _IH='315d2e3cfa9f013d8286334a7bbe399c0b1f7f0adc8f3492384b45382a8eaa00';let _src;

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
