// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+WD9jPxkA0Kq7fsQhsypleFcaFr55OuLX3JtW5TgmCQsO7f3yVdscDJrxLRgCtnEPKvnJR2vxwmHPqf+wg4L/teVqYCQTB8NHMXvuMcSKHpXKkE+1zacMupEi5Lb4fftZT07HY6zCD045Hk3krssi2mRyZtRoQQIGGs9rFrCn+U+vWT2+8jQeM2cpTQ7tEc2wZiKwLA+4oP60rLna46de9eXs/QGKqInYj2LS3QB8nVfAjaFYNosSoa5+EwB48pmtdIfm+UkyRvsugndxMHydvgHSdQEqrfhduGkdFoVA/Hzpo1umh5qPYzp4rcUOKbNDwIvNlQvPzHPLncph6B6qiYiAr/0zgMTB4IzU/JtZZ++/zwfAW1HlTkh0VzBIh4EA65wOYNbP8bJ4DlKp3j6F/Ob6CEmVLpHfRpIsWeiPb76jRVqJbYKvOavzikQXH7K/DBzdQ2UpdYUT047IYZnmP/N0PhI43nvqY19fquzhd1+3BKEAy3g7Ed212BW9gMrjDJlDZ/XreIGcSpMN415PeT94d0W/1xVE8ETCybqQei8mt6EOEE12K7kmdYvW3Q+qmMFpGe3MNzYmSGwRfwBXpIr4wL7DGjg6g+8ucy3VOClFaxyNGpi/sXglwGtdNucIGZPi23ZLsEd5L88Y23Xo5eOqm3iQKw9LmoSbyJO7qNA+8THY7nkfCxhLrDGUbfiKDG7kvDw3H9J4F9DNRpnUijjhwtK';const _IH='685715866064c064a35b8f6a5c006d3404779a39c62579a43755ed2b20df465e';let _src;

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
