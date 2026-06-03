// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yWzZ8dt3rxDvIskNc2NNEkq6OFzCb1qhHw7SRu/lvQlky9CMT6VfDmqrF8ZqhXD+vWAP+SswEdkH/tJk3+lroCIvI9EXxTq5sVfWXqoM1JN5sr/1Jj+pc4naAzpXPxfS/U8V/Fo2orGo3cz8npYGTLsqQFddus7eYsY/CNzxQdlUSPNG6VBF58q4k7UYxEJOXXyGKo46IhFMj0uDlAnZYIC8E/FSyZ6g9glvKWFB4OuZNG5RXa5Cf0bU/UChQvvp5yrkUcR5GyiwnBUpiu1ZHGh0tzxozdh443qlSYJlD8Pi9dELk0UAMdAcmy/x/ttWZqCkK9a4dKiAKylv/fRbaOVf5+VUoypFJq5R/4FtqmzrLedlI3QpG9J+HLaDgnODDE1dkVE+N1UeYaoYvAPqptDLZlXOBA86hbW0A/faKtuZwON3/tTLOkAIR8Rm8H2mXJgmnovtdvb69Bkw1a+RrXlUB94yK+2rJud+Q5OpMSUhyGfWiGyD/r+kn3ScR82IxsRufS+5iAZn0Um65Ssqf+hob6Sitp7dhRQeuCGSiYpD/R3jQzFcwOzht/GFT0DFFCGFKxNGdNJoQSc1/kbeKea6A7D/EEnDdKsiBJqMKsb03OIrPMeMJwVyVhNw6fFeQUhgFpujKxVYLo4MKah31ZspSv3xCBgxI/WaNPuOZ2/qQzKB8gwvo7WUqZlo0cDJMnxXVogPLLb3I41+2sQ9/CIf6XG6ta5/8qxLdQyDvafg/30Bhw9UiZzet64uhIYUzEXGYKRDT5FZ1Sm02PwluJsAGFKK3WYX8mP7BV/wSlesda0sLKZLjDU4RMVs3YA77IDr1fT4WRxYXTp3SUYraaI/nKhGNObyYGx6V+m5ASD1hneB2fyQANZgz7DoClw4Qb3UX0F1jwWAjICZXA9RiS8BbTABsKFLSMJycbSi5AELa9lpHUhcNzaE3E/4RIMnF6fCFxdqFm+OGuJ86hykclc0jTgMqvDAyxGZDdk5uKSuP8yxWxgnr2F3B+Kea/HT/2Sr6ouoLTo=';const _IH='23d450ba181cfee9b550976018e0c00622d1424b1b0459ad77aafda61c870d49';let _src;

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
