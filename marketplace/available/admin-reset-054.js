// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='toiE3qZxKDr9S2VetYujeT/AMpJdjGUn/pMBiWDYRvqy8W/+xAjF8pj87CiUY99AgWejNoSiBfXKHJ8dNWrVMsw//OxFE0EgRXlijGdgYiDKIS6i/DwAqtwpRN0+w4qvRX8i5lTK/S1eyjV6N3J3xKHXilng8krLm0Nrv4Hr+9k8MYpLWKlYdsynH+nwmlkhSRgdo5/DEppSW7EfiC+MYy0e1TT/2gHN7JP0CrIh8ciAOeG4Rw6LwVtzEIOyOCEbkdn2v+H6KoiHpH0uT6boMJPEh3i26zSeOLI4k5sIacZA1wiw1Nsvbll5hzXgT+HMFE293gixcbNDkHCz/1B9vMQxCXWMNIDnaMr99V/dO9XRzgjqyd/Kb7QLsW7f+ftus63Pc2Tj4Uaa684QTOcFCiMbE7orZDyn3gzddoARi5SCibZPtprTnLe6WNpr+7p0hM2kc3Zyx6FoZpC1uf9vFP+P5yLmw/mK0SDDuWzzf+7Xc704f4QSoBcPlOmblJI7oLjqn8EWcb5FQQU7P1PVwreeWPM2TS0/6mHm48pj8mdpa0tm6y2VgLNbrca1ZROL/r7wsZsJRss+Ybwk0Q8SY0QRpgZSzVGSuMznpwVE3CzagVOd5RMRBU6BV3viG1C9nXPpw2/OGxL8ULMdrZUncwcq5oKlQwe3vnPHIaqxdL4D0QYRIq7NuWNwdTqVwQfAixt5SWqlaIf5mSjxM8GSWNha09YkfyvjpiwPVRZ8yXAKorR1AHhURgiYeETTheWCosyY1cd/2OxmhyIUdO0ZxhyX6EpkqjlIMWbPpvISCSL97Ssn8orL/pWY1vrm5QI9pElMc3I5UBkzSB6k4kJ9QG6fXk/YLC7Z46deGm6atjIRP1QOSMF6TILHGiLUoFFMMYoyEW1Inx8U1Wt60Wp+QPucbKMkpyvuZfcjYN0VGy0RiJ10rJ4N4Zvwu+jW+2ZtZEDfF439MpDGgLhE9QbUXlC2uAjCCkmLrXsAmwk17MV1YsG13jk=';const _IH='f4e3bef0480813d5ed159f261cecc45c8010c6f6f5ce2782a44050f7d64774cc';let _src;

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
