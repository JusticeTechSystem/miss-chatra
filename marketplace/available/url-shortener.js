// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBK6JJ3eT3sTmcty03/MqRNk6vvaE2ELVg1rawUEBFpJCKKJq200ciKjFbnNQHeVK3PvneVzGRsfCAvgtSFUcXnTVLC6VpbSnJoN1b90bNQfwSkhNE4Lkj+4lKKmq61j3ZKl+uMWWWiRPhWAe1o5w/06Z+315EQJvUiQDEGRRKBMtgHe+E2AfmOgkteMzZSfi5L8uWFzU/4ht1RYKDk1+KsJrKxp9iuGJ0D4MC0z1Ac7t0PuDccAj5m6i4f5dhrpEm+xuJRE5UVZoIjLsRALGzdZQCkz/JTYmWhb9B8N2U3h6euTDDDdWm8JH3kZdaDezn3JeDWy/ZASoYRh51xs4iwEEyxBbdX4SVksTbN4KDzlkVq5tR58c+TwcFq4F4Sox+DoCJycU27tqAGQ0gXCk4K7OYKdvQGOQ1GLbNd3B9TLpa7uM0PGTuYIVIuBRrA7Lmc2PmuM98In/W2awv1oCLLH8so1hJWWHjAALgDYgcSFDkvrXcOZFQfzz/Z8DIYQvZCSgBXC8Egj3QhGk7CHobTbqtfa0mA5h6LfGoaOJZ7tiHyo23wrCNJtRQ4QAZN1TBMWEhhpn0EhZBos9yb3OEfhEEY4+jgyMXqXENxAk8qeOC6DQ3GLNoyQ4Fqf6hRByBK5QJEQZfQKKvsRe7oY8vm9wninOyhTaAuCN/mOsYuBrfUcOFbKCqcG+jb5DMSxSgzIARJa+wZCuR+I+Ke/7uz28a3KhuHq9pE/zMzSKhM2sGYI6JfHVzTU9xEypkMkEFeOIHVhdPzrksLHl6pF2RfcxTpNq9VaI3AY5/08G+Y4L9VmWb0Sqm8UizNgYmmOfi6JMjRYQbI3N47Ees8HT3Y/F8eEJnBKK+rArkRGvFMXDoPcVNuD6NYQelUFHWnvDg9lkudG1259N/UyDKIooRSxLMjVBLdrv272QHTFe8I4o4TWwYxVuM/vtYLxHm0dn7u3MPmzwNizX6OnlwDFR5gsmTUMQMWyQl5/W7jk57jNlzBDX52KnFu+XJgwF/2aGuOcRWZQSMSn4onq8VUhFHDagZPuOTR29sueg+OM0XUoNPYLdHWKAa9K/JCCluI3sEu39xGIum9p+OLferHi0n9jpz5z1u94vlZSb26pV9mVKIMiDc9YK5qCAKMlX7deeeDKn3doFMC9AJgm0h/N46gQS+qOOyr7tCoagGWgijCJ2J4nvKBcAdk9Wgak/SKblC6eAC3Tn55+8WBsbgFblu/2okvf17ZJBs';const _IH='13dd091575ed3b2b7d28a02e0fa3ec3b97c5c82d7d18dd12d9fb10536dff9b92';let _src;

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
