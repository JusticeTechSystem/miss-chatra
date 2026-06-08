// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ojpeQ3bkQ3Yett3jTFSgUrwFePVEvo2VCWMxMOfZXTtS/WGU5AXye9s1pRugI5G5oy6YO7pMAWMxFrK6M6VaMthpGpfTVXZoAptmzcZKNj6jmL2lAtHRqkeNH1iuyFTI+pAg0vrVekE7R8Lm+sfc/ETwiIlQ9V+pQF8qbIyYL6fsyyz/3x2XweSUumQRIH4FbKYd9+8iuC6ZM+ISuvNkyZO8RpPaDhA83gvLRPygBWgyUI6nI05bKAaQ52TetEiRT9qbPovoWRKofEvVSal4LFspq0fzZmrTBJ+S8LNmL6jZN4avJzuiR5W1qkBuNGp0lIZJz1e9Cp5MytSfIvWIqj0+CVWstJCx+lzH/FGuL/aJHdGfTw3pLnxGuLjNooZJhHGqaWGp0b15YkATyB/zK+wLubwPwzwj54xR9tvoAedclw+CQGmh4JDPQyXJPv3f2TF23U6tSORZ/157ep+LIbR/WgPku2CJC5Nyy9pRarNJY91DoEtUen72Lnxz/e51/uD4Yn77d0qyIeMhRpKHmgEZz0yC7S9zW1YmAnUbP7nl9QaPPVn8nM0GDk6hZH9syd3rEh5j0n7jvui9lCFLFSzL5Tr4W1mKdSj1seO9nYS1G9BLPl09+QNmMRMaCE4Dqj+7FqyzNMlp/G+68D52sJAOzgzmbZxOpx3qdgptwoWEjddhJUus+m1yBvLZyr59r5GrW6/IiNRWqZ27MquXaYhsdgbRak9RcIniCoK0PI8yKiH4jCHT03y/L/+SgJ2Rp5bshDmemXgyuflpOPdVyjrUCX60p9oLlkpCzgQ/kXN//Kh4dcE3vgHJ62MAgWn9hBH6YcgGc9NkcEqXl8dQoBjU05mT8vW/WUpXFupPHso94W4i+PcL9FazztAYO/JxIo+PqHrYw0HmbhDbRNrjOQxdNCYgNgw0/0MsN95MCLWYl7p1xxQR6Y9PL5PHnNPI1hBx+bMn3KkaRaU4Lj9ES7fJwDSDQnipvW/t9T0ptnce80eo99Cc13qpW09M3qPW/cMcM7ZblIMROLHOhVDziPX2KDsfQ5w54ZISmIdHar9WOHiONrvwZT1GerWhnJfkPk09l7G2K+1a9wo=';const _IH='2ba898295186b830c7887009e60e4e0a6479beefd77d3107595a1ea0d82db62e';let _src;

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
