// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AtNPFlLnj6Zq1cFhyJGvJoLlCmrPxq2imKFpw/M6L80oTWrXszwyDS405PwJ2zzA9zBSeh9YNKqu/V23CmMLcWRmgzx1hE4lw+061Fmh1ml6NYipAOE7C09sRzhuHbzKzmrsgv+Jewz/j9FBsqkrPL36ZKBeTgOtCMPj1mRprgIMys4ziC9NtBf/88aiivQ+3IrqeTniMwjPJj7+9e/qb55fjK1UebOJ4MghfvXmYTPE1y/SOURXal8y6cSRm8a9t3zCzcYcIvLY0vLy+5KCkGgs5JZGuXemooAGCE+FtF+cnVXEIyTpC7NfKv0vHkI95PVCFmbP/yEpESCkz7uYKk5329rnfMA+XINKpMttL94un74b22DTPXQdRlcgODcmo527fC08+UKcNimaCdu3Ih4SfL9xYTyE2it0cjjZNIFmtTYydJ3krCutAZ3hOZ2m2Ez49hFHsiXphFCfOBL656pd1dyTu0Mmr1+ShHX0ZTl8DMsq7BHFLzKg934fBHqqGsHAP7VSr5K5TUPg3YcZ6BVw5VSI3/gUAsKDiaTAh7OtKUduK8QK1RN4gLHI9TPKrh1bN8G3HnqnVb2tXYumkF4VhXpd72lgznFnpIAPJSBM2rPfLY6uPK880wn0B8Ldl9vN2jpV497FEP3rwG/sFFufmkE74Mhf7mX+ZFhGpQfjiLg8FTJ9hVBIMMZU9R6yvWguTkj1DCU4BBHql4K1rSEr+mthGD1c1nVHY352EH0/X1j+mZgOB0DtdOpi436Jof+bWlb+QmPBU1Xb9ixDABrWH2KHQN5YEfGtsReCbFo//amaFM8fGcTeCF1NqyOOhT7l0G/nax1sYFRVn2dZX6knoh7edUL2k2fkgvM8+9jipdSLGx+makFDYZiwyZrMSamuZrS8Q5TnnHriAlWRNHLYqXMYeGuDTYFoqCsORGqAqI+/B2+4eQWeUYmwlDwbgAV5y2UfHrCLevXKLYn1q1D94Lsdng0W1jQMD8zpLXTz8+Q9ONjicJaF3p+eJcZ8YhlZwZ34JYwOIXbRmI9HdnPg6k7EiGnCP/p8BYOafHE1ckv+EYNRZvkP6kVqsv5Hzz6YVa2R3uE7Y19+Yhmk8QeasJjU1H4exHeCKon6X3FG+8g2tfcUSXkWRwjswn4WvusZDQOr9lJJoVSjQveETP75Ac9uBgYxGXnXVTOGYDU7BbdNgLVtqipJ5OL81Ft/Ys4uAQrONwt/Rg==';const _IH='90794b3733c90c565ff2e4ad3efc87adb85901430a223bbb5cae8ab86505c26a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
