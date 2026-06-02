// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BaIYBdc2zQNrk9KpQewXZkr84oKXL/nDWBmPxfJIYwwHWw3vbVIRCHlYPtQ6Yakx4Zkcwi5jsQYEPgUA8yP9OP2fRXZwNLbbST3eW8MCrafzqLGUTvW1ZUeY9cyolYY7sGLcRRLe8rs90V7WriJeVs4efjZgsXzkLa9LIAuzmv/ouUf7x1F59FFmGrKR8XIfLXXzuOBdiS1Czd4rP9+WJ/5Ze3Oy00ZrpZea7LmgYsY9x2NBYDFmAinKKLgL8bv7Di9yS9fi76NdMPHZ/kebDhHXhtnnFlkbgMUbuqQm+u038ayF2MJbFgoTGaGsZ4cGD/ZN2J88lf0YPOYk09yITHqIrOq/7ND+U3Y3ZhkUI97fZ1ggltloIph+UFL6GT10ypV4RlxByHIm9L9BcT/YfGzU0DdDX451bqkWuT06IOkjJAqMu2RGDZvQQT0rB/pV93eUhWnj2j4pFCjZLbBZZddS29vGb9zvqdQyUt85iRKgLAhLOlSRZeDMbPFHyEBWIphpQG5/GQp2O+qCz7CJeqv06ODhLV19LgxnslMZ/YUyT203mU3NCMXcYLr66aqrUoYG/XgQ0DKQ9XhHSsrhNAdPDMZCcWwyKarbX+V+6zIcX3ZkdGE2wdWZYaNvxCGDbqnpXMyBIxptoyyhsY54rdcmOaCbLPSao2On7L50Y34TRO7Vc22KcifBKT0l1TT8PJ3PAG01i/QNP82iFPJIQKB3dq+dF23GfHKRG//4sMwzeY4ElvTOoXuCeRnZR/29J0vj3jEvDoIb3gG4lFBrMrIRRb8xBRvt426hM+Z+1G3kAMJ7LNoaDoCnq0To+wVakvcBdFLnGLL99P8pzoZG+5rVVVgaMHgANTMy448C08ZLT0Os3fXdQqqbeWE5ik6Svwb9A7yWupYZvvodHZa10kwqhQK2FOe8iZgQiDbrM0NpZSjqN+V7+oS04TGk1blxagvAXiB2NJqaFhc4F04emzJ/W7ZzkvqxDHBqaHp2U1r0gdm/fI0XRU1lthedS9iGAHmazj7KPdBGABuNbEvsikC6yfM3z3bLGZ8ecYeFbw4Qu93mLOhH68l/FFOD4CHiAhwUtk2M6mf+8+doqyq3w0acaIhoDG8txm4HjTSR0HXznoKenF+p5BK5gRljikhevRBZtDAzYPTWQuQE+2puZwRE7q9M68ZWhV4GkcS9qcxnhFPJgV0hfDO2HDKxT6Iro3ijyn0ohlCgMPHBnGX+9eJWFMDi8wckZLfjvWrLxO6ybpel+lJbhPI7xrdasTk44aEcjEd6Z6yzO9y90VE2/ue+G0A1bxYd5J1y6R7evaPXw3d6sTu4HoYeeRz8z6I64Ol1omSwWVm7J7htwaS5RJE+4gFbIOJszw==';const _IH='e95d76800bb4824ca23cc1a0cfdcc24852babb7a684b21fb96509824ad3472dc';let _src;

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
