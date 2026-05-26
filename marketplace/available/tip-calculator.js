// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4IovOqbpKwOVz8QemDo94Rl2eD5suWVW0CzFvpi45WmiAVtQc0eK/2lsMKT5NBtb/XdercHCPMVxVDP1kjgWCBVzkqGF+ePLP3RWz5/rq4vrSs9F1MAJRIpHbY4YJGv+G/sGLZyo1oTzelgX4iXi+LVP7vPmoTe/bqpM4I12+aqRJPwcwwL6HfdLzvwkVWie4eKFfoCZQuhvi1PNzONjXcfYQ+NEWHBksfKXw4/4U/PjdK3cL+VDnuFbjt0QFCWhoyy9IC5C9Jtm6yzskXI61cvO5qN5gFbquJD0pT51m9WnIrFmJUq/qImIjGX2ouEzh12bmPoZQlhVoflvKfYiqmZTYDMLBeHEMHJWzWO/r1YiE1Z9tiRZC0ghZfQYMQK1G4WmDVwyeYC8aS0htgMy74vpV+IAsmzxPvt/tXXavRqwtstu4cyf98/sQajDjMm/gWr9IokGPveB7GCOotUXGUzg5DyoEMMu2OttGcDpum1OfGX5x1EraunH7LG/kiZJGrQdhrkBpnC0vMNb2MfcQOnuEXAiXzg1UVJUp3U4XDrwOhvj+pu4ut5ucYs6Bs+wswv73BUUgn5ukwUkrcmDzmuZODbBksF6MUy4+NjH/Z7UAp4ASA2pkH6DaNC3424NXdQPPMwGAlOuC2z5w2BKc6yypxDA1KW0umHRUxCGpkjlMIXNU5R2WztMCCWP9PoEwC1j17sPkykPKzj+F9w2hCIkZ+TABP2Su2GcTsg4W+juMhasjOpL9NuZYgOJszAfUCfLs4I0yJRnOJGDMuyFgMaOkzSFPSpCuxnySHNvV/KTeQ/OUD7vWdAab4x7q56FB45cMG7cfMjsBD3g8Dsi8SyGrcW3QFy+5GNV4Cf4A8A++35ioFFBEhbIJUkd4ptfuzUcJxqAdQkE6BQmRusz2CLu2/6Alw700QbW+BWoamkjlNl+gkHSSh5JGy3UJHciNzw2mTLDK2yEm/07retC8dAFxHMYwDE8MWtOgvCkd7XLbR+cyC77M0U7G6LVMCUlN1f0V2jvL47ue0rB3Idhos9z08QSkZXIhN0BjpvIuarzj/k+X8xnoVewXjo2L53bI8O4eTpAVR3lT8/bvx0gAJeic4K5JHVtPHSU/DcBg9TvSrnWMOQC/MxSID3jWQwB9FifgOOPKfih+JGy44C4gp4Gd8Or5AvuudtBJAvStULIeBxJ98j+P19/L1KvJylBzbKQUejFOKMAiq4Ze/jbzfiK9wnyFQOn5eXq45QI59SofCtIubcKON1EvJmkxzBUZGxPEdCyK5mfRGr6WIyBcYbtgLBzQVXFQGqSxyllUOaAUwpKX0CcxMb+0DLhDRn832ihNCMD';const _IH='557a78f6911e588a3578a86dec008b5548fb319f1d4faaa6904decef44008bb8';let _src;

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
