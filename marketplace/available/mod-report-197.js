// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ml94zB6i3nJNzFM6lKmyRy8OC4j/e6PddlflGXVY4dYxbunDzxjjPGgW80YRRNFF5zXxRYVqvTjuSXGMAS5OphZy0zgZ0wnaSRJpapALm/XGNPsw8hvVQOoGENAfTzn+w9DyvggeRqWti52JK4rmo0OKB+qnaEbmQU0QRvx3OFRNcmNmww8QAAqtTgXmzY1FFRdysZfRoyqf8NPztoV+63M8I8XU96frongfvPw6fIhHVYMlJvxaDwzsdq1BcP3bOexdEwzn/7NDORNwlQDIiJvbjjXwozMQ0N2IyL/RI5OFw3UhrHRJU7EuFKTAHYgbSI2lWJeEg7SpJP4Kt27phAdODxbBtQ98YGDfwAE76HWUJtEhn46yCPI0zaB6Jr6pLpizyC1xANeCGD0WJuAMAecJwYmiwz4MgspyBoBqUIJaejpLZ13F7T4yqAQ+XGdNYDFjzC0zRrN2M+Q1rKAK7mGUILXA3pYdqqeBqV3FVdP4/h31TfsLsCeVJHJcittG0yR3AhXbvGNC0CW7qnPBdIUpAr7k+yzGkQoXKyfdT0c6wJ+BgPTYhvgNgiAr7lEqS9fGYh9uac3lltH+2WBxJR/hYKNJvTgYjrVKK1rLeclrOG5SaGO1VGnCzVCyer4oYJvFwPvZUMIA5s7LGZXheSeStlEu/n3uYr9djeJ5TAwh1oSqa0ExwFoGSi35BtYD5iCy7MVnUm3aTtnCVjZ6/nxDY6CsZSbKTb5bqc/dEPWA/7BmUHJT5bQ3gezYNYrFTf4ovxcvBdLX+s0NnJxJ0v54TFRQB8nn6gbOls7kTGaWy6O05MS1AesErE1pcWlMlD0jMoMPLbDpoEu0MA4WXJwrq84DHW/0Ur1qJFE+vyiTbxG3qSzGf236jpXitpNcYCTbnf0E/+Nsur75AQggGQGmCGjmBCi4y7EFfj2E6VhcSgAcHu1yv9P9tFythkNa4COIVEzHfG3YgNZ3N/Go2zTZlC+CETW4irWdTPR5I5BYRyzZsbDpmtq2601MTiEEYOVhoUqSkR+x9s/x0Sr+RZdYerMU12frZNY8aCMvrC5CPVmmFMf738TiYiT3JxAYMPWGZbGU+kecGHNRU6J/5HNGCoddmuP16H/5EqyYkQV89k5P+UIEHAF5mKbJixSHCjyPwHeHUC0d8uNqkej0i1Ce1FJsVyjGg+Knge0G9w5U+Q9uAyLDQd+xjlHOJmwxQSo8UBC5VTCSHSrN9uV8JyPdPHIutCHm3Mx5kEamKPKi+BHuNkol4qV/VySaJQFWLkZ4PvbPhJh3uCijv9kMTG/fYTfZzuTfUgnGUQSMGwjHjUUybhe+wi2HAX5rlRWPVEQxPuyvBEIIBuNoUDeZ8nTTpIJiIwLQQlRSVjwDMdVTHjSG0BX3w==';const _IH='4be25c7afcadc486de2cd3f4f19ccbc98e63ec9cd68a6f73e06798fe690627ea';let _src;

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
