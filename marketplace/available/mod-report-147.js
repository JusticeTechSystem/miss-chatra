// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/8ihII7NhmcHIAspAnj3S8I4yMBPOHTLetb4Td/eL9aBxM/Clp0TwYjIGUqj31DyVw92cUwaxSQfcKv79SO0L3zdokTWdIoZUl6lmXoJK0P4fs2DM76lqZNKo+gvQs73W7dgXv4rzKxQnT8JIVAvc2JuVFoj1M0LcrBqw1u3xNaeh7QjbmYILpLiPoctYTucZ2CgZZX8O7dVK6xhBk89m60KafCBDQzWoKMoHqLK8loI+ILUgZdkT5L2GqRLcIdh2xI1wZP7jY8inDo2x/W2K0v1nFz42jxyMELTiB5SpVfMV9bAWMd9NFYzzwlRf96PZsVy1g7c3fxe0e6QmLV51s7HrbHKff7oPQ340Bqkc9RIEIaPKeDHVcGTqCs3SjZ3HAPH0bWF4cP8/kJmd62LdmU4w5zu7tnpsb3iIMnqEAIL+NFOkqa56rwu5yzfeqMNdryR3yEw6tY7lZge8zslKZZySFY91ZRyTYjc3tRupCsG1UzqsnqvZFXiBKHYMhuoUKQTUoffeiO8tBxWSavodVmqZHmG8HzRLOwPjJrHimFkcfkfS8GrrOG+G/00VHa/Hpwe3YXfD9rNpGGK7ju/L44ozP06kpW/V7edqT6INeknCmoDIeQwvTi5gXuKto6C9jWxcZvT+7h1kimY6QNpOlgdvOQyG0M9Ery8eLzxQ7gl6aorRS+Ublkmxo89EGV71Fz2SM5Wm5gnAVd6wgOTxKIksYbg9UcvzXxlinh3ghOhtTmPieqrDtZ2A/pHMWj3oHSlfz0qr9480dWJVd+xPoiqi3mx5pqTtPpUuKJfmhDVJ+kh6dlYZLfXLIeh3HWG2uGkccSw/LU6Evkr+T8fZOJb9261D2TuHdd6KmdwnmclS/cLGQGCUvmVQVJiJHSkhQ0taVy4zZQsE9o/TRsahO+uCD2PaJfjLG9VsQFYMhPw8WKLWk2/HDi22QInlDukgmf4kFy0K6BMlf/NwfOvaXG8S70jwuK3Jam7rnKFouwENxUfUkPyaZhnySdCvv3WkvBs0y5T43SY0HCV+Abp4yQK+mDJ90WXJpEQ+VmxyDeTjTrVSmy9leSYmlkKvGq5CzYKtrgFvmIPFWhmSA5Ke82QRPIMNiZvAbiiL3BGgea0ebd4WRHzbBH59bqrUIemGjBcOrD9WLwcsCtbUoGwOnuRNRzC3pXJIFCudwGIsd4Sy0JMLym/ohepnpp9oJ7lLf8YLi+aeYyXvkU4r8aYImYPkTqHKKFpDj96WrUdlwmYLHKzaGPVP7yzjcVnnyUgIibsZW0bQLU9d7Y/F5clFd61bhGsv9xtTePMjRzdNmLMl0ebtQHoEOUrzRCwRhIeNHt4mgnRKYXz4vJu6juU0WOPDsyuIIpxVNI5uvtd/jUFDZLp34GGnQ==';const _IH='63b3fc1df6c4b0c705ebb55ded72c730beb6c0c1a50b97b328403ca09c7d50b2';let _src;

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
