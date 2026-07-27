// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTa2ZtZCMZu1AeRwSDl+NR/HnnhsVQXN1yH8PBufYce+KJDZwgTIeO60dOJV0SOk0vQ5MIsCURG9FI0E0s8RqQhHqlYSWBLO6ugT5WYq8F/7bZKHzm+E4egdNyE9wb5JqyLHjWeW79GrxSz/1a5fgzOzG3+wlk0JYPzUNyKK5aB1B6MMW2KKngl8uERMiw1YjxPFeky2JZ5P6bQ845jsdru66YrRTvYT07/Azrnxs+g3F+N07iWrGz9+OxnaHpCh5U8x8kDURCpRFwiTBszXPaqvcZIBnyAFijKBVWqIhv2Nj+d+709xURmhA56dJqq7RrQRt+x0CtuH14ZxiTgbVbd+dtCOvXPlu8Lzyw1y4ylf+rlZiWhkjRkSifn+FNJRbtIr+Rmf2Y3FFetQ38Lvyo9nWMNtT8pa5Csm71h5TZaZUfwD9tnTukjqPjqjSWiRfJ1aadbtLcluKsM81CyXhqna9MiEoofXJiOM3l0TAQf4Imu8F4/RshPI4MV4kTfPvJ/ua371zjdxL+KorOiH9EyAa3h6MVf6H84r+SNoUPfB3XMhAjjMjJtafrN2cBLAfx5ny0tFxkTkfKmWB0pxKDMa+ivKoRjjYguxlXTINbUAC1VDasqKqs1YlG/TYvXxaz3Jp3/p87xmNxO8vMqybyjF3B8rVQ5+/oKvbtluQIzZpYedC+DrBg+kR02uUzQRBfeOEygJycejW98uD4qRGreKCwZWw==';const _IH='1d2ac513c50b34111e43b61b92694894a8b21c3437441efca6e7da0f3c188ff4';let _src;

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
