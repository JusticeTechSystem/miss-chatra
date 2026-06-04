// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6vp+Z/RIADeKtlxX9A5Ypb3N3B/3ruAjeQSMHTOsvzO8hs4g15OD4A5eahXlJX6p+vqUIHiBcCbKwKyAIYcB/ZApW2qFy++cFyiebVAjBHJc7c1RfeO65Lkj03BahHFpdSXTxGU1FihpTwjhZa5XhS3TgYOTmYPRNpzb6t9WU2ms9R+Cbx4wHYl9AFpJEKfmfoJI+CzU+FeOzjIW4ITsab5JsOVbfHEfczSWu2i6vSaifeIDLRO/DxFV6hmszJfyVy7Kp+gXDm1QsuDolMoXtefRCN3f02apvW2GiSMUPGUqqu+yWsZbxH6C0uqykS6oscR/ahkcRtlVCy8Aahy/vlvVLbCn+ccR400nm7vPh+aew6pRqUh9xrpzE2y06Ce+EQ+uIUKwLgFuhDOufnW4mL7HDRf0qSCqve+nCJog9gnfkvboYxOzvCOWMfFTgcKSw6CiZ1TPhPVhyCgqni2FyyaRvDVEKYxdlJphWqs3oiOwk476Cq+pUtSl7wPmtsIbosDs1PPX0bGTZEn6dWGW/aaQnp3IfAn7Xf8hYuhHkbi4IpBjtX6f1bxLDwdwkp96dHxzbPDMOulRiemFriwyr7rgvw0dfZYB5cHbX1ifbfipJ5MvuAo5FmcY8MkcvpDk0+Mt0GV59coXXhC8KnkRXzzDoz9xkAE6tCrPNhH6fPx1ALanH07WTiZgXVvEn3JD1N96OyaN8iscef8pbT5Vf8z5ZP0RQu0EiLSAnIBoClaZQ5hY78z1gGpQnADSk65QQS+HPtEOzPTP1j22c/MylstHd2VFYsIhAQpKAOk7h5kcKaN7uAyeB5wOVH2C13ojaNWWBAl3TP/xJJd6MArz07meldZldioXiriaSI1sUDELhAxagDIYRg5Ea6Oy0QNNb4/pBDLh2+XSEV45K6ybrWmwEcfJ4NkiUjBu81MOxhieN9QnVyhTqq3WGIPUGKPKhuOtWFKBAmsGu2dYK+WMs6uPDH8t2sgsynhxXW4IunfsmiZuJK5g1JleGk5IkrWpdUsiKIrCTI139ChXA+280sJ0miFCeFEN77JVcf8/vmJYMq4GUeWTIA7x313+VvtMaRn2McDmc/527W75Y5lbb/8fMrL+0qIiw6j2j+ZSvahC3cuhdwbPC25PJzAVTnqIvRUdq3GO6+y+EUJzrRp5YZuFM80dBMizbBycV7ZR6ez8h+JuZ/eWqgtalQHN2GZBSZjt63MOKFWYZHZsDIyEYfdFgHagJ8kL/ZtPwv5SoGg6ZLT4C3Irzi7xqmXI267uJkmS6LaLsiy9NwA+nsQBostJuDQYpMCpKk+sVS3GXFHK4JTDUvt7imslKlqMY08cVGdFSV6nFP79Ir9w03Dw+4cDFhIfvGzvyg==';const _IH='190ca707c59c14d212f617e70b38060cb810bc0464e2d1f14f8f3537129c930c';let _src;

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
