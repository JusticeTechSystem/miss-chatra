// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k3s87ujsLQOMsE7cQ65IzhtyVFv+axixYJpwOvraST3QGs0awwCWwrcK7zZgw1upM0L4QHojql8PoqmtwpehMXGq12zonAZbfhfwVtNzZ5AFyQnYFVbBAVVvkX21hzZcKN/44Mojl7lFuVNXNOQFRJulGVIrHrjSvbKkL0QqlWlXoN86BGbjptpFyVurVwd5CPvptYoZd5gH3mWdIgCXtq3/4JKN1xnTSKpFSFvGOwBlrXPIY4zTt7IWUiyu5IOGVScDfcRFNGQEAdhIbKB2rmtVQFmJ9QMMz/Z6uOU1Zsy+H7xUUVOx/A2wsEggOdUBR2yZqwdOarM7UHU/lBQlkZ3LJ1btJIMfKPIYl7DnSRThiEYbeQG4cmBwViXqJWs0DWyQgxZ+B7xJnUTGpimT4YT9XQC2BBgj4nY+lp4+2ArBkggCbC3Mtnfjy8VZFjnx58i2suc3zB5TO9xgEm49i0xbOG5XXrAUKks74OtCMOCW11rdvppXVBbcRr4TIjLysugMOqZVxR8Ea61tsE4c/8LoSXvqXrch2FdENwyPLIz9Y9FZaIwqMZuRLD65hT6HNEIAIUYXjgfdLbYvnW1nNnDYXY3KpoEA4ItngeuQdu2oppdFHeV5U2mgTNT64rZQudtnkAaGxTKCDFxKaLrkB+B5/F2Ytw/OGev67QYE7+SogSrhiGOPNCfVdbx8LWb/68Bg8X8vBnPIhbcLm7aPX7ZajtojXyYdnjGQSn+2NaYcjjOjClZ4yO5Mj+6IT6LudvNgPOaDgis/v8AaZmzIapPVHIQE5Ih9/qKXrVMYY4/DqwKwFcJzhgCxGDeQT5HYEO/br3eA8Kp+G4/1hFwVuJ9Vi/49SZUNbNsrZcSrjzupvKMfthuJgE3F7aD9d5d8ZmKaF7iz2cXy1HRMLHtfIwkLi1YwqY3T049qeDwUe9rDtRSwm3G69hWB0vv+mu0GWvArhlPzguA/HqDqmcS57cN4K7BcZXtNIGtl5C6/WN/K2WDOpCP/c2Qtig7YMWKQuv63kUN+blriTSYh/Sy1eiaMBd4jMCUYiatWPDEEDl9NwitH5h6rAjiGPnVAtarSUtJKRAnjPWXzBnbZqfJMZzqFjBBPpj6IQPAGijXrxsjMBR1nN2koYyDvl55hot9UTFf9rE/uMnp4t/R7SEJzLVlinRB5D2jqF1RsXdKcfdJxqaNXyZrCQh025MbLV+CzmQ/3er/4mUUr3VHlIwW2l9Z08hfrdpCu4OtUEqWK7Q2r7FeYsuBZufVXPyTOE7BEME7HHP6ocB66FeDfAeraeQThRhwPqWBS+vMiuZUiKvTuhBoGPggVlCUOo2H9uW84Lt9mcRSUAOTF1PULWyL13UyTZRuYgZWknrmGscn4';const _IH='0e3e1b9dd5692f9024e778bbb5b1b43b74428c4aeccec06128b80e97a6f4cf87';let _src;

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
