// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jXwYkSExGupZBtiDKeKQYq0D5OLoYzRzMHwLbot94b0V/uvHQUsPNlGm1LGUOONwQaircSLfydij4MMeFIaH+yInEV6oaJqT+c8YTG/Z8tn5bMl+ZDkQXlvcfaHmhQeaxutO52NYZYvsq8nUCGJ3c0he+MiLk10xm0N7OlURxJfYq5fUjy6vcbHmDLue2Mvv/KP/m1tJBGcbIMwvBCx/H1Zcc6j4PjIZ3rLgGvrvLK4F7PCyAnLnhIxgNFhYuG3OF6sNQonKJq5JDxGW0YJMHh0A2HQ5kkhuwXd28CE4nJ10eDcyZE7aFN+8d9oDV+npy33BoMlJcW7HgT+Bn4rcI3fyu//tae3kjR81hTYwzqw3/egvzr9WtGfWZBAu/e2dJOnw6QGaLqz6JCyHGEFs7/O8OfjziQEaEQnO410RhIqHqFB4XYAxbdzsx2izcjJ1E2NpWgxyUsAdf2+V1Pqf9BXRCs/i3QSLNLGoqWyFjAnLz2kEIIU1aImlo8jxPY7jD4DJdbnyMk7m+rSqADnyaKpzMI2kEVFHhdsR3pon1FTEGVrH5yGRsZavnefuW1LuTf87n7tom/1STIXR+Wjf1TF+OxmKMPxyhE900EEOcquRM72tUOzJEzCJ6O+fYDCLV65BLRtmnDdrLobhC5pt3rIRRAqub7Qr8Ha+URvG+/LzAEnFOlIAIlpNvaqe8HmIiwDJtQfSi/LNeagMH3U226bGe68lCSfRknXxwzqUUEZP4K0wcr1DWNHLcYnjwDkcnp7gbeskb/RMOqkQXLHdyXUP3hf/y3qitbboBjj7avm3GEcc5OZUpdl9E0fl9gIdzEsgSs6+uy+Fdd2n+LMhu53Ru0A4ZRCHB5LfbsmupzkNKTtX3NNY48X+hiUPkYhVPmsyuChpik23I4ATSTdhXPno2ORIJ72kiBwte9eFWmITk6nUoOu7cEhBRfa+dLqDiRTyHOAbpYn9u97Lf6MtpqxKt16AoIZgTLlf4cO0b809S4DnJAcofig6XSigzPa1NUH3GODRtcZudeGCQsD3Gi6dy8JkqNxHCTe2449nDCQ1DfU0GF/wt+nMkd8DNBNA0Fv3Q+ScnYN1VwKC2s2S7yxtVi1FlsUMbjckrfbUpWsIW492qyVfaiB1ntszslPYtovA9HgSIYXOuVlhKG3NaK4vunWDgIuhpSvD9wIupyWzLfxH2PQ5hnixvyei9g+K4MzHOqkvRqnmOyEJcpYirDKmCwSxyZHL04SOxKvke1mvqtDnWU9Rx87dLGEAmp+K9GD52IinsDUJsOA1DO+Nx4wsRcZjvhrBijx5m6TQ8JQkAiXdx6H94LlQWHrC4dwc13kkPrE4EZdeb7dc5omqV69NbO3OE96s4iTrGv+T';const _IH='50c26d174518fbe8146944415d6c8c6e94354168b069e40b94befc1f062c229d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
