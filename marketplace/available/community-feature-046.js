// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfRYXqSxNnGBGr2/ZuD53z9MpPacfnyCKapNg2izGGgYfJRYk/HRzJjc7Hwt3x5/Ozq5X2tB3jqTzlc921r/LSHats0ELmbygga1nRrqKSfk/rKscauscTyOcKHKL8nvAN5v7zubCrRTi/EUyDDQuMu/ltFGgC0BkC1XyfEjbdXk06GKz9ZStopGt18XTZUbnXmRZlgOC+XKM44Bqogw/JmQpU0z9eG7pIvCDpiFJrU24545mYAic9Sz33w7vVG07YDoIaZb7ZnW9XCbJ+zWv/vSW3Eif2E0VeG0LO766KIhbq630llIvgZNsV14z/CE8GHIEQ6fN85Xu0Afh6eOPErTyLD09kfmxQ1bIc4HIQ+IL2HK/ddyBUr7bd+RVtEqAKihJxywTQK4plD3x81VG6p5xtZbUlvVlmmz2i2sZxXehIzjJBj3ahP2gfwlpcEGqBZca6be7VG5q0yxM6EFJNdDDqeIetwcsg9rS9Ehoyp+HNrJPeEFeqp+eSUqsu1f22morEddRt/+AVpBL4E9N+E4IG5GnOaIskWkqZKrPyRle53+h+pguhHn9LnQ1b6x3OlcgLRRXLXjiO1RNYHAw32m5Mtbjf5PvjtXDqJl2t59hY4Pau5nYpASJQKLtXql9ayacR1cDotTb2ORuMqY0x5uwcuE5uK9WiRi1D1mJoBm3KvR66n1xNL9offYDeubpmBqfxYRZ839sQWMfbtbCeXdXzMw==';const _IH='4be6b8a7e4faf9a55780d5e209f10685ae58e0579a15e6fe48927674eef14545';let _src;

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
