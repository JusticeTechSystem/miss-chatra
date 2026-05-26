// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qo2Q4zBAJnemCVuZgBTRCC/jUjP+nVAuxIeS+IYmhs2aBYF67u5TZ9aulVYhXPGIiiZfbtGpFkiMp1guf8o6ZqvdS4BuV899CggDaci3aVaZ8HodqNjnKyHHujQGKkcnAeQyxqeMhyFmxaVSfv7/FyqOYXIodThxZ3Iy/LjGC4C4O4NJPnTM78XJ8XsYz5Li60nu8kx/TkDNHG5yNwTiA5oEL2sF+z8rzZm6MWfp5LdEq0SLTDILGvWIZH+A9/zyuRjdi4I5X3a17EED0E7RrR3tqaG4pvCAWwoM1wLhvs7NpAH+mJs5IH5sNzwKXfGxyZbHrhxmp55/G/MFXc5SMy9gqYYk6Qlapcx1DHO6whpXh8JK/TApihosMMX0CnDw6Bzq5OrcuN/PdM/R/9lGOHPSlaC5q34oHEtxbWAc7V6y/haJ2Up7J6RjTsh1sSfg0SoywlcZ0c4f6KrLOeDahwegI2S6XofAepUSf8kCqMBdYnpyRcRsNStRVWg5TIkSoKE6KTwkYz/UHkikER2AqhjOQi/8qYhY1oH8nIsSSCj2ZbhRvkhL51nxIycPJugAKeRGMIyPwnIp4Ma+xgOPToHPofmxCYk5QbqJy8+WY1pzExq2F4VsdO2lFuHypuQPvtF6K+hqNpSBaPMDOqj3zoe9mh1MVOGdxpMMxjuJk72HVqaJds7i6Oj3UiPlbQMwi3cmZgjnImzFLnvYXGwcM2f/woX9EzkoacZZNnELuKiAmpbcF25EgqvAIT/eQjw54+u0kHsLIIK5IM0Qj3v+3K3fe7wKyAfjzEJkoNf7SO0Fv7GFog5v6uy85k/s85m3QqlzEnXiO9RrRM40T0nCtcZJpqx0H6lskBiHqTe3NLoLFRWKnYhX9n0e4OrvIye+F8hQRM2VRg6i0a35Jgb4RsqRpLq/PcFgN5FLz9b+Up5dlQYDo5pU9tX/UBc4q3I3Udr1kblIZi25BlaxMJRJcZa5bde0qfeEMcgdnVC6ssRjhsFp4F9NHxL+C3BSHChppw==';const _IH='7078afca8ef63477bb9a588f93a2aa8b9b0de4ea06e296abf89299aca14ff12c';let _src;

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
