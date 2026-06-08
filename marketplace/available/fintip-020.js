// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KSIXzZmZ4hWKTgasMeTyOtDvpAOzmHtbAg+5u9H9Qx5Z1/WzWllZ8EMxlExn09uT30+uUyLncX37hWN1H1g21yBUyx/ACEN8PhNEjjhPuAGMrO62cOhr6XuHICaDEwy5GrfVHVGAQtDGirEAnkuVsC54sDamlndvzxpsM9ilY5oOzFZVmgkR+o69od7yZ+y9/WndyDr7mK2COjLI9H4jJSxMJjDOJtssoupiqdUFI8WrTuKDzDG51zeMSs/3neUz7GKcmy//3V6o9ubKaNYv9nzMOsy33kb4L+8vsA18zWkkHREya5kcsFWbtuhtzHf27z1jYKKjILDxBZ6lovrWC6ehu52wG9BL+qgGdvLGzUxfDibmFtzfWc+gUQM+nJ/cPPOmBTEK3jGhoI4ZqgN2kBx4RkPGZdiJYP0qRUzcRXyBGBxnQ4tfOpXVXjg/hZzXHxaBwAvaxeTdCyAWo6KDSI0EzllNp5S82xYwn1+2YxPPcJSEpxq7kwhvsRQiz+oMSdpUp09GJzn35KDzQ61F99WlFTUDMCB4yXBiJs9UkoTNPWvOpXiP5mCyX1ic7icrLCNXOFfgJHfVhh+8xKJe5Wcdg6unHJzyfSvCSByCRySxlRTfv9oxxeoN/5e/bMjVYZZfOv3umT+nP5396T604hhQU3ky9km4vs0XHqUHYIJti8KqZ/48dfNYD8raFt33TVKm6Kd6XBROd1+w3a6MXUCMYm2B42p5R0G0BbgdmQ8Odg8+wXWCz7GuT1yfDzW7Ct4zZEX2GZuiDs6bODahN8iXa2R+Ze4mVBspSmViE8KiHWe2xgAGLVP1mAu2vhRrufs1BP4E9ESCRFd43pvfPs4jGAigyKg901A3JzR+9tPHp7NQSm6GAIzdKP3+lFDfiXk6rqDQ8iOW/ybcGhizfmSqrFZMGkrHdW0RndEsT7iNJtFF5E1r9Sqylays3T1XOhpJq2a0Ezyfgf+MXuDrrFtM2MNbAx150S2pgezhaO6ZRX7htoJi5wmX9SFdIIGGYeq+Qs5gqUDBa5O9fv/koMihVft6GGSqFRGDTLybWxRmHA==';const _IH='2c39e22769e7691591d1f410155adc2bd20cf5be85c17eab10485e1d785bbf6b';let _src;

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
