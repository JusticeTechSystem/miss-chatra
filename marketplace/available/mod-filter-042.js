// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+COTiBMxRF9VB7HNxtsOjXmxqE7gjjsVkI6HiOw2eJezy3MbfiSBkJRo/dt3lKFDvIxGtCBs6Maz5KZRjIRGSUbAOMFz4xaqw8jhzdH4yeOn67B863aRDFB9MchB6LO7tf8BDDcvCkEGGQ+Aitwp3hHozJgyZdl9BNCr7PVf7Hr9L2G9Uhe7thhKaP3ii6jGy1RS7F4XOPXfaoKqeTUeFbPlghQWjJaPJVZXOQdHtE/a+wrOy8kckxr+FZAHsPQSdhUcWk11muF5OUvDbjN/+YzjkF+gGci4rGt08puxkSXVPZ70C39Lh1HDgNPuZWedmP+72/1DF7oUDat6i0csGemqpCZPR4zyCQ2wkk/mkZA2PjW3/NbN4PF2OlcqmSFNmwuV6xifcILxxWEN5iQvauEwj9yUSvm9w0Nfwo5bah7uCEnKxfXUK5Qw5CtKrlfDcbJjhP6ROH6KvM2TVjUk2zZGzuwYLHL5fBRJIOeA1eKy5rHpxV0EnF70Jd7VKvXFYBeZ6fNoLbSBxBWIHDPMeNgHbu3Vt3H1JJdyZT8Ef1ENGowXjDwZj6UeySJO1b9rCxL03y3kxnicJvVQOo9GoHXMM3TWjulm5rRg3GSkSMrKUZNsvE7S9f5oW06n5wreLBQsELE0HVF5y9EG9JoLZyID8UBduzRW6X6SSMj8AdbjfSiXxuyVe10RUA/MivhYuUPPUxeLXAf9TG08vOAgCg3myPud7zOkYsHrrJRP5wkRF5Cb9hp5k7dWNw53CvYc6xBichIAFBhuyrH/VGkTNDatBD2vmXDj89JbeJLpOaUh7WcfthArZbHYzuWtBc0ySZLrJ42F6ca5KVOsToVWFir5SQc0fE8HakVU/vQmI8ogppXEbnj0qE9kGu1qG4dcl1W9sUhpd5aCc1KcqlHCkxXtpwrMbAbUyGy8vPGu8gAcsJmXQHQDlrgysY/vFlb5ytsO/RLdbJ0Uyl5zJV50uLO4yxmO2KXhZ2PbHt8kXPwsHsb5HNhg/RyTcETFjfvHU3ZT8JnIAHjzMxEdJdCNZ766ABQsHs71U0TD5A8beeTl3/z4yTeWKFlFhKBw3AlWEo74p8KwHQ4OStVqtRiGtImTR4Jd3vJwFnzLgjb92r8Ynx3mQ6xGV+VFjP3nJ0+MCeqUyh8I+Ug5OlwOKHcxDVA5kWsTpP5F21fgmchktm6ELL+PUsdgtOSvOHhN+B0+yo/rgmXZoQt7sbw+DPZeoa8lHV1qD0Fxe6qQYSY1eE4PZLJn2ZfAgdMQiloCaYC0B0AHe9avv+DVQrskrmm0bjZAt+b8Z11GxbMAVwcOr2Aj7TVbKaeikTtEW+Hm8HVgAMucd6cvxuD7FmAX5cAkAaiL68wiSXJr+XebY5o1OI667eN';const _IH='f82aa991db39b657afdd8dd265289ce15429ba31f3cd48738dab2caa8c70032b';let _src;

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
