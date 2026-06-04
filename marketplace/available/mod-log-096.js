// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VoFcQJrfuswQrVjXtU8gm12w5NtZdqLCqVC1EWRdHw+BiavO/5tXMfVGSwP+xHCpCEtFPrWLI8SApR76CpG+uvUvqrL0MC0YGRrbxPw4C3znokMdpLL/d97oB4RsOm+1gnVk0Pio8kh48lAUtdfwAdRe0C6Bsa5o52tSSx6pyscTmSKo1AhwettY5PthanZsShcg5ApKuIgJIDy/F3R3D5g3vrAPHML489Phogft9sdLOUrIz4D2LnowFCT7P3eOCf2ZZjlCAjx9zRrM4ZHIKFlj96JWl65d/kkRR5AvsLxKem5AXs6ebLu2A9dgF69k/FVWy+iVAwXlYxFk93xdRYKdLfsQiNJcR1gb9bAIqwqoitKm824XDMqshqVD8CLD6WbdZNJBKAUKsmCEEQP1pZMWAxHkurmOER8XnLaI8uW5aXJ6xboGDPazTWFy+VQZTssS5LhioWGGULtGrxwpAuD+G3JUgsBJeoDuZ08U5izoUyu4ef7q3MlGT3aUXCpiVn/2u2Y2l4Xj3bmkYtiDQjMe2aN9QIPgcbxREc9tSHzHRUf8WWMNzdzI2RAaN5gYK7DQqLZYoYbTuyv6LFMV1m4/eTybIXfT7JpikCo/HoNDrfJyVyNEGcvJtxpWYEpYr3w4cKDNsTUyVaRVNm5ec7XpRfbRdQZTk4IRdisAFLb+p4NVCo2RjnjNH4G/aCysclOKgBPgjGpOMbUwWGmfuYQjK/kyR/SD8ZpETSCFahch68wGXqvO8O1JbUIfbtbt8UPLqx121o4GCm8/+E3X3J4rxuKFOCcjjOlFRczgqd+7ymCso85OlWGypHDyhAiyGjWnoAx02MkmAVSM6VfH5EdKUz3NRNH1Lp2oBhYpDuEytYwXb8OZHCRMQ9xWzusj+kHoFJmPXjyq4ucYDe+IYnQGEZQpaWTMMtoYOgq02OPTzTPj7HDoAqXNvXkTwiy9qfSeYyJaPbkhNK77vDlWRA3dMQy5ceXzYMuD6I2vptXe8oNIL2HlwNPIH/iDhkORNf6DE+6/UCE4nAJHRwQDmszEPCWratwd8HqV1wBDCrU3pmoofCbZp3myWQbl1HynWuLt/YdLsbA0gz1UDYoqowYyn4nBm2fC7rlWoFlfSbxRsbArLkxE2ZuVTABd41PzYsE2NPw4KCdwoX7S7CAJ53SqfctN036aXhRMazAOZFLafs/WWhBczgn5ijxnehuaG5T8CmCogHa5Svygmi+rBugovPf5cShvngY3v1jGXBgtVBZPQySeGdxYvlRhGZIFDSE53B7hrf3whx0odHiWEyA36Hv2ZVt7aoa1U8c3agxtTsDi2VnWRk244EVVfN5z2hAvpR8=';const _IH='9db70f9560d4706e123a8404d85d62a853b7b84dcf148a515173ba463526b9d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
