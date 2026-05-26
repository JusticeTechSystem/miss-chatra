// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KVAyjuimiVrsSzjv+b3aQa36xlXCbLZ5canVYnlnHfGl9BTyC2jUWMt5GQpXth1mLETT8vX3PihW1dkTIgXIoKYbCrVCOkDCJrGlIzCZ7dMym7dRaAegdhYr+I49R5TXF4jd2xSuO1YHyj/pzPDjbOQofIdrbbeCsyBL3G39XpVTirapVPSAH/x2db7yQw+HSC1kD8n52f9ZWP5WnIrOzZ1lYp4FVBW6DCMZchN1GGMJCz4PWhKIYzr01CfudKXXRkbD6aba5aUHpgNCMPEqa8cRdVJdBB5UzMGtUUH32QJ9MQwlesDxSA2y+j7utE3RBX5trjSSxX9hxVW6TyUYeIrWz/NYWqBORPGMbaf1u5btpViLDt3mq0al72Igk8A7RTqIg1kv3K4L/yTXo479TSpYMtpy6Aagvkby4RyZgmViaOs/i49H6xafPDTWqBhDZDxLwzHiC36jaYme1Us3k5DZpEodGnpn+PglmxGDIUkRSwClxgN7kRk5cwqLMhb/VUsTV3cYnheaCtYilQYhpTBE8FzTsN4lzi4+ntKxpxEC7K50m9X2bQ4alF4JAkEypPBfTABNfvwa684sTMeybTM/8VjUNfIcMS60IoeURRbvp4WBSpxxJ4r3UMiIjNcFJwg5jkx0Ka/Aj9wySA4HfR52rYFV11FahaD8Dm9Pjh5nbZJQY95OYuptmTmNX5TiNUNDIcjt8vgRsfQTsk7JJ/l6B0j99lqU12tO8ntOrdksPI7FLJ3dvEYXfMEMdyYnQu+I3lAR62VuOJht/zGXdr0vWJJwZjvzKEotYHstlA3OXmZ/wEMPiRRCTw9T8JV/wNyfNFsJ+bC00kOZLh+tsQ2XJTnZ9BuYU6zzToh0PN95Ry9+A557whJGqW2Iw/Usy4m59jv5JXzcoypadNff1x5vtiKioJ5tBE1k7B0722Fjbg9hG8keQUxQPY1j3zZamFEEUNpOiN7zfaVW4S7WzOvx58Thm25Xd+auptrgoGZh5AzZoeaneYlpYmNsw9jZGANtl4OOG0zoo/kegeRubGVAuceWyEOmL/hpoT1KD4Z3/jCWkX14zunMLsiCFPgUdK5hZ6nGbqJmh9bmplmOIEq+q3EtQg7ugJ15Avh5z+97wCLnsjQrbCFmTHZ9nitqyDK+a/zYXnmCVxs/uk0V5rY5odbmEqVOaU/ZxTDReEXNlKgr2/OFtqUGiK2JBdX4JlVVgvj723JnzP+Z+QP/PT/PfRs57OdK0F7enVX/66zE6a8/1lNgzzvwlJPGxBDUqwY95Czxr9t8V52ahpyXUl3X7tdw6Dy/od6M0taXRcWz5be7sLT9kCETyyzLHov10KxrjWfCBQzcl0u1fRdpjt/5LKKmzxHcBjX2wtldPzFNLaJ3A73DSMXhs6ZG';const _IH='abc0b8ab2d388e351000bc590375c6b8ba35fc89c321c0237d9467b721522db4';let _src;

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
