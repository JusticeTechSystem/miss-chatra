// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J6pJDqAKteb+REDj9Egh5/4t7Unna73M4mssqHOviD3odyaVNQEAifngOlvRaqeFujdMTrGebFOxXgW0V5ngOu6qD6IMKCSfmUcYLxA93NY9FBDBAg3M6vhgHpY1Fdjr+AljNdFAKJZU7GC5TymOnWcLfr0v2/N8y58BvhD1q4gRn0PRjwPBS0QgJ7WAQ7fyYPzFhytzpZ90Vuul1gDzNavBVVafsx8RydxWvwLEHKQNo42Ki9KhqGHP+7mdYvp1jd5wGdn66Ys/W4O/K3gO5lPl9iLx77pQDgINh49riW/LNGUE84extGPlJN4ET0kKIbLyO+BASZ0ooVqUQYSLOrBxDJRXCw6ZtuT6MAcGWeJOYVl2WSLyThPjzmGfHw6Xk9spfoDTJWs5uOynwQbNGTwfpsQiC4Sq2+XqOR+rnrsuBlebV95MndIEHR5CtYXCpevnI7/0xElSLAgro/OHbz4OICt5ODPQ4lOWlBzYWuhInaA5xpGnntPVNWpzkoqE/dqi2jnH68RKaLjj6d8rSAm/nfvM/d+0UvJKUj0jmdFj6GC7zkbyv0YWZ8dNKyli0tB4Re0cfeqiiSQQiCX9oqFdD3c21ki1PgzGKymrrv5BVcFKUnZZZwdoAqY1bSY9hIyyCNxk5H/CJhQKIQYKCFUx0y9kkaN+Is8F255oNrQ9TSc6QEUF0fDSFCKWbY7zrF9u0Hde24kYN5X6FVQ2JcvOcKhfFIDdo6F1J/h9cqa0ii9Wq0Q=';const _IH='dd00735c92615b8b76212f3f86d60eab652f0be83e677368bd8caa6ff2a14882';let _src;

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
