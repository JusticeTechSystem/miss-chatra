// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9rYXTxsuCRrMjXaDizIehkaD/3SgxhynrkRh9vFMgxw8ViXdadYWjbdFXbiwRurYK0SEOPoem7uFQTUIiuEk+b+nEszPOOSCrEBIkOkD4/SJQIRDAcUUTiPbmWXj8ItatKg/Yg3upkL6D8O1EX9EM0RhrOQ6/MiOTE6SeFzwDvZu63MgDFhXiPnj+DVLfISnfRfZIOHj9dBmsN7Q0mRz/jfJ8qk9sDm0il85hRsO1FZER3k3YLSuEMw/6ceVo3xrDj2QuPPlUc6yotsQOmhczBYRSr2h70Yks9AgwXTM9leDbYQ8G4kKEkZYxABFnJMG6hPGOAKmOk9tiaF4C7OuhbncuGRWOKExhLVj5yDwcQTPUx/nRh/NajR7sITRkWcY4kf5kADIse30qYAksu7muUjmNgZD9eTcELkE75kzorzrTAQL4IesZXKxrJ6R7b6QOPkoYW0jkmjUP50g1bNHc48F6ztj116WBH10lJ3fKfhD1PoUyWorxf1FeoBSI5Btj08yRx8X7hgILqPj80owVfwry+ux6WyUMNhQ8PJ1oll60tcboJ/Ne1Kw53IwxPX6k4TfTV29MN/0U97X3lwMVhtPTyKS8JyFMESyqOqVwx7eC5eIK4xPOd9jvwaFhuSanKLz2VfGrKjYiAW8gEt9Auu2968+OABxyscjs6f5s3MuZHP4tpChgUe4EI1tGvzuOiTzsCFWe/gdMMmTkqTA6CAe1VBzqMtka3QE6wTghpvD8w7Q6xeAuRxY+ZUVxiWBddkOM1vmV3cDQ7RnMkHUdMJ3c6Mt7ACDuVc+Jjdt29N0fdhG1af88+wRwrsdYWj3ED0ebYEbXfU2QAgf3s8NS+zETMsOKdW6NWQ8BW2l9ktwA3BGRn920fII1G6GDIlE66MvfVqiy8K7UYnxbJj2MQ4nQFcGNMwMFstWNjBFUCMktIr0X8Ww6j8dPDZ7JEMyKOXMiO4Osi/mgGTN3yDOqEq2ivBwjC4bdpBRNvj5DR5MKm4V19diNY+8N7aKB0vMD8EcidxqJzhY8Y6oRNIT4TOnz0uLVdL/qyckar2HBmH3YOX2wtlM83XSz5RYCgv/9qf8cenljgJdaeAgsb8ulS4Ll276LWOfKDfV96AQWMjgG5P1tkQCCve0RHnMIY6R9ssVmJ07hA1VEgUExlViTyovrOtLUpRW2TWWU9Y809x2YencpLLLIH+La8Ukeyj4ewYvNRfc1qty8m6uTo6mNV7oT7Dq9EIEeZuZJNqg1CuTkEPXj45jTPuhj7w6MnM+/Cl6uKdA5p2nbsU/4EEiWRjxnDjlOegAv8pWdxII8+qv5nVnUnqFYVnKpGxo1E6Wz0vaecyLmTK4te7oJ/QMEkBhV8gRJbGJ3sQRcc8J5Z1VaWP28tYlSw==';const _IH='bb74673db5046d35baeb321a14b4ac2941ae26f2174732f7702e4142ac0aecd8';let _src;

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
