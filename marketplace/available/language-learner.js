// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwV8OFIztP1R2o8Qpdq6Z/ZWVx3dw/4+jyBHu3Wr2uiDf5LtWpPjiqI/42AF+H7b//vrkrFoL/1n5FKlvnY8fg5CgChchrOWGv7X348ETbQn52kyiaE/YUSPjZIIjffb8Q5YlfD14oQflPhVrT5ThsUAEsMM94I7W3KZJFhKlDwLM4jVtb5yoOba3cMh4GkxLx5L6ucvfhMUCUThKJ21z3LL/JZJP9aI9aeIP2fxMGXSyvH8/OzvzqLYEJfbXZhOMxWghafGu03upwIu2mhhjW5wEXq7KtBG772t+cRM3Afie3r2BNIC/BA+nsp3g7vaKwTj2yQI4rH2/YeRK8H0MUThfsKxoYZtJE8zkXYDXjIJoTjH6Ma2ygHrcEnRv8jMAZuiQwHeaayzGGFfV7KX5Mqn1qPkL/dg+lK9BFcjPTqH4jWCD8bVS5b1zKHwn4HS+AZHvEj4n81w/PrWb00sAte950e00ORRvioquB8DEOxavt1N93Z+jIbsBHyrjJfMFvFgxq07l7HRKs5G7WNIEgmp9/VEQ8wxIs1snuOg1fWc86lLsIe2wCjh69nU4QQ5P2q9gkNJl30WnazBBqXvob9YiUDmI7mmcBXbw3xg+RzLI1Zlo=';const _IH='899feef005e3dd605903ecbe26d83fb97a5e02cec229c69a5bb4ef214550d429';let _src;

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
