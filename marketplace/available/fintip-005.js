// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GqmcdXD5UZijOVtZ3in+YaUGW0DpFxuIT6GUvPGooIBp7HbLZCPEAtgZvTx/4rlgn8KEGDF0S9XbmXxSMbXR5h+MpkRL38XT9RJD4rVrwAHXs9+5ITE79yXY2UYOrDZXLPTTNKE6aztLWBF0HuM/phgIDaJ3BRFw3UvNaPuT3Wg4zEQMFC2z1u/6bY3OsJvbCxvLk5xx9uCkh6IMlAt0yAWQ4IQetWPASx6v+uZrwOyhChH6VChw4MJIXwbqPd+J1AJSnjVRIX/xmBz/+WFSy5BtnVVK50fjnwwUhL0IrE7Dq7ykTauQGDAlyc5c+8u/I7Q+gVL0ohUOO7i0UN04yQu2kwaiaBJGfyd5dijcTtzbIwxnbRPA5B9fkSBb2OAFsWuXrznzhhY+mUxKDBDgzskj8G5CJ9iRTI8XXdwNTyrrwYAil00eoYQUKhcXouci2/xvLbpWNvSTzhX2VkW4F67Zz75rw9WejnMrC+AGUq2BLlAarrv1CjbW91WvWSZNwlPtCeYUCGHLerp7ydErJfKcwcxsb7hAjfuwiS7brWrwPgbcEd5pKktdZz/zRDxmKZzhJ+AIQx18QZmkb80VVCPXvF6ap5qIZkAu0HULvWmCi0EkK4wioAGIDnDC8PsQQAkwzDkxIYVS/88GPWssmgiLE5R5hZMh497DN3ej1ai+1jsKT6Y+YM456wWTgLoxeQvmj+JlvbijbjAWFUHXFU3CuKghrxjQDEhf3umtdSGlnLBq8LAvCbHZqAnIyJ2zXyZfWYF2AOKUdaGP9Sb6ywBDlSqHYBfCjztjeez7B3EtK90na1IPMc88AgnJUzIhA4qXXGZk4qesCeXi+1OmODmObgabwmWvCkmhARq+r/ti8mf1ePfhEsgE6W0os1bdGVcFCkHio0TxrjZb0KXAfduy7e1jKfy4VCSc/ck6Z/L4bGpm/x+G+dZJVLv2PlZW7VrtmJSvDJFbspkNburbBl7EGmOzpqefqElteZsImFayiLpSJLGFx3Y8CpCz9Jb57J+MfoPPKWwCxLOCIRT7w4nMVkFOIFfyQTg8iL+n';const _IH='99d6c6b8f0167b51bd9c39f3e31819f1da35486c2f6f402cdab80591d25b8278';let _src;

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
