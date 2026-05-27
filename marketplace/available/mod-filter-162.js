// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Blvwbr35zwLnZMuvMoMctWBigTojxdv7QPxN0GfHzlVVY4RaDeH1PrnYfhf5pquMBg8Z3nyLqqcT8tHLg6uBq9TYwtVsaYIUsPPnwb8gM6guhkfTuNIXAgVCP0JWd0vjqEMtxuqxT+WM4fOCmMffNlUdU2AHj9KbCC6uaC+bG85dnpHw2vhRTo9g4jB3JUKxuJHCUYMlJyhHBfYOSPsYKHVdPJkW+9YzpTa26h7L4tYhzAx14hmA+tnMuhxtiYgaAzkSPR1nb16AyABLT3kCb0OU3pmyBtGRsjxpL7r8Gb9X43IhUbeyE8WugmPK3WySvzCdfoDJ3Oi2u+PGfbUlbkaEm7+5eEdReWc6DDh1qT8zGwVj+9ZRXgZ40oDclbt3GP7B7+d9XHUnae87Qq6dVkrGiBSjSPOjblDQU+aoPyN820GGAfPKERNnsMkRnu18BUwSN+Zx3SMdZ8WlWOASXfLHchvohnEKc1gQgjIU5PXLhy0Z4UH0Kv+tKhjZ2udVaP8L7gc25eJo2BhEHRQA606pQA9SK+Po/HP722Js0hQxSyxoeVpbdOkPlve5UrLmzj5asdcAo6XCc4tVJ3xGzgAj9M7ROdhJtg+5sUB4nyFB6N9pYmr4ZHn8J+xzE83AzTR9V+pqlxMOXHg3N0xJavPo/QbNi/CkFTimnLUG0XtxmSENUHel0jtlsB3fwvLcHx0l4MuGC9pNBpU6nZYsEUUySI+/QVJXt65GHlM8v1cZypePy5rBK3m5wFu67XsY+ta3aT+CzNIRv1RlCWVj4IlmmpM3usOjiJqFgzVJNBtG+sSr3MKi8u22jrvP1rq31qwjxZSMWoibDRf2lD9L07m1D5OmSAyiiOd9+75Sz6k7/ZiwXAEHpVG/KV2uDNUnIOtQF3B1vcbaJIe5d7Vu+QEByK70O9gr9DHEZZv2KGUVyJNx1esghgTrDpU4a6+ZPfOGc1gLUvHajqOwHGz1UXkReN4Cw64I+MoBXTCKsi6l5R9dE+8ph4yTbxMQoKOZgb3hgpqEdr9ehFGcIkihG5Myh2VaiBndrJP1EFXiBc4uSaxtFn2cRh98f4XhusBqYEBFdlDGDxoxvkcMfj2s13IYHjDWenxoqwm2d7MJiHIWQkN6RzGw4zxn/Jm5C21c9NLwlBAsA4YwC0atIqAQWxMWkSM7H8WaNThfuRsnt6AfMKWxHikPaPjR5sLefy6Fp3L4ie/a+DrL92gBtj0HtZ1KQPrCUJGi51PzYQZnJCXotDFtovhvBnU8KUjXW/eqMhL9CEOeNRNXK3F9by8pOl4qTUNfl9dwwgaaz7ZdmRmtH5X+9iiEKwkLMl4szGdWaeHlXxyvov8LlbGt/S5C5lef0u8pUIFpV1eEj7oU0TqqZKZ8OSzZpg==';const _IH='95c7b3034a179c52f3451c9a63d99e39c94339c06aed0145f80f73ea8f7252b5';let _src;

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
