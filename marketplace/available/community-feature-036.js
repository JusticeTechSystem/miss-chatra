// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BI7tAZO7pq7WOljcMAynfFT8EUudJbhMioJPbsNM0QSWvk0DqLmWNvDD4/ZrRW6DURAV34+Rpp0DvHmSmMT4BenjpvlXHlimouW3nf8ZFN9hfy/mvH8xeHluxwpOb4nHnZw55dEF4Tyd2Gof7rLQwgwb/74xu3hOv1WvvYp4oorL8o2CJwKAvdlqQB64mrKSkqp1hT208b9LTcZPnX/tvE3gzi4CCIsjE9qP6Hl0hrgEQ0xgnLGtR0KX5CGiq+l903p7+bschbOwuolWUWqTED3exGMUyRnkJP7uwxvQfr0lc4bKIMbR6lcXYuX13eCDETwGJHLNA0P9hjz9u1UNrvjAw6CaeaoV/MDHhasQYyaftclU3tgRarpGO8lp5QuHSrfZ0ko28h+PUvyj2OHZKFSlR6/QJJVV4RjreIYpqLeDv8RF6xxAeJWqc3suXxqXLNrrH3rCnJSXHgBzZNrwtfa8pk+TcfQW/BiLFISC9qSybXciDshJJvKxqh3jvbpppqOw4DqsT3I7Uw56mBiVx7ZFNJTYFsXmNHgxZFE+BYmrz0w0D3xYQjrfik+JCJHkTYvdNDhXnxU56oFsUW9wYdG2MoiM8skWnGryDveM7XjeTachS0K0no4V7o3nJPrYLf4mAqGuNODyEQFARH6G26jn2pv0QkUbk5Plj6/m714CNVN9RaG8WdLRxvnJz6xZP17CN4B2xVz+DdT6Jsx4aC5Kk6w=';const _IH='84ee6be5065b446e711a86d19bf76e3b70e877de4bf542ee001238b583106ff2';let _src;

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
