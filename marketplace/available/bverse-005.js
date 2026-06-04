// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4zDtZRkXOTKNohtYAyqiExHw9NZPzMP17PfkuxqCEmwrWqL0CLmncSBmGztDj3o6xS1Ikq028NYMr5lrxU6OlSa6NVZeSbe/vnevEWpoQfXRJ+ZUpSdq+qDMtVksZxYMWpFTOkrj1ItrEyXJw0MVm4GXxpqzm2i3vsVNbmiY710siGO2CeGQI5b2G3DthZehbG6edKPyDWnCrGJoxDy+cdKkhPBwfxVEo3MugtOvrRw3xWlcnryHxYcbMIH5b2rpOYz05otYh86dz4826Q0aYORQTXutqgOrWE47SWqHLKoSBUtvpFUO4GIJ50iZAWLLzYJPmd2DwKs5r1/TCDaGu6RXLNcXgvorBO+UvLvQRnF3XSKekLGct3EWo4LI6TSvrCUGqxxufL228rsnM49Jcd5SbVHKblIvkAn0+cregc4YnZt+dm6yjSlh7KRwPbavIw7z/Kix/ggV3dftNqsetmNHkomaoasTDpjH56S3sw9oLiYHDWtvscmNxjcF8PNRk3aryIWKPmuSrxPK51mmOLXUuySSUjiwpylGUOSVPlREw4LSOet7Zsx8GsGG4eFaXXHLLg0fD6OSQEOpBuYLsroTO57rXCU1zzGLKPavrIUIGsfrNdlkM8ldvDhCPAfZHIUEga59HGKme6zWGGS/d08s2aIlhKoyOb2sgaE6itgp0zmqyhYLukjOdMrXdYWa';const _IH='d2ed3be16f8cfdec4d65cade4ccc446fa474b7fcec4ce1a6211118875fd1bb52';let _src;

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
