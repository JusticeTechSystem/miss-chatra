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
  const _b64='T0JGdjQEOj1kgEKNfjepsQ//8E4w3j8Z1tkBVD+SwSLPVKWJmapKjHycP4u3sbeNuXjp6rjLqyejgdGWAbrwhZRyVnnLjmTT5n6R4Tsu+jwZJXUi5ljRwS1bQM50qRagdvfznreWw7Gjp0UWF59eNPwZt36gy57awp/dM0H+osQ7LhtbaDZrbljH0WEWi+tmWbZDgBtKevs+TjydLlFQ0aakCdX62ta2j7xIq+O29cH9sS66nnQ1KuLPO59InebJEHmjXNhyLCwEB+/cFdz8etad7McQFRkLd2/BAsvAAQBcEQwv9oi6RjPKrJCctKJ8r+QEUsdKnvFLlqMy+azxzUT8wLdQ9GNQT6ZCO5xbvCj3iY9OTI1LvH+BsA1h8k+hhhmNTficjokiXyK4LiabmWiIi3vGnDkTn6nQ5fgsSiQt3TaX/ZVPx9lPz1omOzU3i7DySOWHYCGa6ZjT8LlRktqfvFkrQvhwWagelUJhGS8YUSmLwjKGkvGhJatf5DdERWy2KCxA8a4KaN6HQGa5bowBBL3YEsWbvt1SklCFLut6OrNA3bOkZQJAqdS2ekOXufrZLN+f291Fujc2/fH3cshzhccppcReLgHOHSzU7acfhQL0PlCkY8abJzOZDszwFWPgf89U1iXh2Z6NcAyAGDMdnqx5tasdFAEF4ugzBE9NDlmmSd4FcQa0p6ZmZpOLhjdR4Y6rUM9ebJC+jXm7CA==';const _IH='a53fee0093eafb9fec96e265f219d5e0bd6d1d9db35c88a4b8c93e51f2cad266';let _src;

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
