// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8c8gen6oXJChMi4RFKflwNodre8hF1hkTg8kOV/mXvK2RTztzT2EEee50e4yxi5mUQZOIApzAuXWqbBgfRg8Lt/rJjS4qSQCFeHs/WJoI2UcUGV0iAhF5wTd4U2DHgeb98aBEhx5KgleuxKMPXDoKlPwCDsjPrdsiI7+FtKFtErponUSuQJNKSElugRrkRmi17tgNQuxZS/kQv2lju7Ru0OwPHm8YQeIoZSEkJGPsHJnk63MKnZikL1OTXmVGiyV2vRMaalelMRmLKIcnRgBT/iAyMvAuao69cE5Xbj+rF1ca/G81+I4FjpfI3uRaxy0/ngySu7rdEOBPqn4iJGxuXpp0jpWbcVBBZWScJd0tIKl1eL++h+MIEwsuoHJXiq+Z4Ak+tzxbr1pnUl9nHbrvd2NvPrxZsZMeBwOVW8IcdaPIAz7+F/nPM/MO0C5XB99v1FINdEFNttFTmyq/HL8Oyw6UEbOQzqSV1kacAxyFP0TO4Vp931pP7vf6wCbOW9vJUgbmODE2PEfoxH3Y9CJJ79vmkP5G0x+V6t9xuFdKSJfQe6CH1taDNCtP/wHyl5AtNCNlmvhqtfkmXQ7yOnooLwPHy6frbRgSd6xli7SGCZ11muIdNh3SHiJNfLwk8RXaU5oudCa/PF835LlU4sxKK4+YClcO4pKlphcdEqIIXVt6yQmKiAfO+X+OKyqnLYkHrWcNuE/KHXg0RQsSyhGeYMyT8UacK1PsCSGmQkJ/ZslvtmBBbxwMze21cDA9DHMMlhMZoYViZp7ZVOwmveB4KV2w6SZGCApQcs3P6wKgnfxZWs/6qYW+igf2WPMn/qGW3VegyaI1DukkCFQUQpxzwR37M0KuvxESEuAbgKBzlzaNy0PsuutOMG2rPZv6uPjwcglfMLd924Y+uQr4/chii/vK/8OQgDVMfTiTcWhFZMjVPnvJsWI1CvlKz2YjWFCp4mRMj6wjVrojNf/1KWTdjWRjCBSsxTzgAjcY97GqA6LTRQpg2kpH6oL+eDL+Pq4fnrpAXqGKyE/RNS4wPPgiA9/h437eHRqPZ4WJQteGCchMI9eB4was+RyOvi443i+5V1JNrk/pF28YPpny0r1tzS4fgtO58bhvR8fXRaOWkFRgMDqJK7f8s3tUy5u4qEiGdf0PhcdgdsjHEJW0ps8X2fjJVkalb5+TFqEd+wpNz+oh/ianjkAvqNak/VzAQ5nFhla+6vBLInYquAGWX6WzvKefhdJt4QCEmcDCO7/7/HHtKpdsYCYAOYCMvBunCul+rQonwnX7JTTdPlAnNbDvfS1G40BD/2QEeSXog0QO8EqD+VhSwmTgxuHrzlcNurVrlslPFP6GtA90BFwQhq5qRgwhkwm5uL+ThJy2Cas';const _IH='ff8675774758c31eb10bf9360520f0467ba1697fbcf15b3f8871e9e509659f80';let _src;

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
