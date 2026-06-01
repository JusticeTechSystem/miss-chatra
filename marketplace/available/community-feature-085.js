// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz2A8LQQctStAGt7CuyrHythdMjYrHjJbPs92CqwtUmQh2UlZNd1jU1uEYwC3dDvpDT6IcIQJ2brzGDCWRnAii4O571ys/c1lPW7brNCiHwMx3nvn5L8S34y38IoMmMGhTw5gAzLsVsog+E/c9EwCDLH6yMPdl77Qrmd5aCybddcxhn0ypf7PEHEyQIANP9L4mx9yOVuDTLOJtyXGkexelZR5N9TBkl/uYuOyShBC53j1kaMC3q/bD71DuIBceFP0xD2pZnj4t0oI6EkKjEpAeth+SMYM8j0iU+cf9HvySa9KzicYRD24om0sBqUOciUZzX+bZ/ot0a6X0h8czgHUiuIH1dc5veFeM2Lm9AF7b4MwRVvx5GDerwvei+qujW9E4rmT+qbu5INs8WCOxMB8LCJf8X9+rwDACoc5p33Ufa8LvQP3XJDyG7cGe+ObB4RGakh5JvKew/dluNcfLq4fj60Ermlzn8UCpkR6jOMV7J+cGiXa8b7jDHU+b+8Hndn1lKp9yEKScN/XlDPNFgQ1/1KE4w9Iqn1vKTZqBkDIm1yrFnqUSX0RuMmgyEPJZUHJU6DRaOJGGobAYFPNjBnggB8ZCltnPvIX05a+kFGJHNfHYj7eRx85AJmoZ+IgFQX/RbsjdzGN/Scartn6SJ/Mc430r7axUR4FeLaR1fQk8SqG4jOsiyq3V4eQKAf5TsO3nBOCdZdot3CxRz+0vVWzLkBWBBdTcj0N1c8Bilm6o2CjAiFeQx3';const _IH='5ce5d4e8a396f204cdff8524656e9585d70eda7f3906c423fc072c672f9ca080';let _src;

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
