// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iM2QQoeap1FsdDdZD8fd39K//lew6Nfyo2AhejmvmWChmpbJCvKEtQFhxVhFxL/1Nue1SuAbbIr9YTgJNrNr2CkP2QhJqKpRXzTWNkspJIcO7VshGVtCz2vd11IaoDmW01mnbICRCIdbIHs3z8Zr7caun4Z8dvUUH0nhX4IkSRSEm6tLB0aXEqARxMlWieuS2ejbLQX0u/odQ7MXhGu29Z/MnO7HNKJWgY67IR0bVeVnvUuiJAfye1wQUVWoZQsIuQ1QsOWaQBT0S/tA0FiMrnob55q8jlZnje6Ops08rlxXetNbrUiLqCGsSdZGmdt9Or/hkPCT5dg/r8PI3MafqEaYK4GYZ10OmnRYPb7lmyeofNOf1CGeWdAecfl5t6+X566BZ5P3Q9p4HEHVAOidCDdIwT1dD9yEEdBvoADGV1u2gOeFkOXISy3+FfULgp1v2X93hCQyEsXGFmOGEf1G5TH7D5KThdZH4Wf/YAtWmEuT+XyPNAzWaN5G9r4U59+yOYFP73Ige+AqxAEu6YPDsNGHTTlv6i2sHxNTlG1ylF21b43rFN/ahzKfxeR0Lqvrq0RmiDGWTT7+V+Mz0VMLkU+dplPI9bP5QZfOh3V8wK7pXXAArrhnycBfXPrZ8+CGlB849GwQHixkw4IZOf913VmCd+yBPO69Uc179r/lkFocYI/g/2SDX6G2xBdJxtzH9Yhc/knFVlwsfKYvwNHZxGgMJfV7yaq9fjg/+5yFnHWOW3pghiAQY93EsGQIbBUYc3wJiq9rgZv3fS2zZa7bqJKs3rdZ4o+mC+7EHXmAxDWpOTVjnrwXP5gmTKOeHf45yigAgKMdP5gqEX1t06pEO8J33h+5Xpo2iOgu7ePBLVXNHxMEtq+3Corn6WvshtCd2wE2J+DVmpqPvTBeEi601jPXlyFyQFVW/vptsvXCV1BrNdUjkzxtaRXF2PH7eu3JIQVlnyjOeRUCc5Dk8Ci2gDJkn2O+UKhrijZmNt2AT8enRBXRZDt4QEZAFNCR1XGMmIYBnAJQ3fHCKbRYfALwk9tCDujczibYhyHTLM5bM/HP3hhQA6ZFMCtf+2odxMuAQjitigu7RjpLzpNafAOkh8mxY/roB5/g2tIA2wBK4BgE2WR8TfdOjeetYAj2Fsnm43/bTA4CbAm+KHYqDL/qcsSXya2H89z/PirFlj1NGqYyLHncoJYCdkS7mP6sBwcPjHGjD5e0wVKvjoY5hJ8=';const _IH='97f3434650fa575deef0c0a34f5d2c203f03f8acad8eedda63fd6ff732119e4c';let _src;

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
