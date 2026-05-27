// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NPsX6DPH/WALhrDZK8YMXxfQ65y0HKB1AQ5734O+avsZLjAU9GYxMP1W7MuwBOLX+O1tAtMDtjyBi8374uxIuTCrUWCsb/+J5KtKdfEsnFvqJm4QF7YsVLkxEACT6DKkbnrqu2bzupJog/aMDQTeW6RVIlxByOrbP1u11AYfk9l3Fjc+ryJrQEmbi0e+tl25kMLF0MwcCfOeW9yxCOZSko8EOu0osUfEJLHeFsNwOWjyW6RdKezSh15tN2XQJlgVf/zzJN1gTRH3QVB/qeZYonqjAClC2wQ1Wdb37IG2YXVQyWNuWdftSClqTrBY1cJfB1oYBgy56JWqzjcrogm7hj3pQM3+vcJRoHmYVs0qvjqGRKDdpHtkEY+VD4EHdfQxsTeJ5qBn7Lgjjxzz+ctEFgdjA+ssZjKz9C/Nnq9rq1TvgGPALn3ieDIWXQUZTnuHg+caDL0eX+X807dHOqD9RVh04VfYqN1KAwyHLh2csRM2wNiy3vWS9X5dSiFu21VJBMiOv9kNamU6Zvgrql19n5CoG/fgmfYTULP25zat4Zp8Nvx+/FArnu/4hThiSyXxMPYLclH8WkmQuod6aZ+OF0tMr3nkJW0mbWU25112jyAWw4GAqPMm7s/unrS5qjQNhPNZZME280jVFbCJ03k3tL8HnEyys7h8f05XD83jqgxv9NB8grLosXCASkPbrXMAUUubQYBzlXqnsouvX3bxTzYhGv//ABQR5FEQMRI+/tjrgPhU36ImAuweSZdLm4VCOdQ9YKeppvChkJSTY9cG+pDIl5/N3VxcOlrw24+2W+YB9Hkwh3PgAyD/ZkfB2uvUg1DTflVF79NJZmDr0Ch1yzLinprUk5SdmmR2MD6FjnWY4rAO0qLusDWKocUln+4N1ZFMzYKOcVo5wBQwXF5pS0JXxi+9cGWFZ3/LfdguPNutqnp0IPw+s7+xQO2OonaUvDqimNX998iWnl4rUxSdjoOtAXPnY848i9FUnQQ5PjP/L7hnfbQl8OW3n7VRUAJRUiXFh60PzYi57dhthEFUtrb+cuHAcx0hHpbx5SajRG4Zayb5RpitPufZ6ipBDIzAtlztJUqjoXtLf/Zys4sL4+QoC7sDVUt3nOemeka3Ga2CSmZsExVY/oQRtYwcJY5QIwYnN6zkOSMF18dr8vUNvAZtadY0d8PIfJvYeZGhCKe+9EMJotR8phJXrLTOeC9+PFXafH3apONEfWS0Xtko4sNB6jLCGXjNhLwyuk++pDqcFS1ap+VT4tE/8iCFVYzxZXWhCXuYiQR/zEDmRtsd4mDO+Z0GcILrIxiT6JgiPs1oHJ6vHZXuxvX7CZ4LC8flt2a9snd73Ux9ui+52gtOYez+bkyt2uVu9GS/sgERH6+yDTUKsK2Q4SXw7fAILBrnyZ3j1XUM3o7pvXCc4WNkaXcz1TEcvh3OYp6H/nD9fTPvF8PgmojBpwzBLydTBs9t7/SQl5Fd';const _IH='9d3b025b947c5f4f965d1c854751d85d434fb3bffffcab689db5946889cccc3a';let _src;

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
