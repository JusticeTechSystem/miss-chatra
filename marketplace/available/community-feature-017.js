// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1cgaQHX/R8S0hLD0LzA1dpgi5bAlKy7OKfdIt5V+dOOdhg3Z0KrLMoHE/JE7xOtO+UJUe/W8BZXikZcSXPQa/KNWt4C5H8jlzcgtAgg/RyEaI0zW5YdYLqqPr+ShUqJX2EXAo56jhCmkW1/WJ1U6Zfo7oEKbWkh8lO9OPV1us9ourqL25KYBQ5NLOOCLsJexL27ppJJE9WivL/f09vWYJoYAuD/gii//kXXqfuavBwR29mg/Y5ToIE+NJ/ShOKgvSW2AGype5DrH9VLwFmAuzEdKCUe5cI15Wvb8yuSFp0+HY6GVE3BxCMO2CLjX2OmPc+h7IcAdkxIWI8fHBQmRIsJbRXOJ24LL42ZcQZ6dU91zXLi9ohAfqf7UY4lau2CgPEvt68okg3Lov0O0yp3EQjMcUFiYfTUz0TuLcbdp/2mJZUTokFVDWgz2EFgyjTz/wboJfSLov0GncqHyQ6S5YwxEY4zaL+BcRdaP2hGNDb437lT0i2glyAcIfstDcFCy0hSuA0LI6XVh4h+aa6C0vLHi4yZy3g3cSaJHf2kfTFJJjcnSSjl1pU/0NNE//BDR0ULgfS2rROpXPZ7rLB4EzeW9qGf7jNm+Zp93rYrEEGutcthZgSSjqurMZ660DJ0OZU8TieqYap1gIWR/WU/LHwUeMaxxn6cKAxhzQpdl0FIifWya342oeiUf3mnqovnn3uYIfjANlNkrvwXcPNuebwZ+LrhtwPKiW2wCNVClSg==';const _IH='482ea797d935542aa0ac0988ea691021eb41bace61b74a5852d4be6a189d22aa';let _src;

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
