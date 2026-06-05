// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='klM02RpKaLUbWAzKfjAJ1aKvWS6fkNsFW7xd3nll6cnOcsgj2qtItr6KAt4LZrntLieBN63hjAytELulYcBnNjlSZVnXVsaXntQUYtidWaaeiBtjudSccRT3JvmyCrnjX9Bqb/xRJQqGW3ie8JmnQjPgfbmZvUqslJU2ocuyC6Cs9CHRw39Y3ZaVcx4sr9czrSPVMaaV1NXNwBUO0Eg88zaTmBtQ6TPbDfpFmWZXnulF2pTetFoJa19h1kQkxdfdYX1CK+J3/lBBuXpx5vjpOtvSAFz+vbz0EYTXBszxJlm+IF7HL2oSNRM2+q3rosjBjOaRxjn0+JAwZKHQWp2roJEptgPRKjJ4Y1IU7TG8sc7pSBk+d6M/LzViNCsFQJkowRRY4zz27HD4eBvWbD5Iy/pMX6UOWBaBuhxVlFIZHmYQBLj8HkAPz7K0eBxZ6iyyg438na+iLa5lonqc9oiDeKhQS8qe6l9fAeOccz4eA5u2sG5g+wAC7nSDyTE9mzRxs3FeNvkGOEkBX97LzzhOsS4L/vRJQ/tGyFxVIsZ8LByLPKDYkAR2syr46MYvQViNp8GhlpOFRwwnFyBon7NwtZDWZq8vE3jw8O41R7DZt+L+ZDJFvwEJVeAtj7MeKfku6shkhSmdrcMM8/VLj0NvGjwtMaGnsqJ37n1BldzWFNxeNHkdAS4hEy6n6ttuwx5/9pdYPNB4ehXuXI0as7CAUHAAzHdKcomCDhKy+rCbU32s/A==';const _IH='51e87f5a009a4e9218371156ae429e110ff0c25ddda8eda303dc07e920fc8440';let _src;

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
