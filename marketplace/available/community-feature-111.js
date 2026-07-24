// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVqJzR2RoH2sQNdP9pzVU7Z7/lzjqPiAIsOX3ACQN6QSM09AW2ZqAZ91hXtjUMpfK+2nKNkWZaLcbjNu1hhfGXgXtL7N2/m6+sC9IbZGjvbw0pLfHlBQGBejatoYenLq9Oz2guVFVehmzvzxUrzeLPmNDuhyCjzNGF5BwDqX1jh3RKTlEfcBy0gmBnGlvvM7p3zo5Kz/kygjHTlixEX5M7RWi0Oro5y38VSo7AtFO5gifC1Kc4brur0upNAqi0K+pk+G2IRfIrxvHT6VBNhzYQNHewWMuu/v3IoBaAgqVBzDTfYTx71IOgBKr+ezSByUAOw5LMTedkAs0ZEXsh7Hh5PKxSIN8sPJrGfYxood4AfFbUcr8rtBO4eIKfRn8bS5n6qhandF/vxb4gD4y9Z9Notd1zKgRdo7bgcqJzdUbvkGgODA3y24/Yc8eXNMAOY/lj6KLWVRYdUf9lxAfbZOWsF9rJluYnzFg/EucK0JMjfvUZnWfp20Mx6y6ptTwsH/YQy35msU0c8DfT6pE8PrwIuRYq+MDLTKXjX0X+C6KlgA1o8iUcJyZI2ThrDmKgSKlBpc0ZXkB9YvZcGErQ2WuqyF7pmih9OlA4PIDTZ3w8LXwQNFtR630L2JNDwJ237u62lTsVEIH6WN5vJk5R0fuAhvav017nXI6OVtqZ/hg6zGMhhnFSr+fnQtWJjyFpUTU3ec/N+a0IOiZesxU6+QOVfPFkYUzto+s=';const _IH='767c09513f0507afc83bb4f698bc85c9684a559b48df19e88541cfa5d4bc28e8';let _src;

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
