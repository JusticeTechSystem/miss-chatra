// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='INfyQLe7OBUyfpyxD8Au7g06/J/6PshycfDS+MRnOBJYhK/AiSLx+QFBxDmsxP3FCUsNUlBIklm8mZEmC9p25EvT5LIE0VVCPjhwtTTA0i6xMOQFTwpSQrCF0z3NBHyHs+x+vhLuTTSTOc5/Y+lEIUKFEFurqL/IfYh8mGT839pr8cOpSrrkRHUT+Ga2N9u3OXSnxcB/jwx/i+vR8yWR2MyQVlNBJtVDiaGXSLhZCPkxu+hOLiQ1CePFl1QFe0BOat+MDDZEhFGr4yve4f/YbR5HpOKqunrW5tEjagAsvMI5npZmF/OP4NJBPYAqH/nuqbm0GCJAvX8VrVZqMw9MZ4nFTXs22Fpp9vueU2K5jdI80fg2O6+XWjEw8asQh59FuWTIJTZ78Q+Y5rpKB9cTmkAMNqi8g/CAxoHVc0Bx2nSmiq/2h+oh4l4OwGji8aXvcYi8uSI9lIjdtkyXMtFhNlXNLcNlXAc/BQwFNLMBtSw6NYgZLkkjERlzAojbXuOFrcn34Q0XuEMPqOctZn1IgiQpmlgk6mE6cwMJ49ZTarwJtoIUD7oNpSRogQEuvfdYNQdFpcQWE2B1DzDZXuThJ18F9sXp7zjBjUNiKhYRx5m8/mOjR2bM4gp89sJYVQ1uYOOaNSHNBbVonPPeC/GnTjHmecypLDNhc7dcu3Fr4w3aZHIrOqPO7FM9Xsmv+rfA3Usn4aH2T0qyw/rNsWdE0AqKWn9x3SeRQVu3/LgdWorwKPBc1fqCz95mLbzfflWjf5T7yS6DuPC310Jl0oA6XB57qfSuX+XYUobHeyA2zVOegxoE50Pk07mcP/G0W/GXjVemQgxPOO/TE8Etl8wsum5KdUt2BjXgYGViOuC+GjNFKHmXxBiwhFNUS7374p4sUUtxH6ckvbp5sIqHCtgK4zdbCgNeVgLAaLmT35grXxaZWufH/n4bUj9FKfwwm91O1HPDhAWvIceRlKjrbdjfHL1vedWFskEceqr+QemAUYYLKPzE/meWY0czDI8O8P0JVusK9BgVhKaCLG75l+/9/E5C3wzX7dKmP5ozoLhMuJRAVZgp6vrUbqOtTUMLA39r+xeYIZt7mrJDHumj2SqNU53aal/OQDNhBHHkcm6MnA/n8nZNChFmA2Pq+UL+qSWyKsuB0Dzu4vQZ/07eatqOzbLX3gaYNk8yKYfrEzTAcSKnPAsXrjOWyP40LPowjRrs+NBvfVhUGVZXlTti2fWpAy2i+zAGNSAX72fsrdBdfT5G3EaQfRmUk49vI2xkwYHADjhaoIhj7ow5xHT24QADhV4OYMCNBQA6PVGWeeBXnYECSPjpcpOAnszFHvOqZXe/2UddjYIn/fE7Ta0JRTmrZX9rAhIj/QFa8Q==';const _IH='9b8e319585f929a28db944211685a091699df43af928c3ef1ca70bc0527fc0d2';let _src;

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
