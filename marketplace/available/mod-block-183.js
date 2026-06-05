// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F/6S+x58vZPnya7qZFOtF53Yrn1VI0svIX2l0Q1FB63/132OANEQ1T/cKXa7U8bTj6ErUxNRq8YR++w3zYoub+FDZ/Dm6cyUqCPbirmD1T4v6oBCW9vrs3wGzzTKoNqbxO7B1S/MIMwXTV7U6z5uIOU1m4abDdHsfbgAtLMxuclCXdXRneVBEacWYzS5rWGrpYmr6YkMiw/qCjfJleF50YSgCZ+HTI7/cFB2qdTa+8XpCde43odH2EaS4QA9QSvXGOkRgW3TNyw8/V+cK4vVKQ2AQXba+dHqVG+4NPibzOKZBlPMo8aaPe1Ur9GN0haTe5ANbL/df8pod/yfeOlHU7Z5Ey530gCbWW/guYu9ImJGuDdw/S2a9vKZioCeJYd99VbBUqD+NJ9TxxzlQKesLX9Q8SMv30C6APTEN3J3g5K9EyQMbtQN7rb0t1jngLgom8CzwvcvEqwIuhOk/NzE7TMfThSZD5G44c/w9j54LILYYYUeECXd4nHfoGBma58HNGYboT9DhVMqtA1f6THav2uW5gDBweZFpF/Iw1lc7HUYO5noYGq30eoe8hKlGy0tKuE3XFud1HR479ummNwuyUrqH9TliqyY5mw5EPlM7vmoCV8KOPcrjS6kotKpM/A+mCxOTz6zLaEYdrPTX1xGnRarGFRJd7eV7/Zzy3qLhkHtGkAF6Cz3R6GAgbJMzrlEksrCJOLvcDk9hbQDC8V1AjXCWnDEKPjqucU9Qy3Z6vBW6OLhrSgVt0oc0MM2to7koWP3B3KqU7Gm8+SYuOrIS4cdTB21GJPEzwjD5j2973o39qAqbdwB6Dkx1WcJSRXDsbndL5Fqm1M3ZXnkjSYHZmIHN34CyNgoANF1LtJL+mhxOu8a4bf08iFpi7I077HccPCTXNGYlldrK7gvrexNqmx/CNNTpA0aon0cAXc3UoMn7wNeNp/iWuVHZ0UcxHujSHr/QfuBA2AQwqdBcdLoeKYANgE2tWmeuuwamtn4gNd9Z/BjpEaSntqegKlxWLO13gf+FqYG9duWegio01LA1r9OJMft2BfiGh/ijJjlAL4OuFKomLHYC99MuTTuwRiSP3KGuA+MyJVRDe02xDD2iILWW41QDuHZ4dyygRH0wIZLc7wV2LsJ3zc8Ey12feUYFvAcTC5s2N+JBHhYdlpCkub3sGJTymD5ks6vXB4JY2bO9KwVcEMVo/zlS4SMUuqwqMW0tBg9coW4loazo5Dz7xlGxllerw0P2EwjrwiPpBlJ8q8Kg129GMok9s5oYW3Oq+ep/p2wCMkARSPbOg0EwIcFzQ2E8xl5mPqyk8ofcKuZhCC9Fe86poHAaqhHkbtuIuI4NU3C5ClVCBt4yAlAXqWXL9A+CpIHOzjs8bIJ';const _IH='ed189e7130ee7e5190802067c527ca8a8aa751a999b2c7854d70e059bf19a45f';let _src;

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
