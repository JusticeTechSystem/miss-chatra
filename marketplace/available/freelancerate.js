// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DPlts06mr6ZLAR07Fwv9ZneWAE9BmRtupKsPg8wtE7gxXey5Tukl2f1bK+5gKXYb7WFYDoof1KZuQnhMLtT0kArh8fh0vhrXibEOSpC8zhq7tF9p7vrTzp9dwlO8IRAcg+tj/ZVN/lZddhocn89A8hrfqybDCcNYU6/BWjLuhNNqoLrpv4jfwb0OsrRJToOYKr28ubk8klQJJ0ijU3rNX8nRtebDKgseS4gSZDhZ495O4V3HOnBIdBspa/9QKk09qnL8Lnr02CrIfrO3I5xAIW9fExyVWnGIe0KTHshgzqOiTTOp91uV11DDXyubECbTK+/SS3UQmvKo/5shYAR5pTbqDCMDJbmwgptEeopqJIaECQbfyQJX8QlZAoRu2XPQlJjYHZLjIzddzdi3CopL9cYb51YgBaSNgw2dikw5CAE/UWs4/hyEIPvsDFFPfGVRafoun3JasqQIeF6GGO3fb2UMuZixp0dlsWz+oTcqpJVraviMUfy1X/EIV4Z8GMr6pepWH+gNK7ft17ukuvPOr3l5C1i+Z0xzXX62IYoHp+GOCtiRCDRwDC9yvkEy0xgvsCMfa34BFQH0uPupTM/oaZTuwgDMGUA9DjK0o/HsmYPQlFn3FMz7NmGFaB89n6+b5mXEy4HZI8YNkVQG70lQS0S2r6jwtQAD4vQ/7rLY7v0sN4H8aUwP2EA6bLE+GEE3xFewuvAuReWqQ3CVDdpX7JWls1TJUmPWz0I87WQnM5sKS+tWTiJEr8w0zAHH7imAXWZy7wJ+sgDgb37RStiJ9i/P9K2WgFz9J97Iau52tjM+vzHW2FuDK1pgKoHi/afHJHBcA4+BHx3d53lODWo+N0cLFllpr7ftz7aPSJc1v7QJEAW4NjD/8XDKHmwvoUiC58C1pRdX3qrWv8YSX7Udb70ErtYs0nad8jAs1xvqz69wbh23MxTCi+bjd2mHbQHoG9gL2UHrG2vBdDgxKFeZuPplc5mlKQTQpEKelBTm0Uz1ByPh1S/2aEe6GYeHRLyUjmQaX0jkjnkC+QR2aZKFMZzITNU2Tssesx3b2SDDnCrb7KhkvsxhboVXNu4ftVtQfP7oJuZZ/XQ42CAHLedBJDVHho+36tKMEW0oXnvVGpyUQXeTXXb6qXwO59fTCfYcIyxchmzgRLHLQlrOpZpw+4e7pl/2r4QvttE1x8y6IUtrxBOeHI7P1ZfWzUl5c4FHv0Zfn+Tlr3A=';const _IH='7cfbf469600d510c1b089a1232dcd88afad6823ce58cecb47df3ab19d3391bb3';let _src;

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
