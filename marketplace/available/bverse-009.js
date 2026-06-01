// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8rMxrWO5A1wXJmgYMU4x3WsPcsH32s+WWfZaCD1Iy+rxzW/5+D4pNpifbVraKCfQ2ZLqnMwu+gTAJZ7CCposXXjvm0QQVvEIuVwuP+isVkwvCX3hycHDQODgVSSpcQ0j4l8nsOHZU1hhxEOg0ZjtEDnIwxJ2xB8woWYeflqATZFkNpbHG9q875HO/rdrbfeEes6EVR8rmoFh8qP68CQK5akR/5iG8knbh28gKTIn1IJCdxBsO4ILIzyXNclxoCcsAMbio7iFxqV+SGjF3KvKt+7zilRPaJdYc34spe7A+zCeOoordOyZoTNXMn5g9pnl59ICfkyjGYa379o/NfFWaqc40EKavnf84a6hB/djLqV1nxxVaR0GdMdtjWVU/m5Wmp75FCy15v+D8TJ5ffpvmTc0DFYoGzgmJQvNh8XCOnLzVPvjDRg17yKRILEQEbjxTfbtM7IGP2A0Ey6lF2wt1RTFuqGsqP1Ga7mVHSTqP4yAwUwr4ox0KYgOStyG5KoBlQ12zYQ7HzHibYIk2UOWregbB7BBfjmRP+VB6PDDzMoMHI/++7YTZRRMxZY9A6K21sqFURM3ww7GjklfQsqvUOCjzWkvdkct1qu2RkjkQuXUJFHUYnLhpSN3OBaQIUcnu969JzV+FPg3yievM202svK8H7af7+96mM6Z3z0iLNWaYY//fff3cHHSA11mFaZ0uVfT5VdLcSV9IX47AwEbw==';const _IH='b81d045e6b49ff2f8f5efd66a2c2a7006d94d036b190904dc1c3340fd7f4a91c';let _src;

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
