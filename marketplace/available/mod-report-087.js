// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ7ugo3KxbDRqjXJzG24cmvRRNuCWHmFt1sjCQIJuIa9UTb3We3p0T4tQHbEvkcPjEbatmtbWFwORr4+KXIKEuqW6DHbvouRpZgLNZ3hK27cknOhi8WqoOqdp2+1DgDY7JdsKlHOqzciYotZNeSoz3vZ94B+xeDFzTc3FaywX16w/ymO22YhAwXS9fS0DNPu+ed/ck2tq07b/6pSvgTt8jF8pCjttrNuoHffi6p7XQi+TUz5ZyS9svflXMNbcKJ8D1ZldWtWgkpPNdo8EIK/2jG6rgPE4FzDTun5hCoBpE2VtMhChqAn7/Zsay+To4xdRIaA0XGMITus4cXdRw2XfnKClh0I2GnbGfHU8ef7J3P+NPP0qyf7Zj6wqB8qnpCjNoRWqp5MnMxehkCxqVTQjbDZc6PeP7yz/bjyI4r3FV/xvD3J/xrnaHnts2WF1HGfkFx+H65U9KUDmaiEqScjq8TzVuolGCPC6HpjyU82KFlrcdwiWHexF99mJU8hBC5fE7SVxbZ9Kgsg1BH3LTR2H1j0NO96RyRBNeMUFj48kt8K7cHb5xwYsBahBbt4UKJEKUDSbY31uCwpq1cVrpp2/XsPTvrV4SeRnXB1eQb9IADn5u5CCOQXyCua+WjbIVJlhtF7el1F85nLn06R4HkDiNZMYnL2TlfihCWnXVF03Is9dcQ+gYIWImh/DyJaPtKGQKhxycf0/A91GM6TubZlgBAMurTtVIQLRSB+zgBQxUrLdEi//yYYiu5nmnBZEgyhWZ4YSBGyP9G7Fu9xufM0UP8A9rBDYyIDtC3bSmL5ZalIZ2Fcxwi+c5aop9fpG3rATj1330u97kpe00n3DG+ZV8fN+tQQbucORVJmf2E0NHj0eRaGyi4MAOzxiciXdGnaeW7IJwkRDG1x/HfsWZIk2gwIEYuT8vbROZCezulfpFPUa7xICcHJzj/Vo4IhOwpFO0tTBzCpMdfhDvz24SX7DfwK5AuOsjpdqq6NUJqiPJpCeOik1K1W0X45gTxo34TUSkzxrB4nY2RJvslBx/maEvoT88+lNtOs4JDF6xKbl9yI5mI8kObQ280zXKMi2p5Q2LKbPGOiLqwxChsEsF/8f6aj+GebDgll37CRDEdapz4dOGLMUW0yILp2rSKYHQov7SP3pK4YfKhLBbv+UjDGVe2M56l/OLo/3qYc35jlYPxDQkUkmNcaddzxOolvgfXhPTKXG27DYMkbmVDMLPX8AeSWVPvtEwM0bJOfeBjjYLhPkw6eZPHdcUSpHqXyOZ1AOUQgAuU7x4/+8vI5UJxddN9Q+WeNMp0qwhsojxTG0du4C6ztX+fRtK+7CkCdFy1+fPghr5Z+sYSy/JoKEYvO8A1MtO54NDH40jbGYA4FrTSIjLrA==';const _IH='1b5be18470f12c442fcbc1e64d43e1073004221fc966840e19db4f717695b230';let _src;

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
