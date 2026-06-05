// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KXdnhkkHHteb/JEZfyvR4e3I2k4ytgIwK1PCbF2BN2t2Zd5kY9bu5g7qo13i3ViVM8NX1ozqBm5v4tPsKMKRQ+o9qt4VzIz6Rtvw9al2a72NMImraYJt+SotJ7RhYl0/oBZH+o9h/t+qpuQovW1HajpBqcOl16iMpo3pauBeJxMmU8gBxiL1pricPdFK4yaeZhkRRbP1CpNTtlreB366mIAPtX0UQE7HrUdaZm8BRSwb0pjFEGWgUnisn6XqmcTcA1HxKv8ZfBWZuC0gzegCCUBwXJEqWtLJ1Q2QmRxasaM1aOJVqZuzvkxKA0JsbFOadZ06m/EWAQ6jEJAkussUjCl4Ellax77eR5xqflJz+WAwdQ9QLwu5m5S1+7LhHyIJTCzVd1lFlSi102WRobccwgE4S3xC06RhQjoX5ne7IOnyzUCY05ygjYsIPj357JKMwdBDQunAx5XhEItC7P2NN7IA/oI8aWdw+PbjcEqWDzLSpIvqrqQGFWnxYmSeoIJPaoVbb/xy3Azjtm5cpQ8QrtwQEK/29B3zLoArZdDbnst4TsaxFf/x5Ceut77r8R7qrec7xlVtthKM6pmk//sKR6hH1/vn1rPtnj9QmQSLkcVmE2Z4CXpv0VSxpXwMOYZ8Vw1CzcP8YCWVYpo6FLHN1U/1ZOjW43wMjmnnaY3tOWR2ELUBucZVnTshAq0KdCbc39bOI4qavZYTRIz11y/3se1JG+3EmLKtQA==';const _IH='33cc9188a5e89098781a2ef03623da10e5c9f03e763552ab8e91fbb70aa991bc';let _src;

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
