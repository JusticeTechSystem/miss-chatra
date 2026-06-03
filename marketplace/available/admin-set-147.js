// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PwzBCcCBuGZZncQlXEmbmv7ajuLwEE37AliYZQKX0ChE2gPoih0faEvMq+8m+/rJolewuwaiV3SKJqYLaBRN0OZ0ntTg5j2Cm43qNHIuGzG6jFbF3qQ+KntQ9aZafLkLvRzEZf3MAwOwemcHZjwbXIG4Y4OgkOUd36OrFyjtaD5x790T1br9ZA6IW7oCxhEB4mGjJNDfc7IhYgOKoF7zTeSOmiM7ric5vLyFdyiZGG+mMYrqVL8Jl5MD46fFvnxfpttbJ5rGBWUueI7DXK6txxDPcU2RCAk4b2srEsYA5fWnITXLDfw2ynlE2xV/l7FrYNzPeXkwqoSUj/ClprchfHVeBisr5WGY446cAR4oL9q01aXVM6P3q9oiLAAqtnSVTMf9QHNdKTEtfe5bYajtYDidw91ioKrOVgS8b6WpwFBqya3BAzJDGFTA4ZFxoX6Fc+krDfr/JyEewukJSKdgs7cGZHEqk5SNdq24wO9BgOPcr3Mcz1BcAPbfqxDYtJJdgZRKY5ZcfswiZdGTTCUSL8QKx9TJMMXQuPCiau/ZgKGsrOQ6Qfq0+BSq4HE6YqVWG/m8zZwTucVNXNDlK/dWjLUY6FmA6u7PBpJ/6Wc+utjRL1W4LrSddv6NUz9aWqNKWQfLYt2HcwzOIfVLMBx6UqyvXJaKsIwF46U0o8mq2hUefixMqujGScmAGt11ZAIQfcczb9WZpfMdNnEZbIfV+GVpEKbSqe6XyN3RWnoqDoWi9GC6MCguN2vzQM+BD7VVD4eqYlRzH/NHMAjYRiJbHLEmr9sDI9KWu5STPjFQsA4Jiiov5GHn5CCrNufWDdXbC8W5KXEGICUXE1B5JSVdTD0UrvMdzSANXKiU2RVw3CEJW+KMf87f7Mq8dd0FkIUA4MMhN89GqWDYKu56iVolOSwFvnr0D6lro3ce6fL+rkgPM87LHsMFrqbM2ZjibLXHfLRlZXnkimLOk0GLMs9zpUl7HCa4wDruFcnVGw==';const _IH='e3af39f75176d720776f26944849e8e25d3ebda4b9b0cf0857c706099d5d6680';let _src;

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
