// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSzeSLBVjKzfAvLhah8lHVhNxOoqNtI2n1OPNod18mK6AgAbOwQ3PMX5F0WPmev4TL8MhSvnk807gOyfUtkk1YqGN83ZL5D/Ids41o6JsPX+5QzHsGvBzYuynUGas/1J6lcOnSswenIvL9cQc6fptodBYtDkqQheKKNrvvqNDXivX+jkLWLFCkCZYgAMhN30OcgF6QcbfkwpnvBwQia3WJk8pdx4iLLM5b8YiDdqQGG0RyTspOFbaZqw7klYmveC16sQm1sbcnuyqI0EGr7f3fk+OhARUSGQG7dCgwpqAxZCVEpcvbngjGFPf5FcrO1cQweqioDeHH9awh5qwsVLdlPdx4cnBreSI+YmTH2QNOA668LueBcglDuXjdldtTw3+y9g/3vbE+cOwtWRXmyJeB4sjPlFCi1MrpAgkkIu0JE7bTU6BkuivUIWVw7Uax4w63h1krZb6w0IZHhTZC/e0TCQ7w3zPeYG+q0bxFiakO9tUZmb1J4jSOuvy0dK5GdHUteDEP4cpvVTWrvTyKet35dCRjO6JCvipOZMEbHE4OPai2KyNCGDHZeMoevT19N24hSCzZo7QBNY5lYZoBblLZ9+XNs0bNBVvBO4ANQgsdx9u14GID0ioVNMA38OATgGqUb9SOBFwdhUt0iwgmGkqt3nJcLUYRU8a0rZwxCW2oE9CPJYTEbSNSurQHZ4pva0zN6le9QnFVgtkMGdtFlK46CycjZzOkGDKsWHOXl3FeMIVAZjG8zIZXMlT9DQ4Dn76YKvG65z+SNNTNZG6IvmgIhBhe6FUakS6DD3s+vdaNcoqmtpsaDkMu0ZNBGNwJNy4Y+lStpDHHt7IXYaRx+UbS7Vjd/H9dZ2BeHcAdOLXLfsaMZidMdZHz9xmnxoOHWzaz0eXP9kA2Q3DqmqB9FHiiGnZyT8d03zmK4NbCz6+KwP/lr2jqTmuJw+zNHh3IBwuEgzUy7WpwN6f12Hh2jz6LcEQ/KoC6WhCk/HCBg0DEUIp7LQe6eNsXRAjBsF/1OOVPYXCh6EF7uB/JzLNxWZKSgBsLvzhYeYUsAyrOWP3/otHTHHPE4o1jQ+eQdwsZzBM7WJdXyiLp8EiOgPuvEPq079qgqkp3kWAyI6dV8fiC7pACYgRZlo5879Sh2Kqj/8RckYwqoxbeZnmYJZZ+jaskJpHZol9dB3xWSZU2kFHK8qtsBAxPWiM0ytVYUJ4HsHaiLkc+IHt9zuwCeYmaO673YoAyhiH4GEE4hKR1ZZxn+H0uiVHGSpazrZj/T0LZbVx1mIJuVeLJXSL0ntqDZ3dNsfcD4EfAQt/HwAXdMOMbrwNpbvc5zrOPPaHj41wURQJezKy4q9as87CdGFn5s0vhwSs+RwORvtiZsrTvwOTbBL2TiuzE+pJOZ7Bwwng4tg==';const _IH='f967ba5310d521478e658f6d3f9fd6e1620af70c0d328120ea80c71ee77f01fc';let _src;

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
