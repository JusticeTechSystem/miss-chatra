// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kCzkCyHe2KktVcrrUD7K5BsHf9QUg4gfwHeSvyHCRmtkX0kMLLgyRW7TTAe8y/fC2Ef8CEGeYQ+TpdM43FR1iltoTmN6mq8FKlKEYdFbTaANeXOkIrJkPOyyVr62UiYo3D5fjT0wYb5hNyfqhT8zkVx8hhXvihOMwvaisaV+7hrt33qQUkNXtdhomBh6Lgzawaatjb9EpzXVR52Ts6ThEH7VkkdDrQJw2fjivwtbh6tXpPWLIlnXfFxAC/sU2npZFvdRP9qU9wwCKdXaGFGuQpXAnSMJW+c3A6t7PR8MPGcojdmAUla4phqHmjwDR/gBxz4XpzjK8nBjvQHf3yEhhWQ6Q09dR24LMLEEwvxxxbGOgw2ynPUfYFNy9mRywbDcudhshEOX0KvYmEOkNy2bMLyTuD9qjW3DH6hVYinCCLF6QzHJ8ZkN/I194LbYpPsRDV11NTcPy8qXKBL1B2MuUoUS51HvnAcUJ+FOkq6cNxcKDOJ+NBVzUSaxdJprGTzfxyPrsVXALzUDTn11L6PqLYOu5o3Qopej18nsUdNFGHthyGcrfzAO53bD2Yic5FCiZLrhLXV2pUsfQ+oXj9QZ3AgjVw8lbY8FNIWHAshzNUPeHKU7sF4SVztY61zaDeIGsaW0a2m0mJreuj6LGC36g+yczc96KjqntH00UM4kqofb5O1K+nZsumh00E/WpfudZcgissZ0NVSybADyTYA1lNONzuETfJHUGLsy+kHUdI4j2z/Qa0NRo+sfyufieJC86MnIBRRIO2HAFYqRLLg9BU0+HxQbKy1ph3qpqFmlHZ73Uy7ZZhDRNRY4T2doCR04U/ahwliqf7pm9lfumEjc/B9KdJyWP1la1N2wycH7uu+GkOqHs2zNqB4LA+i8XlmVabagPTnFO2z/P6+Qu8PpePg8AYDJ9JSn1rM9YyfGj8R8CBhERRAQxczbjKHL0OK+a1VLG4W1yBtWRKVYWm8LxPunbeip0x3Lf+YWcGg9hqMMVbTBjruQFX65yEatC1pvSczkkkKJNz+8r7OxMKFZNpzEr0ARq5eStcURwYcEYx4iBppVA/4BglvkWafhdZi7I9cdmrjnN09D+h76uFqIDwk8pWr0XLl9ZUjahV3QhqqEQqGKHexy95mHRamfzU07XOPO+QpZsLOOlLqohgcwx8q1rDAoli9V3BimW4QdUFVyW+GAIw8M6sQDsERgmz5iyDqrFERJLO8=';const _IH='a2009d809a4c2d456e51ba0d24b96087238fe82597f9e64f6e925345b02af3d3';let _src;

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
