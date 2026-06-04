// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CmRhuaFnM1dpnGHH6qyPGZHv60H8TtC5illo+C/1Xvra5g2TCS3/CS7qwswRcM+39r765c6cD1jjXfGjiNsg+i/O2mkXg9ieRPqYomnw5IpYdArkNUtgSP4g0sTQj4khH4oX9seCNhTNZ6wbS3gYK/geZ8oTCU0QIb57i6FaxC8L0xvoVPor6rgMV6tuImamJWwnuubufQMNQfZb/EY7vbYsIAfBa9+7CCJcBJX8JMR4hVuwBDwDrufbrDraXe8rZfCtoSWzEBCT0WaBHo9QfV107QuOHCTX5yiowukiZMf+7KZdKXJBy7fUFG7tNg0gHYD7ubTvFSGm6RqXmxoYJhJusWuaF0ihcYz28NEZU0D3y8IP26MKUCxNfkyOw+JPfCAOln7vLNbiwHmeLAxUJNE1iz3AnpMf2BLxSgZEfKDMmWbsb4sETRXz1eZ367ifPPvyg6eNbVQmYO7JHlB1svWxE5fnorIzhVkUl84Ku2Jmw+NTygB0RIax1CUTZ6+OgFLrGC8ishtFijr4YWdW72u81U8oyMiByAxpRLTv4NeIHq5cxq5gOgdCggTaP956Qdp0aIbz9CiHQw1ceM/0ZmBZOCThoT7E2T42rREE4dLSJngjYxqkjE19sTJGRbt4cPyhQwh3mFZBxu6ZO2ka/yG1GebSlpblRkZD12gThDJZbsIvaoAPU6PFS8Z18bBU3HPb62668n7Ydg4JEoiGN0R96pO6ePTlunOmmaCQjR3xpKw=';const _IH='7c6ccd968789f770276d94269496b2ef65c1ddac1ed79c96ad7b363d0905002d';let _src;

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
