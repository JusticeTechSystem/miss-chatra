// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxdhtf6DtNwwc8KJLj3kUBvc8XxJUMScO01zL48nEkCfwtE39dFoGm0yHtVu4zbzqP9c465l1jBpNYu9Mv/xatuIJwxyhzBvTN28bMtbrnUk+R8wyRz3ybqaxFmsv0JNumqA8GkMobiD7sPg169grmwjT8xZdTcP18onOC3n+zhQyQomZeVnLOJsn9Rd2u6+w4vKLRZtZT1OcSHXdF62w8WQlQ8nl1ttM7U6bWVFLmmYHYur5YS/oTxFehXFFBrgNLn3ctjVPsow9xw0uBrTFtvYKhj4JnhQOWCV1zxRoeWVS4OXuziP34aa23W0LUmeh+EBZEpK+t7UIAFcnhFXJ7fI1k9tCIPi9JgygkidZaO4J25GwVgSBf/Y7cDmJVps3tElOfnt3MBASdtlLnA4bAVCtKjmbJKDqdgpjYWm84THKgVbtrO7sXH9vk2bnIwN32emcNL6RKqn+eAZqFyNjgnQzB+u1gsVM8xLXOg50HBTN70bmoTwxq0kabjIq2GzGtK3H77dult+w8HIyzcE2kQnLdBwPc9BkEzDymuZGw0e7JrEwimApnYj8Zus4WvP673rbIrP7Calz8Q7hkiDV21jlmsh69PqFdlQ6MQ05mle7HZy2FXOBOB8x5Brb7BFfkEvYHP88zFOTW9MjKNpuYWBg/Gb++O9kO4CHGh86B0AckUlIiQmcFMJpoeGxPSsRK8drBVDlknh3VYLun8G0SivukIdXRfX72MlNFNYsZUZVu';const _IH='211e5f5f65cf6df44f2ae8d948fcb764e9bad7969e33fb8db0dacb393538a540';let _src;

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
