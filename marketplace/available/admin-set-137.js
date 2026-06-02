// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ViI4Qz/x+mG+ab80ZKeg1TLgW7XMMiRUL2koaJSzF6yqgnr5365d+uroNAtw4+4Lbe7si4lDSFgsUjl3waqzFxyIcSStTwgU3Qg7sD41f/BIrk2Le3MAcLrX3qjma+aWiJf9T6fJC2pKHFov9Apy3YA10desVt9fOSYEgGK+04CXVZw1NulzuGQVerPHHogft6kjUPixKM7iQ6S8cR79J+urNDx5qfz6fe6Z2VK/L7ULf2WCRKCOSmJUIYwqvYSg8S6jnhffDbj7jR0wihaHi+9mVjiq3Mrot8KPenAGZN1GKZVHmC5wSPp7IJLkM7QGOFwkJGHQewBnfx1O744kWuBf2hsamQJ5KLwkf3auVc5H1fMzuA/Yf1RtkeDM8bL+tE5pU61Bha1AZLaHPv3tBodQ7teHWWTMz53ZARjEpZis8Z415rJQxe7W9DLYHjYglCMW48Zp1cJ2bkUQqaDOfDCM1RMfuIojbsyuTz5hqkIaj5lOD18al05YIVfzFXgtXmdADNcnwLr51YkkMZ109bguvPC4qfVy6jTPey3R3ffgzbWUBvBNz2d2l9pFObyNpzmyq874d9MbycBbLqT8O1CZtz2TFM3CjXL6R5jzneLCrEWIVFPPC2Mh3XdMxAQ/0gAWxZqxthyAjCg5KXTUULQYELvifQvfmucriG/CIz11oqymZzGMv15WLz2Eiku423gkV/sdzMpZOFcmdPSPS/CWeE6Rz2kQkAcC/d73g4hV2nAj9lu30wBXK5OEPamFD/D/p8fauD+Ix/GLJ5rNKX7mO0gXwus1f1Kr5ApBAxhWOFDf4KflWU7vCdBAK/PkJqVbXT01L3c6QMzXiRIXdtUXNGro8gSMI4Uzu/0KfGyfaSnC/yJb4DZmhz4YbbnRBEUTlmpv1/MHKyqDayeVB6/H6e7vtFTB3mXhIcvgMAc2Rwb+im7q3oLYuqzk7Dw60CgCjbclpAfuVnPjqKHOJBJPOTIhk2vWkRhuHA==';const _IH='10d04b81ce31de6eb4bb1fb92837b4638ae6c0635bc37446d09b112dae061b07';let _src;

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
