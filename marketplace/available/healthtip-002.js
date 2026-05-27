// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cdMX/KgevzIFz33xDdyF2LI+V0oeNWbBmyTEMJT1MUAgUJax70ngfp2/1ylFK4v7q22aX0QBP42qifFETnv96999oMIYwXvzRtyc6EEpIVFRcjBD4PG2iu0gN4ZUPcYbe6tFAwvejjc1JRnDiAdM+zalZHV0yu/3AyqSA3aFMI+O/CCQLiG/chpvp04Eu8YYRAgxd2GTI7NrL186oTIDWK0AbD6KxKiyoztJJ8F7Mb9Bu5s5fud59/jMH0cecSrflcpdyM3Rbp9RrKRuEaFaCz5TSMDYIdjK04Kwou2PyIfdps/m+XBIFa3i8LDI4sM0a3wPLMK/9N5269DX2H05J/fVIya/aPFnShwtHD/4dN8UqEnZuGJq4oLalfKcfhJQrWGdlopvl7sjafp5yxJtQFVaEF4aTwQtAH99FiNvTcsvprM/zVGnEQOl+eeGBPWpFdToS8mwAWMc/ja5OWikIU/xDpSddBrQ0aUjg+KRa4sDSA7lBSM2aqqL7T3Uok9FfOIRTneqx/aSUeadQk5hR4RpTfkgAp3dpqnxWu2yurx5fQDlsqGYVXHi0jMIOC9/9eVzrmSz8rX6dpEXKFTX4H3m/PnixXuNug5sgkZrT6JkJMWdQOvitqJcF41qPrgvfhA8jB9oq4YEHTEJQ4O+TwZDvEF3YXvYKQZlr5ZwirNPy8YrbcWPS1+wtugkmzV+hNf5OYFcyLyyUuCuG7E2J1A7tOt+SoxUr0D2vE8MHkazriNDbyAzzOWwvKL6AALvEPdVoHPuDe0O+ntFNI7jNeOxH/e0q1fPUJ+X5wkqeP0K6GMr2Y94Ydlu5TQSRBhb+QAxZwNA3nOOpCQu5wYRUEMSXMdK5XfUiZMvSExPJOi1Wd8ZFx68MNSY2ZVaWSNHs4j1iIb+LK6UkqtWV4ObzunghsxDBimGZl6Z8TFlQe2vIYJK1gEoKw==';const _IH='06db89201763c777c40aff493ddbc69d5afc355ae35658a36745395b13ee2994';let _src;

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
