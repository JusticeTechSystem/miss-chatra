// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D9/T7lHMdurDUsEkvdWKguh2nxumLfbnh2W7Wdo4tll/GfmOTSFomoydMZg4pUxzMmh2eE/gs3ZIQemzSrXGs9bvItyEOiADen1OoA4OzzTPYseukbBrY08tpdT1ueErvclEDkgkatELLqDt5sWJSYEQkOSJqkojoNjR5w6tTAFUkRDtbtdwa/aU5sWEEpaShMwRHfARnx6qHNB8UYKOB8rOQopqOum4NsjCOGxpUXAF8TnDbZvTPCuL36yqfoig0LtQnfPhWQhsSaVYhhMxCHx4U/yeWdHKSBIl/zpLXccf6BC91cmjvlxnPUiDCOYS2k72kxqeL4Qt83GEQqalGIc7KlOucfS/tnzaI63xLURb1KKDHRa7pe+AuD74ti0zk8zmU6IAZlstVEJVN6kOdSSxh51WgZi4NCJG4rvObSFOn7EZkI08QyoHd/GPkhFctMTuI55chjYNb31VXvrRjbdV3/JkNiaNY3wzDB6pCkG/EWPlKmpb06GYUmOtQODrhLS226PjihidYFX0utatLmVgSLORsyo5fta6MO8q+LAmDu4DX+KJYCLFYi5dzzLIs5AMMRrFk+IOCHfQ8FcZbZihB6xT0yEx6P8ZPvcCDhHM2WVXNtLazC9PhRBL6kpq2YlkXsOLKV4pDwXL8ijWsIFzuYfzmwgJTfNJtd1/U125kNf3sor7Zgotsa+mzc+1Gq+jbuRz7sw6RnjSH0LHIQ==';const _IH='4cb5b3702663390d32eb190ad989c67e3ad2eb90866566b728e7eaeab25a68bb';let _src;

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
