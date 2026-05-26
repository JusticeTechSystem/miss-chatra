// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7GbIxbGS4lRMDxWBmwFuZJronmWgEX3lv2sYMu7ugo40zvhXBG7clGRBuxQQ5MkumO/kPj5GzeX1VUnX/rlHSFSNX/gPo1pxOFuT9DZMmqxdeJ/mnh2fNx2xSqEuBo542u5n05WRxVvSpgiwuKjcUnGpfqGFLShBIK0KosVSBT6E7TEb0uXh2Ocl/9+UzVeSC2qApOTW2GwyHHxHIGwEAe1pcchjhL7OJ2nUvTW9BPiMYji2EJhSDqnkr3PU1Oy7wCXpDKJlJpNEFIeMoZCc3JttKkAiomOCdfaoTZ+8l7b98wyX6nZz5cOsRlabGLJhH4pPnpg3GQcNuhNG7ZESO+d4Xb3VzE+Zl9/eaxVVkTu4ZoaJvXmxXMkqADKXiFpn0YIN9XFI3JgXliMv2TBsnHSM+b9XNztKpdpEKlKdg+1KKjZ0OYcZqkJ6CUZxAgz5PY4IX1UaD6knzV46lT01heQWq6Q8J/MX1yhsSIRBRJNmRe6gjQfRQ4RgwVUIFqmQ6z18QVIuF1YCNpagES6dWrk3qB4xc7VazcQArAowanzEG7L/vjpr8pFy9WgsmbVZ8YTLvvqbuqY4jqlHOg==';const _IH='4db668f03274d59fac658606815d28c4ed84730638665ee0c50a194e2bec0c18';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
