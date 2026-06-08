// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0DFBjOFxBWWIqfCe5x0gDxRHipQayEBWy1cfVbwEtZ1VZSfe9ZYQwK6eif/2veKSiGx/UG3MjpUHKSacuvajvxmZFppdDQgr8P+AjBaaCQXb6/OrL7pGxbwdh2uCkfn8AsSJOQoyWrDW4reqqHX+ZBQunoIjD45vnKEu945Jz973sx9OAWzTtxP0+EKDS0azkbRVR44Gom4CrhTtf9Z9UjBrMPrLwMK00Sw11yLEY6EjpQHPOpKn1jVdsLHkFI1kF3fD5Ne1MfPwuC2KC7WiTr7H0bnvdJl2ZQw6vD5BsxMFDF6uz0gzMSp0judVzfxLA7bBH6PTfTLBJnYXqSXxnyKEm1GEhRlu0DgDL+1FdgutQZYEHBB8ihHFcBp8slNhySmoXd5yH29OT1O1foQrE+gB9y18Q5w7P37rPb5S1NRBrfNelvPikP6ecKg0IkNrZEkEqTgbP1wFvUzmsMUkJgZ2h2bn/JkdgColRd3qR+U2rmMM4RZ3e1zFchSx94/3vQB0psz0+TsKYt/nvrwY0Fxrgx1NjtcbHXWJJC4Jmdlz/D9LCHLOQ46GF/xaVc1fmTkhwqx7WZFcfhbkJtLhYNmaGSNxBGdmy4z+MH23n2mqnAKXeRo9744aUWVzUnv2DILtEAD1SpsNpyJ5ZH9Qe5xshc1d+lYSsMbboINMfQMLNzH8KiCfoUo0dswjj1D7nRXvYDnBMc+Cwo+X+++GaQqB+eyFWzMobYfKwSJzZxpDiXFQcMO5lkgBIVTWWWpQZ0DfVqJr7hmIXIdOSBtzpquEqV0rkr0ZON6TKxJv17sKaDxDjaiPIz9nFRi1i5R1PsSoR+qaxky/81W92/vpxpCcbkKKOmUiY9M91QIkAw6c9snunYI5lDNWDhrwXq/4O/IE0QAzBNuzPPUcbEe/rIHHvVW0jCE6dhCKgEQfY9KxXpY3gvg2lXxArhXKxLgg43UZWESaynVq8dFeV/RLSDfP8D+BZCduLAa5LA7ULj9rhmZb3riNIfg7YVJw69/47A==';const _IH='d9227278975648caacac00ab1a9aa65758b6169b30c526087e0c671576d3aa04';let _src;

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
