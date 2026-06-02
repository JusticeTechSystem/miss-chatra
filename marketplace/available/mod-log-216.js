// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YuD3Jdb+eJVUhRNr+8kCictALgjChOIqc73rrlJR7tWU2nLU0XqyYdUWygBTgwSSaidAGUDBkBHOycQIL1LkSuuUBxsfoXApCRPHnvF1okDh5RWSFlXpmMLcOWsnD33k9s2lOAjEq2d6e9wja2DfX2WiCwjuRIy0J76uA4JE0J/7d1knfhmwhSYbzsbYK+C79f0roZd8cVX2rb+Cz8dUcJVBeuQotHTwgLEVAUdhC696JA61hGIWMbohGfV7c6X6tg7wNsRHpBqyKcEqNp64sp1PN3E2f3HFLF31Ri+XiQUPU+Fuu7R8nHNm3aXHy0zPSb2wo5gO2ritYkc9U8rePqV3dwQ5f/dlpHPtdZKundikr9yixsFcyU+empteoYCaMJhTyJTj7CstTPboW5onxqAUGhccKTwy2y1qV/XdoULGVNgeEdr9t6KabyQNxoGtWT0+nilzrHmPbvOO46YwlRoygT63gSE3ImAB1Vuq/tC6aPBvTqJsW+hUWWBQU9dBKboKtSF9GlPTrIrBG76IcJ+E6frV3LDLGt5B+I+P3kOPOQIwqF32BC3hFlX8PRPpqsTq2vh5b6peeJd/2/FyDraPAkPXAa2NCDAoA2SWlHWCsJrWo4P/Y9Twz2o0OIME2Iqsb6gDycTpcV2Mw5WncBSrgh3LvvWISh9IM2MhzXYtwvXPOYE2aJbzR0Lo5MHkVA4eem4wevS4kz5L82P6VsbyBoRg7Nw2WFDfWjAjQT29nnxm/Uk6epF2kPksHslVj5ibEbSJkzJPzXtgVsu7KTOEl/dQMHAK8GqYB0wSkbe1a19CcU4J5An1wdaKMNH2URKbyUoqxB6zckfytT6VS1MGtJ3p/h7QbY9rcXnqOX48hBgxPDgcczqyu8JXamnN56uBuu10qjl3b54NfT+P+lQp9XVdwQ1G/HoqZDvl3YJuW6SU7ThcV5lX9Gnz9ODu2EA2j1rFJ4vQ1jp3r9oBuJmLfPjq6fs/pGp5FpaSX3smgi0wk0Ufr2q78EraGu4dRSp5bQwwOMbEohA3rZTtM5M0oGKJDHRNYRgo1RB5+csvGYoFvmtn7urqUEVeXjIXg6j8R/5tZL00g3RmO/KcJg2j4Muuj81HfF6lqDsVbLJihblk533w+KxTHKqJG+ixbck/NSy8sR6EmXjiM6ZOYO7oq4JHb3D0TPv7ePqAEZ1L514qSINWDWrJRV+KktgdvEZgdHIa3AwmAOczCsJWLWPyjVlwDAW8zbPHkiWPZJQ4MoAAOh+tSAwTyJHuOnPrrZPUB4QxYiuGtP6RVbPbMfW7Z3z5d4oxY27iUo5FePoGVyfs9rtV5DfJxOTzQjudTqDh/o5sGbif0w==';const _IH='705303afe817a31e8b4f1ef407713e2670dd09fd46dd1e1db67cf301253cd23c';let _src;

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
