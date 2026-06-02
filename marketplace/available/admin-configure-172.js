// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PDJnTZ0C2k4VDnjPuFsWCEYF9eETjjFWOv7Js2QS9OT8FNcvVS40mGvYVm62qXq+KJZw7tMJcl7FUfMSTxmwQ0qlxjqSJ7SugYVQdFyUDcaJuORLgwt1whtAoH7tXm2MtIQ5yD5w5bfA1sd75ehVjYFZP6TlLQdguq3LY5fwjf6rq57+Jmqt30OkXvmWsDLPgnpZaquO8L2VdpgDRsl8c0V1RsZaGtgi42/rxrXHaKKD2bHyEVm9TfL9URSjFguKn45ltHKLYqIqe7y+kHQcPKEkQGLgrY71an92zUzt/C0ias7lUMqZwoqO821WATe25LBdEn4tXqskqSOJ6VX8XdZxUt1bgXRtfHHQtkSyPeQ74lPdKCPmln/ZJBezd0lhWqg7bV4pPDWdETeGw7ugUaSHpXaNkMfZyZ/IIoPiOKSc/EyaHeQedTq7CliWovizafOb6KmRWsLS33zoGbo44523yEHfOKuIyLR+y3tB3cSOTySzQNIwsuOWOeZPTVG0rN0efTtewL3ywbMTutzUVyuKxC/J5EjrvkKiOXLwG8am6vUNJ2DtH/MkykTVilaua7lAFH7uiGaczdaj3QVzgv/AOVVFieQSrcYI2jnx6UVf5eFt6kDV3zCTN0TWYSo81SOBlbqyh1OYssKgcQImDw/pARJxIQDdYnCiIIpcvFxp/EorKIlpcCSN3lITRwmDN6Kw8Yb3CMOTWi7kOV3fLpCeUoZzjdgchN/2DxmFWTFaRWGJ85W+a+AhlBCTzI0zWlwmnsuSdd9HHibzUHoBATFYMEy6UWokoM0ZdOKkyCEBb34MEkS+/e3tMI7lFT8pGsUmFerrY6JZjFzkkGOB9vhjNEW3PAM32w0n64epBR4ehCRGC4mrlb1rXzZU2cCsvLgpVY2RZUUf46ZdiceG9+A0c/m/5mxfhIHZAuxIx/hmthtejoO77LgydHZaakculd5GN+Do2EgToRKj221IVMd4DV8OKsULOToOMVT7nAQEo79LjoATF2WmXTdfszLhQPBbUdTYPCyyrUAqCh13hLGNoZst+Q==';const _IH='abd861bb2655aab4163da08381962a14fd8c1efe7606f1e3f07958bd2c0ad830';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
