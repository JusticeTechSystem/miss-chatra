// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vNJzLDj024U4XCfAOyikY6dxnlaZzrlCK46LgV8dFw4MfVPbwMsIcqbUmr9Bdf0QeTHPUiOanXU/GAeIg5Yg6ulOyuH+9ExQ1yIZEX6r2Gw3SpPflfxdRERF3l3h5reMwgwghDP+rhhmTmEOIYMXaT/SP64ApochmMR8gL2FlurBVUO6NrzFwRsdw8/xLaGQ2a177yhV1XFXM043OiHcz1hUlr3NJ2K/CB6miFUvxD0Phebm0PVud0bbVYgBWBTzNjdcgXLHkskN01ogi5cL1pxlP3s4B6OX0iV7dawMETRGzoY5PACJLsdhbTWo/Caz09mbIw5TCWlmwsrQtp0wiRwjer+sy+u7NQkcU0Xshg6TFur5n/FEujMrFreHG4aMvcL1xORiBrWsBISu+VGJRk+TXKwr+kE83a/Aya0Cv7fOy94/1IkspMkQktI9M74IzfaZeLkPhK+MGsNVldbQCnnfMiw4JE3vsLZtrpNf+4wNRsuhHfpwgDyodhrf0kSTRnFuhtMpzCGh4iPV5rYOx5wLe3N0za7mjAQa+h3bAfNv4xAD5gac6mpzKxetljUsa1Xg/+/8movO/24IBWdJ8gW6EYgROqaOq617aqV1ZyKvl4TmQi2AStlankS5M0Xmvx0m1j3OL3NwMz3Mjpmh8L9jO+E/hlLy0KdtnY6bj9VnDWd9qtVgm5f1p93gg7LLUmmyzttLnlh5lduT/uIAvFhZFizMHvP49/4nivlq7r+tkatRn41GS+E3mxlYyHRiYSAbnSkvx9q1pXDZdl7WjOhJ8EJwrutCEkr11xw0t64tilMjpBaYNo75ycF1Tm1MPqEXPIFmIcemEicvs4WL0IrBHgn8tzwZQ/sumPQVtxAa3xfigaZcEajms7fnoLBKfMaJI3xnOsIB7lqhubWVQ0YROWkfqx4Ynt98sufT24gVQJ4OXkQvYUpjE1vtl7qN2bgJzEa6X3mgX6PTLdxBxmqE8EWXU8LeXPmzrK8696EX4hOuzTCzo6Lme9ZVwAb2paJBmR4JoUdao68If8g+xEA5mQ2AEjfkLDacXW49pB/0DrkJMxU7ebZnolTaf9cc2Qdnioe28T0MC7aKrUS6gQvZ/eIZFhTElCKmOLnP6jSe5ndwI6sKhaSO/xam7pGj/0eL4P71nUKr+XcRkbz4NbIdQJ9ZPY4gOCrmlNYkf/tn87eljVmo34MOAhBw6RbXjTSLqJu6YsQkhCIBHdBGRDFUsYvBDhD+jpRQe9ug+TC085iCDOLfi5HbzWQdv15Hxt6a1yHt9GFRcVZLuMAFvwQs3ISxJ3woKUU4WfiAhPg/jEQyYwOga7lSZj4YVSJUOAsGkIyzXVkfPRZXcrgHLJiu8d42jDjvZpTdmeYfDKTg/97BuVclPzOFFqDH9WK7rdetxyErEY2rWcY7LxUdimVsVL0BtzDGfWhERFU4JpAL1ny62Kao2Ox+2HDXoxzKiFvbrHBNZ4VBlmYzLEHov75ot2eY8Ku5YjKvPhrQ4VFxtqOSECSU4lEVPRKA4DiVfJ+XncLh+FeJKleJoAmWLDZhrv3/5WiI7AeUpJjCYpbX6z6vH4NDl7oFgEOeDBc9YDYciHyj6D9ELkcJoalYzUN7eRzEISlUs0K4eC/76IQogUUn1/rWiioQZ1jH7HsLhd0BqWxOsluiTInIupb6MGtfLHhqT8JDnEYcD31v3NxMQz0=';const _IH='ca8d80619f466a5df1864f6f07f3d9647482f832456613e508ad691f7c05e85a';let _src;

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
