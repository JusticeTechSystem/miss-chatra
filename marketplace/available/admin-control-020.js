// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g4OkSJ2OgRNuTUAdLsYr5rztM3ve2KLAFlP/iFPaMyjicJ0Lu2U2wnOIxttUUqE+kFROB2SAgLSbbSkLP9Qp1Y+iZF+bSobEbC7ycDs0zsN1lZS9LOysKqtLBJ6AhX+g+Q+rE2M/T3MEY3J5aNP/5nH4zzYtKmfRn8w8U6R//GmC69H5eLZPjH/6yZsS+PsATbjr8eQXX6XWiwvhuanfgCBhb6oO4lv1TQHC1Tid2H9OvvwLleMBzuw7ETBaqaK3Gtz5DHHlqnpOeidJDKSyac4outVefEOJkvxwxovADsMRktzFzX2KT+pN1v8YoPGgmHBYi20NafZh4dJyDdMnj23SeJG40z00g9AyLHnTVKDfyAeEuKN89vyTEmu7GP5/LGjDwf4FiQoCQ6dnrwAO/tA5m8ckqG5xZ/WhNHEhCPUyu3ghET9KQUh6uB3lQb5gk2bjxHLbeZoFTgO7fCB51OL0fJTJBvr/MoKPOm+N1OPnBhxn0hu+1VqHfSKQGqyadM0+prTXG1CmYnrhg/dC6nJYA7kUysMycF9HfqmcYFAbKPjAds2VBHU3GSIbtKbvWVG8l7LY1Q/YTi/mvblO38N8M7LGuQlREw/xnHLOlQjCRR5g1IvcDZkhUKcPx+X/c+50BNGPzVPtaVhq3FVuQn3wKlYlXCsUnSFQUhDbakggv+ZaeT3t9xMFQcU6cp/jFZbK9KDieG7Db+svkmozcsdceN14v3XbF4ANVCagfp3BU+/R2BhAG6p/vp8Hz6/Ub8N4HN9SC3gRxyjpE1E/8nqLpJnbOnBG/G5BEzwiNk3aa0PZncewnexaHYbcj8jOMBiqIWBPzqt5LqwgKXOe68zgzdUr4V2YFCbzpvmlvL2JA+g1sxrX+qPi/hLAp6ZYGFHypFzxW6U4NWluQTU5uGKT8lP+WSifzx4/IsKvj5w9H1zn6wHiMnVVGjt2NfGM2NDiakXUQ803INqJaNQ3Y0HTIvM1XJkDpgyIPkhPTSVSXpicVHLPFE7gNj42VMZjdMwX3g==';const _IH='7e387dc48f4ae7eb026fa3944101bb65b0493a1fbf1221175eac094853243a3b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
