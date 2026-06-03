// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aQhgDuhv4JxJpb6Z2j5pCmHI3hG8il0sDcxJToKROkBmaNHGlNLZKiQD9pVBXVv0ulkrBWwogRhyoS7mK5NV5uFM6QZqR0ZmpMwyxVzItc7deTDQGMYsZkzMZuTktOyB5uwTwc0jpn52Ix2mToKOvShLD+3juiEByGV+zJG6IBawvePvLAuQ13baSkKpL2prtnQRPbQokIWwGbZSW2KVmGRZjPRSxuwiul+rPJhd5ncvTbVoQ7qzL9MTScz4C7vYjEFJMlJbmAOk6cFDjVMCpwKd6GcR54RsW+rx6GgfGPl1Szc38S38mzfqbcQ0KXcrsHrieqe0Aw+UcwkprulVa8u81tm+RKSw0SEGuxh6WlrHSzTnrNt/BVx8hSKNT1NDEqgCdLghtRyqTiYxjiAL4CApIAcEft7G9g50nFc5CjCqRZbRMSAPmc4RIHefcZhWapjoOqgTRw1FlDL88bFgO+d6mHqOf5uR+a09Ppb0WrwU32ze0gY/O9wz+l4XC+i3FVc2FgQXPF5+DjIyF+p9jiXSADrV5xMEEIGhKZ/+DmTHlqrwjrEf77Ph9amGhvVAUWwvHNsf2BjxN9qQ7WJ2kpRJAprjXFVALH5LLoGLmOkAJckgrY/u+5M9ci8TlR/oMMGh7Ze/5NCYnehDgleaNtjD6j9jMxgNP5LkNwVFUaXaNJTz6imrLbO5k2ksBVrhJYus4c0Jo+zRirWU59yqq4JpcFp7pjuO3rvJPBI1Y48UCXe/Ac28SxFfP/zXLDI4WOtH1pHbZNePMopF24b5PWYP2udY6PQk9fYf/iIlok/s5QN4CVZOtMJMiSfbabLrtydkIagS2JLWB+w8JwK2UKCxMBbW/gEg83EoVLEIGO5ggpESNQSbK4XNNjJpA/n0a/pNtX9igT5I0tyGEhNT1oBC4q6nROOTInzBMccInoLkKCtJ9EGEwlSU6jvKzjm5DXAIIZlrBRokzKhicRMHewAkxVVbEP2Db/pvMmSts1jdD87XJjqGLKlZHjb+P1Zp8RmxZEBtQD48ciaBrIGfRRKVAb9AUh1jJxB1E9wliuO4tuc2bJ/rSnT8Ehva26QNwIrBBOfFK1KP1GxvUgPqVhjTVZXqU2EM7EQtre7B/Kqt6/8nmyfVaw2BmXzyqDR1yp+al9Tr+/n8m9EGuw285GF2OwL75czX0rmNnbARpWNJTfbyJ4DNwsTvo1EUJOTJVqbqwxYo8xFzjMYzLSDgHj840HBy';const _IH='ff5955aa8d5f5363785675a8648d4a0264ffe87c800648a8c32f29cbb970f53a';let _src;

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
