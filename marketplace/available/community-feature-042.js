// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vl79m8fq2cj1AaCsJ9pL1Xi4/+ph7xIIKhBPVdTRUtNTObD5CaFb1Wrp7ieHy2TKSP9b5nxpJ3uRWOgB4TvbmpnBPq3xddC/OYGGDivOoMJ0LfwP3IbyMZymgp12MTa+S8MNgvy3diuIveqXCXbmAQZTXXWw1GW/mFjHejJuthXQfRcLL3ghCBOXUDBS8YDbQPjVc2Yeee2SfQyH4WcFuWiLLdzklPcXD3g1xGc2nMc3E/+S4M9a+AZrX4mC5FS/T3n0Z4TuA9q1M7GcmjkvVjIdAG38VBBB9AXiP4HXiBz1Jv+PzZ18JEmcchmMeUonJI5znqpkZ0JFArSBM23iAlV5O9aRVToFHKxJK0KlcWYKECTZEqahayaJ3d+N+JP3M8Nvb25ThLpoI5mf1rUpaNpg8RiPqZj4tCMZMHfj+U/8ZFQA1qvdOOFxvr4et4C2ThuCiy+59ZHTolNsELktlLmsEvrl0MXpw1E0pbYxE39zKgE+NXGNaNkHlBHrRVgH3hHRYDI5vMbQIc11ADgoeOyS58toA5VcuGbVI6WvFbsG/8JOaTOkEMwQj65H2d4Lux/7y8yn2sQUT9hme6AKAA6hDSEIq3NO6xRgsAvZWoCaaPB9aGtISE4/qU81dSLzSIUP0G4l1a88ASh0PzLbIWtFdkUwW6rqAFC/miKyd0wjzK/m+yw9WF+fh51X7wc8d9HfCOImi1Z8YTV9Kt5mT/qZwRUtxbRLp3/P8dcJOQ==';const _IH='56611f293f6ff7e8bc4d7c89b5f5df108b8d00863513eb9c8e88339b41a98b67';let _src;

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
