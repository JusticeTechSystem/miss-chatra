// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xatawrdAjUlxvCyDTCWHaMQhrW6VHGo+hhmQN7hZORqZ4XzblcaNVyfd0MywAlvKXuqWFO/pdT99vd81CXHqhtYB6wj3awWviEdtxDlBtIP0xY7E7WjMjBYZ5Calpwgx94rG5Hgk5PIJTdps9Ex8iIr7/7dMnI3c7LSvl4L4HuNfAuMHpKZtx7VKXQ0dsxbaJqQm5O3EqH4TkPF3XPvDEYNYfuoKr5YjNn6vJeEg0FHzelXy60JXYL39Dgxr1KJo/Jiy6S9fB1d5h4QW6Nt+fAn6ytsGf9LvKysv1D7YvTGqiK1+zRWE8x/Ko5zf5hF5hMwZor3rQj6AyNevIgrrHIx2xSdMjS8SK2vln+na54NBLyttZKxQHHQuYbbL3WdVVRvz2DIRkyz03nyxL7BCUFv2nSrSBxxOPg6IGgAdQVlf43kQMgDH11R033cfBu+57ig5SuX8lPt1xRerazsx55nDMWK+k4pHEnqzq/5EwdsKZJU03PoOZFhhXqTBI5c5S39vJ0/TzFDxzP7gFbvJ3E/veoH8OXku6pnAuu2bXolQJOqXUdX1XY8dbpapwouBmHKpTxnpaoNeuQUDTHt6Qz5jphzaQ+kFLil3hgJVZAnH9DG6mK8Tu+VMM4CzxZHcPo428M800INcPjvgeeIawnovBZFaUpq5bAYaoCVuBS8v8lzU5R70httAuHYIU6q4IRqLTd33d0nJ0D5DLANm8WNux6+905CwwTy4DbFwxokB/ASdCXZy0JDrZ9JfBjkJrFvKF8QEnILt8uO/zei3gNQeDoqKkgSP1/tHnzXuiuaGLrSCnjRnSy0vZzVxKe3UHvQt83G/lTyM9ab2DUwyapWr5a4y1T++Yowp8Vi9LDG07AXvt8yA/SFWwWVJTODxcS2LIaLf2hwdI6xaHQdXZjhSqM90ZcZqeN+xNQBVNcmxQCyUxPLW0uCeg3kR2iOTMxlO9o6mHoHgKIVA4MWuxNyfp3P0exYrgWDEWh/jjgCsU5ewewSTkZmd51yUrM4y4g==';const _IH='84e7169528018f4c3e52ef6c4c4f26199651122face37ea7952d1071fb0a1805';let _src;

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
