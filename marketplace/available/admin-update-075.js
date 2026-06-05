// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='my8BKE19mL79lnanosUpT18wGFNzvruAsZDLMwFBWDo5jLL9+HrEig/d0YrCL6EdUnaMAbrlzvnqv4eayA9ZTzUwSKqntPM+cgPQsYZwtioDhgL6/Vlvw+QRl0GHy4P/5iBh+qwSy00PPW5PhV887kDDYJt7ieTDKPP0UtcJ0Mh9iDNQgATMQWoWdKWh4tHQ1OqfgHB8UL69kzMUMnoG/mj9YfJ8D+FyIMH77OpK28mROvCFeTFfSWTywAsErcoj5bGtTf6el4l2A658vdJraeVBBp1GyjeOMmRLm0TvBwl+S4RaGFn3NJEZ40VYDjUO2sLirQL+m1Wrrlm6i4twEgoFRpQD9N6Crb8UG9/VYF+IA8b/QG78lF/Jfa+DF703/nRKaJtsqjwt3h5Az3KP7Cjpd/okt59Khxuwm49ckq+NNo1RycVL3XjmWRFT939Wgj0xci9CDukanz6jfjK+nNfY3AKKgBiDS8lCqb81Op7VZYlUxOe7d4VsNljOFGCIbLi2nSmbYN5rQ2rtZTDzS/pYyoc/uaEsh9a1t8Th4AOletCv8nZJWfAhj0RF96HpkklAvgwUPdql8y68wGhCaRp7liqD/gLmErU5qw3mggDEdBJmxIlS+o5inVbXIB/w1/Y+t+KUpTEYTO7rvjjhQ7n017+82yZEXHLPiwyUbUnb9cJP0mKClncXfWIFObBr+SbrZMW7JDfJPm91fwLjHMxqslMxgmMs2HV7P3qu25uvrG8wJylISUiNW1noUUySa5vxOknoY1Zy/j4CjOVAOrc2mGarRg87jM1PtvQSpiIOvmI3q7+StiADLeXzEHTPADYPZ89BCoaIX4m1niKwN6HV9Xuw+1RoFGZUBwfxeG90JYUvdKWihzY88pmaBB+yMmjMxeiCcYTgEelFiyzIjHxZk12+2CWrAQO8IlY3j9WTQpXQAMp7OlKuyg2KMghNY6/CVD25ABDXO+XYaKGig5qp20ok1kBKaZPAGENEjQK7UX+I+K1bZf2iWblN';const _IH='da82e72d8439559f09d3c11ab4a05081a3a403e6c0c55394087bb353a12e25d4';let _src;

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
