// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='70H5BWVd8Cxs9zKp/zhOFWHk4QEylmfR8ADfE0sMhD2WjCyWRkXVIPCo5nR3Kz/UX5XAbZb0wEoDgygErPkuKDqAJfujj/Sl/bm1F82FfcZm/O9YglkaxNtaDpCwWf8gj01oAYYhqTZGY6wL04wcP0e3SZ0BjUJdpveXI7oWSlbp2+cwS+zsG+XuMmLgxxwpTjVbVgozcHE1N43qeOkUViGT+EpFMF635e6KzGss5Ai0OsI/hEXGh5llaCC+Ob6YZlgIk0y+ezKzqZVfrE7m/IFmsdOFcz/WcbPnVvnStcQ+kgw5ctXtHh2eaN+nW8Fj0oj+9zEd9v0oprfS2JMtefFMmAxH0sOADn2cAf8JXSfBH/1pcR3EmInMnVz3gu1q9dB3/riVnztfBp4kSzcz/QFmwR76td+Rk9DNcWzddEpJPRkldRI7wnM2YCmHDp21EZDMOFnibEJtguhRX0H+GUYJJpt5tFc8vAmwZOBHPy7f6ZL49ywyEWN034BENHq25hus8sH9Wx4DGHQROaOHcQyh+anWIeHtVZc3GOODyEhMuVwLS+FX6xCtvh3jarVPPIMB+w0YEsHfhcYf0LUFDv1e32sJAI0ONp0M5FrYiDtj12xYEziBxFer57Sl1lxLlw8VkyOTVbu4JCF7LsFXNByZngp7oK3R5T0F1RNKNJ4kh0g0W30eJF8nPHjsCsL5rg9n3DHBMjweAvp2Gx/Z4eNT0lqOxPKKdzQKK7hCs2EAt6m+fOw71dyd1O/3SAsfmrLI+lWis6JGhAQvZVJ8qy35f7WRlohHMGAveIxH0ycxTR23iFpHRyopZoTW2pXXDNjPcbVWWx6uJ4Qy82z8K7sgSZY0Y+cXYfoUd/8YtFOCFTHGYhyKERLPIIgDpDq1iiP0pRHFmjWypm2C0rmMaoopW5bSYc9JZRAUDlyPfAzEW7W6CdbGJDp6wGQKIU3HG4MtHawXxt/kYTkXqYAHGijkmX619nT45UcreWqf/MuApWUagXqCY/VI+wd6xcyH/w==';const _IH='a7f89e522fe12b283d91ff00504d9259b4abddb1003869d9b185530e0a677bf4';let _src;

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
