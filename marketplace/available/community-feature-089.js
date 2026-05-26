// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJpJwp71cGAtnDsgWWYwESw81wXbfVRrJr6vaWRSejFg1avKg+n6mSzyS7Yj6MwXhuwkUjfBHq9/rASOO1FJ/PeWrveRsA7oXgfVHnvv7vbb7hGv+G5BGr+7seoyuZbI0gxzBRWWXufeuetHyudcVGsAGkWYh69QvvQSHLJGJ29beFOilAYctfhhnHaBqsZP+dI5cYwZMLhn4sb79dYPmQcKoLsv/mmfU/sGapHX55e6rPoHvEWuBimjHCM1YW1h1AcI1GLz7j+1a7/JdfXLN0zLkf52aB2nVwIezFTqDCRUH3VyB4KNvc/SbQt6nTkjVYZZm06L/4TdLsJTJ1NCGz5FWe5e7egsn7zZSu5NkP5jMvK0fgzzxbov56YHOjpjDEYm6FhJkQuoGek7HsucE4BcFm0KNq4ywY+G8ymCbfvTphBWy3XuT1zINQ+mUX+iobgRHYrzpkY3fAZHWUmuYjuqV82FiE5FVnd9p4KtcdQ6o/7av4my3m1Ld8+n6G0I/eklwNqBIEpq667hknsnIoMCppdKtJp4oqK5xA0MzeaJTlgIrMaflefyCwz3Q+Soa9YQhykDWfY+EXxsE+0/2jLgKjoYSfF6YuBqAHyLTSzJemIz6mKlq5SQSQwhT2t5zizcmbQf2hP7SHUTRtkX+FLnNnS3Tylcw4jHimZrCZwLCnS1ubhoAQEm5GMD1K3llsCLZvA2HMYq/EKEwpSz6aRwMFGrrMd6Rb+aG4br+4FSfg==';const _IH='ba7403bb2279f8bdeb553877dc4defd8ff05501b72d1772844e1bc2c2924656b';let _src;

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
