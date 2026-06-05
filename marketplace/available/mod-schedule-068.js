// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PUcSn+PQtO8ABmYDQFX93AYky35dCnAHAHi/u08RKFzlmmdVUTQK4V+fDg7r1xn6qeJEeAXXLc6Rbp0nDrKW5OUWApQNn2nuKYabG/pn9GAwpTWmBKJ3D52dlWFRxYxn8bgrmTng0uRyRAp1hqrFwEGxuHzH+0tNG6RPZzXr7OkSnb8yAXyKTpASnAWqIg2hjaSL4PrmA2e3RXc4q1kgks6+tsed9zclb33I9dra5I181K7wq3PgHS0idrXa8dNSLDnC9bAgmEVt4M4DcOYUqu6q7zDe4NUW7bIS7Kha8Y23RhCFh51QjnwdDBFEQRPi98B/8mfn9rtcNtqvu5gKJ8ZZIjBS6yb0m2vQIqZiGDxm9FAqyFe2vx0qvPuo0XJxxZfhmDEB+gLApzXIn38yigwfhlLJPnxYIgHN00q/CGQwUF52J/NgqqkQZ+iIYBfOCjudLihMWV8jVhi7ITbuxDbSWli6FmqXQeYKm/eNnz/psnFDZWNwpf2yuCNzTCzkEqaBaeVf477oBuEy3UDh8YWCKc8UMm2viB5T54N1JICgkNnTo0/wx2oM1tapaCbPdlPeu8OSeqRnLK2rdvgPwmTTv8CWLMZCwtXj71NXEp4xG892NTB1O40Eg0L4wtDGiyQJRB9CRBTsVQc1zLT9qkPjeZTbLlFvC/YU7Cr4BqSfnsZYRJPgahr3rZJh5isbhrOfhJ7SomtP8xl6eaCkLUAOjygjaSGBftu1KgzQBgup1zRE8Ly/wLGQvVOs47SRK2gTCEySCdDtI2vMRssb2ZT9GCXdiuANrwQjYNjIwXVgGnaNq6u9hQOquv434XbYs5EK5Se+94kRqF5/vPZkM9zRXNKOurntpNDiD8dfE6yyRjNGIJRLY/PNoX6jUdP0WJgDQJ604l5vT5o+hzChHIp5QTMFeocebdfkfCk6zKS1Mqucqc8IsR8/rrsS4hBGuW6o6uNOZ55VipA5GHP5ExaCKWCSOInEaXplqvSZRyS7WxT624Tqk+33uD6CyY30OjVz4TdKBXHSJ0iCLBONI/rORE9GceCjGnJtWkwlZqDAIc1ipzD7QiPqhyYzBOFpstL4u6qmSGsSzy1VEkY8lo8ild+kmPmYGj9YPtI8Vo/P6Bz7hY9RW2CyKl5R2TEzE+AMT/3i0Bxg63RN+oL5QdlAKxCOvnfBT0THXCaYzA/snkoVaRVTlvawx1LDHG1BQoqVqEis7mvBM3NrJSXbEgLRngW4ktLtsiiEF8hIB+lrYTO9DvxJmZaPkyjmZ8jUiEd+kosZBawi+N9O1cOsVoI6QqvOIQW5bJf2mFewfsXY9w9L8bWQaLDp+aoedmT6fegbDzZMlgwmXWYxq5JheNgWxhaMVpVJf14L2+1zAaqTeypDzvEP6GWllpvnt9SshYIViIWaKA==';const _IH='731103b840a341c3ffda006b1f1749458fdf55b40f20b5fd1f4084509045030c';let _src;

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
