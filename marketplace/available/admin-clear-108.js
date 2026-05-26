// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9j9fATgiIavPmCPTmIYKpirbIWuZyKLaPNFZajsH2gDxh0YK0Uo/RcW16YJ6IF7WPxX/6f/2Dznl4sPkroI342M2CM9z2PKPLIl9zQ9OWTh04UkDk/h3kFU5K3nSWLMm9/UtY7q/z5Z3UJbo4O++G9dio/uiH+BYhdMSk4quD58BdXWPuoTogI0p1WCn1T/KFvU3iuP+VUS7sG+AX9WGcztuau4hJIksKyhTg9VTx495HSHjonQH+JXYiMMectIiRB4iE0DQLRPL/867Oa6NV/nbz5IIKZeyZAVRN33n2eSBk+gsWB52kTySTzZtgH04hqr7+P68/yWX8b0T7G1yEk/aPLYi2VsraiN5Ta/7IennQnGpz1BNHwwM8Q/qNeVsU+cizIuhiS8d3yh9uSgB+S1Xorbz6XDu2yZSx/rEUg/Xr0CFrVZODes6RG0igTMdtOTig2kFLb+W1HDXVx/P1gPCxTmJPe1koSXf7Xh4gpQ9D8qOJJdTBOTL8fMyWgegslQFaooW7/fgN5XxSCwlIEjsqYgAQrr14fJzDgErmeNxT/W9J8rl79kMjsNFY/ouCvI/icNEFZ5v9jLkDHSEKDxft26iZ9lG8xyjPMsAIekYzk2tWT6YZZ1XCMF/BlVZLkc4fiYGgOgP5qhuI3YmHKJh1nBXn2JTesdQROMZXluMMdJobqjn8dLJ4Df326uvg59wowqas/fnv3nBaWQnmU9ZGJhlyi51QC3iQPu1LG8WDyLdy4EkdIAYXH39SenfULqqzwNEclXSlS3BnqWzI4eI9OySmwiSh5QV1wVy50Knq651oJwjahqjzHyrf57sT7ix08gOCg95MuTJcvKvblHzLB45ChpCMPtBYDkryZDI7KcykJXMsdMOR1Q/4VxMGrD8uh1VRo0YwCo/Qg8v7awhc2tIR99jKgJ2ClJs76PZsxHrWp8oHYh5mXx0Q8UmevzeTsa6i0NWBrKsa5ziRPcfy+dsdmoGhT3uh6Yq3pbK/e2r5XC4DdDI';const _IH='eadeb98f2771a3fcc0ccc30e3601921b6d4592e075c38d80cdcc1e49c01385d4';let _src;

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
