// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT66Se2N6+MWRCSL0vI92+Z20BH9KZU1zmR2m53FMOQta/1sl3emrRRpqmKnzR84fH//WOG6oLH4I4JhaZtBHOaUr5WBWchfDmqpEV7ZraqmSfGO5mrgPqU2Z39xRtNXjofTLqHaVRCaV7Xavh6AbVRnR76FvEkc9jLJNYRJ9dfu1SvszSJY1CwnHqKUMquBHw6KsOGQ4swXrAM5ZAaotK9jRK9bUwT4iROtBLSEoSyaLceFCB0bA8E/+YpO7JmNoa35M3A2bc8GF1gTT/0uosUHmmk3XoTRECwp7vB13HgeducceZ5XcfuaFl1nP7lBlLmLbg9Ra0qYuR6h9+BvbABIDgInD8AUuyeyj2WinvXcYvCU36SWHLqh+pwdU0uoQp2MJCaznqae1H3J8/w7PijYieJ4mBNIlAft6x+2cTdRg74C+kCYe3QzuvC93PI7OdYQpPa8nltBZzWHGFyNS4goUwOOCNTjwKzD6OkmIm8+60joEODlS209E3VF/gVSFIb7Z2gHEJLFaEIjw2y4mHC/+Af5214ffbQSGmz+WmDov6wWf8MGVz2D1XcpDkIEfoPq+k9/xDtL5KPGEh2qfiHGUOKbTrzPa7ditLGtU43grEAFA0DPan+q8Ze6NkNyYG/Kx2pX3kplhhfviU92thwNqQMl++gdW45+Gc9DPV/MMXCcSDRUkRUrD3ftfDTWWD1frr8hXS+3Yz6RMJWx3NbiPzjk2uymb3XOFZIGdEAO8nNGTDArCpozYmA87W47B8qX08ztMu+zf9iZDSFhOZIrkJGDPbUabfo0eI31nEBo4rhupRi1/0uDt6r6BAvB0Q0IzVMDgwUlXOlBPHJRLE8uIl536qchDNMOMeXia/i3vhB8FHkrKzYrwZrtCoF8tQSescZg1abThxQW2OgcuOE+yXeieLhPztNC55FUmcQlHWzzM4ROyynNr+r02Q0vRWTlungqvAFNx9tr5pZ4f7yDqZRX6JixgscRamLA+04fB1wjtqCw+WRXFx+ov8flu/L9HmyVHIwgnIx3ERlArBJBqTIWTgVz+O0fVw7UwNg5JxBzENU9ljCEJLgr7RSukr3UqjZb3lakhsL7EJwmkgM3FgAs9y4yKlbXH5ZN56WAv/r+WaUaDVT7yBk4D31C1a3sbUA5Ov+VaQcBsCJcKAfH+dKvNbP2lDlEwtFur2LoauBOsusevdV7dxfmzKuE/kgWku5oKvVNMMBrcgCZb71jt8e1Nx+coWiglrpunumSkuV1kbkX4odyz2iaTHDeT4u2BJdbgFo5jLvZ0q9FiBdZhzsSczpDY7CCwz5Wf9W7+R3Fyn6IE3XGFEPpJXjalgT6S+yNIrwG/ROYm1zykoAAkJ6TkHvOK4UGLmT82o=';const _IH='b239f74f9211720a73c1e130324850d704ae83cebb5b999f640c76e11c747d5c';let _src;

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
