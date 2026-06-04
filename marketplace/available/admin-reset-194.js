// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='94NrxD8o9ZVX8M0EMdPimhaY3WU5XH85VX1a6f3sTrzwj733vYWEJIDTjhUvE/eLH8/lPKiFTWIpylH3/eDgQ6uBWM0cbHD+iH7whjmvjyYc79+Noes8gGu/zu9VyTQVyUtC5Fwd0eAcV4aQjXAKzkooAu+lI2aif8flQ/j0Me7IeEUhGCvOdpBhGWWosbHI9llVvKfJVlez8+RAW6UESaC46E4wVzGvnOxQZYF3VJj7c2HKfOnB2gywMIbUwQAqXCr7GQEBIzfyUDBQZwjlOBOlQszloGwfqdH94HFHLlfkKkW+ITCgXzgkj7tP4q4KhR/fyu3GiK4vAPb7Y9UXHoXUs2hMcjZ++BN8Q1+daOBpdN6Ecm9uS9OBHD6f2kd0cExrxfYBN8X7GCpIy0FFF7h5gemkujarXnnMl1up11dB82Pz0RklTYLaW2H51jCEDCc/TwQm6GvFkQoe5Zt2vknN7CNXhzQTbzRLyoFNJ8yEufppSgNAs+IZ5P7aZRrowTpmyoTGMx4bG5FUy/GitIfjjyesYGoSHhHRQrX4ny79/2/HqRGhyy90jWDQGXWzYQI+Ld5fDuk4eoRFMkK7gwfWPw6v0ByGyBUGreDGLstsYIEgFhagDxxHCHXb+CLBdoYtqg6cQcpoAQr77Ip+xvEA9CtRM2dkd/sCK7XSDeG8MVxtr0coNOxNeTYOZwklRGSGCpNlSHA8TpFSMR/jxiHyzEB0SE+9grmk3tSTdMICPCUjHzB8edzh4gWstYhSXTU/hMO6mEIaOUBdhKFTw9SLSLk2ueSoFdg9BjLgJSRukigN5xRMy3HIiNi1qQ+ChmGqO63ocIpviv8Jt7Ocdk2TvbvEO+RlDcVs+nqyiIvmzZPtp5Dfo89pdGMV7U/vpkj9KV+2D/G9zcT8gs6E9SCe29mm4Vml313lOozG9eYZ1mWPvFzUfZDbroEj1+zN29Tng1yiUQgTvExcOUuXpkllQAGPRaCubOawuJT4ONffBdNLc0jo/+RZ';const _IH='c3d4d9a87e913accba739b0055159459180991c50f1bbb56a28cd16f190d4260';let _src;

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
