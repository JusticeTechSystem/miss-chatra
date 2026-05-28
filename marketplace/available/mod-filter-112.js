// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='13XTuZ3zV/jyALCAE8WqGElvnVYFUWVrQajBdJ+C/8m/p7OBoADksGhMLlZFD1+9AyXOzMajXF8NMglUn2IWEJtUkrzlkqvmsQs6TvGymNHH9AmYRXItxKpr36X5/i4o2m+rLyEyhj6SS75ssNeCjYt3Vn8RFY7YouAhZRL3N1QYhRWwDK0SgdWKRaOzCMCO9c+ysmqDsLYZecnSsPpfVp3vNxecg1q0RWJoAuyK4jkBC0YmcOxZepWMRxUZ1PZgE2EbWae9aU2+o54ALxa9CIyfgerOeDNG15cQZyJ86BAbaKzV/k/vzfX1u2IVgYicYumKpdQJDyDRi2RH2UE1UT5OtR5FxAA5Agniej6vd6a4M+9ho9OyPQJEmqayw9EUoN3YLK2OJxanXckb79gd4MpGcqcd8mUZRSiQA53KlG/HJCNPXm19Cpzb+mVx7VOrKkhi29RpgbJ4JesMmgYab5QRho+58OByF1bEPZrBGkv2K44Y6iwMO4Sn7Rbdfl8vivKjBs9BH2Gww74U5xjvPxL/6C5BwuVZfWe3rtwqLCk9xgadBfgp9oau56nPxUiW0svFz8d7AULCd2og43G7H3eO7JWHvs8QVzvN6yAtfUU5DcJLbdLga7zIT1+FNGdXfcU7cMrI/u7mYS/sant8wHyO26WqlxjkJoZinTXyisooqPwQhCCefDaDhs7dXh4C6aLPEsJYJdk8rgRaUhbR44JnuHCmuhCFEHM9gCOzTe49iHbEVj7O58b/ka6agWAVqkywVbfyiRh/Zj8zHIXav61Y9CoFRNzJ41BUSID0t3AaNdaNAkLJUylrRaXCOpkJhyL1XWM8xQBpD0mxHcL5f+9gnfWJd5Sb4wMaYsbfLJPKAFGy1vTIoBiBOFSq29prM/tFYTE9jnCpSJKfMRXFO6o5Yeek8HrMjsqRjoE15jHtBz1Lo5lvZNjup6IIsEAiJBJNKzCKPWqJ9M06/D+0obhXXtyNt/w0Qb01RzZFUMoY59L+HDH18PnpsLrxokKDHUDO2i6I3iDzqE5VC8z/idAM1JHXynFsEMObY3+Wu86mSzbuSShQisg1c3Dpioe99M/FxoHMtE7fK+RGYn+ExvEJwfgwC77EUf3kyzTY91wVlJikeJe2ojtQb0pCht4CXTpafOyBB+U4BrwG/QuviI9XtLoVkD9YypwS0poCOpiokugeY8B7JVw9q8By2rYt3slQark97rh90m1zJ0FluIJT6H8s+Cf+aeHCVBBJmYtFe5fMAl3SBS/19oV6iTMU5UKxL2sg/BfXC9Sh5UibkHU8sgeRwHLMduA6xFKl/8WlbQuVpkUI+CvBiaAY86fFrQidPE+LQMr4e46YK8Pp34zN+Kt78zYrgo5sAxRHvkvpbOFw94ZBWw==';const _IH='0531013dc19e5d9d48a54199f68f4912cfa1a2289cb7eb2e7d3a4503076bcfa5';let _src;

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
