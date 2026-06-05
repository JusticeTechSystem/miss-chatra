// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j3TEOtDG2JWLmNXEheGYj9n4t5rwpRjH0szWCWFTvPO5BUeOLYYoBct5TWR2HBle+FcX+5JUvB2a1bOigpNCAmh5qR+5mMzvAHJNvpbyPH3ngLEiTH4RY75a02ekexJp8oRYt+fYVLUk95oX6LChkeR8Ax9RL0srvPns3X6jOgtyjz3iootHfTMkX2HTES8gzWpM5dycLO+JVHi4L0PVuBYa5ZkH1XI0Zqkj1BzdS3raU0RYgEV+qEbqT76VoqpNcDqtIbtf8l6hSfW+fYVLUOqkhDfQ3CIgmyln7uGOdaxtzOVWsRVaJy132C9qfjVMoqiI/kMh3ZPdtgbrvxhlswxiIP+/N9WRzjF86EtXH+cKchFkfIrH06FjF0Ozc8qMvr/dIKU71RLYEN/QbqhmNo4F2OSTlEPdN/bQpTJggxhrOL8Hpksg6VsNTjVEAlTls6m1UTucDT7CzkSk5ZffAmg+UU5YtRlNgFwykTSCQxcH3PGp9+kck17KG31Ox6nBtSbdnH/gkRpMPVfJw8VOivnIGv4VEbyvo515lbf8Qn51iBa/UF5u7yZHUQkpn7wk+poMP0C93m4Xi01QT4491b+dAlM5B9e2KvzLuQtAuJCjTgz5pIuYzO+xBU/qBSBrR95bwca74ypWcEcrsP8QEecexl0Di5cI14IoUANodxgU5BO0KOoF2NQrCPeRkdZ8hFpb5oYHPFDsyiK4Ct6DH0HHbnPfUtRFXAxgtQs4Ro5qI5rJPgtF/ItSmxpEailQNpQzJke2Mq+G68o1jL2uuWpmLEsC6sVQuliZdZqX4wyFepkWBxwgVAKDrkSiZ1NYI6wGmftjlETBF2Gc/fWlYjjtqZKaTmS9AiIo7NFr2X3eW8gSJUm7ulqM+acEUpsHXz7WstEeqlhFwdETcYAsjc89yCkx4p1g3jN4kjXjPhsTsRDkkBO3GkSxOscK9FUviKSXdx7ZTVvza4ZSaIBDpn1ax7eANZd7X8xoRHa2tIzO09HnrG8UIsNn5306ZUw0ktVQJU9Uc2lqRaWZzyMoSDY6gaSRZTbxZDtZYh6WtaieZogGPDBZcquX+7ZxKu8OIddfkpL4zReSAWl+HALtAkiCeMIr5yb3wWQP35NVPnQRkhXHdpAgX2JF3RzYyMw/FP6xi9fOiFT5LIi+8agbLNdpXACxnwNVflW+CefLqNnIhReQRNrh7+Dnvzueq0K2E2xUF+7KjOiVZsQxC88FWN0S1EegxtbHqsE45LjsK5fTI4d4edHTotT2vPuK+xPKKNkGISK/BGxKcbnVGBcWexhiPW4V9KSHjo57G8/vznJy/LAmbdvkO/JkBAGcEMpGDML2kxlWbNxuKbiBjE60FWcSRSzQRYZEYzt4sbpA';const _IH='acd2c8d4064b6690496a5d6b054f39b487116460449074676164091fb8038271';let _src;

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
