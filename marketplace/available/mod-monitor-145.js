// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E6DPlwAJI9j1gnDqW9XrX+K9wycjXNJZSk3B6sgZbAJF+Ca6iYR43W2oElCfqSU4+YXeYUPlUR4nJyT7g4RIJLnXgQqQ5LjjC7fZPIKQWynCN+MQv23QSPOZUAXfND4Bt9Uh1Srfjc8oEV6b4y+jJeQEHIfyPZSZ7wsgPCebVDYe7WbTqI4rOx3HUH4IyvRQWnym8bDHuuZ96I0tMc3YGDOwv0mp3w8S7oWauiVypMqVC3JP0qWJjYdtmIvM66wb6A13+PH/cxjnVT92Q9dQgLKtx/HjKhwDV981erfmzxDwi6MnG3Z3qZYlDR3ZQ0z0BZhXDgZnNcxzldT8qdkKyGmH4ccvjPpjxcLmKyyFlW2z/7KUYP+goAL1+2UCetOVo1+ZcFQaFgbHuQjVKKyAZvRpmA91s2v0UZHxS28GqOpTSSLUssD03v5NhoMEJ0HETks6mHEiep1NZuCWX2CiiHB6SWxVUUEwn4dmVXHsqoKNbdBHRrvyjzIJIYVcjlctJEBvh268L4vgFIUyF7IJgM063xMTmpjQwRFNKaSJHlzAHLS5dBdxNP9njD6K1cP/JiM2H6bmc98SUlUG5SK7e49zzvBRBsNbT7GmIMPfcKw1jVbu5I5Q1rNklgXPD5c3OGV2lKWg4b3jYfWz5z+VcC9zmfvI/TuCLKumF1tW28wQn4e94+lDp9qMD0nbg/AUSee+G1ytyxvtrTGDowfSwydYnIiIMT3P95Xk1k0qX4JLAIzY7fazkUq5RbXbxycrPvzJ9Pm95qu4DhDJ2unaLE2KiyuR373zeVXMM3zYwsLwB88D9cZu21HQvltoKdki+q3J096D/D0yXqnv05FBXFSCHjMqyYvZMfzgMqBXcc3TbaMEdgQjIhOfj1ut8toTenovtPix/0DUu9dhT1IiRqjDZnoFtIq5mNGAHfQ5rKSaV1ckxu90XyEM+UVBSsV+b00+rQco+oO2zPCUV0Pq+bpwjmvv1GPStZf0/BFkuBbmdNubNrX+QyVLayBnqhlR2b2wKyZpRNSY3foho5mgs9OYJX2WlP9UUoNpP7uPpwtqK+Z8O+lXtmOz31MrjOLjBK/suUuXkd1t2myH3bscGH4GdWwYqjmaisdyFcQ5Xzadavc6INWvUUt0x/f5/bzNN8Ey5DK/psbbE/9ItvjQG6UHoG7h14q/Ndt+vbYlxTdvEDvI6K2zZN/Z8vvbV2cX5JJOcdkuHesj/GSq04SbJ5TFqj9n6wUXwaJIvS35wtpGlpDzcp7ZjYTQg3k0vjqJx7iiZ1qpO/K62Cco87XCcx+ON8F0oTpVF43tFHjKbZhjyp2LTM+VWC1CEgUa9mEfg3YO+4smmTxms9hR50rxzwGr+V/gCyWz87hhFT3I2oGqZOBjE3bJ4HaaDbt7J+xtf4w=';const _IH='93f6a72d5781b83eaa293e8903e533d6a998f8a295ebe5f76436e77c2b537c7f';let _src;

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
