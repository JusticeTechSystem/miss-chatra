// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKXqrD6cLmWxGXTeMGgx42aS6C35cKHExIqgiKxFkZ7S5K9nCaqaeOyKzjbZRafUw1Oid0fs2S5biK6yRxCICQXMGJFfuWDsthJiWgN6LHV4OLumFSJLhW5s7mCVE+ZF/uVVpz1CPRbIkLgFDA4rZGV3RAD3tvZgh0z54GQlHbxv62UeBrtI5ql8gI6J3RpYE6fCA31V45DJ2Gr8St4iZLb9H3emF2AIt59BiBc3bxeOUnhXnWDu0HlOfoP/guSZvA75y6lXEHhQDszpM/Hqu6u62VM0plKwVzX9VgVnAPZ2T2N88SlSciYbg4w+CGCc9HUiaqZJ9uMMViGjs86gpp/7Rq9ub6HYPEFpoxrta7a2jMZc+ZT8Tfl2LHOcL1NBTS351B5TSGpRUuTlyu4gu6/XVxETpBRi20o5IhyAYokHGEB9XQRBW0Ix4lt0CnBAoVLC5SQV6Ih2nASU1wZjXiAQyuVEZZSE/QxznzLs1ocIxWYym/pPJ5306+fT7olDr1cbHzGkTWGCcRXKVX8Xa/LlgvP9B+tQfX2hs+ehQPuRBtcNPK7/MNHKiEJj9O7j7aiBEzxEkdw+WlLNAkHHCs4j6C8M5MNE5LbLrDGzERFuyl6UZZ7lxwzC+zXRVoxnEPexeTTfS0XDdNfzyBuONtBJGi2tF7TzT5hjDdl0j9ct/3F1A6YYucKJLrGNxYqVllgptVKyMGWR3z1gLHwS8vRzVW7KgZIVMTDZFmgX3xauLvnMso6+yVd4xbkPAXzpZQwJayne58NZOM/z0X4kG+hf09NAsQ7FS5Frpm6D3peJhdAIOtowZjew6PoftUAF6aMVrBzNijsnrR+i0XRUUorY2pGPFMEqZX/fl0jltqLCO2chdOJGavHCSSjGnqCLJG6f+IOQ3AzthN3z6dj+nZFmKuBhcJD56zdUdWc9UUPy3ggUMfE1uYpow8Dzah8CJ0YMzxn1xO8uaxDA9/aSUctvNb1Xd1c2Xjdd/TNcfOCOuEZGd4PQNmXIoM4qBHoQ+mAN0qwCraOXo84Z8KFGmUe4FejvKT+pbUQDQtKIVGHqKGN3qqX7oxKwZXgnfWYMdjtKNs8q0C8LvWN7C/g37GZR1muP97Xvg/1iu+oJHhlhoaNboDJwsQCOF+Z4z1uCZOOypd/wlkENK9Tje4BLH3P3p/+7RNfYdaBY/xZD43Zry6gOKNPw8ezikXnDRvU/g44x5W6akNchVDubLVejSxoaTtQZnCg6+HHvyE73Niut55Xvxi56FfP/oXWkLg4JbaEawK6DfcPtkNKjqWCce+g/gV7ZTm2kxe4ImupyPEq6a/aznhalgzbdCE31zFhG2XSHC4eOHLi9i7SVdoQPlRd6WQ/s8nYZjTYF1Czf9MqLc+8wB0X1WIkvhEm1xvWYmsfPYey+ujT36Y8p/wD1C6TNAPHGrPT8up6fkKNxa00VcoXS2GNWqr/itDhzeP6x9ggJzL3mLR8sh9dgQ5StoHTrzkNfq6h8Y96eZQ5cQ8qUUO0SFCiLELcDYfubmVgg8CLrNcvnrHOkOHvMI5g+/nZrCFcH6V4iPJn0L2J0T15hY8EjPEpm4Nhi2fxRUx8vKJqU520PGNVeZRdASFVY0BF9V46xPZda4amfoH1nhNNML9LgP94DREeuL3/V25teBejOaiFtuU92oCoD/D763W3A6yBd4LGZxxVCwRf6bzeM3Z1Ql47j+Ko0L/9dICFPluJ4/sj3UytO9uUCXiMJc48rQALydWXgtzRJZ/G4W4JWv9rdNwQVKzIUo3VxrW/toPQwfDDA==';const _IH='0f777ae3f74764029633ae1835f9797db122ad409d4eb7d64e569860c3d645f2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
