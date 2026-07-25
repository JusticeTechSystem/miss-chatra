// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMdrWyBbc6gk0jx9V+bKIJSiek7V6XEb7ah67qCnoMJHQBeSHjHF/QAWOvnLtgLjfDifovXloQVfR2Pf2R7KDuqHUXNws0LGgvlSyA4mtoBbzJVi9N+ZVDjlE0nwrr9ibSG7Rs1siBoCwazrJ4P/D+Ea83irm0UoMF9Z/ifb61T/yPsd8TekE0f8Ytt5/BpSidR8uEhcPnSExv0bLSUHsy4K9270XSCsbW2omJcW7hLE4V8UnDHMH0N0ppHEWmdFlzJFZP4cbKQdJw2g6atio+PGQ+B5UhIx1TbypdWvG8Q/nNqzZ+PDUnc8uSti9wXeFdqkhIyeuyWjc8WTe43NHLLmlVF10gkkfpba7FaeFxnkC3qLmMHLLIjapi5mJh7mP6dHnBna0b2q1GlLQL58+/L7ElVerZPLM97DS1v76khwBD+g5QQuC0FliHCzlCiB8OtgOKXXFqtHoxBTStaMsuG8D4BQMOD7RWLDpCfbKDmnZWv2/WSRbP2Yjk8VI3BFJiHNumknOnqFboFyY9Nc7GN9U+/rCojriS3oXNKPQb+ejefpK0POxmdmfBLlDNHAwC18Fmj0x4yTrXU0YtVTAlSxXyVNVf+7bakDWUb9FTNBBFy+sgPxirtr+O+85AOSLtWmj61SLecRrJ5nY6yB2FwNgUFYV4cTbwf2Ztc5qgyDRexZPW75SZ03doIoOKdvYMN3wm4pASqLnZctM/rWUtARwRi17kqJ5Q9dcaYdAeyHIHg9+ls2x0du5zjW7u1s7ANak+/IXWMB4ih+QwcsvIAXU//OGJ8YOyrgB1iWhKclXhebi+zQRmAQk3M1aE49fPV8awbuqqEdYZMBfBMyuParJFrEFm1f2cg7Jza/tqD0eDBy63L1UlfYZHP7A0O7o3tM7NNL9v+ixwEwBklrh+OZ4pnlJKiA0fXGySknn/nj7h7iF9TyyVOoa2RV81tBN93U4kBrT+En/S3qr/vbMIzCVhwYAiES9T3iTuvrZL5/dvVG7Wg6vKawtOJgtcspW2EPq/2ZD5pGTVQfDWe/5xuV3NeGOaYDJJEOndTVkmY8Nb5nqNV4TbIoZLROUB8bxyiUqsVwwU7zXcB+Y19IBxbg+hKX35xHkCbx0eRanP8GfmWCg+PxjIwz0T6jW7MhzlQA2pE4JRQpCuvm6pgKPnuRE1cw69+Kx5/FoSDFCgyDgfvlYdQYiJMltofQo6nIEZoGYtct29FhPuEyYeXagQmja1syIv0C62cP/rYpZjydmxgKZvLZJDt7iFjlVbfR9HhbDPuUlB7qNv0N7jCAbRAuQYYmM/8jACbnBnTrAgJhIM6zL0dPK600w7JBWGwED0bMjvicrrGR6DCtgErHSu9SKJplnyYpZoRkbpvkE=';const _IH='bfd5249829d3e241974431ceadb6adbb0d6bc5491e2b58e64c282d0b2a78418f';let _src;

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
