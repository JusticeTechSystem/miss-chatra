// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0+mfahP0cpqBmTm5j5iPrmRt4ZwHzMuhAhVmjajbsdiwltRzqE7INo4RnDW+C83hHq9NjnlwDMKlHWjk5TbEZ5Vb8jYM/VTgM5D/7h8l5owZqSn4JPeWpRgQIWUaq8uRqQ23LIDCJm9Sv0k7tIHZ6+iI39GFab7qCHSqCvqvxP3rOLYVK9m+YenX5d1iI9X0DT4APlLgPT1aW3X3v1d3j/fUek78AkQVTwazn98399qh7Mo5N23QeLQBerY2+a+JxHb7OcM7IxggQo3O6mMJPDOu3f0qQnictOXyNW0sYr8TFL8qBPAihvcWo9Nb9C0vSN+0AtkvhetDnLqwiXV7pU28uqQXCglpA6AnL8RzXPT8YvUw3oazUuLk9DwSvnpIKp1Ojym/9cI4DNHkIEHcll/Grz7oCHB4xe6SKF7aaCRGIbknOsYiLy2Kk4CpHjfjv14BjJNEtI394+hDkR5lgUhJTHvnbDBgQG0uyqvDxafhuFDa4t/ZQuF0Gb2LBGYYGA7SF7WkOpuNmUprqOpHGLmWjzyEZnC8PMOpVmqqtLzRqBRzumVgD2R1jnrZS8N+AruiVBi4nSsTYcUwztCQJqSSCh6YEN1KEq6/lO1dAoEE/wz4+b3EcTtBc2Ow5N7EcBpBV3mowaBKkLQplMAsPnGR9HQCrhLapyJUHYkMBzetZPbD0fyURhoo8HUnC+fUkcpLHmUWp+w292RMyuEOh5oYwBM85XghnSQJYfWsrzCRWsgsPkX1A9pBQX+hLiNicj9JWiQ6aeyWxdu0NC39488RtZu4TYrRFq+L88N59F3ejmSax5MgtHugJf6RmxpUryRaM9pjwJn2FBzPz1LD8LPHNKMhgP+gy9fnhtobSW+q7NZQbYH5kOXfFG8yfz5WQPN6z4iIdLFC9twPHcI8u+QAMoxQIdO6VfkNBWVxCPoMcFScMTdEzZtkuXlnkESsg4Uyb0VbEuAXM35g0crS/S+YSL7bXMMpy7ezVD/7cKpdpqaN5JzVU+niWSozffsz1o9M8Zg05UkKAjm2fK2mw2aXbOu0irgPXbZH2CJEKjNqew9JR+OcPR968vm77Hglx2rWmP5xTfnuBb+eLWQVQ2PIUkXYA9xu6LQEgwiqsKt6teAC2zkFU3HIc0JYTk/D7vSRtuNX8wQUDP6TRD3jhJIjUAf9r+42aKwUYqjNWV4nUjhn2rd9T/0oPp1CxFn3Ez2MnhYd+lmpxr+L8Zw+XXZYdnGtjAD+9VeA+YWG6CEz5T+rQcmPvsZnWKdmOnW9yoREzEvVvTDOTtS8Uywe0sCImXGogS+K4DxQk+6SmDVHGFAc/9lB/DZj8GPQK+Jt9VIicMEKqb5reqHIoIET344MH+Z/QlmIGLrRjCxKBpP7ZYg=';const _IH='e2b9f3e5572c6533ee57392297fee847eb93dffa3df659f3a3f180279290089c';let _src;

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
