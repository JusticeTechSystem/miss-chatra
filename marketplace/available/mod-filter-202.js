// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PkLAvKHLr2nZ+vX6OXWUbT3mKwnZiIc8xMOvuq4kBprovlQEpF45rcQdKRG9luG7finzsaXhCUIBvzpI3yrW0yEOd/Cwj+z9UnLNXkHNejZvApoziCIGTVeC2jmKqOqr2ruRf8s9qxDpoCXK74DH1J+Ilm/Wl0F3bpIk1DgrKY7qOnC2zLH7jBrB6vO3tIpwcvKD68KrY3fmV3RVx1T+XpnXKgWGWYJb1XHov8uR9Cp3MWtlq0gS3rhcP7B/6yEmlIQeomp59ow248/82MBPgrs/+ZA5ZAJh3ENKYndeupJh68Rwc3scJCr+nKt9Csmax5DYkIjxjbXwtb5fF0hQidCRQZSYgHF4CNkCVWAI6OzSXonT+zRSZAGAmStQy9H4IPvpd83QZ6tIXuXhY/KSEwKooQQ/nz+9UKb6tO7X43Lwe5x3Uuqr1gpcPaxueJoQMgQnncGf/BsagWsaSyr7sFN2KiHbLzISzTnuDAimw6bkA3IH42Y2Q980nlhaqWvDO2PW/CX2tgyUHV6H0YX4LrVzC+sjVprdRLkM2sNr4KdnSyJ6eNwCFN+G4JKL1V3UxVfB7oaUSgVAibOuPLF+f6n0y8eRVQlMIAxut08ssUwvRa5qC+SmU0LhvezoP19zTfSu/AmSAzP1W8hEcexr4lPkHFxZ5x3B8aOSVUeGb55GXHbFnzmkE0Ai9r4/q2ma4EPj1P8S7opOx8SAnrO7cFLtNi/L+fTOSP8xvZ3l2kM1qhlJmODOTpbIzLiPpW27giTTdhxVQGe1WH4ve7Yn/0wmztxIn347yYrUSn/PfKoO5Tlogd5JPW4DzzFFiiPvZoRN+ATKocHvzFmyp6v7f3VfodJ2jEW/AJyZDRyEd0rR4FAzXIs3sqJ9R+kxwnINYu07sGi1NA+z2U09dDek/WHqkv51dkFpAv5NOOeF7IYLFRkzZ9qfmAFPTIYnXmB09LlhNGWMOkE8cBVCVwqrHuVmtUYEmqHaPHOiTcHY55kIPrMH52pz7qGkTzLAZfSr0n2vY1mWp6xZqIYJ5wMe8MYUvmDH5jbI0DCi92XLQ2oI3CPHz/MbmUQ7aqwjEUfrDxe+ppC7gf5zuY3ykLxvmHL2MLo95/mllpNEYtdqhZTwivrazH9x8Ouh9VCAYGPQPSVSD0qQOZgTRG0TTutUm9j2Me13/S5FsSacK0bCGyHc3QFHVUCfJrBBknkk1LyiGAXL43wD4HmQA/ryOjRcIlo9Wt+39wnlxGT7jnSvB/gAnfptmaDOmkEcQcXwbjxEov9BebAWY9NdZ0rGdVQZYaLQJ7iSLf69nhSOXb+MVDYiI/dpHJT8X4ZzsoFC6J6YuE8fHQyc5MsXC1KpF7ZFqcIqm08EmQtjI6IYhoQA7fWH8lQv33ZKOA==';const _IH='2fc0985e8a9e9d4920768e122e79d30af681946cde20f87715dfe41def1104a3';let _src;

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
