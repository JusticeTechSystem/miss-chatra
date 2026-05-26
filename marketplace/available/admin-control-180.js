// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2d9CxV1dhuyp9MMm/YxYgG7F+4nonEvHVippR/bTmdMYG5y4cWU3GuYIL4ScrLm7E/3EnQggRemslY8k+lTzONVhhvfZ+Lt66lbVch3vyNrwtTe/FmY1e/eOyJhwLKwWcmhSSQ+ElFlEPpB14Z/cqMC7tcPhHy1TW5yeHco4SxOvsBk8AMvEGJBeeTHkAvSjChPKQf445fshsJzFYr2fBhGG4rwlsI7YlWhZqNNex8ltZF/ZUzNGHNCxydKzIk2HxOy9+lkLbcmSJ1bBEqgmwLyqUWiwhwrYQMkMlHMSVma0xJVX0WH1/z3iJkK0Rn8n8NGDwQED5PcZu5BrF7Cks6phdc41jLh6FBJM8m5TYEgpXOYbE6whd3A9fgOY0D2WJc8yIzd8CA5+GOR1H2wwOKxYbRsuh5GavcCN0tSJb5nOMkSty94r6nubgDTRLp0J72XVsVwpM9FqcUQiiVQmYJaAkL5lxVcyvs5q7vx9YuJvvXP6yr0OOBx9dImFmHb483P33TMZvyQFUft/QSz9i7yy2AWiPouDqSIF9TQLCzG2hpGn6OAb5DB/J2Da0AftEZUIbh0QsAeL0+VCmbz9yPI40RWFuFR4TVMcgHObGZJohmiZWC5ddskdPHzlFm4lMwIsjH51C6ByMnUe88vF4pWV1HaTe2EpWy6wlsacIHGXFcsoFqenl203ZvZr9AgpPtgVgaa/5ZgQ/YcJjYXvHxS2/1pGyRU3F2bxpCXAyCR7RmgzC+RmDeh80haulWbYl+zsvYhM5HBuzj06rHi7oJ59mRF1TIEhtlMiGgaMrqaQ72+fimnpW5fptpMKYkRu/L+5es1/Gaj+XLGC+V8VVx5E6RlGNpy/h7ksPzMOJbdwGgpUVUIVN6L6GUHo7zO1qFJ+1mmIlLrbMfBxbAGD/TiX94vXQDNPYECpqX4OeB/KbJ0MGLSO9rAuVMjuPoRHatG0LLXxzDvmxnrZBqScBiRbCXGkXD4bKIi6Wky34rMZh/ojW9JLUZNfKfaMhjKH4bU7WQftptE=';const _IH='e79262a03d112684d7c401ad439e883fc6e01a2cabaa9e587981440012622102';let _src;

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
