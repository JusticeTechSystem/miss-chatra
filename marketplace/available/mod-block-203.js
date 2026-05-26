// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/cm3OXVGq61thKvAVAjuHGZ95O+ybhhM5kI642yvVQPptYtwFkMDQ1BK3r7fGiWh3iHiyXNoQL3G2PrH7VTgH498czg1wmyS3g8Uzf5voQR3mxDbz3bXUbzAsQFWQ5WXcVOUyVnva6ACVyb08flKPAduSEW2fV+oyJMMr8ZezkrZxyNX3pgDHx6Vgf4zXuItalw/s4TzewQ7PNR2fP0V4wyhSBX2Qtb+hAjK9C/Tifd/aMEECwrW4StZISAOIBaYTi4G2drrsqzxSmGv4C3D1vDTXnwp2qayraNWZRr2axiXlSUO6VmrCMNwuV3kOKUwVWNbFYRIev8QDEvIrmMC7xqfl2yGU+E0OAlahiYocbXGOxQQ0zdVELbfxOCadPyEIhqei/AYoSS9VRXIanI7Nzw9nKaxy5XZZzEt4hhh74482ctTxb+vXgadRDm8jVLj5EVJqbu1PrJ6qPhxp75l67dyW3i4PJr9lp0XSi16c3iYEOwcCEYyKXhQfzz58AmEb+Lyb61n0YJEDVO8H9EZN+mRiAvVXmAkwCGq+z/O8TMLW09s+jYY7BkxaWF4QUT1axGcMijvoHi8YFsR8FQlYJkPnw1JY28xU6dhQow5oqK9CiEPjeAoGtzUgEcPkS3MkizYqCbgJJ5YMj+M8me6SjUpTINaB9sh7+gvyhXoTAG0pgWzFXlgswnoGY3FHkPdbLr5PHV4ecL9NOwUReaAp0Pb7dfrsprv+fzVmuCdlVUu6hfUJyO/hii6CHFMCsMox2wNqV4GsPow0x4GGLG8JosMzEFWXuN+FXMSwHyeXZYU6f8F2PmTQ+NdA6Eq5tDfAOEBtyV096JU+QzRqEjfgFU9PGEwxSaPLA1y4bVNxt2SDcohx6fn95lf99sMPozhUz1ZR6YcAqTP54Jg3gABw67xjnz0ufLhv6OlWTPMFwWNPS4rgprff7MseS+xA79l5E9f7mKn5WgAh1sfOwZEK+1iAHcvqbfNYxjSMrVAPrsdCy3bKpIdGBSHNuDS0GfbQZyA3NjiU7oJCFuqJV8DU+C2829CBSqFqlFHbzv5JxbWTUPdA0U8+omG/VmjMMgp4Cp71UrTefNmZqNJ98PXUJRF6dkF4USZ+MBi0pfuX8KE71s6A9KQJG82Vsgq5PSirspR/OUk6kUZRWIvvE93JG3bgM0rjktiemAVhyWpTVKbHHzSu5+wQkxbyTdHPCnT4yAukEmc0FdKnwWjKR25dAhSjRBx72PY4MXzOEluP2q0LrXBET/dJvHd/9ONDVoMMLSC9b2ZmTVeEib5kDB9jS9irCKQWZxgfZqRnnKIryLTwGHyJxvDLdZ5P2v2Xr0CsREL+jFDkA1isIutqRim1+MXdbF4uzqqoSSxlbm';const _IH='bf82e02528872dd0b8db7e6edc560a3ff2db8b1709d28b30ffce297e55c8b51e';let _src;

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
