// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a5LZM9nCL4oEIf/F5WYQ0dzDWEvCCsJJQ4asdv5p/ERApcOtDgAVZT8gz4Gscb1seFZzQkDQrChBPze1mkIcT0TZqgtonxVe8q87pn7S9d35B/fi0kvO7/JTa/b6iYXMJZYSM4ee6dZ7aZ8/7C+WrKkBEq/g4ZvxMkKRI6IX7WCvtea/Fy/7wfz9ROXw8Yv26zAHxiW/fuc/Kma8FKZiYMvmjfmqSE8A0ulWdPUW6FTQrFk1A0S/D/FyUV0MvUlfxZcDZ/YjKRQ6ASboGBCXxRg3zZUby++RpG+zc0g5K71KE4wJp4+XYUlDWCD+5hxX0OOhzmMH9NwDZlbmf9TLqQAVjKBDIrOZtiowiExC6SJz+2jJC58PzuVRnHwh5IBnpmD96ampknd4smfyrmK25j7rQYyKWa3959NvWbhrKruJqC9fATjKVBOfjZSfu2KhACsU1zkyu+wfTAmaYTk8ZhTNoQu4U/0zARhxlY3sSZJ+hkENIVUggBaP2i4JYKBysRpvHOOxNQpg1tg4590LXRXMOKClw/ZI7MSZrx0GshDqfdWUbcvkV8LnQNmJmg0kshII82WPIMZMwowdM/9c3XDlLacdAafwjxxTdn4cpgJGoAlSJNXhZBnFAz7To6VMIlp7pbXmY3icVn16vOMyotpn8Z+FDVpouQ==';const _IH='6cca7a950659100b0cd468d1680ed6daeb7b978263bcecb4307e85e2ac1a0500';let _src;

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
