// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bv/qSlV98wqmDNAMpXQwGVf0AloY8Pwawy5CHZW00iWsIZ9XYxbTX4AazOX19rh4gdRhpJp9PB1DnR3qvvvuPUX0Kq8AT78V2EGkxvXLgMDSPb62RXa6nAucmL6lcuvdRzi0B7Gsuvq42zauM7B6bLLBxks+s3jn8L7tTkV/iH3OxZgq5Z+mlRkkqgP0T4GHwk7UXB7RqN/xDyeP9V7h4GpIOwa4W5+LuxULvqANKqF/R7sBk0B2RKqq00h6u4J24GpDxWTX2mJFRtqF8RKogmsgCIx0AyoE5FljnebdCTd4ASepfZ7nkS7T591rwLp3tXZsLMsXUg4bJTLdZihjcTp+YG5xTsFktc0/r3PkC2UsvXlNvkoju8Bv/W4mXcz6b6jYy7Gi423kR3jXWAon3TvdfiOt9ntcjwNlXg7+3+yqZvwBA5sApXhIk92fUxr2J3qiyIBDA7EfWyrgJpBSMSwOlf7fjRh8bthmETPUbRxBLNR8vQulPa8C9whsdwT4HNTrLlWMLSxMtuvGuXjJHC5x93XbGQ4SD1SPUaEnKhq4Hin2ijlBV+V78ws/t0ZBb1c2cPGbIjWSGLik0wK0eWcvYxFXbTGXgpOtlu752R9JdJnV8dmCtAJbsVgYcoXwl7JjRNvJyj1eggWeIvHl4nULTXRKJxIBgjXLdGKhM+h3sbaFhnnAqQuXqNeQurNdaF3L+7HDwIo/DkXRsgrBh5meF3lmL/qZajvYusV4lIRRR2q3Hq3TMLjjLy36kjrA9mN5lRySATtX4Dv6WLsUFIoCMfryhL3N9wf/agKgRigYNe0wv4wMwyceg91OZmto9xvwDNh/fgQR17Ore41oN8Tjiypf1Sklrd+/JEtD5PP9PHxlD8VKBmBO7pbwJOha5UgBpw+umVuDBOx9bCikwy8b7r2bD1X9nKl+VJS4LL7NqoIsxGnUAGpkmIfxE3BvdyGwB2fFVSEV/Hlrsmd8K1NTVO2Qh3oPJxUY0hcs9m11SD9Bn1+d46/n7L0QJ8QVAB0ewWqC4J0og/DKswOR16FEbUnkLYXm8MWdl65Yt5k6tt6kIVYABWRr+lbEUByP0uwjouGAMPdWNQQuG+6vNCZH4DFPaSk8G79kPwUFzFjcSEibXiZGYeEp9JiFHAjtdNL25CPD/NQNA1VCV5cFYnLonc3IGu8mgj4Quoq2NCPCL/B3cUnMSZ2cAJAGhTegJEvTN88A0En/s0iBaKWosXOMmZbqh+4ne3gv6irc+srQpZ/aEpLJSPdguZPi8bi3po50AK/lLr0ISNoJk5rSq1f2QFlFbRJZ9AcMt9/dgXoXaEBJ4gnDgm7EtvlIFjJL9SzUwV/POre2ujIC83KOde6APZ9FxmpFkg==';const _IH='23996d9c9c1b39200383dd7fb6bbb9be9ad442f69aaa93f9e914851907991dea';let _src;

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
