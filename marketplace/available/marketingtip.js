// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dGE86S55l9cOKx4+JbBElLIkOuHmD8QDpSH0/2FIE3XRy2L4Hqt7CpYk08cdhvyuUg8AtCjUz4aItbQrchEx+1r02KAF/zauL3wkZdeGTCO7stGNCQQhWmjCzzGqg6TAq1Gb/U/Qqr7Biu/gd5pdvqoziUKJCHiXGlrWES7CkMVCmCEdZOf7pUaNEm/0hJNmXNiDZZDzncIE/fXanEVTHhUgC1FPa3BxpLakpaiN3QsOdx7LT8jHFPQwwqzZWeIm6MeQdbdFBsCyb26p5356+mCYVyqKt+1G2ZvGMIfe5Q8rmFdASWqpEvWh7mVI27Cr/V/VqGkWeQ/dV3CpG6GDJIp+hcKYLHf/Rg6kep3rNB6rrcX0Rw67tn3h/Ezneh2EyXJVvfMaQP00+04C1AfSyROARjqhssib+7qgI/QdgX1Jpg0RfY7UuZTrid2wXep20tFKDBAePzaUaNyCAdYZieQafapQFVt9h9+T13VQ4OhwzopOanXUb9jBbzpl9BKvJ1QAbbiYPU+4bql+JEv6MdxSVhYCa8NICmpqyKN2RmhzQXlLd3xNZOAH0Eb5IwkIlG9UXq1oMwF7cBgfpDJuMejHkM3Is5WUUj9DK8Ru7zhiHIpoQY3wkaO8jxzjbw7tR0jo6jvuD4q5mboAKivj7os83nRJWWRQyhml6aUI9EqLNwxVzOMtkZKW9+lbFOeT7ZO81KFNfnIhoNeTMCV5sMIfiPs+WunTjfiGj5DaWwyDOkDhQWooRujmrHm7nTn8YaqX/s/4B75vPEDwxK2Ktgwf8fXwt/mxo78XjGFbj+PUhzWdEfOO5a2raUiXja+QEI6m4/KFGXukSgi+7xfzGJtkPmeK77Kv16gcrBAosyKjoyBqv8TzwIB2fCS3Q5L00wSwyhu8obWiMu0Rfg7bNAgakAv1UiQZkkytTXPRuuc4uEM7zUTuws2cTE6Uw5gZ30LRflaz5IJHr/NmY/Ang8rYGWSRMG4VcjoJMbqS+yKt5PZ5rvhRyHaRgDgIFgQdJXAq4gw2eR35rgehHptyc31ktoJYuVeq3cJlKiFkO40HQerIsoKhEn6ddIsMmYPxtCIXz0eka5HONF0qzNdXakk3pL1kVNBHUUjxdwD8iml3mO3emfhk5z/YtawkvRGPuwspRowmMOHfGNRsFz/UDvtZHXzEG99gKUAlpyzM72kx7+rUMZLjeKo9axgerVD5cGBCHtgzZuoj2DSWjDYW';const _IH='ffbf43b9e3dcc02d82ae1ba3512b398047c2ca560992a8c3cbdbc3b87b795c99';let _src;

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
