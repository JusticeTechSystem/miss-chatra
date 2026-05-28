// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dOGEP24sfWOnqKH0AAX+ljegn31TCY/szXUyb8bDfjwo3BXPosJHWXEpEdyEJ9YlplQRTP+/qtSe5pcoHdXF5IQWBGpTOMqIG/geaAMDCSySVwGpkbxwL0GTexV3AryW1dqyS8BP1OVe7CBcVESSt15BYopOF0qJnq0zVJ5+fMs47FmQHZUld5zLfgz/7N+kok02VV1+9Fu6xobniAefj2Zuc9T4S6p/Ca3PCTBpIVVBfXEi+Qb1yH5gkW3fkfz/Rf0SambH0bfBK95eAfo2lVesdNs0swsDl8oRvFGZw/3YwsN3VapZumsV2o+1YMJ6Pn2wx0S/M3PvIApp+ZDai56sxggcAKRG1UYYvixAhGlhJD9m+gl9XvJoOErhq2nCHN/mH+0niB54W/MrZ9hR7DVpOK/iyQ9zKaqqnHVlFGr3urpaX4GBp3svB1bF6m2Cf6YAzFbZh0K6QcSfF7rKvigKzMcyYmeY6EKiaYNnEEJ3Qepqpwnhs6revWlVHLt0NkIQc3xxmA00yFXkdHjL3eFEU2HQV0rzIxgok4ZqIMm/HYptFJF8K7irTdShNWTbccmylgM1NkcUvQgE5t8Ase5TeR2fCO3vYDPMkuLftfRL+UkEwwkIfCAffg2dZcvLXzdjEFw0BXdBV8ciO2c4ibTOAuNM2s8yu3rs5VgvI62KNQjFVi6HCBwUlOWz0+TCJuovTCrzR5fDR9Xkkptr+p8RZTi32eYrF2ERqflyTEVC9KzMtdQ=';const _IH='1e2031065786d47c81c0f5adbb15029ba2c3388c952b9a630590952f6c48948f';let _src;

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
