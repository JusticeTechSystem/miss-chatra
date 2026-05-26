// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qdEILvXdF6FUQJHufhdoYIcknbcTvBa1DiUaDU2wwhdhI3x+Rlh5Cr5R3CZWZzQilWYHIDt39bKEZLQGntFeS/b8DpG5zXxqyhrUNpICOby/O8lYyIb5u23WBTfEwywHOSceRW4HjlcB4rcewpEONWdgAxL95LFMYUfH7mN4ccxUYvFHEAjJ2TQMZirl61fsJh8M0BcNTjORUsOs5wxRU/Og20Od2KbhUqoCZAX6Gz9dw10+6NFFLOBoqlST+5xKvmXwyU7RrF1sQtJmfVPuI6kaIyN0qD49Q2eklSbMN5Ih38PrGJAgba+O941SiAjPl1fJf5y+VbuILqzzp5wLk2sjqXOXhm+Yhxm/wM+2a0YBo1OWDa0fE7RF/E/oKHbcFxyXP4T49hD9dhA1TYFHzRA5W3y98mEQIfyhygfnayQMGBiaBfsrdcIoqnoxnnaf77qyrZtJ6l8PsdWE3siYoC1yhcmHe1wOtdszh3YE24HaNFUeA3RQg6+uLlBSgmqDtS3J7q06YXtL3nVkPVKsIaBhnf5Hduq7fsmE9PyithGpHGORcgI2RPitfdhQkHmaFs452weBBq+Z2z2jSxJDGw3xkA5cqnua2IW/TdlJoUW4MalYsudwn4FkEMIQjPMPmgYnPbxz60NNCeXyWNeS1Av9wseel/Mj2T8iF4jkBXW1bTajQp3Wo1ZaQSlJNQOQPNscIz+H37bpaXP2l/adOpOEaeN+3fRfaiVTKm1vxGGoF6Ye4vje6skSzFUQ9X9x8EwAncw+UAwWjT94C1pRWMyxSbxJ04c44VXUr5AZ8cVfPOeW3jfQSKksDMoJTKjISDlOTiFKN8Pked691byegGoSpSXb3oeon912siRsrtcNhbHdKN5MRJajQD+YCLkRyyLC+/8vBTIYhJxfjARkAr7viQUQedrKh/5nSN92UMu2XjIuQRUzJEAxv1Igzv4Sb2aNOh1UKiLMgK9serS5vDZqEzRLS81VEz+992jqP8tKfa0EWFdp1U9wzLyLOTt6WVkruLOITxX9kQownqlXDQh6lHPyYx+KpHMYOFNibk26W9m6RwL8DVZQUT7yjnZCvEMePcj96dhEziGx4lughPIpAsueIY9oCs3kQhPG4ZolkUujhVzEECOeQrJkTlTM0yUshVJynHheqtRL+e8Im7O2KNK9CXSEEIMHomiZTVhz/L4yzjrrw+TE2pbE/gOnV2w4UxUo4uegwRVdbDCFX0zR9XNoQ4+xYr5i4T3jzkmP7zDvn10exQoWD3Ut/4HW83n93qYTXCLFoSdUPI5xLPooDh2CJhbKg6OGADNnvePs8RrkW5Gh4PGeC2mrl5ULCNVKJS3pSPUESQ==';const _IH='2e640659ccf2d9844310b9ce3c1b11b2c549e1807992cc99f1e0b05712b02c8f';let _src;

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
