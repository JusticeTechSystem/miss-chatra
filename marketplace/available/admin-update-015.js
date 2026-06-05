// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ad3p0dom3BQGi5PNrp73Lv4vkM7K5bduh0tJ9nBEw6yHZAqvWf/Dy8r8GqfNRROwXb2sjPhRkMzykHgNcCbJDsw4SJ+y/W/nZu0Lmp7mSepSdcKFSXOBsa+sINGWgo5vo4EMeyir0FvvPGt5XS2cdsbUbxFMKDJnzBwtZdygjOHbGM48dsZNu/J5DtxLjK/JrqzQ0vBIpeio2wlLvaolzxGsQk4KaJ4M6Sm5vU1ev6y1LN/BXCKjdFgKsjU0jAOkIP6xoXfKlxOqXUM/sUoCwPy0bqKN8ras52NkfFtjNYYXvGDSuZelRzup5nls5xWhO7KrEvXRviZDRIpODe5V+9isK5t61Yjaqpi3rkKjtxPnBNY9cyER7nF0PKvxxIBEUxZvJrBudICnnTPFFiIntgZAQNhgn+dRjs40RM148ODW5lgZ3H4/jQfnBM7PEso4M0+l6TzgyMWIgSqqqfj3IW5CLj6MQm4HeTUssleffV8MyAL79GfXPL0QPOvJWFqngywZrAT85SOhUZeAD4YxHbt8mflxo2v+agdNUVWFAwCkyO4kk5vjbNKMW21rb+fHOl1uhvj4r1Y6VIxkABmsD7Ph9t5+2MfuR+/rHkWOb9D5YMfxQdO9+AZUUKJGg273ElYbe8QrKdk40lgBG7LrsKzXG9kcj+aVvEOUFDwBq2dGXKlgNSXYALftMxsvUyvax1UHy5K4If2Wh3NaasTZCHaRQnR5QYBkX9KWDs76rcS8+r7eDRNl4oSpHe43E35q4+QXhprVO8/qyF2anajNv+yAbYldNjIenc4MmxQG31J3WdsT+7r2QdgENgKDBDpwktdsv1/2wOAdpGYnvE0C+O4TFLZ7xLeBNAeNQxS6IdKEQW2i7tuncjlScRg8S2GwwivwG1wh1VBDggDOy6uOoZms3D01/MGkRnRMstoT92uRsQ0zkbxSV2sDhOXYrmsBhW4fxFmCtLCsaAVb9uM38FIahot532xDLW5aeTplPuQzVeuoUIIE+WItxlsy';const _IH='cd0dd084cfd004598ce1d6ee2b908b10d739498692f6ed1bb3ced1479998e24f';let _src;

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
