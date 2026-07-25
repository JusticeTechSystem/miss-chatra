// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQVlPb4bUjJxMdT4aVaZ47ewotK2sw84sDzq5gmaYqgIFw3PEt79loNUGOf4sBB0jJVuLxn+T3L+HWQQwQDIUzutuEixPAh7gwsb92E8gvfA7VxVSSVJEfF+MdSjcvhPf7kNLoZBGvWWnzncNgJxMgHAyxzBNj0XjuMB58uMdyi/KYJ8tFvBad30gDYNaqjCyeJdclKqlDLof2XVfC2g5C41sWkMACpNz0KsZztzjwhrd0dPVD33oeGa0VJbr1t4Uj0rpKgAZRYeGQG4U3kWF2y/3hI82V42jnjkkjyxnAUw10cg8MCdlomt/uu6oO4Ay/XZAjcgElBRNFkjK9PxTylWY/BFBiS7NdoE26FkDN3eG8/NDJtHbXx47wl62a2uJVGEw7Z7HAfh+6nrAzT5/4BaHoMZ/UHvtMIy9tVIOk9KMxkZpPaycvyYL6Ol30/JuSIjBnxbiQ/jRTqBTRUVbfPGxUpXmR9AIcOd0gbmIt/A2JtuyByO6hO9JrU7OvTnDdnLtMK468NMFYVSLi9vVjijwElG31fVFWa1IPR6TZf3cBecAaNGAhGDtC6HUJRZoJN+YxwAte/DI2bdAJ096kOnNmpXChmOvtYeSb2A76bTS3qXlA4ooiGxvkNgDT3yjadvoOTT8i1sJngDmmABs8AhomaN0N3ZnSD0lXuio2kr+6pkUeAIWiPq20pgONFPbKQS54PU3xJisyDq4ciGq99OqGGBLuLlN/gpYYg93xfmLsbgCW3+bLD+862/E8wMDhm7uV05yE67Gm4LV4a+dqFJ5I+56dH/kA1OFQCEukRggFOOiOz4kKvmRkxE25LtlOz940GxFtH9e1Sm3ntURmZV7Ex6sk52TD6keAInL1s27N7tQcnvFvgBLpy2x5z+XQ2vsr8kAfVCJfzLwCCNJ2abXcTs7HS72QylhC/k5cAaFo/fp5O3ivFO8GBYqz7PQLPhDnfy+NslX8jFcaS0BfkqW0hDDoo9xgdkIhZc/3ZUn43lsZQMFQleEUu2mloQBdOppj0gR42x6V6HR16b38ZgI=';const _IH='ac25ccdb19c8d7c76ac02edc84a4f9852500f903de5897e4f932202cee74371f';let _src;

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
