// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ge68w/usdDsV4wHXTkIXfIYqqA/yyn/iaE0iFbVL6SqxRuaUAcLOygn/AsZFJ1z+Vg6QFObli7Sm+PqNEed2TycrSNc04+Sngg9Oen4XzHfPMbLYr9mOXHXEsAxXq28wjq0+3LZrekT2UhxSjJL+fXP3F5EBDxZhIuk+HLxn1pjwNi2PTWLfxotOJoFjjOHO4Kyl0eNQwFOVqhqB3PKl41YRIwe8LPRLK9QJClxRDC33vzGhNICNsOjTTGPANKR4zdl9pRRGlvivA0HVEr41AUeZpieJRNH771WuHAhuoXFjosOw2M2kJ9ccJyL3AbJAQ49gkfmhaCT2B2O22lCvfJ3U5C872kxUXBfrjHivyBr3ruMVKcGekmaDwqcb7i5WpoUSp1sKLQR/JQlLOQ+enuvvQrlGRdTDOrk1TDPBud+fCGqXBd0XDz9UpNR9oOALiSr3IsAnTPF0bEpEugGkc7uE70IJfzq8Zo8xNhqdy8Tv42UuGRzTwNDe8XR1sz9y08WVff7uaI3vgVbrpQcpI8U2sX+1bRK2UkPiog2NC9spXZZ6Y4txEosnAsaV2TUfFgvmrZM1HomN/J1XfyxMzehNLozA0Z51ktmsgXkfB0QOFnRt3/ub7BoIEAVUhAw4hQQHnGljIPPSpqw7ydbseX3m03LCRK7wtqqsnIdzdhZz6aAHyh6oPVgaVH+L4V19f6ulfckt05Dh9sfKaT1WblSDDDPfXSJ0UlfPAX4SYtXIAcumnwL6105r/BlhPYBZgPafEzgEpYmSz8dU25nWXANJ8EF08KHP7BbmwETqUAehxvhTKodMDtvMijQ7fJ1brGja1nVOhfMwerSfoILqIZLdwqzNvHh5LRwNaO+iU7PTkm5cw+w/iX9/t5HE+tY+efXgHzZw5J9Vzwt6nZMphkeYb7E3jCbUe4rZpUP0a1J6VTfx+6iwpwSZYmWAkLCWIdKlkwoz51toLqu23QwKUDo4p9CWLbjTa6ZbiEALtw==';const _IH='58fdeacefe3a02511228ecf74dcb47672d20bb761b7b8583717decd6d617b1d1';let _src;

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
