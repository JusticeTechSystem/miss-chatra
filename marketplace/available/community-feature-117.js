// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ99N5TNpu2SpVZ4cHV3QVKtKOXVT3NAajvUT0ZusGFzPidIiiXodOd9WmfS2qePdg45+5G5gY2F/Cr6Pgp0qXdSqyxFXuUJHb0MawXl5jrbn1e6QnP1aAkwBHQXycIm+SBSNCSeZoeP4juzEXIBGCXKr9ZX3S0xDRBpKld5HpykCvd42CUsKrsvf9FRR4CH7iWgM6VtGsniKrlxE7WLZWM/+Kkb4hZPqAsHzfComufcFlOf0n650eE57aEJi2djNdfOof4hZbyfNkOYEFGk1HTwMAMMWSJl1QgL9M7fzi2idEzwFsqOLEF/UzEfV8p+CTD1WVBjBQliRURBnf1E2/tTKpuBhZMVJVHnur0svX3rC9w3/QEIQ4lnt9XrT4HvkeY1wvYxxm8v5Df24ZnZbhPInh6kwSfBgSia9Zs7f4MG08AQKO74a+2mHlxvRJI7KNU0A5Z+2VeLKmrnttRCCP5QW1oj6Hv984tZcVDl+RQMkARb3Y6lAOhG8gkA4vTQMQ21CCLVTqEigZIInkMKY8xbap+wzMIv9GedIaTUXp0F6xPd5PFS1b33CxOfjiJjTBlEDIeAliapC59xAWjLQUV3LBtvSVgH8XsaOucnb+ePmar9YJjnF3vD2zMG+5VdX8Zg3pVWL4VaywOqX8Q1SP+3iFAcYSV5GkPTYfWQzj5Qi3BO9tJC/ck5Jo0gpq40DpEK4BrDoz/ttVmdKiSLi+wyZ7KDK0Yh1J28FFmKDkN22Clac';const _IH='21f55703b3e28aa5db73410efcfdb6af578b0e29bf956fba130f2fbf938efdb9';let _src;

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
