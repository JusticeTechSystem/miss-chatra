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
  const _b64='lEwWquOXXyNr1faCtxov9mcxaRRPZ9gP6fFeQNhj+wfSaEsqN5Ow1Puc/X8fsIj6DKCEdiQTr0EiVB81skLingZo3HQdQQyP55IgY+GhZZkkxRxo9nJnS43Z9tc6OHaJU2c4tDy6lGuumVVC1/i7+PgmtMk/Kl7O/4jkPej6MPwOdQHI7PuHROxKVv1HF78pvvZHLUcg+kPg3QRs1v3f6zrYibLyzT+9kjioPViobdGfioITeE6jRwyoZdzk84Ka4iLex/rCGXtvmPcTlnICTz6FAxp5OFpdJVOQnObgfQTLkfvUrzsDA4UWPd4Ld6cHfD7NZQP+7isfV55Vaa9wbO2ql6BqseewUT/+zKXlGU3EV6FCHMnarK+wThKJAHyOnbGrSDqfFOZ6UOlLGpF/jd5lJ/QWRquMjfpF5h/KNyvs0nlpRkhOsoC/b+4rM748xoBPo1Z2DjNRV6959f9axMZtNcJ0i824NFZ7PzgolqU/NDVRx7wM81JOEe48IIrlyHCPIa7XT3jB0KqruabfcrlqwnsDPHDIqRk1of4qsohKvlnvC9+qhBHWP/wXXMFmBVEga69yK7GjT8HxKA9GVjN2fCofziMtMeaDpbSprI8Ow4BnSc0IuvsxnjFgrgJ29FNxCmT0Kxnse35FkfYXmWralnlDrWxzHWvJV6AIzd64XtekX/CXkNsFfZvDjLUf4Jtg9LxO2HJN47ZFftYjMc6TFsGgG96m557NRiobpdX1UbmwD7Truou19Nw8cJdyaEydGzBqkXA2VKW4sjLCV+Jdor9z2rYNU8UQ6cLw9UBpHRTO4XbRogFAptKh6dvWxXKvdzCG+pNLCKFFPEY5ayDwvPMethlTE8qz83ZJjgq/e4gWNK1smQl9vuSE6it1tMXp9GGI/xKxQaRcMTdOzFl2w7N4zmeYEzy2Rv7OELWkgmPeleUfokTlY3SqLeCNqD8jG2S+W7aGtHwjcLX058jg3rTYq0iQ+o5amk68XsYZeACLWfYj03+dPl9VzhH7jV6f5oUr2crNQ0Nlts4xct+aQCJgyhJC6RbDSNq5K9w+z2sC85k+mQaIONOtl32PhuQFTt8egdFoQmV0ineXFu+HJ2nEs43cbqiIXzlc5L82muo2AgJGVnsl8zEsBrYNAGOcoovSEM66g/XbC49dJNm6N9Td475WiiVqd4TfqTeZDUMCxA5fDVXqesASDDRq5snrj12Hqlh9M50EUBRs6d7IxOWMEcyRBxlR1knguTQuev4mYd7Q8LB5W9KkAe6HzHAzV1JC6/8ID+9AkesoRur01WsEsZiaYqfuUe6+C9qV15HUBx4S6RiJnJ/qL/TxBUPLklyVTa5v8eZflZ+gnJWvy8B4m6bS2f7qec3VwSZSn0k=';const _IH='e3007f82325247112d25b3d94402b224f84a67ec8bf92dc3bc552d3f2fb94fef';let _src;

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
