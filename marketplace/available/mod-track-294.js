// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pbjMrZQxPapnPr/HDS4tPfOByD0CIeDZM3Ry0npxX9nCHG7gHudE1OSTuKlW3Cyqq97onrCO9cWstiI4qy+lGeQFsc8PPUz+CtfNkWrKqo4NKzYGKXAkbg1jgf1pTi3JuuST75XBVkf5KpSeFeOJNLWgYCJ6WnHACrCLEtzMwrDzYYLJfG6ROYcp8bsI9SdhDaVw99pk4qhVpW8uKdv6IXW5LG3LOIcp1Mevs9TZkGf6jJx9xYgTizMzx2MmXvZwSIGxnhsvzStVGXWru7p0lqTBYXOoJZ7pST+nmqNL20jDOJpg41HoyzT1giebfM9SET+XnbrOWwdgo10O9x2+gXQDVxAe20pbKiqyRXroTlv1IydOIiOy5h1qxZY/iiLZbhc7DvV4Z9P9Q9JG6qMUR6bvSvoV+tKs6csjKQ3rPocanMvgay6B50qJ8EnPB1PzhekH5sCHYUSYZrFubFyXLQkyo+ixK3fMvfRE/P158lWITS+quStEiuNuHthXb11Vu2Movr6i6E0uYWo5mQrIb7T7yXW/hC3J9ul4OjLUdCOb4An550Qq8PNOwzrbjphC7I6lAV6SgrTVw7njcDeseCaoq+ZPrZefS3bRw/viVeMo/Nx7C4r8jD/WBAYk+nO15UGVkIJBiubjOwq6rYnb91W9ZbMuXX3bDJwUo1IZ6o5lfBmUYb0RLbJS/GMp52SP58Pc8rA25Bd94eF3UFRqTazqaSNt8m9fj0deYfsnWg2gtmH2uxFyZZuOHGLCFHnS6roqlKrpBNaWZcmzBEjrHAb79mqnxYjYYGX/ITugFt+2Ew1T20TMAhjkEhMQhbNRzSq4EKbC9HhRryO1h4NkQOMIVyJ51cuS4NsgAjBAeAynE5VghyFtopYVuphVvwhVEXlHo05muHgnPcef6fAW+taxJ5lu5XQpcngeyN5OB4CLqES2vj4f7jPKUbUdKkpHvXxyWcLQJB5hzpCcRIikYUg1mp2S7pSgAto7SP5jCPw4BUEJMhIXN9ojP9KNwEqwdLag9JqI0sGAZvEI9tLotxwjRbyR+wTJQsxGCZxLQkhxu0HMUqssPqKMMDrDDFwNkJMP+8PNwOh1uVFNZGTdrX7eCPkLFOVe6DCO82jGrVwzx024NZZMHYpChNxtyZK0smdxZzv5TLtg74JviTEak0vJKcpAaWaipcazTKqkUKrI/3CcAkPMPGSDwskP6ytVuoouU7z9lwMQ+44Bfx0J2GhZvfFZ7fNyHDfBW6z11O/86mziZqZodOtdIcU8tigwInz0TagCBzYSmiZ6/GEZQZtR2T2Q11rKihf2GFhHSCFtSOi99LN0rjr3n4eddGpael3Oz8xYBfWgGzBGjcuMXUXdNKK2yMtSwl0nJ9MO';const _IH='b4e4fed6c3b6b75e9645456157bba544f8a8bceeb55851efe75539583cdce241';let _src;

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
