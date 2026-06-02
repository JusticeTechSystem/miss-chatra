// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eShwD1dyxIUC+U4VKTgVvQIKyTaJA3spJH6XpmmlrC7c8hjWELhWcGuMrwjvKvokwtkSyyXs1mUSehe0mA0JfmZdiq4xOpaTAmuGzA6MRF7KkKPZ93l2Blo3vCf9bNOCbZpA7id1JAboM9eu+aUmtvvrNQZ3Bkj3E2fTjzNSeMOOWXgwPiRWpQHcuqXUoM/gM2zgKtOxYuFkT7jerT31Te1LY8lUqaSO5gy3O0kn/9k1+bTTjY0oHPTe5xPoqwC/eMIKz9HydtlwBuhUE8mcDEBnC8lrtgVoR50FN8arCFTZBTCSrGbScYRlRaMcj2IJnROtK+S/w/5ytJJb0KO15vDFW3UZxRzZk5LNS6BnbzHbdDikeNGhoHOpHc7/pygsLIURKYBX3ycDublJT4oKBhsDPcmKPzvNrWnFyCrcJ+rmIvSrcIfNwNH11cjSAM4W1kMXnpVZ/FqZOQIgKsdcre+pOrmo1+UXSAn7A0OdJ8dBM8kY2t4jYdqn6IGXVxDk/zthK7jIdTN2N9dkv9fBEGBJZMq400DnILBdNYOvwlfADD9LSZVskSi7bTLh8jGY4z9D3j/O4dmg4Y7zZ/UK6vL9iMD/kls63k9laTECsrPVIPjwrw7nsHDaf0McakiGtrfBTRqm7A/yCjzTGMeRkWWkj3u8h9o9BWW068h4ip44pE1yt5iFWvBuMeHbacYkpvAN8/35mxItcXhTw7oQGqVYT2f16Y8GdDkCL/1Agbybo9PUMX/FLlyWH6YceiDcXoWgClTNGMXVKJsEj5ykvcNXzNOg2kyFsd1YNxBndrlveCvoUTdQEBc8Dy14ISAKeyg1WhfFUY17ZsKbYI4tr7L+r2YUtX2QQcsq1H6DxrYi34XG+iS5nSLtqyd+pHdAI2cIbZn27ih7xLVKbgoAkPxHk0rF2CJJHph84e5/g5DRamJ/cUCMlKQE/OZzwwDs66xgXtgFCryWZ44VKcUVH8x+AU6KXq9pjbj+FvljATWHNhL7AcGmy5R7F7hecBmxKdb2oVtbEAQZcHe9zpxNUUPUORanF44ei0hQSik9r9NfiGh6JvpMUH7Rz/PP9ewNblsEDeJ1UvGU8NNn20rT53nbUxCl9RZiSr5snSqwjKP+ugEu8YAz8NOy+G4X8lPe+4I2JO7dL71RO7ttm9HeiuKJQ/vr5vUN+qshUCOIQTKgiCSBX8fDDcG9EdnLI3EfUg==';const _IH='93e063c87d6bd86ac4527add313ad88e3a5360a6bd1186ab4318da80c76e6235';let _src;

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
