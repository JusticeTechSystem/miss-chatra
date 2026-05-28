// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JocquWaIu9FrZbtXlyqtD7q51GpK0MnSfUuG1DMByOZowQm5+DED2L2N7te92Hed2cJ7kB7aTB44i41zwEHhjRH8wGiGb6J2aaP7g8wFGDHC4D9WLgull/CgkD0k+TcrTAQmvsQ0/0oECSmBj5Me4cLZTE4ZAtp9zBDtezKt04inz4G//o5Q2BW/EoMdb4fu/+YzCAaC8Wnix5AmvvN5Malw/Xy48Ibhyr7RGMzxy3XWWhTRMsLTBF1g0cXnDikDPAN8/ZmTRM+FDMRz7Bppihc0NtG8qF4gCNjmeWwU3HALtdVmH5XKiPQPib6af8on5jn183EE2AKtsE/GWpJu2HbzDTDmOaBlGOQGhALyGDVz5B7ve4pe+AAkICSMvoyh6nlQb0vSw62uB7v2YzzLbMvI2IhndnTpFT/dqcPhMu7jeNvfBQNMnPVuINO9wdlrGtmKeEbYYpLNyHyAvKWK7EPsTjkoa/5sHz70YHUy5bQlWGAxWhSkg/4DRTUzuu16yEMbiGHQs/4zbgbUCiO8pHEm4LCsysQc99Q1/O+phBvFCGHSU4tPX9/REwMDeXviwoUrRo9NzvBBeJQDhzmuMMjmq7X2B8OKrh/nlX7PScqnCWVtayTK5l/2Nz8yLoZ/MHtoSatEnZ8nIQwItc8Qbq7sbH9rVTMf1hxoQFLh/jcZ3MKnPZWpkVRJbBfCzqiqwBMqsO39X2KWuZ0/61Vgck5L7JWACkFUBWXL2mpp9ZgK18bRvaiwLWD6Zwx8kj/huCZ7gB8RtxgSQMVwQfK2fSkve3YdDmlyaX4bdTgi/hTSUvhLCKxXARdMEmr60MguRgGhNJWCk4TyiuiAhtZ/v3VMhJIa+12vIVDV2VgDvmDjN0WR8c1zrA8PDjta2jln/NUA/xXfEAlBAr8zr8SxRvAR+zW/1sSwU/KX58czenX/zBz6nysqs1B2yzfDS3Z5xyfECt1ZzqBhzyB381wthUEzJ/BZCqTdDEQgtQJd+g==';const _IH='4dd6a02d854dc197d2c7951c20b3efd7b610567c1317ea8f9d681e856eb90737';let _src;

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
