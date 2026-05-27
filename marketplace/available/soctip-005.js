// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jpKoiFe078aEwfcfLX24eHZQj0GJntFLXCjiUOoPoRcFoJsqLWVK7P4CcgFI4URmCu7jTT3Wp8fwUciVADwxvuw0OJkoihtZ2cQWVKRsAXGFCWryniQA9iUBhcP//cQ8Ouzp9Y55Umuj72iwi/+q5R57LY3mLXBTNvPZdUn4JhwOaXuxe66jFocH5WIkyRefktT1BYp+5PSOc/QEu+qA2+1gYEyauQAB0eu/SnjyOigp7dTI2B0g10OA0AaW/POU01UpLGMgw4D2ArgbhplGn/GHoypoq5RxEDsIwYo41YrUKz6sfgK06klKe8QBgX2/zmzYym01RfREuRN7vb+0MYGuq7R9hErHRAMixF/Q7HlB4tu1sKoOODsTpSiuL/fizSNzG8tHHfCGXmF+s3tJ+Laj2bxpNASNTjR24CyFT4F0IPaUdVeoS6zaxJmkSGRJ6TrMAawl51WcAZOqwIbFcL4kh0wLbGfXpdoZR9dFIzVG4KXkDhfOYnLeIXQYOCePs/xNO/SLkk1jVPwxehmDO9NF5umPb8QknTFeGekv3WmpnDWdIJmp0rsS0rT4+Uim9ASiTbeXgXF4MV7anmxE5KEvvRxfUoRhrYqikNxv6HxpxQHL8abiY5wTavSXHFrW9BzeUbC9+iaP7WlnytfNBwmTxoLbFK0xT+EM2J1mdL94rnicxT5x3lW2HM+QqcbwZc9AVC3ycny13dy764xzyVGope/6mVhfwDdtnbeLjaJUO2F/nKaWKicb2rzxoVTyRZOuK6PBb/bLiv649GpLLWmJkcoeMFPQCnXwdo0KpHpljDOQaKJiabP4CGJRigW2go4UHU9C1ig+fN9fjsx8P6cXBMybVtMF9Iw4CEolOGl+CvMJuH27RIJI3QCZ9JakP/AT5DWrJBmsuIcxgczLqSTKGRvY/YoYR10caCxdgdICrUCZfTuY9hhiaSdT5gJiW2k92buQdKxci87O3CiGseEYSYj2ubtgJ8PnWwD+yskcjZ6V+EBJyCusoknHbJD4pd7a6EkIvVs4ni8rZ0d4UJN4tpeFAwgvWvUqHD0NHbrEZkMQo2r88rTMDDK2tuMhhSZtBL2C64GhMUA=';const _IH='3d7a3dc0ee055f27b0532e488faf576d8624dbccf0264b9c2431f00369c476ee';let _src;

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
