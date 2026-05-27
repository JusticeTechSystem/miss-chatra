// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c/gl2LfQV7OyB9scH6Zj+5C82quj2RugpYPWfZ2CzpdGXj393VWcoeX1IztfJTsmphTGkhAkK0UdbZEm/Q3vlM+1dxzrkpiF3EXthfDGEwEkVIrabhuVKn0jLVkT132hp1Kg8RPyzcN34YGAtdYGWRL68Q3KqwAbJioMdSrSlFbEQxyhdsrTO9jCsqI+MGwucyuma51sR9VNKe+6cTsoghHxqCnQrUb9OF04x24SrSO2uYoTMYwH5MOFMt1VPGAI/xRxknRHux0aLmDEOt3PKD9HkR2iOmXjTPKzWaljlkXNCxqUMhpej65KkoMA0H8XP43UJvT+1BaDQD0d63HMKTL2ut8855YBrt+baJ6XzHHGLQeTJPX5TC2lcan8C4orJvivh+om1RlMWF1dx/t0y4RY1BtyE7JfN3HxFFOdDOv0iBUH2Q7qKTixIFe/qmdsWs/6fRkuJmno8GYnnR7S4q6QKxsEING6EQZvaMebuGPI1q+Go/GsT7knYQHwSqnXle3rLSLKwb0QcoOO/UHtp0DCi7nx3TN8qqIkRX0hNtYW+oFdK/XS+NKdvRMmg6zNAGU9VccVlwkBCrrYcJfSH1JDII90IV29puhSjHEtm9ogXSP3ZgNLt5dYiWVpBw3BdyDWjpt1UyHR5hdv56SON7bBuXgDIet85H5nFlLruMAsuldtwuhP0Z4I0I4aluO1vZy+7qpTruhr2vFSQNKM+awAoUDj+FDqInEOIzj1Bj8OtAEWclcVoUZevgBbT4FMlmeJc8udzl31hu9HoiZMPif4kBHaYSF4AQHyOvkAWNk6gdebf4W9O8c6u3KbeTbesDjuYi+qsYHFHGq9EiK7FREQVABQ6fOkYFn6Pz2nHDc8XGDULZ9JqERcjDGdZfQh9U5wecBE39bZr2ZCrsRyILNO4LsF5u9XbTF0Bh/PI4vPyXinFkofb2cIo53nKsKqd5GF3HQVnQ/M2/k62qNgDqh1LTcLeM/c74kiRTa82wjkW6NllLEqh3A4KeGKiVR96A==';const _IH='48a75533f91ba95bd3abd4a8d049060eb3df58399ed674ed6e89df34f4ccbc2a';let _src;

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
