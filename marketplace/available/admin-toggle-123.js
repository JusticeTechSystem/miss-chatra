// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2guxPdsYprSg4hD0uMKIc+RoH4jexJeIGciATJaDOQDQ8aZ65H1nu1n66fFOYGfGUH5huyU9LP+bGc+JX1syJi3EqjxGib7u376BXRNTe6hDT+ghCR3zOTWLE1UkgAgHpzf1Jx2UL+3+jRdMpLd4XNKdDJYKUeuAMzrMjQ42mRUqCCP8YaA/K4551vZHD1rNP4v+hkSt9yZxNbAg5mDEkTNp5H5w8nkPgR5TG/EQPA8NJ6/3+LMltpJ5SC9hzURnQfSqBu8OvZzPE8Uzs6ehJOUBlTPiD9DvFHwA1AQdf1wSU/h4GTqHLMhHTQGfqYvtPuReoERfn3QVpXqBY916n4CYk116Xna/abIsut6aPhlmCcP4E3yD46Ntvmoruht9SkyBF0lCjufSkf0TQWkwOKfO0G2Q00jczUTtiFAeRV7txyEmbZUMy3mIIuTXLeOVz3FdMhG+lxwtQCJ9YlO5hMSQzo6wr5TGfWGGOXlgMjuWbuj1/0PiQPS2h2toGf52lu1CtUF8hSqbHW5c2d1pJdOTzk7zLI3xEExSBk4nW5Yi4geqdG8xZtg3PNWPYcf97giSwtYY890ArH0P3Z7toXyvs4ptHT4oaopTxKaVpjPAob3ktnF8M728iS/98b4Vg5EGYrmSyO3jEwt7RZp7tyhkMmE5Kb9xW2ymTS18HQhXBAVcAz2ppvqX/NMnIPEuiffbfmBV8+oJv3CebaQt5vEHPa7Pvh1b+EzgBnF3JXYUBUFiWaIXrHV2uTpf7vPVm9LmUaQdmAyU7W1XULayY9uZn7zYx9keTUaKIaXPafMFgo9PEBF2oiDB9qif8peUw9RJQXcAMKOVQKpshr89FPgwp+baldcBeoh/UoyjUlUslwBnFMv7MGbtbUHAwYKBVWvrWjIVkGUf74lK55mZ/ThygveXi+KL6s+vExv9lJapB0I4ydLagA5lCn3fgolAUgzmvoERx7ghYczUOn/KxoYiIOxR+6+xbRSwqrkmw9GE/ErTro28rATtO9aaJmAwDQ==';const _IH='e997bd059a33729faf3a722959ab4ebde7fb047b90e1069b76cecec9fe6d58ce';let _src;

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
