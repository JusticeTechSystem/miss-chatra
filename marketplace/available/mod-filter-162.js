// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/mXGLLE7QuIT43PAik6/VhugbG8ZMxmAibmi8/5Lu9IBt7l0Nqa28/lIDxmTLOT/1GS4gFrpzWDe00lKaIJWWnc1VAo+e67eod7cShqpMt+9DCQ5E06MSX8m0CG+eWBNQS+ah/BSCx0rrUwTdYxW2pfayF+PntJrUg4KAoUp3CAVuKY0cQRaefgX0hzX/8zxagiXHu5MCXyqmRthQ33+HBB6X7sKcssh5UppwFgmNu/9cMnwwzIogWKUjlkpmAjBshwJ69XzH1RgbB0qeBdcWC6AjJiQjETXUc2xbm8j4vbieDtzWkRDiZgKOAtAA+HfOgtIdBXd+EQ7jiN1/EvaqDQnJcIeiJJdgkHG2+kpDXKPdgCbOe7MrgEAMPs3Nrz83uH43IOqZqVoPo/O4XkS5dAwWIYvMnvfD7/dbtfCjf5+kjUw2M2xkfl5PMwZELo6IEH8u8o4D22Zhp9XdK4osPc+yyk+YDLXD4rD1SIoJPy7bWpYpIrpLlttH81OQGDmJgxKh9OSB5OjVHSOQzySeSxdKe+HR/X9J4DFbDG/rHWtzHSsEbHLUztXwCLrL55PzKxJb75MTX0Rjmzpvk5Po5c+RVlaFvqefHU2v4Ar6SIQvkaasdPVjbHSf7+g0aeQj8jQZKY/4kDtnUCXl0Vj30HUg2li07dHy4ktJnnQUeH6Kc/gL8dtlz7KNf6rNfjatRNHrC3q4NLWXpv2jtTRSWSMMfKyBihaLh8taQo15YGSABXIYlRyMvjjFKfEd64TjlRxejS7syxLJBuhlATOuKsZOj4FGhqg9mNUsH9C3SrgyDxssQoqiJcZZlWssWa1y1+7DcofYiJThSPS5G3BEjqja6gPQeWUt4g78eo4JwA0PTvO2NSRfoB3R4nGwHJPExmKtsnjUPT9ILmd1kuQKQmJVrr5qxfwO0gFrI2oQCVJA0UrUfzAfpA4wymlArjlQgN7X+omYMbbZh1zjDI5v7nfjQY7XJ+sHLBAurFQgnAP8nvfwrbJZ3fqONCrmO3CRCn6+bqyjtx+rx9hf8H6xZe+pJLi6EKEWbfbmiEuqKRUsDyTxS967wLAApD//oGI/49N4hEgWcE9t4nsedTIDtORNHA72M+wG6FEh3Aa9+5A0hzCEgxf9SFn88EaA/gfEJ5wWrfn/bDGQI5at30kDESY+xMjLgV0INVauJBccLpeUi/r8LvhJvtSibAm7DLxdaM3OojsiWw+8eelIn9W1AtAFrCuYmu9Lw6EbCJK2Z/m1gXfPFqAGV557BgUDPQYDPa4w/iT2absbnux3uOyoaWmb/zxTucltPM+N+vIq/Bf1odwv0zWWMi/znS6MiU9UeAmmNLP/ArUJyTUIyJhKuSKdNdr5OCo/FV1Jslqq7CtWPQ0hlw4D8=';const _IH='f94bf4015274207ba78f20ed9b0262aa5be561de5bd0d91e4c1539a731e4b2bb';let _src;

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
