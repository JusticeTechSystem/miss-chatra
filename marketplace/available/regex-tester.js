// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N18XPwgklbH2cRUf04L3GkeF9yYOE2zTnQfmIWAAxFHRvaCSSRsc86S7hx/lzBGEl45m9+ZjvHDlG1CEDPLEZ8/JMMhoG86RxQ6Nd0F52Hkk5Zm0YMa7GsFRnVGp62B0HHRXL/D2mVQcCP5U9/jV6QndoH6Ibq6TvOxvnpdSSgVK5Zwhjn5ryt4VH+pzifKw9Ew83qr2/jCKGvSrsW5N1NyB9r0ZtBMBvGok1PJRZ4dr2mhnVYjwU1AYEPLXX8EZgFpV5rniyRH8MjF4rV5dj+zsrsRVeIQ56XwJKmBUMUMh09VugwqyxdrZUqQqUHoseFrVXtV9Gu20E0fYqaBs5mLz3A1k79G+d0xLD71VU7TZagbl9GGWJ3Wxm4ZBP4AxUnHRlpoh0lcQPo5FjfVQPWW8kJuPhgiO81aXAZByn6UeT7s29FnCmNq8ymrwmXFrxxL/BNLcK6ocOz8tq6DThyB2hlhln7jBOqa2HXxiG+1xvvdoorJkgaU+UQXPA4nSMYySs/qdfRczSNhewQjsI+hZ2ZlgFKi/hcFgrW95E5XANuAte8IuajadKnDb1tTbAIvJF8XNvafh/33Ucbo17bqJTNUBbDufogHYKplQWcgDFlaM4/T/RR/yZX4sOXMTjWEGRE4J3EpnwT5xjArsvvie1BLa7NtQEiHFvw/MzmNVucvE6QrUL9/JcYgN5e1yz134wXWCs9RDOmGfzSM6PIox9EoWymDJ9+u/q49HgAKFfPidmzAPx5OgiQrcfQEJOgqowmUBx+kroNkDZOZZvSRRrN5lK7tCDsq5UZkejdQVAc8BVRLfu9ITjnT6hHkoY67jEa5zij7SAlPelCOo3ARDLCqZB2QpTz98Ps9tSjITWFUIIlYI0EcT5gMwtKhx1QI5Uocn0yxLU2y7hDkKuCZL1U1+yXHUsrY9SusQJadVzfvfMHL0qS5W9Fwh6Id1rLLBJQ37kCNiuynw6rM4r0ZvA4aC9WqJl8BZz5GM3BwRVKfd2AJ5BEEUk8NyObimBdJ9IItzYRGWUcc/d7tNsu1so/L6/rhwURRJEOg+8jz8aP6x5PqJG0X6BnUDgdEk6uGzMeLbs+E9nRxESPqdzzwG3HguypnKfF3pwnDLJrDS9hiyQLxA0uypTb6g8vblhsB4jt3jBO9qxHdcm+yEgKm3T2IaXThlRFBoqIFBwkY+cZQ54RGyQygtdmk3NTwWUFJ7JWaA5YD6jh2Sr+IRIi8f/5jK1zlapfYrL3RwObds7pbCapToIHBTcplxm6LIDyu7UCM33ujyRJyjob/07hcUmn2MenbCAjcIQqYAl07E4pjAFlQrhRJIh2ooA3/goOQJGIdGazOv8DJ2zmC7XxXsI13geg6ox5YmXjGVsA==';const _IH='3fcb3efa6ce968f571d245bc888c879bb4d51fb1b489009b85bd47516420f50f';let _src;

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
