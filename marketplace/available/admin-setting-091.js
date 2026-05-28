// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nXAgZEDv8HvyaRIDMwDBVwr2nCAogo5ngZydNmuh6CTZTaqAaE76f0BixBFuAZ1hpmsv8am8a0nNujN94lbSjdtm0ojZzcIH/6+gwmznITx+CugVHPJE/VYEPDYZGkMRPF0LwwtEzBbg/GsoeRwscrH976qYs6qpz3erUoBQvxYzBb0e+6YyaKJQ0FX7JyD1ttAjg9BTCb/r4kyh8FHe0hymMsLVkOJLPLtr2IqKOOW5Txhu6SPklkQMikW5vTJpjXdzpLcFfMYnrvsfIuwPZ19OVvNPsA0++eTsn/dvixJV+uyQTVU5svcWLmn2pqIJaAxK+hI+3W2XEju8zTIh7v8oHKUKw/dKO+N1HDOArpiKccApAJSvlaKNiHMoIVza+F3zs7w31bd+MGUg27myEcV8hrVJiUra5Xz4BA7NaW5ZxQ2yR6nuGhoR53nplp1uutZhLVuy2WVRH4hysxBkjfaKII1Za8goWhbeTjic7mTZRi3nRq3rODkHtepcrzVcM8LRE145g9n3gmbu0iQybU05ZtC47Ym5GRhI3WYeY9ujV1yMTMetplNhOwYwftFk7h+GoVw2IwycKid+aWdEyIsM3/SdU3KOIzHBX7yYLzkpaYqbuzgNy/JawmIwy6YfGupRd7rbgWoMuY2VwBrEVcvNBdcjdclIxqfP4bnYrxmXZFVPe4yx3xxedmk8juJXfK2woxgaiR9W4hpEeomE2s0+9xAbPVRUUmi9DmDPMS4yxyak4p2g2h1Iwpiz+VHvMiPWt39V3ATSMIUnYV6pRidaoGeFi7gaHX9yjuXIICjlLBvPifDoBy0Ame5FlXhr1xgidtMEonjsIXBYOVGMrkTFbbcKlw8Ke8Ug3TkxU76GPBTTM4aqkVzgo5AfyQdrU5vzGwm6g52elzj4yO9jiv3yO6XiowvGJt3eG1eDyqNzJDoWqD1GJvJgX2xq2X8GhLNkvgIjCw+5FDHbjyX7vbY6kI5IYaVT6PUoV5fJsn7HyzrcDmvcVYnwomYb/lyIoWGQqA==';const _IH='51a5d14c551a3eb127a6beb41d41fe0570596c28b41ca866407000c6be63e86a';let _src;

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
