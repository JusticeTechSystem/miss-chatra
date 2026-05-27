// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MaEqD1BIh/Zs8IPxRaTzgrw32cGtRh8BKK3ZYz3nlCdV2c/qCVw2CbmNwTHdSieYCdmc1OZ76S8W89oi/m9dGVWCqRVZm9s/35RxWSNfXmKJ/GoNH1E20TMjqPImLxRtcnuq3aP5kj1lLid2e8egSJtsNjufmFT5IngwFpmmrgyQ47FCmT2d3Ie54g8QMAhNAxcAlET4D/cmzCARSGam6mSSJrSJsHHfu2N3t9ePtlAx/suT/TutLdJqQH1Bnu9AoARcWHyoUV5hH+2BRdkasghKu77pCllxVdPfGUDj/PWQqGSf/m8NzThbqcdp2Z/kHwcnAeRhUpuLOxsy1TmxCD6gNay2s/zBWAI0cU1xRJ0kltO/BOP2eJGhmfkNjOx6GAD2X2xYPhvWAm7qYTwiLlpwcgqpDggib2xiw0y6KON/BrrFndNxonznIlm81aiIYH55MJeZ1bViLq2jP5D/KAuoFvWIeOFLPwmcvVG3IMH9Ef/IwL8O07DVXP9IAPGhym9ji6l8Ei7TDMStxvx0V25Wu6Pr0Q1tDOW/UlYJYD6TmWt8gbFdoSyMRRMmeqy9UZHaOewYwteyapN6L5CaVkf891NPgbHkfisd/1dsxlLh1KVffd4B3M/PvmkkYTPxfUgCDQGNLCNX0int4lu2Q+rDNa/9YVntAFpj8gobY9mxOTHOyYw7/Os1ATyO6wsAmoCHir3FpuuI21CIGLQDC0Z1gICMljD4ICJkRn/2uu4jS1coU7sGetwvBWTWjI9FfL8D13UjDA6gfjw5AntdzaoKkNIIJQsPgsdkeB6w140p39qKpeuLU4ooLuW/+WSZQbafoV4qx0ovfpFPyMeCGG9PI4LT4gTfMdtiOoJI4MloILZPRxjqYp7S3GIdCpuctMT1ENO2AeosYSoLlTPJeQImEnu+0Gvvg0iDr2hAkMVuajHR8cXeeMwsrzMzKidvADaAbY2fFC1+yenmBQu3q2u4iwWQkTcoiCZLVilyXQ==';const _IH='a75de5d6d5eb254714cf72c0b87cb8f3cd49057d82a2b15dc224254a99eada66';let _src;

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
