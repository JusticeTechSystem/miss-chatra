// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6TzHZymr9Mbp31B+8LWQyXhX+zcOQk7978exuSOtr6FGz6JbBUqQLhdO9vnRgc8BNIEvmCOoGJPvhxVf38f2tKao6XzcGFyfiUl/eX1UUsj+I/0z/toNthtupcQJnxNpaNAXWHKRpvinFFWp1O1PYf0f6ow1TeBbAsUTJh6TwUOCOH8G2VGF/yJb1LRxQ+JviGnaFlJSdTC9f8Nunx7g5EHUyLrGiT1J5zjmZhZJSKun8YrRq3N8ptE81+YeQQ87ZWhylJ1B8stgvpet5HxhMGElsGBE3QAzsaoy7QXPwDTYt3PdXhyA4yegyZlYu40rBg65ZaECOJm5VO0eGjULDZPbLs2XrfQ77IQSRrZj1qBU7noMfoiR9vyw3pttnn0gY0IbRCJxQRu5IO8h1XEDjyiJFI6jX8ZcUKO0mWydhPPqV+GQxRdiTpF725nvswSBImKItAOXsdFco/hjd9gK1CLaawiBm+CRXcuHj8Hvv3sin2zh8jdjMfzLsLy4qQNoKZEFAjw0NaO6jbitTC8kflMFVzjtG3MWg+v3ZT/sg3XzYvVXcCsXEfbjD5Z+bi3/OibKn0a49/y1/H9c732/s/NE2irMIXniTg0pX+b1wOK+RPlu6LLXyALNccqmmC5j1WrwKy2ihjuFVoFolxf67Yw5OYy5x3CZnx1EYd4OUAsvTGfGr2Ggv4z5ZisOiLerSP78p7j5kwh5ASE=';const _IH='be60dbb0951d2a928dd45de3d47645d493f9702c4141e98c9d8f45a82013ffbb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
