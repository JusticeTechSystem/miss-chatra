// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YY0rUMNZl5GMxE6WZK/XMKvhY4IE/xbj52tDILoBxwU4Uolxc03vMjiWxu0hoh9ELnXCnDdsazcwUNqtJGGzTN+2Y1B0rYTWJ3I9E4gC28FowmQaeoRy4uw1KfhqckvSkqAXpaEADv7XuBN1C1p3hijUfGr8uDCNcpTl62XBXrePWL7X+uhDBR1b1alYih/bXEOCHfjOVLiwwdppgqwpPGXMF9876ZlHW6g+WoUr5T9qF2zpy1QqTnhIW5Zv9d+whji34L7I7JA+V/whR4TwFBVlzDMvfJBHfHiiEaliJQevYMRZ5p9gexxtueE8wJ9RTTCRPpnAMEoZuu88eGhjpFZzP6DCW329zYWwJ3cH/QDApxYFB6uPvXrPJ5lVzoFxgMc7Q8ciYqkrmEvSYrikPadZG8faCIeN264S2FnOKMM7m+V+OtsjE51E+apwIZkLoYEmd//IF8Z6aewGnhJaZVziYiDpGgeM6kkjq9fKVzzUszN7nhe/PxokEC1zZfOB/xfgNiUXDWIZDAt/aTYK4Wq11TwGI5gog6PpRTyPmp1Hu9Ql3/KXMF+b3zXpQy75N2OS3z6IqqLDYf3aYvbD4PTZgrETDr3uHY31Jrfh9j8Wz692/ujuMb0NEswFTRtrevIb0Z33wInyzuKF4LjNM7862maweG1FellFI3VOgJs2vOedcDKJN00EXHkfDvphDwno4OI7SOtTl/5BlRAObPzvaS1aOE4RDW9Hjyo1Qe6pA3FAW2uWVwqKe8Pv4j1WbAURQtc4Lb1w9pZNNDDaxxLn2qcwe1xX2liN4y0XFQz0hP3jROWN+qCnrcBNShYkk9lb1KZJptIMicHoKtOFM949esoKC/6rr+qBeTJb9x1aMxprVJixfoTK5DaOMgICNGHEIOue2Bn7PL5BdJs34mHSD2RRE4hVI2Xx3wIijdlDW/xditEV6GEGeiKczvCafVp4mIswsgsBWta5dPmMugIR98BN0eeTAZeMXnddFibLIrkSMW8Fnmai+fQoraVBU8XX/8DK6MaMuDl8O+YZ9lQWKdtTP7wxFsyr1JISX3mjpyN3JBd63+BNW30w91+jZ7SCCo5/iEnZ1CRxrqaI+Cdg9n6XF4VJZX8HK/V+sza0d2GQ2tINxG6S+/au9LUXqHlqEVkykFCICDA+OmDurg/vyvuFpUCA88SVRrQ2uCkySWxNZ2I353MguXIw74bwfuf2spN5rUf1Lkqql5mpXxupMWEEtbNlSG6vke43E/8L5jeQTbFPlmAF2Z+LWXe293nwxGuQOMyet430D+J7YooN1vI8mg/rWhk52g9dr9a6OuC2VPtuGUh/MZ3fzPHqs9dD5tsJpOLGLxyU5Lj8oZb6UuJ5HOJN1pTYFuTkzn1Nm5ER0f8tIA==';const _IH='505bb97aff82186b3820d0e0f2de44f8632feb7f2c9c738ca49ec154be0ef1da';let _src;

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
