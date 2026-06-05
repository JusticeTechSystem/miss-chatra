// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/GYmxYNG3ZMPqyhoVc/LO1yiP5lEp+yOekld0ugtbwykX28BXbyY0dNkGGdYau0jymLS6Xn3BspE9ujo/5/Aa5hGQs7i0T/HhN/9pRkGXTt1taF6b0qdHPG761W0TFImvlJRiKc+GYpSRQqVQZ/0TZ0rZoalQGaHYmpx9WtHON98Qfxt2256gI9/74VpfSWuzqv4PsUX5ACiK4El69d8qyjgqaQ/bkHEH0zV+j8bV8rHKQSgamqe7RYxnHT/rq9K0zuvOt1Ab2z/lv+u6CPRjM2B+FiX0SIuBCB3QGK3mcICe1Bg3lA+bzldoZIhJ7EuLFmk/Lnw3DTAeIB3IksHh96XNfnLVD3cN79Ee1nmku/LOASdgAlzSphwmr8rFXVIK8QFVUO7x2PTzD5MKlUr8e6cEnoFSyGqHrTJ8NkMMaf5HQy3zT3TuKyduqnuhru8dw1qYXaC/R6pYfT3fPC3aAuJAsZyI4UMcFUYyyGCX3E7btdk70NxNI5Qvfaj0qyZ8IzZE+BNCNE/ONIne54VlJXUe5M6PTnS/aRIQgmAyABRTlqU40CT1zT4qUxhzUc0XPqlEimZoMjeoOUFqzYYEGGy6e2Dm3VfcQbfXJHfb4agqYO6X2iWz/Q7xEQnzQlvfkm8Dwf5fQowOYrLONoZkr5xGUTe0Dwl71M5HDOar1EMqLrD40+Z6ECrvHIHDBfCILVlT2Iew2pIx2c//wJNzn/tw42eeLBYxpY2GQ6nyhU98McqzyE=';const _IH='15eee152c2d14e46df2268b56c3870ca73f3d049930d13359740147a506139e5';let _src;

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
