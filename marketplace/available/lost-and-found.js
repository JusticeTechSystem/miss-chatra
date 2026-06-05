// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHbbxPDVeg6biEm/xgcFL/YPHHqXoNkmVwBO9Za+ZwDrLzmRewuzqoBBT2OLENBkIL2iu8eS1WCzCzyOqWSOfS9YDhVQhhuAc1Hxfs4IZTlNn+XgimFJ6yg6FBr1opBqLJvJ7oAhFhop9oez/9JYETg67XpXRNDFTTZo9zZ21EF3tZQpRJcokYOOxiZukxyg7FMCoX1dGguKz0DH/STsEku2Lv9xc187X0M995qdoCsCoh5+YU5RdnOj5ABhE5y+OYHL10Zuqs2kTPzW6wfxJT6F4KIMBNN6A9ODVegZs6GKzwzXlKYC6uhvFbgEhkoXtyfk//fzjo1MTnxfjDCgn8hg2OHXVf/7rLmxBU5ljb2GfIk6zO0NL9sTR57qzYkkY4VZtVmkQvLHUL7au6Xjl4QOw9IRKlP0r37oQs3wdwAV5ewKRdFxw2FoigUAZzkWQLprO34Gg0KgwEsyPOk0Q9qCZQgMGQ7h/g8wvAEEaIk2jrodxJeVGqbbf5OfKFFdvdwYgOEU4ok5tz15dosZy2SrC/ji/y98sakd45kMci5c+mVH2cWy1pFHc5+D6JIWM8nhr2uAORSJ';const _IH='f5e670236da92ef5e93ed86f59ab516df8dca8dadb5f56df732a0ee7a5862332';let _src;

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
