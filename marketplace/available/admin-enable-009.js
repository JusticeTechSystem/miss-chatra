// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsWqZuDnXqhTkOF5kZpaSovDJdfapuW4XblEhoaxvpzjdyE1ZzPfqlD9NsYRMPCmXf0LklJRnf8WwUsFhMKpIl/xc7WlMno/YWxPWGv64tqgPoegl89PiqtOy6AqVk+7XhRvj40kOm9j38ZUO/AqbNtHXtBUVsL8IVyMLfKv5N3mz06BzR3bwElUDi4jVtU2XNnfyZRQDsGC9iU4PVDfLUGLSmlqXjiv2odTfA7MPa8zWAfxz6aIDVRaLAJzXlMdEq27MiZ+/cH55c9qF6dQUso0txpjTZXPKjjYqJZzP29QL2SAkif1sagm9jScNa+zHiLlJa21m4zoHcfsRcGOtJiV+YDNniOZ09/V/62c7KA7+vz6pmSJ+MpTlHiAyoIypdrAO5k797YD4ehL0GNwfZPAZQ6MdMMHP2IHaqHdZrecjQxA1m1zybe7GOm5oQjYDklG/g43r7U3zZiR9TYtNMUF8W7G+hki0qPIqDsapDvI0uevik/NYiiz6pz45HSsq53ZsnkaG0yoldAL3FqIm7slsh12xZw2ePlROM5Ws+BxaQrTDaaYjssGj2JSsA6U4OpFOgHEs3nyS7xOcZ2tV9sv1or7mNEHzDJttf+FQo9tBYZY1/CYiyC8iVZnZutb2/23cnPPSs07tZLUTrK93U980BUSQhEVpuyyB7Cvv9JIPDOHPOYtRgHMuuU5O290FVeSIDPXQGjYrxMgm7hXZoNudxsFSzs8sfB6X1YkJWouAMPjjPKFFhcsnzR46tXjRa2IS3y4NpcHeb/A5KbAR4XgeBhkrltcHiqS03UhPl8TK4RhGlnv5caJyOOd0jtiX6rjjP4OqW43I/zHnI46RPiFo/kRZ9lBULQGcoAPGAqh0EZ/lF+GNo1KR+OohJcFMJM+Hl4nHC3KRWXRoNro3AP6IAJyZM/SSVa5gSLIYii1pQMOXjYfWuY2/I6tuHX99Yv/qu8wNSKfg5BuolbHB1FUZddy+B6cbbYT27/4UTNJheda6Rv9UgMg==';const _IH='e84094582a14b9834c732ce4d2864a0f9c393364a0947857797571254f928a6e';let _src;

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
