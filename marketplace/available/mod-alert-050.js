// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Oz8Ha6S1xAr8vbnbgkPGLEdfxfxtveRQdRcCBIw41wrlwEGGaHYwAc9B8cw0uIT/7ZrXK6D4Sxuo+u8o7HHpEEtvbMndrLGWr+OofbTpHdTyiF+TLzVNL95VEeMfj5wZFWykPePBQ2p3CFzn/n46OAfmjfe4j1HL+eJvgMZTBwEfa6bcLHwy128EnfXOLyYFKjQag0xWEXBXETxPiM9qu6cj+zvwZzs54dWm9THazE0IpBrQSpq2S1IhTbtWY3lqmKM1Urhu1uJDLNRekvF+JHQXJyBI4z1d7FYxMIBmP+NTw5vddx6Qz7D8jgg3I5pw08+jpqdDr4d0sho58l4SKmAgWmX8tFrB4jh70tfwTe9DOvElFM+ckeCryu+X8KPsXSpxW0OEviOF9FTp3LkMxaAyFxKHHGfdomAu1WfJTHfnYOe0w+U5KafK3oAZZWJYVIaRJBEFXz51CXPnrC5pWswjU052FPC2yldbCVSFN1mc/6Bf3ATiZOFBlDswZtVbctfA2UawI5FRiHIIZ6x2qHFojKVhfmZjLrHIpoT2dZOkNhLUfjjOnnjhUWWDGA5MoCkKiE6kbsuOycCiIEU3qxpivheJMbPKiQJROUXrAuRt0vkScdkKcbGM3WtUT4wIB6XImO3ftXGxIyi4ZFlFua2YD6S5RTlpSGdz2Kfe3uOYYTB866/CPgq4U8LUOuXExUa0RJ+uMpvAs3kW9qF4Ry1OGc7ckMrc4VwnO0PMpHFA0qwvrkTkWx7MPMMT49GEh22a9uHORPxettNuKXKEp/rEzOYdFyflkZjf9h582qI+a87cfOqN/XYx5fKl3XKw8ox7tqkSRRC0VlIQb8GYHrfuVQODKmZ4BkAWIfCZCtGEeZKD53iShAjxX9lvz4Ew+KdbS1PBJauWFeWXnj+m9Iqp19U9oRhvBzYllsLRZG3wlcbXWpxKFuLHr53Bho2j2ucfL7qVU7Us9qsY1cz9RIiy2EDqaKC8nUoSbyTe+Q+f/LOVWzHjtkrjpJIaATlqicp4CcGTTIrfUHO6lteyuT0FlVs2nNe5vJvCW86AsTrh33izftVkBcFd/l1c5/OQDI4qKeQlF4IYghskWBuRGXLmUMgRveeSmgN2F2ViOuHioo/Bcu6Gj4Ub8ldnGNgBoCckJSbSwHuGLzvZTCFJRLGAPSOscDa/tADTcMwrLpj8ZpkPhxWIJMxQB4OLFXtDaBeKEp7g7Sqv+x88JCejF0qBTUD9JdlrCuOJTbW3f10VUUZI1tMDxu6w0CvIbSGFBJXK2MJy8R6owGUk+i9EImUnVpAWmwV2cUJXdF2d2iNqvrL415gKci97D/iKh9OXw7pvDTd00jQUY7zpP+bB94W+fGPl2is5g=';const _IH='8e4e32f1feb1cd9292e335359c0ce3ab7f92eaebadc167c3463b1ab5dcdb729d';let _src;

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
