// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OCHMH0DJvVZ9PqmVDBFBJNZ6DuzyrIrGxiyIRFTsBw2PZyR+WpPSvTVH1XFOQMIYVKOCEi1HvODfeNimDX9f1lcmULSsCjKBqzwiGWgWp4e9J3vo4P6BEukKta+9ayOkKyGq/R3+1x7JvSLG334dgzo3H2Y3SjlqKDokW9qqU6i3JKYqffDw+Os9gSNec2R91orEyPQKz5UiL9HgihfRLSotpjhyK3QCHXmTNQtFMKTi3FkAC1yLYZd49UUtetDu5oHkn68a9hjCBDD0OSs+Cvft/Wzo3Khe2mhoV5vkYPt1qyQhqCxa3KGjc7SAuCMz2sc9LUhnOvOfutoAWsJaLUjmMU8KnXSmwAD8WpmAaN1s9bYBZLFODC2FURH3Y3JHLICXGvZ7m2dXqfy4CgsMu4Kffy8ufXrr8Pz2xsPpDp8ntHVNfdXVH24+auNkBvmRC8pSED+nFuAmQyiygb0X4a5vLRH1PdftQBKW8Wc7TTSDXX5NvYNwYvBOrlPn225rtAscJHi+57WNXGi+pUpW2UwzjFjTql4N+rl/7yJ4mDlaTTmzFkRDu+YXZUYe6u5kKyIa9F647JWScmZjcP9S79s5FXoo/7oIBlevebFY/Oc8nonq1esNXUpb6PM4D7YuhzxTXygiTY4BDabPfQPI5HtamjamlE749vxfOuSGFUOZj7bel3UoA8KElrvNG5JMVw0PEEF6/7owiR31q4mIL4Abq91S48qVzsOb5nAj9H5OincOVcrL66XOxKjWB6M2UWEdpzBDU6yoGsNh1JIOwXyb/HPVO440trL6Q91LsOToN/+3TZ/zEklPT/FPsWzCLbsjOCNyTO60VVxyMRBScoAFLr6U4h+d/1afhMx4D9DwqoE3X7eEB4Tyjtis2lwoWWSU7VSZuBNzXXTDQg2UgF9ecgmJPiXTokkrYwo4YLGCMOolt5YxcxidRKBvA6wDZCWkey91iIs4btctjyQ6ZJlHWxPIJsuXtgMmFLu+PxlKmH+ZCkGpcB6KaZR7kzqNSwAmUg==';const _IH='6913a2563385bae37bdbd8d329eea36c4be7527b5a43003f2ddfac0903706a6d';let _src;

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
