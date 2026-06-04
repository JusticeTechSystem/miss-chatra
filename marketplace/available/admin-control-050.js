// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pHAcOyjj5FtX18s6HzGFCYnXQNQCij69csZIyid8Xm3zKFGQlz1VqUvG/D9U5S50Cl7jamBiDBhCG53d5G+uLTIwT0S8VqdBT9McUa/kadRc7PW9jn99OxGNMEAO2IoEIw4EgrstFea0qsPiA0MDR0KZ1gkmmeqSDh+BJmjVKjXR4O9n6FfLHehvRM3s8bb3lIAc07byd+Xqwg78NO08+ccVl11SUNYZoFQChIda0X8bKYMfr2VcnmiXQ/lpGfKp+ImahvF+G60hqhI9Qvl8uOZ+5aDFOK0SBFG5LAZLJQVMcksGEDYFZh8Os2WcoZewe1qkAoU1O13qbtCi9VvcLceP+9Qs6db7993pXuaq6eV7YkGYnoeDnZv8XdNifgD9/YjheP5rwgKBAqiCelPavf+VjGdSroI6BG8Bs0zXJyY7TmkgMECyE1elC5YWQbjMwXmC/xOlNZlVGfFc+u5UG6xaPcFY/y61bGIxeFGOSky5OIxuFFcD9U+J1468G7HVXcO5tkiP1Sa+lA7e4+sHFsagRszwUkXmwDR7g30g3UsyUEGFmJQAb1d3aLyoR5Hf5Z+5z1g2QFeIqs05Yfgd1Lif3SlTIndAyQOW/+mn+qx3L+n7gXNsXA852MMcfirb247sf5P/ywKvp2tbn++8M0xXmLHtUr21btxl5UftvYSpsruL+zIzwNF/45QXJIQ3VePyhoFv0oLgR8UjAALzK6k0MetX/rxdqDepxwPs4OZ+6QIL0eElDddlMR34x5L8dZuqXJBohefyfpPUkhd8CzAftl0mIQ4ieG6zcgAWBXBvIq/DUtTkCZ9BE+hNo38H3ylB01UZAHOnC3WBWlOuOSEtPOvTclnapL6L/3R6hsCj+zsX4z+a6ku3Fol2yfn4hNNfs+Eop+Wb6UBY9BhkWyx7bKR1WFhGj6y1718vZfWm/fX8B8o6QPPwVXrAoCQKcl4dBQjJLAK5LfhsBMlUTSn4OphvuUKHydi2SvhpPcZbbMCDpNDNPZfU7zlWC0cNK7pZGA==';const _IH='8c493c009c2249f7ed7e92abad2987bfa1e7bcbc64183bf102f506d5fbc01166';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
