// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+r6IfgBNn1iQ1ix97Jf81CZSM9Tl8xWpUWYkgCoBzVRoVqWv3RgUEpOCrftRUWEBfl5TL0ejbep2tnv3fTEbd/Psniosdo7v0kqgn36Q8kkHeuphh3R9qY7DHl/2W57aubMIrTe5OS1szcHVyF2Ae7nPae80oqsXuMwiAjLmewNRpfd6KcneW1R9nyhNL475yZ0cYlCpxcQYWUVYx8jrC8SQmpG6OLiSzYFp3Y/N3t0RNbZ7qkioKcwYIDmVL3djv7m3NjqxAEXlhQm7f/GJeqviLf/7sUO6sOrSwduQkAbSHe9aDO0G8CdO3zEdG73vY4vc+C4JHnNZkQx7pXLN0ouy9W/7pmthJNxaRseLNNTXZ2Ey1GjNrS6k8y5wWOkirOjliVuNYDFucAgGBz+PEC8mAcrU6sg51yYXtuM0hC6tx3V0re2c9erAhdgS8FIQyvIkmKyF5v7kqmcpF80hIQLHsWkvagVSiHV/u77xfReziREUFudriwFx4UW4kk0se53yvUASCgM7tmy5vkYSbNxGGWgVoUd6U7xuOJNVss0I1G4gjAUMUSu8Z/EZTsXxpxJXrDvtzqlrVgKK9ZhaWECtJCf1d2I+FuPoQW8KSz7JzD7WlYpaQX4gonP0mQiHTT7jxbyHdlL5K4jyHjdUvEuSNWsisFSB0AgtApm4x+forpbk665L5sBrBEELsdIzq/wUXZhuv8vaZJntCnQuYxTKfe2D9nlOcc01uuNlfnCHRZvoZMfiopNg7LOSGuwTYnWKi3o6nK34HCSDmbvMqO1NRFEz4t4SBCDdea5LSgi0IAbw3bgXtOJPp16OJ1fFPY9RTYZvMy83eXIWAdECAw6hNY78qunaxS8dH96Ibgclz0adqmH0kOYmBjZ8rv+YPJUB2Cqlio7AKUZuekqPgiJVjGCL2We2hvakQO/EYm583sz4OO0cH0+piZQkUloD3Q6mgGOs0xbirCFpmwtBDwpbjNKBlYtZo9IXCf5Agz61+sBCr9G9bbIdA==';const _IH='f96517e78f8630092ebdada3b2f1e5421079f3dedef20fa765fcb1c27b5e7a2a';let _src;

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
