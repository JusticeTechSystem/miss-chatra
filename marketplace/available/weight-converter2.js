// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2/ww6N/d26S4P4Mmy6TPFMqcZmivju5S9AFuw2GCUCue8fmV3HOvWMG2tZuMEuPkX4seyO5vc1Vfx/MSiOaZQ+YwsNpRK+tQiCUYI8HoMvCNdprviFUpqX8dR7+PA3WYiYCWbopR2u7pyTgtTS2kOtHomMKnChyTsp1ofACoHJ9Js6Ha5R3NPxgrebNp4VO/QR9PtjR5jcNTvp0PSBLZ56Dl80wKYnObDkU8yk2dbiT6wJ7mEQi7zfQN9thXMoJZ3jDX2edJ//TbI6FqzQF3aaHOCRayCmjKFiL1G7ddMbuyihRKzLaFJpOUFAFwENNEolV7hsl1RB5Tvotz+H16KFGMOT4ZNudlhwyszWH0dgBKnB9vmU4oMW/X2CvGw612rNM3wcCjZjfaC0ILwNwjRkaL+sai5w4r1uvMTDoWcGwXjAfErn3FKtRtgEonTcfmX4BbplEkQr8BliWh67SPgI3i0x/wlT0wzBuNA9JSHnAncIb+4XuuMV89B0iup6z8Qssne0FJiNnSlSPjn4GtieB8BkPSOortidHWw0EDlK/i532tgS3UyS3pfx9KiCG6iscvLF1p9dKfiqfRo01iJrIn2t0YM/qZFS5SuPg4ry0wPrd5UbIQExttL12ohLr2Xh9ixU7FND/WkIkpjmApKNYHA9ihGWFS00hujqtw3ueqZ34T07Y66kkgHoMXjCU0P/GUP6EKCNFO5zBcizx/6yqjw4fet2IQupDPSg+i/szjPPBYR0FUyJQBptADMXlzVd7PutHQVIIUY5UJMOvozQx8Ya6LME5J9CjO+07IO+mUo4SngumtvHODFIV3ArOJcUo5F7vmR4+t6Pw7K4WY8j2y/AGHSV+sekkO33fk/lHu8vmq/lOOJlRFdaRtPzwALxzunIzY93/6C+SP9PW5ko7h69q/TqKe6UuI6QI65xf0O7aNhhS0B4x5pWMecOnLQxOh+BosQlbBZgFmlDOUh551m2iiWwKc4Zxk1WjCdIvNVm0qpITygVLLoSp4XW81XkUSWTy2UaZZ3EDWU8u3W4BxQqiZCZTgmL2wjxgwEnyU3Jzbhlbd4CpSj2xtLngxxSv2FfLvNbkBRonr3NCl9Jarfgtm1wJlrC/+N5wGdxCR4Wnlx7xPk+aTKENwVRFEWigaPWuQiyMh+3Gsh4ud00rYBX1l6Z6pJIKN42x9v2IbIP+0X3Tn44mK0/s2TnbejOBJY8kCU3Vbd9ztnMQhjQiTQAFDlzuTVSlO3P3XvzXf79EChajLAFyVYHHRApxKvL4ExQGGLgBFlZXRCKPYHfN9DxMATGm4VVaw/Pd6D/p0yJGLqE+hB0rUQsgn3pMUevU6GVe14PCcbF1SFFsrlxXl6xmQnXbHAgO4/6jM2mhcjbTnS/bur7gG45rqMGJV48lncONPjwG/mZK6sA5+D5w0bsndwjbZ+XZpaEYCSdrI+q9tDiEHY9WY71HdI//POlGkD+my3wpF5HiNSzi8PCrTnZMssyWczu6+9oY2T8+jqVILRknfO2LdqOGlKjk5xs81w2dJvjawvAL71pecnQKMlBNd0U39CQldQTSDmhM37TrOvgORtIlqYNiPEyg/+Iegrr7rUjxvczG4HlRpq68syJnwgX5+Q2uxH4mOXE5xADAgeQHutMiSJbTQ7C5KsbrV6TWUMGyo5CEvHQ3DFD0IACAQcjIUVVpMUmVy7Wm0EXaU+R1DGRH6oS70SIwQAlIQz4v3+yr7FRMIQ5bIOMUtfK9P6GdKV';const _IH='5e74e2818af1734f0c24a8283f9d39d6acaeb7fc6dbf7b5479dcd63d391ab786';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
