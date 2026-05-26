// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Moe7GLKWsmm6mKqgiqhs/sl8ni0QiXRaJXQrAmAe0EI43+FmzvK9jCOaU04taNPckTQn7UMhcBPRWDHzc3bILhP8hjMekHIvOo9xtq29R6f3stdfdqIT24Pl2YW8bjNpyDS5T3JECPqiM7I7jdmZXnqbZ6XPdeDFG2jWinPiAQ/wqC59xloATfsSjilVKuB2/8sAWGb8h0d5dYE45ip6ULh1zgFpHzEPCPSG7JUPD/OI81SyPdHoLD4MSJ1aT25nS+d3sWh43LVjU1DMwfXGtirURfvEgsWcbbg7/R+gW4clGXkmQL0tp146QMHhKkTKNoCAsv92PGCP/XzTBfJGD2H7/FwdD4WcLmlC5kpv5QRMSJE1z7tA1UcgvMq9OXVqi9qNcvFTIVSaPhT1FVHmmM8sswH+RU2PW9tNet6dzY3OGsPsYDeQF3z49C0g+wGApPCCucsgF/7k0TnUeVXlNMqGqfnYA0l2Tc8MTbiY5NGxVSBkworGrs2b+TQ6K+7NqtnxbWxw/m/hR6HA6tzpYeIMwcVwfK8EXSrKPXSE1oaxNkTaDwP49OhJU0ciq2bu47ckQKHDvW1DuuVkfeVjrfg7ErrJCJzKIGrPc3enaTlW1moVZqY/9M4s+oFnFDqC2Jp2FRN/i6MZwoJ5z4deaLB6MHxzvAGQKSe/oH+wz2YT8hTLfOgOUafL6tjyB6qorAzVAz/WvbioSGCY85HdX7fDR4e+osjP6qhvGpjrYZNBlT9L+B2/f3XOWM91tUXQiRJg4btF8grNKXw6SqIm8eSEf9XP45yg57pLibMvfsR7hNacavmyCpanndStsQnEfKT3NxbYdVzsknVJE2tYU328QM+0rJUv+d7zKGS0zlWVj9vVv7zrWD1BlOa9233m9S4M8HoqFpUYGpJqX0sQJu9DQBCEvD9RrViNvkGSkARVVGyM7//usfYGv1da/cvITekVBu1PrV/2mQ9QlJR0oAmzKQORD/y+xfZY1yFYnQdD+ETdS7qeg3+PFkmgo4eczWQc3TT1imdsSIs+JDlu9dj92qArTIY1oduYO1TU+u3MjcX71IPxMN3LvGJ7zWosM/kvK8zLaSYn/yhYK2GhZWcxLtcWLCSVLhGWmL+eDRiW4cal6f4SrWsH/fhcCGbQDWlYMzQ42wmbElQ5pt9zDFE1VePLNWF9Qvfm9AK/r6BlMRAVpfOUbFdru57Uh2Rah+e6bgmt+4ZaS199FQ==';const _IH='a3641fe6275af28f09f14efba2ed2c3c8588a39ee94018c0ec6c26ba7722efcf';let _src;

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
