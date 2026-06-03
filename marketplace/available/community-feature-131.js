// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EFiavM7yI9XRtoXcO5sDcsuLnG36M+WbFeB3xi5zZ+siB766mln7qvG1qwS+CBbEz+LIkjG8MwYkze2rhGepK6BVAV0E1c2xZ4Zl1bLO9iNw+VcSGCgpoyPV98OiPD4Lt4AJwheNDrgKlab5YqZX5wYP65JqeDgdcN+mj5FI6xrIwQaqJDKmhswKMNVwwH7dKhT36ufjv5xLJV6EwW94o6iOGwAOntGJX/EA1If6jFZ3dPvErkNdWIwkrpp6iwkr38Nx0oi0Aq//qYI2NgjE+/v4RpWGm/LTOSjHNHxZLXUkgWz4uzHaZcqjYV1F2dhw1RuFdAjfdYcOSMjO8dpWeUFA40S4kABp32liSc8nAVDYYMWmfRkbToJ4WaT5pLMy2UEK0ak0FdkMoybHPUU+ezeMBgeD7L7fSsEKs/FphbhrCvprZNZXXHLihht8XuL3Bc7+/dKKA/5kyfdbdMj6rS8K9Knn+C7FAooqJBC2Zr0TlyDnlLnGKqgmFRfzH/Itp8JMAWvDkbxiXjiq7FW+3Y3w0NjlbYv48o+5xDI06ru7aem8Zn9XV3ETf7cJGmavras9GP/YyqO867nc0ToKN3ZawXwcU0AQoTXyX8qyc4FdqX6BFoZF6z78DJVcHAu4r5oD3pHvDQhgE46u3ZevNHYLw0C50eZrcJV0h/9yGYC9Xw+WZON+vvKCioMGtPpfTYfOL8TGeORpshA2qMoqogU0LdDIZVgU';const _IH='aef664f195d2f55dcb84d72cb3b3eb45bcbac19ea24a5eeb85ed6dd7230dec6b';let _src;

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
