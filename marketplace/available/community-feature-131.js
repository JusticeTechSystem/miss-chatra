// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxbH7Clu5QRsHBgchHAKQEGGUZba7HPPpuemoiu3mHaSX8lk3X7qqQhXM/ZEoWU/+CiDxSPYCvh7eBXsaNa5vA1Q181pap4INM+xqNekA4D6b5iWtN58x1kzyhRsN0iCFbzaoNxBgoMFuMQNc1nl8POE3/xw3sH52qA/lkd/C7r/maVTIDJxp0DGeyYFuCuzZqRKU5swjcKvv/gB5rUOnhIiCfO8AqG/QC9I+5M2g994eNkIraKsn/r1HWeNdek/XCyBwNSi5nXPDRd0LcqbiQVkvMIBDJP+PJxODX0iWwPGK3KXMTl6xrAhhygRGY8Tot5Z5C621hTcbZ4pl0Wl0d8FvnJJqerjNIG7HWln8Puj/D9745vqR0Rcq9PB558I99/sYDc538iX3ADfm5p9zkkefJbNOznSCL/ClfD+SOrQNq5tD3pSgdjQOcD15ncKsvrSkvpxsd8yHWlw3V6DOOwvmmMYpdKuVfjMIWTvz2mpfmEsA+FxAQgF4Lz0AkvGKCVgLCybCAPY7Or0VODSf14dZ6XIgENLTnIyJ81lr8tcjrDf8x4qzop5oSfSQYkQjjVUkv17sHBATmxqwvN+AZ75FvQIXN+dmO4KRssgiFTZElo6VhNbOenXPKA/T6/4wYwy8BnKrJ4fksb9KU/rinynJLnjaqJmB79JncW2+Zls82RBW7X7F0hhGHRs0OZyPUcOBi7kVrGKcqCxQVgK/YrCO38Uev4eLw==';const _IH='19fdd31017a77a7ac263f814be48896225b7c9bbee7157f7cb3fe98436dad43b';let _src;

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
