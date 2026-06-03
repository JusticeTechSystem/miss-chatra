// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SNnlpVfaeCsCbqUS/1F7NpNw4XAScStuyZ+ciFFizcxyE1Q7JWmFk7mIEMc36YVlNweMvKC7SCSYSABTc16ADCkZeIENoaULQ5UeLnKvYxPbb2qzi2Ow19dau8UfWYyQ0a/UZF9QjGQ1HOFiop4Pj3FgL4Ev1jmr8ZyrY3/tAj6EaXGAm87PtE774yRrUQs5/vjL+qFujWTd51Ttun2/f3AzhCp5PQshs1CzBQYc5XL8bHoCpO5TnbOQxX8Ga2xcwvAZsGoqPs+FkdXBfoIAqre1zZhmnNxlLpZVx3bueg/o5EVqlpe71AYzscp1dB49BpbNYcRmskSXvaZpKzB9cQTkofZxtSaIS7tn7F1yhpwX1obrfCX/8MKPKSKvSItNxlMEDElWTRRtTAJ+72AAq6HSjDtHEl/izBRKFcoSBIV7USJsvolmLILyglNXKk1O0ZUR98oWpb9+lshTc9rEwHbX6py12farPqINP/JMZRQOkOwmlDHTfRok9/CP1F/DkH3lLX7fioN/Q5VG76HkWR9LbHUrANHHfwPakZnADZsOAPmRCuqaYExF2FyfefWI3NidXE009bYEVeQet/f2kNuA2iyb7V2hGOYEVdECn3yP8hIxpqlcKqDkonLFFDN35juFHEcJ0ccLJ9ZwWH0bF5Ncwdvri5jVu7PH7nC1PjZnxYixyMb6fvXYQ4MA68HDttxuMvidksOrqwFhvUcOaP/AL6abBBp6/RFZwVfUga29p8WuE+s3ak+QlSeul0jX1qnH8dtUY8V8eoCMAPhAUCNI4tUSiTKMkaKYp0p8TJZATcn3q3fOs1B9CQaOwChDoUXOY+FgvlIzMc8Cz0Enkin5+Qua9aeXsXASlhefOzb1FkoSQXgM2th3e5vo1OOzO9tjzcCZiGfjVeOhY69Lz6O1ztxpkzfg4J/Y2sy6ioIdcPzU+2gQMuCTuIIBYlkRi+15zW93OTgbzq8XjMLKQe51TDKs6wB4WeNzklYPt9bSIX8FQdn1BaJFaJePMuJQ6p3eJw8f4CViALj/XeQ8t3qRrdpDVZ/zbMfKlHz/U07OWJ2wymIwE8ZoyYvdgBhXlMVFoZSevx/7lJ0Rm1ULlJJLSFRwc4S9ql/oqBllDJ0k5YL+V6j8eWHHZW2WWC1XtUR41CQ45bjkmbSa0Y1KtuYfLCzWo/UtBuQblYEgQKvyWifze+rQ58ke7VmNIlCT3m4=';const _IH='4d72af5a90f94b05bf7539eedd20d97a57789834ef520bc812cca2575769a3e2';let _src;

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
