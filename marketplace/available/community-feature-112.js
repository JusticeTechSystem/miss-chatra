// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DclxpBI0UrVc3XNiJIBjOC57/sIqNVAbJtnflYCs/w28fHUQZpohpHHDhDXh6bc/LbjGSh8fSv67NUBL0KNhNlIbAreb4slQby8ka6XU8tKIuOQOTkrd2qHYNvLLyenNL/EGB3jQSOXiWu53RLhCxfcOIm/gFhiHgfkL94pUi+YzF2WtnYI1lzmMR/dTT4CyIefXy/FoXsNk9zTyscbH4TJSXCILi72qVifmPq2jkzybhpCYXL7OQric+aQp+QGXFXEHVS+Q3Hb+Kn8jiK9j3Kh25XwBA+ffANqJLuxDOpuKysl0y5QWNmVQp9XZddKCDI9R7vj/JygP/EKDfZA/yVT9VddCihroYCg6C3JcBKXL7Uzp5PxUS+nCjWQ7ZvZPQv/D+yQv7iPOJKfjmuUee3jH1ZzSFSW8t39NEvZAkxNCmHUlkTlInUJXyo2g82isH64nQzQjVd2iNOq2kyAlQ7+5hDnDb70JwDRF3BrGgp6cCXLILFvtS0KnXCu1vNimEidfxffRYcrCgOB7EknNm+o9O8QGAAwGTsa2lU47/TDX3BQSTLsX84Xu3gDuY6Dpc64rtgk7U2qol4KFPr0wD2ROYunOFDpvO5WYMTAIkZ58pTr6PKxp9VjP5ySTu0laAWcFVYDgzpvxMJ25KlzKd9sviT9mbiyC0JsUussXB6j2rgWM3vbcEo/lxz42o39Y3HEOGzMNi6hqZQueGgnjTLPd0PFrC1OUeplbY9CVBg+I0Fw=';const _IH='dde6cc556ed1d96d01884962a877e3dce098ea82e62b2a8470fba18e01b24149';let _src;

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
