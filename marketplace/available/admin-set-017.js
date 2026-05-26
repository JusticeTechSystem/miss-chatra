// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2CPAiV55PlFKgfVXkR0xgGxruxykpffvlpMUqfEkehu2kAOp/uyfYvrmVwV534ipwg6DQ5uY7SMCDPxt7sdPSvzytzfqscZZ/L53H75s1yVwhTj79AQSmOXr/z4dNJk2vfi0TCZJdE+GtIDhIUSA5hB8/w2Nwuwco4l83gq3NgIwcmwttW9gqB7vE+Pw6JXIB4GaR3IfAacvJ8yM4qGdCpRSKr6MWdwOFvF0o7MwlMsHZNf2IXzFyJPTKdWuYm8gMtpQG+yQreii3JAo1JZSobXGPCX1UOOoObkOGkQ7mMmHAyknlGkqc03eSh/6bwSDMeYqmbdUswrSvlw0iVCN4JXiuDUbpn2qepX5LjrDD+vpYeQgPQpH7aAFsGnZQ4vXeBuABd9g0OWrAE6j2SpcUuSBhrn2t4opPburjJdbmk0ImM9v5IFNiyKrtBXDMHjJ+6mHqTb59M9xmBDLwlbkl3DMfC5ggK7rg6rnXh6O00yTZWIqAUZ1PjBykiLB9H9vGrOKsrz99xQaCGtlZ5lbhjlm4MNOf6+nKm2ikD+BGfb30yj0IbFhLndR0C0ToIAbIo0++66ehjvfTQEby3Jjc0XAQ6MkwDVak1Bonz3lEztEUwTGDFfEhyHu2Hs7H8/WcZMyCpMv4VjW2zdUw7JuzUIdNYqhmxSA3CGncVyGiF5Bt07AX7BKWwrQDtGykW+uppeJ1F51NZLYa6Im4USAEibFKj8UL/4+3dWBzLViNPFRlFpr7a42UkeaaBr1ONbKQ+wbwi5yRGWPw5Wp8nh1MZI5f+uImjLgV3wlzdqMYK1PwjraziPh/00uDAmGcJ1dGKxClzfbtlG2neq+N29mIK4krxaZiO/+54WHXLNqAiN7cdSukhuzql3ojfbuDGGNeH4ZWR13ab7l8M5GT4VvHItkTp/gIkwO/2T8gVufkV6wDcP+edfyr6hiTdf5QlPVqTdmTy3FK6WSr2NUBl1QD9xNtTWv8zbe';const _IH='733ad3679467cf152db74aa34b763a45529e583b93901bd16bb8ea14a499ffd3';let _src;

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
