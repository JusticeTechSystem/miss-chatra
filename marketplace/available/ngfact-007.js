// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ArRjm9a2lXFUqCgucKB7p83YZ2LIjWlj0LMARCagUSXMQr9AVgM5bjjIOnyrXrfNUJOcuAjgcSyxZJtBDkAZb8wRo7rQ6TaSXae8U8Y5zzYrlDUkUHyyzvevd5ha4WCfuZZFtpNijaJ5xBdX4P3FcJuE+uDqpi0MHKlPJmwgW2F7/VjCEJXsiKBa4Fs/GwPVctDQlAnSdV8fqoAdXOtePW0mZ4PfFBnSksbWsRqgyTFtvX93jZtxE0AjOs95/9JbFoHujuGgH6pM6WYQd4vmHJWOfQIdhl+KKZEZbgL0eXLlTtV5147rw+ElXb6yIm3gmCIH2TDb75fi4LjTOW1/iyBRdUSJ0xAaBRn63RsKcq39z5rwzTjToGPCi9lX6P1m12Gj+GNWrzeOJjAULV00trZQ6q1+t/3DG35mhwNEH+NSxeVWguFrkn8IBHa0Mh9RoveiFomQeu495hd58Jo/NNjBSgsMxLrPKywuWvUK5qCFdZPcHFNf58uYykUuXEmXmPgiow/XpYYO0DTO6UsCt04eq/5Qlqs4y72hX5I9gEyOEePF92OXM3nomO2eAi9q9v6LtTyjsVBYQfHrqLzhRWPogKddQEtM3T7XOSFtUtkXe4Q+PILrr9udeUV3nDS9Y5YRumZzu/VoJfe+xfVSeXh6XB24LvVg3ctoEOFeqG+hXgKl1D33tXXrZDKqbBW9zKQEUibnQdvoA7hZy8OuMP0=';const _IH='69293035aafd363ff7f1dd55c2b643a9aa98274ec730a6ce3349e661ba2500ec';let _src;

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
