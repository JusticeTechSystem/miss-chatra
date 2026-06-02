// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hkSaSu5rg9BSx4itCcq+1+egXMgx/fUm0fkpyeoKqc0RostXvpCCq/wmo2sIUR9pF1J3ixgNrPwF8z79kPT5KO19ehhOEmLnsB6HR7Zn3LGmiyUHVPJAQnURMk2X1lK8VnL78DLGFexd4oQB7A3YhpCLZRSkKQNtyEOxZ+Q8B9PYhwM8MLpRmjEpRZX0IEDRha8Boo3wcMDtuET04Eu6z/Dn2L3MpVyLTAIPSlV8t7uSyrpBIbVnz8YWyrCKQddxL6lM0mTQi98fUoARuUjc+WpqvsYgWzAyl9scpD0Z9W6uADEGy2xOUm7IiuOs+bZg07oQQtcInGjBNGnBYrM2Ulx3D4y0EoU5dC9gWN4fHxYzTXMH6Nr8tpbwFn21nvYcQhGHj8KpKrZNjJk5wr+ni7tL42rbZ6GSAWiLGDTzj81jEsmWRU+1O7SFgDtOJTkb0law1+8LVy/54uKe+FzBBfBXxM77Lw8QfCvnhpW2FN3yAfXbsIsC8mWqDP7AJYhecvsCoNqfTtRkwdr0YReQo1V794YtI4ZQCX8C/VoQfj7Kat566PFHnAeQnTwmSFquExXt0LIjsPUT3FKm+vZWirfkIBMD794gK+fMQlrEMEJlLdzVlG+rndjfAMDvMIMO2s1gbD+EtFafBHfPXmB/f1NUsLtpOJgdAizHXOd7tdtbl4cbsknbbPNUxpZYtJW/8eIErewXy3Lo9EQQsehejsGAmDZXJWnu6ZWzKWTz63g=';const _IH='308520a3e68698f904ef61395d8f15d352ce4a7c4823db42caf073e6a6d6853c';let _src;

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
