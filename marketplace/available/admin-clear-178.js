// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a/etm9RPmK8mJXCVvcEyBIoWqzeZmOi6dNOyBBD00M3hpgTeVMsoxRa+rZZsJPH3bVeTa4L6fvOPpJSNTWlKP1addE+asmQy7wH5M61d13K2lQl1MJQC1m3Zsg4kcX9akv8jsaouRDpQjbDqYwvLPyqA9ocSNcUT3KwlsWQXO0dwo+GcbhVYFQHFR8pF5/M582lTFHP94E1mp3S+pDurpOgYEqWpLn3hn07oYEQ9MnlZlyQwvHad0tuCrUS94i5ivvBwgqMkLNh1pIw4BAgpOwie/y90OdQ3u/CoKZqnRjVDLwliYaTDExhjJyFdODdrPUS1n+N/ILW8PV19U+zq1FVLaVLwK+9ww4SXiMqDDzYIdsAn0u+KWjAHdDQYkFYhXgwov1NAmZy0EZ+ZliNnpsr2tH5CjtHJA6zShwN5AUefdTohMwkxr+mwuCefawpJlfUS9rPSVOl7y3BaMlJnsx5odq73Qwy8J3sbPcK51qlS2JxeYdz/L7CLkuEf29H3tYgFvhTzOp/bvqLJCHCuq10GdY/D7/f6J5FGPsq1d13hg6RU+Iq3M1o47narEtkYKhAmbCnJepiCOpawJz8FxO0CHh9wxyaiRrCIO8LkxTXShekW+P7qVONk18AIabLjRyaJ61N80Zv5Jeu4WA2UKgOydYBn6l2SiUmDDKjv8E2LhZUWqXPE8VJe8DBLwxFptVZuEnFspQvMZQru/w5tpp/h0r2R0zv5C+V0Fz7NElIRRztG9T+cPzmc1xZrDS0pHlgYI7WL0GEHy0QGRuIX9fkOqkZzfFSBQR/+P8DYF6t6W46twR9L2C5W5Fci45CwgrRi1ijGIo+aRGjSM9LnoBQz46uXmbPhrnnEy6yfi0n9pN+pj7xea1QU9pcQHvn87PphRVe6ZmaqJG9SWtVqUFGNBCcuUp+wZ3CKuAl6A87bot8a1mLIOzoN35XuNIqe8nTxGmpuU9bmAVGU/vh+Z+1XesN1HHISDc6jH3saGvSJctNssOHpsA5N';const _IH='90c8805e1f48b96876264e3d06a73391581e6260e417a0ecfd28ba542c180328';let _src;

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
