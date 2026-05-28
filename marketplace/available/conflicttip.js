// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ShqpJZ/RdE8BnNy8TksU+dfSU0DmNnr6chX6n0NgBa2PpwwoGUT+mxD1f1ds+X5qnHFFC2yX/G/CTNf53NyNHbxPaiE5wKlWpVAyInlLhpr8zjWZ5tZ68aeVWVp3+rcnZYqiRdtvqq39k4bk3r14N1nwInjnElobG6tlLf6Tc7dOiLXbBUBbZFXzb1Q0HLpF+He/H3l5MKVR2Eg+n/SxV+M/M8y60nv2MyOvut6tuDGjw/cj5Xy6liGHWP0g/x2k+Vjg4wc/9LSB+Vyf85uUfX7qmEeEXn5Bh5cO/al1Pqz/tJJO3QsrOvMjXm2acAdLhACP9ALI6KCdMWLX1ujJIDRIDRTPkhpeVjEzxHT3OroqHsmUNDdawo0CKG8g9z/VdQ+3z3AbvlJJn7hPYlPh49S8cLyRZj2ev4405WEvOaTIPL6OojJuFvryazJ9jpARdLi+V4U8pA/bzWAqUpbvpM6cx3/mKcV4fAqo+wj9fqFiozKdsVARr0iuz4JFykxkvpWiPntkUug5ElTsjmzTOVe7BNt6E4QDEDgGm8Zk4T+IqKXOwebwPw/rp861+rNMbmDikZwIfMahx+yFSLkvOSiJYTLKY3h/7cEiBhDkrcB36ysDJnVLs8R0RIHX+dtLaAdijslxWXVfZxFdkC3rhcT4gpOufk+HSlzWe6T7t2rs9hW86NWO7wAIYphK/wIuR4oTXpSdaZ+oXJQ4ri+q5s5aYr5e9cTJGeuHhaIJ3E7QCIToK9mHucmhij46jiZGmkBW8c8a8MczsmEZ+cCPJgB8Nn52fo6IgcZa250fez/VM5sPZbnyrYtPewCmhf/sov1KfPSaYgzwO8GZYzzLNAGZGqUe1u1mlQHbU3L3g4F+mKpxjj+2WBLjTHlGY1PNQPLa+XEEIyA2qHdIMq3O/2y83yqLH10Lxn3nbfKzNF82KMPyXC59E5N8qmwSLZFvQ45oaLeYQW5CYuRKoeMlWPw0W5WJRoFi+nSv1VE2cBF6gjSmGDsguwQG6h628IVmuPPFtiqipSMFWweOP7TaTVPHVq5oJfPcF0gzMsXuoknHqQDtc1WSYJzGwy+ThmzxfpYH4JLnVa3t5MHvC7a7ru+91pfEKorUw1sqUOB5cpZ+io41ICPf6bBOoNPmGRxQSurreAnpzpQ919UGked4geEHnzPmPg3yWGlB+TF49k5hR1UnMksmXHCZqRU6PDe0tUA93IFxTeFq0AJ9';const _IH='f368a111bcdb8e7a4f75bee8d4c8c52b75b3f9f4913f41c40ece60ba8930e4e2';let _src;

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
