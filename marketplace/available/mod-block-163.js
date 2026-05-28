// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ruUjFlZyrUfQ4kg9WnMIQ7ZGavmH0+WdDtZXosltJAIRa/hfyYsZFRpnPG1fI+VNWazKP9ffTRf82GFp3AZ6dnI1LPIxhfsvkjRuF/PJXDlELLb5hAnoB9rSgmXNdm0BXc6a7RbnrxGJ69K2SqyZ8TXcqw1KovyZ6FEmO8djfZaaNdWQmwtkiiAsZxytzchJrvfp/zJc2tlWU5kTyuhzw0HlfiYd0jxWJTf1K9N7y8yaRostXbUZLBCjnwDdLfTYnUlwCkFJM4Cedztdqn1yMkf3rkHcqkNfdWnbJbMz8ZuwH8wAnoIPIUAhu/itYTTIiTSyHY/WZOYEjerEX8GgzwKirSo+b+R8dWVi31l6jy7R5Uu6LhQpHGfBt6DtJYAIfEQodOh5UvUrCUFZdZCoxaQwRoAInzAn1aW+wZo6ZjjPPEUR0pItjl/YXErcFjxjE2pmxmqhTWRwuVV5v0D+wU2GYI1Gb93L14dyHNvbc2B8VshJShFz/oKWTfT64Jm5pOVDirDJiYt+JGXjXm5BIGLMVOJmz+K3Rmpc/I8+40mERVDR+FjtZX/AphSCeQkQOSc/v/FcdLvKuQa4J0OmTBSxVul60MpwgxC9IN42JcHa8dhXFn3JCcXFYEuXOu/emSOgxMubdlbz1s0kwldegw3Ve3SgcN4xKt9FBDQnYyl6evtFjV4YGrwAfUloFn8FpHO69H5Ngso2ZUlQafu7+NtbsV6Cm4kM/8vTIlmiCeCvX5hW5iP1tGMG7tL8gCsgNYrkT8ZlYNg551iz01iOPwpzsNlFjqGoh+co3TmTrEcSoU1Sh+fPp+zkv+s/8EpvsMuqgskszhRbLGkWR9OIzh2Osgj8XstKHQgZjcWytpERRqhLZIN9XKOQmZSX9kR38xcgtTBUQjnXNQdETZfwK4vOEkewQobPunQQb/oKt6KlFW8ZfpEN/xntSf5VNcPgDGQ9Y1vlW3YLuOgfQuNDWTvol3L52IJBfMPWWlOPiSFoe7k2BCMLHc1cqY6iQG1p9jFwbTbn8tRfbkxn8lLu1Xwm0uX4qi7fzvPMG2Dr/hZBuXKV95dm+BEPK6xevuuYUy/BXWQmTmiLEBC7J//hwS4HOKW4uXt2V02q9NXFbEeZe7IeUDepn5O5UgGsndGf+OJL5b5gdpR3ll+KI6AlKYl7fKYpgJDb/uEq2jqzgXCIRHQS2R8HjGd1O9SFxmoVmZNksGDDIXrdHw3sLcYf5LT283UpLUt4osDq/XBIpy4aAPEHaxMr3j3sGvf1xXLFB+bVOE9kGITmOAuWJowoXbq6n0Z24LMM6nNURLLlEDB8CPhwk2Ha7VntVq8VaIhFL9PkdU3Ug6NLYaE4gipuJyk7inlQKD+4kmwn0u3';const _IH='2741c2fa2cd8996a644ddbf8068af3fa78854e7cb73e6280be09f6523d63c419';let _src;

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
