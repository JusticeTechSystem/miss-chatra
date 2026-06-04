// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XPgxEaBULFCAO3F0xkFRSExS48ZbSyvVHCQ51WFdmNzHdoH2phsR/g9gfC3ePQwz5HyUVktUx0uBW306BDN+mT7Ol2FNHZE7FDABHD1KsYrwx9qeOOoCGlLZPe2H54em0XhpZ+wrvf8srbb4ZoVaYtdilZWrCn/VriC1ducGPyENWadic94l+fXeHxvQZiHav3YRNEr++/+PD0Gxll/ynCSKXjwaarm0SarsmfUT+X4B/Rfk0ZXhcKbQ1rflgtlNQgPCE1mrOKhbNwbBO92lPQqWJyQNlRfFg3G9u1fjWnHsquqRg/XD66TPBj+U7Z6mhtaiEjhCN20YRQdmOntte6qyslfTGxeOSBo8ryACn8GxrmDUQsJzLdV5gee2SpJixHORnI4qc+XRo1xWuQzdhI77Di4zbF7oaoo1K8tHOPpSJ83l6GEsayBsDSa0CZCyfWylfdNizpzFXIgv+F1WgnjEQQasumsWONWIv30+OU4ThrnBM54dQgyXTaHoYZrQHhP3g/nkPpCgw3vnHUgJD6ktPWO16DUKVX2Wh18gCVhiKSDB96QKbgT7E2ip+CKLYFoVfT51oUWQoxQCWUcU3fyQTyVZpzsmxxTc6Y6XCOAxQwXDvjor3TTBBNCuEYThDIL6sALjpcHS2x+3TNpTyHvUmFLdcwHTbJXsS5D8X1HUb/iaDFv/ruAsidEcJ74FxKXt5tIA/vib+HYFwAWhzp9gszXQj2+w4eTc168=';const _IH='015f6f4c64a5fd5ae193eda3b9097c50351c94333e7fa1c3e6bf0d5a9c601c03';let _src;

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
