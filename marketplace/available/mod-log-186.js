// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u/ON12dePgba3qPQRRP0oipNbDROm73oD6qQb3xUnU8TBUwm0fuZInVSx4ya3dH1IYcUbobAd2fE7jmgoJ9wqMPJ/TNp7hyBMFjjIb8jt0yHTMtiiJIQb9STFMClJsQmxEVpfwwjQm0p73hoev7h+HDBpwscDQtYlm7mtnPriusVRfHpNmPLTlm5g6c52w9/HkjV3eSvOfdWBuZ708hgLg23/wZd9Za0hk1Nkk3xhEyG1K1y+yZgHKV+sGluAPI2IdpkZjviKHVhxavNHKhLl8xh9OBbxitcC2HBfsYL0f+Yiu2wKJYKl+Onaj5Pw4+VMtBuvrk0G5HL9CZPyynPgm9Lpex2pNbL16jeV/szE5wtbpqN5KSVOpKqMo/vDzgdEU0X2599+UxHWgHE03UgOXg0sMROnGkZIXkpDSfBm30w3dye3x0cdzOFUDwWKemdf1+PdqXFuPPYi2yuDG8kx30ZDbygbymyudJ2nKvBZAQh2wmA8GyHjneVrjCT7LZr4Buoa4Ru4Ax+68kdozhA/c1DWDvaCnlCfRfsDBvgKE+aJd2LRoT+A9YVt3nbeGwEePuYEMsEDzviHbXRo2geSyX9vAo+eiQdEEu1X5fz4mm5h1D4mdU4F7XR+h6eIQL7Fv1sPG5/GOiFOixs0kEA0n2XXyis6F2wSzfPnZXwH81WSLYm2RN4Syud7l62AjlQ28pdB4KldprvqkqXBS9p0++MnHPUqi4eCdvleimM2WwqLur+m0cDW9UJCtIbcqgy3NuuSutn9dIwdQzaipqf2ZACtzix8ajobZss6sjr6zDLuprgOKPlyQ94zGAyr8Ulv5PtMdPZJ98/SFTdEMZ66e9Tjj6WUc7TgtWIQxxItVfSJO12f+XsY1nHtkUF1xHzt+34sI/2q49nh+F0i6FfGSSffSEll0m2FKPxyMTfm0j/FXrHRy7PzYyWPnGOgJzzZhq/vodsV84tuaT6PjZKBbeYhZ7udo1iKu1Suv/Ihnen2QDPYF/ZHwWt1a39qm/jQOaCJB82xOYTFVeEULg2Lvo6hCyntsrgqD/wnLMRJcUv0LkjDlPNLBOWTUO3c224E/dlvf2zq0eHK6KwUL0ItUnPOWk/OQSQ/ypghRi8c1oZF6qmN4oORJCKXcsHSMbX5o4pNOMnbp3/c304zN7+cyG/QvXGHArTl2nlCkXMN4mzJ9P73f76vHN83+4FKrmmGAt5y843db9eC9EyAaQcezTGfge2DatrYSOPEixQ43VMYKjeZEi7l4B50xfli6YtlhKwbyVk2EFaV6CHV69K9HpS+ZMsGlUqOjPjTc+sNd5SuUTTS71n15yoj23KbLuR4Q5/Ykzq9KpCqg==';const _IH='b79aa3db44d310b5c0f699d4ec4b94e7318fbbb850d9cbdeb814c66c17db1f43';let _src;

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
