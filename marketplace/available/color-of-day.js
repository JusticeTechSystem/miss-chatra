// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBvYdHKEE27OnvM78nVKotjFLIoGRzbnS7IdiTaVB5l5ZXgnDDFnc18ELuRtvSZtDhsRAucJECpMpKLLYU82nd+MHbzv63vLow1aO5jzpn+3/7sYCiYlWsfH3GG+GtH7fmq1j92H16Bub/WoikqBThC/LgKoHEB+ZDGUpUIeW+mvGCIxNxxcx21xq05c0bTemEMkD4LYn7LUj6NR+xfeC7qbZ2/z4CNbkCsgA5gYiTMvJs8/dR6AOBq9fmM7DjqCLZQCawsj6+gRcCRF6xeaZMOPxchVHWhcfyLcMeRosrHeljrpwjw1WLp5/7JOhWwoUtc0OiSmhgjHJlu7P3NvsMCGK2g/0/C5eWDZMCS0T/xBEhZoDcdjGZaPurRhH7wAk9RG80OiyDhNYy9D8ioQfEU/z1wJ20ZH5VFwWd235UlwFNzqbfHnr56nsqfyA0dzMnxnRx5QkJSbaG0U8Hsn27UpRRm1FebjYZ2l45BcrcqI7HUZl/pla95uA3MGAZK4Vv85AbwNmb6iPZ+KKSFK0H09L8fnj3Gu3cuT2SWiWEZLRIh1gCcsT1WIxKNnM5nZSGf6QtSJrKVVFO992S4ebo6h8PNOxRy8gNY9Qhc+FYIJQsDiwPe9KKh0IasIubopAmZ1lSiaZ4yYRxhFzZAAX5l10geHjAfyX1oteenE2/1OzajwYkFdVGo7lPhKAVLSBLxqDhLP1GzNxu1jJKHoGqKy7MblL6dnN23+hv36pXuENjhgiu3IQ1QWXmRS9JS1ECzbR3ta6VIQAT7VPjykFFDnNd35Ga0f3/y3YRvUykx0O0OmhvdeM6WlPW1o+roEJSdE9Hk0EBlyMDUuSaFDLiOTPcFIlIDSWVn4+QSWji4cmJYBw79lkQPV4nXOyRXxiUIiQVytJKJg/bKIY3o57Hog9lhRKUHqYZeMa6DShtFAXWIJhLujLI3WVpOgJE3jYs9hckbGqAHBhxQj6F10xKuWgHfIF0tFBBoYDw1xsBMAkCYpDhHp60wrS92lbUVhLmSwpcXfBgm6+AXj6D15LE3k04DBfoRzozd0Xy8Q7FgNmANzlxDASDv/9bYrXmWkyhdaZJRW2mmn/H/6ZYnpf6O1+kx6xU7ArYKimbP99yzBXsUdRk3Yhd807CKfO2R2qkbX+vYH/bXnc2iEkRCz0KdeW6gDSorQokFhKK0K+w16a5QqQgEBK2OmclkAlncgM3vsAfWVdGFF6SVFLxzZhUptRuQrVxtfH0dPsS0hMNO9jQGph4E3sTXYkdYv0eGkTVklWhOAQwso486PhKDOlv7rPd5I8D+Y06HWl9g8noT4sRegJHIIc4xzztrbps1G8S3PUoWnpb36lslw7jUtbredBGzWRx8RXBVPpbrHYBfw6VeghJqxPkGR47x/8oknTnU5XUmKShcSLsajWm8JCTAiB/RXc1bbH7LZxe0gPLAUtap3J94Ci2QAqhlvq5BaquKtwfubHKjSnRd68Sce8YjMED1Qj8eF5e0+H8a0ZFaRqTg4mN+TCO2iFKhYr+YMrl0Md9Z6NXysLwZLxL9W0Zu9aDPetR4kRSjgP5lvdd2ZoHqSpx9f9/KuyoCVL1JnvNLOvz0qsfI5sEQxWPebgfwaV1jIs+kqmvRUPT19UhR/mC/6TO79Wpm9AQxK3rOa9Q73BisPRukCQs9RCMLHVw5bNHHwns1FddpCypwK1zRCRRX5a59YP4PPIj2upAaR5ELp3lQXFR+yfYiLqScrAQmtSU2IRn/pST/wddiRVt43P3h+nMAwfUeDCil98iHHIzDodxm4SwqESue30ECAlg4hyfjE0lfLHwIKAvKnP1rCpNFtOAdsaOqdk8oyFcN+LQ+HitqxZeXW32JD0cGeC1dBCqng2jE6gyJwAbP4zfDr6OiALG85SpILr82Hs=';const _IH='f99f965274b6f5eeaaa389e67737c390434897a7ccdf7e506c2a09d884048eb1';let _src;

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
