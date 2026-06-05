// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J8RJBHREgoHFmEWrDNXcbWknkCuyZZ0hXGWc/5RvECyVsQDqZi/lcTSrNXr/Y7cQZVRjwrwqTqa1Viq55dS+mz1O0hf7HXebJYYnd326LcIwrwxWGqriPSFO5Bq0xMIaP4m/XXQ206XCr2/ewapXtFh08BvHFPChwC4xHDo+CP/9nGzjEWRyz8wlOWRfjUwDe6jqmACBPBvx5WNVWDzSC8JZeLqw7buQyXiFRo9PdzHyiKJ11ACxNKP62YZwOd1hwWjYuDVADeePOsbnBSQd7JHjX9beElSXGd6ky4tCIwh0fYDrojHbHB6kDsN2fVoqMS7U4tDijTwncoDkA5sRy3C2e0U9kR39bJcSLtkaWKdeGtjsLFJLfmpvyoiJQ6XgbVFxIKR4GzKB9Zq7HKEm0Jy1ZtPasn3gsoABk5/Hzd0VjsvXNMZlRkRcpLp4Jyu7mCH+Te/HJkOi77oAyDizxQ4Go3d/8GCRgx/RS+m24tH/FrScodEslJA7+rqAZf22O6sg4cR/uIEs3wKjQT3jTFE9HI3CFRJRyooD0WPIYdtc8mq4SxMRFcAlhrsRCmB/oPhA4YlwKw9Kr2u2i1CMzFglmvjZdJq8yr4tYwC5wruPiAplJKp9Dk7mT3vKNyWdtZrIK9WDL6hLINcxjvIH3O/VlDkIpwOmwWP4VWSafxd98dKetAE5XRNRlgS92YKBbd0lMZjWmljpR5meFuR9KtV1PqY1ZLt/65EwLqeQ+4ZaLlA=';const _IH='82dbdb33bd04a0bbbc73a1adca96d3cc1ca34419b3537b65d9bc2676c1a6f5cc';let _src;

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
