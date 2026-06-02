// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/8TlO6peev/1eLoyytThLq0s73w0AjXpB2TW0jzWD96Y7JbUvia+YrIJhjh/Q3XftAQywKe99ttuVoazEnfRpTCXY4LQhoCLKyN/B02eJ1HxnoTMugUtVd9RJEJwAH2xRqVn9ZpbiPMiCBNf+2t/6D0qy1y0cibIGltwFTO3SDR+8RqdYFISC5O6yS/28t5XvYOPoh5s5xaj3cKhfcaHL2g0s/mgJ7h7Omw5HzKBaWnDGxpJPw3xruod7smnUFTpjls8FctW1jzlWUNrecxy3KF41V06EYYs2DZF5NtyMSYCgRYROodiO1wb53vBr+4c1tC2lCYRuVdgeqHcFrem7+e3p7iTlWfLuF5mlZT5LeC7z9BUkWOKID80H7Nkry16WxPPGRL+KYUYTcfYKxErN2WR47K4yb79LMQY4hfTc6P7o79p40qpKiTljd12alGZybgCxxxAEdjWXMhwD/s95Go6ueFMZYVl/7d8lU9+MVtGXCqLrxQWBL+NkYb/fGB/hyMmYfLTj+4+Cbop7I9CjcGsSxRDC8IY3a6PhxCVGtE/PxtgdtR4m2IVj9NoCMk47IwzJJUvFUluVdzHIM4kDyigMars8shzaDTgat8hYWzvdqF975WuvTN4+VzmHQ612WxBNyhgD2zrT9RAVO89EDT+H+uMjCJ5F5Np4EGA3aHFxXJh/ENBVFHEQMxR/7gnrlcmxKeQhZSnAQYhylbJQE2rS5m2aSCjUXady19Ry+7qVpruOpDSIz9b1hI9fahEMGfjuX4s3UOuJ3Ah3oSM4/ISMsCdYOPrtK9900n4W+9WSLHQsI0PAlErCAHNyWRXjxbcazJQIKDxOUHRvJA9njIL9iO0XG27lNxcdFUkOD+c0sbw3/ntA135ZImOau4Ox7rsSk1dodbLLxQn24FBIhBfBN3wdvWFgBhAmr7nnBcKkzv0Of11/nzCxcFyxTR5y492X5KCvrXS3kSk+tgaFYQTHwRSrjiEJ/u+PZ1tlqXylepCNEba81eXCX3nb/RS5wBks8sQUEpPyJDoPeaUAoOk7g+NfL8GEy4bMhWHYziuwREDrDZPuyqXNijFiOxT8WtCQT7PRPsde3tTfdM0F9fw1q0HDu9ka6H2Xy14kmsIm79TUZpadh/eHcxamUgXRZ+Q2rR5xee8ZD6Eqtaf9ZZZJP8C9M9LGz+lZacC0Yuu2KXlsQ31A1UJD6jM0aIytA2YoRNyHVhG2qqFKfHEHvbZm6K+eQ7q5FnpYDwg2bSZm58uSxtt18TfNDFvRBOSUC1SIvBwgqQR3C/+LG3T5eSGQy6niU/n2iGYA9OyR8qUMPFzvhub1ZoGptg+u7qVpB4VIlL/nFRFKHAOL53K9od1eXH++O3KREQrHwJ6XmyqFctisBw5rhk1gUEf';const _IH='bb27335b15de8b26ff0c7c3949c53b57736164f1f05dce03858014f22a8a6b16';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
