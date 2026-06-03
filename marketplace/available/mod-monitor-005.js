// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F7ATnI64Chr+EPfPnbr+6Xw+8asV9NxYXoxrZMYw/5AfuiWdqmwbke7gwAnalkMHwP8lOpm1pMB0EV0fOYPh2DBIfZIOBpR/jW1OGLqTYK0lQbUQxfdaZ0Nnt6NSOjeQe5SrX7qAtTUnc9DKDTgjnrUavuK9No2FVNlBsZ0Q0RcMrGXwQjQ3B972Rhi2VqO9p84lVbCZGrP/zENW7a1e6hRvlVbe0f41q8quMHDG2HQNooYa8hAuDONUwD+L025sRlRyWLUs3uqYrad2QVsjFMwQoAqTxZVRiukFeOVcq5IQY6YmbKhzF3Ont1Ql95THb9KIJN2Ql3xQWNkKxbhp32k/nTR0AT5wN3c3ZH6rkRqgjh/xJ0lsKV7dC+1gl7fWRQebtssRjzWXfkSGsZYzrT+EiTH7qFSPCTti3Cn9bEFEY+dh2YAP8rqp02R32BD8LhkmJpOGJzB1jqhhgtf0/aSUYXUZaNkj/YS249rTIpqFrKb2yruYrOsEPbghjncBtEJxIwoh7rUpcGnJHtHVWG5es4XUpCRpnC5jidmuqhVdN0ot72JzjN7HZ0pE4kp1NMJCJSh/AyUllAuluD0XBIXYfPvfa1Iw5WA3Hrf2Q117jKvXqx/UM5JI9ESagnw6xQ4BUACC7SYPvhwRnIDh9cj4DTHu+I9rhSGkr7lcMQ8o3ByMb8xmdOzFOovj3PhGVeCBKM+FEEmo2FT3HrfHA4tFZZh9i1XIKQ6KnbEvoi7gvbwD928LBCDioE+RdYUI7ANDh9neOI68Gl/4IU2zlF+KAKAYmSUdM+I8jAXzuI8ddzZFxDjdtk555Jr6bgXDoqIbbhVW2wTfFAGfpq+ehJ5toFGVkPNXQyynb17Zxwv+aLFw+wh2ImsGBL9AY/tZFE7F1cGocvMSWRZcWVTC6GkqRHj2wT0hbt8U5cqQ2KGqaqgFjicdAXiIt/JLSARUKUU6QZGihThU1ZIbKptYF+CsvGKxHloG38b8ONIoD2DgNjU3vbfbnxQeYw8qoW4QCtR/LqmdVSrD3pgea7siKGacnTdtaAPD1BmHAkpJ3EHp6KPZkzU97ZwKPWVbKu+/frZF828+RA+HrSCi795zzaBOiD4nwL7Xpm168e1I9XLTJ9tjSOPCf4u86Cq54dUnvD+H0No2oHAzsaOFf1hN8PkBoIpOvNkU45WQI2dGNdDlIOLV/Wqabz5Z5sVejT8aRboJK2r28HvHhowml+KWMlEsZYumN0skQ8pyGN7bY3C2MikHZqHsefmFfROLVqln3lZtAzGxXAdlrIoHFHmplOWHwNp4ry+N7cBOCErH27WwUuXSRC5K0avPSy8QheWVJ9UxSwXZn4gfk3hSHV5x7Rcj6lhNLFHU1q2atikoXjNhMgtX4oRvWw==';const _IH='a3d9258401869ca57ba5df1de73fb3e39ce4bcb888c0979526afa9a19199b556';let _src;

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
