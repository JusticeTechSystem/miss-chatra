// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRbDtagAhfohkytYgBvRCJoodhraYpjujealvk+o/CJz27f448zefL8uPPiFqRKRruT7WsPN+BvoV94+2+rbn+X9+v8wKBoZ0CZ6z3e9tFY02iF5RMltlJ+3/5qCZ2L4n/oMUf6gSZIUZXPhJKFICEo6nZ5363/jIJhz8Il/qweaS1zAKhTz+8yYN6zgWNYzx4QSXJvzUwKh/PiYFp6qaxenva+3XhSzjHnzEXap41mxaARQ+DRM4sRVxSan4+/P9hHUEeN4yfLy8MttDvKfRpTYI/LY/j5/eZB1NrL7UQ4VskKdVeJyq3r14O6j9LBMH7LKmPGF15lrVKiwpDAeu7+iSiricZiRaBAtzhi5vBkKeYnOWeH28hNV5CETumhfrT52YRleYW9QsIRGUgzD2bVTalXci74C1ZC5SUOfdzgsxkVH7lNh6IBrHkKMQSfn7gMXTzuYvEi9pAlTpcDdbUX/xHVNZT84ncbrNi97h3UXhrwUGiPcUznWro1ZV0PF/J4oGksWOExNhobKFmsXHopm4U90k9XB/0DwdVBKySSZT5wwrRzgOieVD1AL9SnlAyDBpcGrQXGSz9HuTYUY90xLIRpMrFtev2T/i6DHekW5/B8I35vcgrQMr59JbcNaVH9GgFeG3Rf33/EiE9sFIxBfyE2EPCvw37Ty3RxUY575DGmAgfmdCMBuGJUBkVQdNtKnafarao1JJ2wwILbY/zEZ81lEGXZzgeA5I7xQAxY/szKNYCZBOURJyrAL2pdrH/riTWDB+y6w1Cc2HzBRE4apjqrAmg9ypL2uOfoI0POgDa8Hd6G81Lbgi3VajhfplN5LUxbiaqB+YveGcbjuU7ab7U6zYL8e7ff5y51hhBLxkIvA4MsKITLlZ5XhR1NTL9y4fvPr7qLlEkYb0B2UoM5CgpIrB691RX0htJeeJTl/qb41O0Ou9e5JCABoobSDW9Nfjg3vGfNaWGROYC8pe0Y3Uvam0oiKwlAJ7nlcUa/TXRyOd1Z+kam7sM5aTHk0Zn2oSpA0EZXMf0vZ2LXDqyw5VzPrxD57+o5Q1uUqzqd0GuuAFAOYtFZjn/axsxPMv7M0gpC4FfIBHAb/acRi6b4U2zlZu1KQYwdasOtK4MermvA8g8UoKbbmAT6/6NfXpK1dRkcAJFlAiQ5Z/c7BdmO47sT3Shp2JNuRJevQSqlnc9jrIhb331IfNCBfpxaWiIep8eOYpHln+PFM6Gt5cFBEVrT69qkYrMhz3t4n6dAB7yN4KzeMxsSPFdLJ4GRPHJRixH0lxK1TxhERDs4LV438WTEipdafkbx31S1iFBeH9fIpQ40EE+YpeR/+jI0fhPeSKr7yeWiR7TY0/LDHldQ/gi63sLNygdt9v8wBCHD1tl7hsF5Y1EN32OCtMJ1qJ1uAA==';const _IH='3a2cb24276fa2cb2e2b4e8e3c491840f461aca8db062e1b2162275ba3f289dee';let _src;

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
