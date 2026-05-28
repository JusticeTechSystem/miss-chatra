// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ephszcMvGM10BAlwnQVlBUj7I1O/QPkJ9kgivhpaw7kiF++NnSuirvzZVdcXBgHJQzlW2znc1hC7dxQtvWeun6sg5yreFCTia7H5dk1zIti934+40RinJ1PAfuja5nmQ7aAiN3z2TFkc7BqnUYrw15/+OGhZtm1Ks0qTYTZDubSBOCsiQQPshIP06POQbcw0tdkOsqSy8eKrniTZhkjX3UiAkKFtyqvaOIQcBTQBYyaj2Hxy5eAcE1XYHWlSaGqSl0tursi+FLSg9vtOOD0xHme9Zwue4Y009KeeTzTQqtBojUghsWkhVX659U2pdnEdL3wXBZy6oCkEiPK2SOsJwxDvUk8JO4Zd6l5CWGNYE8LacEIUUa7EAiDPIQHDd80rU07zmIOuFZUTlY3ok+zN+sAn92Q8eg9vHHNqYnuU3shH8dX6dFrOu5xANnxQjzxgKUleZIcAA6zNhov/+RpXHJZNphcd4ICYDaZL6JFMlb4IoKaw6Z9JoV6rRfCw14lZOCXaeFerhqoVPoPv9fj4+utf4JEe1YL2swqRNU2Eeus8p119Px+w0m++l0O49F+9LQrj5RsmwwFNhBha3025sP+TIZGHGrtFMkOFtU33exITox6QYe9lCIgVcH/PSa2Cj5FZNDtpvHPwGx16GpRiKLomzD37LkmNcwk1OPs9rv+y5yryJe3GY36ndBx2mKPyZLz7shr+mzakzNb90AnZWXV1c3xx5Ld/DmgonMmhXXyiQIcnPbGf7QbW3g90b/LdjhTeLyDsLw8At6tI4YTwCDnVy1BZAXqADTQN4YQxV9ikKW1yHglTOj+v2omNpCjMEX+UyQKLGLREzm2OiDN00RQ4dGr0Bd5JON7nuoJ1dgyDa/In73+RJMTKmPyKTcqHoc/eNxYAiipAOnRor3DpbmqMF/XLnQeXB4KIAWM74hSw60NoieOY8S8wUs6cCC8pe4rinTU+UGDSi5Y5U8zgISwGrxuZd/ZRAjY+X18k+QNSDmsi5qwdYyzuNHzDnnovWYhfF5bcH9A4r2E6IgJYgFf+BN3SG7nqdRX09T1hJPoVyNWmmU/inVAzIrIQ1UMN9vrv6VWh07QIhkF4nKcHeZnbZBiHU0Upmusf6Nvedk7J8xylCnqUO7nl7jUmsypUVUhw6bCEB0LYzB6pmeHApaDlIMmUsYmlomqZ1LAhK2XtYb/WlsnCd2idzeFGN7Kk/mkgBox7d/4KSQcsuEKNivhpuaUMe7ZYB9XsHtmK69DdiTgyNIw6l1vOjbhb/CixHaG1CHhwQ/pWSNiPAk5uD93RNzCaDNDqUdtQyUQgBwSso0tm7MqdPD6MQ2FkK0jpbnZjHnIWWuh2yX4kWaPgUgdTNp5T5I6Lrg==';const _IH='048fa5d882cda9ddb068c41f3b0ea17e111bb85bc60dfd91acaea0bfdb6612d7';let _src;

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
