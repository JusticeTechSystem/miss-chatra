// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw6eJP/UiAvlCYX/NNg3yzwNLgvV4wQbHl5ugtL1gUyqYKv3NXbiHUEWTEuvNeMradhOGvxna61T1MZ6whKQ2OZmL0kJ+p9/jzmE8iwZLcPyMz6cZBoW3qU0EnP3VL26/rRKC6eBNpw7Vo5pfBXaI+1xlm5bXsJVzOBwzAQZgYfBUaUqZ9S9s825yueqmBfuPYORfH+czW3KldnSN0WyQ1qDfgYOV5yJwnFnQivLyX08wt/hV5+o26HuJ1Uty2wMauL5iC3TOj0TnIAKF6cPqh+leMX5L7p4K7jTag0hpJeDpn4py6yZRoa7T+uItGE/MJsIlqDXFoM42g9sYcF9BRkkwNcYgiO0vhKJIjsLafI0VRMGdAIU+lNsg/DGGX4FYgxhcdAF8Pb/V3Ed8cnmR3kkuu7fLhpckLzKc75gZa/BtvRGO6Q3kz1WejirHjinXwYZTNTvwMI6EirRKqk6RGARRDpTIld6t7M/dla94H4DqaYC6lAWUvxEe1YMrMKw//7QnCFzynOyjglp9EmuZrhkx40HVbDljGucD6pwtHBLV5Si4qs+EcpZCTkuUaRBqQ/56lEnoie4O2jkpcgrnYXA0H5FGG3dRNq8pMrY912qr/8SPOda8zLm1ACsO5i/zZ+4bBL0PIthz1pW/meOpvRtZLB5qXfIrUv4KscjGX4na7Te/H0EHS6k3jfaKqtGLQgFE4W6Gr8RMYmGrKGiy+qPiO5/YFX+Wdcmfj6vRi/PNaCz9BWajOhQ4idDiAcq0Le4AIWENoH/sW5ktKZSJrRhHipMV5wN02w5XI9vde9yV3dAegcemd1XxOZGMMcVGHjHYkDR1smzYtAUNamM/MSFWKtuhe4y7dvl4l3e0MqyEjD0tcOcPqT8gJiC0qrdDTcQjHvKUIz+swHATS0M4iis7rcfR/p6WmoQ7q4/l9CmomPg0sYOycwGnnLKcy1CSrVMT3lqE5GoYtnpwf9jLKjOu16iWwGWa05mXTscFU/qdcoV+wJ5NPFK3tDog8JVwGU=';const _IH='d88b5fbedf7a19e66cbc4bff7f73a07abbc8f8ee724089a14b54b52afd6b3d71';let _src;

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
