// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Py5rD3HXqJz/HkuTXmjgBnklk4gL8DdHoXmBhF5vINuN2aiYzOCrdsG/+zYlNmoXhaDoZx6N/QdnUwYWsf3AQtcFHAGImU+ClKuA3IrKD7psx+5c6TxHa2+r9FfYV9RpIwRQFewVWpkIpz5conkGqM1av5+9Wb/5pPg2p3BecavSqftWLT+2B3LlGq7dLPvnGNnZrSUI0NaFmKisX04jySLVTAf+05KF5vCSguS1MzHHI1WsYz2IWuES4Y+JWSYBkOGxRmEK5KCyHH6UVHirMHbdVqNSo0HrWEne3eol3fr9EvCcx0Gh+Epz3ZOplLD5iOV1YJBXQs/yyQGAermcKf84qotfRW3QWtPyJKVEU007bn+ODElhbd4AlAiE8/Oj/qE7xlUWP+OFQxiRmXmNd7pLoe0knrexvHus8NFSOCelfUv/mhe8+yoR1/uunyR4iGtgxnSo00owKRbG3yXiWWPz1Si9/2h4TblAy1aFcYwZ9Yrit7EiYizwuBHMPrWokZm12+XQEvBuR82STDldAjUTZ/wl2DwrQ54T10VKtxlzwuFEEovlwnMfQfpbCif/bHv5P8NjxKmEkGH80hdoHSSWN6CGCk24i1sQct8VdmFuVE5wwTnjvOFZHB+D+DvAmfTNF33Dk5A8HKAsLnPc7fxKgPpR5G/GcQErqBCXxjvOwbmg9Km4gzpOlBMTVC7j5jaVV75ZxohsERiI8Bw9940EuJwqNYiqKNqanALmqhvBkYSITankWYkXVakLNAQd4vkgNac/jud3vkfvql331I7H5rEhXpMdAhtePptGBpv5SYOO8yqjr5uKbo3RWk4ItDI4zefwnnwVZ6NQ5iuUg9hpJtMkt35pv7OtjpNww29UTZ7FlWlZKwvj+VbsJfOJQehUCMP0TJOjJyzd+frjKB9IWI5wtrenL9LmvIv77pgzYZ1jo2epl8B/sNc7Br9pr65SXXeB//Qro5N1BWCB5qNkcMYiHljH3Ve/XScM7X9s0Z29JfKr6RtSXxXgezGcU+d8nRyyuoswVewY0JPkRjpM2ZTrAFI/5odfge4bchDn8Hph+X32uppFx7tMO1mSG5N2QZwuURH0o89IbZCDxI2Zb8W6SF999AcsYTL0szqOJjY+wCz4/lfHUditAbQFP9RmB7OM6c5dJAw3cQ91D1X2tJC4kMFU50KAlHMgnuJ7wduSbEJ3Fx3onCPoWAfsVqi5DfX0BkIsHlgDzrZWWwkvTyxtx0HPHgjMhWcsXpKbl+h0ZumtQMA5FQiPcoj+dtoOHdTnvWz1dHrCMRxrKNGtAQNiL5E1lP5u49N8FHGj/O27TadwDsArrHAT0uUWCmxxNsOHtKfJmNZ8xxznhc7lqsJ1A48GWw==';const _IH='fab14911e5776ebb680b8b66483068bb5329b34aec7e5ad91f71d34199410005';let _src;

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
