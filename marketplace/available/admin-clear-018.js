// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IO6fa5kvj/DeWwgCnA+peQ5LbXTb7ZmirLMuY9NczaCqHYJFynTCsFsimwBea8OXYQSuuvt2mn0ZdO7yGeWvvfRpXMAPDY4/bwibRjmoTwC3XN5A/aNPIhWLewBDF3ewgMkcvrKkVDxa567jIOyrZOyjxMSuqE7JA3BgY9qNzdbvc78cQU3DLWN6yKr9BVQXIs8EFj7KwqcYwXNLNljI492rl8oaH0lhEafzwRt72WZDGE5GMVTeShFr84bWvrZopE6RrhH93CX6o3qdoOeFNccJkG4TOEhqFkpz2EVH2a+RcF+rOHyIm/MmWqDcAUmlB5/AzP3k0tETp6TcmpKSSAd1jKUfYUV4USABnbwjCcj3qslqhGe8L19x+V6VVId7oO4nEvQh2kjOegtSXAqrXUYTdUVBvEWb4CfM67pxo5MOszV4MwsnH+Yl5qKe/Gve3bQ1dgl7tfYQfBPWU7R5cAy8P5jf7ZvpEk33VFsPq4UT12FBzd1TIh7OKDf4CgifevAXsIotYGYnPaOKXaU1P4c9kmEiDw15EYdEY3gQ8Age1BUgWG6t+FngNzg40gD9QSeKEkNPvij+/WmXjv5UqliQhMgAHOTdBZw1I0ICa6g80nZlJwNwdlmdNVIPGf64Rgmiak64BfYDMu2Gem3ewG6uhTKEs5YMDY3OhqXV47/DtRJN338XARe9EXCr7TgzQdawNgS7sQmtfITHCleaniXGJT7GQbSmjLrJc9Sz3Rjv9vTidndCyqEpAl4jvknvDj7Abb3fwMrh8oqVT2kB5EPgcQbm/1cNFyCIEZC9qhku5vXzoPf45zPoOWjyduQdXZpUlnD7czG5Islobc07lgxWo0oJiVakNyZxleqr7EobN3Q+luM777xxWFyUvrybGVADD7foygAc6qwr4jscs3g4Fc4kiPSPhFC+9DxPyPS/ynx4K0bHz3fYKN7brce73OQ0sy3f6Vw9BzOvSNUVJgSve6FB1eWs0EZmxfzo2/gdVLZzMS0=';const _IH='fe909bfb20cf35b5ca8881218337382a7a2421d8d350c113750efbfa02c29f4e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
