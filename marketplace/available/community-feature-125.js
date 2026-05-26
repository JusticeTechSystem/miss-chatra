// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='naQh0itRaHk4PpjnGgJTWf88haBKA9+Ci8rAmuwClYw5F6V11VP5YC038na2aQZE6uAn91XpgVNMCLfKR0KjknnNvT1mKTmH1O2myri7jVUR5JiLVCHIVIEYFmxwiKDtgWEfImfdsASzm/wM4WBWTFtHcepoDJ3ImGpvKJ8aSSumoAC2Jz5akYU4JC9ldQMS0ZJI9ujB48GQazWbfgmWJ4Fe7hsJ9cnzsvSZ7JWi7V8X138IuAwVoN7io4OJdJJUU2RbMnRmk7KyXey13uPuTyMKwVXVwJs+v2Yfj5NZO1fD/+MI/9o6E05QhQS6GMrHVT+8JjRbfrzFtcfkpLDga+x8CDD2J8qwzRNMcKfoA1CrjQcLgQXtAnsRDSgIq9r5fvmkIqpJFHH2uwd4+uEOcGytLNEYkBs74miCwE4bRnKmzCx8QjgLdhRr7YZkLYhoawXp22WrOEVyfStN2zHWqzRuwD/PzSQtKLFkD8liFrR6bSneio1Qju74rgHOizZ8Qbt0rc5RpNg7NRwCBVs9YPYtircaltaSPl6bejd5CwnkEWyv0sleYfR/e/mFrhlNedljmGpSw7R+jV+jetMWShK7yDSJycZwpZPbOKCPBtamS/eVw3BFW6OLHzNVa9+0vO5k0lsV+PKpQ0xm9iLkdV0Gqoc0KGLMuKuG8MFX3FRKyvNEgZfKad3zSA3fzE1KZQSAUhqHl3a25SKBgje/FLmZbnXGljWkBFWBOgkhCqYpDc26tRVQPrul';const _IH='c79576f26e435616450a781c878ad9fac55b4a2bd0c052240b9bd86ad12844c5';let _src;

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
