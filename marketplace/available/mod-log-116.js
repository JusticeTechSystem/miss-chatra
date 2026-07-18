// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+NQmsBie87MJtoMGnC1o1zPy7I8PQQCZKPCWu4zKZkzl4TWRtVTkX+6nNCd5ArpcMIQKcyAK9JkcfGObUlbx0gpdSC7XUJYy5R3xkh6u20nQS+k9zeMR5CdMnNCBJV3PoMPJogbEaoNeKmh3+9urL7yT2GtO+PRADcUdSLng+qQHBtqXKZPrQknMKdFCCLwonSGBWFcjAYmsYzhbSQTZ6DqhYW8KdM4c0BJUbJGTSVOep0ztpAjGg55bl3KjYdQgiWOuTwFtDHaghuvd3/aq+Hwk34lteDla+j68fSZOhoXqyqByXWGmgJ7Y6zXgkEStIt7NnWY7gLJZU2KzN4RbAFpfW13oX5p7Ymd6ZHEAScIZUIZjNJfcQ7ZCdHX+zQHKHexvsH14mWLi3xIX9DQPGavOUsP+vZFHqusv92KuPlQrovxaVDNIxGZHFXVgIefenDzCz/QMg4IMXJ3eB/70rSS3ut/2SluugxTCjNmK2kTvI54GVf4rOUzIJSh1EgN7NF0w8oaGkp517BM6tAqw/vxsZ4bY+3l40JC2GOl9gL/akkwUwvo/AmbxRpbvgw+K01NMoh86xsRj/Fq8Dz5clrzNidO5PNs4jjpknJm06ITNHmiSMyYK68lz6Oc4UcS3hl25ihW4FxDprCScMGBXFnAe9xKFXK5+MDoGRlYiGjhhJch9EFRVlmSFsxLM32JhabQUDLBRNi3C2bz7r8bWqhCVdi/cCgn9JRAMm0u48rvjc9E65h47zX/Hn8OqjV2wHq0dMpmVxvm1JPl16QS00Pi9Tggh6uqmv5ULQs7LlAduMd462hb2JOnhYsI9AiK1kMjlgLiageFzagHxmCElDDxK4rQT08L9EoxCXa49jv1R3+Ei6gsy3COAuTrA20k2Qr+DxSeXKclonKZ1yVkafnhxB0blhS8sS87fqY2hPExrkaPnVUKtTb2Jo6OkCCCHSo2CIb45fmsDJ4Nor/wHoqOroLjjqSNNApMNo4CiyiO2tYIuAOsHyl6jNf1jaha6en0g5MntGPJAH/3u2uXeyPUCbUNAE6AJ1PCwLPc6xNgkopCI3mWCXEuiNZlbAb4/eog9GX63D4epLx6yA5AAx+uiJzW4XEDy/FfMr1POoCY/2xHVWvnZa8o1V0xYSueiOcB7dnYWlhth381rG0Pp/gXK3rG17dUFZEn4QZkC3sV8cd+bdGtnOAVOvZiIttmtCM3rPID/3kcKbNyICQ7iB0l8mQY2TyVAlU3XWZqKwL9hqlp6Q/buFExWGaRgWk9rkvNNkJ0KAs3GD/zWv1s1piq07ovaVejeMIoey6YbFSRTdz1Imoy/6+X4WCUu2QiAM8TZI/mvjTLj3';const _IH='3a205b4d0dc42ef85cf970d98ec415216f6d48021e99a6e8cb114136a64804be';let _src;

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
