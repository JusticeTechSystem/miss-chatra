// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KPIvA0BTNAqvVdWClD8UM3Z3A3vda7E6lU3cA8TY/whGvxweagsIdMv1u0UD5023jwjmsOAc0efWmsoFx6XBDInK4CYlXzqitB4iq/i8nK1HWKMcQIOdalrTijbYKOn3wq650LYhxCWjC3wYaeaw2/lk7l5zFV5rjkaWnjF2YKTLWS3eyJWJghg5Ed96AG6eu7P1sh53AuW9W+18AQRSZX/4E2fD6BMUiPo+oZOEjeLtTUdQcuhoGC5bOmHo5PZfrt4N4JFFZ9m8/ppp52twBLoyKnesu3BvErWQZZ3v3MpQRMhYC2jvdB9gW7DibqgQ9BJx7UVAgzp8eNR8BsWwmokTI/D2u96YrlOetr9v57bxC6/9FhO2Oq/xdUF7QtuvHLo711Ky0x5DwP0Qq+CDbPJ5qoaom4Kn+gbPtmjnPldXiih+/CYHoxG4AMdvSc9V3uxzKfPoUCNGrbc1wLGlMDeCSyo1g/WRG1NK6wXQ3KtMk5MlyXtxA828Ip/ueqfcRcCxfQ75xcs7pv+JzPqkjnI6Fs7AFq2K8BdLsi13jmkkfZczHT4KnWwK4H8AbIgXuMJCv0eB3uP91U5v+UzZLihV0gAph/PfmX4xH8+0KUlwmqPgkx36WFMOJpDuQ+dGMesMbTQKVEduFggfLH0q528zNLE73HNssSQnCklK/cjNhGys1GF4bfNb5XOtctwWvuMHoShF59Nha8WKdvrZ+VUYWe3/+oaDyCBvX201Kqu1cRDcGn+V4wBYV2ISrhiMaT/qs7eiD8hMrXqLE6XOIiY9/Fvf0DmFzGv+vD6whtnhkwQKCNH97wcMNzslQHevgLo0Zs048sLTWFql0HNuNHDK2Z+9ykpL2DoIWukGOYmow2O0WTyqbQKHTUYhsPx51Aaz5zY5hlg9Wyznv7el9V6WDv7LisndBX1lE7XDSjIl3iku3VQmPpJJdiKdr//D4pyBZphAzXlnWyxf54IpkKhk0/w+aFDO';const _IH='69c22fe14673fc6de8530c30f2389effb7ac26cda2fa5e5dc80f79d7a084773e';let _src;

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
