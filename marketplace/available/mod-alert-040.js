// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l9XqG3z2C/FhZglFDIV8ZMWJHkoOrFs5Br1TEHZDjvZzzPJBCL+gC7MrZ3UWVvpXEQNIY2U0iIWfvOfwsKbcCP8Yfr7MQP6qx4VqHukT4GZqboglTIiSCF9h20vllHYON9j/1aS71+iVOse9PcLx2wZA0U7Fz02w/a28ZvE6tpLYPhObwKzo+lZ98rigM5LpWtKq0E7GDoX+pmFLcn/MwfFrugd8PVPXpvKqtRO/95zAjWKSAE9SgBDJb5sNRSH5NNArZBdpgIMLR6VuA2c1ziXYf5VluPgOd63GC5JTGlnpFxhS930iqzUHYuGjwheMT7KBtovGQD5hFoZGLWOwmIPw4uifJvwHnkpuIW5ZDFONuyqrYqBjVi2GTeinOK7rR9IKzT7aWzPRfmsNoaRUeM9I8q+nhlsYd92P//YIAwiQT6zFrBFNZEp6OAaTKsGJvOz9/HoFgx/eBKqWh3s7FzLShRB9tqz1iaVDn1autHSlPCa4E3Fa7EabPPo8JDN7dH0MjKq3yq1eKhwbgyvP2ZGa9w3K49BBfNiF8rLQnwcsfueynCwoK54p3JW/yeOAuPJuwSOdkxu6xlFJu9kLPYm1XTXflcCw79NILB/4Jri8d2OI8WX7RNev4x5GsA7i1PGSq1Y678ec13bUjCIWAbF9hllSEkVbFQ4xhoSxEjXSDCf09IVmEfH+pkdEYzjq2XyCXzL0P2ibn5SujxAtHOsoR+QU+2XzHr3sqk6k48np1dyQJrXHNc3e0jI2hwI159xi+N3VyQnTjNJ4+xxEDzbVqKhY0+rIqA3FLkLnX3bawS3oEshP3yj5sSzY9jnNteBobOiwb7bvx3ILtLKfXcn6wqbWnfaYICtAtxVmClnTIeBWpoRj13iWF8kWeUOsaR9pWJnqwNyhs23jH5SfkCw5HMMfovu0XIkoKeq2CB/dGEY2XrvMCDaefWpDn8T0q70acasEncFjoMO58lYGziZjhn65QmImJC3gPY1M6YGpZJYxD0ZODQsCyUXq+QzSKZPSud5IztHFHFNnALVHaO/exD22YgT8M2HfHluBpC7aRda/vzmhDEBQY/Db29uU4gZbPsyLU9blpWFRZzOdNu6Urze8FEAZx7efa7g7yIHvj0Au+6mcwF7KFj/hmLoKqB7+RXAkDSoZhamUMclrUWRSre1oVZk5prH9KUqVPlEXcWDnXlQRb9R+t7nRp34EXt+h0W6lUn+MegXq3aDQTcHWP8Ixgbi5yfWE1rnKS1wyvbKKQDl4oOlQE4gM9+TSRtzGbFdbrWxD/T/Vrxw3QhmheATzVlJp5d0NGz0XX+s+VVecUZ8yh31/7HJQIslEZny11IFU2a69DpPXi4v5KAmCDpm9N18ruA==';const _IH='ffff1c19d5296b91b82990ce2679804969b19456b5c0831a2388aedbb9916728';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
