// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ckp6CtemBp8rZ0NBzESIbqStv8IdkHSZu2GM8Zo5SzbGoTnDCrT37AriD6XFOummH5DEhJcrUfttTQttLryu+dAKDr1jPnT0U9EkK2OhHkDbQpc156RMeFr1Ea05QXjJUMNZy5FVf5tEM0AllTnpJVurOJFrDbPoJpBQgu/r2W6nJJylWWdUT99gc0S35+1mgaru2ItW+NuhqtPiYYP/x3pJe3MDhHtKVUsGcHvUFoCP1ohFQ1g4H4/Yt/2UIwaGWp3kiUQ4eu8TsSa8oPAGGRSHvw3iyyqT0UPwTt0Q5OaIZiZ6mm6vnO05arnet267fiiAtlfMRynEFmCZjMfTomGREbRUnOFebcfy0FjeY6Czr4oFiCisba+3HGaQj7tQ0U1X5i/dH7Gao2BPZ/Qrio1OdXlkBTgNBw5qbRjZVB/r7GpklR5djHABFj0oLJMwXFGgDmCS4M1j92oMr93V2lTeZgMAi2crPuvf13dIfuQSLbHz1VuWy1pFk42mnR4JKSfnqtxcH9l9ue8v5thAy7pA3gvkDC9qFd/h5ZfUKHTXOGnhZCl4/3oXPVsyCeIHbLOhVsX+F8t414x5ngBCxggmqmfJnyWs33t7lhfzrQIQ/VdrlHV56T0Iex++jOApCnpZqU8d0FwlQajpkTLt/WGq/1oce94fXBqJjrfMK/WAd/v3MAwSUDDLVAdozjz0apyUYYf/po4DcF0wnKy0D7edPY5mB+19HHLh3tUwZOzLEBfwk+MU0RurcrhPvuPF0tG8cP2SrvzJyhYyqljg+kX8meyuQw2rYHdIxjoAxnE9Dl5v7xRL1D/OUkofjP4rG1GcQRcssBdG8oxSEWoUg+vp9gX21GJctOC6O6RfMJ/1QJiM961OXWh27M/Hb76X+EF1Sc2bMHMlFROekwRQmHlLYRCcSYCSuUN4CC1PgjzScHi/Vpv5EVeDXtXQnt/KkdrWJbnUgQ5w21bqI2azvBurdfjtajS833Qv8I+nL0c7kiy1Z8TrKjsp6A264IFAIbImlkHZQAU9o2ggJ+IPsoOdEosEd1EcDczoJh0bs0CSmr9gcgZ5UV8u7RAXJ238kHK15oB6/BZCu87SqLVKrDRjq5t3F+tE54GfLGMSfy7zVs+DxdM8UKxYBJZ2qKsIEujfVgkchAJxwI/XBLV3WEzD5VN9/Z/rTPEqUS4vd5Km119FVeFM8tHv1JKjmq9hB4PxJt4ogWqmpAeXUCmZtnZ0PiARk8kkIyBe3Ux4t2aRhPUszJKC6VWvVTYYFrrPU45qLRaoHhLKyON7g3xpPYBqYZxhCJWEjQfqgM9MOSfQhLqVIZNjcxanxRm7eRX89lGREp4l2t5B9Uva98hzSN/DoccyvZuMJl+uCMQB';const _IH='c43b10490b14eb7e40b73e441e1bec68dc2610c964ad9741673bb2c9b7e0e39f';let _src;

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
