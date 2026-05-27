// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0NmqNvB0mbNdkwdt84Cp+O1W4m5Wd8+ohNufS3Cm23b8ZHUNYadB007Bd8615/iq2r/B37aGz15tzI6LiYYIVnzrIqLDuU5q3x/MHcuEkoufS6Mk2bng4S+sfIlPo0TJ+sOqtrMCV/63Se8dzbXAtjjTCZQKxFuo7OnirR2WI3A8BbOBdM/aLfviWnCQDMNzEZHGYWgdTMiXfqtuMEXO6rwJAJb+Zfz3NAuZqvO8LrvgUCIeXJiN/SNU0CSqq4ln03S25c/m4SNymjTRSUZLWdkBpIrGO1CuPW1uEBvCRqqIIX8QxPET6N+2CqqOp5wCtUyqinRaNfnooQRe0sSjTUYBKYV/56GXpIfJdVpOn+DJIMzQsFG8L+sZCqCezW4tDgduHHEC05qWnnbYiS0k4jqQ2M5hDMvqhJ01DYAT4paEx8Ue6OCMadPKh3DFpAvZlVQCl3OQsdXC8a6LjdmTH8jOP+r0wbGflmE9z4rltDZX2tlbkhT/LOugW6TxU8uWWPdks1LSXK9znXmCYh6cXfLSj/yIePwRtRjPgffh0AJppijKD7qXvBqnMK5Fw81ZhrwhV7H1w8VpcLdiMBm5LIHz/kvhtEt9OON0jFhQnCQ4Yy96iB+cmovBvYjQ4epSRNWgkSLVGWX7hYphT6yhMtMJnZ051RqFO3fjBA5PtfPHVUkk5usI1zKOlDXC4EV97aemBI9FNRPKkKzn5V+8TjWvbD+458kF069NCuTPqoaOeis=';const _IH='ea2fcf8a369667890f738f48361109cee338e9d8c072c5774df8c88b04768809';let _src;

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
