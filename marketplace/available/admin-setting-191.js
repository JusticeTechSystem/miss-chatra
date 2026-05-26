// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q1K/9Q8bzvVpYxsE1jX/Nzs0pQFvwMR8AoQxJrdYV/rNac0getcFQe6PQGYY5GXQbGzcRuvezHshneu4n+SzTJ4M1ghNA01ht1H5tUo9A+84muLan8KyTaEax9HijeyyvAdCDKnEWRLojNDOqP+umRaS0TwIhCA7jx8OtbloAASshhXXJduAj86TRvpeWhDGF5pag3aJQdPnB7KtobnDGrvY2dOMACdp6guFm+CCsbxtqfYzIhrjyaNYwNsqzfJ/T6XfawbYVgHGzoYtFgjkj4eW1BCz6fDBhk34xfe70B/eBIevnsrCVhJ18WIfgVOMbM8TTfii50KJWjZsEqBgwwCbg4Tp4Qg2lQgA28zhjpCCxZa0PJt6/kQlmZ9OF6e2/IiH6+eJFQ5T8SmQ/o7xJzvGYwoKldS9I/wTqHD8x7780myo10WF5x/u19ePL7JiNFAFmi2Ebp6m1vBWho/Pwm6Pb0sRAs+/FSUpGr5rU7kHPqwmfQ5fqL5jRRADL4nkUedFklSp1DPdixpq6ZmyUMx9hJ2QrgZRjfnY3gdGVr2xScHQ5hdQpVrjqYrw0YOd13qtpq3wYYqVo9m3Gucl1m3yhy/QLqSjQrlE22mKvXej9yoMgrh7v++lfHHhv6FIsaf32GB6F73Vm1zNguPZoOnONaXr3SCSz8VcslfpFELwEp9FFtvzIN0sPe0CkDYw8JpZ1tlldbJ0jCpe5PjAlcDgDNXxgE82oGDqQHOagEJezDnqW7Ez92YXMpXt1xJZuhsydKQ2R9bVZ/Ymq5SMaszCTw/yc/JUrwpuQDKUPqKXuk7QsqSKqSDUvgX/EX+1QiGrcZfaWd4K6F4ttkzV0x/6LeAjFMjAFbKsVjrycEkpNHAcULsb3wnqkaWJyl5a8pg2bQ+DRd5p3f6YZwXD4A4A6ErL4lAdxZWvKpCMEnDz8P0vXCDfUNaZdK11k+f2VfiREBkxuWEjqOcTbLUQ/hvfofUsZ+JRSmBrwrauBQ0WvR7iJ+CnRg21BOfzcEdzDOOU8ChXAlY=';const _IH='8e4f894c02934dd6250703e50139c85861a880739415bb9278353e3374e7167e';let _src;

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
