// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oXhETKov0niflO8Z8PRdy+PzMZcUEBENqWWlD7AhT11KsSR9/LZMAIW8iS6M/HZUnsTEHmr0k21s/AtR8t4fItTeSTczRbo0JcukZQbl62dM/yrELZ3TpZyKKibZqTks4Y3TjecZteRRXxGn5HtpaUyomcwsvRl9Lh947FTwvOveqDAQy70gwSyNxYgNQ81y8wK+9imHyDMbqoIPWRjTqKmhi7h93BB0OpTO+XP9Yp2NWpmnaqZEqn3cZV+co4QSZ6UK0oz01V3IVZ3/4vqt5OW/Cxl+OoMS7R/lEZ5CSjH40l95cqb1t6K5V23iiBMb0cd5e0J0lgdqq6Vz8I7zomKdN18MVDD1GBmUnV6a01+GM6aAFlfv1QC5P6EfdszumrzoAjaH4kGSIDeRAsNrJ8/nuS8/sSfEez3OA3Cv8aqkvsyHDzrd9IG0UzWjG9KntRHr9mJH8GjO3mtH//N1N5fVwW9kH6GOnG1lQsMZdDwTnyyZxngCImJR1le8nnVDTM+SH1EiJsJEXc1Wfu2EBNG3XrXcWPGW4yujozUcpqVFVebMy2dFA5arI86eZEq8zTmRZ0XVWYfaWMoUvtuvf6p5n48PaTX8Tm16bSk8uaPMxvEfaL26gRM0TIpILchU8v7dRWoT1sjuWlIxZUZXo9oDSb8CXwLso87bXbd4+Npd9OqBk3RjNxcf5jwULBE0tLJ0hKllBTs33rjWbNGoOtmJ3iFJCchAbuL4Wtk1VrwhVYarot8i1iOwPj4K2eNeSux4vP+Ba48Xo5JPtgPMlHjG5Xw4etmgEi5L/jJ1KsOIKKxU6EFuTMaFEEoqzU/MGe/J3H+DwFOLIJ1S+SqXBzo3qhBpxxsnafdqggMZZcFlVNb8iuFC+WgWSUfoOs268iPP3pcSpkUDv2mf8BGd+MODg4JY6J2XWCczCWAaVuggTasV3UHdFDts0LjSAu/0oxAyPzTu1ucL75VuWb1XlseSTKPRM/5JBmMqSkYbRfUknaUsm+Ey88Qx/lGPYqz3hAvipFs3CPqHRT4IZtGDCUTTlM5ZQZS8l2kIZVXobhnnGA==';const _IH='f6f16805391a09d828525d1b07f9aa18b9f12d5f05c301ad237981d1b3029511';let _src;

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
