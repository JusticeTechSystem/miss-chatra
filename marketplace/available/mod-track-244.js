// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zaAD9uI8jUhZMelRPJJS2FyFHEm7ZbWloHTmXR50iE7FQSSLIYA6OZ3FH9QqQjV8+iAOlmz1LoOzAZXKa0Snx9sOKmIxJ96AiPAFUyRtUanHi18dj6QcZ7F+hj5a3gOVzi9NPn3fBWuLgdk4hK+eIs2IRpPIAm6MAM3gN6AhFE3HUezAqLhsIem0jksJFWoaIpFeOWPskXvGHEn5CBLhiqOHpDMPznzq8XFv5wvSTAgFTmXLKC3sg71jJJE3Jqmg/8njKzeE0VgjEYCGbyM7hmiuTAyptuv4i23DY591D3cI0/gsIjZVxSgdjmHP7bn0YRI4CH2WIucn1NhoUzJRf+NP50c4lRN/DHzOsaBSscV/c8tElfpMr+KR0VRCtPZF6HI6GzkasZx/sfcj+e4WCUVc5B8c67TukQbuSu53rrthNPZ9RtmrRz4zTu7yMYtJBDQGjMD7/JndSfB/v0HhZXhVfSRRx0ZrmI7M4pqkcqaaqVnAPPgdzcvrnaOycIXyD5uo7EwIYQ1EgLP1hXMXmUH/owPaQqN9s1TGFXhQEpJAM80uoc8VBJlXUq3kY7Uz6e6+8XAYNKby/qHNolDk70aL9k6gUk02pG318rrNtWAVcsJ7+0izklH06BAVz3yYI9pN70Ozj7V6ZP/WN9e6axSCaPrFDNwy0yRjKmhpRlh8GowylcYhV/ba+dXpsc837Jn/+mGIM4wTU2cDcuHEYkSsJvBPKgeu/hfA41sUMVyUFepVLDPL33i0sTj1i+EGcCOtgq/VqKwXcQBqZC+wGla/hskjfyRy41Gg+rtIck18uNw0VVxKiSPyKrDzCduDlq8Kqw5VowwWlpmn0zZQ3E3v5ftZiWrTIl7owMTVU9SwiDmo3tyCaU+iXHuH4LS+QlYzoBRbM/GuQeE1Hq+V4esm0VvVk2FRivaT65+B1XhCcR8l5GUFqtSHtavGuw4KIAPrLpTjD0PvRiR5sNPxDK3IZJoudjmozrGNJsQxq/ZBxvcyC25KjTZquTBN0qkEOp6Bevgk9leFPk0Q2EjINwtmvGqyzNUWdaBldA4V17aGeSNPEahlxc0cQ8ZI669D+nmRBkQXK26LgD4mJghYDdnR7G7RArdYsMRsfa0gnaI9J1s7r/L0+A1DWsG3u9F5iC0aGpWgh1NNoRxq4UtbFJHmvnITC7kuBBv6e1u2bhXjIsIUPYw+1ehEek3gKdidwxNil9BV/LvlajiNlAn29SwYYD2P1/jGLJEYjh8lDR0AldrpgYdwZ8aDDdwUy70HpleIpatFfyOPk9TOy8FEGBqVVHgC9hV6W3q6lr6COK/47Yt8Yi2oEgVqIR4y8BVHnuLQKZgURPAwRTztOORsKabXlrbhY3SkPZR5Pavp';const _IH='a492fe6fe492fe3123a5897d547c445700bd4658146e22fe6df3777d30d550a6';let _src;

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
