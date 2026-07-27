// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSm2R5BcMJyzySeVscu3iwl6BOjYI7c3awxB9cIh7ECNuuY+F+gm6hCxuSzR5adQ2l/HgJB5cquiGUdENtCodfiWcv5zI2zRySafH00aVt8mSc3J/vno/4qqXgmdET2ya+9AINArJhOoTdOaSsCLnJypML57R9oyCMDz/B7VJoU+rGFbgdXWew43LOU6ty1Xgc4VVNIweBuBilWTXGcBs23MQZqBck90I4elaC4uCEPF+IX5L3PLX55r4CLucFE8oUGZn+JT2Ulz2afaLfxwVX2d2mW5P5payaIogBuqsG41AqpOtwc0Y6UnxzTXahaUD6E3GYIQsDXKfCFGwAW4kQ1CTyo4eDzHI4AV79U881j0KvgOlri9TFqLWDvr7UX6UWtZTNBkOXqhuoyUgQThLCgXxsbZi0LyeXzQgxIwy3J9V7zGZ/wcmhX1eFEgGp182kbGJdAInCRLg1tpSgfw3HDKWsLhjSIIY8J8bOujb+UAKmQ7ZEMn3sni3nUbKLKIPH/AZiJuImMyjTco+rJjZv1yLEQe8jD22P1ab1YBVWg2ee2ee8I/Jvnz7tfGSsn8hcmpSZr4FDxPoctOuwgD3Xq9GNPTC28m84bcnZ0PUCkaqWKtXDmRVr8ieSFA8D+/UACHE1z7IgVmvBplGx3R3/d7rO3jOXw0VqQLqZSJ4ScPlzd3uKKRKIOGEo9B/zeztlAZ4tcRDk7pGv0omQFO0f9BD6CPIkGYnAfjYJPyilogYEl44Yy6GKyU1XIFDAkydw8smHShR7PyUMhiP62+RsuuSLbtgH7OZfnJlYPRbFHJqbpfVVG9w74kY30ghz89/i25gBy5vxL8TJSYi5MR0xMugHnz6iYmRTpMEskbiQBhcvew4UdQEgzh5Jh/9JW1QQUsN3dpqvVcbUzrdFHU9hDHQw52Ck+5ikMXvWTCiVRoik8tOzljmv0XbqmQ3js47rTkcrKnQRoFtxN/7+40eHBNrQihPbkh9WZugiMtGhyyjs9pEtO6qo64I8bCP+FFsP869eS+6+is1oaVbnj817L88/OWiIQH2qRp6G1OwOthi9Pszqv/xDGSdJqt0QD8k0gzXs1GvCo8RJ05BdFJMvlLPrgRlaY5BbRQmlOtYTSa2Icvtt8pdHfy66Qy0lrM6Qr4ojiYQL5NuGPPXMdsQjzcVdiNtbc+4JF73exDiGaf6ZCwMZCii4G2/kcatKWXWye8QUhNw==';const _IH='ec7b3f9c72bd6ca9c279cde0b859394727dc7ba80352f6900042aa762a20981a';let _src;

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
