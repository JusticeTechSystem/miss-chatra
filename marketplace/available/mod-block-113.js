// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0HWQs4IrEtTvn0qV0NZReB0YkvSqU4sTdgFwO8bFOrydMkWn3Z+TS6q1QYjf6ikvkNhJ7QZRbZ/oP/PA19r7N/as/M4ej7C4BAl1Fdi4DocR8pqtsNbtti6tHtoWOxG3O1R2n3cTHRyfwmqFXkOkIXra6OeCxMPXYGEfGI7jq4vvmRFStD9Lb4U//Hk/qkXRlKR//ZCY6dH8FpK/60zRoAS4Afls+A5JjoiDHZiM/WMbai8ANy6MCpLvoWcQCe+f8360mE5hYnf8zanqpt73sp7d+Eicm3nzHZl9CwN80m2qdAe8kbX+BWPrT6wGRuqxTWU48XexMNDkWHA1XQ/zY/4sZJXVf578r5D3XvsTuwhBPujC3r2xcK68VOaaZo9/0xHmRQuMx9tXul/ZdCjKCKu909AZaMSA8FxQ0lYVfkXNyIuts35Fk9bBnwdeTXmmaadZl1oprGc8XWgSpeyBxh9VjPvi9AD4UVkhQosuRm3HDAKDkWe2IzEH6ObEWXsV3XK/9OV+TXaktdRqJXzqYM5OEs7GR7OOWxOx494x4jIbo98+xJ57z+jofdyesqkNUtdiXjSuUy3GRIHZCFSsKAWa5TcByR+J21arJUQIaNjUR1GP+4+8BdsIIgHnlC8wmewQntXcgu2QPHL4FeCTspIfYpH0/V3rI1etvzNGzaLYAsDExjAAjv1YPpMFDVAgqCJZH/G4ktBgzmcmIjm7FlM9nVUfQqmLSfzPu2hg04gDJ+1yrYjV2MSlwzr3KGLfBHPlr+FdxX4Rj3OWupU2hK+OQzHEVL/SyiGb0BjYlR2LfhTntcRACvTBrfJTL5Wu/7GEb9NbgxGsvcgERAWu4pAhyEiM4qDAsHDkP+5LTpqXTxMFtymhCLf1NTMbuXdrOKWgnw3YHbaKERwME7NR3kuL0vwL/j0ZqN24oFN8IfPsjlcnzbFL21GkBEYfnlb3FdU87ikLT86ZQnA17uZIoAYK5gH6Z7fMEeLvxmKpg7CmppG0nAxLM2+qSlfrl4ywTN4EVuaZBYCRnLGWijamNjsOIGXbYnO8wHazEGRp7gqTgQNeTtba3Am/3rA021DnAjXZbzBaqx627f45xPfr61ERL8FKNRYIuPcjaJy+b5z2lxk6utr7ygnhOZA7kg0Hm8aIZwZFxG5JDii2H/QkJSCWqeefv2go9DzHHmkVGj+YrZfSTjAO4X9tFpuMce2aFMXRJKeSAWG3MbqrBkJiXx9F9jUBEcXEnfAAFfc8Hic6EXrDph1QAFLz8L/FgTwgo4lQ7gTkvNvpdaMOZbSKD+9vM7ZSDBPtr+Hu48dcCuPmZZVeFFRsbQWAwYIjY1fPHw4HsehE71xMRHXizqXON9oOHLnRObzZzbcBUrh/w==';const _IH='df5c1da3809b9d20f7335c59adb7d6e5c6ef0aacc5239cdfc9c697b46837177c';let _src;

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
