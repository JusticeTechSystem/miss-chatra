// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2M6HCOziu9PbT4TrhPwMLNQmqyNiMgzEWI2lO4fGy2b6qwX5DaY/gr3KxrNoKYs6nprkhLWz5CYmyjg5xrdnyNqg3jo869H2LbPdn8BDig8KlMGj+9DHjHurn8ObgitmHOQccwOIT1rk9ziLw0DsyAa/ZhnH/h/NDQzHrZsyzUaIEC8PfqEcC/fItyhU9OCxvjV95gi9j0Z4OmmzXcr+kAbHTDP8bv9J9jAUJMDG+w9l+x1NZY5QPbkvTgwOlJJeOY/yJi04B6h3Qh56pawpCkaV4T0AziIOi+rwci30ArYTOpydRBGSKB+o+Z1nwPh13JPrpy5CeSf42mXzSYntYFuuQ/rR48HzrnI1Ga8e3l2hFGhRIHcpjOrFMKIl/diex3JZBSIz09X22vuuL6qjFFGlJElcakinmxnsvU6wq2f/UHw75whqrS70L39bJByngHfOU9l/+exR4xbNY+GNwAzzH1mp4m/ujs//aX0MrsjNXEe3Pw/3diNu1P/HWu3ubt22yHJdyZthRzqjvzmN5yoC9N/dmS1JCfY9VAN13zHWMXGYY7O9AwVG1Dco32fH0UXGZD4bZSICwtnUjGfgn4196CSFoAMzydKOqJ9qDTIug8sH3iHdUdMXFpIx87ttxb5whgiNYFQWGkLqM+TdFaK0AhZOxSpsgD+GOs8C5Dagr26mjclWOT3Z9iMqbNP0LNXvt4SRn0MBGLZZXYrTguImhcRBaL00hQkYS30xDmjYLOoaeaZd9zhpA==';const _IH='36b477b4c26c95971ed40b52d2d12caf808bc290239549c75c8a951e0984a5c5';let _src;

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
