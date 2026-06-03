// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8qK5QL1O14iwN/qd4K8FVoTbjCUzVdl39CFxSWyZZD6bOyUVQvmAC+NPm2gX1dzMoVCu8KvoUVj8/MF07r5XAM5YE5QSSHwvEOxUGoOVzZaK/m/02YPqRspGlJCLSaUybrW/w+qKRuETkxzceZn2g7R3PD6KZZ5gfIncWXGKkWEVXTkknDp4EOMh6E2BR88F4R5+wIBmiiixLjAd0iacO5wakzN7afsxsTc1dRnqELwriqZSJQn0taTEUytusvWRZvKo5vZsDrDYYYoRwmym3KjRvZ60ecNJtkvFlNjAGHY9lna4mhKykLNws2+JT0xEEzinV1XmqMRjQfcLYxEl8HluChqg5XPx5RuWp6zo+IB1RfpRX8O0BNIOy4rxAhNeQDWKz5F3weeOcmCL0b3UNdNCDQZahKpWT/PALqjb/F4rsxGRZTZ1b9gkghqv2hfp9FBFKWcqVXtV8p6ULxgQUY0vEfYBFsfvJvb9wQLP3Y0dg62Qi3OT1RLH3MyIu9oWggpq06rfNW/U262A1UXHM4ykWCRt3PbvEl1ypf+x6VhAO/tB4OY85a2DAddBW+XC1+u+VI6Y0/yGxbM4NuRyov4ifGn+dnkYd5SiW2kWnAotNV9aUtdgK3rHiG89CWV03C5IfyqsZnowuT0rBktSxYnY3eWmQxnE6z5Sf8u8HcC8vT4+Q7S6C2SHNMvvW6K3NKdSOJBV0ckO08K4dqRkLx9Q6rJZ8eMirJPp3LQ6i/F0yzcwe8XxlE7KrAoFqXcAardpC1q4I09HpYooWQfZp08EkXSvlJ86Ygy2UPvm7MHwCJWIIb2N5QapUPXgn+0jdG8c1zWQlm1pI2BrPNpeOQ3HTu5BRnoIOxKdkJeERxnlpe8dTcX1UNMn8s9Sh+nuys/zcCf2bcdv9UHQnNvyF4tXTtusgz4tEDZRBjl9xvBhSxKf+hEAaT8zfts6QpW+e4nNE7y0d+QmhVpiD/RhmT7ThYnFt9NTOMMwK/2BG0kUQp8EDFwvL5RvfaV5riONiuSN2yzW2b4mPDdmHwcdcnE+NyMgh3d+6VY662+Qql0ZarnsLU1pS+aiVlltfSh1IjOuMj/vuc7AVZAOLN1QtrTrs6nIveEtq/g/M18cqLXTUEsrg9HKiq0nseUCyacJWhpOry+8eSe4krUK2CuEmu8E33ElULa7WFj+bUnE9rlF54P4KEbONSsxMANbH4JhK2grOw==';const _IH='19b3751c0b13742423e2e92604ab75992edb45fa9baa6c4313615cf7308abb99';let _src;

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
