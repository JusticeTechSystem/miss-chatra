// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7twJrnCpkMOSLrLdox0Y7yj5GvtdbvZpv1B/OoiArl+WN6mDLZlYjqkPekN5eYnX3wtUN0IzcIylr9ZP9X8t5ewdSg28gM+juS0+g0nLZeeScamRTNI2fI7pIoprieKsCKVV3Iucj65WyIfQYcvH+nGQ5DvoRmFoNnSB1w5B25DbHmjXWghSYfpC8N9QNJe5ol8W3VRjXqWq8xHAF95/gChVYXqX1MQSsOHRU4cIJ26psdjvXPlwc5G1r4ljPhjE0LCGxYVuA9ZW4IS57dTIKqyV78HApZqn3O8ZHw715dozt7Qgc+SFPFkax6x96oHUP8PZNh+hngykB2h3vLvUpZvtcJLiU8Og8Jv5yrqXsOrV1X9zzBH8W/8KSmDO+l5ypM6jfXGC1T2luYf7qqL+QYc0mjCR/bYUFf9K+84oNdQmFLVvG5weeP5SK5pO5FfmFWOMhrvqZOLBRvKau0xSoZx7QhWiODlSxIwiBmbwVoiuICneVnRFmf2Ee1Ew11eogehXv6LjHdjCD6E9iFLf/UuUA0KSNDlgBdL2HIKpZuiL85Yo/gG6dwEn8TfFf+89PZ4eSG+NAgJTMgD4HI9mCmXPxgtZ3t+PDrpmQMEa5E/tLCLfpI7tVSZnNWtO9QZw/YN9ew/SjHc+i8hyDs8rxpiS5RHGEVh+p26PzPt8idoU6ovoKkFGKT8iBpqj9HMJ7UOY7upqWSyTtIHDlqQHcDtTeDsDh/REETnF0C+T8UZSdzz+5JOk5ixrCh4xPbpxFF13JkyVT+0BPjTLbKLxpDf6xp5ILuJqg1WgdDy4BNtwMHFt3mOAWTepXyEbL/apg1yhHV9BL/f9tMq2rY2Hugt7harbpt+8Netftvp8jKT5bhg/uwzTKCXnd3rGSkJfYLS9SAIYMa4dsJQGOmfXGPErOJnSqek0xSFjtjP+G/Dll/ivJk9Ki/OHYcUZ5mYUWv+YjktPgMRpECpkEnNqsp312d2usWa2jCONkC9Xt37lc+nH2ACxfm6g5La95pwDThOorEtKLxessPyCA8XQycTAqlXV69Ef1jbvVAirRZtZzBS0T25FTxRqKRvGeI+WZa3gvBPMomWhaMbtiFhAiH1HV4YW+Hj5RMT45eMAwBiea1RLDshhb1FYqCTYAmJcPXK+uP6Qvk/BV8i82UX5s6l/2wcl31VFhLvBKAKuXejxL/zZ+T1utdQzCKG3ZBWgA+4=';const _IH='71355b47f145b88d742e99411c9f59e92babeb9611e26e8e49f6e404fd623bcc';let _src;

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
