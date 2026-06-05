// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6iZw1PX8iR7KLwtAIDndFtLTAhqMPs/BZwepd9Ez/YjK5UU6A9Tpcw008xoad4bbu42+TME0DAJhrhLEE9yHrQEkEKJBmMkt5vEgrcaNkM/p0vBNCaU3rUj/XHjthfuyrowPbAnxzGMhTpkZyLyQ895yW9gYU/8QSrGD/QjEuS3F1gHa+PhU+2XN0eGPnPQzkVEw8bq4Z+xkBLBTjiJrJI5Xp6Uq1MdM48TLo8JsUcgS1ZRvO/+GBZkwNwFg7BJuolz3hIu0Cs73eEVzH/S4lUTxdwSogoq/Rqz56zpRWIzIYsWhDDfp3Q+nRcSrmOiAIp8Z15yEcN0gz3G5eaddKFOPsZz950rXv4jfWOR3UyyNlMAj3h0F30QtxarREzkVZGz4Ilg15RCAo+KnJtZfDkgONp4nktlS5Bw+aTKrq0p2ItjufkE9KwrxVR2U1VLuikl8JXK8/p1AEqjXuH8bgHASMMY5wLyCbUGUzJU8TM/t/xKLjkSs+Db3RxwUbooclmIiS9jrbC7eO0XmfsKRiRVaQIOCODa49YO5JxSiQmPe27TW6hIz3qdgyMrft2c+clLDlwZiqBJLyzZdcNcjgj32FhRdgXmWxjOKYZHvfWq5Hn8SbvU+nLkDmAIyULSvhbD7oXViYq5UHtHJ5YIuiIUk7fnQ7jd88D5sN4TZWpGIHL8g0z7nd1TgcFvJfQNzPVUxqWePOtkdvVf+AZyWNGQkHpJM3YzqE61DLJo78saXpPXBu/VEjhgOThXFfwBOhsKjpNOYt4ps83UGGSRefpsQ6K6FKE3kMoWXuzX46Cer15PP2YQlkQqfNTQybvv1PrDsNGwJSnd60U6QqpIjj3nCL8hoKLZ/mLJie9c3eNUgIRoeaf200vniEQUnmDs0HRAVxXHAgPAmeNK9YzRTgSyqujSLyiFFZPXqKLmYBfZm8ViL6wkTYsW8NwVqYBOXtnoS4+sViZb2DuuIqYnh5gQF4S8feTeT07hHLiVe5oyK/OLHr9xkEEwiYiQIpctUcgkC300Ci3mU9gYUZOgaLPquXKILHQ==';const _IH='c29a5236cac278cf963d73fe1994596146081bd719c5fcf10d2e96a409f84bba';let _src;

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
