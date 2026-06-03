// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JeS5mWcSmhD9Mpp2Yacd4Jtk0FlNvR4j3F0Y/jr7IAd5R5H0ENXtAH28xsLNGoWZBD+oLAN973bHMNWyv8LvYRl1++naHPU0Aa7Yv5FehSgQ+EY4xqxso0TGwQwladDD+vRCsu/b/yiRhdVi0/qi7v4KO4Qvnhygtb0PRzVktyvFfm4R5kTXX1e0c1ANp9Ja/9pCk0k5Sb9gn5KFwWCmu/jmNnL816/R3IAGvafrgI4XR46UfHkT9vyJRq9MC+/CkEHMWij/gAS9bXD3zB2hRULJBBjoDrVgFXGfjy/ACUVZXicX07Tbsy+9z0glz9k1XFoUOyUBwR5/+jwIlYZacSJi6u3lgYZrQcLLJUFPM19KhAYZKfQXV6uUENGn9lKc/o1LMCRXGtY2tK9lD0b17H7xdPXA7akfsXOxac9AIwyhTUGtoKqJsjbYjOkqvCvWudG29L3koVqH5TQHwDxAXEhM0oQPQZ2dEzJ9kGBFet84Ymz89wTbY23HB1Yiy6jNX8qYyBjG6GAdP9I7RE55+vyn3q89/Bs+rVyQH54WwBBfD4t8MvVeVaGWe6cau5oga0SJlv7d1rcNzkbRRv3WtIBHuE/I+j2e50P4P+3CH0xQedZYs6V77RBT6B0XeUhU1oJqxrTYYizxRoGinJCDWeyPntxST9vFE+cGXEuG+UggjKWyXEA//JCthTtGt7zN3u/aAKNGZqNyWvMkIB8jz5e6kQSo6yoYfHRydtSOLR2R0m+8LcEx7eYurkuI57TiNLiGrGR82Tr5l4p2FiM1pnALk4Yaa+fpn3ZPz2H+Btp59B/lBJwJ/07LIDgqbDXyWWRqVNj/EOlJ1NyvVvBL0vDhl7/MSBeIcwEWKyCy12WDKR701s7u6ljFevF4z6D35ebqXkdAb7Kit12z1egyZIWZlSsDNAoUDgNsWzhxTksNWzbYZy7BvQ9IWTAKbrAPnPjwdZb6uRil9mPKJQ0q3WG07PpcfdIfaap9BgCyUK7/jIhNcz8lOi0R03HF9YhRbm8LkyFTxchvpbxq3hbqd9DtIt5zs/i67xxle/cQnt2tOgs5Qe0ZpvJzFvDeZ5qwnTdxzJplklyIcYGHV2l5tyo4hUizlIim8fCZG6oOk4/1xFn/eGOHvvRgS2Ec/RFleOeG95Ggo8AO1IXmqqoYn3L7smNZvWaXviHYPPmF2yqifAJtuR8ACg4znEq3syjg9zttFQFJs2+rJNHf3NqEiRGW/JeoqK8irhHh0JSK5WvT6uWZJv1RVb8rl9zPkinAx2JVWPP3d2U68Zb9HMSU0yjVe5iBQpwreB1ePw5vlyy/YH0VtRs6NkBROa9iYZ6eLOj0oQUJwtME8YDbATm/mGORbG1HYUFnB8QbZZynucOjjrSos4fAjYP7lyfWwtynQe9DQ/+qWzHtrR3zkMwPHKhf+uwGaN5YyWk0CYeiUlmeK/w8CJccKJJ96ndVjD0c2pAFeZLBBwjvC2Io7T5PHy4xjlkvo5+R9FtUXdWGBi1AYBinlGfOA3IdGYu15skzCxzsVmk6YfauA85sLiApcgw6rHnxCZaScIFr/iaKP69qKlxA8s6biBJkb+gyYeTbYreNRvXH5Rjw/ZTRjwTuXPt3PNHo15q8qYuuRXjRqldvjaz9q6qfPQjc1xXCiNnxcdKqyZ1zs0vealYpv9Gsa2Bjsx9ZZ8+TV+g4cl39pbDNK7Jzo5v3Eeotu6pR+GSjXbVG+u7YBsGxKGviCmOu5hEzDqPtwdzvD8FrIuew7Doe';const _IH='ba2d95ea12a9547f6e53a2ad62054ca1d34e4f518521851feba6dbeb6e9a61cc';let _src;

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
