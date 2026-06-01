// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxwK9A/fbuHmrQE21lcB81XWmWU3jrT7bQrM2sIMCKytFbr/rdTuiaPDlu5OZQtoEn3NoZWH/UJmCnKqDhUG4EqR0zDcUDfVCJIhrxPMCQXIt8UjPY/EkxXACflGSZ3Q2V764UygrSprQ9nFVPiHfLaIkEDApYn7BBmxlQGbG7KSbfFcnPsh72+UEYm+oMOE2iMH6gGKOYZF/aaaqn7xGbroKyHFRHwIlCZc6PLu6w9GQAf1i2PEJWfbf9pree1EN/0Dh3uINWsGFm73jZcMYYqkEVnmtJO3N8OWdZe6/eJPmMfoUADbXmvw6CEhE4kMyHv15fgPE65nUUJWV9yoHxQeVxJpW3Wi6qYC92dFPUViF77Lc+w2wUw35BtOLIOOGXm4o2C3mWbqarEhX+sxu35bzlLWt5rOMLo9IBmpKJ6wFI2K+UZhz4IqL2mz9UFwUI83MsghM7MZ3h4elYqBb6hRGRpXP7a3PKFdvvGld2gvm/hy6AoW5XqiTqeRYILCsYMG4gFJga/UM8IAkmvYvqZ6iMyYtf4SzoHao5FpBg6Z6pX46KCSiZ/UMxawlNNN/3csjtWc+6LGTT7g/7BbFZkNb4Ee8MJ5jSq8UGFXoNPKUvGuLuwhdwCZ8+eDPQTPy/hI74PalcI18f5srGhFAhxEfZcFFxMWxrxRgpJIUnsdaU3U9RZdykpb9pcFYh+6arNjWGg0DjCuKE8cxwhOiHqoC/hHh6ObqQBzBWQaVxxSaYgsr7xYqpLhdMAEroZbPSIsDGANs1/+bB+/169FlHA9eGIIsghINigszP91YhPwo5dGKE+7UPmF+iV0n8YCX9uRX2QbRLXU3pXA0dZg5OpHtxqobWQrafxT28fS+g+AC7zHKBpSRYtj3/R2NTzHEwz2AWbZMV7uyENa8jKC8MyYUgBHKyAdhYlUeLslI7iN2zIIf5Z2kB3ssio24cjubkd93Hx+1SNNMDFxhU1B7phqetiB6YGNGoowTKuJ8sGOr58JvRyD';const _IH='0a46a3f29923935a546b0fc48a0a98f1e1d8add3e4f7057b68d2980e70741959';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
