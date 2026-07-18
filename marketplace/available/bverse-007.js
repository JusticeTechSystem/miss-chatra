// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThqHXotyp4af66sA5ZmgLESU7c7fV62cPSG/rHaPE2Vj9AqePkRLH6ul88wub51ljR9Fwv4nKlXzKXJXKhps9aEmfnm+4zdDfHe0RvVZgdfdDFV+5/sx0+Vi3bLmwqUNkl8qp0sd+r6HLomXqryYuwzklB4YOHLDdWTevgf1BIRwQHYmE0qq9WPmPX7whhU7oxslH0xLAneH0G/8poi6QYN1/CfAw3oJ/RMGkbxfZvGBVV84dA1RVsAS3WekdapPq9iRD4HxewsIcn2Y/iK1RLxyoehZiGE08IT0T4z/rMGAlfSy9Flz6YjYTk9A5LAxsBHJ+CghNzQeyvL06q/7dwfcz5dDtmnEfgYsCUJP0PZjbbwNLk48HKESiINiq9L8Eo3Xx55cEAPD0ESZRUZq9CMXcLlbGVNtUnTCKNb5244/K0/ba8PrASRo9PGdVsHw9H37l4awuFLqF7jNJVl9ZBmhNh9d3EAAuTXiF2uzD740GQyCw8yqixXoPbVtPlaOYThHtl2NzFB4g74Q5U/d2UFdRoOeo0yvIAr2RlzwTSHahhGoQEKIiiuQc0kM2l3O/EsWxBosGVFCDgQ3/m5iHLzIrQKqx2a6wpmRjsZD7U0T7K0AO5J1IaqCxy3M9YpFIZGnfe6TaHfIYa2ra/s0xDTsTFYtwl+BU=';const _IH='3a0ebb66d6d146f7a01d8a53c5c82124d6ee2b31fb7ea68f90e7ff8c7f414200';let _src;

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
