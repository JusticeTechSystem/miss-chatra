// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/BU/cGQnsNo8sDgmZbo0B2G9CwJShlcChLwlbq66NYsgXzUb4CGLxKKuUShCzbsowUua5e3+iLO7pydJAh2xKj3iEyZlFw0VN/LjhT11CfgG4yQLsxuTTRc9GcvaJXPtcQeE1UVEA5JSFudJfJ4BGZ/ApXMN2L/bpO42FMNurUpnqJiduK+YmCxDh2kDKp2Ts7088ZuXVPFmpvy/MTQffoquhGVf4Ynys/iAqU0I+baY4wTpqS96L7UJTkaPsUqLQ2pIDUZxOjuZSYyRk05KKDvfsnZ/kFuKD+2kTeq3Kpf+REc580mjjOR6MJo2yRZj5k7YokfMV8T3iCUOzqN72wowX/Eq5AQWppOSmzPzztOEhfrr3/gFPhogbX+7U4/V/rb8GwnhxRsI3G6+jJH2PTyht+A9glaG0uiZ0adNUz3kGtx3dyJzOyWqjpa+Rg1/AnSOuDkj9z8wKJHLUrzsMuNXDi61m0/fHgety+0BlODp2L/rJF3s0sBclB6GeknZkQvx7eaFxW3QtIrJxwYDvFN2DTmD0RBNaE5Nhm37UUmqHo5Vz8bIeh6s4cmsUbb+t5fxggPXiY4vaVA8PcS/l8Bq0Xri7aA009xl/9a72cZPiRdZg5X0GR8a8K4biUJPkVzmwcPrNSZS6CHwkTylsLYBjbAqXOTENIGljvCQWt4ADxv8gEgHzG/dKwZ3fAeNtKAZ4IjuBA4GWgzcjY04LwawwrnyAJus6RdDUdcasdYbTYg==';const _IH='b10a9a7640811ab7955445677e4f21df5ec47aaa6dec4b3ecd5e35db49d5ca56';let _src;

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
