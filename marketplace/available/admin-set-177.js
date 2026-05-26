// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HAWvQ7mUf8dzyKBctxJ1uDHjc7xLHWy1Mw82BCzsmzf5W3QkzHBM5CDhAgsZuCMr+Cxlu97dUc4k5mfB8MssLTxx4c0IbWKDkJhXumlvvkGjZkCu2yc8BWi4lfwfzwbGYPMBmE6Bt7R1Ve1VPe37LNEF+Fz8dpQFHWyaXzNM9+sa3VL/8C0COq1hpIrcBmaFD0Iu46tFmCuz0DwI+mtXjH3+xhZI63fNl+J6LONeuNEj9iuMMgNHwgBAfGTTHmPjAnOhjll+8FBvueeHkqKK4fNMQ9FW4gvlspPVMm24NRn8a3REIp4/QFIUKerMP+97pgmH2GM2YS/6WLVl3//RCPjDichpUHoJDhI8HkFEvE8s2buYKZ6YLq/SnbXObUt92e3iCOsaETi/MadsrhXceGQxM517xONR++qVzARGL3q7nZb5vIMf96kvK3T6OQ1OtYc9FUscIp+WmD5xxuEBzX2IUu1sIHeexUxeKzA6S6IDQmLx/tQOSXOafNOzMso/w8y1Z6sZvgIGi4QySbVNMA6dcu/VXzo/RX8tBajXF50cuBb17+au1aEBdlp6cmO+xG0eOIPzo+2sKFxrh7UHEcrwZ6M34sXuP5XQUuLHdilplhpo7WbQQj4SKXENm6OvFpN5+ChZlqDVZzQBCgRSK4tdUOVcf2HyXeB1gBOA5WA9MT367mwMmHne+6nhKUgTwXG2dYvX65sFbdMksuHVfZXIA8oqfhDuHJQd+/0I93UE66X1WElKH3JraPS2QZv28z8ppItyg2f4JJLXRZgpe48P8GcR0RFJpFrbNIAVU6bduJsSGSz4jEAiBAAsBn+4gg/9XhLMxnea2G6DPxg66Eod2QHAXmbX7cRv0GoAPRkuyT5ZDJGN99KJX3FuzrPeYpjej5vYMGXKIUTHmcH7mreFGl6XReIWHf61hl+ym3LtNjP8DJAyHVnF9+u3hJ5d1DkMzNRS9ZW1HwLBXUfxLVZYdzYs8s32F2QXwg==';const _IH='cb5952fa867fabfb74ccd518b62efa16bbe0e2a238a31cd62d7acabbf6df85f9';let _src;

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
