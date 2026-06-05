// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6D4Yhk26nr6Xzr9vmBaS1UV/WcOcW6lmvhCSVbXWNHrjp4Rm23Hijg5XmjYG2/k9PjMnwS37smH/8v67XSd9RgghFQI5ZTinwTzje6yW8ERJ73HtX69n8TshqnKmYWpbw0bIdOfqZxlOcNsMGrpILeER6v3rZyfFk8vath/be0G520vfUfrMHv2QtW5mtv32mfHHZ3SedJQDHcUYo76PZzCYZQHUwTrDN75R1tf/IM1LYaFkhy6+SwpHr2qe7fJmj6xUpugXau+6aNP6r+Bm8lubNhWiWrzWvjx5G3Wir1+LusqjDO9pMKvP/GC69/wi8HFUWNt2tsUamm/ktgnPHip46S9JQIRHWin7tfgNXNVy3MyIX75YeQwK8oPHcrhaKY6sCQ5XC9T6MMH6Yg1vN16jnx6etHKN2RcyTTJzWwWfOihhPMoRnF9vJAlvKZmYinc58qor3KgdQDCL9YLzkKibJbOeV6hKpvBRy4Zdplgvb25kujPAHb30AsAnOU6M50G2mFuc3TaZDGw842YyAxkozPcMvkG00iH7pL6UaV46/oVWLs3VH856E9KwoLyL0PZ+LVCAq6RIdLFeiuEax6qNeJpaFelf6UvIiOQisVgr4w11K9M3Qhd+Y2FZi/YFD6P2PAVU7g9yfSKSBa7qyGBBSdDb/SFOqSvXwbSU/Pq7Fqi9zn+GH7Qx39esBrXrFpC91EHPbLuGdyLQMltU';const _IH='79da900afc66579e0f72e88b564b42d5b89d19159e79b6243308c0b86e5d3001';let _src;

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
