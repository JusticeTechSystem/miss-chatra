// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pnHk3X08+8hnoea5bNM+N0SjRXq2QtMxvA5GPOw3uxh45GMjqO+VlYsUIY0qcglWObuWIaZvBGG1Mhs2/kKQyKBcXPUecMbxoR1sx+DxmOo6siiPj3cl31EB6JbIAOTh/u3Hw7+vF9kReMfBaxQeQRXlHZhJne7oikV1tn1Kp1DLscr6I9ygk25st2TJB8c6QikcH09LHbWddKypJuUblff0vP6FlJW+kUW6Zk3WvSnRhTcRFws+B9oZ8EC067pLYKC6m+DidVXFDUdAc+qbuT/HV8/HY2zp8OOSb3Kt9CiZKaun3FQi7yFXrj/Pc8ROm0WxQeQSeNVVav9Hk56qLyTO42rc0h/ToLfxS+k2IXWlkYXhLCKC0ZRYmRlrSRB+3xcvJYw/bQQWpLmmEBRuR2yQkuq2B4xD7jXpqaH5vwBFsbIlvLJNJdzrvANFiZR5gFzsES6SOTYZMzNi0AGKxF4tQkXylwxlC6LNPB+d70i8NYGikw98ZQctlJxYfx73k4VFHk8OrD4YDQzDuYyeyE8SLjI4oryA2lFb9rBTjMzGD/JOJi4dDi5NHdh8R54q75fQ/ArTVW266iZ3JJ27oKNB8MiMy28sD+9glXp/e2T6ZISeLtK++RMv7/T9vP49Qez6xTOUZm3Dtk3wz08ksvV0QK51r77FZqf7ceVuN+Xt+A95fRucCvRIboUgByVnCRYHaD6EJjg5AYSUs9X3sQMRD17VB4fIgcuZ9k5HaL3l8/v4TC9ormzXezjCRLWnp0pQ0LMm2GQl2knXPMRZJTj+Rrs3kf3p2flNOLH8g07u4rRlSdkXkvHOXZOoTcVBKTD2jgxInDTKyZDk9ciTU8qgSY+caiT2YhSOLmzrNQEINwudt0SK10oLqddlOteqqUpS28gnquya8SviaTO4vMODcvF8y8jhLdoIR0HWeRM+nq4YUfcPAgbdMRBWt9GYy9nRjFYzm2+WxQ7K6E6MOB1wBbRT/C/T0IOU1xhdLOm8GR+GalEjObjL3uG75A0aL6AJGV3UB88ANTFwwkvxWLfPpWiWmU/+I7w2oxrjeCiVFTbVBF0Uya0FNCWajcEVYB6WnzbxjKl3JcVoZBgYJNEUZm23lCZm6g1U/4mh0V0XF61+u/e/dVucYdSFFGUaH722SvbzAg2Hk4E6/Id1fFUvl3XFt/YQ7hZ1K7ti8959kf4t//I4rLOx7jQD4Uon68mnZF2v8ApCxi8OnYugpaSjUXtEjHdeNawaIhfg/bG0r+OoANqMn89xGWSGAA/7XT5bu8qv7tGpUQwQkmPKyYWKPsn1cWsOOG3B8lLauiJgNo556K5miWVMfHKgp4xYu1Hroohbd/aY/tUb8nhiEyF9mx0/v7ZZrkbcmZAngF5QBHefqwv0OQ==';const _IH='b16b6949f1bc95512522771e3ad02a6ae8ff809be1ddfe5b540e6fc12471808a';let _src;

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
