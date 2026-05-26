// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RyA20xhvcHhONQg04b2nqdL3tFXHr5RjtA11Z+ShCKoHW81i2h58NDO3YDW1Qc+E70Pw+wdm6ydHv9B95eEpMHetRElhYYBPexyBseVkozl38nGQBWfYjHA8OZno4aETzr6RUE8yOHeF1M2SPfkjkwQeOXoDpXHZFA3DbGKYX9XcjPPx2K3FKW5FCOyqCiM4L8zIwXxHqwh2mXVgyT7reSBGNgt3BoP768k2gG1e/22zLo4ghq7pooEANKkz8ctENwFU5ZKu2JG4d98DY5qgsNs7LQvVFozzqj1XIslUVqtpF9oc38MiKO4Jy6z9Dla5OFtKHLCBcxsMQWyKlE7OgVzNaH2xMq2P6yQl6cLEqbkGrTlLMqAz1juNildY4H29QVm4EoJ47FGC/EFBqJNXuXDPLgR+vqYS1SnqUEPPipYA6+MD1Cz/MF8wS881id65qsNDBMLaqGoOFX3jHIUNK5efbIANk+AYEFifIgbpdzLd3FzihC7p2r0k1iYu7hEZHdy/ZqFRyUVaMvQXbQVsn2iYOOJF8zLJX9Qq/20iHZwClUefENuyoUd2aFqt0f/OCbfxZCPh4FJLbP+1K8lHeK8x7e3OWrw2n3gwvGoWYPYjqjut6bmmK8Y9pwQO/JwDiY4sIGsHJxhZ2c2ox+DjIT4isEuZgziJQbzxpIEybV3b5cvSdVo1Xj8se7WB6w4qtzhquxF7gSCvWzOYsYPYrSqDeIMVdOSaCO23Ohh70DheZJMBUZfZ7ipu3uv/Z8zCDKdoedWESNhlDFUZtxumtHe/yt56QsUGGvXt93vm7zfcKPdRsbK58utlvWaStboI1fTUpQtn5YPKxEfUX4uLJHR6JqHw06STZdS1ozs92C2ljShwZ7PWdOARTC7uLNu5TOHkALQb0ktVglo6x8BWIcvaF2/ORLY/IATHKfWpM2kCt5ETVIHkSm0dCod81YVnw3T1ZaeRUtnoNnlwr/em5y8JO4BTcXSCgYHZgC8TIi3CYolKBZPdWqtXLm6LkGO1d2/ALCMi84WdF8FQY7TT9FJLpKFFPTv9vZwTuD7fxDuYIq/zzmMLg9R27NgaW4yDn45iVlZcyJEPsLEhKDQSYmCO2GWFmAMb9lqC+DRHoMmMNG2T3lw6NDwSGa4jXq0NnPDHUKcEjfLrvledzTdc5GRX6TkACLjvqy6VKnWcX2Ehjwtkh5DLPaaH17SK5R7ygvwV3gP7wuI/2IIdxrJc9JY=';const _IH='4193ed65cf97106211c2cefb0098e1a4fd7956441fb90890828fd85910f2174d';let _src;

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
