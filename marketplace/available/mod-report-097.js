// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P9lPRMG+W+nLAHgox+95zrtOxxKPkyOULkolo9KPxS5KCDlYf8P+FoO0PBrYmoSaexYN4pqSwfF2Tuxph7A3mCmS3yEi4xZYYs+20B/eu/0Itd3HsdcHcsTd9uYC9L35BAAFhVjE7ZarfVrgjdDhdXUEWpn7OHy8Bx+sMHk59P+rdesr9OxV5mu8bg9FbtYHN2z8T3crfD0nXYlmBrEaq1gIpMO7C+GNk8fRG1/GFyQJx73pBoUhRcI+0dnXAUjfHi6jmW8ykGZe8LDt7OIVtjL+sPi49NMThRIcfkeZbnXkI8v4h0vnN0FXMlJQPIsqMpVD6kuXKBF2W0rrwU7gedgMo27gDdwWzT5Q1gL48RVEqpHiQlc6ZrDElJAQiVd/4mGI1gzczfsZFGvwhfcMhMhMK0l1DXPP4UN8Bk1owyKt+qh1N8SruKcvNqsBVU3mEHJiEA94u/FtRCPd/xXyQxDFt0OHfOnpmuJcXH3g1TYvppzOLKH7crAkiR15T3wDvyjk7ikHQ8/+zsENI+UYpc/Vr0sPn++oZZAqhP0Opus4/txG07lQzqheBEX/9LgyVYk00cHU/Arpa20MVuuJfuaKfcyiH11FrKVZahQm6wf6PEH/RFjDlZjhlDy2H/yxZQLgEubJoHYIPxN9/9cI1SpecVVJZrxdPLTGKq2RKxiaDlU8TsPpBF+l1rHPooYZ36Ud3yzJSUUr2K6/7+3ZMB5x+WZ2cCe9qBX2T9PDEs0nRv6/9LrIImayajzNEwvPI9B0QI2eNzsmJ1CE4u1JT89dlydG2AYLOT53L9awwQHgA0Lf+CORxZ4EWXzP74E8ck/GA7Fv4YCKCa84cvChWrT4uDzGXU9574JqXFfQfbZ6awfo+izJJIVcZGGdRXqmpVlwvakKVNayFFB+2nohDqgTitGo7EpbGDmFHCYlOS4rO1Ke78hDD3oWJl3edcJOG7etHf1wiE9HOY9i2vFKoDrtlfBTGYKJF+XeMnix+zy1fP7iTDWlCIvjd+eMfVgwSv9Q+SKZoVdhmJYOLugqNCZrDljsBDeKDXZ7zQgC8zfcU/QL0M+AGeoJFe6uw54rA6sR/w8Wdxv16UhQUsOViWhUtAzbQRU5gjApkCHW85AcKGAWyDgYdif5cQIdKX0IfRoN+/5AWDsd+TRNMzIHnCsp6kR01hDe7BbCP6u08pte0xARop25PEZiPO9B9cnHJrfRWUJzBlN9ocKHxgKAP0fGvF8ORlkgJu11Ez1qFjFq6hp1F9sDR3Iye6v9bbM8qF9u4O3OWpN5Qu9Fe/lMRQoFBbTr4J0H1UFH8+d567Zh9qUfKKdmcBFhrQnQAgS+uFOcG+/mRBb7rN9ZzS4RDqAi3Cimi7gg9ozYPe6t34U+s7c=';const _IH='ff7591aa4cb5cdedb8c007a30911fc006903cc151440aedfed2e9422bdb97c85';let _src;

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
