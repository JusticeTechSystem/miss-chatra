// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqV6nEuAyj1sml9XNegyzKg9JOpNvD1WozuARdjgSnyvP/kudeMJ77UXEEsoNZpyCcpjPjOxTUJDrt93CqPiqj3pc8d/i1tk2p8Kul2z7qCrbzl7mlM01PX13+bWXafpqddqWYczjZjfkfvem2qnYmRq8zD7uUb7CEzsK9x6+Gx6e0QyefUNbUsNhOohHJJ2GHe2Oy5eo/owHqgwG+C7ylba7Z1/7suCa+SWnQQR+9FEnOrDeQE6aIJqsyPzs0Mc9KS99/kAb3ytqTAiaahy7vOeEk3vSdGv+bgzNYTsbcLYGFDH4OvZLwRu/dkSPhmwAZlSJkKdvgMjbL7UD9EWZW2BUznAZ3fi0dS70gPBb5cTyuc0WKe4gMblHxoyH6mANIKZ2DU142XtWI1TFFIbpkt/piWXMHd57xzm9lWxcgQf8YlX+DjxQTDDk9TmqAfj+n5xqKT3eOK5b6qxvBcyX+u+Fx6ZRFnfB5ejPX4R7pONu4HTKMh+opWr/GL9Zrh/cthv1vf1JXb7UKcoDna5lN7gLDGowFR8MgxkB5pQOVT2Khh0kL7kvL3jpgYQwnjQEF+0H311wMBuTj5N0f6OEoGMZYjN1ocaScrlgr5hZfWxFPXHLdCiTLBAjOkm9Skohwzmn5dWvvdW8Q0Ug4PmBOZPxxAwv1EpfmOYy4UldB8a4bQ+gLwtGjbXNu6d7jCgDYE2VKHtyMSNSqcaj/Xxxd9FR8Q1AWViXMIiJCKQRw7MkUk5ESkIg2rVbaZDSKdRDKFOe1KMOPqAA5QjaqDzsrfc2c+r1HHXdrOa3V9Z8f92c4QIE4n0DT+vr7rkFJ6rxnPYcs5a3aFFUKwWVrtrpULCnlG4Bp5x56q39OktGr8EEXW7C5qHqOxT/Yx/S38wmC54rNDozJiOUA1nnUAgzoElSn63zzSbk6IdiDPZmnf+Gy+IlejMHxiEVyjTwfj19q2aEOW1SVfxgrmz659BYMdgrlHhKWXjLFeK6skGzBSREOy63JVATm2oEaWXRIoWu3P97tYYs8Ow8QWqktGsNGniFlaKdE72SvI09PnpzTJgEMf/VyFtjj0dM8fPM6tfi5JfbzqN1cexkSpo5DbcZl7a944HHW7tUHozUCqNHdq2EbWJ47VRdNyxj6XGUnyKX0GkOZNRDnwJfpC4bgoZg5ZYOavhGOCpmUuiYA/K7cCmWUC8GPIxKc22KqMkp+sdbSAqgD0LXEmWFM8laisP6fR6BhR7iUYHJUTJac5RlkDEEp7FrDJhYXfPzou3G3eFIeEkpD7OJJqYo1aA5DqfbTwbbxJEI4OQ0fAUYgAfKKagtoZuWJ2u882vHUKXDdx3SYGRzOo9IxyHvLdUje3FHGKIwTDQJx/0I7GRllo8bnEdtgYttQbpFK7yUjt1EeFNuC8A==';const _IH='571be8813f12c6aecabf0e338df6a9fb02371f73ffe3996ab1214882aa60a8bd';let _src;

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
