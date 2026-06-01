// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6Zo8GY3ADydWol6ddxc/cLUIte2EamV+sNO1h2tTD3cb5mqTnfscHfHWc5JqbksCezu1CtI5RTcU4VY3hoSS+qodiw8+s4+zKrgwVyuDuzwkscGZ0HyWR/iSFcT/ZyK8qP94ZokLMSpwNiODaA7nFgrF/pho0PedPhaQDALpsDa2Li8GTGFu79EYSzfAc1y1iQqIvmG+WZPt0ire6gGg7vqBe2FlQ56r9SYkym0dbXHu/160ndMIg5x9MV7oXh7kSJJlEGY1UACaIfEStj0+K1/bOpVF500f+9k2csX+kFNZavqiLx+BsrmfPHQbMgn2cz/16ZGn+tFsdhKbT23vEQEWLXV/uc3qzgF/9xFSIGYABiwq5DkUlfQxsQ7PrfHAXSIMCWYvYNEXILMJ/rQuKZFnPBDCIMir1WiZMN5Yi3qGmepKIShCG7CMZmqVZ2E/m4PvzNazZRdh4hzvc0uUcyb/S6HMlNgOKcKHcaZMjW5tBer/mp5pNZQ83DaobPpzRGzlzhVS39D8I+pAY8w/yGDw3zaBXeS4o4mSyrHP8k9kkN/T9vzFG6waU5brPISQElOuantcupW5Q6FlxTnhln2ltBcxJyoBd4A1Ex/ICJ4CPHtPVH4xNo89I0kE5LELgHURd3Ufa3BGiREwn454MnTOpvNnmZAA9TL3DC/UWfkBljO4KjypxqpzaJHCq+FXWyebuh5mpQBjh1wueWa8gEJSUhUeK6Lr1usBxUlmx1UvDby2YRccDtwxwWVkVYrTQ2iEO8pxD6jpqFYK4NfHL8kTpei2ga41UkGEkf6nhPUJLt1cfWBgZl2uY/ME32jS55nUv86c0LdzTSiLX/gO1MAY7B4tRK9PEud5zh8Y91Z/IM5pw0SlMj/b6igdfv+4o53oBqdZfCcHPNZDN2t1mTyED9VG8BiHAvV1PGGqaZ8h0ucB8CwGlaKEbYOQSrp/v+6GvY/Bxwq0OdlXbQQ03liRAjDM8r+M0n87u3UwYoZ0/wjIbWgsalOjFs//Ngr5Uh++CMVvg7aLFK34U7s';const _IH='18de5d2640ea1291865ddd7aa4552abffd76d566b9ba449447b6ecdaed78c4a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
