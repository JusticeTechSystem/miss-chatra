// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KIL9UZUkbHW50vMnM5oecb9dAMAr1X91yYuTJ+F1Tipm+EwmRSjQ8Kl0s5aNIITB3m7gNoF73ZwTHRqtcTxSIzljrHuBMwoAHiuF0w00PkX8MCW+PLOoRHedJ29HiM1MprRmKaekjUTzqetw9Z3h1eRR6T40rbPYX0xVyjrIy1X4QE85MatkWTIvt1f9pG6Ni4E4njhNZBu6xslnRzW1Vs0nVUps8hNZp4WDd0vRxVXjypdv+TNs4D5QSQfNwOZ5RI51l0l6dUOrkaclWS+qitPhmy6WrHVHaeo0rNA3lEph9g6lvbIATCDcJmIlUOQeQTJ6oUJyVYX8Df42lF4EBfZGsuEDdpG99QGO9Fjwu53sLnTt6E7HBezu+UtyJ5GwQ6Zm6JepcFQUIUjUjIreXQyVbI//DUnfwYagXgafhb9YVIKRFt2SiGWnrtdEszYCh95w/V9T13iAfWJA/DdqIA/tfVMda3LTQkO2kmGxlPf7qE4O+0aOiWO+XpcPk0kvMEZMRGLi18KdQEyTIILX3othJzfrj6cRfA1M4UiLdcXmWRyznMR9YclwLN5nVBPJI6OneIsh0EzVR0RYz/i0NVVAzYB5v3d4f6OoS1ecC4qBeFnQVFA5Izbzg+ynkOaqEGlljie0Sjes3Nu9R5jrZJno+wn0tMoHoDaOOvzIiXy2jquPYLq1eKhR/BuosU4Pr3fFPGUcqkMgLVI9vFfX+E/z68gwu1DuQCtv8IfrhY6ufUA=';const _IH='44782b817cdff42f3b83b32e4e8d4c0bedbc19cc82c4cbf743addee85e1bf07c';let _src;

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
