// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b0rVdppPykeaZm+964LB82rfbMQVBwxGwsbsbVhxCvle/YOQnBe8RuPfqJIWxMmxTaJMv4iZUBEhwTltOlCqasTaKvs5XNI3izGPTybKFJhvnkDkL1S3CHgIBne/boa81gR7WAisD450wvVrxwbzLV+hQFpLUqQ5iOox2k9sEX4ZNXMKHzee6m7raOSE/dJaCpMmH2egQJggoC7nDynuB2mpfeinVJM0Y35ifspOtPZ5HaH+U8VeFqER2GEoNEgsZtZShF+WvtJVXSo2peNnqN5OjruFsgfXIZadu+QgI1uUj9qJ2ql2LHEdvV2hQwpNBc0tmss3fnfi88n1UHs5VktguidRpXSD8eAKpZ42/ma7Y5cd0HKYCjT5Uzxa4PrfQYvaXz8IXZmTzsiIqlb9WOCwXFioxLhnzcBBe5XCKi3Ny8HAI6ZYmXBOuhqMJEOt3UbXw5QWN8Xn8TGXL/6Lksg/XxDiBghVp97u+m0PLrcYYrLDW9A15QXgaEoP9gSPL/8kw6Ciicyk2+HCSqXhreCO4ITKxRZvK3E9iATWFUoNqp6kqSvBhsQOcEm9/UGUJmlQdL9WoDwazOARHzaab1g=';const _IH='8b517e322f8a337f809d4f1a554f67e776e1da6da4939a7be9dda23499751d12';let _src;

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
