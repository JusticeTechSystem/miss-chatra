// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1yNLRp7NECi7f5bKiMsEQzQ0ZGQlv8EhoxgdMwhucXj85dDhRrOUe0nXomF2bxrzQV+4zd6k7cvP4UiiZ5CG9AbLbSnn1uPS71/uUmACE5wBregyPGzqgmWpSX8oC8EqSwWjLqQNVcKRyHHeN7KWNco/xDkevJ3x6yItxJRrGAQ6hz6tA7QBbAdE7B6ZmaoPYV8w6WEq54L2i8kr79Foov7L1Y2mXd8gjPkbRfOaZCB1ppbD0qdeuJfn2XqZ3ItzfY3F/fua1LB9yGITo+taUoScE8C408/YZpcZ0UEBV0PfRmZhlUvrXG9qVYDPB89YuUYpzkW9L8lAvyO/Z5ygNGcGfLbUkf/t02SV2ff6auXKvenX0EXlRL9tBvL/bQyrmcUlxs6ZiJzVc74O719BI2WbBpQiVj92KswFvLX88eSRVoJrgdkDzlXHexEfz76C50bSdMkxI+lk4IlEVbCmYcoMXcX5tCfYLlPedX7Xa9LqQRS+swLsmx40QeKqOCLd4Mxn4gMXgSUK+5BOt/DU2N6OiOyAmqItus5ywUU7VJK/QAJePUfSDz4dxhpnHPg/RdS0nsenDuLWKVpmq9o02LkcHdaoIsYx+0muKw7C5+Sz/6ojSv+g7GVy/9DK2wBkhbZcnjzepuaa+3cC20PQEzsNMEgoWcWkb2QSMcOjIyPD7mor4GXryR+NMAnu2A9hGuNWDZrUwC9+FekD5rL/a6eZPff';const _IH='68bccf4bae6f9b82179ecc87909929b8bc18b432bb2b69adca6631faa502b8a0';let _src;

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
