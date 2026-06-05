// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ju8PlSt0LTA83GkLfljmcwlr5NEqTw1UDZEI8PL8iqzZt9oDYa1n3pHOFdNhVGAHWXut/5RUD7Zi6bCU5bj2BehJxW58M55qlzx/pdpNPLHlPgxPD4SBZIAIiGN31HGQU20Ud3JjV/PBzLiido/jcAsip9B2FgqiKNEVwUf+fehoi9Dhslu6a+O/29FQBHmF+h211QNXhHuHZjINd3l0VunZENLYy3IoqA0ZVXGO2N9GndGCcQSFXYjtTCdhSV/2yQYzL3oD5iDdDIutgwq1w8LyF5Dvqllbu848azuwCrqK52M1AFP+kb8Y9YV5Hb1lujiYJTjYuesioY/GAYQ0mlXqhIViRZnSXsINRr9cDmHlcy21GCjqpDm0wry4N+11STUPo4wB6EgOKgCDuaJ03chrrpSA8TrqKRKDXQ3nFuv8zXi/QJfL9GmlXC6Rzo54tNIPvM+d5F2oSdVaRQQu3Iqh7UKVC14lUTosGx5cyAn8u5H44uDBL0Wb79L8seOvJi4y7kH21Eza6Rne7BcL7dptNe1NKL/QWRNjsWXym0jzRHT8xN7mz/MBThq9tidQrOxjfuxTj3HC7KoVwTKYn+hVuCfScnqrQQuOPAbOVJdv+IznQYU8o5vPIB8rwCV5bDzcajv7hmii7PzxnJQbvrWrQQB7YpbSYCP3TfRmFWMqUrAfkAWGiDR9ndjtLxMJ72dS9I9ke8XkcJLLgR2xyoE4qLe+GFLSJripz6cxGCQfs8JnGkNddzgRkuDMfqqi8xGULPYNvJtUd7SlPBRF5UNWLBRGLgK+fOjGeUFT+rT8O1sZgunMVZqg7DlzisbhhL5xdCVyfqSJ7PtKNJlYUzQYOsRR+E4g2MwonEllmScMeQQTpH9HNAMmmc0SOLC8i0oG5LTMtuMz/GUGAMPGZZcpuLeBQ9LdwMtMkUAbT2EDIC2gP2vVrcsQLymyRvHZXohYK8msF2nkvhWt6bW9qwvIRxqBfxHgm3/YodIqP8fs+od8LHEqCOdWX9xF+R/wG8ZOzXq79PVGbno/i48dT4dQ7UWdCzTehLLHE4jnuQbZvg==';const _IH='55cc1a6d378c2e776c9f8962d614f26ce92632a6ce49555383d0e338191297fc';let _src;

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
