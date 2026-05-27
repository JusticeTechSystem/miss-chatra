// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zlDVxvn5AGf6jK07GFxZjKR0hf/Qj3YJvY1bwimQbbf1GtKeYhWP8TWERkk2PHHV6dRSLZyWlxyEDvwJusiZuhMiDk81YmoCxJPGogBG0ePMH6CcjnhWXmiILQeBpuVJDJRRxPlehivmUI5KVaqnaTXBlKcRfktLehf9XXsHHyqvjASlN/kFxdWz9ODUvSW0stIP8HK92mVknxFF7VrrB/n1r0EQjDyEAhLGEV+K2g8D3NJfQgYtNIPg2Rs/MMtqt7eJz+Z8fUWxEY9gSwnBXdL5VgADZ4eR2FrLnLR8Mp7IqJ5HSA5qMZXKHkaYa0RXCPlx9hDFnOTfrQfIieAazGJvFYUCvc6v2fwoNj36VYwtmu10UH4GA00GjqQ/ROF+jBLqZUDItPbqCRVoM+X3QVZ5c+DfakkHrNf7La6+no0NulPOgvrNXFHP6CaK0D71N/0XwhQp6iB7zsY0L7MnwOJMfq/wjWOy0BuydfiC7cLS1KewJolhdV7s9GK3ISJg5G7mWG58tAvvRjXS2lwJDmy4RSWXAsF255oEBIxABb56lrDnvIPZt9b4MIqvE1QXKPJMoLOv8SVioDg1uuRjuUGTczfpFlMYSBTbH8WUnhBeaNu9x9xpX3Ae3cjGwyd/+/nqnjrT+rNJIB2cGNDSfjrjpHGA6HzeHr63nKlEyH6OHrQzKJbsK7Zt8si5DNE+E67K+IJ7M4vCUJwSaBAUktGVkK6Fzz6+zZfZc4waTyqKSY2xEDSkae4D0Fd5kFoy3AKFZ+Ge03frzBHhtYoTUd3ZZk/7CHbbrWPX6Cf8bqEU/D+6xRNOctzDYiJh80UvuwbMt4B12GsSTKNGRR26okr9y2+TxLVw75qBjqb1IpiBqZV+W+tvdbjuAgbphxGxXuuDh49hRnVfW6WELvtM1bJ3Qesha3m8hWAFmt0U5QQwLWvw/IlszEryhq5Q+9KMxJPEq9xkMlPungkOExig8YjHU2BbxOSSKD02MGvjR9w8sCuWU7msL1nZEpSC9FD+1oi9a6odFsH4c+fQcGqc/buZ1jZMBLhZdx0plPgenZpppseE/ipOKssnhcFVuz58k/4am4oghVjEIAl+Et1oERTBGXgZShUBTHhDzLl9rBBa0fOC3KLPtNELnGy0mIJLk+0touXVeF6WrDcBkKWYLmmLeBqAHRF+wPUVK56Ciz5iWn4YMTBXI+xNx8zGb0Kr7AXQD4Wy9/7juhEE7HqgvElxlh2uG43Bcr6/qJi04Cvs5eLkCnpRJSpXY25G1Isvlj6/aecfmwB3STSmgRZp00Pv/77e8wWUlzRBp3xoiaKxmYfgOwicksLo1PMi7uaAIin7XotZ9rCZEWnkuABqSZkoKAg34RupEXCCUgVT77TvlrU=';const _IH='5c9ffc3b5c9e0000d32598332ea3b1a2517692372f37c977dcd3b4f88cd5c01b';let _src;

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
