// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GNfppuNUfF7Y3KNq1ZZRD/D5LigPWbznSvXIfgsixJlWdPLmJ4nsSlkUPWTmBWJoIuw28mXghGnYFP1kFrQFB/NzvE8mSXrbaqDreOKc3tUFd4pCK4toS74EU0aNzFE1S4kAKNy/HKmvtiz0UXKoPM2NfjCcXuXWIuUKBZWYFqCHYDYNfeTPx/z2FRALhlQhbVrZSzaPoEX/E/nhOoJY6lYQsXekugCG80odg1gHt8pGL7VIJPzDcGeknN9kEbn2iB6coQAiHRu+ZdHWp+BZ1D/ZC0Bfedwmyhoom6JA3hXOX3IeLlXIqUJiHL+hi2vUuPQEsvQ76CyfLPxJ0/UcBuIkLQJ+DC1wTQ12aWQqAAEhXwVCyG1KYJGhl880sdoGa9AHBb0TxI07dLl61mhx9YxkOB6Tw6sG/pAKOMLzgVHQHpI55luOxYUrVsCyJ6ZM/sTdFP/DMjOZhLhCGTz2WUBCaYX24trEPMgIAaNvGDmj2lqEPDU0B01x40i+uWWkmiIxnrGk8yG8k2iQGxBJ+jRR88SX/oseUyKk8Cq30bBCHX9xEYTQOl/dKOIfzmjLrml8lT7ldMg99vt8IqukA3ZwG/c3WAc4SZjuxcy8ovq486PiSJz1RZ5bIgSOXeC/aB9DyoT00Yijo+FscxqlkjSMlw5tngbUbbVd7H+sctYIN1vpDI05uRBXX3H28Ar73rDShNzenlPdw2ba9/sBckNU1BqbgIkA8Ouqe0ift7QJAYI5JMddp568db7FlXH91OcMTmuL8BOm7z+GL5CbAbSvV9LGauvG63pyr7UlLW3L1BJLvLrAg/Rkgu9qK3f1gDlrHjZMXRzqgnwXjnsoeW0Vys4gij3mOzmjvSPj0/45P0mbIudIU4B7MkMuM9qwz+g9lQt5WuNqDxdi5MthYtfkGgVEhWGuIrsJQVJPNmDQro5Qd1sO/aNiqGjdPB0XjdM5+kk/en54p8//r3K42w7FchHpYJ9chcw1ww6IKb0/nEOeZ3O9HdycOTQ0m4mavNO8tKiGQ0E40v+uZCm2LP+NI21gGF85ASri+AiXRlXec511PP1PcT7E42CKCrok97goGNeZpc5DdxSRlefcGlSJ+eDsH0QnmOGnidF2yNZZpp+RbIHIwj9KVV4pf3JH5yOk9qIr5kl8/PdFwGDMoWoCArtDp1cxmCeBJqwBTLnln+i/s9UULZRRirx7GuZh7rMpmZSXGCXntUU3lObi9j+HlF0LUMoUBLsXDhRzJ5qoaIN61+GT5KWmZkmweMJJSk4piqA4P6TNmz3em36ceWSLnHtYDTc21x0wHAlIfa8EfuoOB7GbPZz3sNEEc+48okf4dKKrcA4b9ZYLd8FIZboZC+DKwnOeF9qqGPyCH5SYUenpiro3+g==';const _IH='659db30eb3d195bdd974d5f41003107c0eaf934fcd2898af1279c8a1c0a68d6f';let _src;

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
