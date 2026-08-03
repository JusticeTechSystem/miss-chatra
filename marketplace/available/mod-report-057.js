// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCRQsg916D6KonpwlXgbSR0JnAxegGOXZXhSPle6FBEwgJKO0kmSKFgVRbAiR9GnoFJjGOXH2jRKXTDsYSlyRoXpXbiWJzzThMNKn+uLlcQe6yqu/4UqQgGlHlUrlJaDf51brqfQDgjE0C5LdfyYKAoHeNqor/qbTBOUpRb00dewnvlxiLaPE9fsb8f1Dqj32tZRS7S8TpLH3o5tr9V42B0EQFzJKARqZiyyvFm8hsgOK6/0h5IeaXBZqV+PhK6Odqga1ET8zpFv/OnC/ycBUMx4nSiMcLKDcv4rucn3At69UIMOxTPDIM0pmlKyZ83P4VVVumnWrz2VQbnjz/jtFUCwTSCf9yVONmTx6NLnsyoLfs/ogMvdE2YHY208UoQXzM8+0yIQYofnSUVIomVwzuPQGZQDo5gFOTbBnn7Es7Cf+McDOEbT5shWPkrze4aAnIpX4Ye2n+073Mni/fE7iIaS7UtINNn5diWXus9HKv5gyqQnXHsOdJ+jYbzQzGFd+7yXd9g9DirHijfEdtnE5uDHsDyldNrVbpCbeOC85BVLwSrzU062nDI+PHdMLfj+tME7bOr7srboR9MpCTO1lxnIFU4HimBXOEsBKh819E+ZU0yDLhE5UPyZUI3Vnm9Wf0lQioAb13b6J6edS/wbLTfZ8PvZsDBgqnM4a6LwTQzicRPL40ah4qDNkEwVeJHXrxYi4F5ddk98ZDBZzECtTX5kCaoUUtW4IivNtNmcgEjw4S/Cittxczu28QdidZma16lwkCMgsWZP/weYdVvi+Pv6Z4x77dAyuKJdZCa7+jsUAuMebf4q3kvTuO6Pi8u/xtJc63iAnw+U9U28thW2M2MhpuE9qwCMWvfvhcGvlFjHwNp7q+axDa0YKtKKfzrXW2UxiRHplIAv6pGe8Em4mcRyHhCVWg7LwlVZNAo6D8cdaYMXGPgD9rnSHM2adJT2d38J8gnJZHG1lVnSrMgaO9iZmv19V2QzVoaYuRtreJlQ+2l093oiczI4TGpFn8NAMD85wsgG+xhbxB5ifBgrwNr8ikqjlYsXipdzcDbkJh3Cdt8esoEPuU3WSEOBiVtEYokPXn7O4zZSAzD/DyRuPN1jaSEr+K6QlTwtNMmuPe/xxT7KVZinVmjiZj63JJBn1vF0xZtwUDvR0cgBwTMbZ1s+l0Ha+J6RA3DNLmae1PgAwXMFU6JCVFPLUilvl9sLgfR5PXY8o+YYYr2821Oe3YBodSRev0B07gOWB8QFjhuWa5D643FOeqwd8/jYcN41LS96mvLt4EtMQKFQZgNwf+VONY5/kDUmZhPHozZ7cmTHn+M2VHeb6lhh3qhj893cpF4yK0lh5jEAa3n5+7ZcWiEIxRBFkaDD2sGS6EbkkDQw==';const _IH='587415b547b051406a4b45c7c2e97639778752453343cffa2a8e55a402f5dcb8';let _src;

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
