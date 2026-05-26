// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZLtL06WOiQxbG3m5du6l/dX+8eGDCVYn4ZaST+0uFzTFbSUQ6ITaLFMk82cqXJNpm76ebKTZZCXCQffMRA2RVhGytgPGEwsSZJ7N8SvleyTNaq4NXUW0+8FpKheFZPCxecGZarOPorCOen0UwTbOqV7nWbV6K0v6ZAEo06pZoW2SElrlGn0NbwS2krvSght3G237X4+pwDDlFXAUOtOOz6l998sOHfJQEYGOjeVEp5vOLcXHhUDMzN2tb/1eJA9rxQ+RYF2AAKmRyF1U4IOR9Tun5btfDIWqx5y2uqBfczNT7GkFntFHsQB2s+OniHAnhnW/QQ3Sy/0jQITzwc37C7T1kLO3jOKegYjWxE7+HzlAbPzqA5rZQGK9IaCHsbwjwwySpV19KYKLJu2VakQNuMpacM6IrD9UJYu2fYCRYY95GO6TbsbcwzsqN453Porn0DQfwD4QxQqsG7PsjmJkhooW0BDxwUW7R5a4RNg4R7Phy0BWxLvrx8u/KLdFWL2VKWgYEbWqCagYgp67FWl2SFDFf5DReLySixXVG3Hr5WNfxcYj65VynzuYwuKrh9JsLlZL2KHR9hpWuW+/HnxSW/mANA==';const _IH='35932f6f244af3143d2430fd782164da398a3c23c5185e166d7a792abeaa4de6';let _src;

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
