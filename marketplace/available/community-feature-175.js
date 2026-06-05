// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bSQQJ3jxk0iHhvtjqCA4Cig+BNF2a5JTVbOXJOe0U5q1FypDzq8Z8t4f8+xhIRJeqnCg2GpC3WlEkRzdnlO0Qom4FWYGVnngtdEFtXGxKKx2bqTQd4jpT5aTt+LcUYtfr3T7adqYs7DboLXP3KDcxwOlWxY+qwH7Bgr3tGZj4CcTfmSLyRj8x3/xt5VExA/TcPkeu1F8CQgteTV63c+Qb/nhT1+xN5ekXQZMWY6QexeMpyrH0jX3oml/aqamIavVMK6y6SEYYcAXOnY503dR0jmVVNWNwIT9nK2djZSqsLuNQeKG6nksSejCe7pkjHUrdUfxcSrM8wEwQnx4G/dyEwKDl4dLijxbTbnk+o6TtI8UogL8+a0clCHgFJU8cp8LDJt9Mfr14ogzry4tBVyXmN6pFkPaIvwSjJnVlmCc/DrMqWGHDwd7V0MSTSddLTE1mXewb4HYR3cGAkK6/q4YDbDFGprb5jmZSejPvKw821I8rzUri3mMVTBz+kCMV6lNV0N6QySugWEeKzS0hfGruio5QpfA6uQ3v3dLcWNvDl+6E6Gl9tXkaNmUxhBqA8cQ5WNqeU6I98EZVb3ukIWIDcsBr64zQMcgLw53B6lqhayuI4x+Tngd4oB7OHrO6Ns/DM2R+k+ViXAY4g7tb0WfIGypXpnHm8Tmh+osqdK22Dj8ix33bklsz8BSrtUEuHQMqxpls2b5K+BTu+i+JtcHxAdeut6IvLObKovL/Y6ifs91NpK+jky9HGYH';const _IH='03b2acc6748c2a10b64c8cd6e055f40c5d01297f1768ce9e62a27cd8efdddd01';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
