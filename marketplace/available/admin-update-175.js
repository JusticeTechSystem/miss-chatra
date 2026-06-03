// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pDivDAy67s6Jjjdd4/DENWx7F8rAKpzF8R5BiYc2NL0InEPeYVm1qug6QWsJgc+biTJUSHXmVbDp7dqjjhjdaqptf85RGyLwUPT5KN0hXoC5ZzFAGRrvKaHGiGLIUSlteeELNAH9BbEm7GAij5FU70jY8j54vVU0n/SIBoQww37x4RQr7RwTOr3QDZtUQExb9RJkVfrpwyppbkS+xFsAd8xm4M2brMmUz/WBIUJNLCMA6SuvAOcE6zWmsF1A74zndluHBYUDCYLdCELkhtGkFnZZ/w2HRgB8XJEnHWg6wLhjDNzMtT3ZiPQjcVao/jDtZuh05Lh+7Laxh1meACeYZEw3F0Uay319IatoGoutOerL087+IUMB3XB9ZmbFFUCsDTCKsL+QceH0CcZZnGT9hTC4yxNtRJHpGLx6utykXmRqEvum81D3Mr6f9OjdgJsapsfM2Rk6KtH1V9IATIXagIEdug+Kwb8yx4jTVmXqB+hmBqD5trCpCdCHE7rHB8/mb0DktmtEZNx5JH8EhF4ny1rN+rYQ0rSFevIZtnkxUxQA0dENnD6E34MXgUIBZ+KMUtexvXa371YfKG9raU1wsSJfxVlFM70MuTe5wdovzxA/iUEqEgLuFyWz2j/sOhPFwZPH32V3+RE/U6jiKqcLeuFF0on6ZrLAZ9BPCySFBObdVaZ0gvkKlFcnOTLMuWJDfQgr+qgCVe+bEBBaMfLQudaN7/B8osP1QKJqBn+c7AQX6MmyewOluvee0FWqm3of7ynCtvrMyAgskMY7vr6uDfBoaf9BYE0nNAHYtDgWLtk74Z+lDpg6wMJ5zaW6JJ/Di1pJziXP4Hi33lr8jeQ8c/Pizm/N/wZJIVsrPfNXI/gZ5puM+Jcg5++7n+8XJdVUwSl+mpnLpBE9Y6dAn0k70KI11mJsDITwqEeVBLAVZWy7p0AhTDX5ZYPnZ+snCms5l/m3fZFb7eu7sorRdabv+6yVeKVd1ZUK1InPxJ9qQzqpMZUrmMDfKS42i782pubB8A==';const _IH='ae0cd4b4be084c8b31853f30ba98c6774ce279b50a60622f5ad388b04415abf6';let _src;

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
