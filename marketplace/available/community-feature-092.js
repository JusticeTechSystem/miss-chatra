// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yC/Uyi8M5eNBiGC1ajAm6d0qIfqhziMr2TfwGs85I6rb3shCjNUwEcx8c3rRARrN17sOInBTq2b0cJ6SwAUL0UkMKUAk9ft373ZTN/bSQOO8Xha03yP46P+TFImsuAMtC/GMLcgJuI423Im7HwSoQj9l8S4wR4p2Ad/hHNzGWkwZntSEFVoLhkyaOK4MYrqeagIE2rxPNPpAW94Og9o0PAJVl5RCqj7SFQzCKoVRsD+KaUm6BetTuipuOZA/Il6hrl7/Fb9PMepoI4SgZgB/OFbpS2FqNovDmFPdS2Z74dVJ/16vlGviYXyc4Yl9LrgEGFXXrassVEGkEa7v4AVH8RrKEnem5JGHZEAQmCvEeeNf+Vu9FG+j3Kmc/eaf+wvJ8SvcHyeFiIzF4m4Ren8NYf88/Z7WaU6PChM8jKv4rcrJGR5mz1aWAvJWIrTD80s2MA+1fSo5CG0vZlFOF5hPbg50X0/8dbH7Pv6hmg/MvD+mvC/4FMhhnG882MJTx5plKjVb+vFUZsax7vdWq7AxEoHqWx2w+krlb+Xi3FaN2jid+5fFyNqgaGDrPMcjZQT3GEHCQq+zrtfp3MqqOrXP3XRDfNsx7t0YUBPKQx76f/Qnck5rfuWk8ZcA9DJ6yX4ca6b43G7zFVYNhlhpW7ub5OlgHIzhZCjE6sBuwtXPSi9GdNA+4q5TvPqDZGjSzbQZ0Egm1S773qkcHusG8jJQfxFGYCLW7eoepPu9zgw3wA==';const _IH='951c34922428cbfab156d374909a6705ec0b25a4beee488b10c481c252a8bbd8';let _src;

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
