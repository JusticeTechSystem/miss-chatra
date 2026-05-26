// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='413Id1xM8LuG8fuOL99OZZCRQ3Pxhdq0JyVxtUmYbjJzmb0vtkWNXnFL/Qruk2fL8BIWdh6UTBDxQZbY2bccIlZklCtA6VjHNfDZaRmJPpE49p+X0+KOlZ5g8w+NkwE1vpoTufv5SYrOPTZzIVEqWVsTCYMHVgiqC92P048qWBGTmqqwXbbQglh/JnIgXzwHdxmbL56uPZfB9x80T9VGMRUoqbxoJkp0E0Bc+20UgzKUAB1/yxljC7Iv9dNFD956/KrnKRwHY+Oobl2klqUunj5UkR+Fnsvz+cKsiCb1Rj9UFizhfucS7YpcBk8eGpPs6zOwG1MzaOwJByCvOLV8UpALSGpP6Xks4OaKiVwOqOkVgP5PIB4wpcVV9vPgxA2i+BlsHa9fWuCDCYsr42auchrsdlBSGM1wbwHkHO9reNdWRHdP9boIi9dzgGuCf6a420mW4d25/KcQ+qwU4zabIIjtvU38zWhoeKBkDSC6ykSpAXRwIifqNqxxWNPuEOZ/EhNKL1WqcK1EOGZBYeJhibnWmpEug5u8siJBIcEDVdYRe+EUG7mCtu63xxIEC8bh+jnd3NeQWUkdzsvQ44wYdK0tEXrLVWd01jkDLTe5CRnk5L5+ZVUdD4ogIYtqzTyuNEMu4ox5abYhnjVhmtT9Tz0THAFj38qb/ezYp0uAZQ9M/S62xX89EaDLYztNhW9x/RWUIYEwPvaOlpB7zX39c9dulaOOrSQXm1NEHhBmvI9xDB4=';const _IH='9fb73d219eb1f7b78b607071745343b6e714c2c73c6078029a563222dfc9f673';let _src;

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
