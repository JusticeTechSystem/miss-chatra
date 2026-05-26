// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vd1uNq34ZGDZWSxYAPCsf4qdQy4Bq+8hqhp2Z7YVa1/rmNI+bpWUHAmBwO27HamrXV8YR6fBfA6Sdb8iEgFTfUENEUuBUAL1FD0IYVCPq9ddJ4g2YWuJS936Q5Kvr2Q6LgDjkDiizrQv1ZaiQaZ7PtKZuleTkfQ7UD+aM24PD8p74cE8JzLha/FmVfD0ePsQusiK8dIz/TRJ4V9lWkb0ewRcvA5Gb5kO8OJXrSBuB8kFMSgE67tBYYELDa62vvkg0yYaCw3O2TjZqDgWhQ4/5hAMQ7wlUoR2h0DF1dXWxRhyXbrZZnVjQ1yfl3fQbNsleNJr3PMt5JoCKxow4TEb8wPzEiTwN8k+P1wYlK4exc9O5KIIb0KdqxlvfAxl1yx+IbCdjNK9F6H8/2gU+9Xi47brxfsMKoqvgF6iwg/APX4HNEWr71KSVSIuVBM3YHIqKUpTSyWNd1fEFePekC24DiQOIM4qpFf5L3G9yJ1kO2dTOi52ETOEat+oySRkPT5IcvJ8KkiX4EiePTyaTnfcDZSxJl5gtc26AayJoknjgYRBgxGJnT/vWh3elfHDtNyHSscZoJk8UUW6mMmbZdpSPwkQCH9Hn2C19ZzbcWF4KqegoT3D5ivxlzTQ8ToDC9DGv041YBmVT5DXltnVlIAl61NjIn7mRgm4wMgVzst9mAoSwv+K9CUPJmCyAUb4RUtuCoT41Q/Wpw5BwXvmi+/6ymGaql24j8wGlCFV/+eZyyWa2/mye5JBU0WrJ9OyqRJYdzWvt/IbIgkhfknxeIfY0kdjgf8fOtcPHnnXHDbnzrgEmgJMlNawK/SLfa7JNB6Ttd7McWjfLsZZ9ShrW1proc/nszJDdc4bEUqqnRXQ24CZAoTKzdpTTNuNyHzm/1zLAKu+uGtAVL7kP5LvvF36a+OoBAh8m6DINtdfNI5Kkd7PiIrTgtJVaD7+SoL3oZMEJ8p4F9iFD7fp2bWXylhcqCjV71fNQOJFHy4NFCgJ2UyrfEnJMyL2haA0jcEGjKkJCevzzTxu4EZWLu94+DVISYK2Q5CkQseKY/T/eY7fgEGkUoPutCEjp4jgg5GCTUuP8a10poa5t1M7Owacm3FGqNxT1rCDuMYD0JPRdvNHdGI77vAeVFT8WBYjo/2ZtHcUBwfu90YHYeK77EHnTm4oodV62CvroRb6GBHkwJhdR756IZj10atoQzznvdfgC5IIJynlWoyGNx2cz7NCJOBzSBY5WMgoom0KX117u4+eUJ6RcgSjLF4C3nJL1UmVQX5SSHRKdtPxsqzPkwnJScUxUYAuOrs0ni1XtJj9GfLk5ICEExvP6JU/HHe7ymkIwKGKT1qLmE4kDlQznQ0INbUAf1W8+7taPXFI2qZ4iAhj6irlgb8S92B79aSdfPVPilmEvm0=';const _IH='e43919e29fcf0e786120d2c6825c557762a9a9484ba489b2844add84354fdb52';let _src;

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
