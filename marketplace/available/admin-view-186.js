// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cNdKRZahJXTGNBgIJ3WLaEnTTz11JCIa7Vhs1muecF2ALWB9qzXAcgBU5KST8pWf2Vm3HzdIa+E1+D5jOCxeq+mn5rhy1GJs/DjwlYZI0lRNAuQmWR1E8alGnBwnDIE4Mz0fIvrgzy2N1ZJCxq+8vfJf18/FSpRFvYUHSSOTDGkI7jw9JjkTjMCg98dTRCTpXcJDB8pIfkIaZ6wGJb074Sg8usdXCdV5d2Fui5E3KjcIAJ5pxM1hrhRPdR8dnAYHPz7Ld/WNn9bjZ+RstsaNYwZo5eUW7IVZO9kpDomqF+TGu5suASs+1bqWkwFMwmEOFiJr6c+w0PvMODTCz9b1okIDgaSMa1V8SOEpxoZtrw7qjdzApToEa8WMJuMzTgF5ppyTnirvzCnzb+xdjjQT5cDN2FOrLJB/jiqvGeR1TVQVqWEZQ0UWnfGiftyMlbAZbrzz6IsR2L3lADIY6aPyCcmTM6Z9sqjK/q24Ik5qaL2kyv71KL+MrN6PH418JgkXvB50vSkSnFGg7ApR9H9HPrES+I2h5bV8MM6UZ8npSYT3+X+9Vd+IYBFb5edDVqgjteJFC36EI2OwelEaV6LqX4uag7Uleb8honKfrXdpco/CRmfmoGgZR90G9ECc4Gq5MEIE52ty1j6378n/qem4MLfFCj+8VPmnIRvTc7m8eJ3jVZZ+dfpZRrr0iocJU33RdJZzqylmMQ2s2xz0kZO1SKEn3wJW5V4tHS+ilvuQnzlyKGjvQ7drp0/Q87ttAdknP+l+oscZlkKPOHjMMLTnFRap0LYxQ+2hOXUAH1MXFJUQCAKw7LLjJt8EcWFfps3sz39RHySKRK0QMQ8kw/NdwViVZQd3uhps0d6dAeogCjhVZuYkW3+TvsbSjfg7okRaF2/tQK1wm0hv6BisojMTDDlo+2VPJ/ayfsOh4ViHac/wf+huaPU6S0slbMdf7z41BLQZ1qc5JlmNDWz40tUE+r0KmDGRbYQRrfFNehcWSfClErQ=';const _IH='2a288aa5af20d32ec8725d1e75feab64d5fd89bfb10cef78faf20535f5271e04';let _src;

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
