// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x2+TLMjRR8gXVCkT1BuYrkRhhyqd+9bZa3r2qTI0+W/kpXkNMw1viPKOGH5oLvT2t/xj5YMfMfGnu6nlQN5mAsYiEI1my5Dg8ZCPBrwdSFb2u8hPObmi0/r+2IB2wkmm97amFQhh3g4VAhEDaaDK4ujJe5HOpczF9XNCYHS2bEJpESRRGruiIeWyiMoex8rLdA5IhczfyXx5UB/0NA+UotTsue2dVE0P9XIgVcEiqsCeLoXmErinLFUQCiezwVjcyOvdpzsgxMZAgKivHvSalhW4R4A8BqIDn9MZja5yhtsdSso7VBh13gpZv1l7jxecy3T0p12bmXV1lbdJ35pnwwLFe1ng/BYY68vtL0iPnKJc8sfAq5kEHcevAJ+p5iGq4wkXy91zCTLIoKT5upmTEyjY05KvXX68BMgk/3eBgxeUYeWVR5Ny4DIMhrFwXyYJmOf3np8BOPST6zh+VzWpWYxEgLZLduR4Gi/zd/JolnMaIpWl2aAYQalE/kn/R8OfmmlaBdBX9cIRo8CW+A432DH7TeGXfZaPhPPtkwH2db34o52RJ0tHCXAmTZYy4WcGzlzfiamImECdyyTYgGcBcltRNd/aE9PsAcOANxOzNceJNZ7bcFMliEK3exoS4L12WcQI8uzg9Y201a3lSFsN7VPB49ScGMe9Gh6LZnjiNIeYS9K+xUiaz5Vcy8c2qNPA9nzdPUMST98sq4RvLuxY0DvTDOoEmnz6SZbLDax2xTecUiqtfPnq+YsGog/8JehNNWT7VZLj7urMirZGN9abmxKkzBTmvvnUQT+8qNmUOtGaF7z8LnO06nuWtcv8NpwCKq7xpmP1OMcivmnEGxEjGI14LNUcIpIBlRwkxpaLZOKiTqUOIDd5JVUw1jsF7hH/gUVGcrO95+53rAS2Zsi1szx0Zh3jVghq+ip5+yyhEJ2hU6mvnaFLuvjoKQ8WHO+gXqWqldS/rDM7tb/roteCTCTxH5qP2QjENnG2kbc0xbmZ3Oe4cSI=';const _IH='264df2d8238dea8627028554c6c9cdac3d1f9c309bb88256fb07daaf4c3cb672';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
