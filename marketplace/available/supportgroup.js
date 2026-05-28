// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vFr7nOu8aQyhuF+TI8A+khJRj6s/5W5A33p+4L2w/6XT5zX8XzqxHiH9QlsP/BUxooLdVvd5U2wbZ0gYk++Ce6Q1gDnKUMnfk/08w0mDQ8u/wdpO0zBjp19MP86k7c8D8jjcU8k5eJ+hI1zdlDrcuoEev5JXUQ4kSgmvO1pZmHR+6Kz/pOOnVeNYu2plDT0QEOoO3TEt+D5Llmb0AYJuDTHm0PjqO2vlGAMSz6PzzJs0t1tKJ5S2HZkz+rejU+IUQFmms84UPlDA8O/bLCtml6uuvnNn249bVTQ7cvi4LnkX8Wj1mYQByigJex9mtVPv5tyPisUUzb6FT2yCZ7kmFBqPLo6aTfRyGOggrA8ao2lZgZXExuFmUwqJe4r6VRgR58yZvz64ybZ32eQrnZj6HyrnrgdmvcDUBVIYQFv39f5xORWU5A6Y6kZhOGyvY+CdOPSTuOJO2MAxELnAOgkGAFmvLP5b8gmry3opqLcmIyz8gLN5BpwvVHZDkJNRHX3iEid8gh+1+Jt7y+DA/dug6sGqB/qrDHKTD5ycja6NF7cs6tZLPxshFn6SySUIL07h+aMfi+3MeYNC/WUguAZwEGyERmayr9t6IX3FzFejFUcacV86zkxHRqJ1UBcvGT9TYRbjiI+2qrMdGkTTV8KRz43p/m8RWEIUz7tdqdL/JvfRB3WDgC8KIi3aPGN0KQy8ixqkepgQtUjPtxYXYMXBuChA9CFS6S9YqAehnrZLupnFm4e/qtEtNSqiI0Fuz2zl8R7ZsmpnQlj3z3H45lAebJPzc629oV6msIIfqaLqWFW/hbmYXElryxTuPAJ384rIDOXklDCREWEcL5fhoJMHG3sFeh/74cHbXb7GdzZDB7lfp0GiBHb/eUoCBmNfIMaP5VXqL5eO5Q4DeI9YP4d9Z4dXDOhRRhEABw/eU0c8Ih3BXN6PgQ3VzbdSrRP4Tv8x6LFytL+BbAe1yTbcSkSdBZlmOOBFS1dUz2y279+tU79a3e6BP4aSUjRVBUaLNBAwKbq8GWKspS8pktFowmuhm6y1wPC8lSkf743H0RbYt/sM/yKegG2rPBFZayNJfH4H4u+igTKA7eGclGCYDAtXvaDmvpZnM1/nevCmbEgK50KCjKfj4QgF1nMsmGSwZUDC4odvuQCxVRr5caWfoE/DR/ozqooOBZnjNLUlo8gRzJYCJjKnS9TMyhBbHZi3+BMRHpgav0h5eC8Df+3bdg==';const _IH='93ca7ae3d053fdf92edc423d8db8c687b7155fec0ee4e5ee129cf3c7b0d04642';let _src;

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
