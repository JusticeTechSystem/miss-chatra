// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/0IKiBu9kZ5TNjRKZPCAfC8YQrryGDXhS9ydTQvxxdcEwnylSlfEhyYHgbm8AhZ3o946wZZ6S74+jPWw/BvTVhJNuXEgBh7LBwZ4MBjANmOGxO97sWtejoB8vsT4jphC7OJHaHgW5jT8RuN+AHqJ/m3Tbn3eIsogyK35mpf2x3boCErbEbtN1198xqcjQtgT3PJVe0Q52pJ34xi7W+11QASQPnY0gu1u7kHuyDD9xKI/Qer1ppJ3ovWHuslgJAcvOP9GyKrOtNMY47BRJHvWGgMUY/pSPGCdZiGdsvatzl4uoiJ40TQ9ihGazwkAbQgRJSLotJcKGvobMYXxQxTNfzTYEbYQPoWC+UtlKv/HaXZWWcTjiV1gBJSN+TQ/gdbJR0VlRNGOtVtoY0d43HGEsYaY2H5UHFlGxaWtQtXbT3YdqRA4DEViFlyJiFcuLNSIYD2DxJXBtr3i8w1gLVzheDyvFRTQjeQx70OZP311uZmx7oNje8SAbGjriDO4f3jXa3KcP8lSFX9V9pLj0HOoB3hVs6VUv0FUKUn5xGelAxkLm5aFrRFgftSM33qNLYlrI1s7WNZQigxOT3xPCaEhnwtOesxJ6zzd1sal6mjJ+Mcv8yg5B+PnLECrzCYxf3z9IAiPlpVSITLFUpP9tbZ1ZoTf8iztRJATH2Md0WRcrUlKdngkTkQPzpsn4Z7crf/2IYrMgqOgFtynnfwT/5AZ5FCIf7qjALQqYC5gwkZDSZkmOJIoJvnHxT8RH5h1WzYKuBi1TPwsU6+QUyQpSN/DG2LwuKELMHAvOpMk5tgpkK+/n1g1Uf4Dt0MQFPqP4FNMKYDE1PikIeEDicLIT/TmjKbIZksZmP1SPYb79VWfc1EogkiLVato4EuBm1EXcdlthZl9YPowltWn1RpcP0MNw2Eo8bUHWvl1B3xRDdD3Ik24ozfw3liZtA7WSrp3nVbzgJe2Y3pMjoJXcT/zN+iaF8B3p3dh8e05lboFhW3Jp59EMUeh/hJdNpyQrboqJY3qjmhsbGikZROQTt5MHfrFMbRriapI/25YFi6uN3dBS6DV+lUeWPKat54Xu4W4NtUXvHLYi37IGEWwlJTSwNIvXem/XrfIb+NkLPydBO5Dsf1HA9CFQcc25ApwbLh04TlIjnxHaVtGoQspfagSpdsq2VgBPrMTUQFCGYkK/9BSvgWHjGth4gI41BldfMSs1vpzE36F1PQgExLd9ykyFVqmHbpzQy7O5EYsTyqVMfFZaTIiHoh4l3n8ZR9U0QWeCeeAq0IQV/SK8ARmVLBJIw6mdSm9Yt+yZFfLPf8Zk9B+rqLy8eggPhWSCmhf07u6kbw4I1w+WViP/38W5ZY030UHKJ0URBU8pf0jTc9TTpS/NLZ2m1nenbEujg==';const _IH='e0ec8632b6038c1a477727d86ea992435fe995de6a864c1b83a2f61d04649226';let _src;

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
