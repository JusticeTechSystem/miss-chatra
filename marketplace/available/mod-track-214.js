// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsBrfxqUp+u6AknKGhXI8iv8EN2pEDP4z+sXdnPkn+YY9jt23B4hxpCI7Ug5VqePvoZwE/wONjxg6Rl/kJndnFdOTz7pjdqHTU5BzAMf7HKLz207qgSWwR9cc93rG+Rg8xDCvIrCkBeZ9JTFde1DhBJh1qYSYs67FYBHD79Gu/UtF+PgYRswv1nAxu+/xnCjOXzg7CbIg69iPWb/AFxwseYjwPk3n8IHvDS07pnTJjvhOXOZbcVjXVDAlws9HN6iuMnBwVZR22kjVHXOa9PgnturV4hzl0AejIpS1dsiBmP4Mm1Nl50AKqb72xz++dBqI0uvy1Y3lrPa8Cc8ZduBYRKkLK/oTMgsp5wyH9EygpRaA4OY1s0EasBPa7/1XsSbkXUAOmP66ng/U32Ml3Yj4J8izC8zx+qUgoLh2KE6mHcbtLA8nY4Y7MC394TdkrhpqbdOzISzxWoCk1ZkaYZyGn23gE5P6BE3PI4UvmYir39t4xIdJgQfDaWY5Ickmr9GGJuN5lAOXp6YqO12YR0s0kpBK43u8PQ0G1K/QqQ0io4rKIr+FhpIaVrfH9NnJNRzVaKRasO9r7CrXchxxtRO5rbUmueztXccuYYyCjQUM/hRM2fPZVu1akZzLoQSvkNj4MRjrJrmTzb/L/W7xp5dDb1/h1S0EPkiupgExtSRmdD8IatI5CDhJ+cQeAGODTYSeWz6T4MAfszx3N9tIljEyZT37jnlApFGLiL4+p4F+RcA4P7CetzxK9xSEFw9lOaWQWcF70qxPfu8WRy8q2ITVsbxojKJ/XfUOHW05bOq1afNm66m1xZzN4NmjRZrjZstR5HKD5ZxTS0fDFKcE9Wrgn5a6kPfVgvv6eW0FUCZqbx0/EQlaZr32nTh+w2XyB1j3nMjO1cOtF0dd7gg3wH5qTYAqxhknjLkOjZkyz86hRjEIouhWiVGC+1UIEzKmD5c9tZH1D1pDhzJMml/nX3LMhdNg0Nrpkibia/d+ylPn3jA4dMKIE783Bb17r4R3KxuetdjzeajkRYrjFfaKYSZs76PmnvIVl8H0tP3KTWSD6KlbSQ54o8jpRiIlUW3sn7w+wg3AuhTG6GfOlU3aXjJFRse3dyLYfSaBMJrh83J/eQFX4TL4gOVvse3bTIn0A+BRI0DUiJJhE9K4pV2wlkYUm1WHletSyEUw9A5JgycBtmpRX9JqH6hG5cjYKKPmQNpaNgK1TMXHc8OwsMCt7S8JAyOhADjEg4T5fgbW5q5qARk65sjyORgKekTZag5T+z7YJsbYKpHmKLLQu3i0wxkZEEhvbf1Wdf8NguqKZWWEp0Yap1NDidKQbAy3uBLVQ/bhZ7iQQYX8e7G3SGEGhlNC9aMtyJPv0xCr7fmw=';const _IH='b595ec31002fb51713472528832c59e28240419843199ec8b481a3b6ec48a17a';let _src;

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
