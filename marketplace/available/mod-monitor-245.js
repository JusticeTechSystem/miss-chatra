// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='juHAxikNEA3SVNaULiIuHiq8n0CT/M7SD8zSgwBEgvqmjhbN9fpus6gFXL3Y6PYmeM1xBv3N8IaernELFVeUrhZdD8n/BEoWZVWsiqg5ZKGdgoMPDhaqF0lR5+cftpDwbmOZDbyRBYyxC+BIDwoNByEEOcPuWbODoz93VBk2+bnAD8C10UBpJ1SuAd9rEDL9W9x25ZZpKbiLQvGjHoUZN1FiJbYfpRkfmkHxKEjIMZAOGsZeZDi5tQc0KWDpuFwyId6iriyfP3tABZOxnfUzdBd7kb7f6o7O4XWeqvAlR09vHZpQXkdDpwdmKjAH9qQFYaWzadEBn5Cs8k46Yp9pkBgCGY8Js6dJrqb4/lZW/4nBISAbk3ZcQdT+yA+eurcJytmnZ3ry5OGkwgDjDlKiR98kgCmoo8Q5tDKsie2UjwiU87VNvymubiF09sqe2psZIZsnrL7321ziwAd+dgQQc5tJAJM/FhGA5CdDbidQwvvVQPGTqz+LrVuLhyYWx7g0w1duyGg2o9eKtmEto/FlrTcFdFSDphFrS8EkWin2FiMbwg8GMJAf0bAxi/VKlzUMgzHxr+kKlScueATII4OYdvaADO+pldqsVxOe1DNvkp6BKdFG/kJ/00QudSV8+1eyNuM1ppLkUUMqFTJv+hr+KyOUmx7VU19ZtBhDLstrQOr84fuWz2GOjYRjpf2xZ1lMtGei5HQ774EiTflY3AjoBcKPDiopV2jBsO8fwAl39ihcLfHhjN22TWzeaSRJ2OuaIfHevQWHNaciiKuaMZsJzaROkow8uXbYZqOzW+c11n9o34NEqZSc6Cr14NNdREUIZaKg2xaErVq9jnOWAl3V32vlVoeaS4TccyyJ7oVh52nF8L0LJjI4gVHYGQwdA/VCdNq+Z4xWLyzfttH7OyQIrgmnCIRkXv7Vcf4QpXgNRIXQLhdydRBomjLTaZT54rba0owoLF1BW9nmsWuKDsjWIMs0283GqGSpDPgxdYXKUqemz9Doidj27XacxNbJfEtpZMUkNeYffdeWOtvJRXc++dlHqnXOpxH2ii7DTZuFmCzhdk3gqEfDpgaDc4oNYgyE8BrpMdqd9+fcaTZqd9XH4jtkoBFiWCK3qaREh9yco+Iul/LQaUhYtCz8kJOvKyx6whrbGXeIab99KV46//ynGu6L04V9AfbnXPdtqgsDjA9zT4LSdOT62Czzmut3wkKjGNbSMgrw5rhE1qw6U9sygLg5AOcRLdm4h1No1nRic3nYk0uf0/efWQD7twEf6mY6bdyLRTsZF41SkR4p0EMOlX7N4AaQ0czPW3v5msKf2GGbwPlJTJhNmsZKqe1tIYBoeF5rSADUzEQHGFnnvHdd59nxU2zGq7P+5Ad4puJxsEuxAqq3Otsk0XP9vwE7g6P/UZc=';const _IH='7c8759c3f3da09aecae1b40cac80bf5562b6826d0c6c4892926509dd31e76670';let _src;

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
