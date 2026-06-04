// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sRqNmYqePbWQNT1/2MSv9oNafIcOZr2GwYO+Q9Br4MDDFkuwBLX1Gz5IU3lb5n7O6BUQ+TuJvIhvZxCp6nL9KU+pTsWU6Y9QPYhv180J0NABOCKjMDT0lnbCbe+HJwJf/+mxICjvKN1P9Ibhalv1chaliD9RG9vNIv9GyyUoiXB8xNbAtbT/cJnU7XqnEu7P/bf9Pp3wSq97wqIBMKso26e1fh4iB/qQvNe98AoJ0MfAqba6cz/d7HL0GWgogZC7evprnO/afqQMHhljd3FqKDmkYjeSMpRKn81xLg9BGA6wcXVZYSp9WxvTFjze5HtFpu89ABvWEgGesghaOBBo4+rIc0EZmnzJyjYO04shdyveoZu2Di1dzVdsAX87rteGTDycKkHDb3cg1VaRKutu4KwVzKozDTGGREggUSQ7fSm5eZ7niMcVxJz51cMZEDVYkd9gwpVYAJgkmwEku3pCi9lr8JdlIhBT3SF50xMcds8wosaQYiSgDfZLOdzUUbvFq6FZYisRAiERbR3RNtnBcgpaprgr98k5Bk/FUOuTXUHU3HVOS0l41FOSAfIzJhBZ90tcUENSVzfdDNuiMHjCBl636shILE/OfhqfU2yNqkjgWgswq0eLGjNeUMOpkC4gtQ7xEPc4APUTwNaY1qJ1GUYhk0QwtqybFJIG9u/Q4xihCucMHoWe/9j8cdFx+F5jkK83yLvH157O2BTjtlIpjTvnnlec/ZSrUi7vZ0WbfXFmM8xMi45prH9aJstx3QaJ3v5Mnwo+0vLYYY3CN5MypBZWFLoBnaJu5daJHucjl15fz8/CdV+EqyDc1Uad7IzJtOh5knPLHHqnyp4ldvUQBwOLo6DsbtmJyua6Ud0z1Hsp1kvbeJiyhNqFkQzx0IyoUdgwi4opZxMB1ow7ClClCjkVxI1/qBkTFW9UYT5Z18OvPgFF9Lc+fpxrRAftv42+luqzwMjuBazBSDzFFXBI1FbmTDDRuXzWh+p1BO0w3oGn7PRZBFU=';const _IH='66ff5c31046ebd50f9e61dda74e568de6ab2f312a81c6a96952651bf9d5f26df';let _src;

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
