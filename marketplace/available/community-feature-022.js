// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0xo+hfk6y7GMkda7+jXOCMG+N4igmFrnA/RsmD7xgUdzeTRfqi0a16J2nKd0jJ2zF0lpKDhwDGQ7wOmF4VfShz4QH+nkdeNd4u3nRqwem2E5KtpnKY8+fjeM9JmWZeQ9mSevEL+OH4UuxLJ02IKu7NwtGwz/H31+9yAZN2wQNq/i+PqnIfKHwF4d9qOaW4dfPbS7ti4HzhOYFaqJD419bqJ/8Co+V/vzn6D+IjMYXkfjv2dm175TgBP+fav2u3s0EEMHhvzre5q5Gsfg2SNrilUXnCncu13GeC2VfHiEWZMKOM5LMuWMOlyEFkjzw4s+C4Ao5ABRSke+l5Xj9vaq6tZASgCQO/AcKlq7V2G4RK1eoUZDkGGqENdH3ksskfFJEzqI5/dVKRXluO08cVb9z/CRxzbaYvDroADAHGvWjAPp/lcLccbaQdsvUu/pGvfKolLvcIGUCjmtAgPwGl4OcsIDRUK58DCo/yxh8uv+EOpsp3a7/PR4U5LAolxlgeTYyXUm7EjLoxki6KHG20ERE/VaScG2igIGypuzcLDOO0cxcBcc8x7wjQJXtYNvR6W7EshAr4EPsshwDHegqBgUHp5zb7+RndzlFYwW1plpVsWI59++bHk/mBRNfaFJlZllRqylyb/nAV+/KxepRmkqZ9pQe4uDmoy3BiSW5CgF6WA+i4s41hXVKOcfXCkw/G2QDo7K9I47/uYealP90KnhBAJatfegOUTPlOEyFEDgaA==';const _IH='e677a462f2f692451e743a25f2931aca1c9e7663059a2b92fc97f84921141319';let _src;

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
