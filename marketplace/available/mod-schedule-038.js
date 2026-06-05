// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LgMZtbbgM8HBPBJcwG2bXoRfLVgM0cDlar5A4q9MF9T/6PTw56rfa6OfP/9sDd6rJHkm1fSgGBkcYXXJADTBj2wJ4nsRFw1So08ks5+fp6UM5PHyHjDjliChoA3Ewxrt4f/K5nvkoObfOlgAJPluV9JjeTayDdkZ6h1ePEtajO4hL09BH5O4/uDIVTauUlemfrpBaZyMSHN/AG4xSiPG4DJmWHh8qgiio9BYM9kQyDeCgjNY8Pxf+DzVbkiiIzjrTEnr32zwtR1D2r11qHiyXyvFvGneubpgoeNKrF9v3h2dJgvqW1/hn7dehcRNhI0nAFj2MKKUtAIAlBGGG5ofhhoIERzjCk06l6+yGuxO4sbPOlUUqbew1EVKCTc7CAiSvlutULA6blbHeQCMI52Ax4abmgfsFcUKq8mhEVl7Zd9WZWYlYSAbmmDkV9PRPW7GomUNlrUpPf1rxbXssJxt2PoBpucwSVaLZokjVpt+KM74MTgWJlkJqdt10dI+V9CAxCI4Wg3t3W3zmP6ATBN3NLuebow7rXbzZYSL+VftofViwngIgQv57FDefBGIA9ormqcK4kraL49IdQHyUaVSK+VeHIIawqGtjawLDJaFsGVZG+c2yU7ilQYKV0brLcZIE0eqUqHmxDi7v+z2qPte4+rkX8+En3mM65Pik26hbSu6IymVLP8ayrXPqf26U38s04qbPuGNcCguanspzqYQuEB9JdFpP1NreV5N3CswaSMWlByX9tDzWD0KqOOhUXEeYiENr6eALZpGloEiatK6BqBxlvtVekelpv1o51JFa7MrGAh3FmJQV9k4MF2CYawV0bxjrrtutsnnYQFXAmRHWYAPpv642vQ1HND5Tns6KOLZQ8PfQ3Ud52eUyr0ss6zImwdKZ0vVf3TLPakOVCPsevLmUuRoUXxycDUv8dk1E94Oa0j/QQq4uYne4BLGZrmGXjTBUEa4HEJ+adovCDTgrb1wGPa/0wuV9sYTuYbErdzmDuwyeO3gh8tu5aRxF7xdV/x7h/j2O5VJ8RUgLKuQxGNCEtVaBOpjRsaCEIRdjyjCAadq7gR7vDnm/UKJecIgKqBwNmDNkpew05VBjUTKkwCZEcH2Fed5OVwNJc07SY310mWv7HYUp7DyMUHUon2CIXoZi65pocDZcpWwm0liWRbtknkvQOreX/DfXuWKJ5SraBEMMvhH9WaKxIhEjPvQH4nxjOlpzSmI0fHhLTW0iHpi944+XpKwGmKokfcqqalq44MPhyrs6kqoWKuqUwAx0Oz/1iUMSlelNgWh2hZy2W9Y5CrbGOTurBGdnpYM3ygk6K+vKYYJ2NP4t6iBaGTxJpRT5ffDiou9HKHx4mYEbxdNnKuZYew7V7vHsVUCU04IFymTY6ct0b58P1jcj7EgInXKZVePLQ==';const _IH='e01be33d08e9f9e75120873d85730e2e1f6e2d84e9331e0a30e76bafd387e0c2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
