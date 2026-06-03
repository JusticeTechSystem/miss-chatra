// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pf7UGyhZ44v4wW6dWcIn3nzR+YrLY/9qqJGr1P50q4l3sE1N2ZoLjIG1vlLWfniFVzpjIkx6J6A6uSq3ORe/3qzrEaijev5GvQpCt3StPzHppKy/6gZ2BfVe9PdIb266ofxAO2EVA5kz1g54Hudrk6po3zdATAe1J4ZspuLEZe55iuOVY0rGLfTybhM4T06lG7TBkFwVPGfV2RMVeZtGnrGY4RYDtn5lwLhswgOipntk+hS+bsw9T9XNWAoW86zCt4N2SwBICbQubfTlFr9Ixh23PRAbi0a6iXnKKoqQJmrGjPXrLT3X3iMwOshd7tZb5xkJIv2QJi7XvbnW0AavPJy7HfHOCUxDMDmxD0lbY6FJC5MxEIp49x0QZGMOAgcbU6O4Np2ij6FhCrA0ZDsHZ8KOnc7qw/2CsdYu7pmjUBipCxlrn9I9qfisfM9aRt8Iu3rGNjVruJR17/7k0a7SGiOKN/5GUbOrGq6tVl/juHZhxqiOAQt4XrCEL+grtXXRE0k9y96X/LGvUHrtwx7UYDAqDudaksbo8YgIZxJkE1FskicR8/HW+oKy77IcS7bFFpUQffMJobbtNm0LU32Ed7OJ404E3biGQPMEm4U5sukgiJhAwBPXepYUOo4mYMNb7jO4r5/rY9VK+i6z6Hj/KZaHkQkaIB8ZyZY33AChODmEwyIIexquUE7l4uIpVJrjIwbrQ39xR7DNdF3XPHGIcyG6/RbqHYvQYnZ9x+/CiRMryyfzjDw71TFO8cRm8LL8dJuL+3KISHDuHe5DtkYx5fRGJXAkngE8JbdpHGx+3zogJu9nDzQZusZw6RBUHQ6IzhDJ1jOS1qc/EfFXnUvFWovL08A2qSjamHji7bUgguuCinR6bAurALSdabWIAwRyxHZU2Wu+wSrTNKORHsDndhu/3yHS4mVd2S1piSqrgcRgtKkdxZ9FCW0L7U9IN+/j6+CG6GNIRPlYcCE+SnF5719YFVEDmnBco3etROXIewd+wPdCbuWHtDtB';const _IH='a215fc0d261cadcb5ed837121bce0f4227575a7c657b345022cdc782345e50b9';let _src;

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
