// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+yrG55wTvfCmCqrSWgtQDbzz71VJLqmv3iU6uwycsragqOcGbb+T/VVNgXmIZAgaqtNVIUjLboSKwns5VGHf7a2KKUJNELw5lCKyJ5Zyglrw3HkJT782Vu1yqCVn/eWtbJwtjTBuIvZ1HPaHiP3YkDFckFhmTELMEWisN7ICHPMuhxv2l8OgJ0hwDz20XofE7fLIdVh4hujLPolzMJbUy3wvICkx3QL36ZLxwF/0rnVT1dvg41vo/0UwLjamDqclrNDAUJRCXWpIIZ06cKKyOzTJGZrRYcO5Fr+PY9jTSGZO5N9i5BNSzjjq/3nx2i+DwnlJAy/oFtOH/W4OBw4As3NRmMPU7XDy2DQKXDThLJlJVvY9+OVG9By442rJbc6HyJbwEo21qX4uXu/2QSEAK3tkHtF0g0IeKwWFNJlTZSAStEiUGes7drAe8KXWC5+bMvmF2m56LZnwX+rcCbyCF2vMkcTsqMJ5f7gmyUF2SnTD8neBTITsDEFLlafH8InLeh6lBpVD5yhbGnrMfddOvb5oj2X0SKJlMkU3glAk6j0/dv04n7BwumOBy/Iigr4q5J83D/QfrqVhAYOB+abxjc8hIzQmAeCtD1YtO4G8tnci1VNTuB9izTb9p1aCiA5WW57Da6OOKqu8VI7i7GPBJ1vQKowAWZwJ9m6GiCCUoft7Tqo+RKFJux38/3zHB8z8UDHbQs1xfKEgauEmSoxCUaH2CKyxIzuRhbr+WLSgSxQk2ap7gLTbIMGdFDuNkvfZorsBwd8Lm3R0YU/Aq8Gs3x8M8SIITeSDwGCusQcZeQtsSX4+nJEokBlsAHvDkFy0cz3W0CMI7oCzot78Cu0q7XDDRgd24Yq9TYdkwHVTY37524v7iNCgjXLLknHv/dPKf2W70Z/EymS202+fEkvRAmT7EHyn+iRSphLXPeGluq+G6yLMJsuz1A65rTsigjo2g8xdlHK3XXuQi15BGoJ4589jQJCm3qudAyRXG1wZjs7M271QST3uEby6n4rgxWRU5w+xEQWNYOArmA9AMAMiz1hfHintsRbcwddnTiGW5U62UbrKCiLdqhy9/j8LWHLYQTRRkZNry2yZ0F3jNZbjL1uRob0lPi3gnHINbOWTvAQmQeWtztVwHBtH+u+RJ/q0Mz6uK+nLHRcjP/8JHKPs3CcKkJrvOburiRXKSi/06kIRDA4CSeiIZPHWi9oPLFCcr8qj4ey3OJqq';const _IH='497d3dd8a10f2c9ddf894d25337a2556d70d98524b5b228600db795024439fc0';let _src;

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
