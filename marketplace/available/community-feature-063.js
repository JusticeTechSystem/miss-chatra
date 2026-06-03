// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='61HobehUtvE/DGjXxAG9jBMROOiRWfaRVoV6zXidiHbP1XQDIyTt9fxB3FxiR5RduRrHp5PEQr6835IFlfYVeydMMCMe1EEjnpRwA6HZ8WZOr0d1FUWeXJo171s0L7V9y072uuk5fJgFlJUG//5kuxICjb/0tnAKfBlkjv1dutnuUWd1bv8hIh7kOdEg+54dv0S8OidQQX8rv8ZxzihKAMuclPchuJi9I4Dn5hAp1Lgb/5hbejzF4qVGvU/13AQMFuMQxbKWwb6Dp70s9v3gSSTTJa7u7np62QECRM0qeDKPuIqD4f1w30UFtc1gevhr7TwjY7mhDwtIukI0voyJOCm6XHc86jvZPIS4gbvi5D6XJ74yQxW4xjX2kqMk4SlMxVrrzttwm0oEAmFTO+u6IhBHstrPi0rzz5w8cNLFGVTzZzmY+3hCV20XrQVAOK72uYEcM5f4WC9vrSpE1xb7F5ECBKX2ndONCmkzugCnZt3Glfp2Ye44L4VlNNVrUhujzqh6ft55ZMOAUPjQw+ZdC8HwbDaq4IwjcVmvQkCdOdkrZJrDGdTHZndFp+rWAcYnH1doChJMrz4zbtZbg6Pvs7yanI0yQSYFqS0EiVYbNmD9X4C+1XqzOi5VT1+uhQjF6LiNjXQe7DffYSsDMbv9RIJKJSLb+DMpQQzWc+PtnPZB9uOSz9X+rAVgxq2ac99P3yrr/fQsG6ppRnx3BCh+pF+hBCKON4mY8A==';const _IH='31698aeccdc0451e45721d2dac50d062f48a4f77a00a4759b1404cbf051902e4';let _src;

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
