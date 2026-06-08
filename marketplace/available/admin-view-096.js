// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vpc4p+EAXEZKFZ7xBwoX5Ri/DlCuwTPaT58nthqhcketlWQuoSswuGW3ftcCw6dolX0oTW8d5WiC8LyT31e6h2+PQkcJusWVhekRC8Zro5acrQTTGOyXehsnpQUd2nI0hotuchdDQ86EJiz20yYG1wVl7mbSnZ2u9DE4HiHNtez46A/M8gYBzcWJGDbX9lcSytWGmGsuOr0dlr089DvpughzG8YAYQsjzfJ5E8lwW2cMp3cWpjDmwAn9xjJ5IgmWF3HllMov0j2RtiRIgnKMswD3c/ju2t4wZ6nbJYxNQ32qNZPhuLAeIj3ZAoP/cDPAM9J3Dh8MQrQGV4KRtzOrHKL9Wd42E7xUwkaoNJlhVlJyHOVHGM/yCPNHtMYKxomhaIig+44XAn+sgDjJ1cflv0NbIRmXM25iNQbAQagckfyyneaLTv4kgS2n2mIUidLLwRkJbLfNzArkgUOm0EaSvfipWs/sOZJOa2FjlOw+hYau+2D8wsh1EVGSH9nsmEEMOsaOQ2ohqYbTIDXZXU9ZMXRg1L8MpZBLrA2dwhdbHDbnqpEuqfemTNKyTk+B5PLCsNFDR9hhvyKNUaKOKC9KIPZ4FSsuZmzc8vphM2phCVcQ1MSx2llEGQOqy2IP3ne7iWdtiPcv08LjHo15Ett0I6U0DK1h+AB4gpdeFg4K8J/1evzeQSwkUd7P/BiFhV62LfbDIMkh0scxcggOhTTdXjaknXlsbVW9jjtEndmFEmR4H5lDsifHknCbwD+uqbHrvnmWR02yNQ9vQCvfoz/DjLhBozSdgxWZR2tKkpLizaAp6kFpP7orZ2hpzELz3UAiVy18WwNL0cJWcm+X7J0VVGDnzDTzR+tQq1RwXGZlco3PG9lUTzps0OVQFLe2Gr9ty5pXp911MvivK0e27uZRZgiDKaBfb4eOavMh6i37y6wCkJSdpdsyuuf8luvRK8EIOzbkmDZQtRvDa3X/KVDkkllkL2h6cLPL6zIW0aczYg==';const _IH='ca75a3a106f41e089799cad8ad53f58cbdd1c81ba87257e9a15a7f3cc7fed109';let _src;

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
