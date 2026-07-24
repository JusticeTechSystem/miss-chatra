// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRu8KNVuBWVj2DvEwV3uoHIufEXqhYGI2vZYpkbh17DQt/Jq70Hj58GWhzMufEQQtL5b6acuUzRcNUNEnFFsjFyOEvZffGZFChCzSoaJDeE0hvNpR86yx39ez0/fFpa4n4YU7nYQFBNy3GsZmqZevLGBiTPWJnMhlhBGkv7Q+KX+B5yhYRzYWqIkQzMMfRXIC7CLM+SlbH176qZRzSEyXemvtXuYQz8vLDtb2rEntY8bmR8Z6jkrhHZNOKimHzD5MxN82RWdk/T9I0MwrljydcHk0SiWTx62prK09mooojTKc1Z0dIidqWL5VfYbcQV94Jn+j5puOTK5qs//i+5THzryud3SVI3fx5X/J4VXbpsU3+tfgnCdhDOPeQnTlarTkKGDjLWuTSiGB8/5mya1ssm1RHdB1ybQEMJS9MXhT+yIeH3ajjT4OeQ5ueKLikfyrSsvGMpwwk6u2zbOKsvWn0ffscyPFSulhX1QNH2bHjKva2aBKAfHkyIV13HzHOThTtgQcZJEm2Lm/ladg92vV03Ttilf4Sa1GjZEw+ikpb/95SlvMBF2TjupDoWIZxTIYVeltbD12RtPDngSA7HVNFWlE9s7Bzr9Fb3a/Pv1Nivs5SWyHStjUC76zNPiN64J9ABRg8LDrhV7MBWb6alo06NSdcdGTKwqj2qO0NFuQxwCeCLY/2IIYsmkq80wbwYAcb+Fo2bSvT+/tgOJn2BA7hUcnywT2mOFxWISUoRnTur2pyP0XxTVkxw4aLYR2r7SWtZBce9Ub2y2V31BQo9uMzk7xYm/OcUA+6pZ7kknzplDiasa+uheQdhZvNXOponqPiu0pgNzIDW6hG/FyyLVMQdlFfu7V3hqNBNRzRNMHaI/hjL+V9aTV59NSOHyd5AlHqrBqIGvysQyQzzkjYpj6wvtDD7jrq+p17Pez/e075oFfIk4EhF5aL3Rr9cXaLW2l8KItgJvQcta/DWOrotm7HLhI7cqSIhz0Lnpf5WFRBr2gUPql12Eo5cMB8zwmgZ4qj+kWlwY3J8ArRP7sfKqM+gplWTYPoarJU8lB9OaSJ7NVCTrFViyaDzAtc3neil/VeSkde+CVe0iySwfZbOIj9BXNye5De2rJF/WrQ8h5VubEetWduizLdeKmsG5XVo97PEQe1H6m5Yi0UOyTdIP7mdPUttETrFAMTJdZ3Zn7Mqg6u6fmJdl7C1CS/Edb8avlFm93OOXh0Z4PcA0fSGDkfLwtuIKv7hEICUw0pMwmFKGw94h0GMFHXYQHjFtPFhFTUCNbKGqhEMyXpjMdMDrq/lCaNQLXerovSKc5PQkUJx5ZaszlqEvq9s1Q6z4+40Hth+zBHgLIjlfFAnaiTkXpTGGbELVuwfsLw5XEC/DEw3ErsH56p12HReYGKELaaj5Es6Li6oNpaM+rtHw4q9lahAZ/3a+05WVWLk5UOzXcINFGF9cdjZmj+zAZ/wrIhIrs8cl+Rk7pbDt9Kf1AEq7EdhEVqqFnz5m5N6u5LyJebqs5Ydwh0gJN61wjQAysfxPcVfalpXICykpEF2QVzNsTdG9NEXeXXESBSMZ5qzhe+znKjRJvKrJluBVdHicPE/k1Tn1+C1wzjo6T28LDYE+gk5tM2FooF8pXCxTvLTFk69prbPVwN+3QFKWAOmDqdoK6Tq1AkLpH5S/9aer5bBMb7+bNItVDsDqLUpkTpu75XcghFQWjG3cr9cBjyGd0FUYewa55uf8PikPbxzeQLq4/K22L5gTwXQf4pbq9PYf/F0/lqWS6jkR7GlxTzaSk8amemwtuew1VnesUAeRH7OcN8C/TD64iBPMdMPuXAh5G5onSk4heJMfc+el8GxIgDcWY6xOmVH/e7V78h2Gca1ZEP6hG4Qmk5Q5eeqPnBBZcyvbjJKr32ym08QPVXRa2a/ikR8HoD+icAXhcytUHaKUFy6ybjSp4GE40s=';const _IH='a8771797406c9a1ed1059f2b6ce11f7dd0200dc3d708e2a8e5fe8c2a61e0a763';let _src;

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
