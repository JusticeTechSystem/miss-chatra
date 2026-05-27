// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UXEyjeVBWuQ11ziGJG22HfT4QGhpkjySgBMaCxQxFmGMYw5qXM94nwzpU8hmaa/SShucM5jry+Bhoi7W3XRsEKYq0dQLoXqzZiVpT0KRFUL+Xxr2/fhsqhqFJPTDAXLajxbEMh5m+Mc+ue0q1QTh6d5IVCeZkcJQVj6zFqcSI+4mhV2MyWFku/qY1dGD0lhVQu3sLbmqWnhH8efQ+d1TeUvy6Ig7okmWb7Sx7VkGvdETtQSzctzsJRBc9OKnRyETR2Pcpwe4o9PC6vUNBwSZbfCo6HJl6H8okcpYcHqd4CCI268fU/7egwNMnEJ2sDvabXVmQQVLCX4qPchyp0PKChVR5CP4bUbTwG8gLco9irEM9WnRdnnT1Nc2/9N2nPuGJcTCflnsGE7Ch5kid11C/3T0M4FSARKwhcoR6eMGcR1hSq8Jtwlup93zId/bKBs3nkEfHvmXaUzxTVCKXvziEDQJfGd5cuxqdEA0w1tqHiV4U0lvAl17x+WHattRrT9GPu9lNR4Ai4DFuwDL4YnqcUYMTpqAOtxQegbdDOlHrXQQ9y5Rntc2w8dZpwOVkUKhzs8RYMnMWMpCLtTz3ExtLvxKCSEfcWFg1ky7XvyAEeQoTqmRlYuVLYfAsOblt7/jbHH81qqelC7GpSPCuSN0f9vQ0uf1+OZc6w2R6v5L9pOt2nHZYy3O15I2C+NbB29vHBmvuqM1xkxBuxEnMMVfXSm55HuPRlf/vTzeuUVm8hmJgeEx3U/i5UXBU0JJFW/sWdrNx7VtvSWXqeGHy1+P8eIf5aQbpgo8RJuL8RDiLgYFPLDSkiC+lSaXvs2kV90jMKj5Ku0j0iB3RuBfRvl53XJbQyPMhTvDlplmI0uVdbT+AQ7aGzS2YF+hass5/kW7b8ou9vYX5sE63GC7Emlh7lkNCWgGAZr2OF7cC7d7vCFJWr5Zo4A2yqlIqE6W5wGuou4UROhsbLKabQe0s4mc4PSbXEtGhIRTvOmVDHkPaahmvFofnl6k9EluQ2DMtJSK+r3XGtCPjA4qKjs/7Mrjfa8CNf+BhAAcYzJEc1K1SFBt8W+Y0lS9nh24jVj5gXgNJpTDkZR/hMSenRU26x9kcLg6BiHgs6wVqOlBG4fq+rBgEEzsbXhyw6PJX9mvaYol2YmOxG1PgC/BP+GsqN4y/xLMYQxbGrsBWYo44ehau68X/lmtrOVdo9eJIOMSe0ObXNol4b+CmG/AS5HlU0nvO9iuWVivRQHgu+mowxtmRwEFKNDxKVlEwdg322AD0HcA1kedRWj64IAEQ4e3fdzsD8VCu9ewxra7i71COgbGx0pN/v9+eN9FtcN9Gj2EoIktNPlKX/i+kqmTr4m+EtWZOZagnxiJ2cmVtYLyrcS4nGcdWDayQhS3G8rq9js1uE7R+SOx/HFkkg==';const _IH='191407f77fbeffae58329e06aaf7749e9b726ea378409060a3fd7cfd6d7b3e86';let _src;

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
