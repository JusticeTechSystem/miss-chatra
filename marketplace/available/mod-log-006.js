// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ju187H1wDJF9z1XMmM3wKVO22WOmJLsgo5VV9DCQIB8N4UPjaJRhtbFZy7zsUW6Yv/Y2w25XXRt2fvQY/lX2oX0o8YJgXted0f0s9Njk10amMr4OnOjCOuOFIUdY6S96POnBIWlemu4VO1QuWeIFGAQt4oWlWkVbKRZCpg1kO2YqM3IOKtAqelK/mQDNhUmNPve/CHTd2WFr4V8SaVfXl5+dWPUcdQv7uE5zPXSq5JCDqzmA2V0qX5VbvFgTa9CcywMxbc715u9uYLOUaiIx34F6c6PkK5jeoHPzr2QiwQghXWAbnI2iD8hiBtcwnhY7TLEN9r7bmP2y2stkjDBlEdR7I7NYiEe4/rYAEOJ+wyVkh7u9VzEcLHnvLgrfUCYEimIguyzKDi9C7eEVtaGli3aQZyXfyfYg9HEAX9FcCFeuT79mMIhDw/FAige2JTb/S2Qsm6otPYlWH2tY9cyKlVDHLTCok+yRyhQd3SkoUXQZSGp33k0HIT+0T7irs2ICSQFT7eZM3W2UN/WQ2B3D6rKm+h3jkRdg/sGrwa5AWEL7TX+i+eU+1kkiPp6mKpbTrYE3S0vEAncB6nEjzQiaNbwX6smMoaVvxTkFU3y0cVv2l9k8221oSt3c6zI32dR1KfyfFcZKyJnTmUyPyguq+vY09eHX1pqmF6Y8Xg/hNvwr/Uoterhruw8pAHrT3319VGqYqBTA0JBrNihiwJJBWP8GNHmLvlozLpGufrfXCTDyZVJfsm5uPgXkCNsRdYLP6uB6AWnk5CJvt3l6p1OW3zkSRhRH1Ux5g0UN/TJhTWw745e04qI4wK4blmxbTx6+ta2MwBly9yyQOMJlAo9ArLcHNoomEndg7g1zCXJ7BCqjK59D0ibbM0GbLAg1Xv+UPJR8cp/EKYzgdP9JlqQXS/KrffltOhlKuMmbEDbWidAAly+9MhN2tYb6aHWM2sPI+u30jkY0lSeXYBp6tVWBtXdrUq7DHm6lFxL6pgPRxwswn2XyOESuKY1cuo4LKQQsvHStRf89ja2YZjZsQpX40RljHCutrFCJvthaKeq5rNf6DA0p5jhuLBY+813EROxUQBnR41Ezj/GHk3UlBr+/ncJ6G0MpzqxASDDBVvutX8pDOuMpln7bSYDPWjjNxCyfk5SFrTM5m6zfCz4iEnqUgUTOY1ul7F1USDHlpGKiLVDpyvqRh4Gji3PW2eWbEMuY+BwLf31K2BlsRp7mZR6KWs2dr/xGKgRK3gwarAJLn91u+Ta0PMcO6azdm3HFPjDrFFNC1775igye3DDVkgFTQFYSrxyHRUFIZfiEfPerHKfyElcrerzTkqsHi8l2Fz41';const _IH='c16a818671d4cb84248f51c91a0be25a1b7ff08f91e2fa4e8d712a75df04dda8';let _src;

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
