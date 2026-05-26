// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xoXEnFB98p0n5PkD3Z+ETJrp9TKeE9CukpBOKrE1MTGuE13MyXulUHalBOHJMr1A5jUubmlV4yglvmTsBcitFn6BW7nLYq+zN6VO3m7WGW9RuMJLaKld5m20dIHwNBuHhOTnT9Z4rhjOIwe0nnOO/4EcTEaQiS/h1qqMVxyWAs9/ywu9OrscP5vfxxCCZrisk9BpN7F+/lrMUydLvt+MakfvUZFmAcrgFtyulOySQrymacIq7lkvtI39Cv+keON2yyxdTsT3qEI7T5Jg/XNJqKTlFNmdFEdQWD2dUBagA3mG28iQj7CcZgq97EZ1XxOVxzHDBLRrrVMT5zxKYyKMZ6oFV3DIMlevGF676asItabFcKTSEqW4MA2wudF2zl8lRtHQlpDUezKO3hAB8t7KXHUQi9vlGkLnBm/yhrXR2JqgVjgFJhu44vYqd3syV7yfuIh5ILbcxnwAbAktcMnFv+KdL/ccEj8wFUTrQK7ToxLFtV8Jk+TPxJWXUBLtvyMDT3+2/jdK8JKi8eij3K6EdrLpGCs184Eb/nKvnW8ziVZTzZBL7qECROoBJKKq3WS7T0jI1So8584LaUlhD4mPaBZ2k1fAsRQ7S/Cyo5FArVGxNwpPYevpaxDDrstiUTzz1XhSI8IZLklp5HJxQKUw3izs/lpS4RV+zDTUAufaNGFBXahFYXd72eI5qycs17440gIa5W0sMqvnm6T2lQdi/SaHzRANznXmgtEj1tm964azNjsgMHVSVlBaEEW282gBn8lPyvZd3X0I3IVFTIRC6G7pHsolCprm1rXHKhKO0QkOPpGBSutvfy9Uh77WNa9G9RUl46zD18oKrfHx8KJn08RQJOrE7LXsNHWrbHjufaAob+QT5xZNO+IWRna9rmeF72q+B0orHqPeLXeYJ18N2HaMsf4o0hSpq/jbYkBDu5fLXX/me0TanXdvgzG5pE3YD+P67WTwT3VPmjTcaKSIX3BTsUn2dvwvYwXdOVdd0N1eEsdmQ9DL4ho=';const _IH='f8eca3b21e3cc09b59c10cd951689ad930d44881c6b91f42354e29185ee52d67';let _src;

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
