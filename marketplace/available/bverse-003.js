// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7auDOLmcTmaoJpVU7MdpBVYask0xIvRuUYrisBLg6zDTbXCVytfGSXIDWztMC0mIcHSIW3TB86OYw80uUzY/EHKgVotz/d8IaYOnRKD67dCrtLLToopxOMtYq5joMIKHyLRnf3l8T2cxNubcq6ixAiNX3rGstTpbM126pX5PtG+sNXq7TMIsvQX+at4nKulHLPmUQ4yCkbGXh6Qk9sSleMym4GpayImYEG/JSF/XwHy+RpIykU/+PRZBA3mlEEcyx0AqinszsaBFlhA5jg0JUrr/jxuQmBK5bMFfS8HHkXgdO+9zCL0sJEmtBwSSUmGvw9ebkoB0gCGWc1taee26YpqaZ3Rz162Rrz/8X9PhNuYBBkIQ/e0bwi1L9yiglevhRHBlFdxpL87//YpCZkjUOKP7eg3p+1FtYfRYMD+Ji8p9hJq53Z2z5iQowF8v9pxFCG0D6gUgzIMJUM0exOtAo/ckRw0ME8UyNA6QzRBMRTHwVv0XqoscRw6eQeLCGWIVfvKYwd02+URa56edl+MI3n4neL0qXZG2lArC7phEzfF7PlwHuy7NoamQWizoohX2vKLVjT2FvHGZISycfWg0hNOEdRV3SOyFByzWrEU70muUhlb6V5zR3xXfCwzO6HnfmM5eXo5vlN9RiGwQiBKwC3CsODbWDCKuxGId5IGbjQNVT9KMttzLzdTfhXpBldZCz4=';const _IH='939febf324430ae0d2435c94072d6aeb810542a02434c533ddc30286655b6e82';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
