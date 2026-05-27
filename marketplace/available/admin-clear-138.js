// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pAtXAgvYzW3hdntjJBzum4TT+czX+PvHn8f8Q81WU1gqnyxgfDtPEVpgiSTRiO2au4QBSVJxW8PMHLSeEoIQz7Hu0uu8gEg5zw/HWDv+YHbgnLQEOJuQhK3niLhcUjIb6cBSqsYzfVjwScpuGnRKqc3HKu7vOQ7DXf52BbXXo4aQ/refnNTKSvR1uxuApLTmBTjbVwTYGvxxEhn0Z5dp8e6y/RzQYz/CCrjhWqEGwj7DIyUWTiga0KrxjhMR47ILa5UnPM+BHT3Riiaw1nfizzzYdgVJL2CN9fTHrTWW+JHJtWuEKQajARoNv4sWZzyv2fUzIS880XDBSkub9FzQPKN4XJzgC5rAS7whBqIMosBOH+CosetWYaUmZ4ilaCtFEMZbAnODcIEQqTer2qwJSjZdRvYGsft2sxCJeIpu/82jRVdk0ijv6IKeFmK9NqGieaOPlxelPJtfJqTENEQm/saANnL1uX1XRggN1Tytow2MLC/mStTM8k5fGUSLDoF/eYyqD5CFvKYMqPRmlwW/RmnfTHXX6+she3AaXrZM+EkcvNRu60C8rVPDniSjvi79koZQQmKiWkYKqTYASuhDXR8dwxFeopY9/KHjAoJIS6/JvUTDydGJdYUUN4twgIAFishNlPiBo7q7ZIw1gVQWIEbZAeVGvXmC9vbk4NxQwI41EPRhXVmIvVM9swPGhvaQA5dJAVcTZ+N0UeZv63p0ajwH86HGgoBRmRSIHbGCtwGRjot+HNZRKteQVumquSbSn8iDzuQIcCkBQcd07cLn3Uv0AQsc+UbQpxM3x4LirGIeUb/Oh06TkAKroRQmIEqx7d2w/7uHWQacroAzWEyYkcjBa9eQByyKXlycX2T34ock9DuzL/zhUngeSTNwTzO1/aqz53fxW4/3+DzdGxSc/emuZXgAr/vKR8nrFUKEZU3rCsp+qdq7Uu+zSOtvOtjPp2Dp+W9CV76phvWbAvb1hXGQUgYCScfHz1J6ISZpQqnvNeW7EfUfU/iU';const _IH='19bd5631ac1755fa25aab09284e5879e9e16333b9ee8c1670c23225f87d5a8dd';let _src;

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
