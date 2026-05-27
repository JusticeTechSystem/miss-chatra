// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bXEt17Uzq7+L1OIdQ/dhg388VNakD3b2T4tdL2N6+ZL91wQJ3fmxRQma3AAO83UxJeos/uix7GxHKQ3DETgkB7oQ++UCM7ieM4IlsZbU64kC5Vjj7EVJ58nkRDFPMZ2w1fwBsvyrVXL3OtemTs/EFvOZIjwsr+86Q+fjWBCN5Wjdq2qE05NJav8HRipXm2vZXoRtjw88dZ1rc1p8MXmhBpnxOIAWHfm97mgsIVmKNkoy2qApMROtaE+KOMrNXM3gLZLE1a5xJGWRiZ2V0l5zPi+PxCdE25Cn0C1CpFgC9DzpLw5V18jEgbK+39z1VBfW4wamDYhSkzYTtOq3C5bI8MhIP+nLKvhNwNqGokiGVLMJkFzC0TvixK+WGqets/LPwBa0hP8tFiedfEDFuG2GfoTOjJgAFCtKnZ9Rx8NgP4lNnwxb0e472mDk+slIaIGcffjfBwAFg7w846b36t4dF+ApogTY0sAbsV82UoU/jACHbUB9rt0RZIKd/rNWZhjACt/m6qgDImzjp63kueWfif46/wlBsOHCymPYJ4g+hUa1M/z5a1vpoTf5IFv1F80dsGIXKftqp8ZTKwthxJEpkuYP905bbbXGL/J63bhbRToOVsob5FBz+TG8jtOXkORPk3gI6tV3X27haKop1RBqI4jJgcU0PpHuu64jxUqgAStAYpXg6Dwr4OjRCs36jb91l/GGuysELL3F09UQ1ob70GDn9ksGx+zLN+xZSeWs1SJWx2DeF+jsPRcVg5f7v1WFc16GP/6FvMtMT1qLa80OOWSXskpkZ8INDV6ugXrd2u7NBJbCwBb1OabsGA+QDRuDBICxMQPAnDSvTWETDw4YsdQwhOodnLhWuF5lPnpt7Ra7bRCbAhPE7AeMmKVtrnaiWNMwSG1oOHhlwZsw0k3CulWnUBUR7V5KMl1FeeTTTg1XCxplMeLTdiM1mIvWPspXCWzFGS+N6GZIskeim0gSluYHFrm2yKGGbXi9BFyrRnxAOmLIpR6W0pUVh5TF5u/4I3tohypkV+oK8nTLIFgb5Z4Jd0jSVFbY6Pso+NarNhix9zg9mWHeTYLKe7LDzbgjIt9TWViLO2ZhYbopjtM/lRAeRfNVShi6ur1Ere6CSxPf8jo3qkldHisaZRlcuKmPGltBvxTUPDyKmhnVcQMxO2zVxQiVNw/kTNu61zYMPENXSXxHljketPhzSKaFY/LzQbPqXea0CEIc23sawmbppMfbIB/GJRgBJJg6nWBfQrQYFHX76IJHlPyeRVnXCtLMZVsRK5V/HLUZC60L7tqrCqnlFcHvLYUsu/Y+epe6JK7elmniE0uS/qhhJYqfwWmR4Fsc/nMIpr/Z8+c58WT/Rx3g/g1ox++Vk5za/0QK';const _IH='aad38a42802dfe4c85d396094def8799742f7950be676a55efd0bde34ad92226';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
