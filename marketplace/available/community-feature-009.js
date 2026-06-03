// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6mIWABroXUYHeCrG8H/UnfRvwnAPKiO3of+t/7BEzuGBoXX6SJmmZQkSwtLZ6J1YtaLu/BaVxlZAIWs7Zmh1wP+9kUZcYX52i8m0sdU0McZIqtEOYIrIypHSJhslpULPSOBCuIVm8yiJSRlalmMCH17Y7rficAvZ88xTd7L+SCinfWOcyFnECWpY9sXuB+lRIEv044YgPMdqI7xInF/l9s8bsRm/zYW3HiEhGDHFas/mcoZRmnIL7cQQ/kkEEgEeJ/sbGkzalK3j+YA4tDzVU1Kb3TvExKF188+cLyqOfzCjfhw/02Yxz9RiIB02YIZOtY03XJ0QYEIgd6wCvhp4b/96lNC1yB5EorJ01J8q2DYScGgu9ObPhDkmQvh8IIV7Fc5SN5uREvo1seEa0qqo8q4jRWcirk7RznNhLrOdSj/vDmMVJyFplTZeqE00IYZ3XsWdvdiwdZhcmc4b1tfiMeh66AhytJxiz0xIsduBL/Tnp145ayYvzKBS0BiBxgn0qGBD5Yb/JNc1QCG3noMmrq1lUQmo2jsimEgAbBZsZc98HDzZHFENdOmL/NvJBMGHIvryKsj/Q8NkiSaKyD8AxNjnLVIOOgXfqaDlzPAyQIqZA0KknHE2PovXzu2PLLUOQ7zFYnVgP4dXe6CMiu47hhK1FMYjvtsOcmKFsvVZYSX8eH/7RfWhBQBtTTaNmbkXVNzDYN30fkgaBtYplKxv6kAb60ZnkDhGgTK1tdMMMw==';const _IH='2233e6689e6f2000f6c88a00bbd97003cddba7481fba0984179c4d846bc8fc7e';let _src;

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
