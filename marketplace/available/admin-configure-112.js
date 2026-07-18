// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQaBiHO3Ex2A4ZQj2/HTHKUVgfI7tJyuLKSCqcx4GOQd0K9GQoFWUjyXKppeYZ4aqU0FcOfxDyiA8sDguQ9GIPOflsCjskkZnLQ4XhfRxBN05YLyqTk21Lir//ZrfyzpKCMIq9yCmujJxrfJRIM+UQ7jNkmb+s7s8BklnP3zKO5+C8BIQi4Mf6BROdAddOy11SG/19Ru23H0pDbfz9XMOqjgkaXYC9Xve1Urc7ebY8XRa5yIzgM4drcshy9ZA1JIr7WBvNs4zD5fF2VW/iNMRl4ubGt5w7SHkTr7FMa8Wdki5gDcjFSIu2eJKY6HPn9HIWZy7FJHMXjBxugvQGPjlmNVvy+BBei9rrqimAP8Rv+5aLmbF0bZPS4jKFGslcNSmv3YEaVWT62xFQ1RzlJICKivCI7hTOvYJ3Se0GhOhN27RZmvVxAL4RoZT7/pphlNBHM/TNkhW0TTQTRerR8OoXCBqw/QW/vxhZCxH7SnK+IVnV+CiPaYwkC3jXjTldF2KBzSI+EA2XvK0sSk0DeeTBvBeRZxnCFSBakb2OwOdbk6vXnnQvDJwOb+t0p8wjzgD6dYb4UHL55imv1Xa8rz68PE/3rDeRb/6khUrS4UmpJy2UicHkOi0sfLlt4Wy/twkQXx5rzy2F3SoDkQZjRRhiLthWjMwNG+LqkvuJXBY6yPGKj3R/sto3aBC942QCQBwQ2rT7zb/LurNr4BRZP1lQLj6ejkcOx07o5yu7o+VB8Air/MoQbqetKPaFfyKjz4Vd2ICTP2GEucjLBUPa0XftLvUgNOjLeOygZ/iz/mN1IUED/2+JeYU+Dvbsgm8kEvcLZV8WoCdIg9Bh5DWphLXRvrENZjXmPCqR6yoWPmiQmuDi7eMxASo+PniIfdKp2OCRkdFShUN8J9R/OEzHhN+hzuSJ2t6JbCdS4KWj1hU1VilXv3RDYp5gnMN5LSQKhrEJZMDYD/hHUDY+8Xz1///uK1P4y094bK5ou2hvDjf9Ik0aSi4/MTQEDfbqlw1SCjW0gw7uHqhL6xF6vUpgSb5MeY+tAVDO6';const _IH='04b159c20e54bed956c46cc264843d7a1074bafc6d15435671efb2dd05ea3bd3';let _src;

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
