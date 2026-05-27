// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B1VK4YlHjpK9QueFKeDgdP4ZQ/ppqmQ/2k9qUflraIXo8O78ocPU1ZytWwEShf0mcZOdsXEC6uOTvIeWydneSr1E2HBUaIZubJXUwbgEEMQbPWupRINxYxqNVImZW2+2uemTXblHvPdwMFBKoRkc3kxp5mmgp5hmCCvzN0sBlJUyk5eLTTcQB4be9gDbRJambw1rd4XAGDikhtnw5ZIhqvwAuRvdeCNgyacVh/0WPzDT8aQIFV8rZzotYiukXKLtlrxashenl9+r+SdNWNpr/3T9cFnTJaenZXBNEYEtq3lt3dYpgtIyzkkcST3EcECdmv8xyNfHY9ECaFhlUghWWmvjcKi3ui1mYMMQT/yCDIaoy1DR+Ey7lkTa9bcmB7RGuE7N9XU7tGCB/iW2WzWqULez09mOaEAXKv4OLlK2az7hbnL/sqSMLvVSQIWgtrptyXna2jX8F1haCJ7vuF0fBRdfdw1/Fe/emF2A8mEjOW+XhcSiNGZFU2Q2BJZ5KYw39owsi1M4bAUNJSjPnqvChgHqtRmehJQEdGh1nMm7+7gKjpOj2Vh5uS17zdGC3xIfpNkQpvwzyUzyzxcJwQ+/REsuiwjWwjKsSM0BLouCf4vdEZ87GcrFpOI1y2nTLN1kKkW8mX3E11V3Xf8umSJ77qiyI7+rq2TgJCXkwWQ/fewYsFtal3tyIMN8N+ngdWGHGuRoGxHp2z0BqOZyPI+XLUxbmxGBUFE+pTxv83/nRpNDqrjjX2tF39UdityXfOX2wxBSDpb3NYOd6RZd8392TuVk8o7xonEDRfUiAGNlP7cptJj6U/ECgPmWTxy5TQEWgabqmhmo/bYGKuTJYwuzI+V6Kw5+mN2AVzUNH3LOC50ETVLD4fW6NYTj61VoDVgWSumzjbC3aKkG9oJ9mrdnXPfjuGVCejJ4X0O3++zdNFwElJkpsmsWvSqZCzAxLNBn264jUqkcP7cg+Tys5DVqzQ0jk13tMlX6MXFqki95qgYUO9wYxm/RO01Lm1Fi3gn0QjyYyyio8jiKDVBZOEwKCkrB+xJ7uYXVCAdbf5xTvPlaocsSJKBY1aFg7zyYMjZ5cOA/DS6eXJaW3k1KpKtdOvuVlo89RieO0iOIzeEMRSOONXGZOJhTtOfcyCOoNHOzp9WuX2QmipCw+1sGOKxhBAPMwIJcoXyUyBCVWyFUDT2RDINFURuZ79uTlM5GbK2MFsHX';const _IH='30f6393372e019b6748711e466ea70a97a7a20e1e250aac412f889ce6dfa8160';let _src;

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
