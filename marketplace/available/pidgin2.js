// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PR9gaGgVWigMtExcQ9xIE4k77xiDk6UFEz8eVvLJU9OyAZbBvm1E2RRdEK1FdHN5ndtJaSlixfn0RjQ16qnpWfJ+FYuf4W5NUR22iW52JHsPraFl866BuE8DrnrN0hybFScZqCR3nYCC3MKtqNdtLTMGrrOR+mCXPyEWGn/VajnTTeXai2OwF0wZLaa4qRVZ6GmC6NAoRbuYrNKPWosJa7RNs1rq/H8yOUNKMtmn/dNz6wTaI9n6gHM0GXk8Tt+++Z8U287zKsjyP7v2huIelurCgW7zHjHhveQUAxITlzB03QAkX8IRtbBylgInWdB+08BOYmJiMeKVhFCUbnO8KNlH59shV8yQD8rWytSHPNGXwyIHS1ElvQAhAYMs5Qs77b1UkxcojT4y/FaNoGYu6ELbhVYOMQm9X/y2Pt86h7hcN3Jbp8BHRuCJOsGCbuT+NQxOL1va7EHr0hA7mJDiw5oXCEBxRMvSqiAnZZzN+/K5yb6ftTXzvZw++/VFnV5JOt1Ue2FLDYWLkXCogS711vIoTsAjZl3FgIe1E/QDggz54WbS6GjqfhWoN0uxeATtxml/Uou5+jKa+704ZHueT16os+rQcs+m2dp36CtGl/O7SiaMZocczmxbTUiyyRhwFlgBgHfs+scd3wamcn+XFUydu6LSr6iiMMpz3GXE7mkBw5bWnLOmpX+DgV1bhnCrVkfaPH0WgaR1L6I2YB7GiBP5ntaXVmIIPLhLDT2S2Yr36plkJKkUk2aBJPqkgPozrBO5CuU0WDl4GWVv+SV2fyvjn4PzeB0mHBlPuS8cE3gbfA3G9BLBs3eqzvlqc6EJseadZsILEdoMqV+uX3USiGTJtpcMjzOOjbZrNyKcDgb9EX4nuZjZZaQHN8GxOjmfEuXHuvqk8V5e9REjjgLtkGGGjIHJkTWyfG5va2Wcsif3B5pBhbqMTELM2FivKkKMbIoM3rpJh08sdbe8hX6aLcQjElytM/HZ0D57avqQdglEeK5yNxS3nv92cb4hQT13HhwpRSmHO8skV8a2E4wWRFZEugvwahRuQ4typh4SubDQ1sEQKVHY8TxNLO2+G3aiCNHQ5MhCKn/r2s5gVv2zaBMhh3xTz9wB719nmrb1GRGnxQjWP6oICkHV+EfqKF2hWKmouagfn3DjxSEFN2Un1ADR/2jx6vB8/iTmMo0hCdG6uPbEczvl0sQvaY6isw==';const _IH='b1929e907e079d04964944d3d2c75595beb190678a4ae5edf12c300501219900';let _src;

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
