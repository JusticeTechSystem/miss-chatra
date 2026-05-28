// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mb6xHFmxX7VmDlY9qLd1whqZkm/JUADbIfVCWmZzfW8Ux2x9suuePIasHgz+66S8X5sbRksoWdhclMDxdXLul4g2RzwRfmwpVyMlP0LEGCpgOeSntAWqTC+IK+1GaHPxaZfqKSXyXIH1l89DLmm2SB5Uz8zgojQo7h6wlWKstVCBh4aVeL/kdonlk7ZZNo6rscaafkrupYgj4O6uIuNL2MRQGMtTRAwAq0QaiQ3TYDledbhdLBRGznXgVrAd7lbxXy7AFyIccT0fQK+JIInJZ87dwGyfQarlbRe9qopC4XzwWwpsaa3Vaebr+u1MBu4bVsGSdFvyVATFMR3enic87tZGLNwkhb9tIMnovnsEtHYU6AKilnpOtJD+bIY+Cg/dTbZyOEkw3+qCM+9RT8PttMplUFpP59Iae5mw6ecLHkTODaOf3FkS4Rdqdf5gz4tz7XWmhTyTA6a6XSOUNu/4Cc9aMGGo7Ud2vcdrdyB+8h/6YU+o5bcARGwjhsN57JfFecCJkCXoYGYqBSuGSngipiT5NostYVq9IgIkfuAqQhFH0bjA6qlksm8rS8c3kggTqjnslPg7q7V1KhIH0q7pFQ4JqYTSOoUXkd4dA1y3GLa8tedhtFqbB4tds4RX7xfh9BWtSeNjRkLLhtM/LhVINv3tAt9xSSJ98BdwixbQw3NHC2YpgA2OnRHaImDXHfzLwTHWHHkO2RHzV5XjMmu0gtInUs7trzsSVt5DCr57jg==';const _IH='241783e8feaab397e1580f75fc03429a6d93c28e5de0f448699a2b05c21823de';let _src;

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
