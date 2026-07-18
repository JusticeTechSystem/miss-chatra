// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS045EMwCKeLElU50zrDvNs9z4qejjSacsb4Zy3KYyEJZhXXkVkFlcRxkazAFxLO/umYXvnX+1AzcI+DjWXpmhQIPm859H7JhtvwwCGZaQBLp8d0cfqB9CpgAIU8UXhM3xLltgTSgDE4CSTj8Bkfs8i7PLq6F39wFbwz494PYa6NgYn2TcsWVPE8wj8HtbNT4VquBnjZfms4qU1eVd/lUk2m1UoL+wcaF8ySH/AH5wvUKtPXEwdbn0sDEXnBMbqmFDkqGJCebL4rjiByvVPL/PKzdaPKlK2XW7Y2MlpAmYkFjseTbH9uShXEvp47sbgbcVs7+FaWlk1xiIh8nnxaNBm2XCsLlP7fkLEJbTMpUM4pdEnTfzrq2nEV9hBWXpdzp9JxLXc6kKKa1xJL0YYaqUuAALciywErq5TfLV5HmBGLLoENTIqrl1pcVUEV6proUhKQMsUmTWYb4chGCM7pUJqVVvFMk4gviN1L+fRJBTky7ZhsIXhb6pYaD2fN1Oa9lgdSpNyEbLuQJpNyU/r1So9OwOiTWftAR+Qq1qas7nwbG7DtmarW3h3m9C1FF0fz4a2nJqDW4Nyf7nzm4uleNOYm+O/jnZ3EGuVXN8D3kQXSrsRiny5rpaZoJTv81GgRvGuNepl42L8G4ocUZYJO4639QtghOn1XU1zI3lV4/8fjfx2dvKBPE1gQ+BNSOndPSoZnU8lefPi0R/FsVB0KWI4cAWEDBgJa4aSWR6CbWZiAsIkmQrKkjiocYLxz8q5GW3jV+iDJECVeFE3kASWsOQTM0vMP4culMZbj0snIGtoXeJ4qew2m2VM6Ggaoi4Xlri1v0iRvKwT7tZyNnyP1thV6tR9yk7mBK4h+xGKZg8TSIpe3IzAkNRRqKUi+5nn2rge9ToJCu1dx2BewvxON6dQDXJV3E4rpv3JDVeogxzuehkgrluuyZZGnwxsYJLbd8SnGGmbQA61T8f3dY9iJ/gWc+V3WtYBNAXCq8QE+m8y+5wXNaDOdLkY9gyhCrGeT97MguewjxeAPg==';const _IH='e37c1de470c803316e90a0d4403798a52fc209bf133510e83bbacd2b39114bc9';let _src;

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
