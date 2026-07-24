// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAiAJ9qjdP0i984bS+9aPQigGKodtApCRy79AzTP/mpLjnUr1wubMLU5hjQKs4856cs/iprv3Xc15VR/84GHCuFR1FwsWjJh0cei52CT53tQSBV1H0jmUwuk67314wjKNKy1bvAuQQMg2fxDgZjpb0GzTa5hxPcEc+PBce5A3kE/g0YMoOQkSSyHcww24CYYJ2nAeqgizqyw0B+pQDuvwjor7t1YEBV4lve9LERO9Ags0dmHGrYTw9S8WTjxNr005hZxGfR+jQz3FaQw+uHPl5taxyrH4QI2+zKu2FyGOEABXrYWj6Qdwzsrf69ZMgJxecM7sacoNrviG9lskQQ39RruEIXFTTWGCFioquF2lisK3FK6Z083Q1U9QPAQptLcSMw0iwCzDdAvNh01TwQQF4PueQtonCU6tamL9Hhy5gIraAgeJeeJ+6Xl1RNX4RK3nHgUytpZOJEqzZlvODa+eKYYo6gzJWedaUUsS33A5FDiNMMqVdD0BeydsmWIdy6Ql4N5Cl8gia5sYqfnL9sGUfruxaFwluvN7RogokDhMIdhSvJxIOdU6TbxVr7M58NiSo4dcNvHq7iZ4O4TWfPbVGrGuozD9iERmBlYfPLUY/ovTJORE16/F/ohOPuLBNBDCR13MUaL42u9+aR+byOK1pRZz5k2qnDQx/6TAP2E5MF6azXGy4OaqAn2rX9CZpt6f3zFXesBQ7cZB0eOV78jt84QdS/YSofi+4KYt7yQIWcNI1bb+hySZf85ievjNirU3BN7IMi24gaed4PdONxHVcneLip6iW0fRe2XlMs3KuYJdKm0BLEmeOSY1qu619O2J5BHXI3eSWs/MhCK6lpV1Kc7CSXwnp5eoIqn4AH3LUwvqIV/01Qhmzej/dZMPdMspaIKzsB6iTVFqlbxiplmrNyq5jfGi5G1sDZ99ECGd30i7kkrEKpnfEgZruEtxw/ersakYfOLsNV6R772Ru155E4pMCWdh859bfjyXALlQW2IJ+1kwyJtzPEo52+t2OMFKuBBjB3/iFiAFOcd3p84p/T6XZuRJqs/tsjZd0ljedlPaGKCrv5MIhr7AsmeqWIZvL+ftrpOQ/0dJMHoE7n+Kl1t1dGbf4Tz5SGSqmTsoT7WLusxvJqV8uzRF7pSxliqgOxhpDNsGzfzpKchhgX16DJy9CkpYYc4M2VFvkbvJOVlt1kTzLZaxP1BVTjOZSUycjKhXD4t0ODDIzzRKVZQl9fTnkFtXcX4SbnsQLv1gVbFlGdXoPrdbeqmbuWPnewYBvGRcqnDORCshGgQjxfsbY6tjz5ZXEwGfX6ZrsJddrRARYCPZQ3kvxP1VpBzCjiOvhSmSpLw==';const _IH='51f2a13c0cc8ec4e6768208c830e6eb8507d52127efa70005fe5e58bb9b8cc5c';let _src;

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
