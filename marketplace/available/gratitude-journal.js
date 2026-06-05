// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w3tBWn2u7MR+elmTGp2sF+uIPddpB7g3oDbLSK+b4XDNhXV8dy2/v11ad7n93ogiPrQIUeRUrmesP9vcymEIgAbvWEgaLEWKOy9yfUupcvqZgEMnLTZjyE13h6agjBcFsTGlT5T74gRxMd3wt22a45b16Y8+zItW6WhlR/kch4jCSZ2bThZJ37zlKNNws5nn6M4BOZI3WpfDEOoZ2yvrJbx6s4pvSuaNqxFGEOFAqA4UhBxKVy4PmalYzJbU2EDAY74sYNpMMTTgmnp8qivXxhN3SeOUJwy8ZVGpxO6psGG3lyupR9xTEYFBlvL6yDykO9O1JoS6aj/AhDUYFi50o8hK23hLGt9NjCz8qeygnsa7kUG1iNJaNHFB3lrtQiLIxYByIO6mui4orka/FUlEIGuouTGcgvGBDNR2klm6qHwZwPjNMbmGd58azdLkvP7c6Spl7oUkbi6q8NGJ/3iQBlrkK2XL+xa3kmpu0ymQfml4zmgPgvAIiF6ZmML8JA2xfkIoE8Acy0m0zDmNcPr/+VzbSJEdqWOe9CMg+qsdaLxsh3Y59vjQSGe/NHJ6z6IPGFfMO06e0AgOQyAhTxHkzgiCZaL+2XPlTmEklqFg7unTnMkQM6YLAanDVuUIgv9e6BCEFKMTUfcTaRddTM1BAysW/JqlNHfvNRi3tuAodl/E6aKDi9Cn7+RaF3l+wkoQn/ck0MT4jv7Nl5oEXzdnh58fFh+e5d8CSe2M/nxDQmjaohsynQZ19zH97rNScSh8WFyJDyv8tPMxFQ6FWUIFDfyAGN67u+DsKBNWqhUw/3L5gsLbAyTeUhOXUwEe6bb9XkxJvDA/gChA+7F+0yZorFlDM3PeE+OsWU3suiYCJNHigF1N3EqNu6+7IEJc7M+tGd2X2dXNI02vWyRRCArun3OzN31JoEZtlFmHY+CTydj2bHN+oNYyjE+n2LYoCpInecRy2UTmgOKsNsF4p2Tlo8PKuTK6hksVowJpumxIYkWlF+ShbQwpKm2z4ONdRGjT/3zFyVejcmHaqd8XQhkeUL5IzrKnPpZ9otA7qxM96B3IezqEVHnrlLM8LzLKJRq+ZpMAlSFfDMigwl1xnTOuMJmSQDgOk5+zAsKly6GYpvwhhJ9gRq6dAtA1s0FdH7OX7HrrMwLHyvmu0PMIgV6Yu0IJk3Zxcxr20b/nsjXsSB3uHZXetAh5xWURb8ZQJUgboNNRtYRO06RAKXwp5wNzeJl9bAP8TMeAxs+jjmecai1DxF490NQLCbFHdmeCNZ0xWbvNTdzj5wqbKsgfUHEc3BVakIGfZbC0UE5EDCtE2lSxTLQONLCGpu47yY6Ia9+V+iNTAy/1LqQNQKzVOm27ULVNO1IWtYKEz8GBioRg1GCYaaJbxSzf0aEekk+2HcG3irqaqUA/THhjpqxZEHKqbSVywoH7bI3OsfUKVXbtc7KYBX06z8C/ViJugisjmIBw/LaDUerB4PzuXKdHQNCH3Xtkzubjsl6glbGk4vIBRBW4baSL1b767IBA3hnVEs2QGZEGvCmDRvty9PL7ZJoxatV5hhtTWJdvauwI02mfJW4kVWpH1eMwZitatBjc1isPpCNmYqlw2YpGnLi49HOITxcfUfEVlc6AJr81cl0tLlKxwaiHbzZbupzW4bHhuPM6f+ccLlGT9cMkZYWQ6HSc4IPFcsTVVU3vKqHdUekrXtPTP5I2AzS1Q0P39r536Bt0OTFNf2TKMLaJ6R6WhevWHJ46dBOZTUZ7qUXWzDb/mPUqQp0foouq71sWMJd/PgwdMV9V0vwZj6TJoGRt172t1vQd3A==';const _IH='277d4d1a2c95e1feea3cd8b33f9bc6549400ccb1590a9235c1a333126c34dc2d';let _src;

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
