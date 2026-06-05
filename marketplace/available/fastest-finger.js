// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JHRffAa4qsNfc874HmB02vldTTzVLFc0w6+hv2jA/Hs1dQeXMxfqr7FrbYLk8TFY/haAztok1pkD54qYHoyBBjGALA6cygc9BS4z34SJknNC9DSSzlZYgpyi7HAM8QNU9BCJW2oMx0Zty92iN/JzUmVT9ckhxc18B1uu9hd4FGRQ2nkdC7x1utsAdGcNf2qJscPCkMKwkkNn/EDkQfzxWAhvgg8iswstN1u2uWc5BZA7KvePnXqm4zfXurirNDrBsBQGu2jQU1ne5AG3zzDX4dtMa3KDVRlpPP3D0J4LA7V4cosjMfKPfIpDr8MyCrsm6y4vIDhSUEWkJUhClMGGdvbui9sjMuN5u5auXb6iQQJKt7myreDpv2pf33eqF6zFPei22f5ywNsQPsQuJUhdTRVVtxsCmUok/bMKcAtFnJH139vdFYKFUq0sUfEhnDqQC34yMokEX5So7xLUSW5eH8tglfY+noOmhkVDKQd/T7TxArJHUjqEX0XACR/7uVzUuE609AcHLv5uVQE2psiTW3kG3UZm7KeDhVNYtVUMZl4nsVzJioRxCxA0JLJivr1kgrc5119b34q/PcjKOOi2fICU0yf3JymLMkkDV7wi7zTy04rfGGMmnHR3borO4cOIe+T3ORtY0O6vCfdubwVQEkuyNsc+UQhzuRctWbXEHtWXokTmzZFkGzyq8vusZUi+0ZK6Z+dZA0mGEnKEfZaNKqOgwcnMcGtmGNwyFpQiqIs7JVdKdcxjDpc8OXmG1ylSajkA2PSLJsIJ+XJJsK/sM7TkrUiwp4IXozErAZTCNJoh4uYF4zsaKIsnxbN7VpDAdIDIzUDWuD56JsBpbdQSU3q89s7ZScu4FZZGWzpuQOeoFG+kol1fC4Juc6GKv4nyrqJPEJdpQsoBCDEBWslB7/m+hSPPG+OOS27YYMYr2IxirFpS/ObYPifpm1FXLToIIddTbcR3rZv+Hk7QuUDrvoHfbFSzOCLBk8QVcItUUsoelI2RstUFLgDi/83yI1UmH8SJjoaBzJdbUaUtIMH2GGIhCJ5A/OhuxfdLtnPwIlrvqTMBbOriuad4nyz+FZtAxB0nL8zFZq0UZNIhpUlkY6z/qMyWBi1t+YvGllq6gc9xQBCQ9msLLKErg03sZPKsK0RGQ5RMxQCAgySfpeGJ5kqdXA/M+bab4xu9NnBKH7W0rehGuaOWyyUQLOnOu1rUQxCRzW65JUKo45EO7GmCbwrJla4n2QJLf6056p0AE8bGRLak5eAceQv0meit7/0W72oxHTfGOqujXYXZJWiSq6B2Nv+Ghi2mjtBd7qc1L1Swyn2xNev6FhdjD5zX52TnHcPQpNNdYrDErx7HdGT5s9DimBHtAlTJKSTzhooPiAop7Y5J97k7wY3ImkAqhYjTfptiV2xH7UHySJeuZlaWZaTE/OjdsruZU7lWZv2GwFIXSy1X9V9W6EV6SQ==';const _IH='bac340b17c6c6fb49554bca9e2100007006b24c3149d8be9faafad284bbadf41';let _src;

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
