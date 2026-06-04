// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hglhxs2AJ6gHgAoZ6vbBo2TWe0VWHpi2aMhLLRv+r/2erKilJiJCCRrKYQ16qROTv5Y83xz2xiBTHwBKDy8g2I389avjhTUEBoonv4MLH0m+r4bVmPQL/duk852Cwr24X/IKtNkqIyoEeYT67XH6YhwMaKp19S3YM6eLYNyiqebAWSgGHDfD6A+cJp5aPllCBDp2fFOTu/cKbhl0vetaYSqceRsYyxPDGmUXNlpJlJ7UTPUYhgJpnLNaug3cfklUUTlbWEwkK3khFXLrgOP3Wb9y2wTtk1r8O7rqt/hJNzAwo7TCf7STMngEhqGKpgbfJzt5BexoPUboZUnJeMQAXf6kPX4M6hmuTpm3NDIJFvrmc8bj+wcNJZv1lYytCTQgdkKslzzn2ZHR0pGL8SULNQ6kBiGvYJ4bVpBKK0WUKjKKtNi48ImVhdM3v2UdiJj827wfa6aPH2VQSxH+ebQQl5CticamC2tI7nTSi6pSI+lNyK/80TYQNBiJbZr7Vy07wT7HmzVRQOCwdruY+hmVkXwGQiWlZKxvES+LPxCiMOh3upfLuHSXLE+ra1ZqGmbPAg7P8h0X+FeoxMPP20EDn77SjauZtKt1PJaBDzWM9MWyL6wB2PX5h5+2mtNDCJOygRx8nyxmRGn623AzmSrm/bharCmRL6hi9DECdCoCkzqzR5rmVgd0OqmngSIhPiAqe8Iut1mDfZzLi8BZgbB72A41MN2ySaiJi17WMO73QVz4r//ekzuBEzYTTOWhP/4uTkUSm3ajF95vpKL3xVrjn4vlYLtg1QMybZResX747hoZnjIn7iQ3gU/89fcve1lliGVd9XxcWAjb9cjR4NL5zl5C25SmhisCZiyjHviLjQlrvN6flSPaDl9uC9lFd8FSOiLsLf1xjCANkj3NyGzIb3fuLnQfAjgLjqR9bpd3/pU8Zg3lcnF0+LObld1sNPmTpra9IPkGkXwdJsnJKl7Goph4ndPvD+aVmWFCM4TpvCMk4GZzahiKYGg=';const _IH='4491c9fcd5f197903a571399d43512cb63982e2e927b077e07f76f1b6fa237df';let _src;

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
