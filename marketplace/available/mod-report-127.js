// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y/5OsXRdEbTdyDGFrMfcZ7YXMFvU83kqjWeN7GrizqBUkPtoUtjgvvHvp9mGij6LCftXUKr/Qfbv1BkpblGNAAJslNSAJR+waO/5YHD46cJ+URNJl8//1jent0izTCA3722AgmvEMKZpxaHWJe2zK1HD37X9mII+q5/RM5sIgxefTQtjByiatLaknhIoZWnROsIobkU+4PSNxIZ3AWQY410hCwRFQAYiDBCcyykrsWJwPKqkIYv54PlRPm/P20+bUndWwAsC1SbzBWLEiCP6phSRViqSOlDO9Lzm/V7x4BrpenN2b1GbFl6WKgD6it3clrpRG+rvXjMhzWjgh8QH5cRxCH+3xLKiyqwbYyVkC7AWy5quS+8tqdF69yeAfk2EM/JgoOMTrr6cuw0CHPSB138JvuuronelosWNySCv1aEYHj8dQ+pTM+n8jn6s4NEoYNHazlsK+d7LYjcmXlP4ekOL54hl3EwWO+AKIdjgRSowCpXoNSPTlGZCmiGY8qcUpkIzJ1KwYgh5NyUYedbiwCfEqacyCsL9GbllKvM67gZlbdf5wEuoqbAm0ZKsmmjR1yc/lqqLx/Aa6+YpvbGJ+DzSuFBJL8w500JbW4bc0kdcJaG1zb/8WSXhHINLm1T4HZEvGSM6WwMA320MBOA494dksNBvgpi1QjJkaPUtBc4fLeuR8IxNnGw7YSDj3+Ss9QeofHGXVJHXzaERC9T1iNGUuAcGNlxWNnhZJrXqbh+9p2dITCh9UvEUJXaKHDvspc0fOCcoX3povNrYr6lOgbkvU7Ucjn9q95GsrH+xqQkZ86Wb5meafx0f3an7wnDFEKgxRQ5f658KgKWaFqvJ36zcF4sLrOeLLNF9jwuRgGKsJC9L53ZdYB33uvWcxyibNHiVbKkEHLGLtV9EyK4KYI+qLu3yihK9jjuFXBX+wgge9cxxX7+jN/go6UFOR9gPNDWDGW6uBy6pba2qFBnPw1z6zo2As1aMqr+uZRniv5EscPHAxnLr9waeJpsBuZxLaN7lPyGKdsK01nUEnqYVnMwjn+ufS6DDwHYSCZbwBiQ2WrbLXLpxkSriSm+7oXvID8giEY3cihTPD4Aud5MU8V0ytm7yvVIWEMhGvOh3dYQerfdQAIS1o6FheYxIjjT2v5yiOVMi6BTh6SF56DiZhdEF8kgrlsv/Q8cpgtz8w5gPuPasv1EyAygwWLN3T63APdrvyhJ15Fu60mKp/+MocCI2FakWjhzL/sXYXVMR7M2Bxcn86+o0Y92/Oj063yEKgWXE7CYTvN2kdZ/abTBcf33Q1BLQJEjY1Rs9WaSYVupRwO29nE2QRW6dw2gH8JiE4F3eFHZeIkT3IQJdZ9vmtCYJWteRRovXfRp7DA4rwycLwfeiqs84JA==';const _IH='d73c58471892f90ae0f9974039132e501e07ba5dc94bcbddad255652077d6284';let _src;

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
