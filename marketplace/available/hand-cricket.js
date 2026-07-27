// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpPNWZcrBaDEqB3cqWh47RilDu4HKUGn3RRDDP+xHV6LD2i6P0qDwJUgyOEMFmx4LhMfbGLxJHorwg+0ZM7Ulvi1Nt0qXj67gOnFabXJ+xDbNY3DwY7iqGUwKywxZRDQVbyyirf3AFNV3zLRv2TB+KZZRVQsTWldNnVsV4X6EYjCk65mj7C1WCaGG3eBEinGXTUn2IXyXE52DwNRxbzWilPpDbtjAJuan0ntfm70q6Nb1pttJb84e9QwnOq0SyLSBTDzM+yzjlWGUtxCfepH14B5VN/zRo+n+x5U30I2sh6jgIZGsuNJdciTEQeZrA9SjGr7WF89IGrTIkDynA8Q6q2t23XjW/6uqXNPiYctsd6oJ4Rq7bYp2yd306SZCSJjNCvSycy74dPNg0nIUppSiVkQ43qSPEAm6DtW4j/ZGWEJ9fdQL/4VPa4eNUW9Z+nbM+TB+xQg+7xymzirMkfETpmi7S6ZRkQbfnoGvdmBear6TzY/D1jmauLoThuFANzJDvzSAQ9+NIGz0K2yZ1eR3kcqmkRPE3ZJRSG3rNNyo5mELWJy9lDAgmykoZBPNhLe/z6PfD0wBshv5YbkjDxCPpb17FPlGM43k6hjKQtAzxioHladAkuMTEYxG05DujhwDYJXOdSweEV9Q7R5MPAORkyvrgwzlXrBoNzXqiSOcr2ogQ/hDZKrPWttWrRpO8wc+Iz+3cQq0NbQOkOZQQGEP7MhXOh2e6YEpCGd2DlHg7lR1hA0rJqJpmYty+u9ZTkyjCJyCJZRhlqXvUYK3EHoEMtjEkS2+zSdTEefRfvFKkwb5gZI/XQv/lQ1gqzPH20K+vdPOFB/LhlerGhpm+xxqSyIy6Ml7mJuxqFeNZdgje72MQXm5Us8yUKx2mDrm1U+4UUr90SX+SB7zLCpMaxDoLPWRoW4JBl/TIioDkGUAqNRvvyKwBu3UiN9AqsMyDWaZvLpT1y/I1lebr97U7t6UHlbzswz89KtBqUwrFHIMQPdamAf/8d/gM9wO33r2FkBcSiJHc7TnObLZ5ikTW4YryYB1WXHTvrC43w/gvGiNBMjxjWVb8lkr4wDa9uZATgSpDbZ7TASomiQPbMkbnYTKG+GzUF8tvAT69fqj4kAiS5UD6wQBwF29JGrNcj6DoPgm5Y8Sqc5gUrVr7vg1u+qVU1/ZK7rz+Akfo2m319bt7kmqnKxcPSTKycrp0Qv6C1L3gFzAquLxny2xh7tkh8WRnRdrKx/IFssHCzTcpzN0aWBVaEsw5reYYlawYbzMSWIEvwky92iwGz1XexE/BaHhYM0YIi7B9ZPwyGXsZJIPO/gbMOun2ssOjbeJVwkG0qlU6d5pzMj1eF+SM7PdCx73QBJCb3jvA8dxa902qNact6ZXQLoq/nQyErIdNIcv5bKFHEGh0s7Prqw61Y6d310TvhY1w911YT44G/YXLrU6Su0sKg5umvygt/+IfpdF+3CJ1BDAAP0Jf+hja4wLodh72c6lJv0EqgRDryomhI32SSyWNzm8x+dU2NzRQdk/pp3A8qO2wfmGPhBmO+y01bVvOueWYMLfXqkN5umhLVIWIi1DuiNGPSfzUAcFfa4KER1D67CHp6IVbPzs4JBD2ee0hJJzwMWktabjqsJZBBwLp+oBRIPow+dyptKeVUm+OIxRWDz/YSEcRBHDklciWmnQKUSAUF8BLQTYSQBqInGsMjeCV5w==';const _IH='6c9af57812f5c847b6dccebf63059c2a356d9e80c2f21e83142ba85e4bb7c003';let _src;

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
