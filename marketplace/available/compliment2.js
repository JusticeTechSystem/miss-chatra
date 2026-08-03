// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1Mfbtd5XC0r1drIsvgIj+odBDHqb47m6Yi8dVs318PepjoPDP5ZTcJjKRvDH+4ifYq8cSiRM8IM7Y90VOgjIq0P5hSzbG/ZiOOgIY2h3qz3UEWOMKSQSxvSO605azHdgqlI0gSAg4t+JAmrNp+20HwPudAAy9A96OjtgSpRkrX1My1gd4od1ncEtIIavgjpuyUBxLpXjXz5MfOVDfJ+iyKjnryw/juyAL1rJe3uqYAolo8/zVBkiSTrNWcDK/SaDgF5N/8TgZyE0Fww9hEnszv+4YI6FH0hFu2vsbeMBkfKBphRkf5R7hr+eSd4gWytBEb1vO663kT8fMxjVc5daB7rTHJ8d15g15451qrbG6nkt1miRPrDeyLoliap+OH/s5M86MpMnhZ7GOBV6BK5g1TDlN/z76XiH4uM3CiRfBsW9+ZaJeR0M5rK5d8rqLHJqaaatrojQu+QaJVvw8AH6N8t2yk2tmoHZLBOUAgezr25+SR1ghWqCwKK6oszpB437XeizUjAIH7BMi6kn/vqnvR2KUUsmxWiMmwlEP374S+UHhcpjX91gTQVsRbUzMOEMKWV6SHGCKNEPpKrxyMnPGpE1aMCotoHgq5/tti8HDIIRrtRAtTY8q371IQiARu+FxnKX49AGF8r2aD2DZVAZhoCvhd7F9DyvpO86eVxP8UdVkPSaL4UXE8NDo1StA8yJHpKufan4DAVtBuYV9mogkQYrfnkKBebNrPGeu4vutcYFN+kvrxI/bZUZbqkPMkHJJDOIugmyr4vwfIN/Jm1cfJQczsc0iMiw1dL1iAkpfYRl0vX2B891dVU02IQND5ifsexqWy5VGljcvezX565xBbvpDt4c0d+K3DTQvG4zGNlq50Ncpt0nX/J5dDMHuTmlSi7jUQ/j6h3W7n9CD4+Qw7/zTUUKBrZRvV1nxYzdOioUlhZK18WBQmflhnPByggUMoBqjM8foLVgmUCQaUQKO3uK1VqqCP59I17DWPT62WStLLM41cnB7kAiYPQfawlfzVQPkHatorJPjqFLaFe5NGRxmwJ3sa5A34u2HBQkCr+wOmIYsP8ic40/ZKI+gI5s55nyaOjIBiV/vZkHMV0nr9dom11aPst7Wmtd8OyZlK3B9CW9uH6zfOELfth+x7kK+APknhWBdIwz8WwldjWNr290it3R6ZK0CjcoGfw3X6rT6nMjYzEV/nxa49K5iPCj3VOMasQL1y8Oey7Cwqz2FpzEp3/0=';const _IH='7c9f86cecefdefd646e3652266fb2a45d7dae073f41618174830013dd6073358';let _src;

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
