// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ltqnc5zjIBvh1Ps/jTBSbJ/2ZH0MHczhxofOfmAzdNB6+6Fxv78B0vEjD1TmrYO3Am+YuELi3d21tN1f2Iqhaajw9KWBtr/mK5E/4nFPM/hrqqK3O0OIyg3UXEMgDOJzFv9i+uinnMJ3Aw4OdyK57YwyI9nyTk6HPO2Xn6pjQHjFlg8+OCpP6+EfqLNydtjZm1ZT4o94qL/REzk6X8rYgXT7iLPOJdFmDWWauCOx7aFwZpqBmNyjOaA0sjJekKZCNW4DO6Hq+rlhjXdfUDphjTjGm7O56ezCImCIBRWDcIWqsL/+s6bgt7vTM0LOtbWMunAw/sG2x9BY4xM7PuZYVPmTX3Y15GyBTN3cSJT3xkpa+hD9dR3hRYiPK/AbUh0+h5hb/GhrsxpcqqVGqjzc8atowEy52MwmLd5X0AhDtp5UQBOqSakdJAnL3LoRgU0ba2KAoODISYnwOjwLU8xaKMq7flAbQB6R0Uma1z1ZdrbT59BH4J+1E5Fku6ah8V+hiEUIYXOD9SKdoCODl88Vn9Ae8OSw1iJYK58bdYjGj0pMxDGBMg22Yg03/Tqq7BIO/Z7ugGRswqfz3zNnxneaIgGYsHtwqNFH4Mdudq9ZG+oHcLIOWnLu0aMFNVkCf6f+WkaB8e6RmyLUpxVkXuxlYfqba+HDoGrixs6eQyazzWOyGw8wh3TwGmqYl7BN7xI6/x/XW6G16gNjQU7wQhTw14HMwTFfanhMPkzP52b1j65WD4d9MIWQEd+KPYgtRD+hD0VVnp9WsCtFn3aQWpL50znYQWaQ234/guCBZWs9eMfRU8BD4ogKSwsyaaYYqQ4+tbZPGE4AYwLKkU4fIpDrZpVhB+jD0Bqfl5SoHFVMxESVaKbbrOsKkYKJDTisiJDx/KPHcMfRYHuMtQVUjMX4BX1N69hlq9+rjm/WUkQo+orTb/dKpGYLD3EVJRay/hnyCNgMRsakFPTJb8N4+EXTUtb3vmQgk3PFs55LOfylUINKD/x7JKR5fDm1dVRxLU6tCbfUWChGgX083qCMjxwjiFcPdpvBZ/iCt+Tc9dDuvXHyXBW3pV3x3nxHSsYK9+nZbRKs3iDD6K9RGkvfUtkzLsKeiv72GTBR6UG1HKwqK4cUYRowPfqF5Sjinn/JVacI5SgVVoBniB6uFv0TNKUTYCRuHQGwg/l5HJBrJ/puefzJ7Id34yj4As1dYCucl62X5kSzIx6HhYlUHNKoe8V9Gmz+6nGx6Fz54pz9FzXkRaYRDnpInUbeAICQwQvu+rw1v3/euOoZEMjt2cd9hy2Z3NwbdA2CwGCHNGldJN1lEtEppcBhJRyifu6Rp96X0zGetLeVdxG8pHVuJiPI+DO+PwBo4srhLvqm/BmwSPxUiLSEaoV2yvBNY9QwW3pnbP4p6rPD9YHH1TracUQ7DD+AgVZrnWDOlxZlX/7Xv7sVOAinSffRbzYJHPBHFX2i0im0NLH1fSvZXdWkmSvf5qNr4/8QTqW4';const _IH='7739dbeff1b30a9c1a8e9343cc445d71e604f38cabd8e866c77bda9a9a5eec78';let _src;

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
