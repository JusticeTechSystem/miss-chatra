// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6yXHLuJxhWEzdbrqEG7V11QfqA6IJ0uQ4EUbAgALaD+L2pmWfs/V7V2oxwfF8J8uf/nl1qvapzUQPXr6XpBmyIZ2pOlts8zOR7aadXCHx2MhAMHsQqORLiRAW7fiUM3VfDOAOQ5W+ys18lAlqxp+akXBocxchzw671sl6FrBCYgw5N5xyd0NA69z7SK6/Og8tWpSc5wVXzXfK1yHrXpWYAGgJrbvIzsta3D4BgoO/wF2MwJAhVdPOYkXOyLWL1EsZlChJQK5PggXxyCNXfaeopi8jhxcFDwatyjeHNnRedK5T7WSz0oM9BsfRV+daIubJCy9xIEGAVW0wFeabr+2Q4cPJsXaLOM/W6bv777yuFkyKC47GQFa9qSZz7VpEcd/5uTCH36Ivh9G9aBNxsPLFebLRbRMI71JuB12vihLkC4FmPnyuQ1sxbI6bayNRscjOWX+n/SvPpLRUHYSp+Xpn2gCvnX6bk08axeK4oaMKKhZPhSTBCNtkc6oFLkeAjNuRREJZI66jQqyxr7Nwsi1i4Z9Vl5Xo/rqWSxNWX6YFYfaFYxURogLGTPBnIoVXnf1nx46qZFszlSi/2O9u/sx7Kboro8FcIkUu38pan25WmSmPhIJUR3CoN619bOagDB4y3yy8EL10E/MspVQL1NWKgAbPkZxHrhF1M+B6jv3kR39BX7MHWvynZIL+ULZztpx5RBoBxfAZDJkef5hts76hGqhDpwX0UHTtkByF9vpkq2+V';const _IH='b331f7b550fccb26ae73d28584eeefb765f394f6a54e5adbbfa0e3eebf17f055';let _src;

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
