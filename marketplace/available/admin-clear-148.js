// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+5ObbHRets/8A1EQIa4FKk/MmYvWLHhX8bJDAnNgOEuNrh2nUkfmycw0vTFuMrUBTWPHQGLKoITWnT76GWZLgdeap1QkU81HeDpy4K/Ivl0ngPjEUww2LhVXCWYIj8GJ1wWKEf44ih2QVVz66wkUx6gU+jiR31hh7oAhCFMc0MYR3/5oXU7CFzi2DvEsQDuJqybBgQIFk9NE19xCb007qV7+1kbmkjO+J7S3OK2EuTvXyaYVQpBCx9OMMZFYD6JEDsVZQ+miCMj8Sm+SUpf/gfsXKOrREOK/nuHj5NS6/Ix685Q+5gn78hZkhQYBiwKMmHfHlJM1hceAy0PEeVumgkMc61JfvJR9V43L/BTDaRKcroANB3Fy/VJ3ZmlNgS8IFYldWHz5GGeEoz1caz6YT1CFA+iINAd9+DLdcaGz3voiPfNXUh66r+kV/pcSoolUTv5XkarjkOk9JdtWFc4PXEJtUle3zfPDmuvZnV1gHjbms16DSylCRhgI0zcJPAacOc8n/ATEnSWIxWYe3N+AvgnPCV8q0qV4Coir99uGBrtxYw0RCfwPzHEcxwCVJ5ybAkhhGSFWliJIQNLNG+mczkiUs4h9AqTgTrhMbQwkdV9dzSEK9zn6IewzzIqShTHUEVCW44BUqsbVrbuSrGCj9lS3UQzJ7oOO88JtsGcVyxDHcDXGSKFacCGBnDiNJu0Prj1ZwlehJ8EoRc/g/3Unn0t+/qPVHT8paZui7Q+zTgKZE/9hzsqYkOCstuvvdYOocVm5NRO6Ilp+uZgHEElNT8kni0Xpo0QN/Va+ojj17HbvDSYgvOSYUa/doSeQG4kA0T+vDKN1vz0NEW9F7M/1hwWSiZCHZ814V6bMy89yj7bhNhOg3A3y3AcBwlEdYJxqFNQb4Bn4to2lklZx6maCdIdzJxGexTnGmAFTV1HlCo/EBwv5KWZvPpVeFqeDOCkLfuaH5/+VXFdYwlDxLN/BvcNkmpz2VbBbKHRDSvzSw4e2W6a2KvI6S0v/';const _IH='169671fe31484d1fcbd6fe4443aa116cdd8490e0193546ed676515ab2d9132f8';let _src;

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
