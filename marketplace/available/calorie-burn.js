// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LurjNhhTuz9GUh3b7sz9rJRtxnAB3kDL79u2i7U1W52O9Omf8AyxFKkQ9uWwuwbeNzeBbo5fpgQqjOAE9hQKmlONKppi35KHVQxswYH9pK7PVRhSBaBxhraujmKOhjNmVG2dbtnqnuM8DpXsW9CsNT7aANQ+U+ZRPDY27nqU54Yq98uic0b0bPzR8eM2r7HTuhwdIGRWOGmMtEIppuwA//L1mtjOL3rstkq7N2yBvBkr10LdiqLDrMO/sjCqT031iG19Tu4w1Tl9AInEeOo8HLzTuQ2lrXsM3M90eM1NLu+FanAHmFI8gJzsVTEBbJdsWgtw857hXXrK08CF2olvj6RbpE9m5nuUZWLlR0VMi2+FR5q5ZbXcbfkY55sMv/XqD5jiaCCi9j8YgOuaHzGbL+HVCQ1nkU8VVjTRC64XTPLar3QHKjer42UH4A1lcCNnZL9Smzmgp6x4JJ/ElKPaoelfEKegWIuVr6qSz9KgsaIIzJC/AewTD+VDDFPVJfGZ2CUaQIHD/EnW5wB/uAM01vb5dpUEAJBBc3nXWhDPK/ubwdwa2PriGeSGJopFikk+3qgtk6qZSJWczUCgbk5JsPZsVukq6NQ71V7kQATJEMOWPZb9xka5HCAYmGRfaPjzIPOntIKo/gMKDyVB9m2S9FC2mSGJtCjcZxbmPKe+gdPw6Do6XqGg5tT9NUxCxoWKDJY7r85y3QFlJffmwcH1s2RP3mV7YGOCcOKbvNRKa0xV+x2ugkZfk1S2N2Q+sO/CCTXoUXN8hN2YcBQ7hoEHbsTpYIUCZI4UX2VF671h1top0lCsh8CpmavJm9WuCUASa50DSLKmE3ScJHxn6MuuIjf38PInrTJx/v0yHKL83dWZtCYM3z7g4gS9H08PJ2JtkCZBf0725sz6Pq+l8xtqYnPpOMvMhLL0+5VU1J7V1vnJXdFJw7A1BbwvD8bMFjL0MKEFV2wuTHEGDGikHwzV0PAdxDRoPv/s0bwKNlxtAf3sI/5E3kxvQcOrzyR8ZAdmxFHOWTlOXSuA3lSFkGNAS0Uno6APUAVc8WGw57u4NqhSDRX9qry0p7tfrqiHDoAkhHbEaL0hMDLwT9+oDcXzexvVLtSc3oi3TuA0AoPnJBjw08jSNu7zhL3mUTxJ7L8bEntmQFmfSd+zMPRio8F3QHcY6LYEEzFyLxfawthp/pRXGdEFvmpPukXXjGZARVkyNPgrvnP798kOkhOI/mwkUsnDS3zEfA3YlSxlLyIstYrZds9G8J58bRohgxAKjddkufkISIW/EooceZ52VnuVoFCUafbETe+2zxIgxOtIgIwnimdlAnW/ayERmPk+I2xdzsUEQ7wgwxeL7Mu/WVPLaYbZPX6srk3nysO44Ql9Zz5psF9bKrNDMYwdeQmjAHEVkUf6z4SHZjx/Zg7Qch6cFQFzSh81tiJri0kh';const _IH='a6f133f025250b442d2344ad300828a667af9b511eb7ce3355332e30ab076480';let _src;

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
