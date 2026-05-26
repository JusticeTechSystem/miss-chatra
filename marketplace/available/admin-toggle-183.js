// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aHI87ZOjTm14cTetsXfmV4BBV84UqxIWEzHust6D3AzNpmKcFud2pWHUrczGPuoOcw/9O/c30KV/cQzjpjlngK5gWuWvZGX8eMRdjiT5VsCT2hyUEV2jggl5la2OZEGKv+yA9NTTrhUIwx6nP5H0pR0TnzEIMwe9V+a3QB79M4hcQ/XOCEnyV1XTVJg5aTFbCPSt0ch+tLNjtB2SMU3+MExiM4N61vy8nnXIsQqoHvO8qukaTzGcLsmr4uHAhBXqOQ5wRnOdJXCspZ2ai4TlbLbZOMMFOy8a1RBIqP6d6ErKXGuuBW4qXUy4Zk/DkyOSvM3UL6zl5zPMbBxaZU3YQPiLyzJo3qIxJclZm0YBr/Sv/NE/JV91WTFPwmFAzeTy7Lb3asGfbBHESA16WxnIZzw/pjfEaXWkb+rprRuKP5y9/s5tFED1iGp366Gg9koXJzJtRVk0te1NxrCt/6l3T7hpxYh3pqAvy2MjaYul3sPF/iFilz/P4O9ryzOdqjxN8vBJ1Ie6qlzUUlzKgUV4/9mkMiuYKXgCeHlOxKK0tq5NiztnBNLi4YlZVLWf6ldeveBOnT474yN0OcVenetnX3oGjtfxtGY17xG/MRZjdpa2F1puOsFscXK+J11lCwKrCMCANDN/TLonslCwj7MrRPaAYg947rBmXf4kJwQ1i6Wy/5JfjyQR3+lCsc3nr6cHhWvMCxlg/TFoE8wCN1pEoSCZyXF2VzOC+O7TLBv0vgaAuaTrslAsnA7jZ4O7J3ZWZBN97OZ+oUzGlGfZ6coPai2pEJLLLj+tOhlWXseL9Zm21bSk4pwLCs/HhPUzAHKrAQsz+rMidgmllpVjGu69HGNWBw91VGRIIZMLhqHtRsu0pmbYMzlGobKSc1FWEEZWBjpnC2mMRfs3ktCCrU8KvVNaD/EcyHwxDqBbEdNB9K1C6GyxwQUVtp1a8cqbzlmdUavNLBeujHauaJ1kwE/icjO/gak7OhbAOp+Y6Mf6NAhWoIHMmiy18T+uQv3jbfm45w==';const _IH='9003397184306a1316881e5ca553242235d74cf657840602d67a98bf57cd5065';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
