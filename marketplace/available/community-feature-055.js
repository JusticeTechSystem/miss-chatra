// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a23PVZ2G9rg/Quh61odLMuQMTLRa67ElrHl+KZ4BN2923TXS1+apa/PXggd0l2HI3DTMMOhmnIhnTxHIE5EwXbrTFsTJgvXyu+aKKO4uK0Aom8EkEBbcMCBKWDZRIoeuckFdB7UCcveWumEYZfuo4OES/3tU5rGD8L0a3Lz8ByviVsnrIrOJkbqZAF8322VkNn7EbGjxAISB9y0QpexqO9tctEzrMrtGAgfknd+PMwiYZhUWuUhUOt7VZjE0/uJ2lpRsU9XZMdGHRHLmG8oJd6YijWd47uIA0M9UTchRNO/PpWwnafOmjSt4BgAdz8JOjTFMGwGd57nMWH1h+DaGy3Xg/AFn5dYh8sOShSk2FBKJ1GF4iTCmeG9YInmQExcekcrLCnRXcBQT8TSx23WwRSq+DsrdfdC8yuBSVIVIBkxnlmhMagQhzrE1vYLv5lHJ9Wz9q3yw0QyRn6VP/oZpNuFPF/NuZ59b6+q8kO2kFsi3Yw1i3gn9bPretNMe8/sCaMFa0X2/p8PUz5chqI2DltAyj/Mrg1VsLu1JJJgrH9B+jf6kDDAPmRVBTfjWcaZla9Jhpc21V5akH7E7trGR6EBhPCiZiCoKvrORLpm4HYakswkHzSsQdsbG1OcJbAF3j0wDFf3hRAklD106MDgzBBXEHMlvwufebvD9gzFw6icTd87PSwvZYueAciMvz7cZ5c0s9l2nso12Yb6VONXTgEfb4O/9c/sCU/lOUoUushe2KDvQL9I=';const _IH='78443da6c2fc40db1d5f84cb9a096e2e6aa67a7a164f1ff3c07f0235fba06e09';let _src;

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
