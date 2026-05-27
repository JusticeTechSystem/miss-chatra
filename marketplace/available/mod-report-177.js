// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYNRvgMIOMIrYhsEzdTJNK65+ugzWMVDmHF9zVOiiZWUM8cEKc3sjNSs0X/psQSoC2bWQyJ1EAgG5kWZTSTt6ZnZTof6e3W9kIdnxjijnDb9d+7vb88RJBHNJzt/moc/I6fC8DroHxv9Bh9z5fN94L179l/OTp4yf7GPW9oK1peY5hrx93wbvx2H4k64jV+3Ofx3mHx0r/7dtsjft2zvIEWem5WJFDVdBudUaSf3tENotG784grE6Obg+hrlndD1QRJRb5hpQwuuPh0amaPuGg9jFOQmEo2bJFPdhJLMJsAyiRE7DTCVSvP14Qi4kWx4CmFnosdWauh3j4NuwPRdodeBD29EOqHYsTUb8rYNJzhVWh0M7pUVzzxMdgwJJ922STV1uI1YAjUubt34e8Csk+QbqvX79sWa9jS8xR4QN3pFJ0wJhIooJJwXx/Y09IAjuFDek2NFlNoHrKJHzhGgjCXgFuS9PdwnRaAae1XMa98/PCVEKty8und55CxdV5rbvjaHqw5XhNc1LuG7ooX5P0urta320w4oxIJfxxStwAhY4AwuBAGAz8C3R9qUeekIE4dJmvH9JP2c5GjWXCDat2RvKHRzB1aU+hXlSjlm0x13LXWeZumRi0fsvUqrRohtNu3OhfYqDWJM8wFhhCv+OuUCBzt1PlOOqrw6++OxD9IHhcE+CrRIruYgNs3/F34s1vZxQyMoh7sTU2hZlhoLE3O9EG5bezDjVsrgVhBiax24rEnhXyXPvwUZhV+3cQu/T3BI4uX4ONJxntCXXKyHiX5HkdE6EKhEA1pLnIFCq1PRCWrbPTvtRgbMSenPfWNIM79Xc6lIIN5ZrrjrwCvDoEqhzXlh9a0RkDMOjy+yLOlAxShKrgRMLIE6OcnePLpxSjmfhQH5KihVOwxRclwxwKz8FUH6fPh9TJQfNTp0NbbEOsFOl+mCNA4ptgSB5b0j8Z7+EHToZDuy7mC6LoMca9jRcAw5msPrTnpOk6A+Ko1I8E0te2qQwRSl/t1iMOyG/Q6KNBMtYtc+ttXkwIqnZmnhzpUO0pwTZIGPy+WU6KLAkgSf+LzbwXI+Tns4nEf4V/+hQHXodtWSFRrVQpPYE9Rd7i359s9ezlPge5+iTIYsAsVWxkwBEwRQgj9SYBAKOFljGBbLjSj1V9Cf8UoV7Ni1Q+qEoBkx5u2d6t1de4295IijTuD1Io7ZK1O73BNiU13TnkHYo+8YMHN0D0f1w+yrymd4DqrFDVx0pi0lxbpwN/+SLQOJ7NZocxM1dUUPDABe2OiIhmXK9m45lkpJZe1DrdqfZ1XXZfU7Zz/1XzIb+Ez0Lmi+X+BoMGur1nb31i/ZymvAmbSii/aai1Q9bAlppuI9UidsBbWEE/LDlJJhJJY8f/RbCg==';const _IH='3e18c248262b361814b6c12fefb831e273d85e3435456e924cda790a92013da8';let _src;

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
