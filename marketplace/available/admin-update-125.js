// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8e3wteH0HIABOYq2MO4iRhyoDFRDA42747qIlmDxJ2Cd+MHxAwq0jNcU0cFspHXkD8hmWdT65wKuERzSa3TTdWja66vfNB0Gkr5barrIsjiG07Vlj/Cxt2tizE7gDml0dkQpfZ+LZ0K3g8euXhy361bb5/mFp2QvHwidtLbloG+KpyZhKGhOJy9FutGtaSxQx+u1MykrgGVmiP07VcshKRmBgD5/P8RwdOVTvCAvHipHkyraCQvHVzT1fQ9dQUTq5E0xoQS7RueEnt0wwj1J/HuM+vdJBXoLqRqm11h5y6RfYc2FKTE57UlQdg05VEihVOHWykXhO0NDxtHTNn4baJ4XeF9Bmi1nwqglcz6yZdAcf8f3Z5hxD1vAvmkia/SE7Bsu+Drm/9y6tQoEMyM28odyfR/IgDifa4rb10oyJiB5KPOCjGMUvM5++HAaZKuW6Y/qSA/FrcyEN8oVzbnGk58HxZf1feWvsppZRScs4IqJqNkinMG6Z8N+gls4Chyzabgx1Jd23kGyW25GZzmKcdo0XblB43YmWau1wsl4uTJNefwwP2ThU250NpA53S+F8u1oB+zIG4g0dYyj3mLmp7p+l3A5uHVmqLn+Ma/HjuR1MA3GaHaKRbY1y2l3T4oUxt6NriMjKvMAvbM0kYKg9BzoX7rmn6F5Bml1yUDhP5vH7i03WJMwGrtVXLChQjOJVswW0l9QHc9kn2OJO6JLEu2CrimYGlx3Dypd7gCyKMiSubZvVTpdUESt/mNUJW7ASJAU8RFtRPr7yHMlkYLUJblFU5g1kuYUqcQhE1qVhG9T8npRXBl0fsGbzDfgWqmg8yPgk/wVPfQrqxKLwv+Xj18Wpkcuwi4d5ks5UKVlOUjmCqHmZddnUyAvYiYH3putOnv2TxY3LdYJ+zYHSKAGqAUTrxsre8AUojnAA1Y/OzOFrbnqfmLJlDQ+bL+5IMZemcCpJl3pa68dlwn6RLdn4CE/5cqJdfTwrb8KTIfXX27E1JVyBJZ/2/wc6lhxCG2VxA==';const _IH='99aa9b12fbfeee07756e60cf1794da8f079fbd0602f09320dbaeef210d6d5736';let _src;

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
