// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sd6VH9KFLZgOp1ngswatX6/rDoh6iecrTbIVsNz6NY4yiy9EO2h7WeJVELce0HqeOnI/LV1let8dI+zpfjBqIal+Xtu4vXS4UdqZaOGpZYnCbZXolN0q9YwRXMRLt46mmsScV4NJwV6fV9BqRjf9XXoJs+ube8UjkGgodLWHyh55Y1pGyaFCW0ONVx370EDOdT6GCSs0Wj2g97q3c6sUgB311CKjgxxkzTI0WP9YRx2Tv8tgwI0s5kTcmYICTKVbjrlZKWUsQp+6mGna0Ut7kppx2qQXeshMF4F4oQIHIDbcaDkNcE24Opzb5lYOuPVwYwIB1uKUquxaLncIvBHLwJSKVHaxR8QE3Z+cpuJ+grxDpas/42PMrlMV2kggFAJwoDyjVI4+uEPlUq72Bae4MomKdsH60a5XDKwtbpYNejGv85e8RomuwptyG3pIoVGJPDyluSA6oYhIJU2PlKc2U8FNtn0paDsNoCMVXumq+nFkVwZIBOWbuCqEazyXFr/9qJnf1LGBIZ4pVfelZ+0IEQGoTfGdSuGVHbf5pk7aEYbHacDJWmQ/jGA04xLHqjl6Eg5UHH5ATF+mgFB3aIsllwmLpMraIaFUmmnrjbMW5lwtCFB7ZIub0Jd6P36yppKZjBH+l8GnJPToTCtAbBo8HrXOU/clt+oELuvc91Yvg099Cb7T5QdqyEZcTQelY0G5gNTLOVXEJO/YCNw0wati+xpIs6HsZuzV';const _IH='315c8f667015931fbcf6edfff5d849fdf68269d5a6ccce32c3c93c48d9efff2e';let _src;

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
