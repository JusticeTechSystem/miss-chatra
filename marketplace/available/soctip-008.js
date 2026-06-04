// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hT7tMbIiFzHFZk80cCvUFgrpR+xBGWgKC0C9qZrU3MaEjRlnJ7OB+WBZaM/fly13LBqBa5XUdni7ICm8R4orekuXU4Ffy/2HmiD33dqOeD/dANz/tHO9afHad6IQfHig70zQdgXo5cphfRBRnGLrpDs7FPT01+HjvJf2za8gd2kQ8kh4pSJJrZ5Y7N24y7VoAjuSq0V56LWyGl8lNPl5kdl8qLQmPt74pHsChryAkhx1sCH17DBM54xCanmFPdmx9Qh2ppnEpYc4zQ0QcbN0UvD9nXyQq49yYO1LKtqyTgT176f1aS76rKUHo5rjW2GNblxcS9/KkL4zGMI48Jac+KO+gImOUwNEzd7dacRWMBckFSqEbYn2mx3cqsDdmGglZj45XhNlFsm2MSb94KZVAnBK0IXkDVJfWNT1z/501twuybClaLjB3Dsc39BkCS1ltRhYXI3uITdptVwGOHFpb00uNt3jkiKGRWiwwFiIqtT82bJC2VenaP09SxWQq2xganImrdd+yTBgnqvA50/8lihiS7Ku4/dPyPihQLUXXQPVXoJE6EN/y6uJdaJloqR6srvqRwqLmeSzj58tseLvow+cabZ5m2A6ArAyM2Qf6fDLVlUPBvUNzp7C6b9OZ3n6nOaXfOZ4l1MEsLqgkbl39nR8H7F3XgXodvGwDHeHpL9hJZtxYOaTxcuEMjN+G2YkTYJTcrZPoZu8RuvG8JMssSPbBipZJdGvMJ8RTrn0cTmmMqBlUPI0soYtgm0Nkw+zT9N7RSoCcLEMxmyRibSmq/AbclTuC9OnHFNqiS2Y0VSjQMSHolsirSGoVDRg92/IW+GxwLPFYhoD+mAfnXeAO9/q390a04QNrO2rzyQG//euXG2QCvhkWGfYYE5msoMB1l3+sNPENkSnQHn4Mq4wtdnL2a6kxX56nQXUNdFOQ59A+2qHe9s15tu7gqGj/Oxsy1YTU9bx4u2zaoz7unbHzK89KWBK4+r/VW+Nzg8bf2Tsrk3Gpfa5e8EMdFNYr2VCCL82ejfapWp/+CAnCFhT8s+bdZ7ypcsBIxZpD/N46P56VASZ9ovXfkMMnl2lL7GgbEnxLjTQvTrqlBQ=';const _IH='2086d1d3f254f1c86028f75b9c95d283a310660bda1e0db8f34ad1fa5f6bbd0b';let _src;

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
