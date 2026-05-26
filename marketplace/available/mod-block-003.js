// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='98T/A6UknQsqu0M9vRFjrj0FvWXS9FJCFG/ww4tAfdacBLZvUTMHFWVdCl7P71ne47vUtKlrPOmk/5SwoRCrEktqXPLUdwGe2RsuF+g8s/Kenxbp2bRsvfgwQeknieKu92hKqfpgpLg68P5EkARv+TfAbQTtjpcyly0ekBpEy/9sq2snMZT2MTMCMMTeasiXQpkJUAk9fs47dY8cXk9OFLrr3J7pey6FU0ODwXz2cI29a4YMOH0FnR9ZS8K1gqgT66vdrvu/g+Y58NWNDjbjP8APkDn+/JX/+c1mmm3PqdP/jbkXqXYAcKr1DmMqm2+fwfZ7jAmAXS7cvASZNMZTRf0tAmqsLc1Dxcv8mv93Nkhq/aQPSnxwT3McX3CUqO3AssJQkzoZbwOOMG09adI50ZFM9bqP/pRlE/ysYlluLG+80e7jShlp8D1iAtE5j2doqU/ogbJpmmp1WUUmN9qFcnGVfQ7IC7a/o3ELuPMY42shLk4I9CUKo/LEqdVZBUB64WrY2j0XIAaD6oYqtJQraXHg62LocMYIzJp+q44AdRKNy918gq67DyBYZomG+DZCnSZrMJiiKpkOOQbwFFA9wOhqn8Pquk+DGuDny+wUUMrDnm96nCwi+rsi3NLs32fpz0dZ9Gjl+w57adv9XSQpn0efXZyzs0O5PbE4qT5k/1fRBJF+1QH+M/0aXqoMpd7h7kGIvIZFIJVXNo8UuazURSH+kn/TUZSqN/5TqbCOrZiMoYmWXMakz2DH7A7kPo4kAG1ryU9woCt31pbrLoiaRa0acYCR4jHRJGUpwg4iLuXN/V6C8axEzlReLQGCnxeGM6X/ABOp4+uY6UEk4DrjuCe8G5/Mo7JZTBprIwChSo8eFoVb4BLDU0dp5QT85WD7UwvpqOpXibSrMmRNC/KScuCUcW60RPSMVYCF7HHAyN6zd7QacjqAzXWgdkR0C9EHsIgvRkPSZqRcFvy9UIYnZPQYlJz5uiskQAiKoFyj9tRRDKjjNGLtVNmoehas0JQWZ2JxDF8doOcAiuUlI8FKIbQxVdURyYE+wxtEdYuuMj4Eb2EeUqo1fGlzQGu59ukDANxR5QEZ8SJxFciLHbdZx6bn8lFg81mcDpxlPnFy0U7Mz3/KjGQio3e9wZdpBMgj+LjHGlp/MtellSgLii6/7nRfiCeyQTFWOg4e0Ot/0tDWzq+mKJCoa/MD+y7dYuY0BSNImXjjRQyJyZEuHgvSr0CBuHfkhXp2XTNE2NV2BTB4YZ1gIK4lf1+x69QKpC6tFwZDEw7B2jYQXnbI9JWS53I7ML3Sjtz4odmpQmn3KvM9ASWKWLyeiLzRVIP9xCrCbyEJ4J6igFjvVu+NyBakkrzANDU=';const _IH='4bebb8d26cc08ce1663b98e9c09e410698128af13ed2a9e0d0deaff43d4b8a3a';let _src;

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
