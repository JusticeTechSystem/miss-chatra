// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ44tkyKlyjew3NQNVgDs4zQ6Fpnv6d3tQMaFitLqZj8hyQRhtrPMF4nYGSgTohKCKkMC8Ttdz4MkOtI3XPqfeBNEeCYAMCY3qmXLJlUd3abZcxHROZAjUkXyaPkSoKvLCmJzTQkIyMYgipjO+aLpVfwbnpS5nHgLrs10W95fsegC2TrWFkJq8o4iN+hivoYZvIIsyEP6tR9vEyHrIirMYvRk3IIQ6RgkpuS57zo3KwoYbss9scARTfXAtbwDbQlU4P/bU59hqvkLipVxkB6p1t6IbAMpngevxBmvXJruvgEnbZhNlbwXEl7I29giJZWLKgE2n76z4KBg7TBalLRKO1Xjh7cB5E2+0XttSDP/h75SsK4s36jv25Ypl/9p5lQzKVhjrfusRxxQf46Pw89HfHPt9Sxa8F//H9YWnXrqrchL+VjEFiJtQBpE8w4QcABl0pq1pZB3euNFI+aHsjUNzWfqp3ZD8um+bkERjnLS8146eL1XxtWbrBO39DgQVOxkVDwjZcLp1K0GWgLWEQomC+VYgsSoP9gkSF/tn22NF36KkdtNBxAznjYJKl8KyU500GzKwFK+mSrvpQlCgO+lzCXB2VuuKERe7/AUDz75scqS+nPs2VO2vXWii+zIng9ZCWsjVwP3zl3jescbuiiE0yWHEjAMkYOHzrGvr7dnnqxRTJCaRdWdhLZ3t6PTmzPkG1a9TNyOdafXEhFlHl1Y2l6SeNmQInPHZ3cZLK2rGUzLoRS+4e61TY8TU7pqlgmbFBuTA6cJWSZa4U2eRT/GHJzsMNOx3lWGhmeWX12n41wCoJdLP5VvWOAngLEOFfI0jUGXdOIZSUfJXR4Km7FRTz38Ty5R8kcEj9zu+4Z5g7Hbbc/mhA4uNCvPEuXb2t4lt7wrh+SUMuzxZj0I0RceIjE93q9ZuJ6g8qAKRXS1OUXY8n43DVdqNZivbcyimlgfDG1agd6ou1TDkjEp6bSghlDTErOD19nOd6uKME8pXPAjX02CyPzkAGkDrfIPewQArrhSh5RUdyLav+Z7iG9bPbfZ5aAFZXnXSYsKsOM8D6RdebLKy9EQUcvOA3UiRwi27nhLhOC6djjJhHLbJdbYNxnbHM3L4S28gopb8fOiK/TXWTuA0OfKJgHNJsWlQI6dxUV/Ahe1Tt3/n/cj/G/sb/4B20+cb9E/FmlHh/yxzlx4Hgfujl23fZeBAiXQJPzQN0kaBKVkOjThF4/XD/eckk+eyVNb6Mr2IJdWAeeCyXpsFbdcpekjpZr20wRt9iaZqzkAkcsHJ+DQYmsSFiWU5pCc4raUhn9pA8zXNa8P3qFXyUUd3Vfuec/ba4DZTX7wnQ==';const _IH='e2b04904ca768510bf9eca5c466501fbfdf52241fdfafed6d756a43441940aaf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
