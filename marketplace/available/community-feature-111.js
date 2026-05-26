// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cx+jAsiiSb4iBZd38a0Lt+i7DbFNMkUpSMHiBY/mFqSSheGre28tEm5vwfdkkQfmmOpS7FjiWLshEhfo1LDfXD2/5piqZEZt2R0YeahIVAP9g7Nb9zgjEurqazkjtsXAjdHYBmh/ZpFxOdeMHCA6ur2FfzmikALsKcTx9YQNhqewxRrLoNHUH96vyp3UU80z9BjbCeuK1xJXl9OITm40Lau9ghEetUTOzgrD1KfXaI3G9sQftO2AVFZv5yaQ2ruT9CPI+LnJMJOZ4+wj7LwJ2UzIFu+bzOlN2vHXGX8kmtUlZwEnsxHt6brFelIIPGvHbHinVjsuKRHGlyHc/IfhQnhFRf4lxutLxbfyNduiUEF06lDmGg9dFDCQtXZn8LVxnqRivhCC9Z/sWrDoavfRCLrDXGwcT5oA1U+yjWB0lNUTcVuA0T+dR6eZ3LPUfGzgwtMdAMhwQVZW6MddTSKYpzrhbPsD8s61rJNLYsW+QcrNzE/GPjEbGBNEw2iyTNvBts0IUlaiCxLJoWdk4T5oaogdR5t8eDzPwgUi7qfNsa0JVgCbsX95xJkbbgo0PNmktedhM2bfbTROS0mX1le8sxlxKOpG5pYE656j3ktdI+tDuwbEEf8fP3VY42qDkY7fWyn+/fllgKt9n7Aph0wwl0gqN8SZTygk4G/lyFWKmgV3nKrkmsT4qaLRp+p734C8a3AJV0Xp+iUnYQ0B5S/VDtWa2O9do1rD';const _IH='37f2427fc4eaaf73240c2518e2918e786c884fb306797605eb47398b09d806be';let _src;

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
