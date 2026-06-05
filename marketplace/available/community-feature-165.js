// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JUTL5eeZngiQN67ghxhJTNSPGPz+pkFcvSj7G+Ng7UCS9azVJEBVMr0vewwqyfrcGOVwZ8kDV3VWjFXbA+BQCsJQlV6Y1VwdN09G4KLfqQXN6J3dr8qbXMcAwY1jfbRlFEGVb2Wn7zCGimse0m4gS5eUXoWVvhVJJcc1L6nj6gSFR2dnsi/lLkJyrVtlrOFdHerMNRBT/jbkJcIQCfBcdw4ZTIMOf3luHW9/+vPti+peS4wUosaUpJLtIp06DgPbkXdrXbfBClSBCgWsXN+OuayCaSs07QhMxHEX9VFvJlRz6iwN3tSMNnURYERGF6StmwMcs6V7eQl/NXXQ+QyR/xsSWRL9t5b8feqAAr9/jqOQwPzpNAVdJKPAvP9isRPv1VaHmZ8FEaCt8O8jaub2fW0WgbRAE+6vUxhcwlF+IU2+lgVQgjikrclD0ukVIpQLToTUF4ih/dO+MBa1IFcQktEUYQlQ3HUJE97Ao0bTWPOJ7tW6w42jjrq+6DfatLsSGa1SyyJkxlHBfwwyodspnzQNBpj0rPGbEaxgIw5Y2KoiuFPxYZVgEUgo7JZAI9RuKu9Java23jhRXPfUuo/+ZOzy10eZ64m+xt1ZpDMD4PWk3ELq2d5AzOnYARim38CxgOCRyTsIjJH/8PdYkUdww8OBRrLwBbQUWhD0ncbDRaGcBvj6syKGDahhuwxZlvCEUa/hYfPPn7ux9MuwrxnYLuud3Xk7n0q9rq8ZRgi4yyAxepQ74EvjN5J2';const _IH='f9b372c988647e484f58aa0e1afdf520bc3ba2420132769b1d77059f6cf283b8';let _src;

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
