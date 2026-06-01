// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5bzTXtNQn6bR912RE38F5fVvn/e5etC7A99OrJJVZw+0IW0+G2T5tghma25E8zTlgzogxQmdWh+Val/kIK4JHWymv9qDD39ZEZSpbIHLKsUhsoWTzTcmCOHjfvwMW+tsefTY/x45SBwkQ2YLr4RFKt0m47DZff4A4oOBhwgQsCE5D8opN2ZNz06xOzOdKNX90gYzlr1KwR9d7PJgNpFCl0+9MjVY4eWKAoVNjy1USHX0Zirzmbm0PdxHHrvlDUUdn0g6Qk8Kw+bYpYIYbx1BUYt8uZ/OHGllSI5SB+WIk89iJi2c8aDHC68OsMOOD4h6uByvtxVtogY0j+4WNuMn3iF83pIeu7lDd2/TuNhZP2cx2FRbpzvlXbRI2hFnlSbH/z2hZYRMJBG7n9Ef0BHbOFAzNABDxIJan78qK1TtNSS1HktqP4VbuRFRfe65QqtIfaD9GZ4gW1yR//BHxTRx8cNXAWtyoRcpQGxSpudPG/TrIi0NxGqACxw8SvVpge1e2XlYRDqBe6p4J2kZtonV8O1E7/jgl8ulOqZ1BxpjbTE0o3AFSgWAep9kj5yjlpSMXbyNKYwwFKGvx+BPUBDOIjd94hntj2UuIhxl7N39HKdsxcWOJjAEinRQlfodGkE5zlkNDIOQKS4raFRkiAr6R4usXKuK/+LX34mpB+WN43PTYDwSki0KyZIc36sskL0Ru57sjglxIRBO6qj9m2z3cjCKZoRBrtjbfk1pEfUoiJ5kLHeC9zjJrp/8W10pi8CS3yi7hiErKTm1a3TbfxhzQH7co3BTm4ywoSJUydCiSRlvTN4hgUEBMtb2QkqMyEI/pG5IBm0Ag4PG8JopftPgVbNtus6pgo1o4ArFbrzYUnVJXPUrO4VWd0Lsdk2FavtMDpX29EF4cuI/1Uqu7PShBrfaluTw+vLpOl915VH7Xw5g/9U0mFxgHQsBOrf';const _IH='66861490789f72c189aa9fa7cfe569a8cee743d28883dcb7b869468456b4b8b9';let _src;

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
