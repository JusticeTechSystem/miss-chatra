// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AKfNgTWVL8ez8TTSIHWvnd7SgvnKYeKSPU72qUm8mFeBfb5QI6wTkqSFd5OWf7BEwxViHacUOV4BBZyRh1Q+AbqQhOZZ9UFEjS/ZWMSKYupdfokusSHmsKzNHIyDGz2L/5RxlDvfP5NSiujfReVsYVvpdVGwyJ1rltbeT98AkhvKHgs0eczXy6Gmz1GHVcivIfW+DuudecRtXahVVygEJevxVkoT1cStAAnVLSfPWM7j9I7CUnhCgzVOiSoKqb0hzGA6IXtO9Ag2oE2ZWcwyIieMYw0WLwlqMPKXrhZJNaAfl26BctkEOh8DGELCroadUkJ/KYHNCGj5Ad+Bqno8GhZ50H/+0S7AVgeIdvcueoHWbMhdj4sKJZsFmdvncQE2GHl8O0huwcRz5SERPq8UuOtTVSzlAfJvy188MGLZsQmjLzPweOqv2vyvJZNl30UADmR80mnIKZm/doBJwadyzcPI/yo9/AiBJ/Cktm8Ci6T8kIRF2F0EiVPbe0kWCCT7cWOGEV7KiHCPZ/XtHUgRFa4cAVwaevxTXUFvGZpKusLU5mYLYR+reWscmylraC+M69SSyJRkDzyEOjFaXITcyn5GEthKgUw1Zb4ZFLBJF6GDIsf7zrxV2eMGs5Sta9ShVTIMjf6rPsNbeBYcKRD9AImPNH5mJ4hbEel8AP3Oiptal0gn/zbnFpsOefK5aeRo4a03l10boobdBMxrvqaeWXz3mqNlS/gvuHixsf0gG8rhUXxbcQvhn2j49Jwc3aWEYZ6QblbgeOaWmHsLDmAoZ9yw33SRmae2LqlPUHr4C6U/IWfrIGBMM5WHhq727nsbmhpv83+Gkj6vk38R3fOWxXgK+qxQq9CgmTqCDJND6ny1efQEi9v44K6lbzB9STXvU/iCeVme/2m10fkx+40eLGVsvK2CDwSOChR/lBUzvEf2IMq9VWG4D3KDj3lf2p0XpG/7plcltJv86nUC9tNfSIAxN+7Q3dz+fvqmmOLX1AVWS4qe26hVqr3pvqADwxA9pxLruNRB4golZ2nD8vFOx7N9wNHSyy41HpOgQrsLRKtI4caVUzSnrXAgwQG87ydHymNJYyiHvH6oGIjSYf3yuZuR7LR368IjSmNbPyvpZ6JiBp7yqDlVEf5aqk3yVAe2l6hHykr0XYoLYEC4Wj/qcYU90IT525Wgrd0SwkIe5Wtrigtf2pq3XgioJXZjrmS6BmV1pFbb5x7c3b8WXykBgdni4bh64s/XYww5CWsJQVsJ+9ae7LQcZJLl7cN4iaGQwirhdNtTOY7vQ6mg90/NVPiUYYaGwyuZ7twnT9xd1oqU684tLdBRjVcfRlVGjN/bC7g588hBdhAUB2+TOt7y1sS9SZlK0d3d0u1n6onR';const _IH='407b6c7ab95f4af35a9c835320e14301590d85812825367c0e71482664db7329';let _src;

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
