// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9xGCO5oPUqya1rOfyFnXY0wMJCV6AkG6NI9Qlf7b4tICIpjeG4WDsLLCQJdMLBFCy6XFZAxA6/pfOIZWEi+jLVyQW04SC5JqcfAoXq+n9IGcbfpv7YTgZW1fUiWDTiHrf/ZxcTn3JNprNukojcnxRVfZzTUZ1ex9ltSDUDE1MplyUhakJlznWzD7GF+lNuXTVaiFSpC9x0EkFtrXNj+J6AJaweUUwjH24XcDq3q/lWrVObqFY3xhaX2S1K6jowe+AWp8ANFERvDpYnWvZlBiiF/qkaB1cO/hWV3XXtb/sh7ARQxyv9vNj9CZkYAzx3XVNRd/42vvsno2RnDJvOtA2x2+E2hBegOD+YJ9FeWbee2N3UJi5kSnRMcuTpcFPOopCQ6EVS0u754wgOcY+aTsC/V9HPePq+J9oMnCfLFNa4F+I3x53HN9hNuC9b6T7YpmBno2RryuoqrN60CjDJcsH8wBRfUjnf4MzzD1bF2JxgFHUL2ISmBTmUQZg2MnweW6FvVq9nWWOSh88qxT1vW7I7BWjKuEWD1ASMbYk5fccc1fF8KlGFBjQHB239COFyqQ9Uk68IaqhRlZoMe3cRKevjU5FAR7XJ7bmvSpxRMFxRsfGR2EN17gJMWmaOm1AB/XzU4q/MaD7iGc2xi5Dz9gdmPFyAytvP/P6lI4UNRV+JAzH9FpE7fOnqFxhjtRaSLUj1K8zzj7exqfJ2tgDgC5zIKkSJ4YdnTJ4lS5MKiXGNJBUsThHoeMNEN1tNsV3zyx9Q2jQGO+sv7rJ1WurX+lphJSjsKv8g6eXh0Nt3SGXUcU4/WFDLHDum/wuGzAPfJWEUxwdF18evZhU+PEw7Nl+MNKOpuvQf+GSINo5kmlDPi516wXCdHuGNvYaeggyBiyJO98Utnryn5z9MvchwgbyKsJBwiT/7O8urxaKMJh4mWbG2IZ0CKKku75w4Hy8ZGBadevY8f3hHaN6AyGVzry551v3zdYNq8YKFQid+5BnJXvpsL6h2Y2lgzhHBLjYPnSSuWlTfAcxXHUaePtn5LNL1OtQ==';const _IH='6fecdf217f5048b0a62ce1a322860803dfcfcc966129a84b8fd694cb2c9e6712';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
