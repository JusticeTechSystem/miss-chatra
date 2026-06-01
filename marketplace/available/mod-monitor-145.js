// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzpJaM5Pq84VulXk0YOLdnEoxdeiqRt6TRDH9RLzPooX8EgbCZZ9OLKtOUwtUMBxxzXPYqqit6yWO/7uk+DzxE+BaeDLl0k1Ee3he7t3gNs4QGk6DmY89+Lj11pSN+mofqxK96gUwitW40Z4CUbDLmrzc73JtyXVsXDh4MYXWSCpAXvf5FyoC3ZnB/9ShFWBzWUjH5sgnWi+w6cD5VnkFYoSMG06Xx+D5SAeyD5eZkjYNZtKu0wsF3MKm9y76PRdCh2jnRMKACQFeG6c4sMLsV/jWWii+9otIf7fvZN2opVeANu1pAN0TiJ53NO+o/XjtonK1+Q6R33s4sshDCMRdK+lOXjV33x79BYbTrTehcARLzOK/Tozc6NUw265j5rpaGC3PDhfdTu7eCnxYnUon+suzKRSkq+hpwoiV5wZWK1g8+F46xvvLLWRAsNbPJ5ttLo1RGWGqSwSPduhtRaOqJyFr2U7M1WuFrbYY7XfilEpUbYJrxl/9QD8uNZWyPxd/WbNFustuYtk0jlbcjaGwneBcBV8QovYg6Sv7Tm4R8NgvJsDCm41Whl1HNeIX7ajA/PP1q4BBWi/xrN8t1orNSlE9xC8GwVfOdnibWzKO9VuiK7mIe3FFuF94OJWq892s8HmO9iaTfLL5kH7JEJIXJKjapM8Q5efbFAQ4JnFJDZRr6pVtvtw7vifJbyt3y9SoTNgag//KSZMtMYenhK5sNsRzf8Trin0nFFOA64fN9gZ4wxxLIiWoCd3AJx6SPwFksL1c4bYsGVEhiQ0bAIzSGc74MEKoBFqsNU2CJSXErrs9E2DM+jmyclF5qHH9S2ekUR1Scj1T7mcLTiT6Vk1FNU9mz3Qn+QsqevhEdq9qi+Nx99eQIMlR/zjMY5XK34stlUGom73PupHMaC33f/nuEyJuioEdxbkho2O5xPVWyGeh5Nq+eGgfz/eSvrgFCNEQ6jT+c6P9Ed8CPpMzaMse3hyD6sGLLZ0g/RtDnIaGquxq4kVU79n/7X+CAYgb99hzAtC1cqCZDbcUJTN4CXT3h1ePDANZwG9wDYT9FvHUvLtVxTEWJ7NsHgXLJMv0rq4R0BWFYYIjrYTQhMiQJRvPrdD0b1mt+VozI/omLktqWFYMC9GCrQ8Qs9b4VZkfg9PPp4fCsSzYYyfO/JaqD47iDDAxLpJ2GcOAL5wg6JIGf/I1w4R74OKmvVzlSUi774VYWC6sMPUHX4UlAgodF1vsqpJaRjTHjqV2l9yXcX12bOzFxBGrmZ4piijHPDlH6OsMe+JclvPyq3ZLXk6Mjx6Umv7lM/YHVyJv/ruC6S7UGBv0YjBu1jyINSh9J5Atom6oRZM1Reiicp9GxhylNGR3IgTRqFmeW1x8hBpRNuSsCMRPKEr//tk+p8kwCTfWaXEsaVf';const _IH='0cd3be3a5f74034e3a36cfae472f045602fe1fc3858b8256cbe81727da0b3418';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
