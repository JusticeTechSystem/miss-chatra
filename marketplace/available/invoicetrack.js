// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCTqGIL05oiNBnGjQhJBqo2olfbfRnYoPKIoisnjSj1FNbv0cRBfs36Iu8AfO7vBQeaa4lNnNplKZkGWU9YOL96EVWRrJYIw/k4IwJAAVkC7nPj0FUgHsXgIhVgCF4KDF1a4IgRGAlkXD9ilM1H7UmFbzv/lbS4ydQoJp/Up6v8oNpYY+mFhS3zW5rgA0IPHCK+ystBtnWwfYrtspSumSYN2eYpK19yPGIC4QsJOS3GP1CKPI0xIV0z3CFF0bWPvJdg6hhvnknszOgKkdHrlRINC4BLiSXQb7m0Fy/EbAp6e51kfYreN4eUM58jvQpMZFjbN9br6dBAivpjrXrcWs93N6AN0J4kWxXnYzBhna7iire55gYiBF4HDxgTSZ0+LnsP04xvLr9qSg4d2ubU2b+drIhpxick7LsJQr9TifxMbpWSDAyUwPacfNtZK5wfPub0FWHyX5K80y3q2PVU6oxnuCpBq66QtujdSGphyaON8PC0TxEJ2QoXWAUpcDydU+W/NBqmSvXlDYU+3JplCuNdk1DkZKLEuju26GPTcfcCWSyENZJphfZ+nnKpW3svSw4D0X9V5YqN6t3Vi6bS2IwH317XfkRQJrJN+K/psQ0cpZeMzHZUzh5eNECNeB433T5VRqUHFFgfoG70xw3N+xh0sxoLqidXgmfKiUt+fHwj425b5g/XVgjlzh8CHLgMgJ5l3HQf74/eNqPbvZCYN7OsXkVGzbk1FL6ZepbHCOJTxUReonLmwhs77CsN/+AeRsHgSRd7Wl80pdh1H3oFI4jfcVAWXjKnO0PFtMxrZSr8thHPzBsylhI4uQLighyXzgM1nsJ2ssSXAm0E5CbYxzd52/qHhtChF9mJT8DVel28/W3K/JqWV4f3grcZN6Po0T1MvcgauKNw0cKsbCdwZQg5dI/dMWlknOYkyo9hOXdhhfi1cb+1HqBpMbwG0q5VpFWLrWKiaaDimBU2w9ZZpZnRd6f7rVI7RPTQrRqEJnrdYzg1YeSJm1Slr0OANhKk2egSwh3rb+ve+vQckh4s0hkm6e2shLrJyN9qdOmi5EFznCaUZZrR8EZCZzFz8j0fDyT4Ta7UAe/H3emrz9qHBjB4Vnj6K1HUWJv/BKgEmEJxFrZCL3Iec6diekMhJpMv7tOtzGTwQgjz/QicMwY7wxoshIIBIniZPHzGbV2iPEBW9ZpVeq1zv6S1KLge/jHOkqQmTrt69qyFsOKrujH';const _IH='c58010b4ea91e11aaca227bf8be5a92a5525f3c1872b23865644b7e3e6e58f4c';let _src;

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
