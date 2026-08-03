// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDfXGTclmwg+ew0K2h7E3MvhfDQxKkpFwYTA5wsQAWggmfpzRY6kR0tX6DKyvYqvg8UNTSG7Yb9RhUuULj2hpKNBsvPfUR3yqdQtn4UjAUSTJinM6n+rPCVcPdxT+rkx/Y+Uko/sxeGcGXIDd9tOCoGCIh0WokYVgskxng3KMGu43YS2pOswSFB00P+YmwqjnM0ExH4v5ySbZy9nhkEzd2+wkOo9hMV1BOfzB7JcWESGy2PcBUKnkoh5AJsmC1i6jSwHehBBqrdq9MwE7e6ejUxPnLlN9A5UfaNL/e9T5cd4v2yyH9U4TuDvXfkdoCmznIO7MUsLOF1afPjeb2Vlo5RK2z4DlRQ1lpSB5m5xO7Bhsp6kuGqxeun8fLBy0klf0470pVm53DymkrvO3IJLoVEr1wSSicwNS/LMwt5er1RlfEqW+Y7+OxA+fCJ/5Dt6FL2aAETcVHUYzLbnPSaAh+KtmZPjFA7tEBrQwLhcoI8vhRAgAOXvpVJWoIJMpqkgnMsywLViDPb0WzGrTSYU42uuxqlYWvgMDpCnfUxUEzzs+vqkPws47p8Lv0gSOT/Rckq/ghBuNtfTLnICyQWjx+8QW19rFcAUSpW2FWuWg1accPCq5Ur9EgqwP3T5Qu5X9z1u3J6dDztnHFIWEC1j8IYwr5fICUhMyvrKHEIteuae9XU3v7GEETq76buYblGD6JDL6wYZItC5J6m/6ovmGX2Q8C4tKNc6+JkKF6TtZ3jhTQ6yMRiOsy/dfj30KXpRIUMk021VKu1ksl19ZklUQgyyY5niBO6C5cuaRk4iQxkg3MXC5se8wHQjr7hiXNEUQ7fCcnq+gKmEYLR29zIxXSg6E9jvnnHCkhOYAdH1GfQ4CQWCx5f5Ee0uJiyz92Dht+hxrQEkHxn8O+YlMK0SdEUv7IWm+rHpF1arTyFR9uLhGnPi9esWHGKYRNDf0joJZlrEVqe+2o8jtjM8kxVUJXLc4i9XPuBI2X2h+Ux0aZEhjv/0lGXT/FOyhuhvVIhpLUf0E/Cd2mUa2e9rM=';const _IH='0eb60a7e7ffa85ed80150af2395fc292b297fdecfad9166d1582832a618c272a';let _src;

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
