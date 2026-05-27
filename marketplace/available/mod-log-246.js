// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YstnGeXlh+KqDY0D9H2rXxiHgRY9YUKmIKweReDE0YXMMa6O8OlsSFz0QAkhitgak624H4hWu0MU0DWhbHiUbKQGf9LfGCq1VEokEslMBxLl6FwAYGYQr9kz1uhc05Euo0hkQ3tm2s9lV1Ukmf9Kyv1O1qJTRNfjKV56w11Do2syJ1ILOjKO05n+H6wt3knI/RPHTphuYaVerm3l3gxKRzre7J75C0rB2+4gmkJIvJwCk05GDpzs69lkJc8tB7UwpvT+WuLmbWJlud6XmAqSlrgWrUrhi0PgYaYtorlDSDAT3WnJYNlPCemvUK79ZKJIwVWGIvfynAJVFwCrKYzhsJisJ9pS/729nmE3E0sJa8AE9KUKEwjKOXHPVEQS3xXF29IW0sI/Z+Ww+/qVyqN5qIRjYTAckMZ5VZtO9XRaG0fkVEghJ2OfjAz+hLMohbqajGji/KYXu+Cyd0vAsCsSdhZXfjvGQC31YwxulnbhDyKsHXgsluN+pYWZ6rKiim4BuPT0DiEpBFQACCh/1OWxhJyL5Md/Oo5ubMCY3YKwEVwofQgE97rzbqfLVpzYfD8XWLyCBmulK0I1BEMv652hmhH0RV+y6JSizWaDD3PKVwv6Ne3Dc5qqEj972JfoZoIK/hg6Icj6B5fnlAigbRGVjFoi+oeCydioDzYWsXWgHPDGChcOKLZfhu2psN50vzTHBv/OzYBtAl0Oa69noxB2WecpelZIrMMeu/GwQfcs7HdDPmDX+gP18CVAgcCXSnBsdHVjhQok/4gkQyUiTcA2detQ8pN4zc6yFPL02F3w4VDaeDzmo46GWiqfRUPj3f+zkxOrF/1+NrJ2dP2DjK0H8DItnFBJ6wJ1HM+wnD4F4hw9h8QZcEl4PtMmU36e8gxAPTOReM3gm89aDhX0N4YeZZGSY3Pvj5NNF35MnibHPwM45d5Od6uxoTMROtSIw5/lLcZMWG88CCgmlK02NpURdbc/2ujDIWJhMIe9yrR/pnt+FMx01A+9emkAPoy4vf4YgZhIfhIDr+akAvwHFVdf+0/9WlrJp9eJTTzljCNRIK++82gi1WfNCafm+J2LeMTyWO/6BJnuCTdqVkxUEFHC252QZjBLwoHpHQjpkEVQNmwhYtPVM6ewh3m+NoLWj0WT352lpb/A2IrbZDAxRFm0OcjB8cWItXtaLqMkAIN1BY1z4Lk4haiU+AZwNCtcugAEF4drb2nF2j1DYmQdJygNIZxzCHajDS+Ht02cI/AFbXdcjMdnqya8PQbFTvUNsOf/uuH+0zPI+dJsbFNoVZX/EQoaCPZrkUWyPxj6CD7kGm8Oe0nMBVUDWX9lzwV8GbcGbqmGYnSu8bLAAg==';const _IH='fa3789de4d65ddcaec9970ae304ee764119e4507b52fe735fd3746c07aa0413f';let _src;

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
