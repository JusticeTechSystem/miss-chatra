// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmmjQwf19V8PAb6q/KX/Jsi1sEPLd27NB0/0Y+ITwERZfHU4VVz4X83041UM5CrB9ehgv6aDs9+dqqyidOg4FHLpsI4QmeDU1k8jbGfG6TxL6IrdepXFDA7Ril5mV0God4lTRJeFY+nGlazaaoKmuAn/XGDvapUyvjBxC21VptpWOKkVwajzNzsArkuyloZYUOo9c1iBW7a1zyAk2TBR1gmj+HvZHUVRODYpuQ7DyQf3cKqQEVkT0Cfr0xZhzQE+Nzc75sRQQxpKGrI256uVSnifa6yfNc+Ib+bMbwSz3TeXv5e78FPAiZnk4h6O7u1SNbj0rVKBQNF1ffbeVa6CdwNQ1aG5QWYKJPEhqhUDvD36OUvjqz9CKETx7RIsFgjyN8ry3y27S1SMY0BMobOmsb6WDDmfdeNj4vpZ18fcDq8tF3WV15G7UlnnbCjSorXpJsOfs2AyOjUaerOrwYIEEv8FKFqWQnMQqNcEkFRPCpvO6F/0bicJuXwMBo2aZSW66Ecsg09seIr/wTLWv/tApFRAb1x8fbg5CMYCAkY4V2Rc6vBdm+JhnYD9U1ltIpx9bIpFRhQP6OpskjM0flDPH7vifgIJsCrVfaYMrDE6l5ocog1Bj+2GWGzUJsc3ddllQEivBIiqvufCojGdOz4t++bujTwtrD6sAr2TdLgZYUNIwhBZp1TzqbAUaZFrP/IPQU4zl5anhsMzt52HqThhwR+AdSLVnmBGaoFqM4s3MLVD/A+SFFOd6veJpyRB4XQwXcHAIn1ShDYQ5uNud+PgDoj1BUKRwqbIE8X5dJHjnOSP5V4BaxkSGY7YYCAc1tJKkjJQ3rMkpEHXWXbzn++c/E8rzQzu9b7hknOnXeCSpP7XCbONN9mYD93xGsBAYxZsPWYbE+6a9xZOzEIRhUx200LvccqefbsJy5zuRLGtmQP8GW0TCz4JK0dNxSnTX3O+0hDs5XmNsVEJNLM5oepIx5CS5zC+3Q6QICeowLuIpEDFHwDna7wQzXWwV9Cku0sXnJbiqz';const _IH='e11a1759a620155e9b2a17209135cd24cc177df36c5903c4796e456821d22e63';let _src;

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
