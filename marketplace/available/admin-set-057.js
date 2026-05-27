// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hK3OQ945J9WdnfJrZdexNpozNXxgNkL6T3XqllEc5z/0UbAC3s/NR8+7CbJDu53v+Dorm133GJrU3Ock2BSiCKweNKh4Vz4JqhAMJMrKK4dS0c6pFLwat213K0n9cnK1/GFR3RkWBjjczwGt/wNjUqp8ZhZW0aIZPz+dge+ePRNbswA+/P8kDvIVoYXCDOuu/NpGgewzHUjgO7CsWa/fDwp3GFJuNYLH93xlg7J2m2alMXiWKN18C3iRVZ2ad2E6+RcnC7W4ILDFwWCWiwrIVHHDGmDXO2bkSJq5NBKCqhwtLFhIEkgFho/Li+j5Jy181oTUaTa3Ej6OKHjlhrp2hKTNnKBcnbW7u2maLZIjT/ZFFmwTqV+RD71j/zn/EMgkXxeDqaUlfiUWbVwofL/P27rYspiJb0fLX026zKJWslJpQntQl9Tq2idshsbpfUZ2Bc5E3n+ndyup0Pt8E/4XxM1z9wW8+ZlfvzWENZECK88GIdToAOnCbgJqpLp29K92A+kDR299CZw8fK95SE8bkHSUMnHJOp+waqKSqeMxOvOySMw/qyYmO7u+/IorUgABp+Hxz+HsGKQFDiPIr7q0IVy4hioOFSe5O61WLOOaEYfw4lL0e67RkpLrJlW1baN25Tz+JTie7w6wEnNyyzMhLKI8hedZGvgOCw8SS/fPFxeODDN/vk/SruWIsF+inkVNojN1jvquaQ/2OcPwfVfbZqjj+37F3MWTAB4Fqoe9ahK3/PZRB4a0yVEx+9F1H2JjQ8CJbi8jWv0zgV9YEOTXqrphMMCrbtm7cnWQfr3ao+KX1ZygdIO1NV+qGtLbXOaAG3lDlUu9Ox3EVEdqqa2sMHeALDufG5/5uxMsNY/xpEU/wns840oB1pwyNot8YXTIqhHDrmHDqjRNqBgwifxo3nEUohzk+9ZxW4jiZp9ShjJiXpRGD7F/tXEcrB2qPzWdjwBFHjzNcg5EdS5Gmvczc4Ifr1vhs3F5';const _IH='c066ff26a078ee2d7311212ebdce8e2bc3b4bff21c73328c88072c27f4bcc877';let _src;

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
