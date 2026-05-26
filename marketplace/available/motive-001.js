// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L79CKdLv0+IQz+Z30nT6CJ+2xNxFos2NAQIdjJ/zcGJMzUkpZibJJmUWJ4jD4/bqDwRQozKRpjtJtH8Jr5hnj/1zyCDU6jKk/4OuVtKibSeVseXXpQaDc8MdAyhHCC834g8UFSOzKtPqT59lSrqRDHm7Qlk6LgFm9ddH1oWCvT3PvEYHaCq3RWkktYiuganlkoqJGl1ah+RSL2EpxqONoCNooL2i3VWF4+K3w/C10qIG6y3VmvbPW5MzpGsYQwG2RXtOxiJPW1I+ZkgZrj5dUurubjtteAHiyyPVJTlVjeUB4elxkS5Ca+MJ8R8FX6ggi+YyS41vTwOm8Av1RBdj4waLPHeXMWerXfJt5XkO7VN/zI2AglHzZOYEQ9OzLCwJ2AtWv9KQrS7cZ5cOjCje924uvEheNJf3pf/KBabjr8YeceD5J4c/WFn5h5D6AV6tlE1pk+YCHZ3aqtqbXxxlf0WKwxWqlLZtZ7PxvJwfkduxNDsxMyWfewNFNoNd3jrXdd4bY4x7e+BqyXl+KgtElYoqpYozabi1868PvU2yZqS4EDGml4uTzDpzyxjyJiDhkHHLsJ3kPV5t7AErD3YorBfzp9LPioHKPDZsy8N5zC7XSC5ge3Xh0LILfPJjf+KvkUUfQi8D6q9BrHjaVX77OnmCQM07RLwgsTfz6Jd8dORbVYqPnoSSbHTnPK5PnOJdHLNRwS+Fsj5R7AiQz5rA/A4zxHWo3K4lxzuXwHGKRTilIhnLeNdWAb5/yeNj86DNMov6RXqPJSbzEhBoRtFlXkHawjXbmDJepiVrlfeeTfi+vMkTtFHH1HiyWsaDURg7WJmkp43PPDLcUE7vEgZs7Laal32Rin8N8ZQROStOaH3utngO9pAVntHYyTumRdoXKf/6p213k0naPwB16yFNRuW4yAxZE1gAnp9t2BIuaj9W04dxsvvxAEjDCJgcslrcrVQdER8p1LXYSy0yoVfiz3xbcsJJRGXicBwwC3sZ39fs4P+sOoDtNB43rIIpMkkvTqkjU7uhZncvuXRXlG8=';const _IH='601bb9a4b8a0967cc2fdf115e5e5a6f2f162a7aaf2d0004a945799cf7d9335ee';let _src;

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
