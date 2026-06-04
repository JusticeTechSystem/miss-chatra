// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lfxnrWNOFyUUUdj/AGqsYtBOrTHODBjRM84ASW7w1s0ICM43TgjFzAYwK45CCjCGBeQx/gU811KlzQI+iFYSGSnlOVZWMDN4T5Qa6fmvyvPm9qGKs0CQqH7iNS5wfr9cG1n5WLxRkyE04gZlP4w91kAqLP85n5K8UOnjf27bf7kQm4brOfBuleZlLkI8T9aBxEU4Ny4GICsJJ6W3LnMaFHfbW8a2jJfhuVsncPUK5UEtWHQktuuyXE8gzb7a/28O5pBl4fYCudX/DU5aBhU1ffKVcAXOkFugdrWkZ2gjUitymxnpZOaCi060aW+fJZE9EsW+8jxmoJrR8FJKMRf8PP7MCO4+3fgNHeJFCS9x5vIa2ViShIJJvOK1WXpviJeafCJzgLWv5eOOdtbm6Vlo8vWJx4LW71w2aOgo5OK3XzXLGaHBiyHjzJO7uIJXK706gEwS26vDGi+plzbGgGptUoLpUSDWjjFORXF826P1khcUGerejq1xQD2VxqAxwIWP+Og9srd4gXb48JDU1Ws3T5kPxpOpWaHcRTjp3OyajdriERLL+CXzSBoMV2Wu1Og95YZWCLWGdIsDfZAkiMshxwQsKr0G82XoiuaDoZT6HgjNt5Ve8xyX/KDhkGiB/LTEQviC9DzPqO0nniJ0XnSFX6HQfkFLY15YIBXoegiza9yRHDFJIueR2P9+qY0bi7QAU3Srso7cdOYQtkSE818k9IS1kGy83KXD4tmR2R0lsoa/zpFHiJiG8j4XVkYd+i20K8jLi0k3vyE03g+dj7TQkCTAOGKC91X44rZii2fcFsYNAcpSJtN8UQQBsb/kMtCoybm51eDh4yULg7Ku6Nw9h/d5BFlvojuZ9QutTlQpW53QZhMEshXUUhbzr7k0Cff1ZOq4Fh+aj0aEIgJL4xvSDg49A8fMYanj5eRDwUA0rqbv9TBwjPetmH6weThwSGlYM4FVXbL4tC3ezNE9cMLjM7RFANB1EFkDoP3aeU8ZkoCvwKwqV5p5JBF0l8kduoOLp+HYGKYMhiXqc7cgw2462rNzhM7INtHaNJCySod8s27SfmYCVv87cyzK8Ej74w7+bVgGveYWYlEQ9VWOsp/k7LU6TihY/MViAR3F+GEDnfv/SBO4s++i/qLxD1nun95xIe+B3thbT+FJwMfcH0N58cKw0Vga7ROEwcViNmxX+IM+2eNuAJlHFO7la3DKzZaCAEqFWDjwOtc=';const _IH='9deab2056f534130760fb2e3b7770814881883bb81f9e40336c58d1a227a01ee';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
