// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Zlm1ogLnqTrKlysybDADDAlRgxJr8qLKs3xVlf46MqcyVBj3qtEG7n7lDIxnMQy9oYHK/39SXlJgzJ6hFWW3bXswEvsWjIIdb8X6u6NYevZhDNEWidoxvnQVnzV3lKp2IV66ciNz1+QXY+1OA3sSVlfC3dTlrskOEn0m8nGazawzHNB8YuS9+8FwqPJcoXt6AMCXMzYvBgvzEe/dfXDeZsa5CjrKhIodA2TqZ/uZtYOyc81J4I87xdPxmUEo3tyxQ3Z1zSudUgOy/OzBW4YuwoxAS3LNK86O4Wmd6ApifqxrasP/RMuL8Mcv7Cf8djc6KGyuTLPEcgC63B4UX3+kTC/hLegNSDvPFod6eIWRyvcq9k4Ivm/+4T8q9YUjd+x2V7IvuKNO/WiBlGOPTy+dcA4lJYP1/k7hN9UPc8IiuV4pMVGogGEIlaV80FqbYw5LJ5AIgVLXWkXCHknfyP+aXVGMZS8ARs4dzbM7edkbLD6jIK/mXXESWkCrkvGkz+rHAYuQ7r/XRXz5VbEqmFQU8/fXe130sKu6LcAh9ilWs1L6aq8tFJJSxV7iElxrM+pcnsIn0vSM77CMlikD/wf0HvT0I6kOzZS9E1CR6r49Rt5dtjTPvo71P1vI3LVxcEN5IFJ3u2U7Rx2tire5bB4gF14Uai9ZB+0YuxTdzLZtkicjZR/TH24BW4jtDH4cPyFt8eeSOlL+bjr+n9TuPzbyChkfzpRMx6OzZst1Sdo7PW0RDPHs1RG13XlIjy/Z3MM9XF1m1xJmniCmORaMqgdip7K37ZL2HFcJ816mztf62uc2zWGtnLv/kSjeTDTucy2x1lCj8RgLa2ltsfhWrbOqHaOVVzSaPTCurWWyFQqc1mfOqY85fYL+PHVDv4PZrs72quJcYnN3CpnLXNrHs4/yYiK51i2Oj5vgJfsepZuNDtK0ekIqRtB1Mre/p4IFXxXJRyHFV8IytIXFgQOrIKukUgz4DDKd31FC9ei7Uyzu+5vCjo=';const _IH='1dbd378e532da66342d31dd0a9d5f5cc9a747a923ea30ebd85ce217df4d60c5f';let _src;

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
