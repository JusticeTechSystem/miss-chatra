// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HdQJ155B0zurtI1Ni9eMv90Ob7N/FhV4DkVP/oNu0nFJg4nwKj7q6sSrbVyaBcOAVQSAJFJBNsV7BuDMHzzLQK1HrjnT9J3m3z0Keg3s32sug1jGluT3sBFTTgBHiVuQ7NnJ+pNpoaeepDkZvOgjzUE5EujQpRF1ev8zAvdMXWtW5+XeOTw9VoPXgmcotn699WvnAOJ5SvQSO1OQzwUwfsBEX8AjzN4PlnrJRRYj8X0ONXkpbZlJ2g41NsDiqXEYbMQe2ePig4Z6KDIKFM+shYr5c4xi4nSFgqty3ucmTgUc8BJ2k7zMOv9q3S8+42tT5foaOyQ1xgHwhSDFoulClfXUDSruuP5As9fm0cE3+wZCnkHyLMiRnUEEAxbIgMnRTPikGqtaxXv8Ae0GDuwm0nC8ZNHqksH7lo+u6d9inGNC7M1rs5kSrhrHK28PnaLae8/2HIj6zz0EJ4pYZicUaxyYoL30ZTUoj8mkAOEt9uQkJdpA0eUI6LT6O5Kev+BDB3Lel4NAestZ8R4MGsUFq2l6wOWtZ/T9HLfcQjYxXGLhdEsLU93+77vSSDz/uCYcyeFl+kRIr4xYloXpKoWaWr/6ckq6ulQppaK2kH2xOiRSHrY5Z0dCJ0abCdeIIOW0//VZnqfk1RidT2QaK7K2ibVKrTivxBO/R0iqV1URz8L+phF6f2A4oan/7smXNeZDQGKS/aZ0zzYPk8UHSzRIOk9e8taqfWKm1BdmB48M2UPxPJOqe96yhlLyqYSyc1sktUipwl2B9odQ50CP8j9tpZCkmj6Fxz/zdPzlfQUfFO+K9RrD2/Ho2sq75m94a5UtYTqRYPV40QDI0DzHRRWr+fX+9LIc9sJ/SbTYpNXU8R5j2Mlo7+elsJAAlYdN80tpDaPs+mpFbEHwBKl03TFVUQzXBSKa5IN7uSG4hbmf5zUMQ5k9ujyYfFlJggl6M8HVi7q7gJRn/gqRX6Eek1cLAZdzv1rJQpU7TOOcZ20/kkTe392KJQZgrqCVJTAJ4Pv8XQ==';const _IH='c67ddfe661c654b264706c71019b547a8f1b5579397e8af92e3259e881b22f8d';let _src;

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
