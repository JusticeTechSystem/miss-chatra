// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ587eeXkwGt8IpAoh2F5L3MXVZcYt7ql8Gzgx0ukTUt8go9FU59M4J44NEwrBVAG604nhPr2k1350JIU6Hrq+JUl32shWKFRxb6i2G9JBLeLuZNAs/ZJR48w4dtSalq71rv0C90D+wuQDrm545d3vDtJN/YuANp90mBobPzub9ArzjoNj1Qg0iUMPWQfXn/0OKkORfJrhvLz7z17Xcj+SeEC4UKS2LvMxiRJW1ap7/6NixR3HdWqkbCtIs5lDovkouc6ty8HNZ3BJOTQty2AkBYhzq7fM9pJIUtSsvTOvYU+MoF19r9N8Ew5YUky2uHJhQnW1EPzI0GRKzUTmKENHqsowi3xzC+8+2ierpZNNPpbFid0t+I5ITA+6sLhAmXDO+/yMzNQdOIAq2PY1Ep7Fhhg8rkKAx26N9rTNNYsMsgcZ9Sz0Crr9Ij3/8MYYe6qfL80nIK9TZgPrr0UNms9pC+dRWE+lPx+dJXnB0WilJAk85AwT9c385TdPSe2AduitzSazTYhWCFfdm2lwmJLMUw3WP9uQ/Hfyw95BM4N4TKTsnqXQfMp9/90XEwCuJ9QCzZ2yVp6OHK7Q8c0hAuTfbLbJJg/r5cQF3m5Y48WO698aE4Yi/HQqwtMpP7JuquXuHHAhtTovaSLEXmQtSSNN9854AxxI/viNPWzRPCrBcxvW0r0IO5nc8+/Col3BN7WP6S8ZQkOCrCdA8srPbeUSMrLyFp/v2vmGRzO3xoHyfAmnggCCD0uqHn5nKTl2WvHWMDVvFUcKDbwPYjiksxqDYXu/zoxbUXI17oYnwcJc+mYqb6OUoHf1pHmTQ6q6zH4fSewBJ/C0utDKWzTnlp6rO9sK15UPdIU1CFO9ZcJtLg1GNNZfciu+D97tSGuXelBEcq8qZEwYHDfYtQIOV0ct54nK+mapYu384h0/DGJbwtV8CPyG6uPPDjaaDpix6DkwiUUuNssOIWKHSzBUXrhiuG/WKemaaiumE3uS4EgQBsDAT0NmUi413PRgGlAsrs1plB73xSxga+t/X33JyZ2TwDiGSk7YMguyQX8p0i5sJh6EtGnKww9lnqPoFL25LNTbodhZtFhzRVXnD/O62mmMYeiQxOD59aOdol4IXTU+Dup4EiWllSe59ejmxOTqXfpwQzKOWexRbcCi5/o7+CHE39gaJSexlaT9NyMRdysZ2t5kjOF/7aMZrek3rUJ/xLR11rJjjIl+SDYg/ie1SZ0UoIQlRDX5Mdp2Xd0BUSOBdUD0pqTNCq29xcvBLlz+32pDU0F+3eaV3uoOa9hZKcka3D2CamCLdfJ+jXW95uAJrHaS1bod7o/csMiH2/ZvQfnUKJdakiLAl3IcF4Io+NrnHJ0MxKLCQFoe+tuvi2t5Pjqb3s+e0p1uXg60sTzNjtSTkURn2HTEF8tuv2mXX0XP088Ee3OPA915cbQLCqkHMNQbn9PX5AwSMiTfz//Q1niY+ceg/7bdeHzRRafjtPMj5UGMFBoUdeuJzEeJnYG+86w5wLEMnpIcfdL1g5UUg8YQZd9THgIMnHHO4NMzWbc9edgjH8c17m/TcuoCY7B8ddAKqE2ojxgdT+QkqZV+wN7dZUB/eDgoUJ6XFBGhSm91Yc4LGc7Olwc6YG+bJhbsr5Qbye4mf3YtJB6bTTPD+v6TaD6MQVRXKz8A+R8Q3uSCaN5aDm6p6Ae98ynP9mo9eBqF/U=';const _IH='14e12a55b3a112f7292b210b83018fbd727d5d09ad1ff09937b6796c6a8205e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
