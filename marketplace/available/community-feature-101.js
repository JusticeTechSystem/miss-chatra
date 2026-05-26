// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vfk0dfI/OACWeyUn7gcugKV5Jtsmo8g+VBDjeGLfSsX8Ud3EauRlpVvhnttrclhS/whO77mShz3T83GsGexpq+iwetaqpT8QBubjWaDv468KzSXl1I8CmkhmTAOVRgZ2gjsAuL5DxCeXqmE89wWiJaYT34fQMidBvwB01Jr38KDK/LTUkI2NdXS8u3A3NTCVGe8gVrdtoL6tzMas0filn3zcYqNf9I3CrY2vlHpVIgJ10L1xUZUzuHXnVwPvy3CQuIAUBRXL5U6s4RYCqOW2BPeGVd9jWBgZnuIdcuvCfViI/v2fDjUHoFdJ/4/9eEBUBfjmyKmmqFpWgdS6IuPuXO3NhJx4YnMI46GYJDuf05BJV7IZVculc5AcuX/Y/vBc7EGt4muCqwSym9DBwlVhG1AbOyvSjrA3zYuhKK9zZ2SdBvGG6K7GnHip7xliKzVg0Va72yoSIrPkPVTywRwjWXTlIg/3q89p8As5whyzUkwY7E/UOjkHBwZRjVDYu4sAcgh/DUMFgpYh6CM0/7//S6sUR0g3CCSwSE6FtF6EQECdvfgUUOXIHp65mCbG1ns7F+LsDQn5C5kWTl6xoeD92R7xGpvi/ppVcwOOZ5GmwMt5mn3c3p+Ak5kKBXFix/qSBKheajT5816/WX8ubPrRGj8//ZLyYOBVhkrX93IU3ONCg4L3i/XUtFR6cX24B1Qk3ZF0pHmDTCysqdWGtLZ55bZKAttJbp4P';const _IH='1679b687f734ec57753d1c5f5174d2e594fcafce6093e8256d9d4183c6d16177';let _src;

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
