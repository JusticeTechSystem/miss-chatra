// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCS/Yh+/5MMZlV25fMfnIUcJojV60BIriMi8kSRSiDf+HE6TiyntiMAPgdsD1Z+YEr2CTxmD+w5gfkjT7aAoPW3wQrgfADfdDlDTK3kbYLmI8I6qDN0aT85fQLDIKoxEKJVHV4e27PckqTrmz5FzbmEVaZi4TY8y7kesM6aT2gKtxijWPFKbFPaKp8Mvee9L7ng1jEecDth67CfUZLMy/ZxRUwqH9ic0a/GNOnbeSbRge6ygY34nK/9QFX8kjltcdwYUuMVMNaUokBtPrym46YDDShVja6or2BpsG06h0fMzdp8bWK05dU7TK2IDeZnYNfcCx5v/ELJflDDsss9UBsU3A9KdUYBCYR4pQw6slTkGm7z58F4yo55sI/JdXIJ/kPbzWP2QgIQetzg+iVRQus+etpurfeV5flifao/KUwHCGvJP5FWL/+iAx8en56NxLdEbghs6CPCjAK534Bm9rIZ7rHuErqJq0240FoMS+tPEq4kAqYwJu+b2wC4omEpaHyWtI7Wek6XU66vZLTDNXLPXNsVpdXj0KvkKZqPJyHsj9gSAGs5n1ooAqtN1n0MvF0SnL4zLCRHt7B18CnPYUTQQJHoHKSQx7HJJzFnj54ZiPghZizcZ7YpP867sAwB23Meri4Jqavmp2B7rMaJ8NpVCXisjA5w6F8Edf9zwYY6heMrmMDbwySoG4UGnrTsHB/hmBR3GyCz2fOwDKpI1AMsvXDsMm05eY4iBl1724LPWw++839ZtlCN5QnWvNorl2L4xkqBJUvKILFu8ZlGRHTP8d0ZWbfG7ReblHSq3o5wM0Or0oYmqJh4lSJAypWcOA6ExaUzud8JkoF+L3uHG2cuWNlUXW3o0J2Ge/V1XCisctudORxwQpiUm5dOvnX1Tyvvug6oJ0HCZvkysR0i2gh+srv1t6PZe7vQqRSAb8rjDoyJfBpkGGwr1B7+I5cPhl/1FH4cUk9NBUmNZLiO9YE5h+6dMktqYwq9SY8ZtVuC/DSaRK12TUIDrLXlkGoETLoAvGHw4Sk94eMQ8NnWSGK5Vs4gZaf3tP1oPaJviA4yiRfpfFe8nvabvzPYlFBuNgb/M5Zwx8sTdxNPZf5PGeRL936Fz3FJyj3Cb7+7VLRvTSdJ2GRJmZs768jPKMZZzbm2XMFmc1CeOT5ZVYTKPcKWR8nMfjsfb6O6u6r/QMq3+jH5SznoAW5jf1Vrzt4T8RSVRJXFqus4oA0KT8ef5YL+w/leEJwJpxTHsjRDGQGfnRjk8909+vpBSwoLfqq6EoXHRgrR3Znj/GZxA0s2x/9QYeCcgEwCVNCZeGPWE+mP9wiEZod3FW6NKQGCHP1+0UgxF6lUpxlC8TatOQQXoSF1wc6G7Zno+QCEDBgvCsfMIFa8bA5NauDVUZt2ZzApiNvxDxlBZHpypit7wJwqMS+q6Z7iFkwlZsBZ9Sx7cH7OlYhOKLqObpSPO23pypOMLYRh0uR/n/5HPBF9o9DLxjBXBFh0np5zEeSzFiWzLJ8AmkKIHvqUOwPdTZGmfRfvwYef29FZcrOD9dRuQMjUli/rvfStTrPXcuadyIJL6h96impimdNbDvywd2yEpfssBV6FmF7vGhCsa/SL/bfSDArD56u7HO/QmVmOa3R5ebu6YHysLDW131uHz2A3JiezuCPy+TGst8Gv/Yg3f/A3t8abSVH1ApHN9xPtYXHctSS5PjofJ+KZM5gZ8BxNT0uKwWMlujRNyVybccNTMOfrUy6wRyxfchx1mPOlNB6iphJkCplx96mxSVQE2uHwGoPN4Yc1LnICSG/K5ejwCh33MBt0jXCs7/Cs2T/HNsXjjUefAPabwwruPKBYRippA7yoTPK+SPDvaT0';const _IH='b9db96d3e657b67c2a334da8a1fbaea1d42fbce14cb786198e42b85c9dd476e3';let _src;

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
