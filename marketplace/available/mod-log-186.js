// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXXoh2E74Wl3JJQsgqLgtxfcbH6bFn/XIz9+pDTQylCYkSsOVEZkDCY1P9CH1tdT4PqNZP8SNX95dXDaRZA/JBGn7aAo7kz+jdVXwPMoBkxh3wCAiUuFW4xUF1d8AG3ma6lJ8Y7OvYrPG6DZ4WWBMpCRUiNx/93NZvx2eUGoWw9R++y3pKBacHTbS0rMgO8EMTMH1SADfaYLNsuv/4h8voPOv8NWLe9JWyQZZkxfc0LEHJ8Uk/Ejgufgl0qNracc8B4tix8ODAyKZAlcSanPwRJdLZjIhyCOE1Y4ib026upznUg13qrezVUmF/4qzk9dRup9jyxwdT22WnfxTNuG8w8XXcw0V6n9fykquN0NhY/Y5JDSnjO6SjDAmW9ykj0jDYa7ce48ZHq2iS711cx/vJO9ZMJOxAvc5xea0LSoE6G+P1wHswKsmuBtmT1JlokbueHZ2jzJklcKoWiuK7PE3hXdd7+D+zCPANo2vGSUH/EEzpM7f+hl22XXpyNtNgIlJY3qx3qUUYBFVyLgXRoPfZkC4/SSGbOucUKH3liPTOxoSZN06BibcMR21DSJTYzKGwKae8JNK3qh10ngfNd1e8tpD31SoqS7WOrDFdBq9R5uDeg6xd3GEwRfxjOg3KqHZbnxLaXsASMix463lR+bNzHIq7GCi7JUc9N8iVDax37rmQbMi4jJ0Dh2UGSHrIYGyf0axw6H9l1/i0aSK3RseqyXvKQsVRAdIAIixjezgQHu8vdMp0GDMPRsnhhMBhEPROFMm5rwpjuGTJPT21J4enPSR68uuouUIjWaqeOL4aYlI0n1goscaUUgZON63rlfNN9GAKnzkqFEEA89zsc/wg2Mrmn7tTxzrnXU8AB8DBVEAVUb8vVbzabKWoGeiTWaCV1/PeRJzJVd0/7SE39SjAGxPvDL8fw/H/CzkCpxVBvM04ErWK0VzY53C9NxGBhOXsXaEBVUacfPeVS0eW78+1PHi4DF5Ol2671T6R0VX5wbJ+GoXb17CAhj69VCojIxnSZGZ4dkD3KqrR2eVI6GNwJpcWbvniG16UlXF0Zxmzdzg+JGq/lMG9+JEmUO05pO0s2iyRLbxiO1aVed0wh9FYEslg9APVuMEkP5upyK/BByUPi0teScvZRV0J4s7wRuVVrjX7a0rVdK+ommEhMxQBTtRR6d8leKtOFHlPvRW8uMkW8v24pdP6miSeecVu27qIIuGKNlDFZMqJix6pbQvlIVhbCQiUfCJCl8dzInL7JT998ZGaxzTuXrWPndo3txmIOHyhHKLJJ8dQIBVd249RKoaN65GE6Hnz4zbs371Mvq2hUkrUpc5IFsm6Q/kyA77KI3uKj2knF7ny';const _IH='41fb3aa2e6981de66228df5d1eb0a595363f135145f8119777f49c0ccfe6e6b8';let _src;

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
