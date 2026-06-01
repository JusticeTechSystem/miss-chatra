// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5J9zk0+6tX5gwd+h8qEInrF3USUlzIOCS4u+kwVFlfjk1PgRdKgCIKx3shwitQ7Ba0IAErS5bQy2fp1+IuU9HJjDium5eTdNhLZ4IvZrhR3Ddt8EyoKBubeqF7xnZE2772RcXRtT6A7/9mJwLxJgikmy5jDNO2NQ9Z0FINBxCNoXI2LPAKZpS96BRadUpZczB/z00xb/K1pG1235Pj8rfA/AJLdpv91+I4QY0NDYmTz7Qq8/5C6UcDKEkKsnz57t1HIKR0Zu9SkXOa6ZhHBGY0KJSkQEtwaPe3tuLYmlY6jZgxXNQs5xkh9NuBFD4q9XiVD15u+ZltuLcHuOtlLmGp2rrCrWcVjQeBAmrPAoKYKXZcy5eV+/DeOI+NBXNGLp11jRxGW43lpUzZzIV30CqIW0sio9yOb0DL7aebE/qZaDmrSMvRPs9bahjZzzpw+D83M5LsA1XHcPW4E6++v4CVcrDKFNdFQI2VScQbD2Ji0aBcNbjZ6NM4a9g8+SR+vh0ypu/shX2QDo9fSX2ogK0jqp3KBkJ4KDRbHp0CwS4CuveTyo3FxHFqym9tHxOx5BR6Jm5zNaYVO0SWo/mAoO7DlJRBEfLwELtRm22QmRY5RQDD6Pk8fBo2WK3kQtzG5cx2Bj/c9/aDzWG6r3EGcWCL8zqj31VzdlsTK6b5Me3VHGHxADAfkhybRHETpKAFDlk5YubwP3ZUJZyaLyBmUc5e9t80IzfEmMIrYsigPndE5JzmNKtPir5YGYDdv8zx9VClYRC+C7rZNU6hQb8kQWp77ZgZIYK6FblHYUyuL/nsKlVEC6J0U9abYSSekS4CMgEI379N1LI4ramgI8HkbBGinfUmu0phBzvtpGp2KQxa62Xz0Py/DOOAOK47QVxHPsy+cqxEUWx1Xzkqrm5P4RBJDbJK7L9nT+Ze0hYHT4jL+5T10W+WDnUFYEDsHutQfbpEoFdjCzA44tj/8WVLo+21Apb+UgRECY/jPcVQz022AHxMrU+Z4RPzGk2lr7QFWiWw=';const _IH='699acc1ba054672dadde3016edcfdd4db1ea104471ccc5d47bb2f4b852e507ef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
