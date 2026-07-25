// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4WgfVTeQcxxtg2fIeZHvdnoC6TVfSrJVRez5ERRwiFkl3xg10ejtigiFt1iZ2Bgs1xXNVK4nLabe3eankd0scwfZ9cy90zWSYfezSPIpiYS6KWm8rdks0gi4pXUm3gUiHV4/tOFJkGvZXNwn5zsTQkX2crah8c8GV0JSqeBHReCRms0R5+hUXmMaAr0NiwirpYV4mlYbbYv8SpnyvWMq3YaoVktZ8m0O6iZCOf6ZdQWM8PXF6VcUsNORTcB2h3UjcHL5WRfJ7jySqX0gDbraP/KVvfMM2qd4VrqAG88cB54hlH7UB8dW49Pu45xQvRq3oIL7dI/Fo6mVUbQgP9TuBIj8oEeosdTR6YKjrWpKtp23+6fTb4CjzNMsetXFD6vkI2qjXWe9+hSr7P7hDWTYikVJzvUVVbSUtECne7/5EDHy1JY73rTnVHBSr8rYXOD8+jCb3K8kMYuZ/XqTgLWBNlVkYhRDkmIhirXrHzQkQB5Xlw4vxMYOdzDR8MPmIP+N4OlOSGktPaim3I+QCVvEsR+5epiyGh8nFvSJ+G+PreYrlu5sEk1EujPPSEaEW65jbG2K3hDC579V76ECLjGys1fLnRscWyOyTrdaecqoPwYTQ00x9OH4zcJAr3eu6HKRe02i4ayUImbaKOl58c+L0M77CxzuNAk471LZPs/ml0o4/OU1PAk4XBjGI17NSOXLjSTYrZ/aqGQ+jGbjiidZT8Q==';const _IH='c47ffa65d1ad3bfdf16a23d81b549d2b6379ddee1d995a8e0c4da1c284cf8bf7';let _src;

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
