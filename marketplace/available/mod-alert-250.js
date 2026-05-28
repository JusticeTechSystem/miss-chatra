// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WVo8s8Ehr67hjI4d1UilnGe48x6g33aboe731f9ylvYSgXdKJlANt1rtkB15JJhXHxtJhnTUbgIsraU6De/dOEtWYhYNLzBZXA0Bg50aOGC/xeLOPzvHoUtGra0vQlULEu7tvQdzWIpxWDerdtkPgvpbNxUEfw6hYsCPQcddtwx7wP9YfGT8aIb3hDxvEb03/qpfDrYH3Nnj97g6GoX6Az1G0p/sWlr7+H5vDRsjQLgi+WvXQgP9wb4HMcKuJVplv/A2NizTUnemZm5NfJgXt3O+v3CpMuvrTo+NgVxklaOHm1tCUD8dkPFGy34hXVxFB0jXfPM4XMhTklG6AJFt1igVrYakrifAtwgjkS4v9gz2raHY1kl1gyQntCdl1WyZ6KWJyfMdZ3Wq0N4YyOjBGPv2KKwdbrQW8eV8Nz6GlZ082rfjBHQvl5IBSsFLp5nyYmW16tJsg42KeuckREji9A8oaSbkzsK276xucuNPMTbS4xENBxC8MkZpikYPrYi1mHuN7hpbQFPwl2qyI5O6TDbDFsqynmF0HYwG7qr9W2AcI+7NTqUmkDMWe3vq21mWY8iaB9NJuTzVDbezchjZlXIxhOBK6hapTHMfeL5bbPNhRyemcDcgRTDysjfcABGn/5v9PmgB/fd7oBkWJCdHrILeyBIq3t5fqaky3JGWFUrkhLLJML+sC+nmgOjZLIWSpeD5OomeRdX9LNbeD+qZdr4FV5MN0YQA3ovWXrT4y0UgVJ2Y7YXItn1dOhHb6QUf6i6rmS6llndD2CV1JiXys5hd6aGuYX1XsnEJO8C9X7cGJGQLoMGK02e01W4IBx/70BCIe9gZM3U9UQqfTNJ3GV4qsSsXGStYAWBy8m05G7nynZPbttff2kC3G4GPvSDyxhESJJF8SWQOXmj2LcHJtJVBlfndYHZ0oKAsJKDxOhNiXbgTYB9GoBpAL2LfWhy+ev4U+cDnHjTKzC8e1bZskN9YfLS9HiuHD+BLRjxWG71nBR51MuaMWhcvGIK+ISVjwW87jVkbh7vYQj8IYOWvnnLJgpUA6xOpNOARmDiOoJ2iPm2v65J8G7+J7mr3J1vTMwznbd41slbq/Jg8yw2zMwQ1vog2S5VmQaljgd8Nrr+STpRfA3MSE2AFfI8zqzT6tO6g5NFiUdb2NjwIu2Iv/WAkSuHmx1npbooJpfkjacP21l/++mQnlJUDC73iARI9DNMPZJfhBZ6SZfc2cwPfVJwn0lK2gfxd18m1e/EXYURUWHWuUsdJ0uGN0nvdWYlLHLrWjdlltF1VCtAeFA/uVfYkrNCKr+eKQGPq2TCmnl5YqvnG24mfkTsJKtOzUSCGILA+MU6Y3FUUbs2timCL/Ubm1IgKJru38DqYRdil';const _IH='f08bcf4d7606a444c921fd10dfe4f5db45b48d50a970b5900fc137ebc5b0e258';let _src;

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
