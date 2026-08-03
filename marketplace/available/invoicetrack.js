// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFwoR+7kD+KytxHTimhV10oCYZ4H/BvaTcTP6ZCqVE1pDyuzXZzn/u+ZdC1740KZdQVusnuIORceVafPxv5xDxHmflJCQ8fP9mg41sbNw8k4jRlCWfaJAKdPJIwb91MInSytCZlB7OSUdZ1145m9VwfSHdoX93GaXfSsPmA40rwvKYIo/mQUD49QK2leLVBCaaoV6sZvuapodSECeIZBLRby71BuA8ybBDWoFs0Y6WxGF3OLXbxa7f7jLfpFbiWaVsHrzsB280pK8WUca0vwG2h1lmRZejRGbsYfPyKIwKUOdFLaXrfMJq47q3ZntCa17YNdQinrzkErdgrIVU5zEhdXfMcHPIBfwshEeGA+HUezB62PRs45KFtXBdGoRTyJk8/9HT2DqQaiuL0c+CDF+EWTPhO2+vhkbxoJtfdxayMsWJVNGzzPzmduvyO8bgzPJC0IXrKiC4Rms5yL+FyNRodzEEaui1hab425+f2QyT5h6CYr9GVlhtwkhBPCIS9uhj5TiIPDguMjzMr0KbWGjyPzUam5FwSROZUNAajTjCF76Cw0IQqGVSsefYfXyOXggMljLO1bBPd4MjMhYozH6gULx7UladMRDolTD/n+tIr9LXdGt7n3l/IRRk4584w4dESdGiU5qfpN+GKqD9QBW4C8U5hFVKOcc6bjWFjrOQXLmXzd1guY3qNrvTqBtemJyDQaKFg5icw4cE4Ra2FlULOznjNdQUEaTtQxUoeDW+iu20mGDJY8MSyMHjzHEAZ/TBx000/YkHfEm5WrRrmuAsVjn39dj3pecYModJyVV69B4jszY62t2oSbC2W5QX1sebbGaf22lGZA1SVHuKaIPBHtiKXtJzLOSr1L49WnF1v84LDHC7Z8Hg81DL+rwNexQb2HTZdz4pej5PugvzSU7DAPwXR4OvKTTFy1SuC9vNvpUCud879jbr1BzyDuhCEYV1Ov9qMjtMtE5hiV0Wnyn/7AguZmhbFe9VCP7Nm4R6JDvP2smxc51if9v1Qk1K5khiXunH7Z5aFTDORUOaZU2CTH5WdQ6e3NTejg/QgkYoaVwfjIOP/p3vJ2IH8oXTcYo2/eabYZgAoAszfM+DSud+vwGEdz4CbMKCN7I2M1tA6+NctSl9gCRlkKpqgqryuHCG7u7pCa7IbcyTjhpXA3E4M4QguZuXy94ZlipDGo6Aq8tDYxgXjLrQTx8z/T5Q8E/oRU3l85zucs2jWKdY';const _IH='87b917907a71d461ea65aedf39e0f918a4f83e65e03d9831cc70915c252381f2';let _src;

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
