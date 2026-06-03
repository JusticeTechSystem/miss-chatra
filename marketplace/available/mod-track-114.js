// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YpX27vnf1pDf61MWQdo1D0Sru3ViL+29FgrkULF2Yx8tRhEZiCCJS64SlrWgr4ZyBdK+jqXGiBWsLRmQRNy6Ba3Mle2M80NEcSvpSSsnuFuJObrjlKuGVNZ101w2BlT3een+c3I1sAFvW00qBgfghsdGyV87n4PMqzRfFNWbR7oQdHWkILHvwFTnDhDIqDxXJGjt+9Kd/46RAkas4CIhR9RPlllVmc4dHU6dRo9TyELd9xC8lJ1mnV+4AoJz9968AAaj0V+HNvQOApmJ3Gdmy/yOFP4ymhQ8ZxN5Z2tDsmfSi7KWdVu1FR930E5cbr/mDmQObA0nEoqcn03JgwE1KsD4B7wmTxmBkZ1MCSkfwVJmUFCK35FJqIf4+XgPpoMve8j7aH5XAH6iam9bOgTudcAFXJd8oV5ucfMnKegwV2u9E9qaDNd5b3eX3m4XIdqXI+vzJzDt4fC1sOyTDZ5Ph3CNGl4txjVXNyPZPXz9g0JBUDujqG5kEmxGSmSBc0eOzHyzVrh2euyl27F+N/HyElDO5evvM9dTk1ujrhCtGn6BxOEyJTp3kEkdCesUt2eGQpNtP3QtRg5BmtEqBfwhNuLBbbJER7d6iKMn34XjwSH4r21KfahamFA5yT5Wn5uyM7RGK8DZ8FgKwuh/3FfzEIHLRWrjmqvMZSJySRw1ICD22+8DF3o/qpBB34NUGbxSp28LQB2zfKWw2PI63Z3r+1kpQrMzHaE9KaQdbeOcA2fCg5/Bzpwmicbj6kpc7JQ2FtVLHyI1wFbsutc6AnK7EaxNN6Fk/BH+D635bcDk4hsae6m0ag65TkaZmeGrxbijCzzsvwSmJhH3SeTo+s320lkyGGvOHYEduokRLlAbueYhKfn4bBkmpFDZnw2ki54sNnOumHwLuNc3sCIS7DMaWuZ3UDBSYtg70s1IPaF35atlNyaOWlt8Gl/M2PTAW0SjG4qG1ifLTA80iwcxhW8RyGA7pFUzJth6x3l8rpx+sJ9MHECy8qqHLBas+v4Yi3oQs36D3jQLBjrYr6lsWYjy8ze2uXObEgSzNjbC0NFgGw0XbY5NeU8fdqP02rzsLx63dhdAg/nf5L+5wrKnFPG6oAmfKNpcZgjPalnm2HL4ceLLSnIQmJGhkq1pVHlrMq6eeXJYo2j81Kq+YR6VebKPpUrgSc6ktLZ8QX9Hh6Y/6Oggf9+he5haynuGDssZeJBH5vacg4FyAWCAexqJ4grNU21hCyjA+cczJHPwuu72O4HEX0JOqpMmH280ZsMZ1CrO2x8F4hrOtbjiMOVHiSdAwzIPlZaMhA+6juLI8xhkyJyfi57ROa9wEYNs3IQZ7qAOSsvA9GSS0pzyD1iCF6abV74gJwsyJyj9fX2GDAb8';const _IH='add2e85fb78dde60ba6f0ae5e12100bf3eda0c63bff960cdae14549f9fd8825c';let _src;

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
