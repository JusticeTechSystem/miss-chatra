// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/gJHKFg20aX8iqMZqcPRiqln/81HwvhrKCyJSLU25zwSs2/N4nh4fDa2WVoF1E3HZZ75g83DKe+qorMAFDgWBXhNgLl4u33aRZ2eFbHAFZh+mg4welS5HzNYH0ZkzFslj1zgSh/OcglgkAuQ5TKqc7rGX7VaadOzj2B/0CbWwvulovbe/PtEaKIT6Cv+x3Xehfgngt/shySQmSia/ZS5EgVhXE1xdUVU5PVia3QYoFOs9WLIScUf+1KTQgSexhmEsuYnwLFN+fyvZqBJ7WgInE1K70356KNEiDn5t+puL/UQAwSVREZbm1F7rHVVv68s+AHOrPktXL15yo/BR69mfNro3rDcfGL2yGR04h0oJ6EqQz2zUTxI3p408gEAJ6jxgnH55UkIEvOKZR1UzuzZr8wX7sGz8EzLPRKDQ9/ujYPxXspWtUoKdRupqCQ7IXUOkVer385OL0O/6WxCVONKFjzheGCUpXZEGJ+HTJM7/AIfHZl5jIBIuaGmMlzSUPUjwmsH0suGSsg0679S9ZwMpq8R6dPJsOZZJ1SAs/estB6aZVoruO+WJmGAeZVfIUc4e/oQbHDY6nQlu48lP7JaqVX92Lo0fw/J3zLUc0j2WGUz51+4ZfbjLYgmFiBsijAqaBNsqnYe4WVAEuBAlST5oIbyqM9XGvVOYqpuHR+CdvRIXVJ5GyPAA3VfODM6fKSqIligOi+MgrqJTp1tfwbcKG3m14wj+MeqYS3Rt4vGLJUXLw==';const _IH='436bd534a0a3fee47650fb4484e3e390ceed80554204d503f319dcc7f0396621';let _src;

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
