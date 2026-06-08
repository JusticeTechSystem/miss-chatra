// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DHNjJlYGqcCTIpSmtbmfPLsPXqXcjhw37aCn3wLRKN138xg/YJ4ZwJNtrYlFdXItodKtLLEvh5Y/ZYR28QA9Q5EdJQgMuEdV0aXwwCXuEWNRQo0bH2kKH6sIlM7vsv8OEX/jVFxGj+3x43wsMBYM9Qzq6uDzNzyED/5Xo6IVJ6pVw+3YDug5WyDK7UXNViVOL8gBVZAPFFEWrye2HfSmqCKV0rYXaMGGZwFMF7Joj7k5m7iUXSlFtguYWjUV+876WJtCrRFoGfFu9iop5TaMxFYmabU2ojIr6GpAS+ua8lQgXcpKen1X8BH539qA3/Hs0EP/vHdLN7sKwLFsCEIEsUPlyv+r8JNgB3eYef4caZNpDrR4DqxkZYNNWoQK6VFbo3FWgcr+TWsHHNbbsw8CEQM5t9CKKx+J9evqYN/8qlrTZuLDEsNhsoyj3MZibRaKU3lz5TY+4OnwZpyW+NQbYn322fApWkDG6H/yLoeyJ+oXlSXLXpy8Gg2pWuhKqQ851TsvIaj2GmvrT0G7h5WI55Blnxjc5Wt9tIJuzznn8CEej+/ptFvRlaCsHln+a//GkOBuczPUyshGmSNeLxr59xjgI0vithkdhCXzrtJ8QR6ehChKKB3OyoxyjwenuOQ8cflRH3MOgcUxLcwGLXTCxc+CUqMOlJEs0hHzYKfu9cQ7Ovwzy2xpP8ydQm+sDNk6wTkvoqIphx9oRFaw7/Df5mTS4EjgbgEr0YO7K8uOkjCKNkeTE7LSRErZeBlD+iYfAcCBhZ2BAXsodKC0CKS15DwiiKZjdLE4rsucQfePNMoQ+iD+orRIX21VSFoJD2CX9wATVJxM+SO2M7R3C4sHbL9MWHpxKTlWEth/aBVjiWoTOq1WxsPXer+TjrUKt/L49pk9i2utwt5r0e0NKppW34UkJWcDPHGR1EjioT/hEyKfow4+tS0fGkfu+M1uhSgj5/3ZBN3o04W77RzJ2Zdy+Y4NEunHPZsDC08CG7b7rOtJwkR55IhkOtIlFe4yZi1XNbG6Of2HeUApSw4n3nX43vtGQrbG3VhumJw+yW+coKOngN6AuX2m8lNJ6sO++quM+oJN+tEY1XN+//0XqCC2TvYBAu69DLHDwLOgbaxUAWYVtk09uNFeVbPDsxgGGJzUQSeIf1gF1LX3CWKk/v2O7g7VWAKqymF5PKUkRbEQpzlV4W8K20W1BfYq2sAeC2a2U9hdRTgVCBwn3Acj1+dBzSlD9MvH8P+ziMvf1JoqGfNNGimDpHz574CbneZvOTdxCiPNuC8zRUXnzD9z1SgUlfLeRHd4+Uc6SiCr5UcyiP/4n4VWTqyyNytJT3+rCYxBhireyMO8fFPVu6Gg/DcuBLvzuU2diZGYis2AA4RJ';const _IH='99360ee3328ceef8c716c0b140c2d16e5af12e07c7894c6c7f90adfd284da03a';let _src;

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
