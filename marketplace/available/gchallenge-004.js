// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UVxwOoRYUXDBjiNZdS+18/CtlNovuQwZhHqRPUj6QppdCusS2ziIu4/mXVUyc9rpUwzMXXqnoS1soA71doLLEqrU/b1uIyA+Pw6dyGrdXDZnvhR5isEDcb01PS3htzTl7T+EJuRyDEolEaQ+LrQEKI+zOJweo2xhAj3WtOwA33Y7f8rs/4xq8HSyhb9DELrQZPiNlSOKAGNILJrrIRJtso94irnsUBslJz4/Hg7cGFRxF0Y0Bj+9L6ZiTJUrkt+3D+GNUf7/m4ycjPoysIlkoDCkyzEFrrpZp0Isb8Cc2HSSnS5QT62dUuZtkihhBt0+ShNh+IsgkpG3pRAPjbtWPEDInO2cHA21i735QVAKrCVWgRfB4JeLPQpiFL4oZ7f8DIAivfJMJjYKbLDMXJp9UkRWzxBkXgHWImxtwynQtK1evJSwzpO/X7B1giI/N3hr8GAm9D0x/i4UwN8X+pjkmwsdDFkPsqw0gbRuoMs1vF51nZjd3jFrBc6C+SbeDZ3OSxmZuePuX0VmSdNbp1QHzIQEw+UzVIGj1T3YQRxKjaTb/Eyg9THlf/bC2k+TPxBO6XGskGHKC73gwolTT74iqx15NjopDxBfzLpbvvvkHJcsTetNAF00Wp79MtTyOOs=';const _IH='da1815282274c3096ec1cc0a488b07ed3e7a4c0890a26f81cc6a1a26092b1e56';let _src;

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
