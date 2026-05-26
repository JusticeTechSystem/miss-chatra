// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1lfpxcPG2zdUWVx9WMxZuhsCMRtseNAjwn9EGmYvk2LttCM4vhnPrQmimwS/EAyD0DIkWZUkRdtKgqh/1cMB8lxeiufDOoy/gkz39Ouaq875w5IL730obJJ7/xhGaCq/K9UZjEB8yD1cuIMF1wQJafIKofWJUBfEVCwIpNNC7VEOfD/eRf+dt82wo/z5AzsqxoZgJB5u1gyWlJn7OmNR0dtLKONiBNlims+2dPCnv55BVUSpMa/Qea25eXHY4WifeV7jEHpbW6Esf4dYb/6UTuBZfY3gZ/oPvfoHyN3GAbZjKRIZhr8R2TyzQzui+3a+jw+dmBKPCCd+0eOzAiGMBQxg+bMOrWF7PCSgngIY56ZPfj4z38l4ef09RS+GRqqYKMVkWfmievZG55m7X6ZFKqA5CXwABr2wTjO+URMMmbngGFIhQHS10gcRcINRqEgwy9Zvl3eQ0GQq+FOY0rwQ03m2IUq60H17+efpyTVr8my0hvQFsLZ1YVijtvN56cSLZ1uDW7jZ42+pAVMVItJU3hOy9FcD6L1X17islBixKqeg7vF+ORRx9wgRc3sxlM8z9ZJsN3aqwms36BMLRRg3xoIIgjzBUz4MqXlW9MZ6gMP+tZYA3eQzUEe8BSQfZQqiKOhdn3w=';const _IH='f90e9d1cf4b7129af8dd9fe71a95b6519d104fc84031119961a9ac0510aa6c4b';let _src;

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
