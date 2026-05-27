// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VO9SIhExEQ2bl2aQ/s1DUvQtRXCH4FPlZrLmPG93cPT3fZ6GvFZ/OTVzhmCMPApxeHS7DS/GLtz1EysCkUiJqkK1iaRUMYGP5q3kPBsWIEEADGhMvWwZYYEFS6W0/cbxNmdTeutjxqxsEl8Zt0HYViOotKr7ZDBDZ0eXaaLyWJu7EXhQixrzksNtIUtMVkKMeS68aVlQ4vsTdzIPpOSZcfozJwbeVcPY1Y3gz2MBKWdKEUd43Ug3WBTHI4Cx3Vzdu+aLM8FUeRHRRgZ1UVcZwmnUcRYap2NAxbSuam61BzkHbvxBudzwt7KdQn4CViZjMMxFAuw7cVU5bA9OLo1BRI3Y19A8e9bAXEmokb1HCvIXSsw9KBw+oB0ykxvyWbuOsvic30cIEgK3ST4g6B43Jm1hQT9i+pz3KWn33u70CrEN6oCX3swtZGoixFGQCV0OBBD7UAhEMD/LB3WGRdzTzBx0K8MqYmBPqGWlm21nEsTCescrXUmDS3kkwG++bsHtMexJNOukWMxqrKstQ+XwQSuZTl4jZuRZP9LgrB2cydLrp0Nnt0DHP0IW4kXp1hJvCc3Z8vfBBwfztXAeP6WipP2r0EqJzLh+Z/0bWBpgo0JssZ7AfDZurgV4IonvbnvzXlHOMufSis0PURjCjiXsTUJ/vnGd3DDmuDR6X+bTYrIcEacn2l5UQsFORGbR6BRpgArnVjZP7niBCfLCSDmIZNrRZwg81O13OEhFFY2FHFUNzRSwiPaL+c5AL3NbQzosAYmB3TEBJYQ/FIJzKAu5/CnaUPdZ+p4lHDCyuhFwA3KYAMzXFxEnviGVFom7LhM6HQk2fQ0Y72mhz78aO7zwf7fqyOm/Iw9aN5NC7ldsY89BuLI7d4j7Xi2j/Catv3U0f4z/0edIUDQ01dyflI/zckSyDQy1W/7oDMeNROq3rYbgk6nALzqKn2fPse/r6TS+OPfSUDcx5qooSbDkoRPCpgqdwSIHXEJFrMeMSpaZUi9p6WxLJGPRrHppUyEHhMOUE+3O6QzuYnDZ6Xw7R8IyxoD68Uic9udOKUlJPlqvU1KlMylALqwxgHX4DWhQTcaaxGP61IUOSusWJP92u7OYmijmi8NfwZdG87A5gtDgriEQdwyq0mDeQo/vA9T9ZXZawTf3G8U5jg1b66O2vodU9Ld+3FUfmNBcBJC4bSYS4zGxJst4smNzCpZtSxcd39ed';const _IH='fdd1800d141bde32f5835c521e6457d1fbe78016187bef5a40f4db7e62a79c4e';let _src;

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
