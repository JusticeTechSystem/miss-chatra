// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BByuDrJApGwCG8+Snpur3DwsbjERkgiX8TrUSVLiCVjXb5NBLxCUvB8ypfjYRBd30Z7MrvNO7xLkDqIUm1cMWUyW8UnrmSwqyIGhYjzdykOvoZClOW3te2io3J2L53x591Oo4XMMJTNLySu8xbTZSitDBMPDlk7jToOcDKlaf7in3beMp80U+SgY8lVOK4DLOWZCoyM6I085vrvl5xETqrkGwbyRFQD1Snzb0o+CGlYlstC6WDLk5BVSy1F+I25xUN9pKHBxQ+/dV6Nbwo3vQ3EW5xf+AKyXqGevUdjVmz+3FrGnw3LpX1opE/tU/lZY3SPGrnxKKGcW76LfJmzhHuXS/5mgqzPLfn2M7SM76/whUvnYNv4B0D5gfrWzO/0CLdf9tOTsvDt7YN+5VIf9VOYKLwk1jal8yFX7gAA5ltexbsp67YrmI78GDquDl7G/tuo1qe/d3HJtMHP75IegpSu7IjFIEZ/3A48GXQUOvTowp5xOyxYHRWUluPl6rldJcRdXe8BcQNosQtOc706rG4dEU5oP2VxXAHydJ+Pai0cd7Z7IbISfrC8wDbFSPR8zpgnre+aDDvGPFj8x/GS3z9ySxdKaH6FF1Q+41xvsU/vFQELf6lsrFmbPs57hMeZBgioa4XVyEJYMXDJ3QbzFVzEJPPFu4gaH5u5BAwK2H/CYuMlD66VZ8uHPG3RAker7twboCpXkGHt9nrle2Hg6aeswLixzASJ4koYLYuZYLd9BR0JENkFxt94J+KsPH7TQyGxbENZzIB5+y9bkpcl4EzT83tBcObEb9DUTWCYS8/O/RNR4YSt2rEehOu7iVxLilI0UFbfBQS/CW8Gygbsjz9iWUWUF3TxJ+a/Rdjl/MbOOFVx4+xLvRQpi49Jm7AJ5j8K3yuJvVOVchm+LW+iEAQb+bIuseQmycHattKGLGWKaxVcut7d7V0l7nSyz9UiaTHhv2GSPDBYWrwmhqpWB+F7cZXICKBDXsZp94Elk3Ut45xaA/O2WWCgcGWXMiAyCvM535qeFt876KYV7O8D8vYN0/KjWbya/ytolctIYYGf197cCa1vpC89x06qBtvGLEs49TVl+u83GB8PsNrnBERJLdnLkbAX0JtTLtEOD+E3pfi9z98z/ogW1BmHyindslHAz9JejUa3ZzFjqbRMPcPQvjgMsqKnH7RkPm6+to838jaDiGFytQOpYXz1Y7cpZYTS/F7LZGxtmyK7BjDzhGu2RoZ2SBF3WV3VP4bro1cbZW8RZHME35WOVgVCzdGe3Ik3QpBxGGbtDXL9hWYVKlU5NydhSbdEDfJdLDankPLNax3Ojd+LpsGxfcC4u3UuOZZaD4d7JzwQhgghD5SRyFYDl5SXbULp0kvWYmqz0';const _IH='81da15d9031406e64dd5566f413cbf58da5e1eee189ee7ff384620c2b49b5134';let _src;

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
