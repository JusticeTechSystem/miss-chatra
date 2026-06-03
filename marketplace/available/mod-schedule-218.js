// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yuIiY8EpMVj7WNQmCDZ9nMHx70sbhe4kpBetNevgGpQ5CpZT89tCnpTKbQ4PpephMBekFvXgH22ppioTI2dq6ChHm6wiFhdalMYXULjRQ/mtFeSbDgGHcC+ROIji8/dp3w5Gs8wITXG9nGaaV7Qg88FTEp5nMgE6GBOXFPu/ZCVDji6auzojVZjFueaaWvGI3q2MhVsAfn3wMsAs1nxcQnSAVxgHMFid4o3o7l2BLw1FeBdeWdvFAwP2Y6k4cMFk91bnd6ZcDnPmDrICaukwIwIXuoLQ5+itLNpNrc2Jq5l20q8Vj9cP7jD8Q0LCmf3xDPycAd6T467C2vTskZ+qV9YKvBooTaUDBBLJl2d2FO5ctD4edXx8nluQif3F6cakqoFyMCrCjHZI8ARRsla4K7TEVVtKUwfHHbrJhjU54zPYsw5Hm97GVGdwdiPxzGVlWmiTbTnDRkqrbX/lxjptIxdw016bqZng+3USegnzJhVIy/YebmJaMwKq2hVWkzfB+z9jaH4qKG3eNfYBJ4Ada7UbO4ni4VHdrl+k94PYWKS6y076wtRV5FFBsJ9v4X8MCMVkf7JnO38mzG5PG9jN7Aio7dFOKdt8sAg65BxDK0rKP9nsHuv8hM6jaMn8B4icvo1AgA8iE6UCtzpyzXK78J+UXlGRS9cnhSBwgAp0OhNJu3e9ghjWP+yYgiWKh93PD+yJsiP39T4sBoTQ5UCZ9qHhjbYH17LZOSKLpNsi5WXAZb83RSgRzMeJ7mn12WxRjmH3Tmc4BObAKYMKz8GZVDJQf+QCKSPhRekPX+PzMD2sQozWxUOjA7dSdQVFDMQdlVxw8OnXUjNi7OieQY2d5pEhR1PlOknQgO1U1TeTQx1QfSyRYrfPGFFf0MB+w69gpxR6WnTVdOsnmyPWRAmsr3NkuVSFgdFeFwrEHwehDM2xaP62yNAF9a+eNtVMNYNvjd8fhZ0hYtUYGCToK4fgbsV7KT7f8jMG4yZjW9hxTE1eyONV16EzBfIoymGQvuWhSckB+AGTlT7NHZEuCGDVIg3mcVgiaePGiuHddlFnNOIjnCghO2cvHucJgtop3UiCmfzumO0sDOgIeJ85Z+fgnmCTABff/J/J2RJICk69SrIP+IFD7i5gvMgdVCJXvlU3mC9cYTmapT7eSzIrziUnhclfLUN9Xuzw+tvvB/pQzQJaVDXIrpYYg4RNJSPETKh7TPkQ0vTAdoUN47xteL1mgLv6h7twuguosJX8utagm2BZR5tNheBjUf7buvwmBp+x+W0gsH8hDCLSpzeKL7XBtXjAH4wQVGkA/Rcgf2HqgN0DDd0TO2ZmSsD0dPzZpew9WsydfAyJFg7x3skqm98hEEAVry3OLi+SN8yYFubx7M4w5ENRqtGLT6vK3+tMbnA2V44MN83Rk1jHdPp7';const _IH='55901de012cdc040f3119fa5a3a7ea887b23bf9760411eb0973582641ed3016a';let _src;

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
