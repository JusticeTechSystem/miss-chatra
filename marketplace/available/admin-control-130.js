// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VqVmx7i7LUgKjZgLtdWay6pUn2vZociNkXRXJHJ1+3ylOq00fHAZyNPW6yMzhaZOoKuxJbDuYyGnLBn8hButKU7dkiPpZ+0k1mZ4DT83qCl9YwwPKSiM4gXNyb3CVtTXYB2V64dg/X6Hr2XqN7jYTMRlczOXIHl8YN+9oIj7KaXI+/dpCCAPNTyQgXgBSUx8I43VvpNSQG0TOmq9u1zxDG1P5hXAizmRK/gVAbcFW7pdm7YdKv8Ifp9caKoXODskuIKlTr9V3kpxii0kjslMCqyHDW2cc87g0CZu34NnE4UoXvLEEk5R5ne0XRk+uY9UpcLPeYh6IL4CGKjORzlKIAI6Gq1XdlZE/lQDx3+eBxempPNWQHIWoTscWkSTxx1/w6iZ0w39qVyjw7HfkzkuC9zZG2xJmIuu3+XmtPNZud7csYA8NM51e6gBhsJxO0Kakp0YyRwoAeTtlqDy5owamjpa/Ojdgm7ZCPcDzAtT/t989hquw+hbWYv+jKr+qtv/g5rm7l0TOAWu0myygjlLyQDTz1/C35HBxXhy5FHLOPv3UWa7aszqI1bTFuWpnOH2epZSXcvV/VWVKrB+X6aNmxLVm00IkKDw1LM9jrz8Vbs8eH+AZfHpEamOED8t41oJ4oMeia+WIczzmWI9NeGyPeaqTmW0Y64+wR6S4p8sb1q15+SrhcbY4XA78rd/ySfuZUCCe2hzfQGySk5MqSYfSVA4GcaOciwhTO7dJYuHlNcH6DHjuI4WudaF/UC3qjwoWio9fAJNEMpm7R9IAJTNuFHuXth/a0pIreaoRtJ0UmrMbTQz3yeDs1JU4D9g2OyUhcS4SDutBOBAzUnLB7sElTsxfNE3fsdwEvDfBeu6e9w3CQ7/vz2FnABbhdGYeTFIt4dqODIh8PDbkmwfpylqy7prjrVIY8NYWuz5OoZCUJ6BmF3xE2PXO0YvZJkij3lazz0s1qu4E7ZkZEv7ZE9h2PrMZf0GqU647rAuzUUva/iRuvcexyGWJ60I6SFbguHSxY2HeRJkbJk=';const _IH='d074aff5a6e0db97542ac4954a88fce9c0993d30e4ae525969d1d97730e0a0da';let _src;

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
