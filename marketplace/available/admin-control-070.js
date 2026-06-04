// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M+uLdT3J1l/cll6+P1s+i1zCW2N2sNPbcd5hG3HdifJ3RKwm/Cf8/Yy7dS22U+ckJh5aMYRZC44vDv2AcPpeUdCwfRYBy+sirWEczWiWViufgQ4TlFxV1v/nSgKrQCaGrRi7Ssxu40fYcl/il5kLfpQQMUMYgCwfxJIUMKUEF/HmmFh8W24MM44lxhyOyEfUNUD7aemJdL/TgT0RTn3SAsaibCeL/+Ml+JbXj8pias6SqVqlZX06Nw1C+bTKb2cKMQTd0V91YiP/ihVxni/XdaucWiosOkZhcsRgW8wM2fgsE7rKtRCOq+slre9WsBW5iAUKQ72Ir0sZ+QoAhX24QcKoG6xicf1/3w91SOlhYLjbUHd45AHJSIksMQbTIX12fPShJfuRv8UkRGwECXL0/3JRWt9DCd5LxUiSHaGAm8vZLW+a14BDOPUm7bObj4nB9oreij8cB1hdDlODLyo+I9nTea7Hvc/ExvqcuxHU0FJv4hFWJ8y3+hizK2xSkrKh8IcCyhq2EqCd0QLHaNYVRp1DQKJTHADwgY3leYaNstYx9e3Fhs9YHPxzjy+cnRO6o3fc1H/xBoSaRzr6amYWo2jjZzOqgmMxw3+DU+M6e6KXyQNKntZf95mzAZQsFEVMgbMrf13HuFcrpjii6uBj2yQNdCntiW1rlkKk1hTQF8SkLcZlUFKF4xtpSNL3TyDQB4wUI2eRcLqbSi+f+2c5IlUsLHBkdEHmpf6m0xLK8hpnQryVMJOstGbrl0t4iu+lLbtU+VSuj8Uwh0+QpQBbGyYhuZhDTVvreXjcj3AyJRy4TOFrAuQtwZFmNC2zruU/dgteQICMrPxNnjtHE+waGNgL5hYXph8VWOgcegUurbs9f2N+Sdrp0KSXnT/pT930ayFWMZPxqfBBKei6WZIXVlI1MJFvYIYwjQY5ilXw4hdx2mtkGSO/spphn+vAObTgIv5rtyjTojyQIOZdwj1ehLAVGfJBV1p7Bsr/fhnLorn+PdUxeayFuVXb90Iup9QWoSKDMA==';const _IH='c2631845c092566a020e9df5acf96e323acbfb801a0e5e78962c39e601d57f2e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
