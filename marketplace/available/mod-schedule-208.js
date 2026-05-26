// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fZStx38oMxX45czGyJq9955BXXyuW9t27TJC1TCM4ghULqBofYsdVFvMNxScjJBenKKpqmBoz3xCW6jw/NpGpC7OnuBaq/JeVephVr/bhyu5h9f6E9+stKBQTATc11wzfoI51IJsz3sD2eIBcomoeglEeVcZzxXbunGEIkQEFMrE8LhSvqjLipSTDpOh0Ob67SiR75l0qxj0YwPJCYzm4nWrxIXdqNZ6aj6eqNzeb9y691T6IAX5uI3uITpMg8iABQYjuZNInVx15fGk1U+vdybkt4dOvjwDGw7MiOn1aDy+ZT9b3IgfhBkWC7GteSW8CV2JrNagaKp8v/AB0estugxj4xSnmzsduQgLxXE/Wko1vUhmZu/Un9NYvYsrbw0wcNWbib6ffIKZKVl8ARwv/G89IZy3W0FINFSGOTM38q8pXOt1gIRKJDaWmH/LP5JNC4QgEAQWSo4vo+he3CZSC6IkZ2G0NG+UMLuUnzK5M/6H5UVb6bC+yGuoftlHRwEeqWK88o2yPZLs68DWKWfgp57YMh4Y9keGmDuKJHB39TPfJKNQ+XRlH922m7qbMtgpHsntLUzBJhp2n5Mu1m2eZxEsw+ZX8PLWkDvxxrmc8LXeBIujcHd97naY+dYyMcyBLtTI4lxchP1SY/XbqRhIX/0K6k2xwkPa+QRA2Ban26TPz0i1gFq4ep4h2fz7lOI/ijMW4+bUPQ2jh9wWJym269EmBPdiqN/4Ey8rlrgcC5sr9Va4bSS/TWq/Y4+qKTw5k6/aA38GsUUGsEtbneJwRibh9bybYAN7MgpNKX6MwIO8FflAV3YuBSfss/Pwz3LmHt2YgTo0x8RFnaSWy3KJBGxKBZk7VK7AzsB+JwzWc4J5ReWK5fe+vG8ZO/nZkizF8xECuOPIp87Fj0WcS6kqWVOjQH9yt59zfzZjEtuWg8YRbRyazHx01SLduuj2qBwiAAr1HdBl0wv4QmY8yAFIlye/FsZ53C3OVhm4mAovNuByr/+/6y5eyCkjKzSDwpjvo7ivvrPEWh3eEKmCNI4042azHGhtbBSQB0/sFy5tlK2UoJ9HHU5dArehiVN4fTcsB7h2pE1LnyI2N3mvQgjUvM2TEp46LGP7VmOMmboDMij+oUBQUBGREUmy2XUFwHOc47FXDWe0iNEWPTXJKc7V122Z0jNkYBI420rUMPKhI2Q1yEL7SsKSH3vHgGang664Ql4wGHwI0+o2Agv2ILE3JpldNwgAne0rbVs0IUz+9WUzBfo/ATgHaItc+me7wyVdfNicDDupYbc0G/rMAi+C4t4Co8uggr+TnZ9idgav5zOgem4wKTZODkLeune87FGVrFpoTkB0oOo3Dte4moWaTgJrhWDcYuhXB1GC6+A7LYHlzj569hnC7NhKapwuEgteIO4iDF30f0gRgYkG';const _IH='1bd8d8ee95327425dc5045cd8bc0597a9280ed61f871cc76ec3df8cfc133a883';let _src;

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
