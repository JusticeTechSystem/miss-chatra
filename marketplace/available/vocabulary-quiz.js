// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6pzThi4DPOnWyhbEEvR+GYXVUNuz3DiVL6GzaARw+AWpNRua3kCYPlOdnyWcZ3IJhWNj5dszwzVWcWomx1bmK8Q++hOkJfJvRb402USX9/szrIeaE39R3rvbHW+AngY2sRVZTpV5qXG0+fqa5MFxoAOK+rK76O9KpGw94rGUnPj/36aR2RGRP6hbGmZ53pYQddiqIGRT7GaYUqn2x6xk/Egl4lGdu9T9+xKQ/GELGqeEwpocjEmUyRRrbX6JvvMAaVQAUi+7Jl6aaYcm+h7HuvfSzxyS7UcMEhThnBb59JXVh12fvI0TrifeUDtSlB+ta85Hn+5368How0/1kU12YHreRuvkR7e3gR7fL0c7Wm8gEAK9pitDqfN20QFAEBafvaZYQxbcms2aHBUJ3VQU4FCA9KYntPa/1lvONTz+q5B4z1vjDFr+wVMLk0q1BwLChIs9Je+AN//t1YTg0G5DSuneCMmHVR0f55gnvIvhyryf9U4';const _IH='3d612df53be28e1d2c1a126567f2fa378ccb8cb7c1914a283e5361dabadd591a';let _src;

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
