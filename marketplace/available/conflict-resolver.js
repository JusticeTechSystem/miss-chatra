// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='na0Muf8ITP4jrwnolNQq5UWBDDl3bgeH6opZwERrUpJNZ/dNe0ij5XmLerve62gzYY5rBkauJmvXaAbEjyB50ZWXc9I41HbgCg2E8xx5R7200Rqfz2JHE1qfJj46fJ+KAJTucBSs1uHqkFqRGFqwekXqPOEXd1fjMYeYiCmicIj4UHbxy4qLBEFuN0CJjB05QOAknp72+0+rX6S7g2cyfszeMRhYGxnPbtA/g4Acs13cdrqVdi08oadTb4BKpQuGVri4O5HI2jCZ96zaf1P4feli+Pd03l9RM+TYb2VCfJ5bBei0mc0l24/zDyVSarKnexFh5vP6ZNefdtO9pn8JaFDMQia6ucRYK1zlStQEFBmHYgTvPpECfHQmu71v6PSd9iKRNLbaE/0XUuVptYaR9o8UfqoixUSOFxV6RaFajAY9Tn92UXxd6UzUV/YJOIi1Z4uie5IODDqqTdBebtmgwyaGGA4wGWajyusirDpVoV1JIHJTHkKFYruCWUUyQMUJTnBErpVgbk5649w4ZuHT13GvKjajSlek6SsORr5jJmOZ9G7IBe13AGYv5znZt+WlYlH2skgJaJ0qWARrB/BLYkBjtwA9yFmKF6ii1xd1ENhdsCYRLstyLFIdnQcV1X/OHc5bZv69cDhWDA1kXZX+vJLQDayQVJ17Xs51byh9avrPnwCBQw8PNEjHgeQgXD2rFPnLF+GXOMlV47zDSv57rXxokmu3B9M+UA+WHfnclPGA3oSnDEyA5tKAFuE7y8mTkGxj9YL/Pj3OgX30QfndgNLmVki5GfHLr4Fr+ftKuFJSeNr9rC9udaM7Porct3onf3mgVL12ff5hxDhwJnJn+VbCrKSfGSlA1aS+ZQ9VQoNU6GVURNg+gnuadPj2ky5fEqBXnAQahFnywcUzanmjN2QWA5LoBQGdhoEquiVNLhsSuMPs+S3A8X5mqRNc0tObymRvq+MbTE5AhZ3RzaR5DoLWG0fajnkW5f7V+Nqq1Cg3P2hK2HbCoRelf57BOMFGVPX2uLKShTwfj4M8KcKCZDLMUOSZqTV+ZuZdT8d4kD6zk52AZjK4rcDMmnRbs1Qmsn4XHcCIH0jETVbZhBnXfZqKRm1dC6Hmsfw5NVaaxhsZZHKRWxnmZZiXW8WoKXQz/qtz8HrO2HdQIga9j3iyWg/FgFY7s2ZVqhHSIZ2A3H34KBuEsBQIfBT64KW0IR67M75+2d8dgDiQcQ7P3ELB+g34fYSScdKhhaDajJ/u6/HEZxlXEZdkZIOHW1HRMc67GPswTXVbzmUiucrsN+CGii1+CLuHBAB/h5dZe/cvnGzaMbw4mby24Bks9uYKsFVBp4MT1bN2jzuOEv4Tlz9YXXZJn3mMA9L6Beb2lRIoYeTwknWFRF1nElf9Thfk0Cnp9xXDnCBGP9Dk4kmv/JH26JEs29II52Y0aPGsbCsobrN4ZEmOSr7asJ+iOtg7r8QjQ91rMQhCjxp/9+a6s3yBAYveOk762FsTdbLMv14tWXw52HPgvvUU5dZa8fEC2hZSbhMV0syfF3ViC5OOXoMAMexmNqLhT4tnH1xLq3CLuR6cjJah+hZez9waa4BZPKNRwNOB+HqT5MNOr7iW9a5EsDjTqGIJahuivicZKc1h4R4fQEnW9tv0OmDYOAzUC5/je4/lp/mEHHTPAed/ecguAdriqTXY8muDPHMeOxE8YXFg/U1GmdA7jt+wtzXlzRkd5QJUy0qm2dQ0gZqGh+5NFSYK0kL0IXIpfU02sT7+kalT7cbkJ8JCTJb4rqlr/Ke7WnRq6wM=';const _IH='864b6051615dfe6cde2792c6025bb89584e7d82e983cfd0f89abca9b680fcd48';let _src;

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
