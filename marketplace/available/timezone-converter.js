// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7PuZLCrQgOgdRzYbYKTQGbTIOEvezEN5+r837QwQigGJUhMkdZ3FYHAeTfsynuIrei6hynoftXQb/92uZbUyHYtWGxsWOrHrMEM7K57OH2uJHGVy4lIjB0AKyzRkGoyFw6V6QjsEzKT6AE0H+XCxY5MEgqR9qvJaEhc8mUCQ+O4IYxoM758PxKxJ2TanVgo8v3AZh11nD2KrdZqrIWuzUs9Slmw1LKXWUDILPrAyaK7LGDvTrzcotJ3TgmVsgF7BeqHJww/5TxIjYKlikQt5dJpNws1/16dAMS1Vq2LsCM8pAq96aCX1KTa9en6+i+csVMeoDHvRcStZq/c2e9yT4ZA8qz/gxbT37UI3VrxIytfoFMknbojrzn3ivgZTq4OX2OWh2qjpHiO+jZoLkUS5CwpLIEyMCVs6FkvoEROPMM2/5dwJF5AO57ZMKkHZef71oY2b3SsvQGTLnCc8ruhpx3T6tsprPaCaM7gkG7/h002lCwdbziMeTV6/ZssGSdyJB2G8jQq+GZFpfIT8r0euANuKONfOG3Q4t8BkYvuAn2Iyq1M+SgxL6k/RlBLLNyTi8Qb5O8QtV8G05mTEIvJnlpJo5j2ROzNzngfs';const _IH='195728bb9a1f90a6b0b968775455739336ec2a8811ceecd07564766fba42320a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
