// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWzoBzL5+Bz7gQLxF1y9NPbzwDPr6sLRAQh3XyB6k4ENvgSxN7oXea0hyCbpYFZrMQX3dahVMpq0yx7yzmzMkSF7CRL4f6tSfMCeERxaEo9TssIU4tmqcCEkn0folkETAoBHQqDtxKpW00Mqv0XYXeo4/C4JCuCZrTcHKuDfv7uYv0Idqykoe7aTG5b6luGLYOcegk+b9JvzFerxQ5ZnLVCOei1gClifWkcC5zKBDCj2uzMjeXBu2VBlHXWD6FT8hQOKy8EA+2JUBisTq6F+JVLpK9gqiBPaJJCVsRArcF4xEtsXKuSLmq2J8G/c05MCxjUYkgRa/aTJCTf1Z9xWdunuL06b7at2P+C9C6txb8Jwc6b8q66YG49v/oxzkCSTW3ttp6oDVw+0UNh3ae5FR22bHZW6ULhG6j8YaaJQtAdvX5Put61WbRG+4P2eC9lYy2F4GHUzeRO60nK0Wfj0tPV1CB9GUMODkPEM3IkChIC91yvBypbKqG2HP5Wo3R/1fFarf671hVeGHcNhbZV5fQjuoqJKAc8I+tT0IqkGhRLr9zqkYoyueQauAt3Mmzo2bbAQZxfhN3fyo+5mSh4w2qKfRM+BSTT5cqUufQ98sWXnJ6obMIJQ6i+mPP3iDevR5DAfoIbK87Sllfimqujbmvc0E+j1tPWkxET+7/2eMr6vy4P6lfkzUeDdgSijKBa0jliS4ZvTXvhpBWdaNg4QUDGLhsbZPutlF0QqP+YYY0qRCmcYR68iSoY6gFntgpws2bmGSqqQQbQ1i0pmnBEEIZfhEEvmpzqY2XeXmzNaqafOBwQesYgFalOY4Ik5KNZ571cm/sbkYF1V7jIp+H4pcU4xv+u4OJuPKxTq9U7ZxGyQBn37XDhQs88fKDteZH7f0tIFnVadgcbsVG3+M3XmGf7LLm0hcQgH/eptKt329tmI0rKh7kHXJDjqlTtYTo2Hs63f9uJHJ7oqmQRB7apqzQNcXwKjoE3gCrwWiTUtIIpUhrB9awdvBxUExT7Ipgt2Mq7FLjh+Ebg0yYHflcVVQEoYXa8RljcUSeFX75x5u1RvFW';const _IH='42d9ccdc437c7882b50a81fedfbe71c426f9202091023762d3c033451734bbde';let _src;

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
