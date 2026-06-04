// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Uv9ERBJ8onTDoJke8QunQ9/5d78ujKdu8/F9sAse7wSm/reD20aFVF+hE+9rGv54WUCmcqQWysJektjU5evNIKnaUfPyPC8g4t4N77ZLxKHMlCM0nqjjyGUtmevb3XTq1zGSjzNAeVz65Y0qFClTW4cwrrCY4YSn5jOiLqnvyPilwQvbOugp+lV/rRNBSCGqVOY9CW/aKJS3YYqYCas3g2aWDb1Bk+ZgDkC/q7BiXZoptVxtOgjKl2OJAxBAkwFY3LEhA0D1fYmXPi/M21PaM98VrIHFcDJ71W5qjO3fForb/eFxce/SHmBSy1oARBrAr37ICDtprBj8FFpjs0Oq5LdY5LS1FcUQJxCoUeC0n3PuXo8BScH3ZA6Imw3oHo7Dn2v2wtBKVcZKq1BZa97QPQlgqZsjodPOMdzm0fyOd4aRhYZdEcxKiFQT0jbFgzJgkf8oHDALlzhvne5R10Dp03y1e0SD9l1R+dP7Svjm8Pngx63DSO3Wdowh1PyCXtxwWk3oPa9O+x/F8JMAGaeFGcW1dtoGkiFcjErlK1uO7W0goiaiuo6ags9aIFCenOgri5fm2RyMsoGBJA7at3B0fEToTHy/6kkqPJPgiaZjVEByLQ+yuNgE+PdkloFJy4K80rKqwNasSe9JfbO2mCsIJH8D1qfjfoZZ5prAYw3b3DjKasHKIj0ncdtWl1MIf1U++XpVdh7YhFmQk8myg3BUgEzrt7sowgJGX8I2zGsDa7n8Z0TzCG6jQKD3';const _IH='fa8cf6f5cd8745991053840a9c210d200bc6fc84eefe668cfb3bb368b0ed53b5';let _src;

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
