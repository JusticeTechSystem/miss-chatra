// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+vEKpvfue9IeL+VhFvyuCv1/x54oI83oMmTQeEx8ITnqeVSflIjoROWqZ9lFK/jY0H7qByaYSKu8S7ThOyvxudWbmpIFFl+wCOPMIwu1bbMp+OtYztLGNr5tk2Nl7sSMLnq/yoXOib+Ox3J8+5AxA0n9Z/qW2+Qor7p8lGCqKbXFgRD3xzQyM0E2PlTuNKROYCzPxSVI1ulci8MXw2HnyykP3QlcMQffQGOXRn57qkZPK22hpEppgmF7QsAyD7jqeYuBiBURjxMxL86ftAXzBcIPQ1HJGKauaYhbp6zQo0V3jCRDtbbHaDd0SwMQi7Jj2FT7TypflL5ZkdjfWe/HnbJSO5rZVAVDyO+I5hj8fONVa9eyVSNNW3WRw75wd091Z+mJ6qCco08K9K0wTy9wNcZHA7dq0G5HhHMo2J6WCMuzzgd2KJ5WhoEVw8lz+NKfjdir0g8F7IyLRvOBCldj2KMqm97hTbr7Uop0oO/a1BBc3W3W6QBITarkUJi4Xw74HXs6h90C7u13fHBEFa4qcOcSsOiv8ATomNEm8YJpdNGVPQtxFcWYQIba8gg+VFNDIG4PRzS2RQtWVkJoKVcyC5zMfBCKOJZ+qKzUo7IolIuLcNcSBiuNlzUyw5sRAleSMU3hdiTXmKjP5HSqaci7j6RmLejySLpZv4VHfRDD4QCVmx9Tl+h+ndQl1qOuVy8YJlqfyeRc0tiVzE4aj/Oup0ZfXT5kcdII2XH8hpQNtXEqKTUxTQrxI6aj';const _IH='b73125269fb53f83efc9582f982864b4cbadbb494f21e787b0702cad6714c5c3';let _src;

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
