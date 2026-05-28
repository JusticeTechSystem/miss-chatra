// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ApZLVXJVlH3k6VXEYjuM/2W8wRK94ColVstW84ov7sO1jKep2iSxLkh/Yd0bJHC6RdO7Nw4xg7I2q0wRUMnJMDenyQ12t/9BQ5nxoLGRwMiKGW27qRb7kHH4FAXDdIAVXlwN7FAHOe9iErLUJKt1CMc6uKZQXnT6KcNhiC8tMZLqgQrvSAe66JWX5MmLVfUBatj+AaW4D0Rk+yRiVXHRROqvP6hfQT1oaNxSsO3k5ATb9JcjPl4zSgFIWRS2PIwOjLT++fny+pC4CsnCQPWgdGSBXel0Fx3C3kqSo/gICA5b6H7nzTOS0ZzFHX0gkDwSvUcigb+4bMXvPw0f+J3iibzDT3vEiIKQaQshYIHPulSMGPyYPDX28X89NMvfV8fJM/+BNqzDehsArbDzLEISy1/JY14IQAtqZvV0a3mW2O95e7ijFcTM93/VK6RMJ80wzM3N6hl/6rpDH6xK+jekV63iMf/4elUiYK6XCgw9HzTGgYCqui1pLDAK7bZJDyDzKXdv/3Prwrn73AmkYCkHTiGOicQzLiR0BO2vdV1/fzZTN+dvqpxZGdQ6O4bgAOr0Iq9pjFp2ISslI5JG/PchcrbHIXd7CBFNZ1Fbr7jK+JPkBb9M6uaxYaNHN0/2OKC+8+BAPp59UVQMT5mHwJvEVODmLF1VZlFIp0PNLKu0VYuLQCcsXAE1yEE9RjH0/CU17U2OaTD8zs+Ad1nqkVX9UA==';const _IH='41f261dba8ebb2ec40b1aa149b0bf179662af777d05c738d8bf2289ba16c4b08';let _src;

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
