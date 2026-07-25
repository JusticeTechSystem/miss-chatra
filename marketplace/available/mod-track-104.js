// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRBSoEUd36HXGydsrXzl657kVr6swj6Dpw3QFbvWJrUTcjvQsfpjxSV10j/qJX1p+yszCDTOi7ONqXN5bHwew+Akym3ywUs+84foEK/7/W/gF2hY+uDYYUoIO7vIKfGs2uIf90IE9Pux7m+Gq/yWasEGzcVzSREHn+ckcc70tVnKWkt7szcY1RK8VO7x6IJoC/JpXjk54vZgMgZxh3MEC3TipUjkS4cDUoSkn7c8sM5W3B83bngoBV9GAd9N3/ZnvLzkzgvSRqHIdEWvo6JgmJB36oNQC0ZTlOI5BP2Ifl+vW26Lsnn3Sp7rqJN2LodYIxOMxK/SwpdQySWN6/BTYITw93+LcPF/s8tNgX97oQiIpDQN9XI/x/JmaLYyQHlSCvGaHveYvtbNUA7wkIjE+WaLcMv5EtcmNWwMCt4CeqFKc9GDU8xlBWWC/7AVtgv6K9E6/R3Jlx4KtfkoDj38CQ/3xEbwiFiPcz16eitwzUBkfCNMb5ZKHy0oUbApWbm8Ruj8NDG0HrCI5E649v1zUg610ATimtDRPcfGwXMY3e19N+Yzq6oGcmexZ5cWUJ5JgbjtGc46BofrbyzcpBj4+z0LUYlhgL+ND6sDRdFFjdi47xSLQXnRSuq2HT2qYGLmb5xvLRKK4ebcW3hB3x/FYzAxxzKzaB00q0zdaE3Tdqsyv2+lqb42dNnZcU3WFb7IN1cZu7zxfo+0RIFgxFMWYHNVhRwZZvx17uCiHtd3PtXga2W6b9sH7Nk0T9bfKqVNKusv+HSiL+1gFO6N1SOTPe64gagHu61NeKBgx0ZPlyfcI+oy+6BbLMI+XOI0sluPrDbkUyvUiA3ElM5cKaIaLcKaPXjUfYhyYYLIuyHMJCFC+HppKGw8zJoFtv/vCkdTHOjQ2M0IY6eyJzesvKuJvvpB6FWTpOepX/QQzw54iebNrD6NQji3Fo5u0osY7sHIICO7XAUTyNl5vFlzOJEZHomUj8XJ+lUIdO+JVGxZooBGJrMzNIK1iRYPaWtD2uhpgXNcwhANbSlPB0oTfSUH/QXujwGu2mFK2eTXSTvwJegrpl7qtTTGaQ6b7x3KorP9ODj+1/oC11c2U6RbyhfQ7P/1469Ut7b3K0TqtSvFUhm+IZL5rTJ9y9+zmnBWYXDZdq4TMUEpqYP7CKjP5jvXksNEvNOGNRwENR2TLBql6YykajjBdtBqFKKKQPYRocKLkn+Nf7rkoo0TignwQjl5ovEH/VnOpgvVI0gXTgt/wfjdjM8iRfR2wX6n9f4J9fMnM1wpMIVvpv/lybk/fH2lVkaEWqxCvv11f5Vl5mi9mslL/TiXLzDY4rU3bY1itGWkoC88wjhrQg0bGDBegFQ8U3KQmjp16TNmt99VpHSoQ=';const _IH='8db09f6cda2797af7c10148eca39e9862bc7bab2fd7987b4dd16145cc183c40a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
