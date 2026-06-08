// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vlPlQsJRO1vZDj3L1bbhR3JBOuP+pue8CWbdrwfhYBAIASXZNZhlbHBKrGrBPPbs+IvQ1h+BaPf1JYnDBDf2n5I5v8vUFBlEf+vuO8IV8j22oDmLW8qJkBR57uIwRgyJ1WupiBTn1KLxWXkPbwNRCO/jfgX6NAwLMHx3CbjWsbHAzWb8Eegum5wqqApkQW4uyw4TUWpDI9lQHOnJfyq5rClAOqzWDTOoSxW4QLHfR97q/ZT58/AOQ5cn+Ci5zGyqrJc8VONLRLll1n//6tj9a7UA2ZYst9iwqFVvTzMCtBSa6qaXoY8LK+G0/BJrSB7fYx3DeachztEnOKxEcyxI2c/cLeemNTeT9Gh0hri/NSvOvsoCvuC5k2X1PtvccRkT3BofK9Abq5pJBknQDetLjse5DmKiAm6R7dFvlx7f7KD9T1+ET6+wlMdodofr5I4KInCbvvgjNv1YzVzIDlRF1zmYLAugJxEoQ3Ka7i4PEHg1nEDfhkQOPX+KgLz9x2Vcba/JVNbmY+DT/HDsigb+5DuZDWv2nn/cIqnrjhv4ES6N4D0pIO7dBDgNlyKNbh9Ip/Wjrx1/x/G+kaRxIsHSb4HBuPeFnKrmkzi2b7g8wKnbZTmF30PMTa7x3LzDcF35JpJ12DG1usLz5z7KiiEO67rVraOqIK6G2lFR6Au0IAGly0y6FF7+8vCxEw23+GParu04aQnk4Op2cI2wGJL1mOW08LPfX6td7mhkltz4nU04PfgwT4FPDWOEAZfXd6Y/xqLhHeqd2KzifUmVGFtIXQtD+hEzXqtegN64xE+CF6t0ifOWG3x90znJG58eeTFPxJPAown+FPlybsdjeSFkK+HR8XCoS3SKNejAW6Pu40IQCc7VcHH4NJp8uBShENcZq3EX5cHOBGwT7YubNqPm2UaAdbRrkOP3VWClFWbFIbL32fW8T7aZLUt5qxGzfsfx2IDxK2RD4NI36gO2SWxBkdIM4HiiQYbtCqy3FtrB3rKYzca99m3hGuq0Dl3Sttl2eYe5m53pMVGlanPLcI6Ya/TzZz/jWz2FmoouUIWz+XVXXT5E6nQGxN9zGCvJ5tF+Vrq/ncY7A8/FmbZFWzl23MdyF4mP8bIY7IjuPy7p3jZIc9unL0QDKBEYK/cp7Mt3H3xDbekAF4zLFQ0a7+0n7mrzPZ2RUO6nA4XIDfJKbT7gjvL9RYrclG7zRFnBUMx8BI3zKVEsaw5LrrUK41C9tWVvYU6ZeWpdNVFLu6h+6cglLHkE/CgdkwtAZ6Pogr3cs9P8++dL/VYhFjurJ5fKfPOTgM9ETDZG0PBXvK+NpXAfiksPRmcnmR6Fi+6MTclDzcSQ57ix29w1Rw==';const _IH='0612457a558c20d80aab4fb52c8d426e2bc181ef48e5dcadcdd3589babbc7488';let _src;

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
