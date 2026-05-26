// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8nE56TL1Q8DqIY9OFMmXBsW10smm6KF2N19kQrAhuGu8FfQtq24KjyxRNtoLdo4lF3agQVWo2FcS5oq9CPkDSKEuZqw3Z/LLfBotx8PpDOx+rQ85Z2uNzvHRyD2jQCYQRVQa+3yAMbhhFYDWjHWiMjXR8wI5h1KHYy647Dl0WnuWGGdGrWW1Wz9noxrblX4AVaFUOs2Dp1wPquuVZXX9Bq2CJ0+W1Y5g2cmZsYZjCAfXJ/xR/tZCusoNxR3UOMyu55Wq6o8BXpCeJpWFvfOcmrTw4tv6glztkrgdcTTcD6eem+ELxezsKCppG5XIypzCue0l7Rh+eDmkL4TD5UNDEs+nsIWyMfltnrD8sWZlGC6nCHs7tDmoQ+MiHqoeMhm02fhJveWAzB36+9wZWGNeheqLCP3c6YtWOPFl+XKxVkymkqS70VzjbWJG2obYNquLzvUVLqRKAa3O9ZDroJUfygrwP8GtPRbf51mb2lPrQhoiVlgCPRzW0Q2gWkvM1kJlarIjARIG6yf1B0zhKss5x5r9cjLHw7fcqaZcsAySu8S4FnnB+RqGyHYSOIAIUdWJeayAswI=';const _IH='c3c2a9394b17801713c1988d2ec3d2373053cc476a8334844c3cc5c5b2f8f809';let _src;

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
