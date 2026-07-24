// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHVHNQPmIKfuGTzTDQ6XFd05EWaSOy4eqaj8HPPppl8oNVgC4kJpYxME0GV0JxoIa7BScK3UN8gm/BU6L5Y21UBoG14KF9hDvazlRGmpa1pCdiE2WwdMhK37JKaOYlCqKIC0aDHvzjJEpleVd7rdXk/to4ELUs5lM8ztYaeYuUH81XAZvWVCdd3H6gxDaWzmDfBtcsXJ0nKU0ZvjatXoN9EmSaBr99uC1gMQM630yumM2foeHsA5jprDcaW4PhUKsZKYvMzpFc7LXVnS2EuHvmWwCCIBHtFhYFbbAi6x+bpOjVgjrnncrKxlTSoNuj4Bh7B1zfwISuw+wxGQ+jw1fgCs5FJPvse5BPrHwtrH+n8IQuec2sPryyH2HqKWFr2sX3KfKm0g/1wBsIbGBzKYwcui0Ip9qLwfp2Ue2rIbW7I2/QH/ECvFw6ZzhjbbYfKdgR1hB0p4sV7SVgwejBNd708LB9RbydmgiTt+qs4tweinQbVNRk9GG64G2pybxkg7ED7prLkJ4B+AhRKS8jVayHtUAiS2KFYWOldVvlnzI/mcp7XSewL4Y9V8HiKJ0QlhCcLg4kcWaJ8hVJNKmXgKv0RBRAssdSwHU4gjiB5mlihTGSUQPu0SVtRey7HeHDTWcF8MB7gQiwSfah6RT6+KiR5x45agnJYEKe4CbSIvAjT1oN50M+x2/UovoQrhsl0ymBZDBOz7Pp/Z7bYlBuSFpo3KqTzjmTrQ9ARcHYEGSyWHTQNGYQFZet5R0jfnjDihYHsCRZszkfJxHtTaAHu3LU7LRN+C8V4vC78YWl0TUEVMQtWGjLpQ50Bl9naCf9s2S6Ov6nhYWCPGgnwVf89+Tm0R5rSEOl+1W5e1yx1V6aQfdHLumExyWxwGyyiGEskIVK/lWHNb36bkAwXEAUPspz4VGVmiO5CEKYSrGtEs3seySRiK7nEPh8NxxAtIiIab/si50oJPRxbWXBHPyV90RCTAgGLRW6eKfEE/sPI3NyAbzbw4ok16gdBRKNdEkhvE2fsbwbXMu9AGD4+VEql0/93osAZAYoT1QQ0sdWWlegjS6FTeU+71zoS75Ds673dbTsYiXZupwG0DrgGCKfKmrdXyxF5/5U96Fd6Yi1iFtOF9+wgFp1IRx8NqPF12X+WYjcZpR5mVZma3FDTYUoatkn/uNgKe0cfiUpawWLzHLC9IqF3mIErGReZSiD15K5mZ9f3rizB2YmBEYe/aMLM0SMnYAcx7poESNsdUJoTz9FThq9NcEkeUGSRgQKNfKur5PxmxgFkC+zDKgawaN9olixHHB2stW5KlvuxKj8QCe2lA29wZOJQeLiLsBNVkttwBqKOSjvsNvuY903Jhg23u0QWMGk6p4nhNG9IEZFVyw=';const _IH='99b7299ba605c5494a6f92b56d9e9b4a2de73d36577e5da9dfcb4b7676d6102e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
