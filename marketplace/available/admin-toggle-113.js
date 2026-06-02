// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fLE+8e46y6elbbh6GayGNpV+Voiy7/QIn/iAHqf8kPIw7Xh6feFaiHrcQFrtE3RkyunkxS40CiqmdxW6XF08vB5swTWlBvyU7p4Gb1eXOd2cXAvM6ISzXTQH5kPKiCRXqctB1lh+X15hywHjBniRbSY1Gp8aGaImAVjRC2ZTbSUy2ACODckkVDx0VMt59xeWxbFkQvXPifRuTRd04XlyhaBV1vCEBitrJNYuReO5gM6MEudmZzmO19g2xCko1KUTfrrEdPnZrnDt6AKww1FWmSQi3MxZK4UyfgJj/esnTxqi1xjk6tGpNzQSXC1B6xKtkhuthfJCyimqkomj2fZdimL96shNakZAmmEfxL0agEg6xroKBK/kBXbuJ/bZUh1AzdmXZb6tWbBxQdW8pcLRav51UzHG4dQlF0HbyQlCpAyxyuOejccWMf+KQaJ8htywKnnOgg4nvT+sraeVfuBOsqXsWDb65r/9XsQXpMk2aEGd/hGXDmRu4DfiXly8paWD35DEEjP+bB1DKV1QInZXrVEoXTbS28AFrMgLMaItwZl49IxmlOTtWaBfFaJYHYOvkGcZyej8F5qvldWxJuVg4zWdp0wFTvn8wlPwuktDBFPmil7INNv3EW+AQOuSp4E5CwLcvv6Us47GAy/uRRKN9EmTNdV7g0Zn/P8oPOXaP/mDxxIre/w/tjSqr8BolsJbt4vlqIQ2LLqX06QUlNicZbkL2JugA3HZ7NIZoQ1ek7OTB169LixR8lR4rFQq692evN2V5ZixivXNaAq1pPc+R+XzkNSEHfAE2vGxYHjpxiW0Hifxn/88T+LZEYY6V70/YIL6p8ubJyQrpC3pzNtaM1A+iwjKlgPNx3cTkiwch+e92Qdg8ivKi2j4PYEQxrdVCgjLo4Gp/8mpnWxKNgOjPXa3fswxw954dP3PdmZOpDLGdI0qO9YMOfAmT4YSWXsKYVpYjbz/iLitcZjT9yhZz3Xy+I5j/aKPpN5+oaGRVDw5InizUOcxYXhsUTgHfgKhPQ==';const _IH='8bd32569fd47d09b57165841d611bd3522dfbdeb8d6c86db20013e52fbc9fe71';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
