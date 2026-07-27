// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0/ldRy30VgVBfBcfSD7WUETUIv3g67El2LbLvuGHTXPgPNfPGXMAcQu2QmpOswLkGi57sz4wtlUsu1RNZTzOJtOE3kIqT5VaTWeMnYD5YJIArG8aywEHJuwF7u2dV7eC/yp/2tcNSG88M58pWXsLcSYx21GSDLSy2NiqArWCr/oMCEahS6hY1y6uLjd1QDXsmSR/iFN2yes26gRX+mvaS6Fti2EwCAdhp7i6ACb5llwVmMXRs4RglG8EpcFR/6YGpgZmGumj3jP3r8no5HuO/h/On/ytqrSK3gDqLRlor2C3+BrWKfGOR6pIbvT6bovGKIgcaucq2OPlQlTpy9h/rTLJlXhv0dKy4P1tgOQ2FebyXf1W1W6+mI65mllymYWeX05pwIdqwft1h3QWyo8uqpZpj3K/M7QaDJVcYx3R0OkemsquSVGH5eTcEnEIBqjAYWVY40G3o3DXq+4DZW/cZ9QGXqP63e1tzU2d9ATGYeH72WqoKV/kYMyVHbsDShVYXDhJlYhPWa0V78xIYPujPQBeJLOYacQijQoo67y6+GzRMcUGkopYblTuyym8PB/LkUCSJ2P5IIpZSiOm4Iafd08ew5UiBgWNjgJ1jcGRvFECDO8/qpKvNnwTsT6VxKhf9wf+irSRdiWicnQ4AmhVSsG+etdgZ6hlK44KATODZgVIEi9ENbDFA+Sjh2YuUYsXP1S/HVMmV01aCpGcleeBmI0raE1u6/l3vN+6UQpEwVfO+P+LgxzKR3NAu3opOS/dNEsbFc+DneatdXnG2opaqmkgnwCYNvBWGOlrHp7NcNM10IZ6WiT/7c7iq89AGp0xGQS2wqdnkkPjZ76Rv6MNCWA6EPQNDtH5F4ENWzVxAwQtNQxxbPfm6vzcIkRjzrfq+k5/ualtjG0IMYWkoW6Ajv5bn13aj9tFdPdVIkP52PoN9vmoCAuQuLoL4JluivBrk/6AVyUYes0zPxfMlnJMlSZ/cM4U2isAymFBJAHh1Da3R6uPdN1SBivKB0YeSKm5WCsii4SK6hXLKjiaa7E3XYy74tzpNL6+ECrwNzRAhRGqAv/0jFHSnZ5YgcJ2fM2mBypBSox8JovGaCB6mYalD7EhyluiAeqBdExOW3hJt4LdfOwkrE5GZyx1pfrDuMpj4Y+ocL3j/paX/XUswBX9kibSeY4TWHNz86SXRdD4PJ3Thpcs0myxhy1YP6kRTtDo1qwrAVCnoZ/53tzZPxg8SKgj2LAGStM8D4aOq54saxRODMzH6Ol5M7kwTgvD6yJc8gp6BpUnO45Gw9EFfHUzu1l0ll6yuNYcEkRCMyWbTD7HMtABfapy3dWHPMLMd/nZ+f6Pc6bkp0eMh';const _IH='ee41abeb3f318c6915ceed16c833a91f843483c0ac9107377e7c3f531df58241';let _src;

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
