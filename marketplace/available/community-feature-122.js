// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+v4xpTiNswXWt/D2oimCLGqQmT85c+rL52xs1PI4lDwzDu/aK0Uy0dtEtRdCp+xmMU6SkkS216abLnDuy9Q7GG9l7nMUu/qP8X332HXinL1azjyrwGZtQ6aN+5hrNGLkFLXvzMBTfg9lyezEW4Q4BIINrAR5gCAYFUeByGRNakIuJH7J8xQtNmQ5zhVvj7q9HOexmo/IHvWeN0Us1tq3RZ31AR9O99zOWBrFVL0+xRTSHqldYCfwv3c53Fi0LfMdf2zkqREUxzQawJC3hY+sGs7JhUty/vn2Sm3YM9MiDiQ37TDSErb4SlZCkqivMWwGqIegb0iCGyD99Ha11b0BHaL0SDEIDZbYXkGmavaWgpUIqMytjRCmkJ1UKJdxMJhw5RkpSH57kIgAc1FZUjM4/iLxwxn8p17sy5hAWZHoJdTiaekUh4p8C6bts+dO2AR9Sb2dp0jFN/346BcMK6tyRL96N0PrQx0JfjypPGhzvRTbS1+XfK2cdc05kg3mwxDc8FpA6njQogcZDmgaaipC4+lb69XOZlV92m4/oUolUhB84G1+zfHcgFmiTu2lK6nIlds8SAaVvX5/bBOQPqXNrzyfmkaGKwlrl0wMDHwOTdds8BXh8nSvSB/++WAo2JmK4Xe0Hq/BTyyT/8IaOk3pFU95MlenK9NLzvDqwZKLP8/yG6M+vL7ns9xTwH+rnE0+fsGybj+UkL9qKOVp1/DtQ02J2T8C6iHuh7mbYJ3Ebsohi4o=';const _IH='441d09aa5b05148a5555316ad0578387d50984389d1a88fd65369f6693d88b48';let _src;

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
