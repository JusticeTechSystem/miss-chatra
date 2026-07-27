// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGAqOsqtTcouoN9uJvueBpC4V/ppJsTWHAhAX1IGz/ufyaEGXzbjQw66Sb7/xlskPKZMQgPRgVSwg9UlYuRvhfhf4wZphddqqL8GuqKR06kkXVgbTWUrOSPQsqs+a48fHBW87g0De7wd/u1mksnMvBxI+wPB1ff6bSIoQcXfH7VnpFiickESxa6TUVIYv9mNFrNxgBytM3TdKqLzTFL+WkZlRjRTk8iXqJvdpc9qvi70rT8bdNwSDbTtRsKwWEmAf2PAOM65p7SEHB0X8IXBaGv3QgKEGrwF4LA8Snt0z4H9Hf/7T+9M1LlF/jwmxREDBxnV5ANlP+kOrxIA3S2vPj8Zx7hYxgnpRy7w/AkveGH7bnvRpQuPhADIayAi906WSRUK7Fkf0cEBE4BCqTrv49HWPn5F9iG4Ooz9fAdZVknLveS/aGXb5w4TPZ2ImOiREiVOiTZP8s4bBYjkJlAqxrlADzvBBPmw0+vmCTgCMLTgQUqW5OFAXrSnSPqqzP6oFIYKn3APvWqZ5LCijJ3Mzh6ZkQptyAtNhklfz2k+x5/nWt3Ex3+dsUDC/h86sxHrZrUCxnR882zqGweiA2N6dYgIlAxetbTDDuxoQ9AxG8gBX6ztU/9Kn8Ej+wWlryFeSLhouuiVKtURT/nRZ394VVb7IY6ppBghhVcla4lRFadls0O9WG6uvC9hEKr0H+/tu9b4S03OMvWetGHsx3EBYrW+hjTIgvorE3uMTUKZckDI1ivxVp/E8Gy/pymgqDIdo+/o/IJnEGRZ+R1QZ0fdaRWH5mRsDLKa3rKje3XUchfw4KlIu3UV4xHzbY98eZfIVT9hVwN91bf/9Km6Wz2lLgsYwEu8HWIWZcnDuNZscLN7QRY/YuXPrxMoWfC7y8FBXrVzkxSA+6mOBEktWH11PnEJsfTPXlFL7OvFwrGsh07hQrtOAIxaI2YR00IlHd+Ir2i0YV8hjKgbumSdYa4yTzwXemYhvkxAG4KD7WEDzZFA9mtbq8rmk8+BNrKnPHgiJQNlP8c66nQfFg+uAykh0Rml5IHiLk1TbU5wvmQGe2uQJsOcBm1dEOyXZ3DURwTskZdFcTdFPW9OySru+jsdFN+NBOn03VZVCjVjITG3m3s4hgJcZB24LNMjw2TcIfkYR2wtkKX4M8A0cngSxjoVfl67eNaVLWaVzuZEcvy3JIoRDw4osGORBKGdR4TCTR9Fk/JLqYYMQNzOeDCZHtEqiJhZiDKO+MotmkKt5E5dIHa3Yx9agh0dbrxtrbIZ69YeIgoZ8H2YybGAZ0E0hJsKdynA4MzJpcszEpF0ul1L0fvjgCqL6Ryo1BANf5buGvJ1zqCLHRKS2DKbdSkYr9jCERooLN2oxOh4USu4jDh7bLXtlCJFPYndZ/';const _IH='fa3a6e91bbfa666afad9aaef1c4fdc68b6af930bb8635cf4499eae279e510aba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
