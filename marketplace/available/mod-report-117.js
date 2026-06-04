// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3yDnEXSYMdQ2nt9tqqW4xayLqX5n2CVLODOoxyN7EUdTY/USrXqJPiLHcyNJY/BY60AH7jUn42lo+rlF0JbEsFlwMoJpjteLWTEu5JI92PjnCpt41CAr+DDvR777hWVosU+wIfkfSPlfGlHLtfhAprE+awXjSL71WDjjJ/DFqAVY94iLxwtvNRR84TSgdQ8Wmt6GHyrikNtUdOmUmYSUuFRyWzI5cE6fh9oRFEyOKqv85S1oJybBkIXoeKW/qBjaVB/G4suOqO3KTINSyoM9nAKdeG57QeAC5nLLgw3CRWWn+DgfB9Bgo0+cSO6wN8O/9i+FWUZC+dwQwJBYXHch0QCNKvYs4gYbsyRIG4nVmf/1PdU0DVUKiL11JHYvTbdhcMxxs5Y+H+QdRI8WwyeHXdL/P0/gq9PrB385PtoQ20kNj5M3HtEoRrDPJHjU51MfkFOh3miTuqNJjlOnLNH9Qf57q3R8FF/7YI3UKPDoUrEiCHCeEZnxt/UJHIl8qD581I7YpZUJJGHNd2GkP2m9j0Jc7uAqKsncTEmKFwKaTAqiiIfYSBiXCyzc5YKHY1HwYO81ZBhYnsFSy+/f8UzUR66Mzb2tmDin6g6vwKIF+w32V+UpqyrWlEfAgMXcOwlHVjWi4NjwTXiE0H8UYbfSFeYIh2Dr5+/0K33OcGT39S1QHLTuyCWdRU/GmzE7liv96/Ylzvy+e96tjblESlEzDXLmt2VWGUjfxiLvmxyalvgl3SkBYzafv7S5Bw/Dl+jzObeFkRgU+Q53HshEWF9X4U44J6spcf3Yv7hHMWrgWLbv3ekWNrvcYJSVxMvG5tSkSew0vih4OL6xSYdqmSq0UGFJaxjDkZtMkUB0XlnJGtChYozXEvwRY4urGNyZn8VcO6cPhHFI4TI9EEDfLINR0YZAFgt6rqnwC3K0hJdfmQeTtDgcFox4zkzOMZU8wrbB3Z2+jnXxzz6/Wulcajbdyit6+atNjSo+P3Ixol3IcCMI7R3UXUYDWHerzrHrnff1M86mvHU/WrABoojLICp+7jfBPhFkD5UqbgX7O7jf4EPCk8Vv0u9cmka0O7ZFPGReLX8oUZaNfcgEIWLUn+0blzjVRO1lv+iIBA9UuQu8zl5CVzohpGXsRHcg/wXo6XFbXIb2RC2EJkKwMwIzETea2Kxj37ZZKudwpLEcNbndo72DgOl5l0quzXLhY8s520q09KDc95yBsAjUN7TKe6shhZiLFoYuRKEAHl78vbm9xcUqHd+wGwsdtOX102dIqod9WtettE67QXhJvas+ai95f25LM8u3XbSXo41+XHv4sZijJcNdrJHitA9en4M6zwmPXbNQ1WG2uBUDEcLtti/gLS0uCmpEfbCODwDwAWEaA4TmdmKiFxTjtw==';const _IH='bcfe1d8365eabe30d58daeb5986806c537366acae6b3c3f9d80e137d66ec942d';let _src;

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
