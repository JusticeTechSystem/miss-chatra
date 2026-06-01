// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyJgBnXXAStvOFXmxg8bMxk98L8O65Fqh2rJ6tu6xr/9TFfTjEuwOiF9vHRdenPhx20x1t+MoIbbWGuaQQBYrQhMtSgn2wo/MW6Tl+GBGO4/Ud+E+aCkAalUM0medjI3ilnWjuueGNarNo9oJM9/LbLS7+490fUhSJEXLKHh72aaQCuIx0TlkA5lsjL1IYk/m1vTH5A0pi4mwiYevldKFOVUCOqojm6Z4cuvYwxEy8Zw1NlBs/WmRIZsuHadSaD0WDAnX3rn4mEOHVPYdK3xtMe4m2JI8sVqpoSX86f5ND6ReIpjYK+imt5Y/hgStCZpzUwS48S6OWAhIbxKhPIIRFKBAHBfno5tljwGlrKnXUlkh7El41R2CJpg2VgDCZbqsiOlmCHzMdoGWm20J1mcAke8EmROO4etcRLlPMDsqjuyrHdHjgmfpZ7jxKCUqKd4R1MBHf4MmT1U4FZFCDAwv4i3TsJH8z+6LDDD4lSGc72gCvmciMh+rIqA8XveKEJEhG8AqolEFh9u+w8yrHo87WVw3WtE3Eovc9s3qciVzSJi5FoVOapZUaqxfXJf4eHx0Z8oJ0s8/uMiMQDP+ryWl6uRnSfaGLTbgXF0mpka3zTRsZ8VUb7BJBNqFvDFwn9coolau1dThrMLj3AVvCCabIVqdYf0JjH0r3UHSwWsT/oaQjA479u79i2E3ohHG3jEYB0E3YFL8rlEFKk5CIbjP2bM6kHSIL7YRLyFYzJ6K4Yp2yGNvU59UAA7b7YcMtLb3UbucOhQFUzAYzU/ghPFcd7vk23CxB63WX1MwBNbMsvTj/4tBE8J6T2yfjDbiZQ56ybgXXMvWcLaKyVymdqghhvDiEth4L7I3bJh05QldbK8jPbHghAwpoVX6ZOGpxrOb0lidJw8p+zp4izsCqrmDbxTjfuK4aWUxf9wM6hRFb6vXqtZjSDGm0/WcDbulqynKTtObC93khcIMnGD998UFdLXP1EY4Tl8zYUKNZII97wIgM7pmWzhESnrbvaFlv++980y/JAxF5VxsiHv4xSHoUcR0mP7gEHpy0PV/KgO8+AYq8zMdKWyor1IA86PGRj7jdL+OFlJlo3EoeASPmHsnjmt6Lv9f5EypIbsJm0o2Hta1Zt3hdIo53gnNTm4qe2h5PBMb1o0tEBPEPIEZo0K3wGFhiriOfrgMHLVcZdM0A6ielsgcJYcfGCrnfz2Irf4niINk+h8dzcFAe9AJfZqmUWT6Rwg1Kde27oCHyyw/epoPPyKnr3iX4Ug896rb5iqVR4b412hg8xN8gmF9Jp6PGPWRjcJY6Z5BfsWTRC7oCh6CU/AbI8ix86tP06KIa6fk6HN/c+6Ua7Wy0DHrj4D1arG7v9RWTPmcAAKt0PYSQ==';const _IH='1c73ea41f9ee1d84708d1ad5d05b21153003dd56896a91608f78d42cdc390322';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
