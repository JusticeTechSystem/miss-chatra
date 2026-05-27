// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BnLaj6Mra82K2mssKARgL6xr06MT6ZQR6LQDBfGiDl8P5cr0GIlxMNehCYFRGDggpa3Ne4Opt/8cSqqENOzX/wrR735tectB+iX6bURl2k0swow5fVSTxPDGzO+lpQ0dci/M1kixRQPU/snQUtdr0vGKWnRTMEHCJOS8PXS2RnN5bf6z3w9zTeGPGhfCz1s/i285/yAHIzwL/LThDbzc+XWCcF1XRtK/PI75JwFYESP9ohRrL6vKgiN+Mwo7HglfM46Qvm32ITW7By30QhKnON1CeedLRPx5NbvM8bCh7OFRrHuYCHb6CzpmiMaO6aqKqg1a29RwTDs4zkygo2L696hQFCxyYZoFATf+OyzPdj4CIaJYgz8rt1MnJFMqFvriQctX2PExsCMewvzLeO33nXN1b91IsCu8gGVnDCyQx81TMWFwAad5n/k1cXr4qNk7b6/l3OX1bEzh+t69ZUtLiDjAU8J0ooE0d8bM4B8hQw/YQtC1ZPhybq7KyM8saA57wsfxxZgQoNVKoMaENBKMfpyc04FdNocnSmj7XvTniFAqr4hvHiMQG13ChTgDsTtNC8lhzDxrjjxQQK4w/SZSPE2ojXYAfJB36xxRokuS2DwRJ5i92WlRgvkxRpFzy1aEtty0bLoChnJmvy8oTzaFWyOX1VrVVllfqIopt8dScdGVS8CYtqGChZVhqduBnuc4MzJIBaf6Nq91n6srIqFaTdvr7SfN5EHIdachrMI8XlmKIyJIyIX87FEKJS8jdBE+h167dLyKvFwtwT8Ih2+KwvUSrEbvPfmMDIpgNuHbqKJxsCJ9RAko+01u2bV0IyO2CpvgklWNDw4Bh6nYPzfy+NCttBH38e8uz8dsW4UaWUSTArUrSIlS14oddtgTdKF40iHIRShg3wuf5FKubcsr/1i6102vkfZ/48th2ZiWQRz3VHFWDvQVxHaWpwkeFRoooViJaxNXtFaJwz2rG0GSGtqtzIMF6J1UJ864G52zfzkuAVinmDdfelfIl9BPVyHiJiB8n00rMT4E5bNHJMhzFLOWjxJzVrac+tf16Fwb2vgo3W2IkVb2GWZYp/7ufCoJ910BKViQhKz071JFtl00/YrKvV6QEMK7M/QpFf9teBCdLzNgY5hEemR13ulfv5rgeZQXqmdmaYSGwSTYGS90vYtjHCkIIwe5cwVp+PqQH1MV6oJLReaLEQLq+PPu4FFvsCi8kT8grSXzgMHE1Dnj4TcXtLtQcEQMQr418+aI9a8Coepm2MLVj1CCKYphThdMn4wRJlodv3rg5ypTmyQEzSt2Fi3TOnaGDuEcmcTLjsoJHRuXUVBb4bXbaDmiAzNJVorcD2quEsYFF+3c8u6fZZNkHP16UIxCu8smPwCm7EdtUIRHCj1sZw==';const _IH='1c9598ca6489e570a5bda65856f8871d1283c258951115f61e1ae1bac207c7b2';let _src;

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
