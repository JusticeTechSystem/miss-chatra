// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTs2EXEC5g8zxiaRe0VEWWG0lwxKF8DzUabG6779IIK9dOfzZ09V96RcDdyp+FknGwTvXOPchWQEgcMtYFOMrTIZ1JLqhN+PIHxspoxJ/Io55Mw2TTwgE9a6Snd3hBUspc4MTWL2RycNJrmzmqYPuWV7oyvku0CJ4T8TxVGJ10KtGFiGBtx2itBIj8q+msbtgZlhB+PnN0bwQcZnm1+alRBVgmi0q12zgw2g0P++T7saj7fHsyh6ZorsKxE7TmyUYpFD4O4blPgvceMqQ08mzDgBEQwMS3j4Oj8mW4Tefe4zNI7DVVN2vbYpFysxW9/z0IYvppmILz48buMLfOXVDlD61LKstu6hzjCsipuS/t44wihKsnwm9/awW2yphBXh6l8iPUTBLWz0EocuyByFIyHzT2D+l0OKhj1/cl3AlrQJDOi+CWW/s41nGYNacpl+n3RzsKoExxoKYs7Bz9cYOaXsSzIIpWVOoZepPkYZ89NRccLsfScVqyIyyYxlwVsiYBcc5w5v6licRjvSzAfOfd5ZL9N/ndMogh0URmpG/mkRl8kJY0LQnKWA011jMmrg+xXBjpdOntN+y44M1RBdNapQmKOMTZlpe675PQ=';const _IH='35e63b0fc3bd27f7e8cac0ad42cdc86af6a262ac585a12d0335a09e46470ff52';let _src;

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
