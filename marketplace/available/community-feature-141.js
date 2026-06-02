// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XnqhShSsKQPeHqG3QCz058oPN9MHt5z680u/opvTr1BwVLjNV36GzM4TC6GUwPZVmj3TVAqRh4BrGrAYQvQdbpvDUPkbDFwD/hkIwUdIB0StWsd96zLuiuV8zPK0rTw70j0nFKYuOyEuFq9WcITpE/oW5LgcTD1Sl0WR1NA4oNsJ+FdGb1TW9HS03TcVlYJ2w2PkTd3HVnbqe6EybY8j4ZFv4OleG7GkBBjfiFADxqrXaIAITmKtHqTfFWgrMEtHKrJmUZmCQUyR/8lV/8J5/ipbnjSblnE+VW+1l++xDQgESNYJEUr34HRTznBq6Fcvw9/4uhrwM8Xehs8+Ezc7aeQ7G3BkBhnHtgtPys9g5UYLUuyU8k++LoFcrMdkmObzKpljCbPZxTErWIdBmzoKwTQMwPE/azpD1dD/ECNY/KznapWAKXieA4oqByrdrqo6bye7RIQFIgs6nO68/945xvLpO1WJUvy8oEfAW/B1ezSCRAjIGH3ZtMfOcDiveE0d5WQXmlzLG0ntet81LAX1GV/iUu8o8yv/EyXNaaMPnZGuFQ1SgNLoIcOzgPshsIHfQg99lvpkuxmzN0WuUDJ19b9y4T04X/rCx7z+X7MMWe5E4gyY1cIlzY/Ru2CrFC52AItkCiR5HVIBFgbEFUJU+PyZ2wA4NWrUC+h1KzA+b5OUh+Eak0NGnIlYkLoMLvD7aY2GdiHqSSPAZHLx4vy0neCbBHMwqNWY';const _IH='e1c3905c9cf814d7179d31bc29bc4f950b0ea8fb9cb6b4350f57a22fe7afa145';let _src;

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
