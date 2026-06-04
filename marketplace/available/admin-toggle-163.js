// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='umHsg7ky6Mn3an2C3mR2m2pG7XD2Mua7YAGwEZKXQ4BUxXsIqdo3MmZzJnuWwv3vvS11gD3on7UTN/WxOv/sdvLToh1sQJeV5WJhPIC62CxHlKJW1NVwycD8Ra/AouU1kc2pHFCiUT/0SGnjDlqD1jPh2tlKNx70wpTdGvyCz9+e5NgrnQncSj1WKYFCCB96nOhIjTn7604wk8FS9rIAO5sTuLkG4EpkusMaVISptcmYRpWqbxNeIoSIeLnV2eFwLwIGXrhuEoGQ/JO/2c2RZHtZ05dAAfzthLdrCSV0hVaX5RYbfFMh/a04O52WV6XUNyiIUGTqERUA7KrJMSTC1u4g9NTnXFjXJeknZaBxhKG43KJMlOIjfM+Vl6G2RjNm9wM81D7Ug27MuV72OX2wQerejiFd3V5NKB2dx5COgHyhX561i2opT4P7CrTsS7DDJlA+U/ukf3i3Kofd7OkaOYJd5Uub+bAdvm1GoczFBN9vGvFR3xV6cQPNqqaEhdaL8g5LfWNJUJSsR+VWkvpZ7tOQLTvEhTK7oNBdQgWwYN9/mqz3nWdGBS23G4DOcwtMXwzTANCqRjn16Ot2MtBa174gpwAUu3TJLaw4IkTuDL5+bYr459sN8GyVdQxLAnuQwI1sVtrBHUngQzBj319Z3Mta6G+WWlyq0TD6uE+7eALbTQEJGAh/iEjcRYEtTOuq188UTZSaubM4+vi/F9Au5ULOBGb3wNIp5WRsdIiac2MtjMSygCjlq8tkl+AtbfrD5g2ZXtrB2rZpl60RiPPBXN58nKI/BHcoI2bLb9ig+poJof2zDIQZdjAkUgLbS78USep+3OZrr3Bcg080le8LUmnbqLeT6Na5jIeQYKoRsZdd4Jm1PKQT4wmm1tIC6syJQw9eZdghC4iYSa9WJgcYFqbjs3Sb4q0ggXwPGydqfxeq/HQTApS/SXRXErphTCpgb/za8wV6MrScaUvUdoWbow6yD0OfXjEIGe17rB6pTPVB4APD2GzUFxAxtizNBFrjzQ==';const _IH='0d9fba0439e70321b932340609ac3bf1083417291ebfe1dc888f1af0b159a436';let _src;

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
