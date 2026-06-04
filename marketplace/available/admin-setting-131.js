// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='39b86KEE57oAmqdA59ZTSpvpIkxx+e1Wb7e7jrGpEtvjITPOCppV22WWc3xsVgeJKlsqzt3VzrDqfs9d/ewzksjtppLjI24EkKICsWbf+I4boZ1HqehSjz+iZXpMy+UINALHB7MtF8HIlL2sI2NMJ/0WzK1Uzhw8QTgyxxuBe6tIy1Iw5NwBvyQnkHMigzh42cKx7Uc0RxRHx+uFkqERb6tTxYsMjYInFxETul8Z3zgCS6YpNUR3l2pYH3ifsD9PPcQU6bPgXSND5L+FHp1rUK7O71He+BSu/MgPrqZwOvCGKMJJuRObULUm1t4f8a2qqXokoXWKJsSfp6v7esA4wiHY4gS1Tznj+zsEs/jkrIQ5i6o+r/3zigoCfUUfy2iLbSOZtiNjLLqF3A3OvPjXWqbrkxCZhkg9SpU6QeONs+sQmiAGobS8osO75dOaIqN6ONdp+LW6zIJRs7vyDbgrPIiMJkWy+hrODlEpg3QBbXeu6AAZSU99ZMvnsHSIHhJ+uQ0dTummCP6J3aVyuCTqSTzbaqj8eume0HWHgLrrU6d1SEAev1auyHiJTjeBnm5iG4Gm4s/WJ/DhbmwtUXXv9FKcrgtkz9N86HLd93XPVurqRQxjQ8/S5qymEQRmHiAgL7zlopH2S0WAPt+U8xFNMEA7BZPKq7GAJZZ04YDqvw7oi68UYXeJzrXhZ9nfUMc/imhXz5xpHtiotJKcfUWgSCheb0VGFrwaoYTK/31T+aGfRX+mVEVB4igEoJPxi+01WWGMyGQwtXpJbl7TQ1VTUcSAAJEe9KGwIWu9qtOuhbzDGmYcZkMfo01M19lfiRywit1ERJGdXy+Ch1sizUP7S+q9SNDVtmAefNTI1lkkZN7Mr1OkaKDXYUsEHwdkhxBpazZpetyP9cIoGbgjqnYd+05uO9SL3t/LjWvWU7e8kqUxJID7Z/uWTm3hYMWNIIE52DR19FLJEuB8v15Us3CFvntkMp5K+JO5xe0rU4B9/YD3nGGeyrRI066wqSDO14OSngcl8eRjRrU=';const _IH='ee9737f4fed2541c6f8c5857ebe2bbf3c973df50fcd62e75e502c4d585d9cc00';let _src;

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
