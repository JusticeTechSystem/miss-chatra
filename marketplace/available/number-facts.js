// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SlUXxnIZjhhorZC7fxg6xG4AABJwCe/1ukxJZ7CeTZrBAdiyevkboxB8Ylq73rI7A4XkgT+rRWtybUo1Su3zUdd+WcYsuCBKovHcaipnsNm0OlK0Wb2nZNzt+dX9TO2uky52bMqwJWGzgJqGFVNoxHe09llyefCTe4fVKfNtAI7HPYVxsc1pp2Q4+5+b5kiCGLPanPMKPFC7hlb45BWZpyoIB6O7Ry3XMNzEom2SMrP+/T1XAwun4gn8JhsrlujVkKIGsXq7ui9XcII+nCz9yZXta9HQFqe/DoJuJ47FdPdEqBWAgb77yezzgrcL7UITtn1pEnUFtunz0ZB37v6PCiWqERF2kOdEUpxOqNWBlFXnru5UmGdQW+Sm/4ZE5KBC4DgysdAcuu5bdiE2VlcOCHwUlsCZOH6eyIv9nXQ2SlYjXskxfFwLEnSARwWXlMIEe7zQe/lsSN05lrqu3r4PKgdCiiWNcXENH4Sx+zM7AIyamdmphaLF9LQzvQIUCbb+33EKa3kPcDPoXTKg+dzOeoPbhWSysgnBA42TffIABDUDSzHw2bV07pji73TXaQI3vfayuYQ=';const _IH='90aca0c25593ee9617d35f6e6ff539886b6fc6e0591562e9c9b1618b1320b9bf';let _src;

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
