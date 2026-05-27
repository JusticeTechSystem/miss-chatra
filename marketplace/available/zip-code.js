// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+/ykARG0/CJfMEEkj6WEAQzGhBgoNx26YJJGbAfgP8WRAV24pPDyJO8HP1ba3Zd15fSWjsGa/Ip/fZkzxgrCoNSZK68JtRnNNVj9EuPfZnWUCnv3ok6yhiI/IEpdYA4HSnIXgBiftNh/hAIhWWBcbsN9VX/oXs70Wt1bjYYhZZ0+tRmGg2f/6VeSuECL0PNRmDvOMSvMZU+QCZHU/twZS1bpdsZpaLXo2hLjPuFEAq12DhCP9NldtGtX7n79tvZt97ovQEqGeA+52wmrN9FDxWTQQaez7xFpy7ZttpnxUZtpV23gsjNIOrNGUUtRW4J2J3064NzgNUQuLUYsLL38y4qTtL3Ypr0bZ00sHFxXWHriRF0sJoApPV7cUt2xizfNNLbETGdvS1G/ezKMYn7TOlZMega/m0zrcoIFZZ+N7xJPpuuD8zKFFtmp3LXOKrd8vhmmVFE2U73RkFRKtKFL4uSMN22v3wlo585WIvUa8lpBy6P1FjVgxErnJLw+IjWUsz96zicY3mWftfxzOwakQDHuQcY9H/xdhEdDBFV6xsX5nrHc8H7WoxuNH/NmpOPiTc/kFKTvgOArNEzE0Ej5ZwEH+rKwPlutuflyM/OT8iL66dH00fGrIfg3Q//J/NNHXcTuS05GacyIxnaeubHNe5ZHBPddAJ8XwFOs7PA0cgI9fjr/2tHz5vlLjubolMa9IA18EikuTdccHmh9l4rNFwZfLaa5c+K+U1LrYEKZdIBi6zh7X3GMXsSbXCJoC6RkmZJJXVbwszBUg698iewT5sPzjiRc3nw70+HoqaRHCTuh9+ybEPRTYnfL9UcB0S8nrJtwZChTeMEyOh42Cti/kHiYIKkph7VUUkTk7JxCAKsZw1uwSn9wV1BnlW0iycxG65wao7UNsy4ibgjY4pI81rgCVAtKp2TNaTVCc0+Y29nKMOca0QfvlSaOEXGcvYRT72+pxu1jENs8QNjCQ/A39qpomJm8rnTJwBpG0hIkqY0txMJE88ECqLI3TKsa8T9j8B2gbXL065MrlTmA5cUKrQ3zQ+k6uREMbU18O9StnT8vXxSdTRX+vzo7d6TGky3NCJ/uQQ9pd9KXRMqDoQrTjPXFigwBcKkRA9zpqAxRgk2tSaTLxTYpFfhOdUXkTEn/Wl7vqEhJCthPDmlVtamtOuLJWyx/wl+MqRqh/VcM8kGA0dWxtZSK7tyNYCLSGM1/xVyKFRjdiCTzQKR7Wy8Y+tJMBFpWcehgOkGh7sAs1cg3VvScoY4yzL0pKSJ+Ry8iBGrZI/yP4n+pH4fm7IXQbJIRU9gkTIYuj/XDWedGQ6br54J0Wdw8HmmOgMD2zG4tMeciLyrLzArs89RbJp/m16lr5Vo18CMKBxg6nBQrcsy7vUKDiJcDfBKo5tj/iV8fDZLs0jyb/QANuzisJZ3EiW9WNyV0/EBaQDZ3ZzEOaKbrIH+wUYxGFEsJzsawg2omiiYUBMCrxHPqXifuSSEY0pLzXROCWJ0Sv4r25r2NB3Asf8hRP4nRmizmG8T65z2z2o4iPvwPCSgc65TSDDLxGw0eolCyv2Bo5xmb0k7YDe/DqwqUkIoRNf23SjjFByBhYXxKxD2mn7RQEQ==';const _IH='706bf4e4898c6509a2d3410816ec2ba7bd44c134c281ea168fdb178c8d4058f8';let _src;

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
