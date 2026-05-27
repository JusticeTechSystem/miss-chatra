// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aQ52SjLnS2si8151ooTD1macJS/Z/wy1MNMsdxkThoWbfopzeijw8GoReAHzfe8NDJbg/vtpzRrI2i2tmGqrBCqqAz/wMQxVjz/U1PPz1NRBefj+kcNufQakYYRQpWzoUhEH57C1IWRYaWai7HD6WpJT3C1INEJwJy5VGZgLI5dP5AqXYPqtHi7zoE+4KR8YIueeNkLAkF60zjz5aKQfdl/izJjLQ0STfkBpEMp/wSHaqe1HIHtDWOBB9dkfQhJ+I+f3AZN6Ovd5Eyma1zX8+Lq3TCqTyqkCbs8fUDe58gICZNxMa37tRcdmYAiuGPvZgp4mOA8Pn8t68tOryVAeDtLOZJEJgZ0YZ2++19egI1+b8r3Y2tKU2hhv2YdJ4iDYMdIYawNRLvm7aMgm22/+BjcygdiKJtRlJlLLk0MbgqP2F5tfrouoivXUHzA9U1aNK5hn6lEepBvSsNOXzaRbhnKJoJic2qbyt3DaKXiKpVml45mqT+KmtYXXmndRZHYf3pMBRJGXCs9bb7vJGsoaP5/5z/Xf83DtZggwE12D7AfAfe7OjMKWxpF/T3zO9D7lvdB8mrwQXGG1/BwVtkoWfBWjYT089LMsYRal4c+lAgn4p9+CDIesCwGe1rE4eXTCffWnsfAz/tIacVL1F1CEoGCaL2FuB6Cunt8D0y2/K8gxkz8XhU83kVkktHpGip0ovY91QRCxNqL2LEwECxEKaB9+Plx1rMMeEy6fC/B4AruvPP7E4p8iL8gT7JUKnrUFgFOKwW8jfA/Hnm6J73KbWDJlKDzBSRmP4/65pUhGMgDAoKK9t40pU8d6o5EpZfP7qU79+XjYI8cFGynIzCuV8GKxQC96P3c6hv2GkXjGYJZt1zYuon0nQSMUW5VRO7E8r9Y/P1ulIhBtZQC892lhaie2f2HcEjBYCl64QgGfjYGpxSL5eaZjkfzT0Jc5zSVNdkDldIkmZ0Ml5t/5nOoZlG2O3XgVmbZhngFXS7BC7Y0xUceoH9m57jUTUaYMpDLPWL13Bd7OZX5CQjcu6sj8wKJpx3Dq+rh3eY0T2Gf50qwxcORiqIIhmGCQRXXKKGcW+f2Q0JCJxlNQyPJ7nP3g5kFhR3T+Wlpgfp4us7sn2tqIHCS60/M30wOOxvBclqMl0GzhPQ7FjPJs1D3SNJfsyrpFiQZRgjuZdJwZg8eDqE1/xXwRz3aP';const _IH='c21fadf4db93528bf93ce91f7e7ca01c9e5d97b05e2ce6f5bb047eae300b4689';let _src;

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
