// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1aZH2YEhjFbZrYFYJmtk/bxp3jDDJTvxsvCPGBz8u0rcwGjevpGFPs4/nvCFLRQm2DzflZHiI5ssYPYujxA0sRdKT+DGNH1xDEShnelgHfAkBNzudQXhNdf97PGnmfIQzLgaP+laOn5/gOnZgW+kGe65Dg6bbcu5EQ6yqNtCutFkmhlO0IL5TFtr8KRxoZSvRswZwCXbrulmbOvBPOmfAkMWepONrtIg42uD4cclGiaRTrJwSCM9iMAZzrzdJaCtRXoDHZ9n7eY/NUbiYbhXJDMOJG7mNey3od0LA/Y0l//TG7SxvIF7ovxIaNIqTfv5BeH8nbqklTQUZBs0Kvv95ahgdt3W3Aw6765+eqGo82mdRkUAw9cYn0vKZ9eJISsjuxylJM7kQkLD4T2atF5RyGOmp6L3EvZKOMEQEaMnyYaeK0DafqAYCTtPCldDfocLkZozX1kmfZepXTASmlmRL3MtCZaUGF3Qm3Y+RFMd5U+9lmxjqsmM2DQI7Jby3P/ml85TX0KUy1snBtFxllIPHlVg/kbRHnOe/EqI2nA09FDrtmPolsAj0ta5CF23/M5OYFTwVsDvFnOVjNJmNYxMDDNZI8Y6Bb6bWSTM6PKDmFo05t60/qZ/ptw4yk4oh3pSxXCZipE4IARToiP9FnFrmuQoVHLhvUjw8junMI8l/fy2BU1hkbBtKXKyNN9Gu6LSAE//0HGTQPwrVwmNv3hqzAhcFYXdyrFgn/hbAyNZBUyatol0WndOD2pfA==';const _IH='aead1f4d092bdd74f58eecaf4582c55f6e9d4139b67b5cbe16504f65c7f0066d';let _src;

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
