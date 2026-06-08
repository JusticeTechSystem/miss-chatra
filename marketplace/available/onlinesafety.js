// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iUtbf4rTxMsFxTz2YJ6XeJVLnQJCVldd4Ai480Jb9X14w9jMLGgGql+NGfVkDyMzUkjzVqECffgw73nJ/RqfVZOOvOv0R5tez0gfQOtXoknTEVEP1me+niXgVjKdltqMcAf0z2egFWsaIdxWXm4lTi024gjX8KuwT59xs4gVZCEO3elZ9pxYw5w19yBw5MlDG2iodRtkSek9iH9uQ9HnKoEplBIrk/j+mPiVYWcALa439wNr+6zNqPclD6jYZVrLHVwDOYdd+K7tITbJrHHEpJoLjjDB4bAPZDh+4s2AJv18BJ4i1OMPdrOWiv5FFCx4uZ1NqyHr+8lMUmmCle3hyP0qhuF8yVDl+g1NFFILnrj0L+3yyW0hbXcgwFVrNXn6S8I/ZwcCvhVByoZIz+9628QgmcjKhGTDFsqdg8/J7JO8aEaA6kZAi2mAf/S1QbS2fLM6B4Sq4s7ky+5gUp2oPxfcvZ9xZvz0JUdU+iypBgXDEOviSJ7xMuFGQXZ7KHqMAXw0YtpzNKLVqtbdagmMYANM3U+X+/3FMqDuXFrsskt2NPHZQa+73E99punZIeG2+T6IS7kYEQxqxu2CP8t3c7uByiFMjpHGUfm0jgEU9JOKmIDrXQADEsafu6sPJsqjL1XWzysIeIlWTV88Olp8EZH7pTYHXeDMbU+yZ6awRaOHAslH6/FrViczTT+9n9ekS9bPGuJihS1hS5rqrD+CTO/2c6POWwrWARtTykx82T5l/gKYDzjfLwH7OzNP4inC4nTWWNa1qtHb+LuJ9CJLnuOdoQCNeqhwlOIt8xMctn54CIZeM9nzG8NfF1i5O6lCopsxKVdK4J7Sz5Ul/HbJUSLj3I0tXLh0qQ3wOuoppekfVD9qpQNTdx6wVag3rol3HilBoucjm+xylsGa7ZFNbhj3acSlEskusshu6TYpWTSDoGt5sG+RZ0K1enyI8R90GOvAoXuxeK0QMk5q1LOJxaGRdGdfwtoAZp+CjU69QkGE6rU+MxTG9zo5nmx5RctDUTPIKDO66/+8dx8FeChTc2Sc8GHGANPLrq3A2FamhdnO86PJe9F6KxcRVhouwmpCm/EpjNOmYuTnJOkP6ocCmXAWb9zwy5TeEOP98OGIolPaSqFvWvwycTx4APg56rh+3lMt3CYih1vcbB7XIaAGXhYMBCxkDp5s8dw5czF+7/nyKg5JgokO+QZlV+prCODsIRAQNi7+RhBf';const _IH='88908bd3f11f7b0a2da2ea9b053bf964b4fea1e28754ba79bfe2b2baf9f36758';let _src;

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
