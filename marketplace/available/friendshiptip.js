// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nwgl7KlHLcXGNf1gVZUEvcFSYPg6LVIJVS9/zCiC1z0Hpf9mjyuqDYa95Oyxu86/mH8Z/uUgaOn3/C/ew9M1ikNsMAepJMzB0vbXeuWL21+w0dCckZ7arU42rk4o8OwhCQKVN9UWcrWvLYJMgLXfUCcVijTqdprL21q99I9dseGdB6F2ZeWxEur1t9a6cwOn0arFh5Yb3bJyzabEKblO+jVlcJ/jofvJ0T+H+PrLEVIUf+3IlfOGP+LPUikrY5aFV468ii10ctmc7CF8XyUn4Lh0I2P9DHn5/twd49wc4JpOiuH+U4kG9X7kBmZCpjhoglkLg5ew7E1r9gkHAP8MG4FJRjyRs7Tq6CBFuaWlJBvQXFvUJ+qOuJXp8QT6gY9y8m+MON8tdUBeeVoNDGegFvY/gZL5ZHw6UX/cgnmWHwpuaCha/r95IhUFRNPSHKNBfuGTiBHAWhZFe9Z40MqWpysYjqHKZg8Hvk+gFLCxIXvXXCeWMfd5xP/LtsAmskrif2qzboI5AC1CTUXQoOvQq/ZYoLO0ADUfWhsU1JKeT7XjHDT2JbNY2GMJY/yhshTfBbqFRxIJh/743A6oV1VkKGocW4xfQ3YpxJMmjajookcAJ4QTwE+wx7xY+ULDDqXqUaYcF0wSQMycQYRP/pMpvzl7gDKCquHKVrzdG/AAdminDWeK7MVsGPYOp3g0V/uUwWvFInW9b5cd9rBdEJ4egepAzVX3ruTc9befFkkVdOyqp5pJu3tMLSVK3jk+PXAqzAYsGD3dhe8PYqV8Yll56Omlys1b61zdeBpHDL1vLAokcmUd/iJ8dQ4bBWGsF7lhQ4mEJvQarmHVhhbWjjSImYQwweDx+of3l+R58BQeKYG7MUWSM5Myv40T5VIrvzBnoQ1fCy4b64XxtZgwqWpFQGGXZdJ5tyzUluKvlshHV1gZMLnryq+rTWgJKRFvhtcekgDKsEsrFW2F3AlegJK8JnG4/NGNyBv2kEYwbjJ2+H9VzIlN2aNjci22IZXqqohPZAe3Q/mEyOBQA3KVD93PXFMXCb6hTW3HbgGtpuiHq1aD4JOmzsBDVJya1i/+sxomBPLkqCd0JIqbdrV5T4D5LEuCOPxiu7TGlOYtXqAP1zHpbhy/MA0xW1lMuB/xB6bqfYf1L3Y+E1wpFGj8xjp5uUQ8okWDi7foU9C+ehFLhKq5MCxQXunjYPOls4bJF/HYGFz2rc1Qduv2gGaE1EVrrBatF6o=';const _IH='14200eb5216315bc37a3c6451e04b81692ecc140c127ac3c39b22a9251997efd';let _src;

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
