// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLfvWgw/RIj/gem3hA3+mWTw9h70TwIPfIeCZztpcBqqkwR1opJRVofaj1giCEuM6Nu+PBwcrIFW/PHw+pKvPc222hsv4pc37wrqvyZdwCTZ5E/ocEVzipWrcd4x2c5AYHLJkdUdXOGNrHQh2RP2z1NLTfl11ayGPt6c0S+cejHGIrKSdIhjfMtsZ3Eeq5yG89cCQtB/Zb3gbXtxqhSdqDkRCt3WaAaTg9bZTlAjq+bcCXr5L3t5Qjsvpw3sdGa8LyQY5WNfEfIQgN2PdF2bP5TPXofV7Uh+mcvwAmjllpXiaGycnvqBBdzlwQX+mdCRzCqLxcn6mtm1B4zfhxcK2t8BXo1YfgmoRXfKQY5WA1F6bB3ydTflab5uMP9TDEHBkn80NZrQr6o70V3YfG18NYJr9RPSPEzKQ/gd7Fp9fMCUpl7KB/wS6JnogmUoZHWhys2c1cX+ys2lJTZCuzxmyFHaqqvnytVkCO1/O9cVyYV8Fxi4Soii75kV9E7ZhwOMFWyEyLa4Hj8sSAaSZD9mbWdl2FDrz2AFYlHYoHfjwaP3vxFqYVm0z3DeVtEDeyKgyQz3FG4M6BMBYrjpZ7y0gCk3O6MclAKhoD6lTezUpUPv+GNdby6YpsPCTuYonMDWZcsKeXt5Drds9hqMUbsuj50NU8opc+VWCGdmb5CDkNSCisgM6QXM4XjBI+X2ZKfuGTKjL+BHkaDy8/iCKb9SlEyWckrU9dWJvdoB/StikUPbQIbg==';const _IH='e63bf0c5a3801734ff86fb2c3d4d1220552ea462bed4fcf958e80750b274ace7';let _src;

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
