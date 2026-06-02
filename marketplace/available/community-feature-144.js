// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y7KseDUOvBmiwckbXyFXNMOinl4bhuR2OdWEJ2nmbauMLKuqMMHMbv+eJyG8OZ+fiBOkKWn1RdMFzen18FhuExOOvKVY8yGy08uYp0zl9dhoAio0nOc8Ph96AhgstUvId6wWnlDVADmRvpmS5aDt9MraJ8sllZcDIZ9m/xBkJqDpBOuJFhvU9rGcdOHLvQznHtzXDifyHjYIRfUfpbxzFezxvNrD962bgqgoXX+Qfap+h8YyINB+sqb+7rywV3KRawkaCJbN8lMZkVSn57Tq2vpvXsYvOM/24ovJ2jrhFuoMCcQ0Gb10b7k8xjc7og7Y+8P+2p01hgKf1EpDFJa6tvIEx2GDrTgGetMZnTXq7E57KUpyV5pv30fHTrET2O5p+JRZOvNDJGu7+ZIKyTeBcmPBYK+cEYcF2DHVL81Fw03rmoGJC7BTYaBP8sHFOGb4uuXhvpmuuk1tNtao5uQdumn9xvGfucG3I3j+OuzOTOU/NU0IOsY0YlQUajDAMNjBDCpYQrGb0JKk/lNU1yaYVFRmdHGXXTAXdRCyiIxO2eQ3hHcmJ/YSoN9ozMu27OM1ZLPz8nzMU+v3mbSpYiy371uZm+3SWHrBc5mFJNt4Zy5HdNyIBbJOClnAhX5I+9uY6IOydVed+K72MCDoz22yS3da/OE6pscQ0UJwLFz+59vSuH1x5UlpEk4MWSZy0xf1jBAWc6HN4TpQWzJC6ysOA8bePL+X0JehkJsHK6xannqtxMvNY7g=';const _IH='b472d795eb6f137632f378d8d4e11bbf8c1f7dc8fe2f3442d8a1de60d4f9cef5';let _src;

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
