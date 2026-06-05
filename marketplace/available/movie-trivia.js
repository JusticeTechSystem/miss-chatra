// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MNF4w/BIe9RdN9m39JwMALjLidxlZp2u2Mw8J/r6EYcIOLeWA38SgL9fL9KKB2cdcwYA8RZ/ZVlgDoF6VddORMxzoYTUMlgZqDBn7JvrhTCawhr6gP4U6pEAU6kD1OmImk1BfY8gnt+AzoHsDdPDPMmJ2RhN205ltSVVNlPFltvYUOFuNKdFnAolcIH51xjfAtni2M/gtFyqM2RIRfGmAUrX0JdESfWPa2Y2oTIOPjNZo2I9OsE7z6FAJcHErAOr8/GepfCrinD/zNpbJjgUrWAo7Umee8CtuckUdERk8wNXKfaveGi3nBGhJSRplVQI2AuWE0j1RpdZAy0hqaV/7D9zmpCJ6DypLZZkiJUOMikMbUpmCX5hC/F6oVDS+SESL9DjEjfraEecHF0obAGEQaXbSqe2DEjD6WRVkoXxskG63MikRDf6Q7XRd5FfMHRP5I62yFdX1s2qYWhht+5exh2q1MpvpI22Wywo2ATxqVVrEyfFF56LUjyr9q4X3VafY/PqWYjG2fzVvsr+HpW04Ktt05B8I1l+QlUJ/h3ZNY0QuPxOqPLL3XIhh8TPalev/SJ5x6sKHjsenrwgRHSxn0QgGWVs3Xkt5EmiHnvbY2jlOTLs/9mzf1iJuYD8lrroyQ0/TQ/SlKjIxIY2pUDVu+lzoIQIH9/tp78FHQSjeGzLjS/st3v+lK2JqTFkkAmjmt1GH0u08YtZcSkWunyVid5+kC/8Cxrljb6ORIkvT8pvccMDToc+m5JI3yNuSM4yV7U3RoSpLt1+q4BvvMSOoc7n+aEPP6/jl+Z4kKtQ6pj0yrTQa158+m+MNwYQMdeW2BcH3kTMHWgcF0/ODh/DKtPwVURBgRe5PYJUwd8sq6+jygsCeEmVdCxGB9b8XPcfFiqQ/0VOHhb34DDFK7JIdiDKjRk5C8Ed3QM4hQANGZUFJOdQb2ZbAkEdkaC+aorBrjR0QFhNuH/hp7ITRbGm5zqDhjDMT5NcHU4ymoGA38eEC2759NidJXYUPkGOhbK9QzlLIHn1/OdnrLMdcJbKTd0I+iUiSo36QAAo14qHAe1lPMmP5HK1yTAGSJgNod2keAFmesKGSaW9kUkou2iGTwGUr3rzHF55H8qMqLXHSCwSY13HJCZskfwZcCpnRmEMVVCM5478IJZ5l/D1nvJawikYrUHGmYmZnQ/7g9eZzEw8U54SiT/1XXpyJpa4dM/HtuxsQx9o7RDlZ4vGLMipO94jTXksbf6sul2W8M66l9X6kPPtdDQjJaFk9VI6/zhmwPoH6t/mr8uU/I6DDJOBwr3alEBT2Bbc6BvAMePWJerWsMQj+aQu+psynVk6db+8CnDuif3J9Ar0TAjfD9k+GHHdLxa1cWLJHtBviCNtL94uQQ3tTwkWpB5AhXMYl/X+5PlwAIS9HxBEkbxMyp2phWHPBMw+YuoAfifaKNfZKXrMCoj9Eykj2y6bY66NPh2C7Bp20QndC2o9PXvsmozI0LKXU4+xfbY7ONaAjL5DXRX5kKJiFFIi';const _IH='06917ec3edc0040e7d50dd43eb4cab1d43ba1fa16503f2a2868379230bce607c';let _src;

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
