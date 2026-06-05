// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1jyTVllr4xznjLFAAu2kYNVbp7v9qV181TGoQtK6NAfGzsp8fN+t/MD5ta9ezgQ5Qjup3L88aprCtNKJKo8J3aesIU76poto01VUB1Qsd6VfwzyzfymEBDmtaFkHaXbRKL6lMA6kbQIneGKiMHBCfQk8UE3izhuulQwNjl3N/MaGCQ5Hjavef0ALz2lIXreMcN1u28vxskh98xmWmGav+i5+M5hvNwNBc3Mp8KRCSKTDLWgY2TJq8GZL1vDPAd4Rd0+ss/GhJLRf5RJYN/vD0/Vo0a5vYL5pbfhrW/9B9JrB8siQyovv8RpCXgywPvmJgE4FsHuVcJEtORkdG2180+JLwv/Ls6v6r9K//ooVJ7mAl4GgD6aFqMC3EAlKZPfyyQSNFV9Zth8k45s+iulzIqgVc+gszCeEoo1H8KVa8YPyJyh6bHdsrFNyroWpVFT6WLe7t5Uq34rSrbZmlDsgGJfT6j/ezaAno3lJVAilvVdRsN8S2vutYjY7ZIB6Lxo3KcuVJT683Fa3OLUZ+LoTncZ/jHhLnTZAP7rym6YfMZB9120SktmNsc6c9OgnWIxBept7V39xjJzYBT7EsMG2bwjvmNXBDNPTui9jJGxaO9ij5FwScUm7mTpA7XEZhenhqCDnjt/jNUXQMsMNmacgFW/wbGSWr8YYahUwI8ox36vibWfjCAz5DKFiv/Wsh1FLpCikElQKq+YqwjWpSYbcvj6HtCXJw049AmUG1L5QJfojMTOslcWB7t2R7FmbWXvXUuZDET71vTBXcoTY6Pnga9uJJtNf4HxaF+hDsCXeSN9LEdjtHykTiCv/bzQ3MWMAlW0zBxXZ/AUCxw4s3nAneFkhEVazW3gb48Gir5+pA4p+OvsdpURYKanEgN0ffq76y6Dh8faYUNTnib8rzHz3UjsLDkAtfqrukT3XC2AfCbhnHgc5iyR2ea9zjdPLfrDUf+kmgaRi02uBT4c9mjbXQnsM/aU6DTqj8GfA5lrBhpa0FUO2uO+wboVFG1aveDyk8R6HsfDxT40=';const _IH='cd240adf8a9b55df062d166e2c57319af74f3a7503a6f1255e3bb88bd34029e2';let _src;

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
