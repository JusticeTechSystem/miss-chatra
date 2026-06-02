// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5rhjlW3WNQoLUGHINCleraKx5awcaKl7K8gykTyaUb0f90n9XzlrTmb82AIsSYPnkRt0bWfGvrLzO6FGXPtjOAFJkmoIt30QZR8ONaR11MG22y3uGMncMrE7IM73EYt7t6guS5DF914scpJirlzNEgT4+cYPmRYQpWYACrwdzBEONQ4/i7JMhjGn+DrMaAdKMqqAdcjCkxySd+A4/kUBGPintunddtEZt+3npdFMt6JNQ5oMt744uMs6URyfZNFE/OarvgJpU+ZFNhapwcacIgHSrLGSPjwdokHAYkLDKLrGtGRkQ8HpwJvnRq354B5wWp0ZjPTd3FFqgwlD402E6lFD+mEH6umKdX5MT/cCrT46ia+YaLwUNWpbcJvPrZASCIlQCWmmTCNv2SnBJ7OOxi5AhPl6boCSQqOQMPdBp/blmlKB4eDKR0ro0ZvE0Cw2qbDAv6+xGO24VvYcp7xIrT3fJLMPbZmTW+DTuo3B37ZdO/Uxpl1UaGa3dN//esAZtaolAN4AIPMDTQXvF4hI6Ej0HjimI4JzX4R3aBbh25ry+HZ2VP+IVr2Q5LCC4UXP03/L+3V2zDw6Lgv2vD/OjLky5ONj8UiHgnLtwE9BCWUhMzXCoFNRIIS2ZZDycEqm/aK09ZTlfulqi+eZMQYfz+B1SWO1JDwEN4iNxvnr+xhmncFrTw/eb8rOT6a3yxqjHfjQ+xMeDj9COCAMgEsULWrsLRuO5wRCTSplchness8Ma5t/4xEvO+DQsuD53EtPBDYU3gWEbvLJRUvYbJ0nfTZFHYgTEWrdngv7iOWWLsEk637kWYoCWulbUy9GebqpZWFXE3ZTH+QvkusJpFuwarTOJ9cSAeQgU/Qv2Mybjb0HLyZhR7uZ9sVgfBYwr+nn+QHJlUVF4r59A/gUIstTKXHmVJRt1Tyk+qpfbnAzXhB90QlYHvR1vnmc34lFgmal+nmNU5A4wchalS77zfYEeWVuh+Ydb1MuxeGx2wef899/Dhn+M3GbSuMvdaoOwAxXSGcUzOSLgzb8LDZCVNcfUAWz2C+NXjZpPaiTxDZKlMKbQ8JDjMYVTdUqiKB9R1DCVJqluJH98LlJyweNDHxk0/8kfkaUuaLIBCG2tWYUxHBBTjcUgwqE55D2YVnrQPuYOK4iXGVzDjGSB+6lEofgNB9l5KuEeTY7TjZnRDc3JE0007BpCBArAvvrhNV6ZEx7nk/N0tnCy1qxDu37W3xqXG+jCOZcm7E9eTZRg4MsGByO/OyXWfuRhlSQv6dcGN90he1KgUaqUKRY2pDySHy2ZJj/3wYlOxsLY0woSrthU2XfEtZNODTGvu0vVc8pZbO0ScebdfruZJeVRfO8uGI27QcokjADZIFzHL0KonHT5aZxuNUnC90ayQJY0OaFuek4oG0=';const _IH='06c72ea88add47104927172435e6973b2c73c5a567afd71c62c54f12e7869b73';let _src;

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
