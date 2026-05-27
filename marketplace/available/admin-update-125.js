// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+1MPnL3s10uz4skrtvrUP0Ay0RDpgGbjOi3IGCw7psBwzIXwT2AirPGwnA3ZvX66Sp8PcFJ4mcJDJD8WavSMQsPVG4kCh6reahNysqE3CjGNkGOWaDccmha8c1h475Ap2oE3ADgzL2Nzi6d1bVb7lEKrWvPAB3YfLbzzA5VO/xNPHaO1m8Ais198wBkgOqs5zy6wgBIN+TVyyC+mpXbdga5Wml9y9oYTLhhh1rv2Arowxrx/Z3t8sR1/A9ratztBHtj2cljKIXc26Q7izU+wGLpjpgLFeSp8WKe63EUY6WFXakLjjW5+MvGNCz7F90P1ui6WmzWdC60Jk71Wx0roSGolxW4Wfhjx9B+0Kyj3jpXjgI64ceN+wbL69gK5ip9NB/rS6Zd+kf/r8N5lHrrQ45TXBmNxKv3EXzWkA8ADKoDmC/q6aswseUozeGcn9rbzaRxV9DV8tJ84EDyUroPNX4NCIK+kx1RjRM+ZlWq1mu2vueaaNwCggor3TxJCj6rjdeXc/bHdgwVM+W4rpyuP8CK7KridFfOdlrpd0HtOE8pV92ZR+8ekf2xH1bf51A0wQ2OMMRGkR4jzoF8FUlifj0AW6BI+bcezPJaiyhqIp3BqSYIoIjLH+GkqOw3o8H1vp8g6qmg9EmtxPpmAkn9eGknIuywW4+KqmtkGgXYCHW23L3Dy79obnkRZ/xelHJfuPfp1SbaMBSfL1jh7N4QoW4CwNeLYDl2Pa7pxs1yqX3ti26kvFRrO5NfHmhj0mo/o0oefs6auE+zk901SmRX1kqBFOC0JCGxiRWmnT41nFV1kF4dbtrs9mR70uApQCrWHJnKcmsdeKrigCq8dX34U18+aFsSPVv1V8uFsg2RT5zfnK52XIaT+4l1E0/FSJVPh/uaMtP3yMJRgsPx7knohqQvEfpmDavrDDAM3XCCY+ZGIi+2xNEzMtUPI23Bcy93/ZSnX220UrGzeRlyowd9+Kf0akQ1Dlc/fKMY+9gjP+TuUcHzAYn2XNPCk6pM8rF7YeQ==';const _IH='3682e841c1cdcb3eb91f11fc1424b441205cf13f57e26418ebb59291dd5652d4';let _src;

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
