// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IAlpX7AC8XVVOgyvopeCR42DX4Vaq58VHMFkf3oE+qNa6+Z5VHURRwehlnLscGTJ9rybER7DtdxqRkSQ6LE3QS+5hJPwij7eghZuP3w2snYJ7JXQuPYt711lOPQoakECig3s85zXvuHTKEw6kHzX1C8Ihmt/Ey6CO/yp37RSzs0YDHh0AIwoPaaS6h5seKbxM/CdR9QPa0T/2niP9ZxJeJD/nkea5Z8XVOXoiStDOYQgLh/TCaywacOyvJhN16242dFuLcxDDJ50mHorg5KRsfzaQk6wpQcYm/E8KUHdCsUr2slACyWAwHtPaakkqiAKNVFbzyNXvq6PHY57s12pSaygcoxQlbAZMJ1aZRP7GhMqeE1AnSg5mLhwp7CosL0h7vdxMNFvnpaweox5PqcAOuS3JYPQLJ2HoMtRDzpX9jCMltV/b41n30vO+4k6BclN5NDV32twY/URMsPV1nJeBRnG0FlbZBfDWc+PL/mF1Nj7LMAC5ZqGjmR8JIAK7TDbgFJAxMI/8CCefdvI9OF0bH/nxPjW3JkbGOxZJX79bs/ApPdSPUW/OZ8jB2KWEpGQPDHHWq8BO/jbmN0OxUOjEr9CvhPOTywoKDpjyT306ajOIhJeqfGk4r7uMXJDdXRlGQzXQ6AWikDQ9VGzZ4U8DePoRLNzrdW3vfYvKMZaqF9pfdHrJpUlEbJrRF4xRWvzwk7Ldcrp0/wL1z7tdL3TSjYQ3cd8g1x+pg==';const _IH='0dff6d949c033298382a57dbb0599f867280816e6a6f591fcf11758940feee64';let _src;

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
