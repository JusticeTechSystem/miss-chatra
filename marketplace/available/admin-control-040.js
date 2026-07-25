// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdgTm4qrs8K4rZuHBPPg+z1WbLSfJfyWM1lTK8aJ7f2iCU3ZqFRih4AYxmlYfApqm8I/J7I/aK0FyfV/KcjlgHnIyK2wL6iwWhTIu5cFOU7iyR2qhCsyhRwmrxzsB1cjh17NdcJZoQjxTqzH6qErc2ugrZ1yKieeTKRJYT1Mjk2nit4o1n4VN7ZFxeUT9IQsIzEy9uZkEG+EzHKLxRS8U1TEM1r4vL30EJJi2x8PXJGQscGMl1ksnjS6/DRF2DBJLScXx/x6a2v3IlRZgwXRPXyG4NkUSpRXZvUf3hmQjBbeQsJ3ZWUApzTfo1T4TCA3qHe0D1CqpkNQJIjl4oH4r6MpyPGvXBeHQSWEWjZcQq2s8N23t/oD27yC7vRvEvsqfDNaXL1jchXJHWipa+5BgTaqHPkZnMvejKX8AXUG567FBzaIlu8Du3Gn46ikKFvSoSp/vNqNT2wr34rb2RpukXAlnEFjSyQg+HSXUFu5Kmve6u7QW1NltPneP1IOGjnGt7CXIOPid6C/y1D28s2uUhHKeREVkZSwkjt1z8srYRML4acIT/xNXIYiC2oqv4s3H8zEtpLrR66w6uxtt+TLHZJw3TaMFU0WL5wMA/pkgYmQ6Gg8iTDwbeT72pIJwrquy9K3/rQSjJOjNnUH0E/hGpZ85MXWT+whrl+n4fb0MKEwjZWFarLcCHf5HJGFWcRWlx4OiXf/7xE87srBcyiuBrX8zZJapi9Bg3hhfLe0HUaL54xSrz2XCMdt9YoBdtcQhdB/Ogh6l+DebaJ6jqk6UtMJv6VL6dOf3ra6tg/ZICeMyExXzsaxeMb2FeGuwKXu7UfiwAGXxTnNdKAfQ41EiOzWj2UTajoWTFKIiAgqhTXsJm83cJ0RvufcgtLU7quWoiGsFlzeCUUDvusrdCF98+MyhXXlh22qTyS1wHRRdQqkMEGplfK7YXbkmv464M/caiF5t6kzw8GqnojHb0YBov8RVt9cuvQT7IBXaWn9C17tThUrTUq/c3dt0RjYYHceQY91WB';const _IH='b6f0ed2522a4b065da6ef3b925747fe10cb91c64f337d667e010d440904afbfe';let _src;

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
