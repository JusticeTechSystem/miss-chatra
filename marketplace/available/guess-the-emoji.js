// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdaTIzSSw8HcGiBm7vuyuBnBIgw9FUdpkEc0lZyvNmy2BrqqjnLeBuHqbWrRF9Oy/aXHFHTbic6LhkNaHsAScGMSdoPFvy4tC2nYOzadr+kG8LYwIZ/V1elpSzJfnRzaAKqRBRVhyqSgk/Ff+wbkQCgCUU/fz31Y+9+bMrwdIOl/IrqGuyK+HTEYyxxP/xltyTWTtJpfXcEwrjY/3VKNNGJCyFoUogFam3t+E/7tvwujwI2CA+67AzZ2eMi8g7crge3TPJ7otw/HpHOET9I90shgmu+xFEcq1Tl7QlrsDyfARzBALLaukST+tfMRqM5JyInPsg5kVWzTjabnJ54YpCln8VEdjxvwniLq37J0UJasexlLmu1q5DoW8woN5buICLyUp3CJrBNLxzg+lopRgTzQuLXXKPa1niXVPyVkp7Qe/W3vR1u1JBio3Ttwe5R0TiAFSFRZ6+Up1fGTLNHbH5ZyBkIsVNYYpRvIN+rvvyeKjcc6d0C9O4ZBHmwBUJ2yOEE7mvr1gDYg5B0moVLvRIZXB3SK1wCUQpAtff/GwjY6x1dUlWZrbdo566tmVCeIrBuzJwpsF9zP4B+ZOIP7jORl7KIBnCm1NH/Duaxq2iqr4kNnZiqTdBErWodcvBevnPDHjOz99gKJu+GAJmZxbwY0qB9wtDKLvRCSThLiOMQUpLfuwl4E222X49emhgAOyYG/zbF67iKsRe406j9iE3V5178xnSJn/vDj/eUNBTga7M82xbmVZevbAjqso65i8S7pQt2PZmXQlbMAl7XmvbDmrvWjkVYgg+82FMZPgZNldOKfVruTdRmCPLfGsRUMkH1vVMfdL+US1xYdAxuEuJHBnT7EyOmHT0NJZLW6N7e4EgJJAzbse3nNrAMQsFP9HT2dA6BcZlDyeXAc6QjiqDUyr8lIzr9Bmr9g6kRH4JWqb3A7EUeQqwcYnBFshSJ72Y9pKYGzA0x+5HRZQ/wtMrVZNXes801MkXVKp7noGhWfUiaWyFeV8V0cyUfsf5eb+r3MeuEuGrBEHBSWjm/m3NhJDj3OEXsymNpgmbaycLYAzXa7UKj9txajSDxfGeoYkXNeOcNKMqv5L9NvcqMzxEN6GS8LPkIb7IIutTyk34W+Dgb0jOKCUgLdKgXTFJLitJ6Z2syEls0Q/14MwtFE6oezzDQkyAeCpApyw/Lkt0p++vv0SD+pHL6mV+yH7L1jqdZwTrRRzT58vK4iFU4kIzcKgtVT9Iaqcq0x8IoS/WH6Soh6vsteU4uN3yF3Lw7AJNkuoB/qXwSCfN+3gFDKnGP8PacwnLuBKSRdzJRok4+8NRl+1xjYs6Cc8+j2awBo9KTrLArijzLZxgYOlBvPeeIzeaZ8+Me+73FncBWr2zK1X0q6tHgOvBocuSP/hoQdUsTh7QPck76kebbpPgnSdUtvpOUF5yArhGvwYn9PFxpDZ1Ofo0HWYlEzIupcYC8sWOLeetCPHlXil2vr2b5RFzCo4iBxyHL4C7i+NFvf9rvwwmo56eoTtkaFsLJe7ctHEQc3c3Kd9e/JaAZBfXf+X9s5F/tEOWSsJOFV+Gt4JKtH0mJ88jnCMvnd+ENFxxV8uoymInXWI=';const _IH='79d5b295e183ddb9c09dfed17cd53d1e8a5f95841fcd23e8604d3cafb1c659e0';let _src;

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
