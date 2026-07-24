// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAzPjvkN4yDbRZGBHRXCovH0eKk5X4snH/1t9d43lA7hHQ8y24DU/vNfw+fhRENz86LT3shQOIUqNWXajEf9cr2RcjLCnWXmpdTAwlAOGQd7AGwClw9DgcfgFrWVLDuD40QRCpb2IhDDjBMkVp8fBRxf2zPUSPsJtYlKyGXTlrvcdiNo28qgjsmkzC/6Xu9r/wdWWDexZBIf47OFQBNYBO0p1zO8UAzHs5NeMgALGSQp8wb6hbNiIdFKCL1DDJPQaR69r1RStg4dViI7GOq9NcBdy5OdcQSVb353nJ2iqbr4wbEI11IFQLjRgYB9b748gz6VgCg5LmuG7Mfddx+qYPCxapyZGOqWExHHOsIIgUmEbWPOkXeZgMl7bYLRbTSgHHvP4kpDjzJvY2lo66Q9yweQPTFJZKDpOyPX9pyHoG0vuoxPJ7lNkwYeyWfXl65SZ58JHhqS+m2cz/EqEM9M5vPWe/JuKvD/DZcBuQLkZYMHIGGIhaZRkunvIQD9g7MSlo06p5bAqHVAadob+dH1qpp4DqINlS6VEuN3XW5bcr6OTGkZdqmqPUTO8RMqKrAcoyc09SdWlCqwBI/8tJn7eBF6QPC+RhHXyOAEJ2vzN6ZpYf7+LHY2lN2wkLo1P+Lljyr6A6t/uG02PVndhJzbmzBhZvFUVOWkDAWLYZgXTff0FdhetnwA5ajEa2Nvbd+x0UceuMTlf/h8rIpYewX310XxQp8+58AJvw4kmXCbOKIu8juSr6q6i/1Pvwo+XC8xuH8HyARNU8loiZlSaswxd8xWEZfGFIOs7dhJuUvENNP2eOrpO+FKl7RmGN+S61ick5WEdAU3ZdO7liprQuktNtktq4R2fx/qaK0e4C3JsvQburm+ilmTOnZqW2m2vZu4vuL8uxKsGCVbJ9PM5rAkuWYMyE4AGe2kMSTYVIY+Zm9hGK3ZBh3J4gA8qaIQ735+8GvZ3xYZU6Lquopf0TiJ5E4UHWIEzAcrQnQSr3j1zofSzEXrkxn8QNiRUKO9CUwJXNWKu4M3BephHKL8C6zQommOtOKQ7QFPZ8bXKltXJkkMn8GhJu9qKxpIXPnmyZSLh4GSPLbFtPLu4GQqQ8CvDjTz1x+biI3VOJGukifaRE3TAvQR4ncskGlg+m7/je+lkfoGq0Gg4VhIIoAbHGEw+Ee8SIv7GOyYcLYWE8hMyIRA5fkl/QZhkpM/1lpoDR09N/DqtYK+mdShh5DCL1WUYP2hEnlXwZjbpueTBn2Zr4gCdmSQHkl5nmahYIwvwjG+uFa2M5yX2yIEgzwjm7BBYs2l/SB8qwT728ouBJTy20ws4D5VWxGjHG6fJ1xSoFB9MsYPVqcsFvnzOLJlNOUafhfKriRvx9lOozJMtW2cMnCktCgA==';const _IH='05dc7b90ffe7e7a160677adbd5638bfbd42ef10960726e380b85a1be9325e3ab';let _src;

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
