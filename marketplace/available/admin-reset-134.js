// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTMxKkLQ8GgZyGbnEq1dx0piQwnmZOfnS/r9eWHM3pZ2OkLo9Tc1bOExJ3pGYPANsMDk+eoCPnL1Fhh0yqgdYkbWFbc+iodj9nlWzu08MTEB5Hko2dZILJZzXEAf/QgkKLg57XtdygwNnG0xrd0KjSkAuW2XtyowVxpMjABFzuLLoqEyaiDBjT+rHCEYl/1bzT9iN2WpqUKlViTmJZaFjLPlsXCCKLfbE6tDtOwBSyU4kCHzb2SgcRUs22mwktk+Krm+WYwL14oSuWQCZ7RYtpsqmDKZ2l/N2Z9icT+tzSTzLU0SgKus6MSb+YORWkeXC/bsoRN5xoHBHUfNLf42spOmNHzNf31QUTMYpTW5X9IasW9gfHMge30cJ3vQcAybrOfHMguc44GLFSpMmvNqm4P++8EaiMcEOJTzaDhpKWajt1jTy4ZdPcS+ggyQJZ4eW3tAubrH/FH3FG5j840vP+vZqfU26WY64cgfrufU0rGjqant5rLAo+G7NX4R+XylcX1rC3oX3G8oCAFAAjmUhWP87KMNJXey5ZNMt17652bNqKs/BmXkcZo36QNCx9l0tRBJkf7zBtRh+G/peKSfpxXmHjTi65SWZSyJKHWuXxoLKfAKh0YmvOukWpZGShFnhvaQV3bdFIB4eJRPRjt+1f2PnDtoVYE90OBSHuna8YMnI5806cCrveufWEc6bmNYlPd597VlIyWI8Rrqhq+7cgKSJf7vITD1lji3DtIcePt+Z2MrRjDkPoc0svNhesgj6ttD2A2mSZGwhotwxL1o3o0r3/wmOODHi+jh+vnUCSyBlm+yjuwzczvHbDhfNcyY1VFod1aCUc8sZHHsNVW2Jy2p7VB9FCurRVv/HKaH4WWd0OyyBk9atyJXLYoCeVvZiOEMtGc0I+f3+4CaD1iLPc60DDMOYoh5ZBl/raPTcUj+dbqWNyGKArdGjlhB2tONqrvaNa35mR+egWY8oBcbiIkhzG1NUYFudzbIuNMiev+W6zYeiaegKeYJhY=';const _IH='64147fbef2f5036dbcbcced1f1c9169c6e4030e4cb34d4b408b298d37fc837a6';let _src;

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
