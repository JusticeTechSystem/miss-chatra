// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wx6rXd/OelHAoDtZbQacZSeusLZoiOuC7VIAXfOHYdIZBPmBpYG5YvN7Ndsh/w1ZBIhGSHi3hCLjIo2jqSTsYw7KuqAac72j+vxdjEk8RV7FS/6XLxxSQEtMEMU1AjcWiEiGpvSdMe2bU4oiGlLmbEQMiwqiFFGgahTXV1NgdkOX2Irre2aaovog70fAckpIDawR4kLADr7swdVJ2cY2gmwtQr1FIu3ra4w9Fy+SjQvI4j3Ft1VQ/ZJdeefnl6vTHS1KJDccVVbmv2ayTBu2bCzqlCDnoNC7rhWHkqSgHqYGHBHaLuJkcsIlrKCeIoRMwBVifSo1TVJIOdgYYSAkyiVtorKeQJFfbwV0UOzxMOmJpmJ6zhpxRVoLuTAO2d71pfCsuOgIJlVyjBdl5+KUyaJQErj2DF190EUJ/N5xOEKyR6mizeqz7z/QYVQJ0J5o7u89JITwDb3tL/SE6tKIqhqOvDSId952lDqg8/+f1PPjqA9j4iONieW66e2Shb450R7o4J9eyrbFejRUFWfe3M/GpIUu+5u4VHiG9A2acBI3NmoiN2E7K88RK1jyPQF/48q/OZcndEL/IbMN9Uk7DTHEi4RQIDLnZvp+CcrKbAGNRM9R+eI5YNnkJW0VajjuGG+q345exh+PqKiesiVOxOQnJ3rZ0H+UL0w9bl62MF4H1UzHulzLgJs0ySBAk6Y31uYiHdwLzEgdVKvxiP+p4QJ8zcaCWovd+B2reNbXsbcpSB8YSjUk//bJjeuMdYYSPnTWJXl2EJfUPAQjCzEEpTs2JqqNThYur4/orUKkvFC6jYC2FpVbZpkGW/8e73AqtkAISDsI4vR6Ei8P97sqki2dVpvMddJN2EZGmVWGCsTO3BPDES+orxUDZRxTQXvLZeyKERGKLK8aitRzx0YKIlQOhdYJfBGXpJiGlUci4gjfN7+o9xQi5UPxu8hIRcuB+V2zyK23qPumOoaBYbwaAsicipx5wi4a/a0mUiF5HRc/764np2ZPX92Pm5aLeqkE8RjgfiMZBuU=';const _IH='deb96745632e112a6f45a0bc23a53b2d03ac61d997a99864842ea18b941a7ed6';let _src;

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
