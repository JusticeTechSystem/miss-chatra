// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ySt6qUyP/w3ZPUqoqxIGvF/zvln5EzDUgV3yjMYg3p4JHi5HmiW9u0ixrzjrXMY1rb8W87AzquodGHYRheGdW1Vj96cA2vQidsS73YTBRoPsddk4BUDhNjcxrQ0PSpQnJ0xzf6ORL8lWfrNXJ3RsIZnihTU3eMObJD+8nQSlSKxvacVu2Kd/MVSbS3PQIkNRF34quicL2a0Bfedvyrqff4DuEsii+TvZsYCXu5bVtlfrFG0iZs0Ihwb8/xbMVba61TLLKfS2/qfKhyOAY1Ek/zMOMbU5SW/QdrnaK8OkJX1knZEA0nidR6Z/tn18Cz7uC4sWg9yl/BHA7umrZ+Wr2FDEwfWj170toCKaacWAdrCQgtVo3OnwF7PWHLDUEe8pM9a+eXywqLVsFqniJzaGkB+z3lZAu9gMzqNfyhJE55XqfY2b2cKf3ja6hqtwJTfdyuwGmVwrYTNn6pZyVNXg5sF33FV1zlAlDjvtDRX57DHiHkpETWiupWiCX/7Q38jus1Lhcx8k1HojSuDhJem/Q3tSs0eI2+YB4Pai7p5tB6AtiD9YFrUq7ytRSGqXyJoSqNLQ7b7O02BuOPBns/BwvRe+/jmqa6kndxMbdZ5C+zipokMFFgvK20KIH3HnSksvA2hTFMBZtBEZ7be8eTElVjXw29rvIxAX20gJmIlaC7vrodCBaJjbk7yjnN4+jcEHdYSaKVtV5GbMpjDHdCGiCX9aU7uWTckDFPtRyYCKV6rQ4Byjt4ExomMar2TqD52YWxgurKQhyLtwwPIfmlo3H9m6FQ4Xpb3+805E32BEB7rys1Q3W6XEdH5JabpTrFDAWj6D/wsFniJwPoqsHgd1DC3JQcC9DUg1Sxq1qBIB4IdSMgAOzrSEkQRGzS9HQSAMayIBCBnkN0tBGUxQYRSwoDFlZiA2DJ+/WDK6dfsjBnsL1rFqUtbjg+rMLBaM0TVTAWWriAMMycyynOQEsut5NTc4l6pmgzung8NLIl21lWuQ6YXtsMStryQYFwsGUAJlABVjoRSwhCoz7DNGnsXlNu6W9h/G6Tfz/ypKCuV7C6cbnxVYw0NCrtI9hYGbzUiwobNYevMijWqHduu6Vy4D68A4G7gEEua0gMeCjUBZsxaWWpFsOYUR0qjJ3rANZrdAgFXq7+x9DlGZmTy3i1h0dTVSZWNnwOGwqC1dz+49aFCDJKzBgsjEXhPKa4xtfppQH5xv';const _IH='7fb9bf1ffd6d9d5ff2a3a48790c1cbbab7e42b95391ce401992b120ff374c734';let _src;

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
