// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='grotdqlhy8gDhOBlKlbbOcVLjpzRuLjowcCbiD0B8uSI/1QywZOXpBiBbuTPY2rbJBYFxFN2dZ3vtc9lhMQBg+FymJ4+Ik9e67/sFumPsgwJLHnUjwYU12yF5MyVJHLG5f9reTkPWbT9ijUOgOpQ04rrZ4oRmhVAUEN2EkP3pPYgg+tRuwD4nzXTVyc0qBhFwBzX9R3oxegBFdFd8IMO37yijZ+fXLXJDHnQYEfBqgH7kUgyjf3pU0alpw+lns50MQYLDi+Rr1cmDvg5ws+3jJtdJOMZgGPZW45HXR19ic/L9d/OkEKTmRFAEDCFj0VjoyGT3SvEf4n7w3znk+LniqBnfHbUOLKEcTqRqknN5sRAfQTbgjCckbTVXAuksL9UFo2KiXaMMT/g62Ih2IIr7ytZTy9VqacdHhkhgHCzYXsX6Srpd0XaFXbHhuHYTGEvcFj6++RaB2B7EfNX9rb1vyIWQGIURHhYbLm38jSLilTCAxt1GTPUp97BOFnoTu7yVvW1m8Y9L/89iFemNKV/+lDtC/dInSrZwdeWzZwkKvi2KkisaqfdKLohXgvAfUgyrHVqUsnQmLPcWN2F/saM8LXCB78mhHn1fwKddEHOHRApaoW6hDxsVLeuFYGGHIlIIldeDCZaGQb0gins26dR6xthbHnbWQfhg/9cmZgAceR4e6R4Ol2WSHqqdDRJJfB+Io6XMCE2Uo+1MzW9toAo/k14PoRvMx7sI4o9JiCJLHvUU8ZCqdjibJTQ/3oyMiVbx1Rrq3j8MvxVu2bZbtEAOFSJNgezn0KhYZjPcsdDE4xO4F54BYhJMe+jMHbEhnHCFBNT4ZN5T6+aXH6XzshasAKF51Co+qT1afXsBjSuYz2EFVDjR4r1Oph1Z0c7y+Z6CitOFcbTciHmn6w5W96LODWl6Yhb5vG13DN5zB1JegC5UMqX8rA/8YLtigWJMmx/lOJgf0JlsTb5YEDemJI8CcKcPLjZwY+kDy2EQtnoqx/cu0XhLgB5MLPi2vOi8jxfN3imSOq+r0eukXSiVqh03d4g4MCGxdBU8uZwr/auoAlHWsLkuOGRJrkKYXafjWYozwLWe6ybo72pKhBzi0k89hGLALE7nu7m5IZ9+k7a5fPWtKdZwIp+XdrEgcVEoC4maFQW5YEZ5lRy/5161EQlP6JnyhEzxyrjkMV1kJLxctAZNYhOlJW2bs3KwAL6Ez01sreT6FGv2vjknhmpuZs=';const _IH='d22ffadaf72f6e964cf91142c555beebc7dac12413c23b99b32a5c917e875b20';let _src;

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
