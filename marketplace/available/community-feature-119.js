// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lx89+Zmz6UBSOhZAqy48mNMRDnUqYvjwbOmU9R+pdwZJM4R6VZCVpJE8K1d+RyuLZqbXWNiLeDxT7xw48B3kY5MMyut95DY4K+ps2Yp6c425brfRUezdvkEmQZ29G6Rsa7I8r2mZxCtMNgy6Lh9S8bsmz2yi0SyrSH/oC91cu1T+mH0QuVIlOBsJssYB5YyD+gHFkSQZQE8Bn+SfDSmRm+Flk+1veCEGdUoH7e7qKmvoMKyHvuzznnMUObeW75So0O/u6JPlWL+eSHv1U9h1if7DpWHD09XykX9Ly0rtjcfa8gYD72Up4v4WvdyiXNyZUfsR/LuzwMZ1iuxJxT0Fh7smYwPXEGnfDZIavWXLa3nGCj5bdS6zPdNQ+UwD8j1+3KrpgzgYo+FLrzTUJpbo+4rL7AWGESn6YisZHyqJG/q4mz3vqQj3a99vPVLzvT2c6cad5UZU4ad+9oXphoED5gfa5GKRjmS+1GB3JW327SyCt29jAk+XdaGIp3MfjSmrkyyqFiS2uznQjLeDmTi61L9FrKdDZem24+sSVkSdCPhBSOcwCNp83QRWwlprWpw0E7Fy7CyCWARonfyim377F5HekKJwE462Krj43xxn9aSUgP9IO4w5HY2mnzYeA77pA8JogOsUPuaHyHEc1oDsv8sgpnE+pJfCWRXOqysZVqORuFXnTVh8CGjBrwvLTMNu+hXLct2j8DxwdIZHCfFyBh+S1KoRlrHaHeWEhDO9ysy7xFjfHzw=';const _IH='9d1f7bb97d509c0255064ac0871ea36dd90d501fa9409561d8a6ebfe50b25e04';let _src;

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
