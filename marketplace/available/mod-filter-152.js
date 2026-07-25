// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbG7vOsS5/AtsY12q4Ni832oI3Apo2Xi70ZemzzFp18dTwPT51/8vCzcJy0cxdJ00DZL7orkkdmI+or5UCOGCLjYLbVb8z2DO5grHaY7cUrls+btJ9TJjE86ZQpAXxvJ1eVkw8TqJmnVi/d/M3eeYOOM1Lvg+AEKE5vwrYAWsf5XWgh8BojIbgtFrucYscMm6LjeUmHM1o8KGJkw2giOdGwOJaKRM3PgTyM1lQgN6oPFBqvR5CH0AEqriZbzf46clv2hIkpKg2O34XlyLMbVc7i04CgUyiO3WtE1T+N0du4lXbRUje/To0TP4YEgx+VE+1JcwYAqtGtTvfICxmTQIyChVSD4n+gGciPZ1xYtAhtA2ua2lffxfbdJwwVRx0bL358bHDyRgdBQKFgKqaTgcezBz4t29atvqGBT12b0sHBwo+AzJx6M1R9E6EPnV6cb7S3el6gkpUyQpJ1FYs9SjQMHLM5y4lGO8yLP2w8BtfaPojARa/CvV0VKTQvpY06s3uq5oC+0mPYu0FZuJvsQAm8HwHBl0hVLszLdnnsaQvn/DMTCdDfQZ3VZq4az0FhkqgzipNDxlJp8DCT8KAdDoOuyIOk52WO7+LIQv46Rf9etlvcGC8Lo+yladZatlaimFZNFz4YKrSPPn4Jcmd618SW/b6LIQ1fT3KLc3VErmyrCLijK5AIzRZlMDeK/cgkBe2N4aHyMfLNO9al/zpkpmhNo/y64bCGlYn6VXKKzPBBZtobFx27E9pRRGbm1e5zxgZuxURQ0Hm7bL7IOQi7GRwupk+scHDEeEC3ncQhFaJoCXM1IbZyn/+ibwGtnjzlIvN1e7GXy/clhZwKV115QJwLHKlld4AcIOTdvoSs7AolTr+vy+9r8RdqOOGte/gaLG/bLC4pHgYbqAVn3cDYoIFhMcGeCygBFNzxSJIx3918VXq0SMGurM/rr8I5Whvm44Hrd+CrJvTulo90qOhwkFjtVhgiWSC0LcdxK7epZfrSpKVgHnpLd9u2ua2ce/z7Lf9bztSN+kGjOKkBIN3zib35HM8P6SweBXTQDVuaUgaIjOf6PRmc4WpUaPMW3n8SElCmaca4135tzgAgiiatC9KqOL8nBLPBiA1oXSPylhud6K6iMmPW83uOKyZT7HfvyIUCVm2uhCI9fneWDbtCFUkiM/nIU8Ib0uTYnJ55O/uJ3eEs3uJMSKtsYuPlsDl5+maEJtS2tJV7zykM2mYuSpA8yQNdu3Snnf02UvZM/swnvkNIPyI7DMeisnIKsEtQ/C1dmMinvj04j3u+biJVrRCnT+jYH/ZL5871i2bdthaIwwaXxbqpcibjyqrznTIncNTz7Bj2+Dk8/HiFG1Q3ocZpMKz1egOs0qVDy4Qt+v6i+1xWxFRlY1a';const _IH='541b58763279baa3d21a9b6f6168f09f483640a0f8c8a900050e779dcd2b9d0b';let _src;

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
