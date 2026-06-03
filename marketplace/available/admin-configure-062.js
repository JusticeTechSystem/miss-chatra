// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nNCDhQFXwyIHTjlVLCfeTtpe49ypZNvRnj9yRxlPSnZwxJdxwf/KI4ainaWlGGilTYwllAX1+oNhiDts+yQsT2bO9mOy8CFobp6T+Cx6NqlHtRbs77qOASgx2/lal38QAD668408tFvrjy725k9teli9+WrYkFYYX2ceLegC8CBto8cSxRgasOdAbFdlQ1xCwGMy8J9lFgl1q0C0lmjpYHcouSEVV3WwBbkO0Cd2/kmbdk+tKIFPRA4IYGrffKI8mQ5N76C4VlyRUh8gASgnsGrkBQuw0a28ZDYgqaIqoYsA84VPRCFjR+pSNBiEGf4+7qnbqfqxIfnoOQKcvYJ3YU1Nr4VataEfOviRhV2J0P75iKa7eMnir04Okafyg6JLpem5IAIpOGD/uRevrHz0F1aBr9lhO8jC2jOijwN7q05m4nlrkcz+uxDY3pVX6c0yh9fMzdQSHANvOysqy9XNIDQr/eyWWL+m5+bppQql7BPHQFA4i2NYl9a9V4xbHdmKZ3hTr72H9Bua4LX7v9rKSPrMgVojUzAowMM19pVnEUX4tCwmvWOx/9g5Y6xB0hdQXhSK3xkP4WicMgZNmFShfrSkjvVgV/2EXEXtVthiT673XdQDxgCou4rQXYagQtlO37/Bd6RduaxGOE0HFh/1lMfr2nWoLoXtEvLwTWgYaXaMakDsWe1biP+VB+jTTMiEVthRqyCqVPG3VFO53CC5v9unRkgWlZ1IpPYUmTtQuVHy1rW+XznvcwtNXbDUjXpAidJRkelNPvs7GXgIiBdo6poGSM+T4hG5fZOD4jhU04M4mvS59ImdlPIUWSN4NeSuPgj/thAjEnGVdVMBazPv6946aTjkhxExLufLYfNiJDDh2TqPdiAaLJ6921qGRqEoDgpkjKtJBEfqDTIfLtp6JuyydW7GqgaupMvYpiwUuZHTgzNL8Ihl56RRg/KYW5jUMA3fcPjybD/MBaENcRip5hdTV4RXk30orACsDT3w9FrTt+AYhKJ8eibfU+rHvZ3hNfQsGNEcAaD3iW/FH/T4+SiY';const _IH='f603a81b99a3b84a54403ec82a5f56ce79adbf855790597bdf87bfbb84469d64';let _src;

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
