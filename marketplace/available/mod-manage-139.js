// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6y/Yq8AO8wJPy5iw2Zqgs9BQxCImTX4GdNNoiP7u+xJ3esZvABFMFqMIJRGYiuOXnbHpwi6vnqjvzQWYliaxdYa3m2hhJpQE5BqpXgYTuCndUwChbhpFoWpn3rfBJMGrklfLVjy122y3iT7oe2v3rYSY8w8DLycjYpgwWlTtHYlx0z29juiXTirBKwFI8e1Na/x0TTYnZKLToKnC7Am86FY5Wm2cP7SK22LsXNyTNKwhNllihli8R5xISo37tz29eR27lHR/9MB8yeY0ihEOk9yRtkTH5F33Hi7uTNwRqOwwRD+FtYtDC4tiQ3+e9IxsG5Gd+ixl89OtsIyfhLV9J12RpLovHaI97QpSjj2iKiSPiEg6Tel8RZgU50wXmiH7Gf9AsHpmuk/8aq5hf8AIXgkJwIxtHcz2wb8PS+hYJK9ISWsnTXbh5PZoeG6e0M+w4cM5Tn9bKbcGcviGw+cIdDIP95mNCoTOw0sl5B+asNtm1GCDN6PQO4VrrA1LyR4xiW+71TioI0vkl3p8QRXYxKx2tvG0ihIC/pQP74o+c09IVDlIWCjHpCTqC5SnsqQvkvPGcQpbC9egFcmoNJmiIhRtvCjhrlEYH8huy9W+J3qeKgA+Vf4HkCsTgdUlmSVs6KVaGETFyVNDt6YsYwi9dPLZcgmGV0nCV/hkP38IJJD2W1I65y0lDuk66mgdznal0tYtFr25sDfGYmtZkatwB2Fz7nVgFFhhtfW97AFV0z/L5CmMsj0AV4Evt0yR6zYdgzqwGmzKiU/vfxRHlrdGxckDMdVFgGA27aHAq6e2gFHMQcDj8eHdYbsaTbOkdeznna2rtFUk/7/UUqLRbJMjUadZP4sBD0e5BwcJM6xX7pljM1a7iP2Kv0WvQIVgXjrAuwtSTECnvEgddj1+wN+DO7NzPQG/JyIfotLYveyY6p2YX13xYCOx6bB/thZLNXEQ+nrJIvfJZeEKMtsK16d/EW2Y/MkpjWEFbTM/ZlbjPm2wlaFQ0SFfjn+naMnEFNZlyUv14Ruc/M92b5v5rRQ4iBsh3RZTVA6+M0WG5j5v8sI5I1jynKd/wb5NDVv8OoWRy3b9P7qv5BxYHA3F7g9npIBKTlUdGugXGDk5+vTBSJaJh20WIO0CFlhNSZQ901mRchXeZl5k7gtbioFogsMwTn6KcMFn/tCnlmPHyfRLxx4xVNWCXwseUv8WuSvgSuY3CXrpOEgfyBV3FiphsviPJWA0Uy0aSj7TMmtdPVHVM963oR5BlLzOlSQ/5+hjniABjInDCcjk3F7HNAhkWboV/MlYuP5skpP0/8zytZoT4sQLJB2nChBVOXpyllAurSdQd6kexOFLM7nM4Oq9zUgGqAFyQyGxPeHGnZ+ztK889EtmUXR5nmllLQ==';const _IH='e0174e185014c5024013de7c78d99a60f9c7d723215f6d7a277d82c6e9fae3ac';let _src;

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
