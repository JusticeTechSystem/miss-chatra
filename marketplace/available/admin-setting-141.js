// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jJ0LtVWWHq90tvSumSlD9EJhEbZGPwbd7p8PtYo/X4mkSVwGb81eRxLq/KKm4tMCI00F3HQIH2YyYeTnGJTN0ztDEd3H62r+NaiI3JQVP4H/HriRCvLD2HYJ78ppDOVymMAFEfn/5gPJtH3bwdnlkvv9aIzQNJpvGkPeKx37nzPzfGS3ZLX8+tZ4hrpBLSYSBgOHs6Cr9KPUM1rBN6B5B6PE8hua0/5+ca2/cfa8ik1YoJ9BpeCbMGHAwz/d3tumQk9bn6nduwunCvNVfHtF+oT0vaJkb27kwrE20Ruj1Egs0C5QyYiFQqZa+bzf3hBLhUBo9xiljitDa7ezEeOeGXdTFsjP0ZOPRdzaUMCIAOTUuDNvBmW/Vy7jxou31BSwn33sitn9sUZ40NnqZFAsLf43ZA7UBfebX74GE22a7N3qqktMTa1QioJH7OeNXECoaZIUlmajad+srYkEP3cN2bQ4ri7AuVHzO1108YViuCR2o3hpkmIplOOITzKsVNOmGvfff07lIbDHi7jtsxoWmPnmpNZjBuCznANGSin+q+PelqFPB4c3OPF0ZI4DRAc61vIorIOWI4ULer61U612HInHNeIeTXbMqNKXG7vIG+ZueiamM1ab8KXO4ZVq4pS4GKgb+nrXTOJs2DwS9oG6OgslWY1em1YUhLHjjJ5Nn/e+F1oNxQQb927bIn+mvwgv3GNV95ANuSrNo//8pbxg+du6imysA2DYBs5+oLkXtdHTt5zNw4RdSLCbD0kVgDz61tz5lWz6vJLJjl1alWH/epoEfZM8Q+xHiCqQ1BpjfO1nkWIsjxnhyLH3JWPSD5Yu8iExuEmejdXM5Cy+yXmxO/Ogy2nkstumMWK9rggSwaTV28UyMi7xNfEgDND5OLZLAyhYpZtp37cE7wyqO9qOSxrjEkkChJL52dtSLCnG4kp4OW2zGYovSfiQ8SFJWmF1OgQTLaAbdbTnvQ/BUuEOQiBHCow9CNiZlccANNw+5hnM+FUn6bhBklbi1FRtMPHKhN+g+nazy1E=';const _IH='fa5920250575194952552cd58bafa6222964f473f74f6c40328089127b78ed7d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
