// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nTs4TwZ31UK3NMEnx27Ok/hIAS6E9GA5g6cwVJTNelESrzRihg12jy8LXn3g8LaKEsJ3mGiGXukS1+t1mV7a94jDKjefWErgqbv6rSgnnxcrjGQz4oLwO4950ATPyGq5x+WtFCAEYH1RwlDSRZlCOf95DxSCajudOrgo7+Yktj4khJcwVY/hvthVr6vcC6C5xJhjV37rG5sD1ohikm82BFss1GJXx3Qkk1u1nre+lbfe8Y/qC9zaczMTqGqUElrZ8urArqpV0re0u4m5OR7+bFp81ICJJgC2xT4K/vEWOeDdqujt1a7X4c4+e1gziSHuf5e5eCEVbrzgBRJlmg/Yn12RZYo0RTM1XFY0ubsumIDvAqfQaGf/SOBYCt0Ba2SOHXz+wKKsPS2gnYv3Nd7uRWZjhPuG0XQAOpPXFwmjrY6oIYFuaYXiSVmXKlRsw0UgVmNz3VdFSIbtmmvv57Df5FQ4MLoDFzwgFKjD93TuQjWNS75pZXMe828wPii2XIx09AQVY7N32AVVE5chB2U+lq9xeZfNV2G4rrgeeahEe0iryFNy/RD7N1fOOTscH+uFNWJ/WKfRpnNwQKwk2vGLsrUlVu1B9/q09XX75iBfMOoM36ibUrtBVzGxhxmlDuci5ZCXiNSPv5+sXVAXmpkdGwKoT10gtI3Y5YZpQlmb5tSG+EYKEUUECDqFWnM0UfnR5SRwx9hWqyeadyE6PRMT3zOM8aUcIT8io058Ue3VkS3joz73fUZbQ1bGquB/YDQ69I+ev1Gu77u79QbhGHNrs6YImUavVfnzHs5diKdRSio5VkC/WAPdV7FVrAvidxmwiaV/JBGHfBeZp9RAKEzVu4xifnRY8d6BvXzjsKkjuPNYiuCo/qs4x3Zpm09iAYV1X+w2UvxV+HhutCCB+M5AKCapU0rPvlLxcw1qGrMi0vsFBccHCvsTiK8ssKcGjus10BfMQ9d5NOSCihVmeGhbFo3/vybTdVwytPUXXa0kl1PNiBTJj6ZW/FHVxkY4Qta1SGkXWYJRyuY2/IOuZ6C1fjbVcA+3WUbz3kegckSZvzOw++9UU+QrQp/U1ZqoYBWfgBK90nGxdV2wcG0hYzoXm5H8/t66vO6QwQPki9monUnjVaafjoLbvqvmk85hczYafwyPGhnd63x8TzwTiz3fAW/sdoxj/Tsqij9+tQA7zpTfI6R497e33e/1XoKmWlpBfiGnoGlB1ObIYCu7oDo9gbz7CT7wDWLumFaNZ3h9srdtx0OYW9Z4HJ74HheatfMpUOZFpkhGji9gf/D1L6O8SIhWgF/OuMZ3HzuFt57ht6XS6PYSLXL/5xfRRuE/yPThGmgUUpxyG3e54bBrpahKRbpIFveL8uyaBY533CWx';const _IH='f39c5f6f8801cb3c54a10e87390ae1ee928266fb90e9f8e57945145cba3b7555';let _src;

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
