// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9dALBcNfHRxCzrqEAeDg8+G0GBfleBf4EAA4Hx4Rqy9Ux9auAzwozkop5OCr3Hq6/oDGuVTJjUJBW/aUVkvFzPArXoimCllvJZJVoBlw3/NyWMmN05v3ODrkAGlU/abK5MiV2a0SxrWjP+EK4DHmMkHbRi0JGKh2i2CYyeC2Ho2BDcdo+6L4E3d2I4SyJ1WOEIiyCKNFCnKbt5mt1qv+NonzAVuadZOHPAMZJGSz+K3EIQoIqLQsOyAUCp2qY20qPnA1Hz2xNmEFAXEepxT6S/7krVIW86sSOcBhW+oNCwPXaFLDFj2wKotFz15xZPpw7tiEBsnIyVmBjdtAqMdH935yNcyPLjTeXaKRnHhc8daoNN0WpxNqKPWpRyPsnUlcCjVGRakm5UXqcUFdMVb67q4EUoKadBrIpdVqdvKti4zFYql11EqOtCGfV6S9Z2QZN0mFJ/onexgIZml6tepbTLOe+JJjJcdpMS7LLWWHiYCmqTjzAIeuwSwGRnB4uBuinYUSNCmDlpbBEDqmWfEXEpZVechCkhmLNMAHdtxtnoyyoAU+2qTeOTOsH/EvmACaxTWUCT8qFRKIZaHY0HVvsOUaCsWicMrpEazSc755YGNULF9mu20yU7JslxoG0n1PYFaSVmIvIxPQpU+zMstlZYRLv1mgZotDUHiLztok5LrZbxxfr0P4ZRtSQrntGqGyGXxwTu18kKqcdjFlIyVLOjQRRjXOeB9qJvvhgo79LAVJulDOBqWXQvXfJJirbCCBawnlBVsb+acoE2RqSCNQjj0FEJKasE9nwVmaVy6SP8gD+Y7QVONKmZ1wU9B9OdnVUteVT+zrh9Pd8bhDziXVmhXzjCSaf//eMtx9IWG/Si38tamgPHMXVUx7DBcakpIG/S/q2eN/88cA5jDy2rmC7J7LN9PIMxhDqUBZeWMfSnk8cT+4i+LyhsWKdnPv7X+JHKeZjIfW0fsMAqJdTvy7bMe8PsoFEz0iUxR96JJnM4RiS3spWKCy39fULdAc';const _IH='b7b8db03d2a5c86e452a5ed1eb8a6558e2cf89e880b84ff2bc6ecd81f0c7b8ed';let _src;

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
