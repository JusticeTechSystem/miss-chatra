// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xWD7Y76A9Fq35kHAKnes+pV8sOHtr05P+f1AkC5NAvRNfHg5fSx21wvSGjAhc7tn9AESedihGYzHkn54IsAjmx1duxkxWtMuwMTe63dVpjAuTwD5xohhUFby0AF8XJt/LNBGEbliJlHndKctN2zMmjQcBBaDjrMdo4Rvkm0b3i8I+E771QrzJCRhF15g2C02OCFAQYpdhLFiOXsHaUUFKT97i4sJcXtzmNKVsiswI91Ne15LMF7gTA6S037j1Rs3cuIwdXVDZyzdXLRMCCz+hN/tU7RLo4eNjZsM4RDbeN+VswY2xm0gJuxe/z9BeIC6gC+m3aK/8KjlpZY74cgeOH+FLUVlK4eVIDr808dTg+FJER0hjDw4Mb3SkpFjJ6OuX5dqosSW2Wvo8ez4PvXVO9mLNUstSd+xiV8pq02RKwzTIMIPywQvqWXIUoggnxKRQlTlU8OJ1hHu1zyL49y1I03ETBxxE01FN9dT33+nHfEUEARVihnalkYzOUqbsmA6F1dODD21R0ihrPnZIeBO4vmkeRU9M1nrk3BLCcl+8D75KCaywofrX2jFY9wvTnuyEZxfSkanA0ZaIAnqrsEH50ZNnBqRvEB7qS0EId6/5CAemL5xMyOxmk6Sq5PpYPooBX2EcrXkKTEeK07aAcJKNgNjh0DbGCsu60+4y49VhIxk1pgaxg6ZemawG26nppxlYzl/1QetgvhzOd5+qh/vURNDBOl3Mnn9XpmgVtILDAmI65oWyx/l5WcsS++3FHTg2e2Efq8HUtKgiEthDnjZST982E1lZvbsEQQqZ2OvU00T9q/e3fgLj6wJfOhmOjmcV3bMfmqAI8GH5iNDHwh6tt6d6eTyM6QyHDhItXVZ8nJ6Vvze/+sydA8pLVYQLU+fC07R2gk2JN7VOZZ4qN5v79zpcOJWUldhkJDwTZ+4lbffUG3/Meft/WuwkDwn1QnJCg+CUeLs9cGCWo2df5tIatRnodl+0O2//99vI9LTt4flbvC/1rvFHZPnbc03/0QKlBbErd68jbQaGLtlaENOoz56Xp/tAat3zfkECdDx1GIzX6RhiK+651vkWRkQWjplFRCYh2E4TD0hggvVi0WzMC3F1dQ9zCNM5xjeSstYwNujiEcNvbpThuRvvhFTKWVrcvo8qofIvTmCLqkU0cREgoYuIJ7nHSHb1x2y1DJzcLppLeWEmFnyBa9rpabpyInFDz5kowsF6Pc8';const _IH='f9b6abdc14d8385e05435cf73a4c7f2089184f364e26ae6ee611050a6a2811eb';let _src;

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
