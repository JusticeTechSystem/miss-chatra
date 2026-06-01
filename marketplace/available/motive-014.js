// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0YNThglaCH/6CNGnKP+6a717/toIJPicpQDqHSHkfrhJt1HbTIzfNAub8S6VJjnbyzawPUCqZqrFLzOLxZIo2nOWco6NmezpCUmqIaAyMmiH5RX02hQawhleGihf4bX6568k0ljIgDHydILzaHiz0Jo4/aWnLw8ECXrRv8lJaA2Ab4U9wLT3yi7csBE2BSv5+EnH2jEYUaHy5uEW0TFsfdQrTLk0Lm8gi6IPKFOtvtOsluB6LX5JkACCQSt7o3x58dav+u3lkRJNbZ/joiTw4mm+cenlxCrgus0UZrBKHxyCBVJVJ6lJp2uQ/tvGmor6fff2yCg5tjFkwFSC1H8TvU6/AfIotKp/qEYHu5bMk2AnOxPAddaXYJ2W8rQa8avU3a12X69O6TiZ59hhuGvzLFxRJMivkDhV/ontmgDdpqr2fzQMSLtVWyV17PFcfDtC5BSvvMghWXB17gBgMmp7g+iOawls/AkyJgSBg4SIQLzh4Unmk2acxLM9Abf02VyLdwwiaEi5DKGNSoLpAXw0dK8DSxeodwFugFBZVxJG6KwqVKWPTc3i1Q3C0fMmbUZvSZZ2EiEze8RXF3JIdz8668Rgdv8LcSPJTziD70AXB3rnuVinoIXPMOZwAp1m31S8wBUbO4sqELHVMlaSO4ZaNthtybGA/1BJrKc+VtVyVWNknvIBtDYIpgK3wjGeDYhDR/Gs51GS7fcabDsBGWvGo11SVBfyF7yzyLdLvSEcQ+jp3Pxzlhfjx7P+Ne/gbcBc4sUylMcvqlb8VfRDuqGSHue5hdBXU+QIkFfw6zc53sHA4vBI28mXGa5isKtivaEnyXV/necTcrjQbzZNfxF0o9LV3gKEk96JdgdC2TkekIaG+fWn/BXBGHD3DN8rhiEw96xVygxvehJX2BrQkVPH24I9XzDUoGM5GkK/BsWde6mouincRewq5PW+VchSghoEXhq/tRY7gI5Kn21OYjM+I0L+2/j26obGGwAf95tjqYXWAs1aKhWcXjItEbuMzGHDAzYJwBmpDeXfouwDgFS6lsK+A==';const _IH='8a75f6351dd9ac941e1a7535ac8d74ddc39d561f5b607ef8c90c5979325ca8c8';let _src;

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
