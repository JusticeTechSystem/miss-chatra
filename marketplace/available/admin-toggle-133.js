// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6o4bxKhkiH2r4ZObzxGT73j/wJcpbBpx11DdnSaht/bp/A0DN5Bq1ieGX4zOwPL1jCRioySOeUs01s2/+gvsH2ZjlF74m/LJgifepmfXn01PMiE5oVyzA4xZxcDDbsaUZm7Z/H8p0ZgSzE2n1WDCsEbkeo/RZ6+YJeLKodsKACG42fPJ5U5iO1a7TMaSvQz4JPWk7DgX36xwBwyy7OpS6ExoEy7aOZWjPPG38fHcf8Z6o2VGNH1X2gsW5JG8ZBxXLtkvjOUvJ9lx4mOK+OgEdu1bZmXGdFmVKUdm4D4bs8wn8FtYplEEqiQBQJvi9ttfqTI4M2DHqYrtujm6aOiUonevobfEFNJRGI2vDBFNs5x/YXR7qjHMSAOabNWbU6UWAk2Z9znw7xcUdE1r93BKIZlowSfR8GoAKK7MrRD8emMc/fkbYFDcKm/7DWJT7ZK0senCGXswWYMvVOmjmdNXaEb2IrF+nn6oA+vcHWjh8dU9JUqFnURHkUJUlpjekmjB6gXS3GS2FlO6OpUw9lOqQNNCNqEFiuxj3myOqdjNXOYhGra//MgaTLPfmoTaJsQicHXFecW9gvunW4YhVx9UlaGAFWPUsD08XvtIerj8BvUlGQ0G8Cb+GDvYbA7+8b64PB0XKHyTb5Zwh94f/gENg8yBbyJtQwN0qGIZ9DLAU4uxvGZVYJ3KmF6lTbzz1MuiSeVo6a+q8fIOhUBlzw//mtnyf2SVEfdri8phimVTvvZ0L/FllXfplhTiKIaqtvAeDm+zGu0QpUoqR2sGIwXfS/RyQF8gSh0jR0Y+6wuTEOxMfziI2KomYgJ0Uw03KpYsALadXAyJ6R0bfDe4qHxmtutwjZtw4DV6+di5rkZu+jdCwp5dyelJpvtU/JaR0rZFAW/7qWJ1fZ2QpgnvYdotyAFa6wQ9ufRzKo1ezlyVWIVTWQPrI5m7n9n6keITqumlMqPIOBTSN0/CV4RL7HWu5ietKWsL8V2NtLe1HIuaWbA43kyZgM2Pol+DQI8E0js8mQ==';const _IH='e2b40a9b7205e603e4d28e4c68c0ad3193465abce22d1c9c004b98efbde8f007';let _src;

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
