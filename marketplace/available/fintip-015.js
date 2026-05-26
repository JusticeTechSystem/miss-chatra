// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hk62NS3G5fvN+2gwZq3ye3SX6iDJ/vmFS9CoKzjpWg3orrR9p5/agiWxMDpff7eLbNzmrf7g5K0J/Hqskdy1HqC85wUDtT8rM9d49hP9idir7zrfH+Sf9+IEbPgiDfJuPdZ7+kI+aNu4M6aOBW2U/a1cCgQDXk6sieHy8Q2D4iJd+rvqdAR6mW8CysExw7LzYsja5AQGYOoUce1c2yVOYqc082tKIywQddEcGgZGN0Hc8weAj16CAovU3JZPOQw99oD67Kz79yCcRJ+2f7c1pD19LIC/StUGTqLIlhr1WzccEBKBv+62zF0PtcGJQDNerc7YValRDyretJqiBAGuiRsBK2zwsokZnjQtnl080KQSLVxM3bIu6cqGMq314vrVixHBw5aLxHL59x8JJFhLZxo8qVFANqKN7VYcrfudH1l9DuzbE9bc2kL2UUFR0iTqR2GBerHnAZgskhqpJMOOxMMWdSYwAQGiuGg3MJDtTuDSuN8FFsFn1OKFYiNk59ShqI5gVbggBCK0Aa+5tdpGKqtCON1pzXsVaBvWXCidRPoySH7UarRuLTOtRQ6C+1srhArbzBKpn/cgk70MoN5ioITFZnsaFzztYxPsGhVHf6OmKxIAI0XgFaiaoiuYx/zmzrO4D9OSb7m5fbPM1CXG6KyakA7Cz8KBydzyPFHhdTmV+DI4KCjPkfJGI/y03nV8kNXow6QxFToYKypBLjXG3HIAzJTNctzWsAHpm1dkFebJIXdFhQHhmyg1GUXqgb44w8Yga1Mj19jo+gY4e3zh6Xz4Bh07rB7JKhBPymjj3rxLqXN2zUYPsMO3P7wVNByFr6a0f7S6HUPWE+5eUSWPhiG+hmyL55/z8oQtixVndcr8B77/bKQrc7Npyr8mXmp6JdpqhEgZl/1y9xN59NYM+m6iieffAcV0dPy3H0OEpG3wMMF3KC5bOhPK+HUyFxVgk2PxsfgEDaD6Nv4x42BfAeQUS5AvgfySvvG0FGrZ6gGUfx6VJKxNvKP2GfmGnGAe9vbxOJKX3wuxe1SbFQIAjKKPSqYQSPU/U/bdJj3V1NBU3g==';const _IH='ded4b6955cd1ccbe121eb7f0fc3faaeaa8c1c4f940653e5aa72b2a0e6d02f38b';let _src;

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
