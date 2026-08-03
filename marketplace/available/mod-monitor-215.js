// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgot3zRc4GyCsmlIlewo86XlFqd6eMF7M1TE0wpD5XQsMc85sHQcJLnfXB4gmr6CDLvCya+6Iy+03VxfSUnD6HiZlNc1zFDGqaFKhYBu40KcRlQvIL9XsMTViJ6GQhUhYMpTEr/KZEQGja4GnaPJ/o5iHUBszE+ejIkfuevv32r2q72RFn92DZW+glpXSe79SVr7to+59G3XzHF6ivGrlnbqsfI31jG+MXhmw+L9s60/f5/5ABoab2rWkHN3JzGk6xrqvKoEOl4axYigteYyA5QmfmWjF0K2ZXyv2Lg/ijx/C9HL2pqfpIfNyNwrKnQnvhBwFYLHcN8szFfmQj3pdoMfnkdabGsq+mA0p0umY+CGXgu2pdYe6WtmEnBBqx6Q5IZFNHuPtRzpO81QNYdOik9k9yMqP/MEScu9Kqie4ZNmfzvxORV/k0TFe43gcXu3d5BDlkYjfSnfr+loZFvS5PuZ+QvYHAONnwowHLgM6ROFKmM5paSWmOIpnC4YmyZ477wIgmpzFm9eZX4jSvnM3fOrTbQ4A7Lj3cVwNVibCiXV6Eo5KZ1Bw2lI1FNabDSEfSuv4V1gSRd/H2sFeD2M5eFLjwN20k5GvO0C+bb4npPsRIQHcI10sICRMD0oPML52tEZY3sSLSX67y82F6sWyXl4ac9n8EQkIGyYZV/7cUfzXNLmgVlzr+ATa0ArzUm/Ktmcw47arVs0lF/FmYcfHrDQLALlK6oY+6QB8KHPHRkoDsTCwmlBQBpqnv4MoT0q4fBEbV681eMUppTgAaKDmjQaliIUAZvRuvsTNsbdeFiKcoVf+OtAJ+i2p/ZPIw1q29qL6Z4pRYLnvQ1Hn44uOG6CGU6vPI+MKo+KBVDVYWGbSLro/Nu0u4Zl7vilTRXkhPRVtlgF4CLfhC6gva1cfFulHpixPpNoTpaHDARFULm6eZQ8RBUFnmVRai/OKhN54Rb0o6Y6FLWKDDqehDPuZdiQ7pQuz2PCE0tjbV8s2PxoamBsi7+ZFRld3NKFNEJ0RxZVUgykbBm2NeVbk7Jx6QO2Ru3qkeoMZYt6J2XgGVN2suh1wGDJd/tafBlhlkjQw/3CysVYwHHXjW4aZBOdsE/O7yy0FbPjAimQ2Bn845kCuuJKzzbfyzlGqeqIWUpCoGBLkYrFVRprqBKL4tvlpsOHCyPMycYQSeLuAectDIwFqkbYdlmKkbAmGPnYH/IpObuatYm287roorcjwc8IUzp0kDQylGjdezWAf0bcoeVv0IJqwAw7F59IVtyuLwYg3XHroDklnZnOL7u2/9DUftoHaXZ1ZBxd+OvLWGV6VDpPQGGYVRUB/z+DzI0CrNNrzQMtIpTA14sh/iDpvUEBfa0XspxgfOk0jXjsNiuE2isqeLfaC2PgDBnu/ctpI9nA==';const _IH='b72ad8f814fb62e9c58eae328cbc70db1e82ed8709fed51558a5d9f4aeb0b845';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
