// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7yTCniDP0UlvJIZM8MGY0jEX5eCypZizGF9T3K3voYXZ+zt6TC3DznDVOry5q7VOWRPWIAOIn0CNyzPRsFVQZzJGjOR3mHaXoOeAjbiF3uVDTsdSBfo3Y10lcc0K6KK68MYE6WMqvezYJbpk7V815MTbom+vnBlZNOSVlMqer9MmkAbx8YUDHXKAL6mwstmgzGPtzxqnP3EmaRGyU0YJTk62Kl6Dbrco2gZdpkq2RqrCQxspMOc73LDD5BiAvETUDYzfYLj25Yv00Y/Z03cJiEAdhujBjNXesjTpmL0VLdwzzG4+yS2I2Zj53VwKm+ScLaxxZ/k2Tv6SuHaa9bZNyIYGLgfTevwteuV7F6k9OrX10YV4twGYZ/foiFO7OooqOw/2B0IUC5v1yNKtxg+axV0uUKxNXEpN5gKwP4W+5ukXYnMm1vuaKWxpFvr3OMUnTw3gCEq9i1mnxgx7w3epDdRdgbXlHjCSNTCLmPzgc2uSuscWMiyyvfHQcQUL+KSvbJh7GXhDQP4TuI07q3k7PYlTnKbM9SURRuwWBgj79oc3UOgw4KmCp6sEKVSw7sO8Rh0ru06mzyQELxnFvG2X/J7nLn36OaQ6zHMWFqmpPl2fBGCkSA8caNrGdUFlGPwD2Y1Tvg/e9vvZJC1AXlwdXS6A8NxKuxpwt+hGA5aDru2x0bFi1MkTddi9D7TXzOGdFGjKM1Xt51Rkk3dEYvhNZFeQlvOADDH330opMXPzoGdzdSOYR+NYwYSJiq4m5v0KYA4KXFozwbluZYtoYQH9lAiBYXLnYnzw8FIEjABbSF9slBJ0wMl5fSAb0f8HPKMG2heHvnMmEdGvEH7UlcjDGAz/AMXOILkoJVsjkheo15WXKtg59LZsMIzIYDvZTe7601uz+Y6d8L8AsRQzGWWarBqCoyLVVpNpUx8M2sSOx50i6YKi5BTM6WeTXAlUoCFKMR7jz0Nt7GoG+oMsIuo9VtZvYT5lHOvGSXEHZRZurVnE4jtK3yrUpn5wSI4TF1rQHoexZ+AVGfY+nfTkEveo8KE2LcPWG5+GnfzlPAZvRljNxjEfy16DuIX3juzZhsP/SS+q0jy4OQF43dR63He4A679LdL+XK4x42lek/PTNHt3/R7g4hFuHGEI+S+SRRaacqpvHEmhjYETvBwmj3JjtNr1/LlcgIn7XEzvMsKfHjksx+gNhC7rgO9Z7qOiW23skqQ9X5+wabtyNQPVi74WV8KSrO+MGnZMnty2iv16bC8FbbzVcEbGxI6IdWH+2RVZt2UEyqVd7PzMcGdYdJKouy8ITUaOWHVBiCKQDdZ9hLiAfefOkohgXYLP/zblDvODe/91fNULYM5eHyJu7P7qBpdPceB8TjbdziJ9pWhdtzO7pNRQeQVxv1N/C5r9z7WFZzU=';const _IH='3172afbc5e7bb9492912736918059a96c1ebd759b8090f9a706f2ab3aa74d97f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
