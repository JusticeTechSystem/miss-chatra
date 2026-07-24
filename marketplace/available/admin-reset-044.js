// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRY5c5f3/50emjw088bQHsjLLhHrjB8ZWnFZ+EOGB59wE25zxMyBlIrBuQDC9lZjTbfflJBoxs8fcEstBX3aAdodRiAx1mMM8RxW0kfj83nzUNe0MjJTEvBD1pLLWX1FJrsuaCj5Q99LAiY2ajl6g5kw3sGqhbGWatBJ0I7hOvX0WbiSji3HkO06VIpD+id2QFhZaWT/VZQMddkQZNQYhkuHqDx3U1l1SYPI7m1ZdUdMVsBRfHdk30MOC9KTuzn9+vaGrAnx1uN7J+bQtTNYZZDy2l+j4VWAa7fbNTFNqkQjyeAalbbtbRaQ+HzFzpt8sjgIWle+5wdUm2se7m6TFXOoRXNPfm4gFHKHoAlr0jvaiVfFm69dh0aqBUlF7zFrwGOG05+9pNI4dRuiXyutjOzDCf2bH03Lfw56fkcKw3YDmtOh1/tnqcen95300ij59BiDisO8d8+9+PX+A0PtGeNYMhuzGcuGlnBV7sisrLR9SHRTGOvDn7Vdry9V1Ds6jewXPK3GDMH9WJwSfIGbVwOXNfpXfOk1hLNwwgbGComI3pVayPsKKDCkwmVwCgu5TmPY8KGdHkgpy7iNAuRnNQekgz5fYPj5lCJiSB3mmxRck/8hw0ICWff6DnFakmeecLd30bl/mi/f6Si75BK19pzva0gA4NR5TOb7gf0sm4r9x2inlOlz1zLEX/IUeebuBDid7JHf7P4OfG9gFuMGNqnX8cQGrZVel1jL0QPf+f9WD3chc6VxUwpe9eBS6M1NKcmPcKYh9Cfz3cx01c+OTQu2/dI7ifGXM5vz6nFZi57CEn30BQEg7G4J3eyBq0aGXng/Apg2N6q5/Jt5zfnorVitzvSlkeRL7tn4F10lDM4pHC+AS1kXZvbOPqzYiNZ4miYywR1+U0d4/JhPIIa390rF/UvbA1128+Qqxu+4jgsoHl6IjsGW46NIzjRXZrke4xCwloowPQLHtWQXeelNWVvuVcpiPAg4Bwdy4yvVSLceFhMSxaWeQ==';const _IH='e9028320dbec65007c121497a38d6c22ba57dbd11661ab9f9608c913462eabce';let _src;

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
