// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CH1J/0GhUYI29a9z7k5GKWtrEq4f7eAP2HaHvSouKm34FJ5F9Azg5VQ3dcrPY0HC9+GDtlhvxFuXmeSDRmautV/87N21KrHbPx9iM/Sv2TQTJywh8NfOg5g3FK5rkHH6WkToDIHgiEhDoi030Uhb9zsq/tn/lSY11Afo1PFmt+ImSGyKEHOFrVKdfqJmDveMkEkrPCSfuUCaKSpYk5AZwC5ABxlNy7oplNjhGspWmtLIoA987DN86lo+Rg9Ehun9S+yWrtCvAWelTQjqmbRb/Lc2DRUrM4+eaErstD25USbjb1fIheUMlgb7rgiv3CNu/StUEJcxu/a8cQtfRRUC1mOgBi7I2SKZITAvktum/HbijmXfu+T6ImP9MjRgYpysV2xerluq0S0TMq5B3uO0g+8QSyZwZA4izYoQjUraE9yJpT2apbJnNEHdhGU3M2t8S1hifzNnfL3OvL7a7WuJl6P/nGYjx0ameiUPKU3Ox+RwYFwywbPaoZcmo/dgjNG+Nkf5pWxc5i6Lkz+anJfDTeF2u6aDtd3WTbIrvX87Z1eRHrDpDGW+/QvQCsEWmGDWCxgD1OfcWJu0ZOVq54gQ4KzXFTGaoailPMKXbshjANb4yQ4vXevNO1XtmkqSVkvY1xW9J0H7pe4hrZLEvkNY3UTdUC8MBBSK1g==';const _IH='978ca50be7d3cf9758541e32aba9b2c60385c2eaee6d8bdc648ce28a78db01ee';let _src;

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
