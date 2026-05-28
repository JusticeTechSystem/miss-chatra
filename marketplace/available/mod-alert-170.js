// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tftT5JYH9VqwfcNwhHYMV0ml7KgCioGKWNUXIPIaQIV1XfDLLzoVUp7tJAmlwmskMwoUDL+QJmb/r5iaCLb1i4d9OhxFm0BL+Rd1YxMlsGclXvCJKYZ9X0WHjwwJgydUJER+BTOVahq6Ubsa5mYD2SsfBaUirvo/C0nl9PaAZm3qij/UaIkirpO/NI88B0KHwkJgsuTZYneEGV3hVhJufiGkwBNhO+FYL9qQ3UEO8p2s/KJSBbaOnWIQvKR0b1B9aW/2ewbXLLUG8o1PX2/h93tQSi10MG90L253iul0o/dinD0kjrHaCI6gD8daItxH89p/DF/zLjfPt8M+sBs6BQ1Ca+t87C8UEtUmV9yD+saQ1bN0V7WVxzlE1BPQ0H7BWsWEX1p99vX2kqda0kjhZ8GRyLAi/xM3ImTYH4IVdVIe4bhBSTWenatq0zicln+1BhT3UI5fLptNtR14gwoXsMLddI/W6UNlOZS23sJ8kmct3KGCroccLUvbYuLldyA2ymA/umeZQroFgk6CDN+lwaM1SDbMLtEkPXiViC2NlLDjVxXYlzrx8YeyWsD56SQsyMRMhBF2MVfCMFA7TgVmhDT/Qrj1mD7oUUKRvF/tNgkh5AVtzlXe9YEpiB7rdwBLbXxj6P5/Udrue86A3ki/b3PyojsiKn+aiUikNf9+yzh+oeXBu6cfHtVXKUMsTZc3ZCyWossIMAzoXzCfCb1GTR1cttXS0pmhmi/3pcv9EuTSC5Ww1u+v/3VXhAL9fGIRSdO0Od14XsB7Zc6+PJBjqO8SXXw90IWDf8tetJBLZvyWmbr3fyLkPUBq0J8JDJWTAkjqhqyRgY4shtjeaaRLipNyOeVFG0p2Y+hwslto0IgXWsIVwo5btbRDPqr46ssRLxXKMvmpZ+UTb5FRwVLwQTLLtVrW/ZfGM9hQGV4YEx7Z5Q14ElxlbUyGv7lW4o2xF8jImciuMjFyFjJx7Rf5HUkRPEFFdcDJDddsHN59qG31G05nOo9vz+yMLxtNWUfacrBFupsoZCKeQabeO1kV5HbsWnNZXV0S3EZmq23xMNNTtaYOULHQj96fkB/lPN2O9BFB2L/WNuPLeXS3qnVYVUzbC34/uBXi27mIUHwevpeisSewWHSBNxeoM7S+tGc6nY2H2H4ert2kpyKOYX5n6hmn5FlVtpoTsWUoEJ854sHcl6ge5m3F+OYKZ8qmq9BTrOpFZKVPK2bM1yaoovr0RfJ1mFjAx3rM9EEogDLAF/xQg6jNlVofwZpszw0SXEQFbfI5SLWAmpIvjK1IGTO8P7ZZKxWdixh7pyK7OWnohXN62nSe24tDoe43ZlRNWPkRphlqk3CQBQ62DqscMIE8bYy0YmZhMfbHnIvhOQFV';const _IH='91036cfdcc39664e4a12a924fc80140d417f584ad0b916739e99df2020e123e8';let _src;

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
