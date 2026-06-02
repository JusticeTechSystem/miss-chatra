// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5W2gArhcDxjyvvSy4axbhAdRjd/IR0HAcByHMrsBomr61ycDogXvv+sEVuiCg7eQXBJfILKZz6tLAoKvViPDIeDRyWPJV1igXOtxbVhokFZCwXFcsFgzIJAOoUYc+BWf3TcibFqkK2ZdkjtaUYobqODYPqL/7SN53eQ4nbGNi9IK8zZPmAr5N9gSaw1kNaFpXCnDDpymfM0gZ86ylyqptQYUSXNJKYu0A/z7VzjpR7v1JCo59NsFynAx/SHA5/YaDavcDpSVYs0NJoYMMETmPwHzdD+msd3RdFAu/VbisHxEodOA36Btm8mAExEZSxWtBYBxP381WVVBzMVblAiafeJSOpd0eucHfe3eWqjlkqmcgphyPx3w1Jr2h63JL3w95jX6gy6/LqUmclMsH4cB9J4p1xG5V1GpbdqfAGFerOEbYGL50wZ+yGcV1FxzGGohWgfZAkBQ/5b2ariC6U/azMAiqxMRHuQNHvAy0bkqXMhXXSoDznnFAIE5aApJ3m7ZG/ihaR2Fus1WaLI4CKltnwT5pJbCafcFZToNOWoETgopR1imq9UoZlaPAMELLg3ypoXYeUsft9Z5cVObOJmgQu1wy8jSPps+7cmkKWBY3vYrHjHwh4dgJeVDA/qwDlG8lRzpwjMxDY6j64HCZ6ITBfS7m2qJWeeYbl294tPVgsu7v8kKVE5YcKsYRqa4UM71OgXC053xJugQ3UbBc4m0dgwwft6tsOK+rSCbgxq3wcyZV9aP2bEuCtNS1DIsyFer48P+TTdfcOL5XFwGCvl/3u+vMXLCAIFEQHLlz4mNwbk5Z7q2vzhbcdtyuB32m3kPCTOz6/z8mXSAjahiClJxQdMNsc3adrKKrgbU7niD5oG4jF9zqrWvS6B8naTU8gF3gA/ahFQpHrzp0cfJmoKI72L7/cIzXWm+zHBCpjPOHL5U5k3VsHwqR0m4EaKffB/ct6EE/bCG3dmPIvswJzRZqxWHmWSE1cuZ+qqefockdgXhJ7cPr+h3U3++Xg05K8YxVw==';const _IH='0e961e12357cbc6894968d7c1a91e6f75ac59302f10ede8342a0e6829f35c219';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
