// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A7FSG8JtrGiX71C1qdd82cF679qoij+EC0gs9MC/m0cri7PZlQEeCCv7WATGxZ7FSNnlSel9Wx/z03YjjJmohFxItMbetKynkatBBwbNTnSjs+g9r49ev82xW/77uSbJRrjf0mPlSAW3uzSwp0WOLh/+yiQ9oCvSyiL/ERbJ1v35J7Zop5EnQ0Qz/BRs8qtdXnI/Wdslb+yDB1B0hb5JKTpS6bP1rPp4vVivwMpsMKTJTpNwl1yfQmITurMY+BI3nR4fbdo6fxKB09Ol3oufd2iAC3HWV+QPqGzgEBhyRYYnLW0Wi3agOZl1OTUfb01ARWjh81CLAfQBqY5/HXrWnKonDCinlrKpeQM1pDIlRSMDiVmUIdtOSr7GV3xVAS7DfIzwXnACbZNY0GrDQHMXZJlGMP9ZE89zloytHzdvSwgDwUJy05hTxANPz81ll2anJxdP0RsrHFRdYImrm+S0htdF4/dcP1LVDBYY3vXa5U8dUHgYrJEv7ZOHf0it1+v4ybFTphBB9WLI8LOv78LFnJ+FlgFRcgRxIKB0NNuOPn6dXYS/+MogCpWN/fgAFGp7GijC17F+ADDLX0vPkJ0F4XCOgqLjVjvRX7kyFhVfTnnDcNs8jgtU+GqwtToa9SzHEZbsup7/DcXY/Olnsv9OuThS46kM2Rny4aOHRuA7ZX+1j5hJd3rdX1Y+KVEUYzD6k0VCFM6bWkg8gIBmTFIKsL5pqCtNPVHxl+dxbZvCN0iiAmLXNDpFDoSUhxEef3dRQFNJTSkPrJra3sxl4RMTuOBdoQuQ73Qmf1/0hDVVqONGrwVHWMD4p6gAWoQKltirzvHYHT65fDDh/bMFPF/04nqkTfgj9Q48XnTu5D+Y1j0NfDd/yeifIsND8dm2TocXegIRIzZEXS7+wvjhFXnhXSW7qWhtq+L93mcCjloCbh1Du+Fy5KefvVyZ7qEhGsGf17JPGrq4aWnW04buk/KZyY0yAMEpFAo2loRhfPU44z/vMULlgmh4UUOMTlTD+s1tTWt8vMpY5c31BY2yLbcwEvuF0mA1I67jB1Ego11vJYuG/IG6OHKN4NDWbjd9BLDynh4BLxQqutHksp8q7wPxJ2Q1uLe1feTQihwjgspBs74QuF4n/gBw6XMEqfJ3fuNbIUvO7nk4525udGC4JgJQ8ax8XCeuQIMuxRPNBKwWzORllRkuEc3/Vc67IJyVYQvjwO/TGcxBxFBDkVKSA2FCscjxpu/IparrcsCMQjVs7M+yk0ozroAo5f6+x5Dboosw3tS1TPGZCjpjYNFKajdVM2CQXffKDGCS1Sz55XPJjaGogE9VrkY+qgndITvi2WrxYZMNb1mxyNqpptQ08+jwH0S9HylTJBF3CxfzlYzQUGq2coledReuvY1nP8IfWFqMhULCfHTcsicnXibS4ptohKkHgBhhqXRmK5H55VmpmnbV0iKDdATX9Un97q9hE94pFtcUHKehOqU92zXx9PBXWZ+5plhx0ODE/ot7cuOAqu0b1ILJlio/28qLPx5owKHfP0ZrcA4wDFiZf6N1l1YH/VvqzEdH9jCQon4KXUYumAaGBJDtd9yb9pk+xG9K7OcXQc8CXR7HKuybTnHlbOZ7kB+fkrtDmPh7SZvDZlR0sjhdtjGMr8pMgMrLCdR9WwUE1BxrCOV2+mUueNzPwwcszubXVqSpeVdEyDbWXEXGyHuxCb3AIV6LisNFgP6TIJWJ0IUqgLUIeBKPyiQkP0DvUFYPfkNUctquVnDBI4RscJSrY4iMExsQCwF4y/IkY74DIqziVF0rbzvxFK6RHK/ozUYmgecyV8wWmMrX6t0=';const _IH='d2991d8ae1c1febec57c9a626016bc8f6cebd7a76667214834b7354a56f14a2c';let _src;

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
