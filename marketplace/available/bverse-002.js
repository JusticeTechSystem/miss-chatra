// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZQ/pHMgrA2AZ/D8e3TpO7fVmbHT+2HIjmrbY017UI/4i4f9OtIZSNy1xu+HTbpBKY1C81+IZ6r0NyEuPy+FkYdyPVmjMwvAZyw73MANabTzAqc5fAFTCQQjt2Jptsxr17GYg/oisS4tf5Yn4AMf8TM2ItgsQlk6Y+OTwntubbTxlWoG8xYNbmkuwmkkt4KkTkVRaUtTr/kBCCla15UUmoy05vHu92fsU5O9i5kcAyJUrm+U411hLDi4W+UxTxpZ6Nbe81ytKFIhfyiCBQtTE/giR/f7F31zAodgwzVL2ndSIde8C0c+akUcLK1wfV0aETPEJ+ZD2MTMzm1OePQV7SNdizFPRGl8gzug+Q5K2I6QpGVMF+q/48D3gOviKbmhy1At/7EmlCDoEmQaO+6PnJDwiDNCrrj2AABW9rE1ruTuEviUKxTQGxOguZ0CZKHT6CnvSrqXbaDdU09CACw2fsD0b0+bKuLhZwpH6VYc9A0vchrZk3Z/wDjvlExQhFL+QbEATWUTj7vkdCwl70f/VShWFd0xIflZlD3FCbbNzBBZLGlmVSstHapSvOkg7FiBnW4NGvLhArWyPWUtzK/bc1zoCpMl6RImqs536FfUlczOsjivMpLU3BejQ3eKyE9JUo4WDQXOtzTMApxO1fVrF';const _IH='2a2c0bedac716e1d2736c8cde926aab35107fa24ea9494db58726bf4417b0808';let _src;

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
