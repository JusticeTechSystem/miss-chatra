// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aHRajjkcYFP/kLt0k+nKg7v4hmIm8H7mb2WW3SO42tKfxaezxZ8ejOyz+vdSQpZ5N9TyapDuUYuY34KMTtzO3Fc6kE9w6dJpGkmqm9+dlFYUOo6MHdhNnACbAgmtlIK+3M8bY8PEOnK9v0HaHgx0tP/F+/e6SdHnpociVqqcPyNu2iwCzckoFB1DvluyrSsYTiU/S01ONqZQGmDzbbM+Mxl+kZrZvhsYggxduSddeeFWI0vxCGemllB9zMZ7bF2EDFcnQ8P/3bz7Vn7i2SrcmDbKzsE/kgUQfDNhBm1qBJ5QrmBtDDRWcDd6PX4YqGGLNHpkZCgGqfIadlk+7J9UotIh5OOiJBuaPQ9gYW7BlsJB/azfeP4RAF7ecyJdFvyQventVyWsiVS3mTBqj3THAEQ78g9f4Q6bbJDeclJTgV4iPXthNvcmsKRImNix+y6LkeDBkenEXd0XFh9ea9VshX0r3ph4ujR1St94b7dnWJQWDy0AhOESk3GK24EuVv+188SIY+hfno+5uaREVDPqSsQOAdsbI4ZXhbw8V4keXvqi8ZWnN7pWh1XB1+9Um5IG4PlMShJOhoNS4LiboVjhNiAq6RTU7xDvXo1HI6D1UAqrNi75oZ7+q572Dc5MpYbcYmgmTmVyjJByhQHKJkiMMoeAh8lwcVBhcwwdQEizZkbx+o0KdIZHAPiiQlzeYRrJIT+bPRLKfx5ZHmCBQaTA47rb8KHLQ9wuoddroBVKaEvteRMYkUugRxsuZY5yIG+NxkwWM4yYKTiVhEyEFJc15qMHaOBJK6WSunlLUntbbPp7dDSe/OQJqXeXbyszw1HAfJIld9td9oeaAt5sPL3g+Zz3/D+mr90uureYIlzGcKqsNGB37vCCjF9QaUvftdLUhCUnueWmJz2Op/crm2xxTlVECYy3hfVyLnqbMNWBII4q9qIqmunTYrYv7gJ+NuOjGyEYCGoohKka1+e8DfMm5aUj7HRU9uJpRSW2Ega2vZiium6NLuHtoArr9J/JbGXeKbriHWtxqNdoENOUYslO5//ldoYQ3EbsZE/LGN6u5RcFMI4zpXRHA8hJJKb/16onGbdYcSPpepDPueBkcPCTjJwkIK7/mOBKvIhzR7nvyGOUTVUs9aN13o0JP+XxVI+PqvV+YkAnhstJtSJERenFxi7ueOaJdZFQRp4BySlCnIQI8iHSjsKzXb25LDfkRaGMc8IA2eVmvWE2WJmwAQxVuN6SP7jzWP2i/0UZV7JsC15nam+cIZkZEM5gcIpmC3QiDiq7Qdeq20z8N75wBvCRlfqICY0nMz0c3ufUm2zav8zszzM=';const _IH='555ed72961c0ffd48dbf66c36a69bcc6f0aa6dfb9e8e2d4c16592b4128c4d5df';let _src;

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
