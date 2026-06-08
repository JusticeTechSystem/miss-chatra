// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X7m1qtS0hmWeVqAyf2V5s/bU9AWt4kDCKdW51KwoI2XovDTcyoLgRtS1yW1jUxeG399yKIUJKj/GaQNJ+Ii/i2EA0AoFzN5I4iMHzYMEVsw6o/5fYFex6iFfD9MNDykg4psLDLSnVAEdUck9/KH4TL7j5HZSnJT5d7ZBZOgbZBVOfvj7PywtmNT3uvm4cM/kYrP/NthMgAMTMCk/cOg/FEe9KuDlrgt8nF0LOvHpZndVSHZHZtfeSGHxXxbPGMfzqih0mLD3cHt3XD10TvN1h1zwFMla17v50ZOZ50QqdA2JdMtFpCjXZULS47dkF3k95xOvI0VkA4RtGODbzmwe0GdZDV36KU/DfISU1YNOjG3llme3ySwLkRvH2SXzTmfzi+KJqO8RWqgRPp4ozHGyktraeHsnHJqn4Vlz20m/Dp9zZyhWUvw1wA6rFTNHRBC+NVdagrey/9jPVr64rwUrQyvd4+ETUl3j/8wO6NnLfVKMBfLwJTgj6UqkhyBPSMX2MghyJ1GgQQx0Vm32Z1a67r4c4Fack+rCf6orDP8cgsIJTANOiizuY631uky2t+3nWrbL7QP/lTSuYbRO0e0TtQmO8kI5xMUcifTdXfFkd8dxq4hLOZeEBShGjuapo8PS6m9dcijl7/VVDnKSr1WOzZwDA87qZN94KLIPW1LZNWTZOfbIjF1RRjToiG6u3pPiqIVR1ppHUKT6MR+ko3jkdtRVZww87aBgZBxQie0=';const _IH='490c19b0e6eb039de35e75c25f712f8d9ea0d40de002aae3f4b6feefd555283a';let _src;

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
