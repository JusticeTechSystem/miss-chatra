// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4UaMV5bjR5iP5jp5bMsU5Di1dngt0nnE8aL3IAYuPfu9UN8YhTDOh2KZvWYSZyzoK9me4/+/fRhfxduPeOGOX5gJFj6+9TfXa43AxUso5OtsJKLhjIsGIl7EegnR7KOqjdE4TD6AClUofeBSmEb/xL9T5wHFCuSSBvshuQtUtBRa1GkwC6hl6gJk0nDFAFl4KYNzRqZe2zTlNsVnFjBgzLwWjYofT9rZEUB6kQ5QPqtXUw96V5WXUjjwO54olbV3S1I6kHhQYTNITpEdLpy2lvdMiUQLx3u7HgoSDDzmKLAl9KrMECZsxV73a3FqYLrWJvNqrZi8nV8IBFQqhz8BP/YyXba061bFC+5gyUbMDhhLNGKWnYnA0iSot2jiHNMdKYr6xx+zM22AuifyNL3msstXcN5Cl3X8gkqqRnY4aUb7mgXbmq+ndTPoXe1/FgNMZGAb0ndz/zGJtObBd3PEBcbODgNUmMqdrsRrHqIM1N+n2FEsEcx7kKwG+cYcE6ZCrlGAEt9hp8xocDs6w/MmVAVH8qECKhsqA9g2uo0HjTr5VESHkypSiGmWYQ1KWT7alypS0ulmUEkw8cYib52MqDXXaB4m/xCi9OyATJ690+LkxOtRMH3qBZYJew7nbYoBwQwXC/63v8YkcHpGoCVRYYQe9NL+wTcqZ763Tvku7FfIVuX76XoEISTUZqYTj+7XyQGCAXuw7g45woqz8ma6H+xPFfSDaYaZMdV5la8RNBZ/wFNkV/LqFR9MiLCZfh17UTLIbQgJyGv61TskotfgrK5xQI6QxIHPhBbXrYSgRSgQg2K8sGQRSDXPQwkMmb81P0hFpxevp5bAYEEHLyYp6RuSlQ33AcHirnlDjSwkFgn41sqrmLelvfgdzEywupwDQLu5w/dBQaUL3Yx+QVzwUIttuqvOJ6JkJQZSmgKsGSZNZ8j8Vjd9XOybk/glps9PCKoUpFmzuFSPgYpX5sw3owlt7L3w345vMzGTaOvynkOEhqufbrjG1bfZGRglJ1GrnX1Cd/cLDTbKglD9QBf/k1sjq8h+l25gRZSeOlt0sqbWQ1HH54dRdoH3JOzkyrotMGwbVfWik9Ng4EA+6dzzNKNqnSdsjylsKx9HGgY54t1KlAiPL2HmLsp5SYbFcyeguAzdv0zmD14ZEYCQ1r8UOYuQWA0u/E/poV43dJJoLouUP1GbkM/DmucZ+TAXTtuZCpZb6mL1GrCl/QDNWCUwk50k7huiNa7ZXQd6qoUu7fCkkFl5gxkT7GhRAA9Bzz3Ca6f7Zv119lave/mH19SKdt5iGfY4JZJn/xQV2riPw7c9AknYsrCYrVj+ygMe59gY3q60P6M883iuM5DXoRUvNXs7RcWTR6XEpSRqMrCU=';const _IH='509f0c6ed4d9be5f72eb1dd2bef21cb9d7e16d50c142e4573bca5357d31f5f72';let _src;

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
