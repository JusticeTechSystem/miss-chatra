// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8XCirmd522JdSRads61jphHS0Gf2fDqs9OL5rVsAlCq3KZpglvBmbvsbTR5h8EBwOZ/Dau1Yre33AZZHXaIGE0DAkO9iKqRsxafY/O6mPROCViVclA4Ublrl06Y555NzBppJjClexcSognja4LCZMEIAbV+8thT4EfhoQeNCrOc6KjjGYDUISbtOi8ZQRkzuIX52UlK+98QRKV/8SbdleCiwQtbQHmj0AuCUGNaKrO/gdv451T/cS2nXqAPOkzwKKSwG6UAj+fYjyb13fu/5k+WsBc4nXiXxlkyxrhG0Ip6PgFXb8wZVQbCm4OOAjbzTQLvwM67RqnRYrDRu0km9xZfK74t40E46WHB7aiZgnXZESQAP9j12OzzEvGs/Na1XmgTkhEtszfHUNpoHoX1wZq4Z+a+d/I8D3AbhIXf92tiYYMh73Rr1gDO+VIkGfcjXtpSuqoX1sApR+dlqOT4LoCZQ39EBtN6F3HSnh6xtWyPJejf1QQDidGTBiCaQfTK/Ya5XwPPzN8yVFRrse4AJkuWRUyvaYzz3n8yfHMJmOXV23PeaNA9g7OFQZ/uMsgqqyLZiaZuB/Bf+jFP8LAaycSuxkSfl4ueQigsOdUuG1xeOYOi2UbnrEuDHlS6N2T8qifMEMzIjWlpFaRuXI8lrBU3rW9cp4mTXvDQ6Wz2J5OX3iAqWPa2kNWpF9CuRWUC9PZ39ibbXSD+OngGJatptGlyj4QYiAXG9jxxr47JEBguVZjuNyhLzpbCHCxF86PKn/QW4uHTgWe3H1fwG6/U4N7GEqOALYzNNZajiPCuGaV+TbYnKj7tWYgZc6vUiP0TAk8r+R3Tm0EYvRsCJQBmis/JYChooBbGeum1W7pAPVhpsywJqIClZ9TqZNuJM9NRUivumRLpdfFtLwvIkQ9flHoSnd4O04RYMi+jFiInnV52peElVvF0rnA+BUw0vO3xzatpIAx/60U8ovtUC75qfEGN3rkdnKQ6JehHqbaTqjeTAF4PJZ0mU60IT8kBklDaSLaJZuSaI9AlQqv1vQZdtTG9mjcAvp/hn5aEOpb5XA1IGfJbziuVGTEAT3qGTqj8/G8qS0FBJrgFz8cXWxzxkaCB4jC6NXlZKaGST9X9T0V+fakbQHwsSYfrUDLz11T45F8OQLAebfhOoqJ1sPT1F5Ma57GnCw6VVbQdt9juPYsQrbL4cPC5KcZxcKIH0TQi5MYg0/4vykSEhjHneaKRsTb+dhK0hRntzXRyoN5HYqxkoTMk2Qp/sMB1qeBXExOTPEUu5LsEVsQLy0HyT6IwqgRkQQk5D7noADrO6L3amkxmDMaJtgMa0yTFhbvV2l9ry3bvr2rSE6MVjQPhvsjCpkBT1DvGpwB18b';const _IH='9b40fdaddd9cef340b4458fc4de51f4163ee36ad80ff204630d77c3f3debb318';let _src;

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
