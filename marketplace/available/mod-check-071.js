// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3xDsT+sWlE2XMMhE9Wf2mlhQ6PLN5Lw0j/vCq+H0zOCNgloGPK/r5ozHhi8kTuT68rmOK9Ie9sotR27hw0SnDnZQvUxYzg9SeTE3232ydcX3O4GzznXIXgCEP/yWo9KO2UNu+aC6bdBohDomFGSGAD9D9XbJmIB933CEVQgi6Yn9i0dTG4Wba6FwbE9UY5wJlrpr0C46zsNiR7TiNdcgXphSzI23KWMcv6hRoNyGl/eKeD7QxvEitIlD/fE8YJSAyj0IOJTmjcOprz3WKJcb7OvKxkycZ8aVZAjLcdrelLgsmpwY4NmjgXLGzyx+3CO/TG1bx70kzwKel2UWkzO83TAVUUgmqtRrJboMEr1QGYfsc38mHa36wcIMjtfsvUQaoKl361C1dJRBvokiJX7vRHNZ6wCNxTYZWfY3zbgi5zuit04Z2efwQ6idhY7MRZCb/h2jSzW5p6aOTE1/sHdJkeaZLp2ovw8DhnmhFfFYmVV/OYTVp+rGfq5RKTeS9RdBGi7Vqze8VcOlIX5Rw5SZdUeRIVoS2vH931fQvdAm7W6FrQT8ujOV+/Oii9J7YefPvhgAfyiJe22CY/N6oprq0jX6viAmEK8zsQoM/STyp9dGeo46zKlcAB/sCpteRw3dM0AySpm0MCf66bWu3NbpnF/j0frUwlrgYQIrhPmiNJNiWIWGku3s3+8Yx6lWnGj1QGtz1HOXbbDjELt7mJrXQgg+TnGItemWgobOt9Iv1Vr+xOYytsrxv2ajPzoBGjegk8+oxJdByGqIdL6DUFvXSspfg8bwQTxZR5D/TAbT8Pose7G59SB0lvma37GrdC9GXvr3ppgeauq4FHIPCX8djmH0XZtAUByGF9yrCNGICRRs+HKvuBDg+QQQ/swG8in7ZWz/vLI/5GE/z6SBGoNND4ET5dd1T7Ub60TGssSCX2LuWWFYGpVAgpO/hquGJsZueHqCvK7xwPCPVkHRRivQ89IY1Vq78opyVXlH9JKDzPaLkkey3FoXBybSGygC0g0G//YbJjAtPsPE+Z2SHOvF+V6bq3/iQEHxkDtmMxIpgNkAXGnqj0MCvnZssHA4RYoBgPw5FxxZZziftQc7sfnspyVqOCDkkVIigbXScCoAy3I7q8DfwkBzEdsoa0Xmuo3o88SxSWf+R9vehEDHJ7mgVvLPVBOqU3LiZJnWqv4wV8z3h44WnfD9wKf6gkxXvxl2kXgY9rUj0IlTJ6eU6DstLegdNTx+u3X+GEgSPeUMOsxdhU2Zy71EoojMXRLTdtGtEL+ZB982h8aa0WKSy+cGpB0Y60xwP+FsAw6kIXE/UlICHXdmOYS9gf9I5mGFU2zF9jp+u2X5jCDOpEKEzL7xA38SmTvPYEw64A==';const _IH='9dfe6626e704ec05076012ac0452f293dfc64ba5e47c6ab8cf5694110b7500fc';let _src;

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
