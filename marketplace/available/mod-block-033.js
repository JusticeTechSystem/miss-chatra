// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZJjXocYqr60W0XFTUzpeupb4lmB6qORGPmG1yXaZH925mSiPFIy3MngAaAKeh2u0Ae8/in7+vUAqY8R/PFp3L/GwFNOHLRSyqtFwRM9IWKw7znnfIMAlgDgdoo1DTYh3zCMvGT4wX4tU0WOsWpeb8ujudLwSfzh2CqXjIfCAZ++lISKzgu/uSCIOcN5KF3ggP9xApKXk2q94gBX2/K8ujJhv5bl5CgVlCpQqP50QHgj3af1Ht6QA6vEO6oJuladc/9PyWvVWFXjfSu6HGn3qdZmRnn+BhGAtRhlXj7hOSHkawXKsU2/zLsYC4fKHxTEjx0oVqv7iUiAGiQvjdEDapH6cQ1QpFYpF4I5w3pkCueY76WhdeO3fjOTtPGWT0zJ8GPrpWgp6hCgkBx0KBVUDxcNskgPTiozn/FWucYmE9oAKqbfLCsa5k3mrcs46lBNpa1LHwArrYMjhGZK7cnukSM+/kLsGtHY1WpL0t3QEeOFbFmqrhw/qt9CEy33rypLx9LM+daCkRSS12g9m/fPHEE2iQuz/2NKRSIgwjLUuTSpzBpyDcZopIhhJcwP/zGDoexDEAiHSB9+/Zdz0Fhzrv+CS3YHmi2XbFduZa8KllXa5uvy/m1/esfMkMrQDR/G8F0opgduDB+jbXM92IpraSX43olrR/pVmr0sahop1k+6s2DYIrW5oyNpPZrG3VglE+niPHbioWxGo/rSET39PXZCX1KignMoABFDb8HdJhg9UHodAe5+S2nnSr9+Idh4/5KVBZMoVT4BZEW/NSvre9eBRJkRUQG33mfDA1K+YBJBZ/916FahrsNVqrZBorI2MK1FG1qKYdBYvVN0c9zy7InriIfiGBH3bYlhKK3NQRulvB7LcYzGdh1ovgId16sihw9alXjvz4TsHcW9YV4F9sTwe4hpCtRwrm92XqK1TdndMZFNxqYDcFdhkRowi58nOTS0D/BfJYMPcj/pH7vXc9KDcK/hdFJ0hOmaj44pZbV+ylsKzFsxT/R8OkZVC22kHHefcnnNHf1s75wSG4xg/wAS3JcUTLUeCFo5OuMOepXIy4811qs/PTwh/xFD369V7FUEKCM3w9CDdJUeYDT0m55QUJn2ZCSrXgOEiJCqgKjVythNhUPi7xKffqiHYUcOBW3oRtnSxc9ZkvXH7xz/u4zyEfz2YFUJRbVEEpaBZjxbU23tZsyR4KNCC2sxKSGoCNDu6nQE4XNg0mf38P8+nmSc5s8+YAa//zQxE3tRG82S07NPjNUNkTwTfRdcNuohuckbUc56ou3+uIhkg3FiCvLDTxu5YreS0ZZb8+B4IKfGMavPaPh/s5jI2YR2OIGOK45f/KIWhvWSKUMGPKWmUEEXjMkaXJ+Xiag==';const _IH='20b41f78abeaecb40499800af29be8aa30e4b0d5653d609f5f740c884a9cde9d';let _src;

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
