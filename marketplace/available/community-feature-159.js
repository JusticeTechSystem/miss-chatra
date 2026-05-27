// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H6I+PaqzFOON2Vs37OiREhn2XXKJUCglV4GZNDk0m6mceG0waSbJRNO10jnrnVLSw6Jt0J473BVg9bpI+xdehZoEOzA5AZyAXpeJGGLYkNW461iACFdlByAuI9N8Zah2UtNqGCg36JG6SoYKMJGc5IYWwJVqZgoz4R43hllzYrkpEtrBje2224zDnHI5EoykGm0c/7ocGmrdrj6UjkNrXz5WhaqSLqhuagm6kjbns4ez111gvry/RrEohT6zth322CjbXa98kf62r/p6+GCYR6ON2xVGk8mBCjg2QTN8zXfOILTp7ioGHuGCb/r4Qv3BgosKVGhyvTaJREn6Km8yeef0JGrsdij5paDuCvEH6R0UzC801tFkmi3j/BT5PH8/Uu9Yqig7H9eJxiM40obHRrwi7XTLaOf4vd6dtKhAnFB7oedsJ+VwX2QQGqOP5LTwN135bLtfqqmRvTLvbdHcI1hmSQe1u2ovcCpifI653iuT+Kwa6C1DsiiGDYg/TTZ0mdNBuqKJdRdLIxGV1TPS9OrFHln6BQdLX6badztGi53vvTS6AA3YMV0foSqx1hWDPPUuRXJWp0U1BN65hEAqNLJTyf6IF+pu1A2FZbaAPTfMDkRYf33tqTQVFIOiXFWWWjjKWJmfOj5D2aKGg9ePYgp9x2hvWCKDkzxS+FZ4kWrOr1qfblnCAWlIHN6EzCQWyk8UAScUhFbgkrGmZVgPqiDbix4WKJv+wIa3LezXxMJJjocvmI4=';const _IH='4cc1c79affe57e9b3b235e887707ba65f93644b2c83cd059c46ca0a0e731e5a4';let _src;

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
