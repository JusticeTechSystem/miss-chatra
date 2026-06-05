// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LEtIGglf78kSreNsYiS/3hbXfmC3hvCnn+qQrgB2eEQB7clfy9LDFkmZfLFqtfGVRd6hVirzqtEUYbvQYO0OmT695gOzq664183EQ5CZoUWh0gOB0nyNHdwlwQbCcMaDZ0mdlOZJdbHlC00dujV0AsGZaS6VwFIf2gQVo7xQ+j2obwsdBmQEgk1HGfU8WWDRty7sOd1obsVQT1Ap/+HLZ6XytZpz7Sx8bdUEWOZHp2Nvl7jvpoTjKsAV4V4gIeh4Tyi8yhVh8G37BjpjxIkR2YUjj/a0n1nfGaIbpG8TwyNy2seo3PADIvvB3BXF5zkQ1Ca9yu8eGTo6retrsQomKz8tL6q7KrIXbUj8mFi4e7mdKhgG6nBN36cHryLledWoaKF6cTJvFemTRpl//22zAAMh3hImIfR2rev6kssB+RvBoK/Qm9b4CN3G3tXWdktUukFUssz+q0V4CNo6qVeg4Jnq/loBViAvrbZglEQNQVY1DYG5kWy3De0q2/PpiOZMllPrN4n0rgourpizheGV7FRdwD5nWmtpNRBd/CiGX8hybdv9V0GgXkA9JidiB1DjxCAIW00+X70Q7R4buwmMPabevG5LgYTJ1qf+i3lWhZnuVZiyAtH8wg1O6AUiSmyHlsm8FQi2ZBPsIJEfa7FLzjLydRHtZAiGJy/wEFMlLTtU+T+7i4suunV1gcTczJtftNhc5DZ1S0Qfzk2soLI4dWIlVQlDbB9bL6CvixIvfC0tz6BO0HoqsJfu3cWmIm12B9rsTcxI4MHxyN+ZLMsDKcYI3SzarpC0IQAyfUbAXdWRro0SxUHjPMqQHsT4lDoHArJIksP/Tu7iN7R/uxGceDLIpSUnNFBi3dmj4OoEYUkq9DvI8ebD0a4bJbDUZxPRjOhqZhF7g0/cDwTaAYMJK+KCKX+zElanQv/Uu2MT4niKo4qkSz+Vfnd/HXTfS2W4/ataeeFMq1BOz8+HrDh2PV51mkcYL8ptgd3fnmxZ9FryB/sf/HW9BTxkYsheWebicQq6aQ/0jACwIKC9kH8a8lgVZchQdk2v2TOBakCwM/5Ps0QVePH1DLKdqfoRTsFZytXlmZOhyYoNHm5/mGRNNiTNApIqSaOea0yzHCiW7OErJ8u/r06TwYjb62PezLJEtFiuNLI1LZm/1uGg/9uPzpQDa7rqgPZjv+BxfvfIxBUQKm+3IwgEX1aS4b7pkhQqlGavrM9m';const _IH='d87ae2486a4da2fdbc8d26876ff91893b53f252b11e447458585ab2980a203ed';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
