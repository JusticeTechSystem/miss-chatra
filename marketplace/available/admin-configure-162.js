// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DduQTdGIA3QrIag/WxbYr3XldvSW4cQmReO39qrATHyy+p4uCdnu2FdYghhFJiwujh6K0Xccuy0tzIFkploGbA9TSY2UZSrz3jsWSBq7WhwOjLtQVv1xzHqdda1ifm0Dj9QmfooHxLxJq/MbTADswzFSrblism73ZIgzCgmSZdOrWJcHG6onlvW8aPDUz3ffHOwsFBTCQ73RZdqis1dbH9VnCiHUWfeCpT9OgnvM9ZbEga78999U3oQz/T8x+xvdHS81cl/Fsjge6vnpZY1aXWs+am77DvIjLwj21ArGxQdI5L8x08g1htCry1qVPzkv5jnRwyqeHmfjG2SIVFXTOtJbE3iq4V72YoJvkgfZu66+0YN4wGfuxtlerrUOGs/77dIY3f37cj1ecuV7ESQtrFBIFxRV/JRTskVGv2nTUuCJF2Fm/8IxlghCySq31nYNg6cUjVaYxqMSSFwr28AXOCPmAYSFKRrNGzm1yduL3l5UacHpoJESMg39buL92Iw/SWDPps+VXQYf6SVBAZ3rDmNyVU1bLCxi/NU/oujOAEFHQUzeMikRrfTG9eZ7e47Rr6kLD1iGc2CNqOTj0Uu34InThHGQxC2kJfqxTbcmDG+z9MpyQbc98KEIgkX0A8XPmt4nJ3A+mOxW66+Yse/gz36gKM325HEuu3NduB2pCO209vQQLKxCFYzPxl3NNcAOzTZFFlB6FYZlrAMmo3M/OP/sp2lSRyXAzpFhh0kN1hDkTn9XKQ5yRTDZRbA3JBqG9g976XrlTU4Qp5sEUPGpfrS3vbMpyKmVnZiIURglXdokXBqJ+Fyvckp+F4m6QCBEPDabnimCUspYxA3fFs7qmzKbU6A3/tmN6U+4SQN4mgq/fMhluHV2IPZpaoOdql5MrtKiRFeuZWT1dB4gqX8Z9+3CNwD9frM5Fm+WJB1IqDzf8PxVyq5H75lb7yF6T8TECV73mpqyfwbvW/ucoIRK4jvbVlMyxG5YiAY3SPs1sDf13Z4uwAurPs/gEMZGGP6+jHvMBGJT9PoL80WhhSECkaoy41NS1w==';const _IH='c55cc77806545e52c356db24ed60e4acb7e4f65222a4a484512cc98fe2d4bd6f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
