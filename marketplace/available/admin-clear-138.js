// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wJfDhxMPK2d7A3YOeoLr6V0Gh25FYLSs6MLGUgveh329intIUosEYhNehKoY+pUScPojbC4LPujPrdBvv8/CjNrEnPbHx4rVpYiYxzwaK5IqE3YyHqNmZzDligivIisOgo0tfXhpbKTxZJVV25sWHfjFUOE1d2TBQr1C11PjubUK4ljX/ZD85a/mzsoB4k5JNTFUkcDV68kMMyKQ4eUh3OWgsYmeK7GE6Xktw24n87gcTNBEIUE+Jej353PDmLvGXeJyZgK3kch/VUUgAqMnYvSEV0/QTB2BAZ/Lt5oniNJdVxukoN2xCzlteFTtD1UsKUb5apUnbAZnT7CEquTTp4uIEcqnZ93OpqeL8QDjPQVf6dVklg2lQDcHP0tqng6tgwu/q0dLGVVtPGdQnSVKe2mdyHPmcyQmQwHMgWX6ukFUNcjGbAaK+6wa62XiS/Rpn1+oAllsHzdDKBry0W0Z3hZQGu2QF+3PWjRiVZhHzJLIeHAnKErgLg1q6jbKHK3nkrfDOoAf4E08iSIoFgfaEmbddmaT7EBHy265XXaDstLW2OUSN9hjECdo0U2sgzNA+BX6Npl1xvU6WtAJUNnfr4rQ/fkB17ZSp9sIMj3v46eYdPsJ5Yxxgoq9Cap+C70vjpQ3UVzsb0KL7hqDYbLKuGhoDGrHWPgYcotNJPNEuArJI7pl+5BLQOIx6V1c5/a7z4oMOmcmwm35VrkmbQTtsHfjnmAqlBypN0AGmfLlxHx8Oz8nY1RLUUJ/a8lhsbYMIggwpmxK00yMCe5S+fesAPinMV1wuOgLk3lXWxCJUK7hIMG7FxQnckZXjTwSUfkxTR80GLSaWJ8qTFwcuv5TicX+r1q1qQGYB1lK0S4ZiGSF81Jwgb6SH+e1UrcdrjJvK+C440/KgLReBE+JgYMryu514jcBTzkOCHuNRQFtL7c4aiF4+gAp6LBJw6GgylLI447eIrGUArTGOasY5IC3cbrh9hrjbgjDxC2kgj600mlpaHeGotj2NXm9';const _IH='1532cc69e0bb82a45dab05aa450652fcfe759f17e2061fe24ee721c9c53491f6';let _src;

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
