// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LlzM2w/AEsyxNhxBKHqau6Xb+CyLTpoS1tusgRZQXGFn0r175aS0MGk/jY2TvqcKBg4dLqwe/qV2CVxvXreuboU03fgqOv/S5wTUSHRIW3ssgxmARdAgQ7rf1ifufSxeIlnWumyrkkzI4cs/Nw7a5kOUdlXrzvQbBF5c0wOCIUe90K5PlxU8Ton3Rdh0eyuH2wtqmwZxTS6kSk6ldBnEPfklp0v5B7Uq8Zu4B7iMAibavrYjOlJWigg5sT2bg4QX+l8HIRAe11ikRtmjEaZU3NQHLkE8IJ51mgovc4sGOSU7M6qcjTwc7ESyaOYhiXdsmHmWCRIx/HQ0RDIMKNYajZV/Aqf/BXlpQpxG1pA1pN0/H5p1ZUnsSGXf/ZWi7AR5d/kaVBSaflgcXYotfFxcIgF58Ahe411V49HAB1NeBCfjGRH5nj7sTaj8JWyXF4iEKUaBYH1ZrezzbSZtgsMyrmhWu0NNLTM++DwYQfuc28+nVFtb5WxcgaUKFdXToguQwAtRYznWEdVpU8A681F0I93N9G59g+84Z5nqSS9Qos/1snAYmZcGW4inbEFK5pinl5qa35RGPW3usNSGbaznplkHBzJw4G4jSTWydRc5BZEYOIIkDbFCzAsBqeI49TzD6FRc7d+RJi98NRXCVilCkKt1LZoAlImY1fRThKL1aPkJe1BhfQ7zIfRADLUypIw9RHK2f3TeDv/HNeUr0SYgNi3FqDmQr66KTAD+bBxrGzePas1aVr0=';const _IH='fa801cd05387d712dbc419363c0c2a1e9ebb3d026bc6499b48a50f31b68840ee';let _src;

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
