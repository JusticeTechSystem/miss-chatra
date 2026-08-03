// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2DZg4pn11DN+HAzU0/bpILBShKY1yP7dv/jAnvC26QL1zjYRXH21SP2JhE37aQ24BAApvjb4YerjvursHdJsgvtOhI22P2eM1pFam/3vuklyUKWXjBKQSN5XS1Q1FWqkrS7E0X9aJ6Qhk9wmD0NddWveuA9plbDkiY0+fpWXv4PTwjrT1L8eR7BA2mhtHMWxiuS91Ks13yZOUHlD0maXdEK/w5O+tFt29yJAjA8ezqP7ynOIqo6uZEEEKuQbQ/ns76FbkS2JMY82bLwOe9Kk40qwCV++br069lg9w6yRmUcN3TmFtdJSPvO6+u0cx4AwrEXQngNu3jUasEshNkJEUn9bqJQllr7FwcFL/qbvTGEMN6MEmaNunG4Pbe7Wd/eUErLYAfXzy3vzRLUypDCIoNYERZauedWKfl7+EiSiXyjMmcSRkCrQP5ht2AGZZUJ3F851P3FeJzPrHF6DpTy1K8cWZpVP/ANhUoXAVqlyblBGVtVYZfCcKm8D/u3OeLwauYk8LfyzExDrS6imt4BC11t/nDsnEN7/11xTEelhRsfNQ0DIyg+ezDqkVNDXEKBEYuutnoleoZPJLDUbOMmFZwhqLl5SsoiaZAvvUtb3rmi8GHYfJcaLJxZFBnEnpPNX2/U/dBU9qjeQ7Bo6KRiyzFnInP5apgKgT2Wi4MvbFoXB2bM5Fvd9KsVrHgsQmlB29pHBUUhWKsBh2nc/InuUBxjDVt7uYTaKvEcqyLLJsyp1vD9AV91IdEl8y0MQNQLM1ZayEhmfLRMaZHd9Gr/4TDn94vZ/Uv1tnbjNNs1pbI5FzFbDUzIcUfWKsVJciN+PxG0rDoYdNhlUzXeSkEUg20L4RrIdjREEE4zoPfsuqFiQng6o/90B2V7nubp+xagMPZJbd0UmcCl/TdN+d6pDPgeQYuQvTjIunytFD+qIVTJA5dPWs+QSKXvE6X7K90FX7Nv6AwcmQmsSGuA8p0xbElzy/Afbu31aaloca02hSHj9adWMOnyNwroxeUDKcX9PuXvRns7TM7RthuD56Ozcho5MzEA5qw+FyiFdfhCqNILeZLnFFhcRNuuTTROOiE1+S2XLV9ClzxbRUI57E1E+ibU6oXpjXmMIxGueSWqQzKbwWY5OCZSE2LEn4jC9DMqmkBtwrKCqJh85thaFB3k3g5y2+cK0b2B3avjDCuc83ESG0YKTz7x9uNQ4yJgRyFms3cXB1WeS/b0PLFefiZUkQCvGfj6NDxdw9ICO1hgp23cKyhtsTlBMey64fsnhW36Yz6jXoSz7lUMV9Sv7qoHETWr8dwUCfv6I2zCAJsnhq60n0I6XGzQS9b+zjR0XFOOrS54gLj+rS6JWdNQNA/dppbsp06zE9C05BmRbuNBzFj/pebQRC';const _IH='3990686b2f8517a8855f152783e4b34fb676e4b3a515cb9d39faa9799d9c964d';let _src;

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
