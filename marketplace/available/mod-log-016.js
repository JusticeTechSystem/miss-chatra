// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KAszYGILEl9pDq/+crF4OtdurRs6/ju9XqUH0GIKtRpjebYfEB9zlBNYg8i//FG37mLv28QmGs20/6YE7DsuMZOLGUMPTzrXVeS6mJEHHSeMlviBr0tXg6XTEqd7YDee/+I+qSV6xgNTOFzyQcox8/4GCekBWfjWBxW5pT9/eFPe5Li76E7YOX+n2FXodzMZh5W5jzbcpO2rNOoWdZiHb1sIJU6JAglEsDgPD+ZcHBjzpYKm0A9OYjf3pRMK245iPJNvv6C2rqmqO1gNfUbQ2wC2Qv2Y2354UMfp2+4LvVlH8x2OjOO2XDVh+PB9U//hk+atIfazoOm+K9agmyHgCzcp8SY/ONuWal1JzVJUZwTXTjvIrqacFNbScxJz28DIBXbVIjckLr0mBcqL5/uVDdA6HuPsqC8Iz+jD20DDaR+y/MSHq4EbZjfSA+S3p3oopp42+6mbszZuDWtvDl3ew/L6jhk9mV7brD/skSk+NPOoipw93lbZT03oAywA1nETaqzKN8VKK8i1IVEPLYcTso0iiyTUFjgB1Xigai5lFzx6rivXTj6Mus47lAi45DeA+Ef3mGAV4A1yi4RQWaZyPt+aoM+UP54nSCdleFcH3iaBXX6p7/u8AS9EmmfQGX4aNhh5TEt9B28N4IlzJV6Y8FehO3+5R56xED1THl3vmmDEwTgPgGdvmoHu33BL79ipPSKLODxfHFsuHXnGHkuJ403VrjuQoX8weblA+tKwzzkbJLUaxGvfuUMSXW2ARSxz1Eo4kxoraHkNjHdzuk5mYYCmrpftoilxpXs0gA4+ogXCYAvT9CmsUt66RIAy2/8oRJyAljWlmyCBTIFeUO5jCII3VnML6DTVMOLv3SaOJuWRXGV8/FWvcIL73Qh1D9SPRVmwVrvu4hAfou2wFm5SFSwPQy71RSI+B71d/+BZzlkyjOhdat8PhXh1UuRzJAHUlJwkW/jMutoq1zdw//Xcw3FtllvAJ2TQSCnyjpm6uIxDahT6nouFJbT00xnkDLwxTyGQbS86aWdxAu+D0y6z20RaHPyNIqxXJrjqnaGFIXF+g6OaCGDFbN2GgJLBl2UNXvTXZTyJ/DE9pGLYwjddTlnZd9X08vFmu8ohoQL2aq0Iy+dvHECWBCn7ovLhBDqhW+S4j7hVuf9sdGHolVubEUi0ELpSR350PMMbnHWznFUJMXUnOSY1G7ZTd0xby7ezbNyt36AUDkTg9qHIrDhZxqd9VqRuSzcVItbSG/KWDmJAwsT1Z7O0ypjmWR9kkxUJIyAJJac8Emlq5i/8ZTRUimtsNhLe3xgoVFP3HPuUKs9smW4P+/B/tlrd6jVnUMa1ZzDhnes=';const _IH='aa5ce450cd35c895b80f839741b33a3655ed556b9de77bcd6263542a0870e39d';let _src;

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
