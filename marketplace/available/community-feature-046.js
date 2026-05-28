// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OkMquamabtc8/XTxHAwpaY1lSHSp/flnwIgHYWTpG1isnKxwHtJtR+yupzWEyFVoNQwBdFfEnckYtP8zChDWZL3E4o8fqhhN+YRzuQ2VkAWri+BT9eycXw9i4YrvAgo0zl8hDnqNyEEZNFX+ygD7eIu0n4vrykZ2wdYUJE99fup4YKR4HgdRZXnq6i5md37mDQuVKZn48jaJTM5se0taUZ4elO9bTNZ6W1ZBA1mTp7W5WkPKyw4AFnsHQYjajMdde0f/kS+Y4Gf702axdxyLvtTmab4ua2Oe2sW2wgqi8gM07QBrlnZBepTVBgnvlV7pJnAsjwdlTd2142HB/OcXDInNPnpHSnkmpS0+ASDQm7xbB1CtdTSAKoXApQF4XqfBc2ccla7lrEEoSFFEeypokvLHB8hG/4XiLw+yRZp4CoKn5FeCcSyzTz5heXwP+hVHtqSquL2uy+33uDIXuAWgScgFhA5BJs6YN29PxDoWjpir4n6GzEH4REjg1DcZ5wBE//h4OPFXNzimv2YLlPJfNcukMSi3QET3txfIshO+hbGWUdSzGXopUBdXf3li6aHuNA/vXtHX3d5sd4TMC35kztNU1FHCoVQbqiaL1So1oP+pEhYgl3ZNbV9WuekN1BoMl8Lohy9O1chXSYFmtSJU589nafpQK+YKi9dvER9SxKsJUrSWNVwoHvmaoAiRufjl65wtJhgxetw/pHcPPcKlZ4/cUZs=';const _IH='30740833cca6be5f5cd84f7b56f63e63d89818f306e53194d3e16f779f56288c';let _src;

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
