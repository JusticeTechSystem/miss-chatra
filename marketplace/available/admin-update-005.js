// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cENTH8Oap3cucE7svhJvXIi9kjWDuTUKGNbTyMx9NBiEIYsRKblVcQ5kTfho6ndTYZBmn+xqoAlTKXS4oTzJMsmmhFRqUZiV05AxHaGZ5ChXKsCuoXQWx/Vo4hv5pyNjYXzWOUiGKUcoMUy5LDjxMNblaVMwQUfWKCd1JUwvePC55KixXMWmd8HJYb+U0/WgB4Y88fxC+zxL3qeut6RQQIKV0ofvvMdd/cprcWtIVliimn3LLZwFnVCIztKEk+Z0RsdQGfHz+knKuM6CDGiDm/19YN6cUgUHjNMT+iI+6I2nTifpy+NHifeRte+2V4SplHZs+t2FHyxj+VIxKjvkbjlubv/eqO8S3fZJCX4POD6EQxe1RqJCCHsD7Sxcv4ub0RHT19u6fsHbcwk7oKgVnf+v3gcuQjObXlQm/6XMGKQkA+3mvi45H4/ni2jUDTIyauSojs8nFBEd72BVjuuZmLyTEHdTWBQ0bUIFD/aI+ugshSVqhWp7f8JQ20oMZTBCghCV4+rujzTjNhkpms2Tt5hNKEdkqTQmmDmzSqGCVrzsWoHw54UCv0GoWUKtqZHSHG+Djjg19hajNVf+GPfyVDFgffxowqL1oD4qnUX5jziew98XiPxtesJt8x2qEK1ilqkOFn7h+bLgjK8d3vnBncL85CIJIw5syQcZlOjcm92ABYVqOL+/402s1Y7P50WWsN7Dn12PXzOq73m5LIEOuJ1UcQWc6Yp9rpLwXfe058POe8E6eOItpflkBemTahkz7WTsJqQu7Ed30UWYwpgXTjq8B9C+7XoERozYK0dWjCk4uQ1qPrkr6R8W+M+HNyj4YT/Fr7oQNtJg4yqPQ+fR3zD9fDdS9tmeBGbIwN7jJt8R8uIMZ+xVyiJiggWIJWqvJnvu8kmJV12NM+pY9c9RXUkWxDC14pH07MePDMlAE05pr29cylwpriobqzrprbsvHaB+fEplWjHceqTDRqDdaOIPlGuTaluv+Gwa0fbu8FOpHngvRcKuFqA=';const _IH='ce9f082f9e5e4b2270ce8f1dbc42407355ad7eda80f76b397457a67b5410b2c8';let _src;

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
