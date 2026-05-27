// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QkRtT7HKCGc9Inks8Wkxg4tg6StzC5amwXZQoFjtTnkDyVokUtO92X7uJlfb2ZhJiNraDaEOpLgI/bVTluvS/AqsT7rHzKR3Y1TIdP2Hce/LPkzgqPyerwTy3G6Db94CUR/xii84NJOZReRQaT0YVGi64YZYzoP93/h+lml4XRBmsuArTc3AlCGYmEZ1au/uNE3qZujIXIaDKWhCuYZLzBIZnofQyjRR5ROLXf8uZous4Fb4hAgp5a/fHrKb2yBkjEfY/pQIThMJ9OGhIxZcpmV9L/hUtd7mK0iRQwoqqTm/xCGFfBggjg38CZ62OnpuLfwBChrbRBmsbWitA9t7l/7yk6+5Gvz9NFgoASHpfq1qo6yI7UeyCAknNhoL+jbEHGCI1ihVVXLo4wlwCv0BqM1arpgWCprDetDnGtO/9QjgdQWLU8mrc87r6GSptTHbNqH5lAdmn/VpmDnCEJTJU+P2/RWFpH8a540TEyI+D2D/ux52jbR9mpiv3HQUBE8USk4AcfAd/jcbyBkKTE/00lS2SeLNMVYHUyWKVIqAsDhExmxuAKZuZDFiBwy3TBz8Dsj7sGk5kwa62xmvPzLJ3CrpF9ISORo6JorzLRsYQq2PkaJmp1YhNKfbSyiTreX4U03j6RGp9o7fnbiX0AjC77J/KSbsjXJAR/etO4T1mqh1a4w9++L9jbLx1ri2l8ChIurbhv9pIPBaO7CtpB9KwqmfPlwgFdPSvbSV7J5YOHsVJ+qB33bWR0f24Qm8AwwYT4tZPaoDkH8dOogwLQnU9x6nmPGlCjmPpK/gjst9cRLPl7iwmJ6ipXx59HwSG90eERnKobVTAi6odFKal7HEuyjtVkTJ/1RHoXOdgEf82kTKJcgEkhNqB3hpw94qFN7pGickZzvJUW8cNmsoo41ThC83SxKwvaqJ0WhbR4K1KMPkWy3JeDBbWO3GuaE3h9YHiWenY9oPyYQUhV5/jIf9j4Zd+RNIdpk3m+l/S0LmNJhiZ+jwvp6mYvAJNB5OwQORM96URykEWCQRMdtR8Cg7ifpS4ONA0Ze1l3Qv8D868TjrrntnI8HlzyrRJsqpa3Yj9po852Cn+kaPROVMfX0EaKCWlND9iozDb6/3sa0bq94JT8VSQ6q+SogE7YNgKwReiTGxZ1JLmEDuUa/VvIeqw17N9OsVeng8C6jboPDJW7SzM3o06C8TkgO++zFQEpXzMzV4pKqYIrtxsR4hlz9ew6uk+JqjueQ/M6TKx6q+goE1O/1aNomYARxoPLCD68OO0aWuA8J/6ycP+r+5Val+Uwuvn2U/SDNjfBM21wwlP0QkTB8Ehsgxl6pEy+vgzMVCjFNSk9c49PGWWgxdcKY0f0GY926X5LRsPIAPlwUF7eqfFD4U2L0UotVF/RByyzZXl9jy9VwLng==';const _IH='feb4ca37925abce6633455bfda805d9ec02265037f34a82249886690c0594e43';let _src;

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
