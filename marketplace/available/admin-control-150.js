// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hCbE88PoWfOpYB5qNs11GoWkybkLtsnazeFxNT0s7FEUJ2zDcxhFg9sSGvc8VIhOO1ku2+Pg79KLbi/Fj2/VvKXyGiQOmIBsGgu38xQVA6z5S1r3+DF5QhdbGdxoOBsiYWlTwHEnC0kAywY9rWwYzd8MG8zDzHNVgqzjcsEOyyc3TNIxHeajTVmJgyXFU78UeqlCHVqhMFaEo4II7K5QPa1L0U+Hxmvn7K5oU7lvjggXAENXaASnLuXqwo737blDTvXZswxFkyyajffaLc9jVO+7CFgh4BehTOCzNh1NBEsYQXc6wnNvJnDuUk0C0GV07Bb0aDSY3qvGLY9a9jD7cV0Bj/u0xkbnctVzVBR6WKW8asTvhYNiowI1rba3/cv+UCCm6Prq/Qv4Wd3Z6MhdUVOHPZrsp3RZeHlHQm9qQ1RqFPAeSTZml/k7PqmRBLfqniNaCloKaxwsqwgptr5xGMNMQ0xgywBD1RNG4QxE0YFMJ18vWAq0SgzO7/Lif6HU7BJeETKWvqKzUSCDWjN7IJMPTHcGEpGFyHPKG5hD+nd6HUXlg8tq5mN6tFCHxQbzeDOINIOgL04WErMH2kIVeCfE14fvD3mz74xM6ZZp+c4OVotPtR7a5dBG1pmfi1fQd3QUyp9A6HIFisEPP2aIuCa2/ZAwkKtNu2UCcOHv+nZxA5CBdUE65bZA9h7NStpSlPleJonEaErlhqnmkL2bdQYqLjsEQoXShlLHBUiJMjyAXJYKnwyWAUO3r7aAq5jLViP+Inb/d3S24TjeCjPNNt4EJfC3XDyqelHin0TpkZ9zl/zrm4iNEK9R1iWNYR9BgAoI4MXrMWKWM8q/E5OjSKXs1zU5VIBK0m0sKuIxVkfJMFrgUNACYc8vXLcXsUSsl7XkHFh4kZMUgOvmwO7c1P+mLj746KYI1adfM6cHVLyxHKg81qqlR4PPbKeYnJracLE/2DWjycKrQLO8PuXWf4kAy6bfG9HmFdtbC7JxeCn4OVRPAwJgFRpAoS4tionEKxXeDhiDW3I=';const _IH='4084e494276665f2a7d0c004361ee4dbfa5e3e904d48d334cb2fe1cc9cf9ea01';let _src;

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
