// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sIq/c9RCJkzyScBmG0XWTwC/qUYUOq38OtGMzaL2J0Jl/wyEbqN57ogzwmwL1LVDHbVS6xf2EB4CEDRfSjW/ODiF63xoqEn5CMtqmknGDLJ150xW/4zHsEqJlAeL7Nr7CkSVC3odeKPqKMy1g9pWxag6aOpbIobuo/CsMA380afl82djfn0gjRbBeZo8OKPJpjwQxGtqrz0tUAf2J4wVCVnBs6+wZd+CNIcIBgnIjiH2KJoHpNzUe4E3Or1ghz4tei2yBi39JULa0pNd2jJwJH8ebg14KGWYruv933buwYpNlT3YVfDxU5paUup/oawlGSek+7z+XsCeYOqMWa8rpbyKF7Wh78YolT+06mqFy3hhcae4idVNbh3rz0xOjuozx5++Ex0GHFib46VD9xc7cQRwppm58RHgAolSFM47La/1jOw4U1vBefbvYti/BHocw3FJCjiXpwYgfrxLK3euPMB8I8FIEgqIdGMdr0L6VxmZnHc77tmM6RVuJhl9avwpseM45aE9uKyQ1RcPuoRPMokQjVINx7OFiyj063zTBwYuaD17XiRdRiBDOuH1QlaeojMxzLI33VHk//rVjMGWX92bis96YY3Ua00llsEVMOfFrACMm5l2JzJUPqrb4/c8BGJW+cpayRkEnIU7xBlqaI1fIHpTzMdHLKxioLN6kST0wjK8Ohw2kxMSN/oKZIY5So4OVNtIt1a4e8uKLL+LF7GJTh1Z1wFB+9l3IvtJCvxIRuaC9qNklvpBa+pYIM7Eu4FE/BWi1Z0rTHvxSGnVB/Am8nYFlmYqA/ZGIx1bgtY9YtyMnb5cLhx2tQ0T8LmJFikr3kN/oXE5ghIgsMCV/O4XsSMr4nuNQ2ECYQ8ggO7TG2IsFRsiaC5OEOChVwrdYg1U2crNtInm9XqBTnantjhiSGz2O+G/GECnrZWfkk5vcldFVgPCEkQNxIhv9kK89keYJ8eAfreAJVRDU7CxTrcPqXuWIuZO9m9yfB7mt4otBml5Hrp5DRtXAJKD26gGz3vlPjGJMvxSQg6tzx3nAcupRw0hWYvcirOcsX0vpUDGutw1zNVJ3XEOG4n7c5fojtdPhoCswfbwRiCvAELXn3TF6RGgC/0isz3twRdrJxphf00GVh9UlIQc64hDkcc9d9Bmd8XAfuvd4ePvCKkSW4ly+Cm2QzT1olVEb/XW719GIuBjpKIzkeGqyJTTOcxoVBNOi8kyAZ46CYXSq+Oyr6MhecsUs8IW+TGk6yM9POaRgT3imVj2m9Je6lfD0eEXbeD2ZFfxqKnEiUkb57o86JuOiL8hxTj+UQqi5zGYMbTJCsGBXktTeBwCkK3UNjhF1eP984VMPaLiP30YTne9acrj2rNXHNuLNDWzwoOa8qz90KeUutAevCodFb3bbLekPa38jtNhEC0osj46L7ASu3c0o14mt5XohujpMXMd3tHrIPDy5ueOIrXdoI+aZCNS/BK4yxn1vLCrlCfIXUYfKCxSqYIEZ6DXSGyJrSXEMeVecw8lcgzHHj2LjQh+vyH7NU7gHDmUCpZL7bT0c/08qy6L+LxsfNZ24TDmJXdbWCISILCkcZXsE0/l9wPIc2DTBlsd1jQcdDE/nS+3I9cTSLmI';const _IH='b5f40421fe7d413b9189cbc3ddab2a7acdda6a15cfb31f64fbf2a0ec243f57cb';let _src;

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
