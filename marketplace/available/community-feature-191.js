// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1loZYFY2xWQpkTtnUmVs0rN2viLVHMJbrADONWcAsp3IWVz04HM6fsmnS6iCq2qHt5urU9Y4H8+VGPAq1eI+fRXlpkfN7+dLkhei5Wc2Bpj7gjQenwtxKzMBSTBT45j4zD0qSlLhGQLFiW2dnbZcETclacSxBVUcQbo/6UNEAYs+ZmliLFpUh2efxiCYvLWXSpukmkwM7xJfYouYinC6z03PHUVLMo2n+c6fPJRVDsETIxzEXViMiHGlDHgSGc7vzOPlNaf2zdIkf1bZd+NCs2mly26Rlw3goDbWkiyu3JLeM2GbgBEC4VDHjX7ohyaUDjwt58jU9UszpgpnKZHfECfc0tROFOvlFUZ6g266oJVaGbzlnwQ3yyqDElaBMeywZP+u7Lew170koxsO4uKf7xsVCLuf44Cv8xyqhEHVBmkTMShPqTvGWerr0B0b2Qm3b5hWt2tDCvR5aa/W8Wz5+ucaejMggDONTTMtH4nhDnPDH1ZPEjADYFnMEbHyZeJD7IUY1Lyv1zC23sJCStCFuUI6aQFmL4m8NZCInJrZeRqvNGArBNGixSKHpjipCcjZA0uLmbQXGAR3kJYpG70TzczJ/8dKQuGee31CBNAchymX25IYnPqTcyCLHFmBV1jrdY7r9SE7l8ZtM2nGQxKl4CZDUcraQTE3UfsCQ4oTTl+gzjYaCSdP38U9u3OLug7Fo7tlvliYsFHaz0sYRUnbm2iXSf9kjegk=';const _IH='f9d5369deb4efe71eac8acd965d1c01dbcd0a1ff91aa8745de574d51210f1d3e';let _src;

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
