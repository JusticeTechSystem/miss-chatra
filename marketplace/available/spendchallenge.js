// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Ecjlo8A/j9VEsy5iPdntCkRUteyQ55543wFjSR6mmfLMcKC7hrWXZyDxrWlCPbePhVKo5d0ObfQUI4JrJRszffV6XBWX6tNAQRAfxsfmmgYCLgLqN8nKksw+yYN28EkrMQYjrFDOp/cSZ9IDEjRKwosaa6vVHOF6vrHxnsYqlHzsaf1ZRmzLmSMFKYbPgE9EFy2hPFZSBtrYc9PphM8UgZS54wJUyyHCVJRjcEAqVIfRqO2jCk78xGmFrqZLsvS5c+qM4qm1kX8uPVs3Wp39DWlxAsgZSSReyej/0+gcG7L5DHo8NxMpzMjDy3dXipWEgzPvesU9zdASfezarTVpyk98UuH+afIbcJqP/irO+Fs9h/+PvEEXZoV3PO6DmEZszvRRODoTsKG9W73L9Pw6Dsr313LrKnmVsfE7yegVeWuhsRAZUg3eBbNXaw4MyOxgd6ChXcKFIUcSJJsO/L/KLomsnZnZNKYDcFG+bpSxwLYvPDOY+8s48/9BKziVl3csPdvB/AxJ04S4Gr/nQvzk2zyKI/9B83+IMLn5rJWzr0DfhJm7mfXo0nSgdOUand0VjoEQapGEaSzvKbqpqtXkxpkfny+z7K4RB/1iVAwqxmQmD5VPKxMJytzw6jBBQWAY5wSj25VDYweQZpzfwdR0zzMQTCzaY/+TSdqe+O8t7rbbbpLmGm5HoqC0+VsRq0UcsbNU7m9Bl8uCkzWwSxtaC3tWoQhp4FCC0opC+V1j7e2J/3tXuHztAvZU32ksMk0SNo7Ci6wpT5mMrDaiXcLGug5ZgRT0cEerM0/0uRvFOwzVJpkhmAzOko5o6wLF+NHka35Y3IlJ+/wKdZuMrgPuKEFBmTJx7DLGf5WtlGv5Dphn9H5l7pePozqgIuh90aLTdGvhgjWto3o944hC1Ko+mlJ7Pj+oIV9zeTs5QUmbn/TNFIgPa2wxH7h1H+Oh3kcN7AdMPWzH+dAxwcJsh4vBMTVq7rDySzozgs/6IiOChlPsNu6Xuij+9OaClO8jHoqXr1cgEqSIAjCvUDCDccGKNvhV6iKvJQjws1tBVNYHSYLyvn3CvvScaJecfz+nRd3jjQIjbF5rFfWQhBNm2kPXynfvXnSe0v74u26j/G9jCH21J+lOhwnqxPjjtd3DdQv+0OYGze2bpCGV7P+yFBSDeK/MWpJo2V0sA0Y7G87yt84kwJCYQRGZoHJy9XmIJrIm/WaDPN8rYfa';const _IH='fa4e7c160a20e7c4b96dcebab6deea3880f70abbbf31598f7775c9fa53246405';let _src;

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
