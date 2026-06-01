// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxt7qmVwkbERQ9x1mZssKEZ5cwr6w+Ryc73POXTfF39h82zs4wF9TW0YSyAQ/vioVSfnnE5LX+74nUmf+LE9gyZxZf8EV9Ar25RyY5Z9mMw6gIwwoRG/3F68dR0Geuxjp/y4NIrzVv34bHJ6KoFiHdhLXyvFMCY/4auk0oaAtXPrN5THBNAn37ghoaD829k3uRKbfEApfL+J7TZCEOJYBxrGxqkJMW3JR9dYS/PBGia/dwIOGhFW8gtHaWmSYT5wIMyV3Ok+ogUiEduoIRmZz71h05Fphj2EWS0FJfR962tz5B1iHIky6dD3lPwchTGCp6+kW9/E98oJDHerIp71Cg9DvTQmM/oO2kRjxv0jRzbD0cPvAuKNBh/OzbmoteSVdQuMLuDqdos8zQi7nCkImqhgVktf6PDQgXocTZZlVvBrVbAENFcxQAXkLb8EHNWHra9f3HAh/Q7xJX8Mo1Zpt0bzoH0P3AfroYobqD2+ONYFUCwiZDCajMryTAeCzVeDqfM2+TavbS9gfOleMrOY4S/ciLmAGlj3pZoI2LO4D+fnB4vS03dolaSJP2Hx/mkQZEyvqCEctimkN17Tkr0XFlhDoNjqHf6EmsT8RhNlmgFfAVEYBhqZWTXOLHgaDPzK7ptmG6WuI4vRhz5ISSR8wx3tDvQGVE4+VeLVnHDScdP9hcJxXxMoLb5JdnBU7xJvXQNTekXFAozojYr680AETDoJ3C8cq4wIfKK+zHd3e+kJx3YkyVh/WqWxYUHoG6fMftEEooYikqEchY5lNIUC3k9LaUpqNfdvHCrFm96oadj771CyDOjoYB2oloQmqKpmXbdVrS6tr2zlDU1vb6uGTL8u8cZjYnXHby15eEAKXxpbI+wh2AsPkjytD+yDceNO8jx65b1EaoddzaO+9amPnXDSnMR2oIb60ipVCOgTzyzFwqLUtycSJRA3rBTyk4RUodWvs5vJ/0xlZHyL0ffxyt91H2U9HzxG2dA82qj0susGOTtXDiKMcbKsXb/7yZw8L4lQiOPSxzokpIdJedUHcI3ubaN/1I3E6Rz0z+tiT1LFmxyvk6SU/99UeiEjInz7vNNNJB3taOPmEHm7EKVfEWCycEVLmkzalUY32cAtO+jfiSO7+Lz4pU8NxRoZj08pUYZneTIxQ5uCoCuu+V0YEOHVPz/NVFoeeyKDZr+PubZlObB0hRZgKYgwRRqCv684ESoTQzMzynZHGFe5f7qcYVrgDKTzgZDfdGU8Wv8diJN+WgyNI2x9ZFnexD9o3G0SJVFYbAWPLM7M+hnjqzY+4CnSe4FSRonu9uEf54Ge+NyfNneAx8dQO0+cwVudJPn+89SgLFZzTR9KxoY=';const _IH='9e6b445f2eced9eb8dc50136c67165199415e0ac6911caf35c81888050ca0bc9';let _src;

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
