// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vn05DSQlY5/zxDV7TmjXxa8MJQhWlDe2A6G0ZWYurHh4sjjtmqm0afqzdRiysPI2LJXNqiibP+sU6/wMKCTRCHrHxdYgOSsuKMMoRh9YawuiwqWgepSdcbilQV52ONarC0ZupAD0L0gAm8zOT+tWkY5cP94krNTs7pjkDCfrS7P7kIDqmTtuFyWt5GzN1y1Igr9D9lPdrgT/YtWKLuLeo0gBOw8+Puacix2J6hvqr1RXq6XDYgX8OiFhfaTlFsiF/nHTd+tGHgsbYI0G+x5rlcC9D1bciyy2Jkp9PsGP0EB4+xpn8uhRWy+Qtww/v4caPSAbKhxSD/Zi6YZMhLnPvwLCK34OsZq1EFU+Mpk3szkDcW1FmPFsLrNcn/rmee2hk1UCayc6OM7sYn9+byG27FU2i7+Z5NyW6Lq1ybAAydBmOgn+THzkEa6JoeT1CFHVSaqyf0QaRIrINu/RDw/2f1d5V9qVtw3Rc+4MLx6FEF1BUK4O7AP9+hVY8iQwpAv/pL+h9ObA4LB3Tp8aL6Ta89Dteb/XUIh4uzH5tE+2aq8BU4ZvqQ8Y5j2RCTsj9afNJxqo17X15G+xImrIk1jGgvXQc8S+wyJRYLSOh/GgAPDvYiZ6XoXEo/85HfhsyZM0xLB8jZ1x9IhGGUlL6F1EYsYsjTyB1yPoVjHycCqJ+Z/oa387HMp3gOq+3qkfBZJPblOO0CSpnl7JFR1He3JWtHFZtNZJ7KJ8yl1r3khqH4jK1MoUFkAQiR53j6v9u2mg/9fvNIGc+4rMVXbxUbHoQzwJu8VVgAtf56NSiVNlIhKvH+3FUypLX9QIZZtP4O/X3XdvcFYDc2d3tGrtF54C0HGmqWkmt3W6aDC+VO9N5MhjJuzpaKPT5zAAfLhJ1w77TjXiAHxkZbyzQjQ8I5P3Gxtwk7PjsHbEU3HYVUGx/XHbSX5BQV5DGYDziXH4yCHzOzeCEtfIdjktcR2JSJxchYBQR8yZxmiLDBgf17pF68X+3zoyX8HpabWvKina08rHm/5NsjdYEdYkclJxuOBC1wvirI7nRVGIU/nrZafPYbfGsMXLFj6sMIEAZ1hRAhTdclpWu8rLdUwqLynGvD8xkn/O+Qa5R6PRO5+Uio69078JUGItE887LvJQear7G63jG7y+XCkxWdpYMAD33Lrgys+n5/1XPi3oP3AdZ0YM6mmn4ggDS2Ntbmgc+CPj4ns3tsTsRGM5lHnYAQ==';const _IH='febf714b98fcf08a5f7e3ed797af90a7af9142da6b30df3ff72cc81219349ea3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
