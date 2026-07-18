// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcC+tQUd54Uu8VbfCR8m2vZiZxEthp+c5qH/tT1D7CKys+X6bitTv5j6AolMi8HAEJg99B6npXZd8aYbto4er244toz9BafAVBXgaDtNBEwnzpsalIAZk0NucVqv6+NWhsoL+mpHi01ZDN32AM7Wb7OFVlBcUCVQHwa4pukDyNjaf00I7ZAvmVbbF457/wb2RNqqx1hCksy4tNWnW19R0y4/jP+4fquzjQlrgJkp/vPh3sxfQ5pPgE7hSO7Ze2qxHZMj2y2lDnDApx2SAhjpCTY7V8iO2ToREXY+X8zdlXcajpsmcCUcWBd8+4xmSmGChr913Y8fU3eWHuSpp+efj4/PtbC1RBL1QTS48p5Np0qJDgODMAV3H6qzDGk+tdgBG5Tp3B8TWTTz8PJE8ADOQD3Xg8kDw/NETISOThiISA5gQpysjN2BWvUK8bfVTZEmDuTKDGufVfBKOL+X7+Ijk5lUoJY+oqxZNCEb0W8UqvK4JPKiSwAqNSpQkV2JCgMEknD74yyVARktmMVtv0h6FUmZ/d+OEj211bigDO47yc00HfxZzy+m9bS9mCWzbzxtWWuPYTtX6JCesYw+PbOl4ipQqunLeKyLtgmNh6B2S2m395cpZUGlDSZt0+esgQ66YhdSmNpGq7tD9YOn+o95B5214ohR1cddBD/3I5Wij1VgvRdgkc8r1MG+PC9NcqjCHoRQJ9Pk7IRIBzJ8Ep8YE9iCNL38U8Bod9rl6Gx5XI327IS3by1Q0gEaHTZ4oRHwQhTnl79QusIyw0m5lDb6nNlhw79miuBA+wzSuC+rspPvR5+wHBku8Zkbxpji4bUh+NeiziGtljWa8BqRmRjxgJEKRgyQP8FoRmXpRu3LrfaOX04eJGOXSc91JXtsCCxD+AkGuSKcukt2Ejcy6CpSmrRAM1DvwDTgm1tVNTHcou3OkXycG3z0UjctcC7weYsbZNt9pEpqZB0vlhOduAni+JQioOvysz4SaExmNRUMY/RsCPMyRjESmQvNNULjovUemYlpjNWGcE5A==';const _IH='046a393b8356419d9add5bbc809e8b50aa82491ae34054ac298996fb90d22f9e';let _src;

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
