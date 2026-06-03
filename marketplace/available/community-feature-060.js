// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1AtetnPgsrJ7vebRQTiU0c9MtHtikJRq2DY95adWJKcKxDxUAJz0NcrGZ7oBUELYkY5lYPGCzdbuNPXUo4qysFZWXWpaEHFLP6rZtDKwQs0WKpVC3e4UfkmVJddZ8lF8cxYQ+2EdvtaxSq2T7cD+ErHI1Hmb295338rd+w+Ahxl9R7GMdxzXj1Fb2t/Nw8Ux/SihdQEB1vkbHcb1uvduW3s4NsnslFi1+LBLi8JwbKaEdSeNQnBkg9gaL6RSgQ5jk1PcFUT/G4jeRVxFydOJlGoignAFOgLaFL7EfFIHo0BRP+Zg52rri3UASbmK9S9BqZnI8P3zw3yRgC1K9+HhdMkJQSoyoCvHonZ07Y/Xeba4PQpN4YPPQcpbzcPq7B8RZ8W2hTWYEkOcQztt/rCzPAwXxRtxi6gonMZl5MzS/9rybqXO8rCmWlHelV3hrnX9iCnywkB7oS486xtJNXVtXzO4aZhZZSURdKMpsvUWRgXlSgwIbu9fEwx7nNT49ff3sE1shnIglnJf+8z1CjtOsoivv9vLGEzI6yUh9o9XmtqXLXRgP3SEpefbv5Y+9Pit9Rqr1nnJHes8aW4WpOh+yN8rD9j62aEUcB6K6zVNr00m4Y1dZNkebWyp0S7/sviG5GUrHohy4oMXLAQh9fhaKnHiTEX0ZMuGoOcYpPg8AUEJfOtjqkBNz2rP6oMcmhPwEaSQlZxyMQntXI2Y2NIwgUk3plQ+9jlwQxozLCuLSBAnD4pt3qU=';const _IH='c70fb9427adede4c5e7a7890c89594392898118d2e88db27cb73318c534923f3';let _src;

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
