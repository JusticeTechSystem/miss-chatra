// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vww0bzKqEFBzt1UYY2jR/bFYraxWrmypqi/M3a/Y0yJOrnd8rhwAVF/ysrILN2J+f4hLqzdPmGNeS7aYRa+fhKIIHBOjJnylJIfxzSpMESy+TmEezN0kRQFkKX4Xy2mBSARiIySUE/PJMpe9fx4dcmrBCHNBzqIjqPlM5seJjSfxPyg9K5a9WZLdhJU9aqo2RiH6UOf2NwlcOqZd+elGAaFE4owb8pode9G9Ap3H1vGKX1Mi0yAEOIFYKyf9cJ56q7YwWgV1z0dJ2PomXa12JTFgQK77gaNmYuacywH0WFIHsHf97xBOuET/AmeGktt8gQr1VqLI7mO4/aG+TsMaQliesSNkEXBn3pC7O96Az01oEUQvOLzvB5il83lcvvukYI9NxJksmMa5uJTjAIeza35VcWQuQwBY9x7wT1X2GjwmAe88qNt1O5kDD1CYlOiufDlFOBDWk4z6823eK+RZ62ua7gOIsmn4cj6MUq3d7ZXtlxB1OoxaqR8Cwo6MjJhh4aGSKcC4gbpxQQaYslDbEKyUhmiONqLjeIXfC3q6BYvNB/Qt1Bg0qTyWrPIjzre0rcSGOC4I8ZoKSh8kc00Tq1GhHokRnHFCHj49pky1NlSWcmGmjssRsPqIwa6SyIMdsopqeocHrpp1rDBLIow+/WoO80iIvP9cLhtpsRYJrB6Zl7xDKLBq6/t4XFuobdTzF8KUPWlyl6g3HXse+vrtR4FEM6h7Mxjwz9dPZV2pE2G02/gWQV+Y1n7F0aJRt6BPx/G4wV0BWgJOd+YfpEqtN3DxsKUaynRelTDXH8N3P+QuOkJLMdgnTW/YNKAmk6rcNRdUznwfWBC1oPVcn5+xvpCbAaf3UrC2gR+5oR79ZAkGUo48o99BJC66LV9+0PQZsnJD+W/0qFhmY0I5PxlyOPAS4RWv+FKA/Jr6ORC0st5O2tMo3OtLHuHof93OLLH6UWZefYZ1xYDcoAhCxcwSpJ5KEMJQLKmMTCRHLj/QMcG6I39IUIPpAAcZTMm5JgziBMcLhEIjOyJLUb8w0H5bPPb8JtTdmp7hs587zxgtiGV0O3MQtFRBcFV9ZbMbAunN+Z+rWJsKYuwDl19K2qXyXGTSO8Js4hAhQmtU9qMFkuA2Ffjvlamj97KmbdO5AaZcx+qTqaUYOrQOfbNmFpmhGbVl0ZuIKz8zXu2SL176G7QAfqZOmWn4Q1m06ED06yXJmM9srnKicx7QhaNvK7McZSQJvk25VRmX3SK9T7mSaT/2NyiHfBC5zHjc3y+APGya5iKng4oxLQ34jhPu+Tt8TDeX5+yrutNLqDzkj8b5mIDvmblSHvzwR6IgeTSFvsjxRwLAjXucF0Cbiq7V2Eo+0sUmUq8QOD1sSzBrblLiN3NLMfARy0u47g==';const _IH='d8e186ad1e160bcc2389a6b0163de774314a9990b89f5937f4553db978e21ada';let _src;

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
